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

* **English (US) translations** are managed inside the JSON files of this repository. The Transifex translations for "English (en)" are only a reference for other languages but not exported.

  Example: To extend the list of English terms for `shrub`, [modify the `terms`-key in the JSON file](https://github.com/openstreetmap/id-tagging-schema/blob/v3.1.0/data/presets/natural/shrub.json#L16-L19)).

* **All languages** other than English (US) are managed [in the Transifex Project of the iD Editor](https://www.transifex.com/openstreetmap/id-editor/) inside the translation resource _'preset'_.

  To to find and update a translation, you can …
  1. [open the translation page](https://www.transifex.com/openstreetmap/id-editor/translate/)
  2. select a language
  3. select _'presets'_
  4. search for `key:living_street` or `translation_text:'Living Street'`

* **Request access:** To contribute to a language, [select a language](https://www.transifex.com/openstreetmap/id-editor/languages/) and use 'Join team' to request access. The administrators will approve requests routinely, only rejecting requests for overly specific locales.

* **Base language:** The JSON files in this repository require an "English (US)" translation. This includes data, that use the `locationSet` property to reduce the scope of the data to specific countries since users might still select English as an editor language in those countries. Some presets use a (untranslatable) proper name. See also "Developer Notes".

* **Transifex "Developer Notes":** Use the "Developer Notes" section in Transifex to learn more about the context of a given translation string. For example, [looking at `presets.fields.direction_cardinal-US-CA-NZ.label` in Transiflex](https://www.transifex.com/openstreetmap/id-editor/translate/#en_GB/presets/406422633?q=key%3Adirection_cardinal) will give you the "Developer Notes: `direction=* | Local preset for countries "CA", "NZ", "US"`" which helps you understand that, (a) this label describes the key `direction` and (b) it is only visible in three countries, so other languages usually don't need to translate it (leave it blank or add the English translation instead).

* **Release:** All translation changes are released whenever [a new id-tagging-schema release is created](https://github.com/openstreetmap/id-tagging-schema/releases). They will become visible inside iD and other editors once those editors a short while after that (which can vary as different editors have different release schedules and in some cases, e.g. in iD, translations might even be fetched dynamically from the most recent id-tagging-schema release).

## Icons

iD presets are using some openly-licensed icons created by separate projects. Presets may have icon field like `"icon": "maki-roadblock",` referencing an icon.

Currently following referencing is possible:

- `id-` (and ones with any other prefix than mentioned below) - references icom from https://github.com/openstreetmap/iD/tree/develop/svg/iD-sprite/presets
- `temaki-`- https://github.com/ideditor/temaki
- `maki-` - https://github.com/mapbox/maki
- `fas-` / `far-` / `fab-` - https://github.com/openstreetmap/iD/tree/develop/svg/fontawesome from https://fontawesome.com/icons
- `roentgen-` - https://github.com/enzet/map-machine#r%C3%B6ntgen-icon-set

## Usage

### Java/Android

The [westnordost/osmfeatures](https://github.com/westnordost/osmfeatures) project,
a component of [StreetComplete](https://github.com/westnordost/StreetComplete),
makes it easier to use this data with Android or other Java platforms.

### Use by Other Editors

iD tagging schema is used not only by iD. Here's a [list of projects](https://github.com/openstreetmap/id-tagging-schema/wiki/Projects-that-are-using-this-tagging-schema) which use the data from the id-tagging-schema.

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
