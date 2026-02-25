import { fileURLToPath } from 'node:url';
import { styleText } from 'node:util';
import fs from 'fs';
import jsonschema from 'jsonschema';
import path from 'path';
import shell from 'shelljs';
import YAML from 'js-yaml';
import marky from 'marky';
import { createRequire } from 'module';
import { compile, toSafeIdentifier } from 'json-schema-to-typescript-lite';

import fetchTranslations from './translations.js';

const require = createRequire(import.meta.url);

const fieldSchema = require('../schemas/field.json');
const presetSchema = require('../schemas/preset.json');
const categorySchema = require('../schemas/preset_category.json');
const defaultsSchema = require('../schemas/preset_defaults.json');
const deprecatedSchema = require('../schemas/deprecated.json');
const discardedSchema = require('../schemas/discarded.json');

let _currBuild = null;

function validateData(options) {
  const START = '🔬  ' + styleText('yellow', 'Validating schema...');
  const END = '👍  ' + styleText('green', 'schema okay');

  process.stdout.write('\n');
  process.stdout.write(START + '\n');
  marky.mark(END);

  processData(options, 'validate');

  marky.stop(END);
  process.stdout.write('\n');
}

function buildDev(options) {

  if (_currBuild) return _currBuild;

  const START = '🏗   ' + styleText('yellow', 'Validating and building for development...');
  const END = '👍  ' + styleText('green', 'built for development');

  process.stdout.write('\n');
  process.stdout.write(START + '\n');
  marky.mark(END);

  processData(options, 'build-interim');

  marky.stop(END);
  process.stdout.write('\n');
}

function buildDist(options) {

  if (_currBuild) return _currBuild;

  const START = '🏗   ' + styleText('yellow', 'Validating and building dist files...');
  const END = '👍  ' + styleText('green', 'dist files built');

  process.stdout.write('\n');
  process.stdout.write(START + '\n');
  marky.mark(END);

  return _currBuild = processData(options, 'build-dist')
    .then(() => {
      marky.stop(END);
      process.stdout.write('\n');
      _currBuild = null;
    })
    .catch((err) => {
      process.stderr.write(err);
      process.stdout.write('\n');
      _currBuild = null;
      process.exit(1);
    });
}

