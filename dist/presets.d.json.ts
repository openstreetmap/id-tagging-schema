/**
 * Associates an icon, form fields, and other UI with a set of OSM tags
 */
export interface Preset {
  /**
   * The English name for the feature. A preset can reference the label of another by using that preset's identifier contained in brackets (e.g. {preset}), in which case also the preset's aliases and terms will also be referenced from that preset.
   */
  name: string
  /**
   * Valid geometry types for the feature, in order of preference
   *
   * @minItems 1
   */
  geometry: ("point" | "vertex" | "line" | "area" | "relation")[]
  /**
   * Tags that must be present for the preset to match
   */
  tags: {
    [k: string]: string
  }
  /**
   * Tags that are added when changing to the preset (default is the same value as 'tags')
   */
  addTags?: {
    [k: string]: string
  }
  /**
   * Tags that are removed when changing to another preset (default is the same value as 'addTags' which in turn defaults to 'tags')
   */
  removeTags?: {
    [k: string]: string
  }
  /**
   * Default form fields that are displayed for the preset. A preset can reference the fields of another by using that preset's identifier contained in brackets, like {preset}.
   *
   * @minItems 1
   */
  fields?: string[]
  /**
   * Additional form fields that can be attached with the 'Add field' dropdown. A preset can reference the "moreFields" of another by using that preset's identifier contained in brackets, like {preset}.
   *
   * @minItems 1
   */
  moreFields?: string[]
  /**
   * Name of preset icon which represents this preset
   */
  icon?: string
  /**
   * The URL of a remote image that is more specific than 'icon'
   */
  imageURL?: string
  /**
   * English search terms or related keywords
   *
   * @minItems 1
   */
  terms?: string[]
  /**
   * Display-ready English synonyms for the `name`
   *
   * @minItems 1
   */
  aliases?: string[]
  /**
   * Whether or not the preset will be suggested via search
   */
  searchable?: boolean
  /**
   * The quality score this preset will receive when being compared with other matches (higher is better)
   */
  matchScore?: number
  /**
   * Taginfo documentation parameters (to be used when a preset manages multiple tags)
   */
  reference?: {
    /**
     * For documentation of a key
     */
    key: string
    /**
     * For documentation of a tag (key and value)
     */
    value?: string
  }
  /**
   * The ID of a preset that is preferable to this one
   */
  replacement?: string
  /**
   * An object specifying the IDs of regions where this preset is or isn't valid. See: https://github.com/ideditor/location-conflation
   */
  locationSet?: {
    include?: string[]
    exclude?: string[]
  }
  /**
   * An string referencing another preset which has a locationSet
   */
  locationSetCrossReference?: string
  relation?: RelationSchema
  /**
   * A preset can reference the relation schema from another preset, instead of defining the same schema again. If present, then the `relation` property must not appear.
   */
  relationCrossReference?: string
}
export interface RelationSchema {
  /**
   * The “permanent relation type ID”, this should match the value of https://osm.wiki/Property:P41 in the OSM wiki’s wikibase system.
   */
  reference: string
  /**
   * Set to `true` if the relation can contain the same member multiple times.
   */
  allowDuplicateMembers: boolean
  /**
   * The labels for each role, in the default language. The role and the label can both be empty strings.
   */
  role_labels: {
    [k: string]: string
  }
  members: {
    /**
     * The relation role. An empty string is allowed.
     */
    role: string
    /**
     * If not specified, any geometry is allowed
     */
    geometry?: ("point" | "vertex" | "line" | "area" | "relation")[]
    /**
     * `*` can be used as a tag value. If the object has multiple tags, then all tags must match (logical AND). If multiple array items are specified, only 1 needs to match (logical OR). If this property is not specified, then any tags are allowed.
     *
     * @minItems 1
     */
    matchTags?: {
      [k: string]: string
    }[]
    /**
     * If unspecified, there is no minimum for how many times this role can appear in the relation
     */
    min?: number
    /**
     * If unspecified, there is no maximum for how many times this role can appear in the relation
     */
    max?: number
  }[]
}


export interface Presets {
  [id: string]: Preset
}
declare const json: Presets;
export default json;
