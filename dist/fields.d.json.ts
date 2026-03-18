/**
 * A reusable form element for presets
 */
export interface Field {
  /**
   * Tag key whose value is to be displayed
   */
  key?: string
  /**
   * Tag keys whose value is to be displayed
   *
   * @minItems 1
   */
  keys?: string[]
  /**
   * Taginfo documentation parameters (to be used when a field manages multiple tags)
   */
  reference?: ({
    /**
     * For documentation of a key
     */
    key: string
    /**
     * For documentation of a tag (key and value)
     */
    value?: string
  } | {
    /**
     * For documentation of a relation type
     */
    rtype: string
  })
  /**
   * Type of field
   */
  type: ("access" | "address" | "check" | "colour" | "combo" | "date" | "defaultCheck" | "directionalCombo" | "email" | "identifier" | "integer" | "lanes" | "localized" | "manyCombo" | "multiCombo" | "networkCombo" | "number" | "onewayCheck" | "radio" | "restrictions" | "roadheight" | "roadspeed" | "schedule" | "semiCombo" | "structureRadio" | "tel" | "text" | "textarea" | "typeCombo" | "url" | "wikidata" | "wikipedia")
  /**
   * English label for the field caption. A field can reference the label of another by using that field's identifier contained in brackets (e.g. {field}), in which case also the field's terms will be referenced from that field.
   */
  label: string
  /**
   * If specified, only show the field for these kinds of geometry
   *
   * @minItems 1
   */
  geometry?: ("point" | "vertex" | "line" | "area" | "relation")[]
  /**
   * The default value for this field
   */
  default?: string
  /**
   * List of untranslatable string suggestions (combo fields)
   *
   * @minItems 1
   */
  options?: string[]
  /**
   * If true, the top values from TagInfo will be suggested in the dropdown (combo fields only)
   */
  autoSuggestions?: boolean
  /**
   * If true, the user can type their own value in addition to any listed in `options` or `strings.options` (combo fields only)
   */
  customValues?: boolean
  /**
   * If true, this field will appear in the Add Field list for all presets
   */
  universal?: boolean
  /**
   * Placeholder text for this field. A field can reference the placeholder text of another by using that field's identifier contained in brackets, like {field}.
   */
  placeholder?: string
  /**
   * Strings sent to transifex for translation
   */
  strings?: {
    /**
     * Translatable options (combo fields).
     */
    options?: {
      [k: string]: (string | {
        title: string
        description: string
      })
    }
    /**
     * Translatable types (directionalCombo and access only).
     */
    types?: {
      [k: string]: string
    }
    /**
     * Translatable placeholders of fields with subfields (address only).
     */
    placeholders?: {
      [k: string]: string
    }
    /**
     * Translatable labels of fields with subfields (address only).
     */
    labels?: {
      [k: string]: string
    }
  }
  /**
   * A field can reference strings of another by using that field's identifier contained in brackets, like {field}.
   */
  stringsCrossReference?: string
  /**
   * If true, replace spaces with underscores in the tag value (combo fields only)
   */
  snake_case?: boolean
  /**
   * If true, allow case sensitive field values (combo fields only)
   */
  caseSensitive?: boolean
  /**
   * If true, duplicate values are allowed (semiCombo fields only)
   */
  allowDuplicates?: boolean
  /**
   * Minimum field value (number fields only)
   */
  minValue?: number
  /**
   * Maximum field value (number fields only)
   */
  maxValue?: number
  /**
   * The amount the stepper control should add or subtract (number fields only)
   */
  increment?: number
  /**
   * Tagging constraint for showing this field in the editor
   */
  prerequisiteTag?: (RequiresKeyAnyValue | RequiresKeyEqualsValue | RequiresKeyEqualsValues | RequiresKeyNotValue | RequiresKeyNotValues | RequiresNotKey)
  /**
   * English synonyms or related search terms
   *
   * @minItems 1
   */
  terms?: string[]
  /**
   * An object specifying the IDs of regions where this field is or isn't valid. See: https://github.com/ideditor/location-conflation
   */
  locationSet?: {
    /**
     * @minItems 1
     */
    include?: string[]
    /**
     * @minItems 1
     */
    exclude?: string[]
  }
  /**
   * Permalink URL for `identifier` fields. Must contain a {value} placeholder
   */
  urlFormat?: string
  /**
   * Regular expression that a valid `identifier` value is expected to match
   */
  pattern?: string
  /**
   * The manner and context in which the field is used
   */
  usage?: ("preset" | "changeset" | "manual" | "group")
  /**
   * For combo fields: Name of icons which represents different values of this field
   */
  icons?: {
    [k: string]: string
  }
  /**
   * A field can reference icons of another by using that field's identifier contained in brackets, like {field}.
   */
  iconsCrossReference?: string
}
export interface RequiresKeyAnyValue {
  /**
   * The key of the required tag
   */
  key: string
}
export interface RequiresKeyEqualsValue {
  /**
   * The key of the required tag
   */
  key: string
  /**
   * The value that the tag must have. (alternative to 'valueNot')
   */
  value: string
}
export interface RequiresKeyEqualsValues {
  /**
   * The key of the required tag
   */
  key: string
  /**
   * The values that the tag must have. (alternative to 'valuesNot')
   *
   * @minItems 1
   */
  values: string[]
}
export interface RequiresKeyNotValue {
  /**
   * The key of the required tag
   */
  key: string
  /**
   * The value that the tag cannot have. (alternative to 'value')
   */
  valueNot: string
}
export interface RequiresKeyNotValues {
  /**
   * The key of the required tag
   */
  key: string
  /**
   * The values that the tag cannot have. (alternative to 'values')
   *
   * @minItems 1
   */
  valuesNot: string[]
}
export interface RequiresNotKey {
  /**
   * A key that must not be present
   */
  keyNot: string
}


export interface Fields {
  [id: string]: Field
}
declare const json: Fields;
export default json;
