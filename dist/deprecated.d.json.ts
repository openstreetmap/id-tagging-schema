/**
 * An ordered list of old tags mapped to new tags.
 * 
 * @minItems 1
 */
export type Deprecated = {
  old: {
    [k: string]: string
  }
  replace?: {
    [k: string]: string
  }
}[]


declare const json: Deprecated;
export default json;
