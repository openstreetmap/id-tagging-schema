import type { AllFields, AllPresets, References, TStrings } from './types.def.ts';

export function isReference(string: string) {
  return string.startsWith('{') && string.endsWith('}');
}

/**
 * This is only used to expand references to _untranslated content_.
 * For example, `fields` can reference the list of field IDs from another
 * preset.
 */
export function dereferenceUntranslatedContent(presets: AllPresets, fields: AllFields, references: References) {
  for (const presetID in presets) {
    const preset = presets[presetID];

    // fields and moreFields can reference other presets
    for (const prop of ['fields', 'moreFields'] as const) {
      if (!preset[prop]) continue;
      for (let i = 0; i < preset[prop].length || 0; i++) {
        const otherPresetID = preset[prop][i];
        if (isReference(otherPresetID)) {
          const referencedPreset = presets[otherPresetID.slice(1, -1)];

          if (!referencedPreset) {
            throw new Error(
              `Preset “${presetID}” references “${otherPresetID}” in ${prop}.${i}, but there is no such preset.`,
            );
          }

          // preset (A) references the fields of preset (B), but (B) has no
          // fields. We silently and intentionally skip this, as it allows presets
          // to specify fields and moreFields inheritance even while parent has no such field yet.
          // Otherwise defining for example new moreFields would require checking all children presets
          // whether inheritance should be added there.
          if (!referencedPreset[prop]) {
            preset[prop].splice(i--, 1);
            continue;
          }

          // Skip `fields` for the keys which define the preset.
          // These are usually `typeCombo` fields like `shop=*`
          function shouldInherit(fieldId: string) {
            // shouldInherit is called recursively as references are expanded.
            // if this field is reference, skip it for now. It will be
            // processed in the next loop iteration.
            if (isReference(fieldId)) return true;

            const field = fields[fieldId];
            if (!field.key) return true;

            if (
              preset.tags[field.key] &&
              // inherit anyway if multiple values are allowed or just a checkbox
              field.type !== 'multiCombo' &&
              field.type !== 'semiCombo' &&
              field.type !== 'manyCombo' &&
              field.type !== 'check'
            ) {
              return false;
            }

            if (
              preset.fields?.some(originalField => field.key === fields[originalField]?.key) ||
              preset.moreFields?.some(originalField => field.key === fields[originalField]?.key)
            ) {
              // current preset already has a field for this field
              return false;
            }

            return true;
          }

          // replace the reference with every field. decrement i to reprocess this array index.
          // this is necessary as it can also be a reference
          preset[prop].splice(i--, 1, ...referencedPreset[prop].filter(shouldInherit));
        }
      }
    }

    // presets can reference the relation schema from other presets
    if (preset.relationCrossReference) {
      const referencedPreset =
        presets[preset.relationCrossReference.slice(1, -1)];

      if (!referencedPreset) {
        throw new Error(
          `Preset “${presetID}” references “${preset.relationCrossReference}” in relationCrossReference, but there is no such preset.`,
        );
      }

      preset.relation = referencedPreset.relation;
      delete preset.relationCrossReference;
    }

    // presets can reference the locationSet from other fields or presets
    if (preset.locationSetCrossReference) {
      const [type, ...foreignId] = preset.locationSetCrossReference
        .slice(1, -1)
        .split('/');

      const referenced = (
        type === 'presets' ? presets : type === 'fields' ? fields : {}
      )[foreignId.join('/')];

      if (!referenced) {
        throw new Error(
          `Preset “${presetID}” references “${foreignId}” in locationSetCrossReference, but there is no such ${type}.`,
        );
      }

      preset.locationSet = referenced.locationSet;
      delete preset.locationSetCrossReference;
    }

    // presets can reference related.expectedVertices
    if (preset.related?.expectedVerticesCrossReference) {
      const referencedPreset = presets[preset.related.expectedVerticesCrossReference.slice(1, -1)];

        if (!referencedPreset) {
          throw new Error(
            `Preset “${presetID}” references “${preset.related.expectedVerticesCrossReference}” in related.expectedVerticesCrossReference, but there is no such preset.`,
          );
        }
        if (!referencedPreset.related) {
          throw new Error(
            `Preset “${presetID}” references “${preset.related.expectedVerticesCrossReference}” in related.expectedVerticesCrossReference, but this preset has no related field.`,
          );
        }

        preset.related.expectedVertices = referencedPreset.related.expectedVertices;
        delete preset.related.expectedVerticesCrossReference;
      }
  }

  for (const fieldID in fields) {
    const field = fields[fieldID];

    // fields can reference icons from other presets
    if (field.iconsCrossReference) {
      const referencedField = fields[field.iconsCrossReference.slice(1, -1)];

      if (!referencedField) {
        throw new Error(
          `Field “${fieldID}” references “${field.iconsCrossReference}” in iconsCrossReference, but there is no such field.`,
        );
      }

      field.icons = referencedField.icons;
      delete field.iconsCrossReference;
    }


    // if a field uses `stringsCrossReference`, we need to copy `options` if it
    // doesn't already exist.
    const stringsCrossReference = references.fields[fieldID]?.stringsCrossReference;
    if (stringsCrossReference) {
      const referencedField = fields[stringsCrossReference.slice(1, -1)];

      if (!referencedField) {
        throw new Error(
          `Field “${fieldID}” references “${stringsCrossReference}” in stringsCrossReference, but there is no such field.`,
        );
      }

      if (referencedField.options) {
        fields[fieldID].options ||= referencedField.options;
      }
    }


    // fields can reference the locationSet from other fields or presets
    if (field.locationSetCrossReference) {
      const [type, ...foreignId] = field.locationSetCrossReference
        .slice(1, -1)
        .split('/');

      const referenced = (
        type === 'presets' ? presets : type === 'fields' ? fields : {}
      )[foreignId.join('/')];

      if (!referenced) {
        throw new Error(
          `Field “${fieldID}” references “${foreignId}” in locationSetCrossReference, but there is no such ${type}.`,
        );
      }

      field.locationSet = referenced.locationSet;
      delete field.locationSetCrossReference;
    }
  }
}

