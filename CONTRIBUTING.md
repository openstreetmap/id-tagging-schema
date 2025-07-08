# Contributing to the tagging schema

## Submitting Issues

Don't hesitate to submit feedback about issues or how the tagging schema could be improved, but please [search existing issues](https://github.com/search?l=&q=repo%3Aopenstreetmap%2Fid-tagging-schema&type=Issues) before [opening a new one](https://github.com/openstreetmap/id-tagging-schema/issues/new/choose).

iD's [code of conduct](https://github.com/openstreetmap/iD/blob/release/CODE_OF_CONDUCT.md) and [privacy policy](https://github.com/openstreetmap/iD/blob/release/PRIVACY.md) also apply to this project.


## General Guidelines

Read the [GUIDELINES](./GUIDELINES.md) to help you understand what fields and tags should be added to the tagging schema.

## Translating

* **English (US) translations** are managed inside the JSON files of this repository. The Transifex translations for "English (en)" are only a reference for other languages but not exported.

  Example: To extend the list of English terms for `shrub`, [modify the `terms`-key in the JSON file](https://github.com/openstreetmap/id-tagging-schema/blob/v3.1.0/data/presets/natural/shrub.json#L16-L19)).

* **All languages** other than English (US) are managed [in the Transifex Project of the iD Editor](https://app.transifex.com/openstreetmap/id-editor/) inside the translation resource _'preset'_.

  To to find and update a translation, you can …
  1. [open the translation page](https://app.transifex.com/openstreetmap/id-editor/translate/)
  2. select a language
  3. select _'presets'_
  4. search for `key:living_street` or `translation_text:'Living Street'` or `key:highway/living_street`

* **Request access:** To contribute to a language, [select a language](https://app.transifex.com/openstreetmap/id-editor/languages/) and use 'Join team' to request access. The administrators will approve requests routinely, only rejecting requests for overly specific locales.

* **Base language:** The JSON files in this repository require an "English (US)" translation. This includes data, that use the `locationSet` property to reduce the scope of the data to specific countries since users might still select English as an editor language in those countries. Some presets use a (untranslatable) proper name. See also "Developer Notes".

* **Transifex "Developer Notes":** Use the "Developer Notes" section in Transifex to learn more about the context of a given translation string. For example, [looking at `presets.fields.direction_cardinal-US-CA-NZ.label` in Transiflex](https://app.transifex.com/openstreetmap/id-editor/translate/#en_GB/presets/406422633?q=key%3Apresets.fields.direction_cardinal-US-CA-NZ.label) will give you the "Developer Notes: `direction=* | Local preset for countries "CA", "NZ", "US"`" which helps you understand that, (a) this label describes the key `direction` and (b) it is only visible in three countries, so other languages usually don't need to translate it (leave it blank or add the English translation instead).

* **Release:** All translation changes are released whenever [a new id-tagging-schema release is created](https://github.com/openstreetmap/id-tagging-schema/releases). They will become visible inside iD and other editors once those editors a short while after that (which can vary as different editors have different release schedules and in some cases, e.g. in iD, translations might even be fetched dynamically from the most recent id-tagging-schema release).


## Making Changes

You are highly welcome to help this project by submitting pull requests!

### Overview and General Structure

Detailed documentation for the data format used in this repository is located with the [schema-builder](https://github.com/ideditor/schema-builder) package, which is the technical basis of this project.

To make a change, update the corresponding file within the `data` folder: The `presets` contain a representation of OpenStreetMap's [map features](https://wiki.openstreetmap.org/wiki/Map_Features), and the `fields` are their properties. In addition, the tagging schema contains a few `categories` of presets and a list of `deprecated` and `discardable` tags.

### Icons

Icons from different sources (_icon sets_) can be used in the tagging schema. Head over to the [dedicated page](https://github.com/ideditor/schema-builder/blob/main/ICONS.md#icons) about how to use them.

### Info-`i`

![Screenshot of a preset in iD with the information details open.](https://github.com/openstreetmap/id-tagging-schema/assets/111561/13549318-cd7c-4dd1-9948-7a2d84662f04)

iD and other tools provide users with a way to learn more about the main tag of a preset. It is important to provide good information in this information panel. Here are a few notes on how to do this:
- Does your tag have a Wikibase entry? Click the small pencil icon next to the text to open the Wikibase item on the OSM wiki. Improve this wording if needed. If the Wikibase item is missing, [learn more about how to add it in "Current methods for creating new items"](https://wiki.openstreetmap.org/wiki/Data_items#Item_creation_process).
- Does your tag have a Wiki page with a good image?
- Your preset might need [a `reference` property](https://github.com/ideditor/schema-builder?tab=readme-ov-file#reference) to force the system to use a specific tag for the information section.

### Integration Testing With iD

There are two ways to inspect how your changes to the schema affect the user experience in the iD editor:

**a. Use the PR preview:**

After you submit your PR, the system will create a preview and comment on your PR:

> 🍱 Your pull request preview is ready.

If this is your first contribution to this project, the preview will not happen right away but requires a click from one of the project members. We will do this ASAP.

**b. Use a local instance of the iD editor:**

If you have [set up](https://github.com/openstreetmap/iD#installation) your own local instance of the iD editor, you can [configure](https://github.com/openstreetmap/iD/blob/develop/API.md#environment-variables) it to use your local set of tagging presets by setting the `ID_PRESETS_CDN_URL` environment variable.

1. First build and serve the schema: `npm run build && npm run dist && npx serve -Cp 1234`. Remember that you need to run this command again should you make further changes.
2. Now, in your iD repository, start an iD instance using your custom schema:
   - on macOS & Linux: `npx cross-env ID_PRESETS_CDN_URL=http://localhost:1234/ npm start`
   - on Windows: `set ID_PRESETS_CDN_URL=http://localhost:1234/ && npm start`

### Installation and Testing

The following `npm` commands are used in this repository:

* `npm install` – installs or updates the repository's required dependencies
* `npm test` – validates the source data
* `npm run build` – validates the source data and builds some files which are used during development (e.g. strings to be supplied to the translation platform)
* `npm run dist` – validates the source data and compiles output files for iD
* `npm run translations` – fetches translations from transifex and compiles the translations files for iD

### Code Style

The input files are JSON files which use 4-space indentation. You can use the `npm run lint` command to check whether your files match the expected code style and run `npm run lint:fix` to reformat them if they don't do so.