function processData(options, type) {
  if (!options) options = {};
  options = Object.assign({
    inDirectory: 'data',
    interimDirectory: 'interim',
    outDirectory: 'dist',
    sourceLocale: 'en',
    taginfoProjectInfo: {},
    processCategories: null,
    processFields: null,
    processPresets: null,
    listReusedIcons: false
  }, options);

  const dataDir = './' + options.inDirectory;

  // Translation strings
  let tstrings = {
    categories: {},
    fields: {},
    presets: {}
  };

  // all fields searchable under "add field"
  let searchableFieldIDs = {};

  const deprecated = read(dataDir + '/deprecated.json');
  if (deprecated) {
    validateSchema(dataDir + '/deprecated.json', deprecated, deprecatedSchema);
  }

  const discarded = read(dataDir + '/discarded.json');
  if (discarded) {
    validateSchema(dataDir + '/discarded.json', discarded, discardedSchema);
  }

  let categories = generateCategories(dataDir, tstrings);
  if (options.processCategories) options.processCategories(categories);

  let fields = generateFields(dataDir, tstrings, searchableFieldIDs);
  if (options.processFields) options.processFields(fields);

  let presets = generatePresets(dataDir, tstrings, searchableFieldIDs, options.listReusedIcons);
  if (options.processPresets) options.processPresets(presets);

  // Additional consistency checks
  validateCategoryPresets(categories, presets);
  validatePresetFields(presets, fields);

  const defaults = read(dataDir + '/preset_defaults.json');
  if (defaults) {
    validateSchema(dataDir + '/preset_defaults.json', defaults, defaultsSchema);
    validateDefaults(defaults, categories, presets);
  }

  if (type.indexOf('build') !== 0) return;

  const sourceLocale = options.sourceLocale;

  const interimDir = './' + options.interimDirectory;
  if (!fs.existsSync(interimDir)) fs.mkdirSync(interimDir);
  shell.rm('-f', [interimDir + '/*']); // clean directory

  let translations = generateTranslations(fields, presets, tstrings, searchableFieldIDs);

  let translationsForYaml = {};
  translationsForYaml[sourceLocale] = { presets: translations };
  fs.writeFileSync(interimDir + '/source_strings.yaml', translationsToYAML(translationsForYaml));

  let icons = generateIconsList(presets, fields, categories);
  fs.writeFileSync(interimDir + '/icons.json', JSON.stringify(icons, null, 4));

  if (type !== 'build-dist') return;

  const doFetchTranslations = options.translOrgId && options.translProjectId;

  const distDir = './' + options.outDirectory;
  if (!fs.existsSync(distDir)) fs.mkdirSync(distDir);
  // clean directory
  shell.rm('-f', [distDir + '/*.*']);
  if (doFetchTranslations) {
    shell.rm('-rf', [distDir + '/translations']);
  }

  fs.writeFileSync(distDir + '/preset_categories.json', JSON.stringify(categories, null, 4));
  fs.writeFileSync(distDir + '/fields.json', JSON.stringify(fields, null, 4));
  fs.writeFileSync(distDir + '/presets.json', JSON.stringify(presets, null, 4));

  let taginfo = generateTaginfo(presets, fields, deprecated, discarded, tstrings, options.taginfoProjectInfo);
  if (taginfo) fs.writeFileSync(distDir + '/taginfo.json', JSON.stringify(taginfo, null, 4));

  if (defaults) fs.writeFileSync(distDir + '/preset_defaults.json', JSON.stringify(defaults, null, 4));
  if (deprecated) fs.writeFileSync(distDir + '/deprecated.json', JSON.stringify(deprecated, null, 4));
  if (discarded) fs.writeFileSync(distDir + '/discarded.json', JSON.stringify(discarded, null, 4));

  let translationsForJson = {};
  translationsForJson[sourceLocale] = { presets: tstrings };

  if (!fs.existsSync(distDir + '/translations')) fs.mkdirSync(distDir + '/translations');
  fs.writeFileSync(distDir + '/translations/' + sourceLocale + '.json', JSON.stringify(translationsForJson, null, 4));

  const tasks = [
    // Minify files
    minifyJSON(distDir + '/preset_categories.json', distDir + '/preset_categories.min.json'),
    minifyJSON(distDir + '/fields.json', distDir + '/fields.min.json'),
    minifyJSON(distDir + '/presets.json', distDir + '/presets.min.json'),
    minifyJSON(distDir + '/taginfo.json', distDir + '/taginfo.min.json'),
    minifyJSON(distDir + '/preset_defaults.json', distDir + '/preset_defaults.min.json'),
    minifyJSON(distDir + '/deprecated.json', distDir + '/deprecated.min.json'),
    minifyJSON(distDir + '/discarded.json', distDir + '/discarded.min.json'),
    minifyJSON(distDir + '/translations/' + sourceLocale + '.json', distDir + '/translations/' + sourceLocale + '.min.json'),
    generateTypeDefs(distDir),
  ];

  if (doFetchTranslations) {
    tasks.push(fetchTranslations(options));
  }
  return Promise.all(tasks);
}


function read(f) {
  return fs.existsSync(f) && JSON.parse(fs.readFileSync(f, 'utf8'));
}


function validateSchema(file, instance, schema) {
  let validationErrors = jsonschema.validate(instance, schema).errors;

  if (validationErrors.length) {
    process.stderr.write(`${file}: \n`);
    validationErrors.forEach(error => {
      if (error.property) {
        process.stderr.write(error.property + ' ' + error.message);
      } else {
        process.stderr.write(error + '\n');
      }
    });
    process.stdout.write('\n');
    process.exit(1);
  }
}


function generateCategories(dataDir, tstrings) {
  let categories = {};

  fs.globSync(dataDir + '/preset_categories/*.json', {
    posix: true,
  }).forEach(file => {
    let category = read(file);
    validateSchema(file, category, categorySchema);

    let id = 'category-' + path.basename(file, '.json');
    tstrings.categories[id] = { name: category.name };
    delete category.name;

    categories[id] = category;
  });

  return categories;
}


