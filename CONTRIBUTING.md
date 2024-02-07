## Submitting Issues

Don't hesitate to submit feedback about issues or how the tagging schema could be improved, but please [search existing issues](https://github.com/search?l=&q=repo%3Aopenstreetmap%2Fid-tagging-schema&type=Issues) before [opening a new one](https://github.com/openstreetmap/id-tagging-schema/issues/new/choose).

iD's [code of conduct](https://github.com/openstreetmap/iD/blob/release/CODE_OF_CONDUCT.md) and [privacy policy](https://github.com/openstreetmap/iD/blob/release/PRIVACY.md) also apply to this project.


## General Guidelines

As a general guideline, the tagging schema will only consider tags that are documented on the OSM wiki and have completed a [proposal process](https://wiki.openstreetmap.org/wiki/Proposal_process) or can in some other way be considered as _accepted_ by the OpenStreetMap community.

As the tagging schema is meant to be a general representation of the OSM data for a wide audience of users, some tags might be considered out of scope: for example when a tag requires expert knowledge to be used, or when a tag is extremely rare.

Tags which are not universally applicable globally, can and should be limited to their respective region in the corresponding preset or field of this repository.


## Translating

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


## Making Changes

### Overview and General Structure

Detailed documentation for the data format used in this repository is located with the [schema-builder](https://github.com/ideditor/schema-builder) package, which is the technical basis of this project.

To make a change, update the corresponding file within the `data` folder: The `presets` contain a representation of OpenStreetMap's [map features](wiki.openstreetmap.org/wiki/Map_Features), and the `fields` are their properties. In addition, the tagging schema contains a few `categories` of presets and a list of `deprecated` and `discardable` tags.

### Icons

Icons from different sources (_icon sets_) can be used in the tagging schema. Head over to the [dedicated page](https://github.com/ideditor/schema-builder/blob/main/ICONS.md#icons) about how to use them.

### Code Style

The input files are JSON files which use 4-space indentation. You can use the `npm run lint` command to check whether your files match the expected code style and run `npm run lint:fix` to reformat them if they don't do so.

### Installation and Testing

The following `npm` commands are used in this repository:

* `npm install` – installs or updates the repository's required dependencies
* `npm test` – validates the source data
* `npm run build` – validates the source data and builds some files which are used during development (e.g. strings to be supplied to the translation platform)
* `npm run dist` – validates the source data and compiles output files for iD
* `npm run translations` – fetches translations from transifex and compiles the translations files for iD

If you have [set up](https://github.com/openstreetmap/iD#installation) your own local instance of the iD editor, you can [configure](https://github.com/openstreetmap/iD/blob/develop/API.md#environment-variables) it to use your local set of tagging presets by setting the `ID_PRESETS_CDN_URL` environment variable. If you do that, don't forget to run `npm run dist` to compile the tagging schema output, as iD will otherwise not see the changes you made.
