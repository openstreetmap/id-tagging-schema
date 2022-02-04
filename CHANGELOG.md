# What's New

Thanks to all our contributors, users, and the many people that are making the iD-tagging-schema great! :heart:


_Breaking developer changes, which may affect downstream projects or sites that consume iD-tagging-schema, are marked with a_ :warning:

<!--
# A.B.C
#### :mega: Release Highlights
#### New Presets
#### Changed Presets
#### New and Changed Fields

[#xxxx]: https://github.com/openstreetmap/id-tagging-schema/issues/xxxx
[#xxxx]: https://github.com/openstreetmap/id-tagging-schema/pull/xxxx
[@xxxx]: https://github.com/xxxx
-->

# 3.2.2

#### Bugfixes

* Fix `maxspeed` field not showing up in the US and Canada ([#388])

[#388]: https://github.com/openstreetmap/id-tagging-schema/issues/388


# 3.2.1

#### Bugfixes

* Patch a bug which caused pickup/dropoff parcel lockers to incorrectly get a `parcel_pickup=no` tag when upgrading from the old tagging schema ([#364], thanks [@riQQ])

[#364]: https://github.com/openstreetmap/id-tagging-schema/issues/364

[@riQQ]: https://github.com/riQQ


# 3.2.0

#### :mega: Release Highlights
* Add preset for `crossing=traffic_signals` ([#192])
* Add value `compacted` to `surface` field ([#242])
* Add `unknown` as a possible value for `access` fields ([#195], [#196], [#316])
* Update golf presets to match current recommendations on the OSM wiki ([#203])
* Add new tag for parcel lockers: `amenity=parcel_locker` ([#339])

Thanks to all contributors: [@1ec5], [@andrewharvey], [@bagage], [@Bertware], [@bhousel], [@dieterdreist], [@fdr], [@FloEdelmann], [@jdhoek], [@jonsger], [@k-yle], [@kjonosm], [@Lukas458], [@matkoniecz], [@mbrzakovic], [@natfoot], [@nchristensen], [@Nekzuris], [@Pengor], [@peternewman], [@rene78], [@rivermont], [@TheAdventurer64], [@tordans], [@ttomasz], [@westnordost], all translators and everyone else who suggested improvements!

#### New and Changed Presets, New and Changed Fields

* Add `payment:*` as an optional field to `amenity=restaurant` ([#115])
* Add `name` and `voltage` fields to `power=substation` preset ([#187])
* Add `drinking_water` as optional field to `tourism=camp_site` preset ([#191])
* Add presets for various shooting sport facilities ([#240])
* Allow `natural=spring` to be mapped as areas ([#282])
* Add additional fields to `man_made=survey_point` preset ([#271])
* Allow some point features to be mapped as vertex nodes on lines (`man_made=adit`, `man_made=mast`, `man_made=tower`, `man_made=lighthouse`, `man_made=petroleum_well`, `advertising=board`) ([#154], [#270], [#315])
* Add commonly used values for `cuisine` field ([#252], [#296])
* Simplify names of turn restriction presets ([#262])
* Make `population` a numeric field ([#260])
* Add `highchair` field to restaurants and cafes ([#280])
* Add preset for physical compass roses (`man_made=compass_rose`) ([#250])
* Add optional `branch` field to presets with have a `brand` field (such as banks) ([#249])
* Add preset for `man_made=video_wall` ([#230])
* Add `locked` field to barrier presets ([#199])
* Add `crossing:bell` and `crossing:light` fields to railway-road crossing preset ([#194])
* Add `opening_date` and `check_date` fields to the `building=construction` preset ([#171])
* Add a preset for `amenity=ticket_validator` ([#166])
* Add `capacity` field to "camp site" presets ([#107])
* Add preset for `community_centre=youth_centre` ([#83], [#297])
* Add preset for `parking=street_side` ([#73])
* Add `building` field to climbing gyms ([#319])
* Add `layer=1` to `building=roof` features by default ([#227])
* Add preset for `healthcare:speciality=gynaecology` ([#309])
* Add preset for `police=checkpoint` ([#304])
* Add `species:wikidata` field to plant presets ([#320])
* Add `capacity` field for school and similar presets ([#136])
* Allow multi-strey parking mapped as points and don't automatically add the `building=parking` tag ([#277])
* Add unit "(Meters)" to label of `ele` field ([#95])
* Add preset for `healthcare=sample_collection` ([#324])
* Add `ref` field to milestone presets ([#110])
* Add `speedway` as a value for the `sports` tag of the `highway=raceway` preset ([#111])
* Drop the `name` field from `area:highway` presets ([#328])
* Show contact information fields by default for touristic accommodation presets
* Add preset for `area:highway=footway` ([#329], [#131])
* Add field to indicate what kind of activity `information=map` and `information=guidepost` features are depicting (e.g. `hiking=yes`) ([#45])
* Indicate that `covered` field can be _assumed to be "no"_ for roads and railways ([#130])
* Allow `amenity=charging_station` to be mapped as an area ([#330])
* Add `direction` field to `barrier=height_restrictor` preset ([#133])
* Add preset for `building=synagogue` ([#141])
* Switch icon of `place=square` preset from a "pedestrian" to a "place marker" ([#167])
* Tweak fields shown for the `amenity=telephone` preset ([#208])
* Make `name` field optional for rivers and stream areas ([#247])
* Drop `building` field from certain horse riding presets ([#273])
* More details for water tank presets ([#344])
* More detailed wetland presets ([#281], [#113])
* Add preset for pickleball courts ([#286])
* Specify values for `embassy` field ([#343])
* Add `layby` as a value for parking areas ([#287])
* Add preset for `emergency=assemply_point` ([#292])
* Make it easier to find the `noexit=yes` preset ([#298])
* Use simpler language for parking orientation descriptions ([#299])
* Add preset for `landuse=education` ([#311])
* Add `direction` as an optional field to the `amenity=bench` preset ([#342])
* Add preset for `landuse=salt_pond` ([#258])
* Add `smoothness` field for cycleway and similar presets ([#346])
* Add values for the `castle_type` field ([#350])
* Add labels for `recycling:` subtags ([#349])
* Add `bin` field to `vending=excrement_bags` preset ([#355])
* Add field for `usage` tag of canals ([#348])
* Hide `man_made=couryard` preset ([#354])
* Add optional `wikimedia_commons` field to `emergency=defibrillator` preset ([#359])
* Add `flag:name` and `flag:wikidata` fields to `man_made=flagpole` preset ([#218])

#### Bugfixes

* Parking spaces don't suggest adding `capacity=1` ([#278])
* Avoid lowercasing values of `cycle_network` and `traffic_sign` fields ([#212])
* Don't suggest to add `highway=service` to all slipways ([#2])
* Don't add `building=yes` to `amenity=social_facility` features ([#159])
* Make `man_made=manhole` the primary tag of the manhole preset, fixes adding an unnecessary `manhole=yes` when creating such features ([#162])
* Don't add or suggest to add `landuse=grass` tags to golf features like fairways, greens, etc. ([#203])
* Fix dead reference links for `gnis:feature_id` field ([#272])
* Don't add `landuse=military` to `military=barracks` anymore ([#158])

#### Regional Presets

* Add `cai_scale` as an optional field for hiking relation routes in Italy ([#360])
* Add cardinal `direction` field to road, bike and train route relations in the US, Canada and New Zealand ([#214])
* Add `expressway` field to trunk and primary road presets in the US ([#216])
* Show `maxspeed:advisory` instead of `maxspeed` on freeway ramps in the US ([#217])

#### Deprecated Tags

* Add ~~`converted_by`~~ to list of discarable tags ([#116])
* ~~`landuse=churchyard`~~ :arrow_right: `landuse=religious` ([#4])
* ~~`information=citymap`~~, ~~`information=hikingmap`~~, ~~`information=bicyclemap`~~ :arrow_right: `information=map` + `map_type=*` ([#45])
* ~~`information=nature`~~, ~~`information=history`~~, ~~`information=wild_life`, ~~`information=wildlife`~~ :arrow_right: `information=board` + `board_type=*` ([#45])
* ~~`amenity=vending_machine` + `vending=parcel_pickup`/`parcel_mail_in`~~ :arrow_right: `amenity=parcel_locker`, `parcel_pickup=*`/`parcel_mail_in=*` ([#339])
* ~~`landuse=school`~~ :arrow_right: `landuse=education` ([#311])

#### Documentation and Other Changes

* Update taginfo information ([#238])
* Add section about how translations work ([#55], [#200], [#245])
* Add _OSM Notes_ to the list of suggested (changeset) `source` values ([#188])
* Regional fields and presets are marked with a suffix in the file name (e.g. `expressway-US.json`)
* Add automated spell checks ([#80])

[#2]: https://github.com/openstreetmap/id-tagging-schema/issues/2
[#4]: https://github.com/openstreetmap/id-tagging-schema/issues/4
[#45]: https://github.com/openstreetmap/id-tagging-schema/issues/45
[#45]: https://github.com/openstreetmap/id-tagging-schema/issues/45
[#55]: https://github.com/openstreetmap/id-tagging-schema/issues/55
[#73]: https://github.com/openstreetmap/id-tagging-schema/pull/73
[#80]: https://github.com/openstreetmap/id-tagging-schema/pull/80
[#83]: https://github.com/openstreetmap/id-tagging-schema/pull/83
[#95]: https://github.com/openstreetmap/id-tagging-schema/issues/95
[#107]: https://github.com/openstreetmap/id-tagging-schema/pull/107
[#110]: https://github.com/openstreetmap/id-tagging-schema/issues/110
[#111]: https://github.com/openstreetmap/id-tagging-schema/issues/111
[#113]: https://github.com/openstreetmap/id-tagging-schema/pull/113
[#115]: https://github.com/openstreetmap/id-tagging-schema/pull/115
[#116]: https://github.com/openstreetmap/id-tagging-schema/pull/116
[#130]: https://github.com/openstreetmap/id-tagging-schema/issues/130
[#131]: https://github.com/openstreetmap/id-tagging-schema/issues/131
[#133]: https://github.com/openstreetmap/id-tagging-schema/issues/133
[#136]: https://github.com/openstreetmap/id-tagging-schema/pull/136
[#141]: https://github.com/openstreetmap/id-tagging-schema/issues/141
[#154]: https://github.com/openstreetmap/id-tagging-schema/pull/154
[#158]: https://github.com/openstreetmap/id-tagging-schema/issues/158
[#159]: https://github.com/openstreetmap/id-tagging-schema/issues/159
[#162]: https://github.com/openstreetmap/id-tagging-schema/issues/162
[#166]: https://github.com/openstreetmap/id-tagging-schema/pull/166
[#167]: https://github.com/openstreetmap/id-tagging-schema/issues/167
[#171]: https://github.com/openstreetmap/id-tagging-schema/pull/171
[#187]: https://github.com/openstreetmap/id-tagging-schema/pull/187
[#188]: https://github.com/openstreetmap/id-tagging-schema/issues/188
[#191]: https://github.com/openstreetmap/id-tagging-schema/pull/191
[#192]: https://github.com/openstreetmap/id-tagging-schema/pull/192
[#194]: https://github.com/openstreetmap/id-tagging-schema/pull/194
[#195]: https://github.com/openstreetmap/id-tagging-schema/pull/195
[#196]: https://github.com/openstreetmap/id-tagging-schema/pull/196
[#199]: https://github.com/openstreetmap/id-tagging-schema/pull/199
[#200]: https://github.com/openstreetmap/id-tagging-schema/pull/200
[#203]: https://github.com/openstreetmap/id-tagging-schema/issues/203
[#208]: https://github.com/openstreetmap/id-tagging-schema/issues/208
[#212]: https://github.com/openstreetmap/id-tagging-schema/pull/212
[#214]: https://github.com/openstreetmap/id-tagging-schema/pull/214
[#216]: https://github.com/openstreetmap/id-tagging-schema/pull/216
[#217]: https://github.com/openstreetmap/id-tagging-schema/pull/217
[#218]: https://github.com/openstreetmap/id-tagging-schema/pull/218
[#227]: https://github.com/openstreetmap/id-tagging-schema/pull/227
[#230]: https://github.com/openstreetmap/id-tagging-schema/pull/230
[#238]: https://github.com/openstreetmap/id-tagging-schema/pull/238
[#240]: https://github.com/openstreetmap/id-tagging-schema/pull/240
[#242]: https://github.com/openstreetmap/id-tagging-schema/pull/242
[#245]: https://github.com/openstreetmap/id-tagging-schema/pull/245
[#247]: https://github.com/openstreetmap/id-tagging-schema/issues/247
[#249]: https://github.com/openstreetmap/id-tagging-schema/pull/249
[#250]: https://github.com/openstreetmap/id-tagging-schema/pull/250
[#252]: https://github.com/openstreetmap/id-tagging-schema/pull/252
[#258]: https://github.com/openstreetmap/id-tagging-schema/issues/258
[#260]: https://github.com/openstreetmap/id-tagging-schema/pull/260
[#262]: https://github.com/openstreetmap/id-tagging-schema/pull/262
[#270]: https://github.com/openstreetmap/id-tagging-schema/pull/270
[#271]: https://github.com/openstreetmap/id-tagging-schema/pull/271
[#272]: https://github.com/openstreetmap/id-tagging-schema/issues/272
[#273]: https://github.com/openstreetmap/id-tagging-schema/issues/273
[#277]: https://github.com/openstreetmap/id-tagging-schema/issues/277
[#278]: https://github.com/openstreetmap/id-tagging-schema/pull/278
[#280]: https://github.com/openstreetmap/id-tagging-schema/pull/280
[#282]: https://github.com/openstreetmap/id-tagging-schema/pull/282
[#286]: https://github.com/openstreetmap/id-tagging-schema/issues/286
[#287]: https://github.com/openstreetmap/id-tagging-schema/issues/287
[#292]: https://github.com/openstreetmap/id-tagging-schema/issues/292
[#296]: https://github.com/openstreetmap/id-tagging-schema/pull/296
[#297]: https://github.com/openstreetmap/id-tagging-schema/pull/297
[#298]: https://github.com/openstreetmap/id-tagging-schema/issues/298
[#299]: https://github.com/openstreetmap/id-tagging-schema/issues/299
[#304]: https://github.com/openstreetmap/id-tagging-schema/pull/304
[#309]: https://github.com/openstreetmap/id-tagging-schema/pull/309
[#311]: https://github.com/openstreetmap/id-tagging-schema/issues/311
[#315]: https://github.com/openstreetmap/id-tagging-schema/pull/315
[#316]: https://github.com/openstreetmap/id-tagging-schema/pull/316
[#319]: https://github.com/openstreetmap/id-tagging-schema/pull/319
[#320]: https://github.com/openstreetmap/id-tagging-schema/pull/320
[#324]: https://github.com/openstreetmap/id-tagging-schema/pull/324
[#328]: https://github.com/openstreetmap/id-tagging-schema/pull/328
[#329]: https://github.com/openstreetmap/id-tagging-schema/pull/329
[#330]: https://github.com/openstreetmap/id-tagging-schema/pull/330
[#339]: https://github.com/openstreetmap/id-tagging-schema/pull/339
[#342]: https://github.com/openstreetmap/id-tagging-schema/pull/342
[#343]: https://github.com/openstreetmap/id-tagging-schema/pull/343
[#344]: https://github.com/openstreetmap/id-tagging-schema/issues/344
[#346]: https://github.com/openstreetmap/id-tagging-schema/pull/346
[#348]: https://github.com/openstreetmap/id-tagging-schema/issues/348
[#349]: https://github.com/openstreetmap/id-tagging-schema/pull/349
[#350]: https://github.com/openstreetmap/id-tagging-schema/pull/350
[#354]: https://github.com/openstreetmap/id-tagging-schema/issues/354
[#355]: https://github.com/openstreetmap/id-tagging-schema/pull/355
[#359]: https://github.com/openstreetmap/id-tagging-schema/issues/359
[#360]: https://github.com/openstreetmap/id-tagging-schema/issues/360

[@1ec5]: https://github.com/1ec5
[@andrewharvey]: https://github.com/andrewharvey
[@bagage]: https://github.com/bagage
[@Bertware]: https://github.com/Bertware
[@bhousel]: https://github.com/bhousel
[@dieterdreist]: https://github.com/dieterdreist
[@fdr]: https://github.com/fdr
[@FloEdelmann]: https://github.com/FloEdelmann
[@jdhoek]: https://github.com/jdhoek
[@jonsger]: https://github.com/jonsger
[@k-yle]: https://github.com/k-yle
[@kjonosm]: https://github.com/kjonosm
[@Lukas458]: https://github.com/Lukas458
[@matkoniecz]: https://github.com/matkoniecz
[@mbrzakovic]: https://github.com/mbrzakovic
[@natfoot]: https://github.com/natfoot
[@nchristensen]: https://github.com/nchristensen
[@Nekzuris]: https://github.com/Nekzuris
[@Pengor]: https://github.com/Pengor
[@peternewman]: https://github.com/peternewman
[@rene78]: https://github.com/rene78
[@rivermont]: https://github.com/rivermont
[@TheAdventurer64]: https://github.com/TheAdventurer64
[@tordans]: https://github.com/tordans
[@ttomasz]: https://github.com/ttomasz


# 3.1.0

#### :mega: Release Highlights
* Added Preset Aliases. In future these will improve iD search per following [instructions](https://github.com/openstreetmap/iD/issues/6139). Big thanks to [@quincylvania]!
* Huge amount of Translations have arrived for translatable labels (strings - options). Big thanks to the translators!

#### New Presets - big thanks to [@westnordost] and [@quincylvania]
* Add Main Entrance
* Add Oil-Fired Power Plant
* Add Waste Incinerating Plant
* Add Inclined Elevator (close [#75])
* Add Mountain Biking Route (close [#99])
* Add Solar Panel Canopy and Rooftop Solar Panel presets (close [#101])
* Add Via field to route relations (re: [#104])
* Add Indoor Play Center and Indoor Playground preset (close [#98])

[#104]: https://github.com/openstreetmap/id-tagging-schema/issues/104
[#101]: https://github.com/openstreetmap/id-tagging-schema/issues/101
[#99]: https://github.com/openstreetmap/id-tagging-schema/issues/99
[#98]: https://github.com/openstreetmap/id-tagging-schema/issues/98
[#75]: https://github.com/openstreetmap/id-tagging-schema/issues/75

#### Changed Presets
* 'Riding Route' changed to 'Horse Riding Route'

#### New and Changed Fields
* Add aircraft holding position type (close [#100])

[#100]: https://github.com/openstreetmap/id-tagging-schema/issues/100

[@westnordost]: https://github.com/westnordost
[@quincylvania]: https://github.com/quincylvania

# ≤ 3.0.0

#### For versions ≤ 3.0.0 please visit the [iD changelog](https://github.com/openstreetmap/iD/blob/develop/CHANGELOG.md) :rocket: Presets sections