function generateFields(dataDir, tstrings, searchableFieldIDs) {
  let fields = {};

  fs.globSync(dataDir + '/fields/**/*.json', {
    posix: true,
  }).forEach(file => {
    let field = read(file);
    let id = stripLeadingUnderscores(file.match(/fields\/([^.]*)\.json/)[1]);

    validateSchema(file, field, fieldSchema);

    let t = tstrings.fields[id] = {};

    const label = field.label;

    if (!label.startsWith('{')) {
      t.label = label;
      delete field.label;
    }

    validateTerms(field.terms, `field "${id}"`);
    tstrings.fields[id].terms = Array.from(new Set(
      (field.terms || [])
        .map(t => t.toLowerCase().trim())
        .filter(Boolean)
    )).join(',');
    delete field.terms;

    if (field.universal) {
      searchableFieldIDs[id] = true;
    }

    if (field.placeholder && !field.placeholder.startsWith('{')) {
      t.placeholder = field.placeholder;
      delete field.placeholder;
    }

    if (field.strings) {
      for (let key in field.strings) {
        t[key] = field.strings[key];
      }
      if (!field.options && field.strings.options) {
        field.options = Object.keys(field.strings.options);
      }
      delete field.strings;
    }

    fields[id] = field;
  });

  return fields;
}


function stripLeadingUnderscores(str) {
  return str.split('/')
    .map(s => s.replace(/^_/,''))
    .join('/');
}


function generatePresets(dataDir, tstrings, searchableFieldIDs, listReusedIcons) {
  let presets = {};

  let icons = {};

  fs.globSync(dataDir + '/presets/**/*.json', {
    posix: true,
  }).forEach(file => {
    let preset = read(file);
    let id = stripLeadingUnderscores(file.match(/presets\/([^.]*)\.json/)[1]);

    if (presets[id] !== undefined) {
      process.stderr.write(`Preset with id "${id}" defined multiple times\n`);
      process.stdout.write('\n');
      process.exit(1);
    }

    validateSchema(file, preset, presetSchema);

    let names = new Set([]);
    tstrings.presets[id] = {};

    if (!preset.name.startsWith('{')) {
      tstrings.presets[id].name = preset.name;
      names.add(preset.name.toLowerCase());
      // don't include localized strings in the presets dist file since they're already in the locale file
      delete preset.name;
    }

    preset.aliases = Array.from(new Set(
      (preset.aliases || [])
      .map(t => t.trim())
      .filter(Boolean)
      .filter(t => !names.has(t.toLowerCase()))
    ));
    preset.aliases.forEach(a => names.add(a.toLowerCase()));

    validateTerms(preset.terms, `preset "${id}"`);
    preset.terms = Array.from(new Set(
      (preset.terms || [])
        .map(t => t.toLowerCase().trim())
        .filter(Boolean)
        .filter(t => !names.has(t))
    ));

    if (preset.aliases.length) tstrings.presets[id].aliases = preset.aliases.join('\n');
    if (preset.terms.length) tstrings.presets[id].terms = preset.terms.join(',');

    // don't include localized strings in the presets dist file since they're already in the locale file
    delete preset.aliases;
    delete preset.terms;

    if (preset.moreFields) {
      preset.moreFields.forEach(fieldID => { searchableFieldIDs[fieldID] = true; });
    }

    presets[id] = preset;

    if (preset.searchable !== false) {
      let icon = preset.icon || '(none)';
      if (!icons[icon]) icons[icon] = [];
      icons[icon].push(id);
    }
  });

  if (listReusedIcons) {
    const reuseLimit = typeof listReusedIcons === 'number' && listReusedIcons > 0 ? listReusedIcons : 1;

    let reusedIconPresetCount = 0;
    const reusedIcons = Object.keys(icons).filter(function(iconID) {
      const presetIDs = icons[iconID];
      if (presetIDs.length > reuseLimit) {
        reusedIconPresetCount += presetIDs.length;
        return true;
      }
      return false;
    });

    if (reusedIcons.length > 0) {
      process.stdout.write(reusedIcons.length + ' icon(s), including (none), are each used more than ' + reuseLimit + ' time(s), affecting ' + reusedIconPresetCount + ' presets\n');

      reusedIcons.sort(function(iconID1, iconID2) {
        return icons[iconID2].length - icons[iconID1].length;

      }).forEach(function(iconID) {
        const presetIDs = icons[iconID];
        process.stdout.write(iconID + ', ' + presetIDs.length + '\n');
        for (let i in presetIDs) {
          process.stdout.write('-' + presetIDs[i] + '\n');
        }
        process.stdout.write('\n');
      });
    } else {
      process.stdout.write(styleText('green', 'No icon is used more than ' + reuseLimit + ' time(s) across all searchable presets\n'));
    }
  }

  return presets;
}


