[![test](https://github.com/openstreetmap/id-tagging-schema/actions/workflows/test.yml/badge.svg?branch=main)](https://github.com/openstreetmap/id-tagging-schema/actions/workflows/test.yml) [![npm version](https://badge.fury.io/js/%40openstreetmap%2Fid-tagging-schema.svg)](https://badge.fury.io/js/%40openstreetmap%2Fid-tagging-schema)

# iD Tagging Schema

This is the directory of OpenStreetMap tagging data used by the [iD editor](https://github.com/openstreetmap/iD) and [others](https://github.com/openstreetmap/id-tagging-schema/wiki/Projects-that-are-using-this-tagging-schema).
It includes presets, fields, deprecations, and more, recording various information about OpenStreetMap tagging, in a machine-readable format for easy use by editor software.
It does this by abstracting and slightly simplifying OpenStreetMap's [Folksonomy](https://en.wikipedia.org/wiki/Folksonomy) as documented on the [OpenStreetMap Wiki](https://wiki.openstreetmap.org/), the [community forum](https://community.openstreetmap.org/) and other sources.
The main goal is to allow OSM editing software to display the OSM data in a way that is intuitive and easy to understand for the user (i.e. such that they don't have to read the full documentation in order to use the respective tags). iD tagging schema is following community consensus rather than inventing new tagging methods.

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

You can use `npm install @openstreetmap/id-tagging-schema` to obtain data.

You can also fetch directly from [dist/](dist/) folder of this repository.

See [schema](SCHEMA.md) file for documentation of structure of content published here. It is a structured, machine-readable content but it represents a bit complex situation.

### Usage Example

Example of a common scenario would be going from tags to feature name in a specific language. For example we may be looking for French label of `amenity=vending_machine vending=flowers` object.

In such case going through [dist/presets.json](dist/presets.json) and finding best match for these tags should find `amenity/vending_machine/flowers` preset, based on its tag definition: 

```
        "tags": {
            "amenity": "vending_machine",
            "vending": "flowers"
        },
```

Then [dist/translations/fr.json](dist/translations/fr.json) may be searched for `amenity/vending_machine/flowers` code, getting us wanted label.

Note that in real use likely prefetched minified versions of these files would be used.

Also, in real use other properties of preset should be considered. Tag matching should also take into account [`addTags` property](https://github.com/openstreetmap/id-tagging-schema/blob/main/SCHEMA.md#addtags).

When multiple presets match then multiple factors should be considered when ordering them. For example `amenity=vending_machine` from out example matches to far more presets. But match on multiple tags should trump that.

In other cases [`matchScore`](https://github.com/openstreetmap/id-tagging-schema/blob/main/SCHEMA.md#matchscore) may be defined and should be taken into consideration.

Filtering by [`geometry`](https://github.com/openstreetmap/id-tagging-schema/blob/main/SCHEMA.md#geometry) also should be performed. Some presets are valid [only in some parts of the world](https://github.com/openstreetmap/id-tagging-schema/blob/main/SCHEMA.md#locationset).

### Kotlin Multiplatform

The [westnordost/osmfeatures](https://github.com/westnordost/osmfeatures) project,
a component of [StreetComplete](https://github.com/westnordost/StreetComplete),
makes it easier to use this data with Android, iOS and Java platforms.

## Related Projects

* The [OpenStreetMap wiki](https://wiki.openstreetmap.org/wiki/Map_features) documents the current usage of tags, and hosts discussions about proposed new tags.
* iD also incorporates preset data from the [name-suggestion-index](https://github.com/osmlab/name-suggestion-index).
* Other editors also include their own models of OSM tagging. See for example [Vespucci's](https://github.com/simonpoole/beautified-JOSM-preset) or [JOSM's](https://josm.openstreetmap.de/wiki/Presets) tagging presets.

## Contributing

See the dedicated [CONTRIBUTING](CONTRIBUTING.md) page for information about this.
