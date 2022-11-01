![test](https://github.com/openstreetmap/id-tagging-schema/workflows/test/badge.svg) [![npm version](https://badge.fury.io/js/%40openstreetmap%2Fid-tagging-schema.svg)](https://badge.fury.io/js/%40openstreetmap%2Fid-tagging-schema)

# iD Tagging Schema

This is the directory of OpenStreetMap tagging data used by the [iD editor](https://github.com/openstreetmap/iD).
It includes presets, fields, deprecations, and more.

## Background

OpenStreetMap itself does not have a formal rigid [database schema](https://en.wikipedia.org/wiki/Database_schema),
but relies on a [tagging](https://wiki.openstreetmap.org/wiki/Tags) [folksonomy](https://en.wikipedia.org/wiki/Folksonomy) instead.
Editing tools need to know how tags are used in order to facilitate mapping.
This Tagging Schema fills that need, but with a number of caveats:

- This isn't authoritative or definitive
- Tagging interpretations may vary from mapper to mapper, place to place, and over time
- Our primary aim is to serve the needs of iD mappers (but other tools are welcome to use this too)
- We support tags based on practicality, usage, and community approval
- Sometimes there are reasons we can't support a tag even if it's used or approved

## Translations

* English translations for the `terms`-key should be added to the JSON data ([Example](https://github.com/openstreetmap/id-tagging-schema/blob/v3.1.0/data/presets/natural/shrub.json#L16-L19)).

* Apart from that, translations are managed [in the Transifex Project of the iD Editor](https://www.transifex.com/openstreetmap/id-editor/) inside the translation resource _'preset'_.

  To translate, you can [open the translation page](https://www.transifex.com/openstreetmap/id-editor/translate/), select a language, select _'preset'_ and search for `key:living_street` or `translation_text:'Living Street'` to find and change translations.

  To contribute to a language: [Select a language](https://www.transifex.com/openstreetmap/id-editor/languages/) and use 'Join team' to request access. The administrators will approve requests routinely, only rejecting requests for overly specific locales.

* All translation changes will be released whenever [a new id-tagging-schema release is created](https://github.com/openstreetmap/id-tagging-schema/releases). They will be visible inside iD and other editors once those editors update their dependencies and release a new version as well.

## Usage

### Java/Android

The [westnordost/osmfeatures](https://github.com/westnordost/osmfeatures) project,
a component of [StreetComplete](https://github.com/westnordost/StreetComplete),
makes it easier to use this data with Android or other Java platforms.

## Related Projects

* The [OpenStreetMap wiki](https://wiki.openstreetmap.org/wiki/Map_features) documents the current usage of tags, and hosts discussions about proposed new tags.
* iD also incorporates preset data from the [name-suggestion-index](https://github.com/osmlab/name-suggestion-index).
* Other editors also include their own models of interpretations of OSM tags. See for example [Vespucci's](https://github.com/simonpoole/beautified-JOSM-preset) or [JOSM's](https://josm.openstreetmap.de/wiki/Presets) tagging presets.

## Contributing

iD's [code of conduct](https://github.com/openstreetmap/iD/blob/release/CODE_OF_CONDUCT.md) and
[privacy policy](https://github.com/openstreetmap/iD/blob/release/PRIVACY.md) also apply to this project.

### Making Changes

Documentation for the data formats is located with the [schema-builder](https://github.com/ideditor/schema-builder)
package, which is the technical basis of this project. To make a change, update a
file within the `data` folder and rebuild by running `npm run build` in your terminal.