function generateTranslations(fields, presets, tstrings, searchableFieldIDs) {
  let yamlStrings = JSON.parse(JSON.stringify(tstrings));  // deep clone

  for (let fieldId in yamlStrings.fields) {
    let yamlField = yamlStrings.fields[fieldId];
    let field = fields[fieldId];
    let options = yamlField.options || {};
    let optkeys = Object.keys(options);

    if (field.keys) {
      yamlField['#label'] = field.keys.map(k => `${k}=*`).join(', ');
    } else if (field.key) {
      yamlField['#label'] = `${field.key}=*`;
    }
    optkeys.forEach(k => {
      if (typeof options[k] === 'string' && options[k].startsWith('{')) {
        // skip, this references another field or preset, so we don't want
        // translators to translate it.
        delete options[k];
        return;
      }

      if (typeof options[k] === 'string'){
        options['#' + k] = field.key ? `${field.key}=${k}` : `field "${fieldId}" with value "${k}"`;
      } else {
        options[k]['#description'] = `description for ${field.key}=${k}`;
        options[k]['#title'] = `title for ${field.key}=${k}`;
      }
    });

    if (field.locationSet?.include) {
      yamlField['#label'] += ` | Local preset for countries ${field.locationSet.include.map(country => `"${country.toUpperCase()}"`).join(', ')}`;
    }

    if (yamlField.placeholder) {
      yamlField['#placeholder'] = `${fieldId} field placeholder`;
    }

    if (searchableFieldIDs[fieldId]) {
      if (yamlField.terms) {
        yamlField['#terms'] = 'terms: ' + yamlField.terms;
      } else {
        delete tstrings.fields[fieldId].terms;
      }
      if (yamlField.label) {
        yamlField.terms = `[translate with synonyms or related terms for '${yamlField.label}', separated by commas]`;
      } else {
        delete yamlField.terms;
      }
    } else {
      delete tstrings.fields[fieldId].terms;
      delete yamlField.terms;
    }
  }

  for (let presetId in yamlStrings.presets) {
    let yamlPreset = yamlStrings.presets[presetId];
    let preset = presets[presetId];
    let tags = preset.tags || {};
    let keys = Object.keys(tags);

    if (keys.length) {
      yamlPreset['#name'] = keys.map(k => `${k}=${tags[k]}`).join(' + ');
      if (yamlPreset.aliases) {
        yamlPreset['#name'] += ' | ' + yamlPreset.aliases.split('\n').join(', ');
      }
      yamlPreset['#name'] += ' | Translate the primary name. Optionally, add equivalent synonyms on newlines in order of preference (press the Return key).';
    }

    if (preset.locationSet?.include) {
      yamlPreset['#name'] += ` | Local preset for countries ${preset.locationSet.include.map(country => `"${country.toUpperCase()}"`).join(', ')}`;
    }

    if (preset.searchable !== false) {
      if (yamlPreset.terms) {
        yamlPreset['#terms'] = 'terms: ' + yamlPreset.terms;
      } else {
        delete yamlPreset.terms;
      }
      if (yamlPreset.name) {
        yamlPreset.terms = `<translate with synonyms or related terms for '${yamlPreset.name}', separated by commas>`;
      }
    } else {
      delete tstrings.presets[presetId].terms;
      delete yamlPreset.terms;
    }
    delete yamlPreset.aliases;
  }

  return yamlStrings;
}


/**
 * @import * as Taginfo from 'taginfo-projects'
 *
 * this library doesn't follow the type-defintions strictly, it uses `string[]` instead
 * of `string` for the description field.
 *
 * @typedef {Omit<Taginfo.Tag, "description"> & { description?: string[] }} TaginfoTag
 * @typedef {Omit<Taginfo.Schema, "tags"> & { tags: TaginfoTag[] }} TaginfoSchema
 */

/**
 * @param {Taginfo.Project} projectInfo
 */
