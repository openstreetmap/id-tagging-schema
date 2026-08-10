/**
 * Keys or tags to be deleted when editing features.
 */
export interface Discarded {
  [k: string]: (true | {
    [k: string]: true
  })
}


declare const json: Discarded;
export default json;
