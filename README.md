[![npm version](https://badge.fury.io/js/%40openstreetmap%2Fid-tagging-schema.svg)](https://badge.fury.io/js/%40openstreetmap%2Fid-tagging-schema)

# iD Tagging Schema

This is the directory of OpenStreetMap tagging data used by the [iD editor](https://github.com/openstreetmap/iD).
It includes presets, fields, deprecations, and more.

## Background

OpenStreetMap itself does not have a formal tagging [schema](https://en.wikipedia.org/wiki/Database_schema),
but editing tools need to know how tags are used in order to facilitate mapping.
This Tagging Schema fills that need, but with a number of caveats:

- This isn't authoritative or definitive
- Tagging interpretations may vary from mapper to mapper, place to place, and over time
- Our primary aim is to serve the needs of iD mappers (but other tools are welcome to use this too)
- We support tags based on practicality, usage, and community approval
- Sometimes there are reasons we can't support a tag even if it's used or approved

## Integrations

This schema incorporates data from the [name-suggestion-index](https://github.com/osmlab/name-suggestion-index).

## Contributing

iD's [code of conduct](https://github.com/openstreetmap/iD/blob/release/CODE_OF_CONDUCT.md) and
[privacy policy](https://github.com/openstreetmap/iD/blob/release/PRIVACY.md) also apply to this project.

### Making Changes

Documentation for the data formats is located with the [schema-builder](https://github.com/ideditor/schema-builder)
package, which is the technical basis of this project. To make a change, update a
file within the `data` folder and rebuild by running `npm run build` in your terminal.