function generateTaginfo(presets, fields, deprecated, discarded, tstrings, projectInfo) {

  const packageInfo = JSON.parse(fs.readFileSync('./package.json', 'utf8'));

  if (!projectInfo.name) projectInfo.name = packageInfo.name;
  if (!projectInfo.description) projectInfo.description = packageInfo.description;

  projectInfo.description +=
      ' The following mnemonics are used in individual tag descriptions to annotate in which context the respective tag is supported:' +
      ' 🄿: preset, 🄵 field, 🄵🅅: field value, 🄳: deprecated tag, 🄳🄳: discarded tag';
  const requiredProps = ['name', 'description', 'project_url', 'contact_name', 'contact_email'];
  for (let i in requiredProps) {
    if (!(requiredProps[i] in projectInfo)) {
      process.stdout.write(styleText('yellow', 'Cannot compile taginfo.json: missing required project property `' + requiredProps[i] + '`') + '\n');
      return null;
    }
  }

  /** @type {TaginfoSchema} */
  let taginfo = {
    data_format: 1,
    project: projectInfo,
    tags: []
  };

  Object.keys(presets).forEach(id => {
    let preset = presets[id];
    if (preset.suggestion) return;
    if (id.startsWith('@')) return;

    /** @type {Record<string, Set<string>>} */
    const everyTag = {};
    for (const group of [preset.tags, preset.addTags, preset.removeTags]) {
      for (const key in group) {
          everyTag[key] ||= new Set();
          everyTag[key].add(preset.tags[key]);
      }
    }

    for (const key in everyTag) {
      for (const value of everyTag[key]) {
        /** @type {TaginfoTag} */
        let tag = { key };
        if (value !== '*') tag.value = value;


        let name = tstrings.presets[id].name;
        if (!name && preset.name.startsWith('{')) {
          name = tstrings.presets[preset.name.slice(1, -1)].name;
        }
        let legacy = (preset.searchable === false) ? ' (unsearchable)' : '';
        tag.description = [ `🄿 ${name}${legacy}` ];

        if (preset.geometry) {
          setObjectType(tag, preset);
        }

        // add icon
        if (/^maki-/.test(preset.icon)) {
          tag.icon_url = 'https://cdn.jsdelivr.net/gh/mapbox/maki/icons/' +
            preset.icon.replace(/^maki-/, '') + '.svg';
        } else if (/^temaki-/.test(preset.icon)) {
          tag.icon_url = 'https://cdn.jsdelivr.net/gh/rapideditor/temaki/icons/' +
            preset.icon.replace(/^temaki-/, '') + '.svg';
        } else if (/^fa[srb]-/.test(preset.icon)) {
          tag.icon_url = 'https://cdn.jsdelivr.net/gh/openstreetmap/iD@develop/svg/fontawesome/' +
            preset.icon + '.svg';
        } else if (/^iD-/.test(preset.icon)) {
          tag.icon_url = 'https://cdn.jsdelivr.net/gh/openstreetmap/iD@develop/svg/iD-sprite/presets/' +
            preset.icon.replace(/^iD-/, '') + '.svg';
        }

        coalesceTags(taginfo, tag);
      }
    }
  });

  Object.keys(fields).forEach(id => {
    const field = fields[id];
    const keys = field.keys || (field.key && [field.key]) || [];
    const isRadio = (field.type === 'radio' || field.type === 'structureRadio');

    if (field.type === 'directionalCombo') {
      // for directionalCombo, only :left and :right are included in field.keys,
      // so we need to explicitly add the two other possibilities.
      const base = field.key.replace(/:both$/, '');
      keys.push(base, `${base}:both`);
    }

    keys.forEach(key => {
      /** @type {TaginfoTag} */
      let tag = { key: key };

      let label = tstrings.fields[id].label;
      if (!label && field.label.startsWith('{')) {
        label = tstrings.fields[field.label.slice(1, -1)].label;
      }
      tag.description = [ `🄵 ${label}` ];

      coalesceTags(taginfo, tag);

      if (field.options && !isRadio && field.type !== 'manyCombo') {
        field.options.forEach(value => {
          if (value === 'undefined' || value === '*' || value === '') return;
          /** @type {TaginfoTag} */
          let tag;
          if (field.type === 'multiCombo') {
            tag = { key: key + value };
          } else {
            tag = { key: key, value: value };
          }
          let valueLabel = tstrings.fields[id].options?.[value];
          if (!valueLabel && field.stringsCrossReference) {
            valueLabel = tstrings.fields[field.stringsCrossReference.slice(1, -1)].options?.[value];
          }
          if (valueLabel && typeof valueLabel === 'string') {
            const match = valueLabel.match(/^\{(.*)\}$/)?.[1];
            if (match) {
              const [group, ...remainder] = match.split('/');
              const reference = tstrings[group][remainder.join('/')];
              if (!reference) throw new Error(`${valueLabel} is not a valid reference`);

              valueLabel = reference.name || reference.label;
            }
            tag.description = [ `🄵🅅 ${label}: ${valueLabel}` ];
          } else {
            tag.description = [ `🄵🅅 ${label}: \`${value}\`` ];
          }
          coalesceTags(taginfo, tag);
        });
      }
    });
  });

  if (!deprecated) deprecated = [];
  deprecated.forEach(elem => {
    let old = elem.old;
    let oldKeys = Object.keys(old);
    if (oldKeys.length === 1) {
      let oldKey = oldKeys[0];
      /** @type {TaginfoTag} */
      let tag = { key: oldKey };

      let oldValue = old[oldKey];
      if (oldValue !== '*') tag.value = oldValue;
      let replacementStrings = [];
      for (let replaceKey in elem.replace) {
        let replaceValue = elem.replace[replaceKey];
        if (replaceValue === '$1') replaceValue = '*';
        replacementStrings.push(`${replaceKey}=${replaceValue}`);
      }
      let description = '🄳 (deprecated tag)';
      if (replacementStrings.length > 0) {
        description += ' ➜ ' + replacementStrings.join(' + ');
      }
      tag.description = [description];
      coalesceTags(taginfo, tag);
    }
  });

  if (!discarded) discarded = {};
  for (const key in discarded) {
    let description = '🄳🄳 (discarded tag)';
    if (discarded[key] === true) {
      // key=*
      let tag = { key, description: [description] };
      coalesceTags(taginfo, tag);
    } else {
      // key=value
      for (const value in discarded[key]) {
        const tag = { key, value, description: [description] };
        coalesceTags(taginfo, tag);
      }
    }
  }

  taginfo.tags.forEach(elem => {
    if (elem.description) {
      elem.description = elem.description.join(', ');
    }
  });


  /**
   * @param {TaginfoSchema} taginfo
   * @param {TaginfoTag} tag
   */
  function coalesceTags(taginfo, tag) {
    if (!tag.key) return;

    let currentTaginfoEntries = taginfo.tags
      .filter(t => (t.key === tag.key && t.value === tag.value));

    if (currentTaginfoEntries.length === 0) {
      taginfo.tags.push(tag);
      return;
    }

    if (!tag.description) return;

    if (!currentTaginfoEntries[0].description) {
      currentTaginfoEntries[0].description = tag.description;
      return;
    }

    let isNewDescription = currentTaginfoEntries[0].description
      .indexOf(tag.description[0]) === -1;

    if (isNewDescription) {
      currentTaginfoEntries[0].description.push(tag.description[0]);
    }
  }


  function setObjectType(tag, input) {
    tag.object_types = [];
    const mapping = {
      'point'    : 'node',
      'vertex'   : 'node',
      'line'     : 'way',
      'relation' : 'relation',
      'area'     : 'area'
    };

    input.geometry.forEach(geom => {
      if (tag.object_types.indexOf(mapping[geom]) === -1) {
        tag.object_types.push(mapping[geom]);
      }
    });
  }

  return taginfo;
}

