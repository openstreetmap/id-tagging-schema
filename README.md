![test](https://github.com/openstreetmap/id-tagging-schema/workflows/test/badge.svg) [![npm version](https://badge.fury.io/js/%40openstreetmap%2Fid-tagging-schema.svg)](https://badge.fury.io/js/%40openstreetmap%2Fid-tagging-schema)

# iD Tagging Schema

This is the directory of OpenStreetMap tagging data used by the [iD editor](https://github.com/openstreetmap/iD).
It includes presets, fields, deprecations, and more.

## Participate!

* Read up about how you can contribute to the iD Tagging Schema on the [contributing page](CONTRIBUTING.md).
* [Translate!](CONTRIBUTING.md#Translating)
* See the [open issues](https://github.com/openstreetmap/id-tagging-schema/issues?state=open) in the issue tracker if you're looking for something to do.
* Need more help? Ping user `tyr_asd` (Martin Raifer) on [OpenStreetMap Discord](https://discord.gg/openstreetmap) (`#id` channel) or [OpenStreetMap US Slack](https://slack.openstreetmap.us/) (`#id` channel).

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
