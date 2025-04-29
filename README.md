# iD Tagging Schema

**This is a custom distribution of id-tagging-schema for openglide. This distribution is to be used with og-id-editor, the custom build of open street maps iD editor for free flight editing.**


# og iD Tagging Schema

**This is a custom distribution of Open Street Maps `id-tagging-schema` for openglide.club. This distribution is to be used with [og-id-editor](https://github.com/openglide/og-id-editor), the custom build of open street maps iD editor for free flight editing.**

This project defines a custom tagging schema for Open Street Map's iD editor. The iD editor is a general-purpose open street map editor which has far more features than what is necessary for editing OSM free flight data. This schema helps editors who are unfamiliar with OSM focus on free-flight-only features and tags.

## Changes from upstream

The following are the known changes from upstream. One priority for this project is to retain as few differences with upstream as possible, so they can be kept in sync without conflict.

- Primary data directory changed: `data` -> `og_data`
- To account for the above change: `scripts/build.js` and `scripts/dist.js` have `inDirectory` set to `og_data`.

## Development

Begin by running `npm install` to install dependencies.

`og-id-editor` uses the environment variable `ID_PRESETS_CDN_URL` to define the URL where it fetches `og-id-tagging-schema`.

To make changes to this schema, run through the following procedure:
1. Make the changes you want in [data](./data)
2. Run `npm run build && npm run dist` to build your changes
3. Run `npx serve --cors` to make your changes available at https://localhost:3000
4. Point `og-id-editor` at your local server: `ID_PRESETS_CDN_URL=http://localhost:3000`
5. Open `og-id-editor` in a browser: http://localhost:8080


# id-tagging-schema

This is the directory of OpenStreetMap tagging data used by the [iD editor](https://github.com/openstreetmap/iD).
It includes presets, fields, deprecations, and more.

## Participate!

* Read up about how you can contribute to the iD Tagging Schema on the [contributing page](CONTRIBUTING.md).
* [Translate!](CONTRIBUTING.md#Translating)
* See the [open issues](https://github.com/openstreetmap/id-tagging-schema/issues?state=open) in the issue tracker if you're looking for something to do.
* Need more help? Ping user `tyr_asd` (Martin Raifer) on [OpenStreetMap Discord](https://discord.gg/openstreetmap) (`#id-and-rapid` channel) or [OpenStreetMap US Slack](https://slack.openstreetmap.us/) (`#id` channel).

## Background

OpenStreetMap itself does not have a formal rigid [database schema](https://en.wikipedia.org/wiki/Database_schema), but relies on a [tagging](https://wiki.openstreetmap.org/wiki/Tags) [folksonomy](https://en.wikipedia.org/wiki/Folksonomy) instead.

Editing tools need to know how tags are used in order to facilitate mapping.
This Tagging Schema fills that need, but with a number of caveats:

- This isn't authoritative or definitive
- Tagging interpretations may vary from mapper to mapper, place to place, and over time
- Our primary aim is to serve the needs of iD mappers (but other tools are welcome to use this too)
- We support tags based on practicality, usage, and community approval
- Sometimes there are reasons we can't support a tag even if it's used or approved

## Usage

### Java/Android

The [westnordost/osmfeatures](https://github.com/westnordost/osmfeatures) project,
a component of [StreetComplete](https://github.com/westnordost/StreetComplete),
makes it easier to use this data with Android or other Java platforms.

### Use by Other Editors

iD tagging schema is used not only by iD. Here's a [list of projects](https://github.com/openstreetmap/id-tagging-schema/wiki/Projects-that-are-using-this-tagging-schema) which use the data from the id-tagging-schema.

## Related Projects

* The [OpenStreetMap wiki](https://wiki.openstreetmap.org/wiki/Map_features) documents the current usage of tags, and hosts discussions about proposed new tags.
* The [ideditor/schema-builder](https://github.com/ideditor/schema-builder) project holds the documentation for the data format used in this repository
* iD also incorporates preset data from the [name-suggestion-index](https://github.com/osmlab/name-suggestion-index).
* Other editors also include their own models of interpretations of OSM tags. See for example [Vespucci's](https://github.com/simonpoole/beautified-JOSM-preset) or [JOSM's](https://josm.openstreetmap.de/wiki/Presets) tagging presets.

## Contributing

See the dedicated [CONTRIBUTING](CONTRIBUTING.md) page for information about this.