function generateIconsList(presets, fields, categories) {
  const icons = {};
  [
    ...Object.values(presets).map(p => p.icon).filter(Boolean),
    ...Object.values(categories).map(c => c.icon).filter(Boolean),
    ...Object.values(fields).flatMap(f => Object.values(f.icons || {}))
  ].forEach(icon => icons[icon] = true);
  return Object.keys(icons).sort();
}

/** @param {string} string */
const toPascalCase = string => string.replace(/(_.|^.)/g, match => match.at(-1).toUpperCase());

/** @param {string} string */
const createTypeIdentifier = (string) => toPascalCase(toSafeIdentifier(string));


/** @param {string} distDir */
async function generateTypeDefs(distDir) {
  const __dirname = path.dirname(fileURLToPath(import.meta.url));
  const inputFolder = path.join(__dirname, '../schemas');

  /**
   * Some generated files use plural names because they
   * export an object, e.g. `Fields = Record<string, Field>`
   * @type {Record<string, string>}
   */
  const KEY_MAP = {
    field: 'fields',
    preset: 'presets',
    preset_category: 'preset_categories',
  };
  const fileNames = fs.globSync(path.join(inputFolder, '/**/*.json'));

  /** @param {string} fileName */
  async function processFile(fileName) {
    const key = path.parse(fileName).name;
    const pluralKey = KEY_MAP[key];

    const mainExport = createTypeIdentifier(pluralKey || key);

    const output = [''];

    if (pluralKey) {
      output.push(
        `export interface ${createTypeIdentifier(pluralKey)} {`,
        `  [id: string]: ${createTypeIdentifier(key)}`,
        '}'
      );
    }

    output.push(
      `declare const json: ${mainExport};`,
      'export default json;'
    );

    const fileContent = JSON.parse(await fs.promises.readFile(fileName, 'utf8'));
    if (key === 'field') delete fileContent.anyOf;

    const tsFile = await compile(fileContent, mainExport, {
      additionalProperties: false,
      ignoreMinAndMaxItems: true,
      cwd: path.join(__dirname, '../schemas'),

      // ensure that the default export uses a consistent name
      customName: (schema, fallback) =>
        schema.$schema && schema.$id
          ? createTypeIdentifier(path.parse(schema.$id).name)
          : (schema.$id || schema.title || fallback || ''),
    });


    output.unshift(tsFile);
    output.push('');
    await fs.promises.writeFile(
      path.join(distDir, `${pluralKey || key}.d.json.ts`),
      output.join('\n'),
    );
  }
  await Promise.all(fileNames.map(processFile));

  // finally, create the index file which re-exports everything
  // as named types.
  const indexFile = fileNames
    .map((fileName) => {
      const key = path.parse(fileName).name;
      return `export type * from './${KEY_MAP[key] || key}.d.json.ts';`;
    })
    .join('\n');

  await fs.promises.writeFile(
    path.join(distDir, 'index.d.ts'),
    indexFile + '\n',
  );
}

