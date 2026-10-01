/**
 * Directory of the IDs of the presets or categories to be shown in the default list for each geometry type.
 */
export interface PresetDefaults {
  /**
   * @minItems 1
   */
  point: string[]
  /**
   * @minItems 1
   */
  vertex: string[]
  /**
   * @minItems 1
   */
  line: string[]
  /**
   * @minItems 1
   */
  area: string[]
  /**
   * @minItems 1
   */
  relation: string[]
}


declare const json: PresetDefaults;
export default json;
