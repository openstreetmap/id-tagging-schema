[![build](https://github.com/ideditor/schema-builder/workflows/build/badge.svg)](https://github.com/ideditor/schema-builder/actions?query=workflow%3A%22build%22)
[![npm version](https://badge.fury.io/js/%40ideditor%2Fschema-builder.svg)](https://badge.fury.io/js/%40ideditor%2Fschema-builder)

# schema-builder

This package lets you define and compile OpenStreetMap presets, fields, and other tagging
info into the format expected by the [iD editor](https://github.com/openstreetmap/iD).

The [iD Tagging Schema](https://github.com/openstreetmap/id-tagging-schema) project uses
this to manage iD's tags. You can use it to create a custom schema for your own iD instance.

## Usage

### Building Distribution Data

To validate your source data and compile output files for iD (i.e. when releasing a new schema version):

```JS
const schemaBuilder = require('@ideditor/schema-builder');
schemaBuilder.buildDist({
  inDirectory: 'data',
  interimDirectory: 'interim',
  outDirectory: 'dist',
  sourceLocale: 'en',
  taginfoProjectInfo: {
    name: 'IntrepiD',
    description: 'iD editor, but adventurous.',
    project_url: 'https://example.com/IntrepiD',
    contact_name: 'J. Maintainer',
    contact_email: 'maintainer@example.com'
  }
});
```

The following options are optional:

- `inDirectory`: `string`, The relative directory of the source data files. Defaults to `data`.
- `interimDirectory`: `string`, The relative directory of files needed during development but not for distribution. Be aware that
everything in this directory will be overwritten when building. Defaults to `interim`.
- `outDirectory`: `string`, The relative directory of the built data files intended for distribution. Be aware that
everything in this directory will be overwritten when building. Defaults to `dist`.
- `sourceLocale`: `string`, The code of the language/locale used for the translatable strings in the data files. Defaults to `en`.
- `taginfoProjectInfo`: `object`, Project metadata required by TagInfo ([Wiki](https://wiki.openstreetmap.org/wiki/Taginfo/Projects)). If this info is not provided, the `taginfo.json` file will not be built. See the [schema](https://github.com/taginfo/taginfo-projects/blob/master/taginfo-project-schema.json) for more details. The generated taginfo.json will use the following mnemonics to give context to the generated [description on taginfo](https://taginfo.openstreetmap.org/projects/id_editor#tags):
  - 🄿: [preset](https://github.com/openstreetmap/id-tagging-schema/tree/main/data/presets)
  - 🄵: [field](https://github.com/openstreetmap/id-tagging-schema/tree/main/data/fields)
  - 🄵🅅: field value
  - 🄳: [deprecated tag](https://github.com/openstreetmap/id-tagging-schema/blob/main/data/deprecated.json)
  - 🄳🄳: [discarded tag](https://github.com/openstreetmap/id-tagging-schema/blob/main/data/discarded.json)
- `processPresets`: `function(presets)`, An opportunity to edit the built presets.
- `processFields`: `function(fields)`, An opportunity to edit the built fields.
- `processCategories`: `function(categories)`, An opportunity to edit the built preset categories.
- `listReusedIcons`: `boolean` or `number`, If true, icons used by multiple searchable presets will be listed. If a number, icons used more than that number of times are listed. Defaults to `false`.

You can also include options from `schemaBuilder.fetchTranslations()` in order to
download translation files at the same time as compiling data.

### Building Development Data

To validate your source data and compile files needed during development:

```JS
const schemaBuilder = require('@ideditor/schema-builder');
schemaBuilder.buildDev({
  inDirectory: 'data',
  interimDirectory: 'interim',
  sourceLocale: 'en'
});
```

The following options are identical to those for `schemaBuilder.buildDist()`:
- `inDirectory`
- `interimDirectory`
- `sourceLocale`
- `processPresets`
- `processFields`
- `processCategories`
- `listReusedIcons`

### Validating Data

To validate your source data without compiling anything:

```JS
const schemaBuilder = require('@ideditor/schema-builder');
schemaBuilder.validate({
  inDirectory: 'data'
});
```

The following options are identical to those for `schemaBuilder.buildDist()`:
- `inDirectory`
- `processPresets`
- `processFields`
- `processCategories`
- `listReusedIcons`

### Fetching Translations

To download locale files from Transfiex:

```JS
const schemaBuilder = require('@ideditor/schema-builder');
schemaBuilder.fetchTranslations({
  outDirectory: 'dist',
  sourceLocale: 'en',
  translOrgId: 'openstreetmap',
  translProjectId: 'intrepid',
  translResourceIds: ['presets'],
  translReviewedOnly: ['de', 'es']
});
```

The following options are required:

- `translOrgId`: `string`, The ID of the Transfiex organization where the translation project is hosted.
- `translProjectId`: `string`, The ID of the Transfiex project within the organization where the schema resource is translated.

The following options are optional:

- `translResourceIds`: `[string]`, The IDs of the resources to download. Defaults to `['presets']`.
- `translCredentials`: `{ user: string, password: string }`, Your Transifex API credentials.
Defaults to those stored as JSON in a `transifex.auth` file in your working directory.
- `translReviewedOnly`: `boolean` or `[string]`, If `true`, only reviewed translations are included.
If `false`, all translations are included. If an array of locale codes, only reviewed
translations are included for those specified locale codes, while all translations are included
for the remaining locales.
- `outDirectory`: `string`, Same as the `outDirectory` option for `schemaBuilder.buildDist()`.
- `sourceLocale`: `string`, Same as the `sourceLocale` option for `schemaBuilder.buildDist()`.

## Source Files

Your `inDirectory` folder (`data` by default) should contain your source files with this structure:

```
data/
    categories/
        category1.json
        category2.json
        ...
    fields/
        field1.json
        field2.json
        ...
    presets/
        preset1.json
        preset2.json
        ...
    defaults.json
    deprecated.json
    discarded.json
```

The format for each file is defined in the [`schemas`](schemas) directory.

### Presets

A [preset](https://wiki.openstreetmap.org/wiki/Preset) represents a specific type of
[map feature](https://wiki.openstreetmap.org/wiki/Map_features). For example, presets
can exist for parks, restaurants, drinking water fountains, buildings, railway tracks,
and many more feature types.

iD editor preset and field types are defined in [JSON](http://en.wikipedia.org/wiki/JSON)
files located under the `data/presets` folder.

#### Preset Files

Presets are defined in JSON files located under `data/presets`. They're organized in a
directory hierarchy based on OSM key/value pairs. For example, the preset that matches
the tag `leisure=park` is in the file `data/presets/leisure/park.json`.

#### Preset Schema

A basic preset is of the form:

```javascript
{
    // Display name for this feature type in the `sourceLocale` language.
    "name": "Produce Stand",
    // Aliases are synonyms of the preset's name - this is for alternative
    // names a preset might also be known as
    "aliases": [
        "Farm Shop",
        "Farm Stand"
    ]
    // Terms are additional search terms for the preset - these are added to
    // fuel the search functionality. searching for 'vegetables' will bring
    // up this 'farm shop' preset
    "terms": [
        "fresh food",
        "fruits",
        "greengrocer",
        "orchard",
        "organics",
        "vegetables"
    ],
    // Tags that are added to the feature when selecting the preset,
    // and also used to match the preset against existing features.
    // You can use the value "*" to match any value.
    "tags": {
        "shop": "farm"
    },
    // The geometry types for which this preset is valid.
    // options are point, area, line, and vertex.
    // vertices are points that are parts of lines, like the nodes in a road
    // lines are unclosed ways, and areas are closed ways
    "geometry": [
        "point", "area"
    ]
    // The icon in iD which represents this feature.
    "icon": "maki-shop",
    // The names of fields that will appear by default in the editor sidebar.
    // See the fields documentation for details of what's valid here.
    "fields": [
        "{shop}",
        "organic"
    ],
    // The names of fields that the user can add manually. These will also
    // appear if the corresponding tags are present.
    "moreFields": [
        "produce"
    ]
}
```
The complete JSON schema for presets can be found in [`schemas/preset.json`](schemas/preset.json)


#### Preset Properties

##### `name`

The primary name of the feature type.

Upon merging into the `main` branch, this is sent to Transifex for translating to other localizations. Changing the name of an existing preset will require it to be re-translated to all localizations.

A preset can optionally re-use translated strings from another preset, by specifying the other preset's ID in the `name`. For example, `"name": "{presetId}"` or `"name": "{folder/presetId}"` would reuse the `name`, `terms` and `aliases` from that other preset. This is for example useful for regional presets which should get the same labels as the preset they are based on. The `presetId` is the same as the filename but ignoring the underscore convention for unsearchable presets. So for a preset at `folder/_name` the reference would be `{folder/name}`.

This property is required. There is no default.

##### `aliases`

A list of synonyms for the preset's `name`. These are alternative terms a preset might _also be known as_. For example, _Port_ could be added as an alias to the _Harbor_ preset. Terms which describe a specific sub-type of a preset should not be added as an alias (e.g. _Barber Shop_ should not be added as an alias to the _Hairdresser_ preset).

##### `terms`

A list of additional search terms or keywords for the preset. These might be names which describe a subset of the preset's features, or simply related terms a user might enter when searching for the preset.

##### `geometry`

An array of possible geometry types that a feature must have in order to match this preset.

* `point`: an OSM node that is not a member of any way
* `vertex`: an OSM node that is a member of one or more ways
* `line`: an OSM way that is not an area
* `area`: an OSM way that is closed/circular (the first and last nodes are the same) or a `type=multipolygon` relation
* `relation`: an OSM relation

Closed ways can be treated as both `line` or `area` geometry. If a preset allows both, iD will add an additional `area=yes` tag when choosing the preset for an area feature.

The geometry types should be listed in order of preference. For example, the preset for `leisure=swimming_pool` lists `area` before `point`.

This property is required. There is no default.

##### `tags`

An object with the `"key": "value"` tags a feature must have to match this preset. A `"*"` wildcard value can be set to have this preset match any value for that key.

A feature can only match one preset even if its tags and geometry could technically match more than one. iD will pick the best match based on `matchScore`, the number of tags, and the use of wildcard values.

This property is required. There is no default.

##### `addTags`

The tags that are added to the feature when selecting this preset. Defaults to `tags`. If needed, this property will typically be a superset of `tags`.

iD's validator will recommend that users add missing tags from `addTags` to matching features. For example, the Bridge preset has these properties:

```
    "tags": {
        "man_made": "bridge"
    },
    "addTags": {
        "man_made": "bridge",
        "layer": "1"
    },
```

When adding a feature with this preset, it will be given the tags `man_made=bridge` and `layer=1`. The user could then change `layer` to `3`, for instance, and the feature would still match the preset because it still has `man_made=bridge`. If the user removes the `layer` tag altogether, iD will recommend adding it back with a value of `1`.

##### `removeTags`

The tags that are removed from the feature when deselecting this preset. Defaults to `addTags` or if this is also not defined, to `tags`.

##### `fields`/`moreFields`

Both these properties are arrays of field paths (e.g. `description` or `generator/type`).
`fields` are shown by default and `moreFields` are shown if manually added by the
user or if a matching tag is present. Note that some fields have a [`prerequisiteTag`](#prerequisitetag)
property that limits when they will be shown.

A preset can reference the fields of another by using that preset's name contained in
brackets, like `{preset}`. For example, `{shop}` in `presets/shop/books.json` references and extends the fields
of `presets/shop.json`. When subfolders are used, the format is `{shop/books}` to reference the properties of the `shop/books.json`.

```javascript
"fields": [
    "{shop}",
    "internet_access"
],
"moreFields": [
    "{shop}",
    "internet_access/fee",
    "internet_access/ssid"
],
"tags": {
    "shop": "books"
}
```

If `fields` or `moreFields` are not defined, the values of the preset's "parent"
preset are used. For example, `shop/convenience` automatically uses the same
fields as `shop`.

In both explicit and implicit inheritance, fields for keys that define the
preset via `tags` are generally not inherited, even when specified by the parent explicity.
E.g. the `shop` field is not inherited by `shop/…` presets.
This can be overwritten by adding the field explicitly like `"fields": [ "shop", "{shop}" ],`

##### `icon`

An icon representing a preset, e.g. `"icon": "temaki-power_tower"` ([Example](https://github.com/openstreetmap/id-tagging-schema/blob/main/data/presets/power/tower.json)). More information about available icon sets and usage of icons can be found on the [icons subpage](ICONS.md).

##### `imageURL`

The URL of a remote image file. This does not fully replace `icon`—both may be shown in the UI.

For example, `imageURL` is used to specify the logos of brand presets from the [name-suggestion-index](https://github.com/osmlab/name-suggestion-index).

Bitmap images should be at least 100×100 px² to look good on high-resolution screens.

##### `searchable`

Deprecated or generic presets can include the property `"searchable": false`.
This means that they will be recognized by iD when editing existing data,
but will not be available as an option when adding new features.

By convention, unsearchable presets have filenames that begin with an underscore
(e.g. `data/presets/landuse/_farm.json`). However, when using the preset name as reference,
the underscore is omitted (e.g. `{landuse/farm}`).

##### `matchScore`

A number that ranks this preset against others that match the feature.

For example, a feature with `amenity=cafe` and `building=commercial` will match the Cafe preset instead of the Commercial Building preset because Commercial Building has a lower `matchScore`.

The default is `1.0`.

##### `locationSet`

An object with the identifiers of regions where this preset should or shouldn't be shown. By default, presets are available everywhere.

See the [location-conflation](https://github.com/ideditor/location-conflation) package for details.

```js
"locationSet": {
    "include": ["US"],
    "exclude": ["PR", "VI"]
}
```

##### `replacement`

The ID of a preset that is preferable to this one. iD's validator will flag features matching this preset and recommend that the user upgrade the tags.

When possible, use [`deprecated.json`](#deprecations) instead to specify upgrade paths for old tags. This property is meant for special cases, such as upgrades with geometry requirements.

##### `reference`

A key and optionally a value to link to the wiki documentation for this preset. Only necessary if the preset consists of several tags.

For example,
```javascript
"reference": {
    "key": "tower:type",
    "value": "communication"
}
```

### Fields

Fields are reusable form elements that can be associated with presets.

#### Field Files

Fields are defined in JSON files located under `data/fields`.

The field files are typically named according to their associated OSM key.
For example, the field for the tag `sport=*` is stored in the file
`data/fields/sport.json`. When a field has multiple versions that
depend on which preset is active, we add a suffix to the filename:
(`sport.json`, `sport_ice.json`, `sport_racing_motor.json`).

Some keys in OSM are namespaced using colons (':'). Namespaced fields
are nested in folders according to their tag.
For example, the field for the tag `piste:difficulty=*` is stored in the file
`data/fields/piste/difficulty.json`.


#### Field Schema

```js
{
    "key": "cuisine",
    "type": "combo",
    "label": "Cuisine"
}
```
The complete JSON schema for fields can be found in [`schemas/field.json`](schemas/field.json)

#### Field Properties

##### `label`

A sort desciption or caption of the field.

A field can optionally reference the label of another by using that field's name contained in brackets, like `{field}`. In which case the field's _terms_ are also automatically sourced from that other field. This is for example useful when there are multiple variants of fields for the same tag, which should all have the same labels.

##### `type`

A string specifying the UI and behavior of the field. Must be one of the following values.

###### Text fields

* `text` - Basic single line text field
* `number` & `integer` - Text field with up/down buttons for entering numbers (e.g. `width=*`)
* `localized` - Text field with localization abilities (e.g. `name=*`, `name:es=*`, etc.)
* `tel` - Text field for entering phone numbers (localized for editing location)
* `email` - Text field for entering email addresses
* `url` - Text field for entering URLs
* `identifier` - Text field for foreign IDs (e.g. `gnis:feature_id`)
* `colour` - Text field for entering colours
* `schedule` - Field for entering a recurring schedule (e.g., `opening_hours=*`, `service_times=*`)
* `textarea` - Multi-line text area (e.g. `description=*`)
* `date` - Text field for entering dates in ISO 8601 format.

###### Combo/Dropdown fields

* `combo` - Dropdown field for picking one option out of many (e.g. `surface=*`)
* `typeCombo` - Dropdown field picking a specific type from a generic category key<br/>
(e.g. `waterway=*`.  If unset, tag will be `waterway=yes`, but dropdown contains options like `stream`, `ditch`, `river`)
* `multiCombo` - Dropdown field for adding `yes` values to multiple keys with the same prefix (a common multikey)<br/>
(e.g. `recycling:*` -> `recycling:glass=yes`, `recycling:paper=yes`, etc.)
* `manyCombo` - Dropdown field for adding `yes` values to many different keys<br/>
(e.g. `bus`, `tram`, `train` -> `bus=yes`, `tram=yes`, etc.)
* `networkCombo` - Dropdown field that helps users pick a route `network` tag (localized for editing location)
* `semiCombo` - Dropdown field for adding multiple values to a semicolon-delimited list<br/>
(e.g. `sport=*` -> `soccer;lacrosse;athletics;field_hockey`)
* `directionalCombo` - Block of dropdowns for adding directional (e.g. `*:left`/`*:right` or `*:forward`/`*:backward`) tags on a linear way. This field was named `cycleway` until [`v5.3.0`](CHANGELOG.md#540). This field type requires that both the `keys` and `key` properties are specified (`key` for the _common_ (e.g. `:both`) subtag of this field and `keys` for the _directional_ (e.g. `:left`/`:right`) subtags).


###### Checkboxes

* `check` - 3-state checkbox: `yes`, `no`, unknown (no tag)
* `defaultCheck` - 2-state checkbox where checked produces `yes` and unchecked produces no tag
* `onewayCheck` - 3-state checkbox for `oneway` fields, with extra button for direction switching

###### Radio Buttons

* `radio` - Multiple choice radio button field
* `structureRadio` - Multiple choice structure radio button field, with extra input for bridge/tunnel level

###### Special

* `access` - Block of dropdowns for defining the `access=*` tags on a highway
* `address` - Block of text and dropdown fields for entering address information (localized for editing location)
* `roadspeed` - Numeric text field for speed and dropdown for "mph" / "km/h", defaulting to the speed unit used for roads in the feature's region
* `roadheight` - Numeric text field for height and dropdowns for "m" / "ft" and "in", defaulting to the height unit used for roads in the feature's region
* `restrictions` - Graphical field for editing turn restrictions
* `wikidata` - Search field for selecting a Wikidata entity
* `wikipedia` - Block of fields for selecting a wiki language and Wikipedia page

##### `usage`

A string specifying how iD uses the field. Must be one of the following values.

* `preset` - The field is listed in one or more preset files (default and most common value)
* `changeset` - The field is only used for changeset tags when uploading, e.g. `comment`
* `group` - The field is only used within another field such as `structure`, e.g. `cutting`
* `manual` - The field is only added by iD programmatically as needed, e.g. `restrictions`

##### `key`/`keys`

The `key` property names the OSM tag key that the field will edit. Some fields, like the `address` field, operate on more than one tag: These expect an array of keys in the `keys` property. The following table lists which field types accept which properties:

field type | `key` | `keys` | description | example
---------- | ----- | ------ | ----------- | -------
`text`, `number`, `integer`, `email`, `url`, `tel` | :heavy_check_mark: | optional | Optionally, these fields can match multiple tag `keys` of an OSM object: which is useful to support OSM tags which have more than one established tag key like `phone` and `contact:phone`.[^1] | `"key": "phone", "keys": ["phone", "contact:phone"]`
`address` | :heavy_check_mark: | :heavy_check_mark: | `keys` must contains all possible subtags to be used in the address field and `key` must contain the tag key prefix (e.g. `addr`). | `"key": "addr", "keys": ["addr:city", "addr:street", …]`
`wikipedia`, `wikidata` | :heavy_check_mark: | :heavy_check_mark: | As the values of these two fields should be updated in sync by the editor, the `keys` should always contain both the respective wikipedia and wikidata keys. | `"key": "flag:wikidata", "keys": ["flag:wikidata", "flag:wikipedia"]`
`directionalCombo` | :heavy_check_mark: | :heavy_check_mark: | For directional fields, the `key` is the tag to use when the OSM feature has the same attributes in both directions, while the `keys` are the two tags for the individual directions. iD considers `key` with and without the `:both` suffix (for example, `cycleway` and `cycleway:both`). | `"key": "cycleway", "keys": ["cycleway:right", "cycleway:left"]`
`access` | :x: | :heavy_check_mark: | `keys` lists all access tags to consider in the field. | `"keys": ["access", "foot", "bicycle",  …]`
`localized` | :heavy_check_mark: | :x: | `key` specified the main tag, which will also be used as the tag key prefix for localized versions of the tag (i.e. the `name` field will also display contents of the tags `name:*`). | `"key": "name"`
`multiCombo` | :heavy_check_mark: | :x: | This field allows to toggle multiple `yes/no` subtags which share a common tag prefix specified in the field's `key`. | `"key": "recycling:"`
`manyCombo` | :x: | :heavy_check_mark: | Similar to the `multiCombo` field, but here the `keys` property contains the full list of OSM tag keys which the options of the field should correspond to. | `"keys": ["hiking", "bicycle", …]`
`structureRadio` | :x: | :heavy_check_mark: | Like the `radio` field, but operates on multiple tags: Selecting an option will remove the tag for the previously active option. | `"keys": ["bridge", "tunnel", …]`
`restrictions` | :x: | :x: | A special field which does not operate on tags, therefore does not need `key` or `keys`. |
all other fields | :heavy_check_mark: | :x: | A regular field which only operates on a single tag. | `"key": "oneway"`

[^1]: The intended behaviour of a field with alternative `keys` is the following: If an OSM feature does not yet have a tag of the given `keys`, the supplied `key` will be used; if a feature has a single tag which matches a key from the `keys`, it should be used by the field; if a feature has multiple tags matching a key from the `keys` alternatives, the field should update them simultaneously and display a _multiple/conflicting values_ message if necessary.

##### `universal`

If a field definition contains the property `"universal": true`, this field will
appear in the "Add Field" list for all presets

##### `geometry`

If specified, only show the field for this kind of geometry. Should contain
one of `point`, `vertex`, `line`, `area`.

##### `default`

The default value for the field. For example, the `building_area.json` field
will automatically add the tag `building=yes` to certain presets that are
associated with building features (but only if drawn as a closed area).

```js
{
    "key": "building",
    "type": "combo",
    "default": "yes",
    "geometry": "area",
    "label": "Building"
}
```

##### `placeholder`

The text which should be shown in a field's input box when no value has been entered yet. This text is shown as a grayed-out text and can be used to give the user some examples of what to enter in the respective field.

A field can optionally reference the placeholder text of another by using that field's name contained in brackets, like `{field}`. In which case the field's _terms_ are also automatically sourced from that other field. This is for example useful when there are multiple variants of fields for the same tag, which should all have the same labels.

##### `options`

Combo field types can provide dropdown values in an `options` array.
The user can pick from any of the options, or type their own value.

```js
{
    "key": "diaper",
    "type": "combo",
    "label": "Diaper Changing Available",
    "options": ["yes", "no", "room", "1", "2", "3", "4", "5"]
}
```

##### `strings`

The `strings` object contains values that the field wants to be translated on Transifex.

[Combo field types](#combodropdown-fields) can accept custom translations for `options` values via the `strings` property.
These values populate the `options` property if it isn't otherwise specified.
If `autoSuggestions` is `true` (as per default), then raw and labeled values might be mixed
in the dropdown suggestions.

The options can either be a string or `{"title": "…", "description": "…"}` object where the description is shown on mouse over
in iD to give additional context on a value ([Example](https://github.com/openstreetmap/id-tagging-schema/blob/main/data/fields/parking.json)).

```js
{
    "key": "smoothness",
    "type": "combo",
    "label": "Smoothness",
    "placeholder": "Thin Rollers, Wheels, Off-Road...",
    "strings": {
        "options": {
            "excellent": "Thin Rollers: rollerblade, skateboard",
            "good": "Thin Wheels: racing bike",
            "intermediate": "Wheels: city bike, wheelchair, scooter",
            "bad": "Robust Wheels: trekking bike, car, rickshaw",
            "very_bad": "High Clearance: light duty off-road vehicle",
            "horrible": "Off-Road: heavy duty off-road vehicle",
            "very_horrible": "Specialized off-road: tractor, ATV",
            "impassable": "Impassable / No wheeled vehicle"
        }
    }
}
```

```js
//…
    "strings": {
        "options": {
            "excellent": {
                "title": "Thin Rollers: rollerblade, skateboard",
                "description": "As-new asphalt or concrete, smooth paving stones with seamless connections, etc."
            },
            //…
        }
    }
//–
```

[Checkbox field tyes](#checkboxes) use the options keys to specify the values of the OSM tag corresponding
to the different states of the checkbox input element, in the following order:
1. fields of type `check`: _unset state_ (must use the option `undefined`), _checked state_,
_unchecked state_ ([example](https://github.com/openstreetmap/id-tagging-schema/blob/2375a6b/data/fields/parcel_pickup.json))
2. fields of type `defaultCheck`: _unchecked state_ (must use the option `undefined`), _checked state_ ([example](https://github.com/openstreetmap/id-tagging-schema/blob/2375a6b/data/fields/crossing_raised.json))

The value of each option can be a reference to another field or preset's name. For example:
```json
  "strings": {
    "options": {
      "portal_crane": "{presets/man_made/crane/portal_crane}",
    }
  }
```

##### `stringsCrossReference`

An optional property to reference to the strings of another field, indicated  by using that field's name contained in brackets, like `{field}`. This is for example useful when there are multiple variants of fields for the same tag, which should all use the same strings. For example:

```json
  "stringsCrossReference": "{sport}",
  "options": [
      "ice_skating",
      "ice_hockey",
      "curling"
  ]
```

This would inherit all translations from the `gender` field but keep only the defined options.

##### `autoSuggestions`

For combo fields, the most common tag values will be fetched from TagInfo and shown
in the dropdown list if `autoSuggestions` is `true`. The default is `true`.

##### `customValues`

For combo fields, the user can type a custom value in addition to choosing any shown
in the dropdown list if `customValues` is `true`. The default is `true`.

##### `snake_case`

For combo fields, spaces are replaced with underscores in the tag value if `snake_case` is `true`. The default is `true`.

##### `caseSensitive`

For combo fields, case-sensitive field values are allowed if `caseSensitive` is `true`. The default is `false`.

##### `allowDuplicates`

For semiCombo fields, duplicate values are allowed if `allowDuplicates` is `true`. The default is `false`.

##### `minValue`

For `number` & `integer` fields, the lowest valid value. There is no default.

##### `maxValue`

For `number` & `integer` fields, the greatest valid value. There is no default.

##### `increment`

For `number` & `integer` fields, the amount the stepper control increases or decreases the value. The default is `1`.

##### `prerequisiteTag`

An object defining the tags the feature needs before this field will be displayed. It may have this property:

- `key`: The key for the required tag.

And may optionally be combined with one of these properties, but not both:

- `values`: The value(s) that the key must have. For backwards compatibly, `value` can also be used.
- `valuesNot`: The value(s) that the key must not have. For backwards compatibly, `valueNot` can also be used.

Alternatively, the object may contain a single property:

- `keyNot`: The key that must not be present.

If a feature already has a value for this field's `key`, it will always display and ignore the prerequsites.
If a field with `prerequisiteTag`s is referenced as `moreFields` the "Add field" dropdown will only include it if the prerequisites are met.

Example: This is how we show the Internet Access Fee field only if the feature has an `internet_access` tag not equal to `no`.

```js
"prerequisiteTag": {
    "key": "internet_access",
    "valueNot": "no"
}
```

##### `locationSet`

An object with the identifiers of regions where this field should or shouldn't be shown. By default, fields are available everywhere.

See the [location-conflation](https://github.com/ideditor/location-conflation) package for details.

```js
"locationSet": {
    "include": ["US"],
    "exclude": ["PR", "VI"]
}
```

##### `urlFormat`

For `identifier` fields, the permalink URL of the external record. It must contain a `{value}` placeholder where the tag value will be inserted. For example:

```js
"urlFormat": "https://geonames.usgs.gov/apex/f?p=gnispq:3:::NO::P3_FID:{value}"
```

##### `pattern`

For `identifier` fields, the regular expression that valid values are expected to match to be linkable.

##### `icons`

For combo fields, the `icons` object might contain the name of icons which represent the different values of the field. More information about available icon sets and usage of icons can be found on the [icons subpage](ICONS.md).

Combo field types can accept key-label pairs in the `options` value of the `strings` property.

```js
{
    "key": "crossing:markings",
    "type": "combo",
    "label": "Crossing Markings",
    "icons": {
        "zebra": "iD-crossing_markings-zebra",
        "lines": "iD-crossing_markings-lines",
        …
    }
}
```

##### `iconsCrossReference`

An optional property to reference to the icons of another field, indicated  by using that field's name contained in brackets, like `{field}`. This is for example useful when there are multiple variants of fields for the same tag, which should all use the same icons.

### Deprecations

Use `deprecated.json` ([Example](https://github.com/openstreetmap/id-tagging-schema/blob/main/data/deprecated.json), [Schema](https://github.com/ideditor/schema-builder/blob/main/schemas/deprecated.json)) to specify tag deprecations.

Usage example: iD Editor will show an information panel that informs users about deprecated tags and an update-tag-action.

**Example: Default Case**

To update a specific tag to a specific new tag

```
  {
    "old": {"foo": "value"},
    "replace": {"bar": "value"}
  },
```

**Example: Change the key, keep the value**

```
  {
    "old": {"foo": "*"},
    "replace": {"bar": "$1"}
  },
```

**Example: Delete a tag**

```
  {
    "old": {"content": "unknown"}
  },
```

## Contributing

iD's [code of conduct](https://github.com/openstreetmap/iD/blob/release/CODE_OF_CONDUCT.md) and
[privacy policy](https://github.com/openstreetmap/iD/blob/release/PRIVACY.md) also apply to this project.