function validateCategoryPresets(categories, presets) {
  Object.keys(categories).forEach(id => {
    const category = categories[id];
    if (!category.members) return;
    category.members.forEach(preset => {
      if (presets[preset] === undefined) {
        process.stderr.write('Unknown preset: ' + preset + ' in category ' + category.name + '\n');
        process.stdout.write('\n');
        process.exit(1);
      }
    });
  });
}

function validatePresetFields(presets, fields) {
  const betweenBracketsRegex = /([^{]*?)(?=\})/;
  const maxFieldsBeforeError = 10;

  let usedFieldIDs = new Set();

  for (let presetID in presets) {
    let preset = presets[presetID];

    if (preset.replacement) {
      let replacementPreset = presets[preset.replacement];
      let p1geometry = preset.geometry.slice().sort.toString();
      let p2geometry = replacementPreset.geometry.slice().sort.toString();
      if (replacementPreset === undefined) {
        process.stderr.write('Unknown preset "' + preset.replacement + '" referenced as replacement of preset "' + presetID + '" (' + preset.name + ')\n');
        process.stdout.write('\n');
        process.exit(1);
      } else if (p1geometry !== p2geometry) {
        process.stderr.write('The preset "' + presetID + '" has different geometry than its replacement preset, "' + preset.replacement + '". They must match for tag upgrades to work.\n');
        process.stdout.write('\n');
        process.exit(1);
      }
    }

    // the keys for properties that contain arrays of field ids
    let fieldKeys = ['fields', 'moreFields'];
    for (let fieldsKeyIndex in fieldKeys) {
      let fieldsKey = fieldKeys[fieldsKeyIndex];
      if (!preset[fieldsKey]) continue; // no fields are referenced, okay

      for (let fieldIndex in preset[fieldsKey]) {
        let fieldID = preset[fieldsKey][fieldIndex];
        usedFieldIDs.add(fieldID);
        let field = fields[fieldID];
        if (field) {
          if (field.geometry) {
            let sharedGeometry = field.geometry.filter(value => preset.geometry.includes(value));
            if (!sharedGeometry.length) {
              process.stderr.write('The preset "' + presetID + '" (' + preset.name + ') will never display the field "' + fieldID + '" since they don\'t share geometry types.\n');
              process.stdout.write('\n');
              process.exit(1);
            }
          }

        } else {
          // no field found with this ID...

          let regexResult = betweenBracketsRegex.exec(fieldID);
          if (regexResult) {
            let foreignPresetID = regexResult[0];
            if (presets[foreignPresetID] === undefined) {
              process.stderr.write('Unknown preset "' + foreignPresetID + '" referenced in "' + fieldsKey + '" array of preset "' + presetID + '" (' + preset.name + ')\n');
              process.stdout.write('\n');
              process.exit(1);
            }
          } else {
            process.stderr.write('Unknown preset field "' + fieldID + '" in "' + fieldsKey + '" array of preset "' + presetID + '" (' + preset.name + ')\n');
            process.stdout.write('\n');
            process.exit(1);
          }
        }


      }
    }

    if (preset.fields) {
      // since `moreFields` is available, check that `fields` doesn't get too cluttered
      let fieldCount = preset.fields.length;

      if (fieldCount > maxFieldsBeforeError) {
        // Fields with `prerequisiteTag` or `geometry` may not always be shown,
        // so don't count them against the limits.
        const alwaysShownFields = preset.fields.filter(fieldID => {
          if (fields[fieldID]?.prerequisiteTag || fields[fieldID]?.geometry) return false;
          return true;
        });
        fieldCount = alwaysShownFields.length;
      }
      if (fieldCount > maxFieldsBeforeError) {
        process.stderr.write(fieldCount + ' values in "fields" of "' + preset.name + '" (' + presetID + '). Limit: ' + maxFieldsBeforeError + '. Please move lower-priority fields to "moreFields".\n');
        process.stdout.write('\n');
        process.exit(1);
      }
    }
  }

  for (let fieldID in fields) {
    if (!usedFieldIDs.has(fieldID) &&
        fields[fieldID].universal !== true &&
        (fields[fieldID].usage || 'preset') === 'preset') {
      process.stdout.write('Field "' + fields[fieldID].label + '" (' + fieldID + ') isn\'t used by any presets.\n');
    }
  }
}