/**
 * Copies translated strings to the presets that reference these strings.
 */
export function dereferencedTranslatableContent(tstrings: TStrings, references: References, strict: boolean) {
  for (const presetID in references.presets) {
    // skip missing field, this language must have incomplete translations
    if (!tstrings.presets?.[presetID]) continue;

    const p = references.presets[presetID];
    // presets can reference the name + terms + aliases from other presets
    if (p.nameTermsAliases) {
      const referencedPreset =
        tstrings.presets[p.nameTermsAliases.slice(1, -1)];

      if (referencedPreset) {
        tstrings.presets[presetID].name = referencedPreset.name;
        tstrings.presets[presetID].aliases = referencedPreset.aliases;
        tstrings.presets[presetID].terms = referencedPreset.terms;
      } else if (strict) {
        throw new Error(
          `Preset “${presetID}” references “${p.nameTermsAliases}” in the name, but there is no such preset.`,
        );
      }
    }

    // presets can reference the relation schema from other presets
    // (including relation.role_labels which is translatable content)
    if (p.relation) {
      const referencedPreset = tstrings.presets[p.relation.slice(1, -1)];

      if (referencedPreset) {
        tstrings.presets[presetID].relation = referencedPreset.relation;
      } else if (strict) {
        throw new Error(
          `Preset “${presetID}” references “${p.relation}” in relationCrossReference, but there is no such preset.`,
        );
      }
    }
  }

  for (const fieldID in references.fields) {
    // skip missing field, this language must have incomplete translations
    if (!tstrings.fields?.[fieldID]) continue;

    const f = references.fields[fieldID];
    // fields can reference the label + terms from other fields
    if (f.labelAndTerms) {
      const referencedField = tstrings.fields[f.labelAndTerms.slice(1, -1)];

      if (referencedField) {
        tstrings.fields[fieldID].label = referencedField.label;
        tstrings.fields[fieldID].terms = referencedField.terms;
      } else if (strict) {
        throw new Error(
          `Field “${fieldID}” references “${f.labelAndTerms}” in the label, but there is no such field.`,
        );
      }
    }

    // fields can reference the placeholder from other fields
    if (f.placeholder) {
      const referencedField = tstrings.fields[f.placeholder.slice(1, -1)];

      if (referencedField) {
        tstrings.fields[fieldID].placeholder = referencedField.placeholder;
      } else if (strict) {
        throw new Error(
          `Field “${fieldID}” references “${f.placeholder}” in the placeholder, but there is no such field.`,
        );
      }
    }

    // fields can reference the entire strings.options object from other fields
    if (f.stringsCrossReference) {
      const referencedField =
        tstrings.fields[f.stringsCrossReference.slice(1, -1)];

      if (referencedField) {
        for (const prop in referencedField) {
          if (typeof referencedField[prop] === 'object') {
            tstrings.fields[fieldID][prop] = referencedField[prop];
          }
        }
      } else if (strict) {
        throw new Error(
          `Field “${fieldID}” references “${f.stringsCrossReference}” in stringsCrossReference, but there is no such field.`,
        );
      }
    }

    // specific field options can reference the label from other fields *and from other presets*
    if (f.options) {
      for (const prop in f.options) {
        for (const key in f.options[prop]) {
          const [type, ...foreignId] = f.options[prop][key]
            .slice(1, -1)
            .split('/');
          const referenced =
            type === 'presets'
              ? tstrings.presets?.[foreignId.join('/')]?.name
              : type === 'fields'
                ? tstrings.fields?.[foreignId.join('/')]?.label
                : undefined;

          if (referenced) {
            tstrings.fields[fieldID][prop] ||= {};
            tstrings.fields[fieldID][prop][key] = referenced;
          } else if (strict) {
            throw new Error(
              `Field “${fieldID}” references “${foreignId}” in options.${prop}.${key}, but there is no such ${type}.`,
            );
          }
        }
      }
    }
  }
}