function validateTerms(terms, where) {
  if (!terms) return;

  const expectedTerms = terms.map(term => term.toLowerCase().trim()).sort();
  if (terms.every((term, index) => expectedTerms[index] === term)) return;

  process.stderr.write(`Expected terms in ${where} to be lowercase and sorted alphabetically.`);
  process.stdout.write('\n');
  process.exit(1);
}

function validateDefaults(defaults, categories, presets) {
  Object.keys(defaults).forEach(name => {
    const members = defaults[name];
    members.forEach(id => {
      if (!presets[id] && !categories[id]) {
        process.stderr.write(`Unknown category or preset: ${id} in default ${name}\n`);
        process.stdout.write('\n');
        process.exit(1);
      }
    });
  });
}

function translationsToYAML(translations) {
  // comment keys start with '#' and should sort immediately before their related key.
  function commentFirst(a, b) {
    if (a === '#' + b) return -1;
    if (b === '#' + a) return 1;
    if (a[0] !== b[0]) {
      if (a[0] === '#') a = a.substr(1);
      if (b[0] === '#') b = b.substr(1);
    }
    return (a > b ? 1 : a < b ? -1 : 0);
  }

  return YAML.dump(translations, { sortKeys: commentFirst, lineWidth: -1 })
    .replace(/'?#.*?'?:/g, '#');
}


function minifyJSON(inPath, outPath) {
  return new Promise((resolve, reject) => {
    if (!fs.existsSync(inPath)) {
      resolve();
      return;
    }
    fs.readFile(inPath, 'utf8', (err, data) => {
      if (err) return reject(err);

      const minified = JSON.stringify(JSON.parse(data));
      fs.writeFile(outPath, minified, (err) => {
        if (err) return reject(err);
        resolve();
      });

    });
  });
}

export {
  buildDev,
  buildDist,
  validateData as validate
};
