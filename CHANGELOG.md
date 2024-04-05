# What's New

Thanks to all our contributors, users, and the many people that are making the iD-tagging-schema great! :heart:


_Breaking developer changes, which may affect downstream projects or sites that consume iD-tagging-schema, are marked with a_ :warning:

<!--
# A.B.C
##### YYYY-MMM-DD

#### :mega: Release Highlights
#### New Presets
#### Changed Presets
#### New and Changed Fields
#### Regional Presets and Fields
#### Deprecated Tags
#### Bugfixes
#### Documentation and Other Changes

[#xxxx]: https://github.com/openstreetmap/id-tagging-schema/issues/xxxx
[#xxxx]: https://github.com/openstreetmap/id-tagging-schema/pull/xxxx
[@xxxx]: https://github.com/xxxx
-->

# 6.7.3
##### 2024-Apr-5

* Fix error in tag upgrade rule: `traffic_calming=island + area=yes` was falsely upgraded to `area:highway=traffic_calming` instead of `…=traffic_island` ([#1180])

[#1180]: https://github.com/openstreetmap/id-tagging-schema/issues/1180


# 6.7.2
##### 2024-Mar-15

* Upgrade objects tagged with `traffic_calming=island + area=yes` to `area:highway=traffic_island` ([#1162])

[#1162]: https://github.com/openstreetmap/id-tagging-schema/issues/1162


# 6.7.1
##### 2024-Mar-14

* Fix URLs to icons from the maki icon set in the taginfo-project output ([schema-builder#119])

[schema-builder#119]: https://github.com/ideditor/schema-builder/pull/119


# 6.7.0
##### 2024-Mar-14

#### New Presets
* Add preset for `man_made=clarifier` ([#1091], thanks [@arch0345])
* Add preset `amenity=dog_toilet` ([#1095], thanks [@cnotin])
* Add preset for Book Return Drop Boxes (`amenity=library_dropoff`) ([#1037], thanks [@arch0345])
* Add preset for Hot Tub (`leisure=hot_tub`) ([#1008], thanks [@arch0345])
* Add preset for `emergency=disaster_response` ([#1108], thanks [@andrewharvey])
* Add preset for `amenity=luggage_locker` ([#1121], thanks [@kjonosm])
* Add preset for Kitchen Garden (`leisure=garden` + `garden:type=kitchen`) ([#1135], thanks [@imagoiq])
* Add preset for `historic=cannon` ([#1134], thanks [@qugebert])
* Add preset for `amenity=bicycle_wash` ([#1032], thanks [@mcliquid])
#### Changed Presets
* Add `ref` field to `railway=switch` preset ([#1083], thanks [@gy-mate])
* Improve icon for Thai Restaurant preset ([#1090], thanks [@louwers])
* Move `bottle` field to optional fields in the Drinking Water preset ([#1101])
* Add access field to Parking Space preset ([#1123], thanks [@watmildon])
* Include Informal Path preset in Paths category ([#1131], thanks [@k-yle])
* Add Structure field to Steps preset to mark them as a bridge for example ([#1128], thanks [@k-yle])
* Add road-related fields to Busway preset ([#1127], thanks [@k-yle])
* Add `via` field to Ferry Route preset ([#1127], thanks [@k-yle])
* Add `changing_table` as optional field to several POI presets ([#1139], thanks [@mangerlahn])
* Add more search terms to Transit Ticket Vending Machine preset ([#1142], thanks [@matkoniecz])
* Add more search terms to Public Bookcase preset ([#1150], thanks [@matkoniecz])
* Add `oneway` as optional field to Crossing ways, Footways, Paths, Steps and Track Roads ([#1143], thanks [@tordans])
* Make all Tree-type presets searchable ([#1156])
#### New and Changed Fields
* Add new `ref` (Line Number) and `railway:track_ref` (Track Number) fields to the `railway=rail` preset ([#1083], thanks [@gy-mate])
* Add new `railway:switch` (Switch Type) field to `railway=switch` preset ([#1084], thanks [@gy-mate])
* Add field for `summit:cross` tag on `natural=peak` objects ([#1088], thanks [@qugebert])
* Add `unleashed` as an option for the `dog` field
* Add translatable options for swimming pool Type field ([#1008], thanks [@arch0345])
* Add option `millstone` to the field for the `historic` tag ([#1067])
* Add field for menstrual products (`toilets:menstrual_products`) on Toilets and POIs with the `toilet` field ([#1116], thanks [@moan0s])
* Add field to specify the Type of Lifeguard locations
* Show translated options in `sport_pub` field and add value for `sport=darts` to it as well as the generic `sport` field
* Add translatable options and descriptions to `kerb` field ([#1029], thanks [@kjonosm])
* Include icons with the options of the `kerb` field
* Don't repeat kerb Type field in the type-specific Kerb presets
* Add field for `fortification_type` tag for features mapped as `archaeological_site=fortification` ([#1129], thanks [@k-yle])
* Add translatable options to `bridge` field for `man_made=bridge` features ([#1002], thanks [@kjonosm])
* Clarify that `left`/`right` are meant to be mapped relative to the driving direction for `highway=cyclist_waiting_aid` features ([iD#10128])
#### Regional Presets and Fields
#### Deprecated Tags
* Mark `emergency=lifeguard_tower/lifeguard_base/lifeguard_platform` and `emergency=water_rescue_station` as deprecated in favor of `emergency=lifeguard + lifeguard=*`/`emergency=water_rescue` ([#1098], thanks [@westnordost])
* Mark `tourism=resort` as deprecated in favor of `leisure=resort` ([#1103], thanks [@westnordost])
* Mark `tourism=picnic_table` as deprecated in favor of `leisure=picnic_table` ([#1104], thanks [@westnordost])
* Mark `industrial=brickworks` as deprecated in favor of `industrial=brickyard` ([#1105], thanks [@qugebert])
* Mark `amenity=ses_station` as deprecated in favor of `emergency=disaster_response` ([#1109], thanks [@qugebert])
* Mark `leisure=maze` as deprecated in favor of `attraction=maze` ([#1102], thanks [@westnordost])
* Mark `amenity=lockers` as deprecated in favor of `amenity=locker` ([#1124], thanks [@kjonosm])
#### Bugfixes
* Allow Bike Parking features to be mapped as a line ([#1114])
* Fix wrong description and add missing value for `lpg`/`lng` values of the Fuel field ([#1130], thanks [@k-yle])
* Don't automatically add `building=yes` on `man_made=works` objects ([#1132])
* Disallow area geometry type on `traffic_calming=island` preset ([#1076])
* Allow `historic=ruins` to be mapped as lines ([#1149])

[#1067]: https://github.com/openstreetmap/id-tagging-schema/issues/1067
[#1101]: https://github.com/openstreetmap/id-tagging-schema/issues/1101
[#1114]: https://github.com/openstreetmap/id-tagging-schema/issues/1114
[#1132]: https://github.com/openstreetmap/id-tagging-schema/issues/1132
[#1149]: https://github.com/openstreetmap/id-tagging-schema/issues/1149
[#1156]: https://github.com/openstreetmap/id-tagging-schema/issues/1156
[#1002]: https://github.com/openstreetmap/id-tagging-schema/pull/1002
[#1008]: https://github.com/openstreetmap/id-tagging-schema/pull/1008
[#1029]: https://github.com/openstreetmap/id-tagging-schema/pull/1029
[#1032]: https://github.com/openstreetmap/id-tagging-schema/pull/1032
[#1037]: https://github.com/openstreetmap/id-tagging-schema/pull/1037
[#1076]: https://github.com/openstreetmap/id-tagging-schema/pull/1076
[#1083]: https://github.com/openstreetmap/id-tagging-schema/pull/1083
[#1084]: https://github.com/openstreetmap/id-tagging-schema/pull/1084
[#1088]: https://github.com/openstreetmap/id-tagging-schema/pull/1088
[#1090]: https://github.com/openstreetmap/id-tagging-schema/pull/1090
[#1091]: https://github.com/openstreetmap/id-tagging-schema/pull/1091
[#1095]: https://github.com/openstreetmap/id-tagging-schema/pull/1095
[#1098]: https://github.com/openstreetmap/id-tagging-schema/pull/1098
[#1102]: https://github.com/openstreetmap/id-tagging-schema/pull/1102
[#1103]: https://github.com/openstreetmap/id-tagging-schema/pull/1103
[#1104]: https://github.com/openstreetmap/id-tagging-schema/pull/1104
[#1105]: https://github.com/openstreetmap/id-tagging-schema/pull/1105
[#1106]: https://github.com/openstreetmap/id-tagging-schema/pull/1106
[#1108]: https://github.com/openstreetmap/id-tagging-schema/pull/1108
[#1109]: https://github.com/openstreetmap/id-tagging-schema/pull/1109
[#1116]: https://github.com/openstreetmap/id-tagging-schema/pull/1116
[#1121]: https://github.com/openstreetmap/id-tagging-schema/pull/1121
[#1123]: https://github.com/openstreetmap/id-tagging-schema/pull/1123
[#1124]: https://github.com/openstreetmap/id-tagging-schema/pull/1124
[#1126]: https://github.com/openstreetmap/id-tagging-schema/pull/1126
[#1127]: https://github.com/openstreetmap/id-tagging-schema/pull/1127
[#1128]: https://github.com/openstreetmap/id-tagging-schema/pull/1128
[#1129]: https://github.com/openstreetmap/id-tagging-schema/pull/1129
[#1130]: https://github.com/openstreetmap/id-tagging-schema/pull/1130
[#1131]: https://github.com/openstreetmap/id-tagging-schema/pull/1131
[#1134]: https://github.com/openstreetmap/id-tagging-schema/pull/1134
[#1135]: https://github.com/openstreetmap/id-tagging-schema/pull/1135
[#1136]: https://github.com/openstreetmap/id-tagging-schema/pull/1136
[#1139]: https://github.com/openstreetmap/id-tagging-schema/pull/1139
[#1142]: https://github.com/openstreetmap/id-tagging-schema/pull/1142
[#1143]: https://github.com/openstreetmap/id-tagging-schema/pull/1143
[#1150]: https://github.com/openstreetmap/id-tagging-schema/pull/1150
[iD#10128]: https://github.com/openstreetmap/iD/issues/10128
[@gy-mate]: https://github.com/gy-mate
[@qugebert]: https://github.com/qugebert
[@louwers]: https://github.com/louwers
[@moan0s]: https://github.com/moan0s
[@imagoiq]: https://github.com/imagoiq
[@mangerlahn]: https://github.com/mangerlahn
[@cnotin]: https://github.com/cnotin


# 6.6.0
##### 2024-Jan-24

#### New Presets
* Add preset for `man_made=insect_hotel` ([#1020], thanks [@tordans])
* Add preset for `highway=cyclist_waiting_aid` ([#1069], thanks [@k-yle])
* Add presets for tracks, stations and supports of roller coasters ([#985], thanks [@arch0345])
* Add new preset for Fuel Pumps and adjust current preset for Fuel Vending Machines ([#988], thanks [@Dimitar5555])
* Add a preset for Snack Vending Machines (`vending=food` + `food=snacks`) ([#1038], thanks [@arch0345])
#### Changed Presets
* Add `support` & `colour` fields to Letter Box preset ([#1005], thanks [@mnalis])
* Rename `vending=sweets` to Candy Vending Machine ([#1038], thanks [@arch0345])
* Change name of `traffic_calming=island` preset to Traffic Calming Island ([#1074], thanks [@ireun])
#### New and Changed Fields
* Add field for the type of roller coaster tracks ([#985], thanks [@arch0345])
* Add field for `opening_hours:drive_through` ([#999], thanks [@arch0345])
* Add field to specify types of books available at Public Bookcases ([#1001], thanks [@danieldegroot2]), as well as in Libraries and Book Shops
#### Regional Presets and Fields
* Add field for the `fhrs:id` reference code for food establishments in the UK (, thanks [@Cj-Malone])
* Disallow leading zeros in `gnis:feature_id` field ([#1007], thanks [@watmildon])
* Specify `crossing:markings` types in Poland ([#1030], thanks [@Zaczero])
* Add field for `ref:edubase` reference code for schools (and similar facilities) in the UK ([#1000], thanks [@arrival-spring])
#### Bugfixes
* Allow Ferris Wheels to be mapped as areas ([#989], thanks [@andreadecorte])
#### Documentation and Other Changes
* Don't lowercase hashtags of changesets ([#1080])

[#985]: https://github.com/openstreetmap/id-tagging-schema/pull/985
[#987]: https://github.com/openstreetmap/id-tagging-schema/pull/987
[#988]: https://github.com/openstreetmap/id-tagging-schema/pull/988
[#989]: https://github.com/openstreetmap/id-tagging-schema/pull/989
[#999]: https://github.com/openstreetmap/id-tagging-schema/pull/999
[#1000]: https://github.com/openstreetmap/id-tagging-schema/pull/1000
[#1001]: https://github.com/openstreetmap/id-tagging-schema/pull/1001
[#1005]: https://github.com/openstreetmap/id-tagging-schema/pull/1005
[#1007]: https://github.com/openstreetmap/id-tagging-schema/pull/1007
[#1020]: https://github.com/openstreetmap/id-tagging-schema/pull/1020
[#1030]: https://github.com/openstreetmap/id-tagging-schema/pull/1030
[#1038]: https://github.com/openstreetmap/id-tagging-schema/pull/1038
[#1069]: https://github.com/openstreetmap/id-tagging-schema/pull/1069
[#1074]: https://github.com/openstreetmap/id-tagging-schema/pull/1074
[#1080]: https://github.com/openstreetmap/id-tagging-schema/issues/1080
[@andreadecorte]: https://github.com/andreadecorte
[@watmildon]: https://github.com/watmildon
[@mnalis]: https://github.com/mnalis
[@arrival-spring]: https://github.com/arrival-spring
[@ireun]: https://github.com/ireun


# 6.5.0
##### 2023-Dec-15

#### New Presets
* Add preset for `memorial=stolperstein` with `memorial:addr` field ([#964], thanks [@tordans])
* Add presets for `amenity=baking_oven` and `building=bakehouse` ([#975], thanks [@N-45div])
* Add preset for `man_made=satellite_dish` ([#976], thanks [@N-45div])
* Add preset for "Unspecified Traffic Sign" ([#984], thanks [@tordans])
* Add presets for Optical and Radio Telescopes
* Add Adventure Park preset for `sport=climbing_adventure` ([#1051], thanks [@arch0345])
* Add preset for `building=riding_hall` ([#1048], thanks [@Hufkratzer])
* Add preset for `amenity=loading_dock` and corresponding `dock:*` attribute fields ([#1043], thanks [@arch0345])
* Add Funeral Service Hall preset ([#1045], thanks [@arch0345])
* Add Switchgear preset ([#1059], thanks [@arch0345])
#### Changed Presets
* Drop undocumented/deprecated fields of the `tourism=trail_riding_station` preset
* Improve equestrian search terms ([#1055], thanks [@Hufkratzer])
#### New and Changed Fields
* Add `riding_hall` as an option to the "building type" field
* Change label of `brewery` field to "Sold Beer Brands" ([#1047], thanks [@mcliquid])
#### Regional Presets and Fields
* Use `highway=path` as base tag for Cycle & Foot Path in Israel ([#1058], thanks [@zstadler])
#### Deprecated Tags
* Replace `memorial:type=stolperstein` with `memorial=stolperstein` ([#964], thanks [@tordans])
* Replace `door=loadingdock` with `amenity=loading_dock` ([#1043], thanks [@arch0345])
#### Bugfixes
* Allow Log Flume to be mapped as a line ([#980])
* Fix icons for `fast_food=bagel` and `fast_food=wings` presets ([#1057], thanks [@arch0345])
* Fix typo `pancake` in tag value for `cuisine` field ([#1063], thanks [@matkoniecz])
#### Documentation and Other Changes
* Upgrade to schema-builder v6.4 (which offers slightly enhanced taginfo output)

[#964]: https://github.com/openstreetmap/id-tagging-schema/pull/964
[#975]: https://github.com/openstreetmap/id-tagging-schema/issues/975
[#976]: https://github.com/openstreetmap/id-tagging-schema/issues/976
[#980]: https://github.com/openstreetmap/id-tagging-schema/issues/980
[#984]: https://github.com/openstreetmap/id-tagging-schema/pull/984
[#1043]: https://github.com/openstreetmap/id-tagging-schema/pull/1043
[#1045]: https://github.com/openstreetmap/id-tagging-schema/pull/1045
[#1047]: https://github.com/openstreetmap/id-tagging-schema/pull/1047
[#1048]: https://github.com/openstreetmap/id-tagging-schema/pull/1048
[#1051]: https://github.com/openstreetmap/id-tagging-schema/pull/1051
[#1055]: https://github.com/openstreetmap/id-tagging-schema/pull/1055
[#1057]: https://github.com/openstreetmap/id-tagging-schema/pull/1057
[#1058]: https://github.com/openstreetmap/id-tagging-schema/pull/1058
[#1059]: https://github.com/openstreetmap/id-tagging-schema/pull/1059
[#1063]: https://github.com/openstreetmap/id-tagging-schema/pull/1063
[@N-45div]: https://github.com/N-45div
[@mcliquid]: https://github.com/mcliquid
[@zstadler]: https://github.com/zstadler


# 6.4.1
##### 2023-Aug-16

* Update distribution files and translations from Transifex.


# 6.4.0
##### 2023-Aug-16

#### New Presets
* Add EV Charging Point preset for `man_made=charge_point` ([#896], thanks [@arch0345])
* Add preset for Milk Churn Stands ([#869], thanks [@arch0345])
* Add preset for Rice Shops ([#944], thanks [@govvin])
* Add preset for `boundary=hazard` (Hazardous Area) ([#952], thanks [@arch0345])
* Add preset for Tree Stumps (`natural=tree_stump`) ([#957], thanks [@tordans])
* Add preset for Hooka Lounge / Shisha Bar (`amenity=hookah_lounge`) ([#961], thanks [@kjonosm])
* Add preset for Pasta Stores ([#930], thanks [@govvin])
* Add presets for taxi stands which do not use "regular" cars, like Auto/Cycle Riskshaw Stands and Motorcycle Taxi Stands ([#946], thanks [@govvin])
* Add specific presets for Trees which have the tags `leaf_cycle`/`leaf_type` mapped ([#956])
#### Changed Presets
* Add field to specify the type of a `house` ([#921], thanks [@arch0345])
* Allow Drinking Water to be mapped on verticed ([#925], thanks [@arch0345])
* Rename preset for Trash Cans and Recycling Bins ([#938], thanks [@arch0345])
* Add `direction` field to Emergency Bay preset
* Add more fields to Parcel Locker preset for the tags: `wheelchair`, `indoor` ([#940]), `collection_times`, `surveillance`
* Rename preset for `military=danger_area` to Military Danger Area ([#952], thanks [@arch0345])
* Use generic traffic sign icon for `traffic_sign=maxspeed` ([#968], thanks [@tordans])
#### New and Changed Fields
* Add fields for `maxlength` and `maxaxleload` ([#911], thanks [@arch0345]), rename fields for `maxheight`, `maxwidth` and `maxstay` to be consistent with each other
* Add options (translatable strings) to fields for the following tags: `vending`, `tomb`, `telecom`, `social_facility:for`, `healthcare`, `military_service`, `marker` ([#923], [#924], [#933], [#934], [#935], [#972], [#973], thanks [@kjonosm])
* Add more values to the `sport` field ([#969], thanks [@kjonosm])
* Add `fine_gravel` as a value to the `surface` field ([#967], thanks [@kjonosm])
* Change field for the `ramp` tag from checkbox to `combo`, add option `separate` ([#939], thanks [@arch0345])
* Add field to specify the type of vehicle at taxi stands ([#946], thanks [@govvin])
#### Regional Presets and Fields
* Philippines: Create preset for Barangay Halls ([#932], thanks [@govvin])
* US, Canada, Liberia: Use _square_ icon for `traffic:sign=maxspeed`
#### Other Changes
* Don't always also show the Wikipedia field when the `wikidata` tag is set on an object
* Drop field for `opening_hours:covid19` ([#963])
#### Bugfixes
* Fix tag used for Barbeque Restaurants from the (incorrect) value `cuisine=barbeque` to `cuisine=barbecue` ([#943])
* Fix documentation _reference_ of `parking:*:orientation` field
#### Documentation and Other Changes
* Update `prettier` to v3

[#869]: https://github.com/openstreetmap/id-tagging-schema/issues/869
[#896]: https://github.com/openstreetmap/id-tagging-schema/issues/896
[#911]: https://github.com/openstreetmap/id-tagging-schema/pull/911
[#921]: https://github.com/openstreetmap/id-tagging-schema/pull/921
[#923]: https://github.com/openstreetmap/id-tagging-schema/pull/923
[#924]: https://github.com/openstreetmap/id-tagging-schema/pull/924
[#925]: https://github.com/openstreetmap/id-tagging-schema/pull/925
[#930]: https://github.com/openstreetmap/id-tagging-schema/issues/930
[#932]: https://github.com/openstreetmap/id-tagging-schema/pull/932
[#933]: https://github.com/openstreetmap/id-tagging-schema/pull/933
[#934]: https://github.com/openstreetmap/id-tagging-schema/pull/934
[#935]: https://github.com/openstreetmap/id-tagging-schema/pull/935
[#938]: https://github.com/openstreetmap/id-tagging-schema/pull/938
[#939]: https://github.com/openstreetmap/id-tagging-schema/pull/939
[#940]: https://github.com/openstreetmap/id-tagging-schema/issues/940
[#942]: https://github.com/openstreetmap/id-tagging-schema/issues/942
[#943]: https://github.com/openstreetmap/id-tagging-schema/issues/943
[#944]: https://github.com/openstreetmap/id-tagging-schema/pull/944
[#946]: https://github.com/openstreetmap/id-tagging-schema/pull/946
[#952]: https://github.com/openstreetmap/id-tagging-schema/pull/952
[#956]: https://github.com/openstreetmap/id-tagging-schema/pull/956
[#957]: https://github.com/openstreetmap/id-tagging-schema/pull/957
[#961]: https://github.com/openstreetmap/id-tagging-schema/pull/961
[#963]: https://github.com/openstreetmap/id-tagging-schema/issues/963
[#967]: https://github.com/openstreetmap/id-tagging-schema/pull/967
[#968]: https://github.com/openstreetmap/id-tagging-schema/pull/968
[#969]: https://github.com/openstreetmap/id-tagging-schema/pull/969
[#972]: https://github.com/openstreetmap/id-tagging-schema/pull/972
[#973]: https://github.com/openstreetmap/id-tagging-schema/pull/973
[@govvin]: https://github.com/govvin


# 6.3.0
##### 2023-Jun-02
#### :mega: Release Highlights
* Support alternative tagging of Phone, Fax, Email and Website fields using the `contact:*` tagging schema ([#905])
#### New Presets
* Add "Yacht Berths" preset ([#899])
#### Changed Presets
* Add "Ramen Shop" as alias to Ramen Restaurant, and refine its search terms
* Use more specific car icons for presets: Driving School, (Used) Car Dealer ([#902], thanks [@tiptoptom])
* Add additional fields to `man_made=watermill` and `man_made=windmill` presets and show `start_date` field by default
* Switch to Ford icon from Röntgen icon set
#### New and Changed Fields
* Add field for `bicycle_road` tag (see [#888])
* Add field for `building:colour` tag ([#904])
* Add field to switch between Yacht Berths and Marina by checkbox (`seamark:harbour:category` tag) ([#899])
* Add field for Mobile Phone number (`mobile`/`contact:mobile`)
* Add Bridge Number field ([#912], thanks [@arch0345])
#### Regional Presets and Fields
* BE, NL: Add field for `cyclestreet` tag ([#888], thanks [@pietervdvn])
* BG: Only show relevant values for crossing markings ([#891], thanks [@Dimitrar5555])
* DE,AT,CH: Only show relevant values for crossing markings
* JP: Update placeholders for Japanese address schema ([#907])
#### Bugfixes
* Offer `crossing:markings` field in all relevant `crossing/*/traffic_signals` presets ([#908])
* Make unspecified Pedestrian Crossing (line preset) searchable ([#889], thanks [@Dimitrar5555])
* Drop `construction` subtag when preset is changed away from a Construction preset ([#903])
* Allow `barrier=log` preset on "standalone" points ([#898])
* Drop `segregated` tag when changing away from Cycle+Foot Path preset ([#910])
#### Documentation and Other Changes
* Create template for regional crossing:markings fields
* Upgrade to schema-builder [v6.3](https://github.com/ideditor/schema-builder/blob/main/CHANGELOG.md#630): Allows to specify alternative keys for text, number, tel, email and url fields.

[#888]: https://github.com/openstreetmap/id-tagging-schema/pull/888
[#889]: https://github.com/openstreetmap/id-tagging-schema/pull/889
[#898]: https://github.com/openstreetmap/id-tagging-schema/issues/898
[#899]: https://github.com/openstreetmap/id-tagging-schema/pull/899
[#891]: https://github.com/openstreetmap/id-tagging-schema/pull/891
[#902]: https://github.com/openstreetmap/id-tagging-schema/pull/902
[#903]: https://github.com/openstreetmap/id-tagging-schema/issues/903
[#904]: https://github.com/openstreetmap/id-tagging-schema/issues/904
[#905]: https://github.com/openstreetmap/id-tagging-schema/issues/905
[#907]: https://github.com/openstreetmap/id-tagging-schema/issues/907
[#908]: https://github.com/openstreetmap/id-tagging-schema/issues/908
[#910]: https://github.com/openstreetmap/id-tagging-schema/issues/910
[#912]: https://github.com/openstreetmap/id-tagging-schema/pull/912
[@pietervdvn]: https://github.com/pietervdvn
[@Dimitrar5555]: https://github.com/Dimitrar5555


# 6.2.0
##### 2023-May-05

#### New Presets
* Add presets for Georgian and Ukrainian restaurants ([#857], thanks [@matkoniecz])
* Add preset for `shop=honey` ([#1], [#878], thanks [@matkoniecz])
* Add Ramen Restaurant preset ([#880], thanks [@arch0345])
* Add Frozen Yogurt Shop preset ([#881], thanks [@arch0345])
* Add Chicken Wings Fast Food preset ([#883], thanks [@arch0345])
* Add Bagel Fast Food preset ([#882], thanks [@arch0345])
#### Changed Presets
* Enable tagging unspecific crossings ([#837], [#834], thanks [@matkoniecz])
* Add contact:facebook field to POI presets ([#859], thanks [@Cj-Malone])
* Add _white goods_ as search term to `shop=appliance` preset ([#864], thanks [@matkoniecz])
* Add _Pedestrian Island_ as an alias of the `footway=traffic_island` preset ([#865], thanks [@Dimitar5555])
* Rename `amenity=kneipp_water_cure` preset to _Kneipp Facility_ ([#866])
* Improve search terms of `horse_riding` preset ([#868], thanks [@Hufkratzer])
* Improve search terms of advertisement devices ([#867], thanks [@matkoniecz])
* Improve search terms of Pulmonologist ([#872], thanks [@matkoniecz])
* Add "Obstetrician" as synonym to Gynecologist and improve the preset's search terms ([#873], [#789], thanks [@matkoniecz])
* Add "bus terminal" as search term to Bus Station preset ([#890], thanks [@Dimitar5555])
* Improve terms and add "Clinical Psychologist" as an alias to Psychotherapist preset ([#877])
#### New and Changed Fields
* Rename sport=equestrian to "Equestrian Sports" ([#855], thanks [@Hufkratzer])
* Add additional cuisine values ([#857], thanks [@matkoniecz])
* Add strings for values of `kneipp_water_cure:*` subtags ([#866])
* Change Gender field to a `manyCombo` field ([#895])
* Restrict values of the Gender field for hairdressers to female/male ([#894])
* Use translated strings of the `sport` field also in its subfields (e.g. `sport_ice`, `sport_racing*`)
#### Deprecated Tags
* Replace ~~`survey_date`~~ with `survey:date` ([#860], thanks [@Marc-marc-marc])
* Suggest to remove `highway=crossing` when `crossing=no` ([#863])
#### Bugfixes
* Don't assume a `kerb` tag implies being a barrier, as it can also be used as an attribute of a `highway=crossing` vertex ([#858], [#862])
* Allow `highway=elevator` on areas and standalone nodes ([#870])
* Fix match priorities for Crossing and Speed Table presets ([#863])
* Upgrade (deprecated) `shop=organic` to `shop=yes + organic=only` (instead of `shop=supermarket + organic=only`) ([#884], thanks [@matkoniecz])
#### Documentation and Other Changes
* Clean up presets with fields included as both `fields` and `moreFields`
* Consolidate optional fields of "POI" presets into "template presets"

[#1]: https://github.com/openstreetmap/id-tagging-schema/issues/1
[#789]: https://github.com/openstreetmap/id-tagging-schema/issues/789
[#834]: https://github.com/openstreetmap/id-tagging-schema/issues/834
[#858]: https://github.com/openstreetmap/id-tagging-schema/issues/858
[#863]: https://github.com/openstreetmap/id-tagging-schema/issues/863
[#866]: https://github.com/openstreetmap/id-tagging-schema/issues/866
[#870]: https://github.com/openstreetmap/id-tagging-schema/issues/870
[#877]: https://github.com/openstreetmap/id-tagging-schema/issues/877
[#894]: https://github.com/openstreetmap/id-tagging-schema/issues/894
[#895]: https://github.com/openstreetmap/id-tagging-schema/issues/895
[#837]: https://github.com/openstreetmap/id-tagging-schema/pull/837
[#855]: https://github.com/openstreetmap/id-tagging-schema/pull/855
[#857]: https://github.com/openstreetmap/id-tagging-schema/pull/857
[#859]: https://github.com/openstreetmap/id-tagging-schema/pull/859
[#860]: https://github.com/openstreetmap/id-tagging-schema/pull/860
[#862]: https://github.com/openstreetmap/id-tagging-schema/pull/862
[#864]: https://github.com/openstreetmap/id-tagging-schema/pull/864
[#865]: https://github.com/openstreetmap/id-tagging-schema/pull/865
[#867]: https://github.com/openstreetmap/id-tagging-schema/pull/867
[#868]: https://github.com/openstreetmap/id-tagging-schema/pull/868
[#872]: https://github.com/openstreetmap/id-tagging-schema/pull/872
[#873]: https://github.com/openstreetmap/id-tagging-schema/pull/873
[#878]: https://github.com/openstreetmap/id-tagging-schema/pull/878
[#880]: https://github.com/openstreetmap/id-tagging-schema/pull/880
[#881]: https://github.com/openstreetmap/id-tagging-schema/pull/881
[#882]: https://github.com/openstreetmap/id-tagging-schema/pull/882
[#883]: https://github.com/openstreetmap/id-tagging-schema/pull/883
[#884]: https://github.com/openstreetmap/id-tagging-schema/pull/884
[#890]: https://github.com/openstreetmap/id-tagging-schema/pull/890
[@Cj-Malone]: https://github.com/Cj-Malone


# 6.1.0
##### 2023-Apr-03

#### :mega: Release Highlights
* On github, automated preview instances of iD will be deployed for tagging PRs
#### New Presets
* Add presets for Korean and Spanish Restaurants ([#815], thanks [@andrewharvey])
* Add preset for `man_made=quay` ([#810], thanks [@jdhoek])
* Add Track & Field presets ([#817], thanks [@arch0345])
* Add preset for `natural=peninsula` ([#798], [#844], thanks [@harahu])
* Add preset for `emergency=fire_service_inlet` ([#806], thanks [@tiptoptom])
* Add preset for Scout Group ([#836], thanks [@tiptoptom])
#### Changed Presets
* Add a field for the tag `website:menu` to amenties like Restaurants, Cafes, etc.  ([#803], thanks [@tognee])
* Rename `military=danger_area` preset to "Danger Zone, Access Prohibited" ([#792], thanks [@emersonveenstra])
* Add terms "cat/dog grooming" to Pet Groomer preset ([#811], thanks [@matkoniecz])
* Use `amenity=dancing_school` tag for Dance Studio preset
* Add `flashing_lights` field to `crossing=uncontrolled` ([#827], thanks [@Dimitar5555])
* Make `shop=vacant` preset searchable ([#828], thanks [@Dimitar5555])
* Hide `shop=hobby` preset and add _hobby_ as search term to related Shop presets ([#24], [#821], [#823], thanks [@matkoniecz])
* Make `barrier=log` preset searchable ([#615], [#822], thanks [@matkoniecz])
* More dedicated icon for Sign Maker, `shop=frozen_food` and Castle presets ([#839], [#840], [#849], thanks [@matkoniecz])
* Add additional search terms to Billboard preset ([#848], thanks [@matkoniecz])
#### New and Changed Fields
* Drop value `community` from `postbox:type` field ([#805], thanks [@kjonosm])
* Add translatable strings for fields: `historic`, `diplomatic`, `consulate`, `dock`, `collector` ([#813], [#841], [#843], [#852], [#853], thanks [@kjonosm])
* Add field for `dance:teaching=yes/no` tag
* Add more values of `sport` field ([#812], thanks [@kjonosm])
* Add fields for `fire_mains` and `fire_sprinkler` ([#806], thanks [@tiptoptom])
* Update tag of Orientation field for Street Side Parking preset from `parking:orientation` to `orientation` ([#673], thanks [@tordans])
* Specify cons for some `shelter_type` values ([#851])
#### Deprecated Tags
* Add recently deprecated tags ([#807], thanks [@kjonosm]):
    * ~~`amenity=lifeboat-station`~~ :arrow_right: `emergency=water_rescue`
    * ~~`emergency=lifeboat_station`~~ :arrow_right: `emergency=water_rescue`
    * ~~`emergency=marine_rescue`~~ :arrow_right: `emergency=water_rescue`
    * ~~`emergency_service=air`~~ :arrow_right: `emergency=air_rescue_service`
    * ~~`emergency=dry_riser_inlet`~~ :arrow_right: `emergency=fire_service_inlet`+ `fire_mains=dry`
    * ~~`emergency=sprinkler_connection`~~ :arrow_right: `emergency=fire_service_inlet`+ `fire_sprinkler=yes`
* Remove disputed deprecation of `amenity=dancing_school` ([#814], thanks [@matkoniecz])
* Update Utility Pole preset and add relevant deprecations ([#830], [#211], thanks [@Dimitar5555]):
    * ~`communication=pole`~ :arrow_right: `man_made=utility_pole` + `utility=telecom`
    * ~`telephone=pole`~ :arrow_right: `man_made=utility_pole` + `utility=telecom`
    * ~`telecom=pole`~ :arrow_right: `man_made=utility_pole` + `utility=telecom`
    * ~`pstn=pole`~ :arrow_right: `man_made=utility_pole` + `utility=telecom`
* ~`parking:orientation=*`~ :arrow_right: `orientation=*` ([#673], thanks [@tordans])
#### Bugfixes
* Fix tag of (hidden) generic Pipeline Feature preset
* Avoid lowercasing Destination field on one-ways ([#829], thanks [@1ec5])
#### Documentation and Other Changes
* Extend documentation section about translating ([#825], thanks [@tordans])
* Create [CONTRIBUTING](./CONTRIBUTING.md) page
* Add a `.nvmrc` file
* Bump dependencies: `prettier` to v2.8.6, `schema-builder` to v6.2

[#24]: https://github.com/openstreetmap/id-tagging-schema/issues/24
[#211]: https://github.com/openstreetmap/id-tagging-schema/issues/211
[#615]: https://github.com/openstreetmap/id-tagging-schema/issues/615
[#673]: https://github.com/openstreetmap/id-tagging-schema/pull/673
[#792]: https://github.com/openstreetmap/id-tagging-schema/pull/792
[#798]: https://github.com/openstreetmap/id-tagging-schema/issues/798
[#800]: https://github.com/openstreetmap/id-tagging-schema/pull/800
[#803]: https://github.com/openstreetmap/id-tagging-schema/pull/803
[#805]: https://github.com/openstreetmap/id-tagging-schema/pull/805
[#806]: https://github.com/openstreetmap/id-tagging-schema/pull/806
[#807]: https://github.com/openstreetmap/id-tagging-schema/pull/807
[#810]: https://github.com/openstreetmap/id-tagging-schema/pull/810
[#811]: https://github.com/openstreetmap/id-tagging-schema/pull/811
[#812]: https://github.com/openstreetmap/id-tagging-schema/pull/812
[#813]: https://github.com/openstreetmap/id-tagging-schema/pull/813
[#814]: https://github.com/openstreetmap/id-tagging-schema/pull/814
[#815]: https://github.com/openstreetmap/id-tagging-schema/pull/815
[#817]: https://github.com/openstreetmap/id-tagging-schema/pull/817
[#821]: https://github.com/openstreetmap/id-tagging-schema/pull/821
[#822]: https://github.com/openstreetmap/id-tagging-schema/pull/822
[#823]: https://github.com/openstreetmap/id-tagging-schema/pull/823
[#825]: https://github.com/openstreetmap/id-tagging-schema/pull/825
[#827]: https://github.com/openstreetmap/id-tagging-schema/pull/827
[#828]: https://github.com/openstreetmap/id-tagging-schema/pull/828
[#829]: https://github.com/openstreetmap/id-tagging-schema/pull/829
[#830]: https://github.com/openstreetmap/id-tagging-schema/pull/830
[#836]: https://github.com/openstreetmap/id-tagging-schema/pull/836
[#839]: https://github.com/openstreetmap/id-tagging-schema/pull/839
[#840]: https://github.com/openstreetmap/id-tagging-schema/pull/840
[#841]: https://github.com/openstreetmap/id-tagging-schema/pull/841
[#843]: https://github.com/openstreetmap/id-tagging-schema/pull/843
[#844]: https://github.com/openstreetmap/id-tagging-schema/pull/844
[#848]: https://github.com/openstreetmap/id-tagging-schema/pull/848
[#849]: https://github.com/openstreetmap/id-tagging-schema/pull/849
[#851]: https://github.com/openstreetmap/id-tagging-schema/issues/851
[#852]: https://github.com/openstreetmap/id-tagging-schema/pull/852
[#853]: https://github.com/openstreetmap/id-tagging-schema/pull/853
[@tognee]: https://github.com/tognee
[@emersonveenstra]: https://github.com/emersonveenstra
[@tiptoptom]: https://github.com/tiptoptom
[@harahu]: https://github.com/harahu


# 6.0.0
##### 2023-Mar-02

#### Schema Changes
* Upgrade to the schema-builder [version 6](https://github.com/ideditor/schema-builder/blob/main/CHANGELOG.md#600)
  * :warning: Field type `cycleway` is replaced with new `directionalCombo` field
  * :warning: Adds new `date` field type
  * :warning: Introduces the use of icons from the [Röntgen icon set](https://github.com/enzet/map-machine#r%C3%B6ntgen-icon-set)
  * Allows to specify icons for values of combo fields
#### New Presets
* Add most popular alternative medicine practitioners ([#731], thanks [@westnordost])
* Add preset for `office=engineer` ([#639], thanks [@kjonosm])
* Add preset for `shop=nuts` ([#774], thanks [@kjonosm])
* Add preset for `entrance=staircase` ([#228], thanks [@kjonosm])
* Add preset for `railway=turntable` ([#783], thanks [@k-yle])
* Add preset for "other" advertising devices
* Add Senior Assisted Living Facility preset ([#787], thanks [@arch0345])
* Add presets for specific Street Cabinets
* Add presets for Psychiatrist and Child Psychiatrist
* Add preset for Depots (`industrial=depot`) ([#784], thanks [@k-yle])
* Add preset for `amenity=stripclub` ([#648], thanks [@EvanCarroll])
* Add preset for Dialysis Center ([#795], thanks [@arch0345])
#### Changed Presets
* Make natural wood points unsearchable ([#755], thanks [@arch0345])
* Rename `attraction=big_wheel` to Ferris Wheel
* Use Rötgen icons for presets of: Cranes, Diving Platform, City Limit Sign, Turning Loop, (Water) Slide
* Allow to specify Therapist offices more precisely by adding `healthcare` fields
* Add `crossing:markings=yes` as the default value to any newly created Marked Crossings (leave existing objects with `crossing=uncontrolled` as they are)
* Offer the `bunker_type` field also on the (hidden) `building=bunker` preset
* Add `ref` field to Sports Pitch preset ([#766], thanks [@arch0345])
* Include additional fields on the Rest Area preset ([#773], thanks [@kjonosm])
* Move `access_simple` to main fields for AEDs ([#786], thanks [@FloEdelmann])
* Don't warn when `landuse=industrial` is mapped as a point ([#776], thanks [@Lonerat])
* Allow Cemeteries to be mapped as points
* Add terms (polo/rodeo) for `sport=equestrian` preset ([#780], thanks [@arch0345])
* Allow "Totem" and "Poser Box" advertising presets to be mapped as a line ([#785], thanks [@k-yle])
* Rename `shop=pet_grooming` preset to Pet Groomer ([#790], thanks [@matkoniecz])
#### New and Changed Fields
* Switch type of various fields to `date`: `check_date`, `opening_date`, `start_date`, `survey:date`, `wreck:date_sunk`
* Add translatable strings for the fields `substance` ([#737]), `material` ([#735]), `memorial` ([#734]), `barrier type` ([#709]), `archaeological_site` ([#707]), `bath:type` ([#742]), `sport` ([#747]), `attraction` ([#756]), `waste` ([#758]), `office` ([#761]), `resource` ([#760]), `clothes` ([#763]), `building` ([#764]) (thanks [@kjonosm])
* Add fields for `parking:both|left|right` and `parking:both|left|right:orientation` ([#744])
* Add more options to the `parking` field: `on_kerb`, `half_on_kerb` and `shoulder` ([#672])
* Add field for `lift_gate:type` ([#711], thanks [@arch0345])
* Add fields `tents`, `caravans`, `static_caravans`, `picnic_table`, and `nudism` to Camp Site preset ([#749], [#750], [#750], [#751], [#752], thanks [@kjonosm])
* Use Rötgen icons for fields `crane:type`, `leaf_type`, `design` (of power poles and towers), `traffic_calming`, `volcano:type`, `volcano:status` and `tower:construction`
* Specify icons for crossing markings
* Add regional and universal field for `ref:linz:place_id` ([#781], thanks [@k-yle])
* Add `message` field for advertising presets ([#785], thanks [@k-yle])
#### Deprecated Tags
* Upgrade most values of the ~~`street_cabinet`~~ subtag to use `utility` instead ([#777], thanks [@kjonosm]) and hide `street_cabinet` field
* Deprecate value `none` of Cycleway tags ([#796], thanks [@Dimitar5555])
#### Documentation and Other Changes
* Add Railway Route to Routes category ([#782], thanks [@k-yle])
* Add a link to the page with the list of projects which use this repository to the readme ([#802])


[#228]: https://github.com/openstreetmap/id-tagging-schema/issues/228
[#639]: https://github.com/openstreetmap/id-tagging-schema/issues/639
[#648]: https://github.com/openstreetmap/id-tagging-schema/pull/648
[#670]: https://github.com/openstreetmap/id-tagging-schema/issues/670
[#672]: https://github.com/openstreetmap/id-tagging-schema/pull/672
[#707]: https://github.com/openstreetmap/id-tagging-schema/pull/707
[#709]: https://github.com/openstreetmap/id-tagging-schema/pull/709
[#711]: https://github.com/openstreetmap/id-tagging-schema/pull/711
[#731]: https://github.com/openstreetmap/id-tagging-schema/pull/731
[#732]: https://github.com/openstreetmap/id-tagging-schema/pull/732
[#734]: https://github.com/openstreetmap/id-tagging-schema/pull/734
[#735]: https://github.com/openstreetmap/id-tagging-schema/pull/735
[#737]: https://github.com/openstreetmap/id-tagging-schema/pull/737
[#742]: https://github.com/openstreetmap/id-tagging-schema/pull/742
[#744]: https://github.com/openstreetmap/id-tagging-schema/pull/744
[#747]: https://github.com/openstreetmap/id-tagging-schema/pull/747
[#749]: https://github.com/openstreetmap/id-tagging-schema/pull/749
[#750]: https://github.com/openstreetmap/id-tagging-schema/pull/750
[#751]: https://github.com/openstreetmap/id-tagging-schema/pull/751
[#752]: https://github.com/openstreetmap/id-tagging-schema/pull/752
[#755]: https://github.com/openstreetmap/id-tagging-schema/pull/755
[#756]: https://github.com/openstreetmap/id-tagging-schema/pull/756
[#758]: https://github.com/openstreetmap/id-tagging-schema/pull/758
[#760]: https://github.com/openstreetmap/id-tagging-schema/pull/760
[#761]: https://github.com/openstreetmap/id-tagging-schema/pull/761
[#763]: https://github.com/openstreetmap/id-tagging-schema/pull/763
[#764]: https://github.com/openstreetmap/id-tagging-schema/pull/764
[#766]: https://github.com/openstreetmap/id-tagging-schema/pull/766
[#773]: https://github.com/openstreetmap/id-tagging-schema/pull/773
[#774]: https://github.com/openstreetmap/id-tagging-schema/pull/774
[#776]: https://github.com/openstreetmap/id-tagging-schema/pull/776
[#777]: https://github.com/openstreetmap/id-tagging-schema/pull/777
[#780]: https://github.com/openstreetmap/id-tagging-schema/pull/780
[#781]: https://github.com/openstreetmap/id-tagging-schema/pull/781
[#782]: https://github.com/openstreetmap/id-tagging-schema/pull/782
[#783]: https://github.com/openstreetmap/id-tagging-schema/pull/783
[#784]: https://github.com/openstreetmap/id-tagging-schema/pull/784
[#785]: https://github.com/openstreetmap/id-tagging-schema/pull/785
[#786]: https://github.com/openstreetmap/id-tagging-schema/pull/786
[#787]: https://github.com/openstreetmap/id-tagging-schema/pull/787
[#790]: https://github.com/openstreetmap/id-tagging-schema/pull/790
[#795]: https://github.com/openstreetmap/id-tagging-schema/pull/795
[#796]: https://github.com/openstreetmap/id-tagging-schema/pull/796
[#802]: https://github.com/openstreetmap/id-tagging-schema/pull/802
[@Lonerat]: https://github.com/Lonerat
[@UKChris-osm]: https://github.com/UKChris-osm


# 5.2.1

#### Bugfixes
* Revert restriction of Traffic Calming presets to vertices, which had unintended side effects with iD's validation mechanism ([#733])

[#733]: https://github.com/openstreetmap/id-tagging-schema/issues/733


# 5.2.0

#### Bugfixes
* Fix match score for "generic" office presets (closes [#661], thanks [@k-yle])
* Remove "line" geometry from lift gate ([#679])
* Allow `direction=forward/backward` only on vertices ([#684])
* Cycleway field: use `no` value instead of `none`
* Allow charging stations to be mapped as vertices ([#703])
* Don't add "surface=grass" to Driving Ranges ([#727])
#### New Presets
* Add preset for office=graphic_design ([#664], thanks [@k-yle])
* Add preset for Variable Message Signs ([#666], thanks [@k-yle])
* Add Mobile Home Park preset ([#696], thanks [@arch0345])
* Add preset for residential gardens ([#714], thanks [@mikaeldui])
* Add specialized presets for common physicians ([#718], thanks [@westnordost])
#### Changed Presets
* Add seamark tags to marine fuel & sewerage presets ([#663], thanks [@k-yle])
* Add `direction` field to presets for `railway=derail` and `aeroway=holding_position` ([#665], thanks [@k-yle])
* Restrict (most) Traffic Calming presets to vertices
* Add oneway field to cycleway crossing presets ([#667], [#668], thanks [@kjonosm])
* Add "GNIS Feature ID" field to waterway relation preset ([#687])
* Make name field for EV chargers optional ([#688])
* Add `layer=1` by default to Solar Panel Canopy objects ([#689], thanks [@arch0345])
* Add `drive_through` as (optional) field to Cafe preset ([#697], thanks [@arch0345])
* Add `operator:type` field to park related presets
([#698], thanks [@arch0345])
* Add `material` as field to the (Utility) Marker preset ([#704], thanks [@kesterlester])
#### New and Changed Fields
* Add strings for documented values of `water_source` for Hydrants
* Add missing values to `crane:type` field ([#662], thanks [@k-yle])
* Add new field for `shoes` tag (applies to the `shop=shoes` preset) ([#669], thanks [@jdabapo])
* Add field for `archaeological_site` ([#677], thanks [@kjonosm])
* Add translatable strings to `craft` field ([#692], thanks [@kjonosm])
* Add translatable strings to fields: `traffic_calming`, `artwork_type`, `board_type`, `bollard`, `basin`, `social_facility`, `utility` ([#699], [#700], [#701], [#702], [#710], [#712], [#713], thanks [@kjonosm])
* Add `notice` as a value of the `board_type` field
#### Deprecated Tags
* Replace ~~`site_type`~~ on `historic=archaeological_site` objects with `archaeological_site` ([#677], thanks [@kjonosm])
* Upgrade ~~`board_type=map`~~ to `information=map`
#### Documentation and Other Changes
* Reduce number of duplicate translatable strings, closes ([#686])
* Add Trolleybus Route preset to Routes category ([#724], thanks [@Dimitar5555])
* Update taginfo project description ([#726])
#### Development
* Bump schema-builder to v5.3

[#661]: https://github.com/openstreetmap/id-tagging-schema/pull/661
[#662]: https://github.com/openstreetmap/id-tagging-schema/pull/662
[#663]: https://github.com/openstreetmap/id-tagging-schema/pull/663
[#664]: https://github.com/openstreetmap/id-tagging-schema/pull/664
[#665]: https://github.com/openstreetmap/id-tagging-schema/pull/665
[#666]: https://github.com/openstreetmap/id-tagging-schema/pull/666
[#667]: https://github.com/openstreetmap/id-tagging-schema/pull/667
[#668]: https://github.com/openstreetmap/id-tagging-schema/pull/668
[#669]: https://github.com/openstreetmap/id-tagging-schema/pull/669
[#677]: https://github.com/openstreetmap/id-tagging-schema/issues/677
[#679]: https://github.com/openstreetmap/id-tagging-schema/pull/679
[#684]: https://github.com/openstreetmap/id-tagging-schema/pull/684
[#686]: https://github.com/openstreetmap/id-tagging-schema/issues/686
[#687]: https://github.com/openstreetmap/id-tagging-schema/issues/687
[#688]: https://github.com/openstreetmap/id-tagging-schema/issues/688
[#689]: https://github.com/openstreetmap/id-tagging-schema/pull/689
[#692]: https://github.com/openstreetmap/id-tagging-schema/pull/692
[#696]: https://github.com/openstreetmap/id-tagging-schema/pull/696
[#697]: https://github.com/openstreetmap/id-tagging-schema/pull/697
[#698]: https://github.com/openstreetmap/id-tagging-schema/pull/698
[#699]: https://github.com/openstreetmap/id-tagging-schema/pull/699
[#700]: https://github.com/openstreetmap/id-tagging-schema/pull/700
[#701]: https://github.com/openstreetmap/id-tagging-schema/pull/701
[#702]: https://github.com/openstreetmap/id-tagging-schema/pull/702
[#703]: https://github.com/openstreetmap/id-tagging-schema/issues/703
[#704]: https://github.com/openstreetmap/id-tagging-schema/pull/704
[#710]: https://github.com/openstreetmap/id-tagging-schema/pull/710
[#712]: https://github.com/openstreetmap/id-tagging-schema/pull/712
[#713]: https://github.com/openstreetmap/id-tagging-schema/pull/713
[#714]: https://github.com/openstreetmap/id-tagging-schema/pull/714
[#718]: https://github.com/openstreetmap/id-tagging-schema/pull/718
[#724]: https://github.com/openstreetmap/id-tagging-schema/pull/724
[#726]: https://github.com/openstreetmap/id-tagging-schema/issues/726
[#727]: https://github.com/openstreetmap/id-tagging-schema/issues/727
[@jdabapo]: https://github.com/jdabapo
[@kesterlester]: https://github.com/kesterlester
[@mikaeldui]: https://github.com/mikaeldui


# 5.1.1

#### Bugfixes
* Fix a bug causing `undefined` to be used as the tag key in the `structure` field ([#676])

[#676]: https://github.com/openstreetmap/id-tagging-schema/issues/676


# 5.1.0

#### :mega: Release Highlights
* Add support for new `crossing:markings` tag of foot/cycle crossing ([#590])
#### Bugfixes
* Fix wrong tag key in Wheelchair Accessible Toilet field: instead of `:` it mistakenly contained the character `/` ([#656], thanks [@alanb43])
* Fix wrong default options for the `maxstay` field (it contained abbreviated time units, e.g. `15 min` instead of `15 minutes`) ([#652], thanks [@Zaczero])
* Values of the Currency field should not be converted to lowercase letters ([#654])
#### New Presets
* Add preset for Cycle Crossing With Traffic Signals ([#590])
* Add preset for Team Handball Court ([#636], thanks [@arch0345])
* Add preset for Diving Platform ([#637], thanks [@arch0345])
* Add preset for Pipeline Substation ([#640], thanks [@arch0345])
* Add presets for Gantry Crane and Portal Crane ([#649], thanks [@arch0345])
* Add preset for Gantry (`man_made=gantry`) ([#649], thanks [@arch0345])
* Add preset for Anchor Portal (`power=portal`) ([#649], thanks [@arch0345])
#### Changed Presets
* Switch Marked Crosswalk preset to use the `crossing=uncontrolled` tag instead of `crossing=marked` ([#590])
* Add additional search terms to the preset for `man_made=bridge` ([#634])
* Add additional search term "bike parking" to the Bicycle Parking preset
* Allow Viewpoints to be mapped as areas ([#650])
* Expand uses of the (unsupported special "wildcard" character) `*` in terms of some presets
#### New and Changed Fields
* Add fields for diameter (`rotor:diameter`) and height (`height:hub`) of wind turbines ([#241])
* Remove field for undocumented and (essentially) unused tag `water_volume` (was used on Fire Hydrant preset)
* Update `roof:colour` field to new `colour` field type ([#647])
* Add `cables` field to presets for Power Lines (`power=line` and `power=minor_line`) ([#645])
* Add field for the `structure` tag (used for example on power line towers and portals) ([#649], thanks [@arch0345])
#### Development
* Fix a bug which prevented `npm run translations` to run
* Upgrade schema-builder to version 5.2, updates transifex API to v3 (see also [iD#9375])
* Don't purge and re-fetch translations when running `npm run dist`: To do a "full" dist run – including updated translations – one can run `npm run dist translations` now
* Fix compatibility with Windows operating system (was a regression in v5.0.0) ([#655])

[iD#9375]: https://github.com/openstreetmap/iD/pull/9375
[#241]: https://github.com/openstreetmap/id-tagging-schema/pull/241
[#590]: https://github.com/openstreetmap/id-tagging-schema/pull/590
[#634]: https://github.com/openstreetmap/id-tagging-schema/issues/634
[#636]: https://github.com/openstreetmap/id-tagging-schema/pull/636
[#637]: https://github.com/openstreetmap/id-tagging-schema/pull/637
[#640]: https://github.com/openstreetmap/id-tagging-schema/pull/640
[#645]: https://github.com/openstreetmap/id-tagging-schema/issues/645
[#647]: https://github.com/openstreetmap/id-tagging-schema/issues/647
[#649]: https://github.com/openstreetmap/id-tagging-schema/pull/649
[#650]: https://github.com/openstreetmap/id-tagging-schema/issues/650
[#652]: https://github.com/openstreetmap/id-tagging-schema/pull/652
[#654]: https://github.com/openstreetmap/id-tagging-schema/issues/654
[#655]: https://github.com/openstreetmap/id-tagging-schema/issues/655
[#656]: https://github.com/openstreetmap/id-tagging-schema/pull/656
[@alanb43]: https://github.com/alanb43
[@Zaczero]: https://github.com/Zaczero


# 5.0.1

#### Bugfixes
* add missing `caseSensitive` property to many combo fields which require it


# 5.0.0

#### Schema Changes
* Upgrade to the schema-builder version 5 ([#598])
  * :warning: Introduces a new `colour` field type
  * :warning: Allows to cross-reference strings in presets and fields
#### New Presets
* Add a preset for Straits (`natural=strait`)
* Add a preset for Oxbow Lakes (`natural=water` + `water=oxbow`) ([#595], thanks [@kjonosm])
* Add a preset for Catenary Poles (`power=catenary_mast`) ([#593], thanks [@kjonosm])
* Add Fire Station Building preset ([#603], thanks [@arch0345])
* Add a Cafeteria preset ([#613], thanks [@Morion-Self])
* Add a Busway (`highway=busway`) preset ([#164], thanks [@kolgza])
* Add preset for the tag `man_made=tailings_pond`
* Add a preset for `highway=service` mapped as areas ([#463])
* Add presets for `office=property_mangagement` and `office=union` ([#622], thanks [@arch0345])
* Add preset for industrial brewery (`man_made=works` + `product=beer` or `industrial=brewery`)
* Add some additional power generation presets ([#624])
* Add American Handball Court preset ([#628], thanks [@arch0345])
* Add Tree Stump preset ([#630], thanks [@arch0345])
#### Changed Presets
* Add aliases to the Track (`highway=track`) preset ([#470], thanks [@westnordost])
* Add Toilets field as optional field to more POI presets ([#325])
* Add terms to presets: Bed, Clothes, and Wedding Shops ([#618], thanks [@willemarcel])
* Add `community_centre:for` tag as additional tag (`addTags`) to LGBTQ+ Community Center preset ([#625], thanks [@EvanCarroll])
* Add `building` field to School and Sports Center presets ([iD#9341])
* Add "Bridge" as an alias to the `man_made=bridge` preset ([#632])
* Change icon for ATMs ([#626])
* Add Access field to: Park, Nature Reserve, Sports Center and Sports Club presets ([#631])
#### New and Changed Fields
* Rename `cash_in` field to Deposits
* Add a field for the `model` tag (applies to the Street Cabinet, Ticket Validator and Telephone preset) ([#584], thanks [@Lukas458])
* Add `salt`, `sett`, `metal`, `unhewn_cobblestone`, `mud`, `woodchips` as translatable strings to the Surface field ([iD#9305], [#597], thanks [@matkoniecz])
* Add field for the `building:prefabricated` tag ([#600], thanks [@arch0345])
* Add translatable strings to the (Type of) `bicycle_parking` field ([#608], thanks [@matkoniecz])
* Add field for the "two_sided=yes" tag (applies to City Wall, Guard Rail and Kerb presets)
* Add translatable strings for payment types ([#255], thanks [@1ec5])
* Add translatable strings for tunnel types ([#251], thanks [@1ec5])
* Add translatable strings for crops ([#257], thanks [@1ec5])
* Add Population Date and Population Source fields ([#261], thanks [@1ec5])
* Add translatable strings for the `healthcare:speciality` tag ([#392], thanks [@kjonosm])
* Add translatable strings for the Religion field ([#263], thanks [@1ec5])
* Add Bike and Ride field ([#521], thanks [@arch0345])
* Rename field for `departure_board` to Departures/Arrivals Board ([#582])
* Add translatable strings for fields: `fuel`, `entrance` and `substation` ([#467], thanks [@Miroff], [#621])
* Make `recycling:*` field case sensitive
* Add strings for power generation Source and Method fields ([#624])
* Drop default value `yes` from the `dispensing` field ([#627])
* Add field for `post_box:type` ([#804], thanks[@UKChris-osm])
#### Regional Presets and Fields
* Add regional preset for Post Boxes in the UK, adding a field for `royal_cypher` ([#804], thanks[@UKChris-osm])
* Only show `drive_through` by default for Post Boxes which are in the US
#### Bugfixes
* Describe `tracktype=grade1` as paved only ([#583], thanks [@matkoniecz])
* Allow Water Slides to be mapped as points (and disallow them to be areas) ([#612])
* Allow Jersey Barrier to be mapped as a vertex (and disallow it to be a standalone point) ([#614], thanks [@arch0345])
#### Deprecated Tags
* Add ~~`internet_access=wi-fi`~~ and ~~`internet_access=WLAN`~~ as typos of the `internet_access=wlan` tag ([#592], thanks [@Marc-marc-marc])
* Upgrade ~~`natural=water` + `water=reservoir` + `reservoir_type=tailings`~~ and ~~`landuse=reservoir` + `reservoir_type=tailings`~~ to `man_made=tailings_pond` ([#144], thanks [@Marc-marc-marc])
* Replace `generator:method=solar` with `generator:source=solar` ([#620], thanks [@Marc-marc-marc])
#### Documentation and Other Changes
* Mention more "related projects" in readme

[#144]: https://github.com/openstreetmap/id-tagging-schema/pull/144
[#164]: https://github.com/openstreetmap/id-tagging-schema/pull/164
[#251]: https://github.com/openstreetmap/id-tagging-schema/pull/251
[#255]: https://github.com/openstreetmap/id-tagging-schema/pull/255
[#257]: https://github.com/openstreetmap/id-tagging-schema/pull/257
[#261]: https://github.com/openstreetmap/id-tagging-schema/pull/261
[#263]: https://github.com/openstreetmap/id-tagging-schema/pull/263
[#325]: https://github.com/openstreetmap/id-tagging-schema/pull/325
[#392]: https://github.com/openstreetmap/id-tagging-schema/pull/392
[#463]: https://github.com/openstreetmap/id-tagging-schema/pull/463
[#467]: https://github.com/openstreetmap/id-tagging-schema/pull/467
[#470]: https://github.com/openstreetmap/id-tagging-schema/pull/470
[#521]: https://github.com/openstreetmap/id-tagging-schema/pull/521
[#582]: https://github.com/openstreetmap/id-tagging-schema/pull/582
[#583]: https://github.com/openstreetmap/id-tagging-schema/pull/583
[#584]: https://github.com/openstreetmap/id-tagging-schema/pull/584
[#592]: https://github.com/openstreetmap/id-tagging-schema/pull/592
[#593]: https://github.com/openstreetmap/id-tagging-schema/pull/593
[#595]: https://github.com/openstreetmap/id-tagging-schema/pull/595
[#597]: https://github.com/openstreetmap/id-tagging-schema/pull/597
[#598]: https://github.com/openstreetmap/id-tagging-schema/pull/598
[#600]: https://github.com/openstreetmap/id-tagging-schema/pull/600
[#603]: https://github.com/openstreetmap/id-tagging-schema/pull/603
[#608]: https://github.com/openstreetmap/id-tagging-schema/pull/608
[#612]: https://github.com/openstreetmap/id-tagging-schema/issues/612
[#613]: https://github.com/openstreetmap/id-tagging-schema/pull/613
[#614]: https://github.com/openstreetmap/id-tagging-schema/pull/614
[#618]: https://github.com/openstreetmap/id-tagging-schema/pull/618
[#620]: https://github.com/openstreetmap/id-tagging-schema/pull/620
[#621]: https://github.com/openstreetmap/id-tagging-schema/issues/621
[#622]: https://github.com/openstreetmap/id-tagging-schema/pull/622
[#624]: https://github.com/openstreetmap/id-tagging-schema/pull/624
[#625]: https://github.com/openstreetmap/id-tagging-schema/pull/625
[#626]: https://github.com/openstreetmap/id-tagging-schema/issues/626
[#627]: https://github.com/openstreetmap/id-tagging-schema/issues/627
[#628]: https://github.com/openstreetmap/id-tagging-schema/pull/628
[#630]: https://github.com/openstreetmap/id-tagging-schema/pull/630
[#631]: https://github.com/openstreetmap/id-tagging-schema/pull/631
[#632]: https://github.com/openstreetmap/id-tagging-schema/issues/632
[#804]: https://github.com/openstreetmap/id-tagging-schema/pull/804
[iD#9305]: https://github.com/openstreetmap/iD/issues/9305
[iD#9341]: https://github.com/openstreetmap/iD/issues/9341
[@EvanCarroll]: https://github.com/EvanCarroll
[@Miroff]: https://github.com/Miroff
[@kolgza]: https://github.com/kolgza
[@Morion-Self]: https://github.com/Morion-Self
[@Marc-marc-marc]: https://github.com/Marc-marc-marc
[@willemarcel]: https://github.com/willemarcel


# 3.5.1

* Update distribution files and translations from Transifex.


# 3.5.0

#### New Presets
* Add a preset for Barbeque Restaurants ([#535], thanks [@arch0345])
* Add Horse Race Course preset ([#537], thanks [@arch0345])
* Add presets for building=allotment_house and building=outhouse ([#528], thanks [@matkoniecz])
* Add presets for more playground features: Play Activity Panel, Hanging Roundabout, Play Bridge, Play Climbing Wall, Funnel Ball Funnel, Painted Playground Map, Play Sledding Hill, Play Splash Pad, Teen Shelter, Tetherball Pole, Trampoline, Play Tunnel, Gaga Pit, Funnel Ball Court ([#543], thanks [@arch0345])
* Add (hidden) preset for unspecified Barriers (`barrier=yes`) ([#531])
* Add (hidden) presets for unspecified Healthcare (`healthcare=yes`) and unspecified Traffic Calming (`traffic_calming=yes`) features ([#547])
* Add (hidden) preset for unspecified Man Made Feature (`man_made=yes`)
* Add preset for Mini Speed Bumps (`traffic_calming=mini_bumps`) ([#549])
* Add preset for Driver Training Grounds (`amenity=driver_training`) ([#499], thanks [@SteveLz])
* Add preset for Runaway Truck Ramp (`highway=escape`) ([#580], thanks [@arch0345])
#### Changed Presets
* Add more fields to the Wilderness Hut preset ([#501], thanks [@k-yle])
* Improve icons of some presets (Toll Booth, Rest Area, Cycling Track, Horse Racetrack, Observation Tower, Hot Spring, Nursery/Childcare) ([#535],[#579], thanks [@arch0345])
* Don't suggest to add `natural=sand` for bunkers in golf courses ([#534])
* Add field for the value of the `tee` tag to the Tee preset ([#546], thanks [@arch0345])
* Make `building` field always visible in Gas Station preset ([#559], thanks [@arch0345])
* Add aliases and terms for many Shop presets ([#475], thanks [@westnordost])
* Add Gender field on Hairdresser preset ([#575], thanks [@nlehuby])
* Show Activity field by default in Guidepost and Map preset ([#571])
#### Regional Presets and Fields
* Add field for the `ref:FR:SIRET` tag for the "SIRET" number of businesses in France ([#576], thanks [@nlehuby])
#### New and Changed Fields
* Add field for the value of the `building:part` tag to the Building Part preset ([#527], thanks [@arch0345])
* Add a field for Truck Speed Limit (`maxspeed:hgv` tag) ([#520], thanks [@arch0345])
* Add value `separate` to the Bike Lanes field ([#540], thanks [@SafetyIng])
* Add fields for the `subject` and `subject:wikidata` tags ([#543], thanks [@arch0345])
* Add field for the `turning_circle` tag to map the Shape of a Turning Circle ([#562], thanks [@arch0345])
* Split `building_area` field: one with default value `"yes"` and one with no default, and apply it accordingly to different presets (default `yes` is only used for presets where the vast majority of features have the `building` tag set)
* Add field for Classes of Driver’s License (`license_classes`) ([#499], thanks [@SteveLz])
#### Bugfixes
* Fix missing primary `emergency` tag in `addTags` of Lifeboat Station preset ([#551], thanks [@k-yle])
* Disable TagInfo-suggestions of parking:orientation ([#554])
* Don't add `landuse=industrial` to hydro power plants by default ([#557], thanks [@Hiausirg])
* Don't consider `craft=optician` as deprecated anymore (it is documented and approved)
* Fix typo "ski" instead of "Ski" in Activity field ([#560], thanks [@Hufkratzer])
* Replace `sector:name` tag/field with regular `name` field in Cemetery Section preset ([#561], thanks [@arch0345])
* Allow Barbecue/Grill preset to be used on areas ([#567], thanks [@elcaptain])
* Allow Truck Scale (`amenity=weighbridge`) also on lines ([#573])
#### Deprecated Tags
* Replace ~~`parking:orientation=orthogonal`~~ with `=perpendicular` ([#553])
* Drop some deprecation rules which today have only very few (<10) occurrences
* Don't suggest to blindly remove ambiguous oneway tags (`oneway=no;yes` or `oneway=unknown`)
#### Documentation and Other Changes
* Add Github issue templates ([#542])
* Add a Github workflow to automatically run `npm run build`
* Add an automated check which looks for non-json files in the `data/` directory

[#475]: https://github.com/openstreetmap/id-tagging-schema/pull/475
[#499]: https://github.com/openstreetmap/id-tagging-schema/pull/499
[#501]: https://github.com/openstreetmap/id-tagging-schema/pull/501
[#520]: https://github.com/openstreetmap/id-tagging-schema/pull/520
[#527]: https://github.com/openstreetmap/id-tagging-schema/pull/527
[#528]: https://github.com/openstreetmap/id-tagging-schema/pull/528
[#531]: https://github.com/openstreetmap/id-tagging-schema/issues/531
[#534]: https://github.com/openstreetmap/id-tagging-schema/issues/534
[#535]: https://github.com/openstreetmap/id-tagging-schema/pull/535
[#537]: https://github.com/openstreetmap/id-tagging-schema/pull/537
[#540]: https://github.com/openstreetmap/id-tagging-schema/pull/540
[#542]: https://github.com/openstreetmap/id-tagging-schema/pull/542
[#543]: https://github.com/openstreetmap/id-tagging-schema/pull/543
[#546]: https://github.com/openstreetmap/id-tagging-schema/pull/546
[#547]: https://github.com/openstreetmap/id-tagging-schema/issues/547
[#549]: https://github.com/openstreetmap/id-tagging-schema/issues/549
[#551]: https://github.com/openstreetmap/id-tagging-schema/pull/551
[#553]: https://github.com/openstreetmap/id-tagging-schema/issues/553
[#554]: https://github.com/openstreetmap/id-tagging-schema/pull/554
[#557]: https://github.com/openstreetmap/id-tagging-schema/pull/557
[#559]: https://github.com/openstreetmap/id-tagging-schema/pull/559
[#560]: https://github.com/openstreetmap/id-tagging-schema/pull/560
[#561]: https://github.com/openstreetmap/id-tagging-schema/pull/561
[#562]: https://github.com/openstreetmap/id-tagging-schema/pull/562
[#567]: https://github.com/openstreetmap/id-tagging-schema/pull/567
[#571]: https://github.com/openstreetmap/id-tagging-schema/issues/571
[#573]: https://github.com/openstreetmap/id-tagging-schema/issues/573
[#575]: https://github.com/openstreetmap/id-tagging-schema/pull/575
[#576]: https://github.com/openstreetmap/id-tagging-schema/pull/576
[#579]: https://github.com/openstreetmap/id-tagging-schema/pull/579
[#580]: https://github.com/openstreetmap/id-tagging-schema/pull/580
[@elcaptain]: https://github.com/elcaptain
[@Hiausirg]: https://github.com/Hiausirg
[@Hufkratzer]: https://github.com/Hufkratzer
[@nlehuby]: https://github.com/nlehuby
[@SafetyIng]: https://github.com/SafetyIng
[@SteveLz]: https://github.com/SteveLz

# 3.4.2

#### Bugfixes
* Replace unavailable icon for new `moped_link` preset with an alternative.


# 3.4.0

#### :mega: Release Highlights
* Rename `highway=track` preset to "Track / Land-Access Road" ([#288])
* Allow the website tag to be used on any feature ([#503])

Thanks to all contributors: [@westnordost], [@arch0345], [@matkoniecz], [@flacombe], [@Kazing], [@kjonosm], [@k-yle], [@Binnette], all translators and everyone else who suggested improvements!

#### New Presets
* Add presets for Workwear Store and Suits Store ([#478])
* Add Yurt preset ([#489])
* Add Informal Foot Path preset ([#493])
* Create preset for `route=railway` ([#483])
* Add preset for `sport=table_football` ([#485])
* Add Radar Speed Sign preset ([#442])
* Add preset for `highway=emergency_access_point` ([#504])
* Add more barrier presets ([#506])
* Add presets for bike tube and pizza vending machines ([#516])
* Add preset for `cemetery=sector` ([#517])
* Add Grave preset ([#522])
* Add hidden preset for `building=manufacture` ([#524])
#### Regional Presets
* add support for moped links in the NL ([#484])
#### Changed Presets
* Make all entrance `fields` available in the Main Entrance preset ([#491])
* Add oneway field to Tram Track preset
* Add additional terms to Service Area preset ([#495])
* Make the `multipolygon` relation type searchable ([#481])
* Add Wheelchair field to Emergency Exits
* Add `lane_markings` field to some road presets ([#479])
* Drop `description` field from Valley and Cape presets
* Add `ref` field to Milestone preset ([#474])
* Rename `tourism=alpine_hut` preset to "Mountain Lodge" ([#480])
* Improve terms of crossing and traffic calming presets/fields ([#508])
* Remove Crop field from Farmyard preset and add terms ([#513])
* Update power presets following transformer tagging extension ([#447])
#### New and Changed Fields
* Increment camera:direction by 5 degrees at a time ([#482])
* Made `target` and `country` fields case sensitive ([#490])
* Add a field for `sport=table_football` to the Pub, Bar and Restaurant presets ([#485])
* Add `maxwidth` as optional field to some road presets and the Ferry Route preset ([#518])
#### Bugfixes
* Fix broken Carpet Hanger preset ([#486])
* Fix spelling of not title cased aliases
* Avoid converting Destination field to snake case ([#515])
* Fix wrong tag used in Emergency Water Tank preset (replace wrong tag ~~landuse=reservoire~~ with `man_made=storage_tank`) ([#525])
#### Deprecated Tags
* Drop deprecation rule for `fenced=yes` tag ([#514])
* Add deprecation and new tag for (naval) military bases ([#510])
* Fix replacements of deprecated golf tags
* Replace ~~`shop=general_store`~~ with `shop=general` ([#476])
* Replace ~~`shop=office_supplies`~~ with `shop=stationery` ([#477])
* Drop preset for deprecated `waterway=riverbank` tag
#### Documentation and Other Changes
* Clean up unnecessary uses of the `wikimedia_commons` field (which is a universal field)
* Clean up unnecessary uses of the `name` field (which is a universal field)
* Clean up unnecessary uses of the `start_date` field (which is a universal field)
* Make `roof:colour` field to work with iD's color picker widget ([#500])

[#288]: https://github.com/openstreetmap/id-tagging-schema/pull/288
[#442]: https://github.com/openstreetmap/id-tagging-schema/pull/442
[#447]: https://github.com/openstreetmap/id-tagging-schema/pull/447
[#474]: https://github.com/openstreetmap/id-tagging-schema/issues/474
[#476]: https://github.com/openstreetmap/id-tagging-schema/pull/476
[#477]: https://github.com/openstreetmap/id-tagging-schema/pull/477
[#478]: https://github.com/openstreetmap/id-tagging-schema/pull/478
[#479]: https://github.com/openstreetmap/id-tagging-schema/pull/479
[#480]: https://github.com/openstreetmap/id-tagging-schema/issues/480
[#481]: https://github.com/openstreetmap/id-tagging-schema/pull/481
[#482]: https://github.com/openstreetmap/id-tagging-schema/pull/482
[#483]: https://github.com/openstreetmap/id-tagging-schema/pull/483
[#484]: https://github.com/openstreetmap/id-tagging-schema/issues/484
[#485]: https://github.com/openstreetmap/id-tagging-schema/pull/485
[#485]: https://github.com/openstreetmap/id-tagging-schema/pull/485
[#486]: https://github.com/openstreetmap/id-tagging-schema/pull/486
[#489]: https://github.com/openstreetmap/id-tagging-schema/pull/489
[#490]: https://github.com/openstreetmap/id-tagging-schema/pull/490
[#491]: https://github.com/openstreetmap/id-tagging-schema/pull/491
[#493]: https://github.com/openstreetmap/id-tagging-schema/pull/493
[#495]: https://github.com/openstreetmap/id-tagging-schema/pull/495
[#500]: https://github.com/openstreetmap/id-tagging-schema/pull/500
[#503]: https://github.com/openstreetmap/id-tagging-schema/pull/503
[#504]: https://github.com/openstreetmap/id-tagging-schema/pull/504
[#506]: https://github.com/openstreetmap/id-tagging-schema/pull/506
[#508]: https://github.com/openstreetmap/id-tagging-schema/pull/508
[#510]: https://github.com/openstreetmap/id-tagging-schema/issues/510
[#513]: https://github.com/openstreetmap/id-tagging-schema/pull/513
[#514]: https://github.com/openstreetmap/id-tagging-schema/issues/514
[#515]: https://github.com/openstreetmap/id-tagging-schema/pull/515
[#516]: https://github.com/openstreetmap/id-tagging-schema/pull/516
[#517]: https://github.com/openstreetmap/id-tagging-schema/pull/517
[#518]: https://github.com/openstreetmap/id-tagging-schema/issues/518
[#522]: https://github.com/openstreetmap/id-tagging-schema/pull/522
[#524]: https://github.com/openstreetmap/id-tagging-schema/pull/524
[#525]: https://github.com/openstreetmap/id-tagging-schema/issues/525
[@flacombe]: https://github.com/flacombe
[@Kazing]: https://github.com/Kazing


# 3.3.0

#### :mega: Release Highlights
* Phase out `opening_hours:covid19` field by only making it an optional field ([#401])
* Fix handling of `highway=construction` objects ([#443], [#416])
* Add `access=customers` value to access field ([#326])
* Add a (hidden) preset for `crossing=uncontrolled` ([#390])

Thanks to all contributors: [@matkoniecz], [@Binnette], [@danieldegroot2], [@arch0345], [@k-yle], [@Zverik], [@zymurgic], [@1ec5], [@tordans], [@westnordost], [@rkost], [@Aniket], all translators and everyone else who suggested improvements!

#### New Presets
* Add Futsal Court preset ([#367])
* Add Archery Range preset ([#369])
* Add more Disc Golf features ([#372])
* Add Four Square Court preset ([#385])
* Add presets for unspecified Shops and Offices ([#399])
* Add Lighting Mast preset ([#407])
* Add Cart Corral preset ([#414])
* Add Tetherball Court preset ([#441])
* Add Padel Court preset ([#445])
* Add Hopscotch preset ([#451])
* Add preset for Carpet Hangers ([#452])

#### Changed Presets
* Add presets for pedestrian crossings with traffic signals for lines ([#368], thanks [@Dimitar5555])
* Consolidate _raised_ crossing presets into a field
* Update icon for Swamp preset ([#371])
* Add 'pet' as search term for Excrement Bag Dispenser preset ([#370])
* Add address & operator fields to industrial presets ([#383])
* Add ref & website fields to monitoring station ([#380])
* Add rail as a term for Train Track ([#381])
* Use `water=reservoir` instead of `landuse` tag for emergency water reservoirs
* Add search terms to Recycling preset ([#400])
* Add `name` field to Beach preset ([#417])
* Add `position` field to Fire Hydrant preset ([#418])
* Garage(s): Only keep capacity as field ([#423])
* Add `ref` field to Wastewater Treatment Plant preset ([#425])
* Add `ref` field to Atm, Payment Terminal, and Vending Machine presets ([#428])
* Update icon of Lighting Mast preset ([#439])
* Add search terms for Spring Rocker preset ([#446])
* Add `support` field to Street Lamp preset ([#448])
* Update icon of Bicycle Parking preset
* Improve naming of horse facilities ([#413])
* Add bike services field to Sports and Outdoor Shops presets as an optional field ([#464])
* Add ref field to Subway Entrance preset ([#465])
* Update allowed geometry types of some playground equipment presets ([#466])

#### New and Changed Fields
* Add field for `seamark:rescue_station:category` tag to Lifeboat Station preset ([#382])
* Add `trolley:deposit` field ([#414])
* Add (new) `lifeguard` and `supervised` fields to Beach preset
* Add fields for `crossing=traffic_signals` presets ([#453], [#456])
* Add more fields to Tree preset ([#455])
* Add `flashing_lights` field to pedestrian crossing presets ([#449])
* Add values to `beauty` field ([#427])
* Use emoji and unicode symbols for `mtb:scale:imba` values ([#462])

#### Bugfixes
* Don't snake-casing values of the network field ([#375])
* allow `maxspeed:advisory` field everywhere ([#389]
* Fix code of Ticket Validator preset ([#391])
* Fix tag for birthing centers ([#398])
* Fix name and tags of `highway=construction` preset ([#443], [#416])
* Avoid snake_case on `not:name` ([#424])
* Disallow Runway preset on areas
* Allow Hot Springs to be mapped as areas ([#436])
* Allow Parcel Lockers to be mapped as areas ([#458])
* Change Golf Cartpath preset to use `highway=path` by default ([#327])

#### Deprecated Tags
* ~~`building:roof:shape`~~ :arrow_right: `roof:shape` ([#337])
* ~~`healthcare=birthing_center`~~ :arrow_right: `healthcare=birthing_centre` ([#398])

#### Documentation and Other Changes
* Add code formatting check and workflow
* Update and use some new temaki icons
* Fix documentation link for `office=coworking` preset ([#403])
* Add json schema configuration ([#432])

[#326]: https://github.com/openstreetmap/id-tagging-schema/pull/326
[#327]: https://github.com/openstreetmap/id-tagging-schema/pull/327
[#337]: https://github.com/openstreetmap/id-tagging-schema/pull/337
[#367]: https://github.com/openstreetmap/id-tagging-schema/pull/367
[#368]: https://github.com/openstreetmap/id-tagging-schema/pull/368
[#369]: https://github.com/openstreetmap/id-tagging-schema/pull/369
[#370]: https://github.com/openstreetmap/id-tagging-schema/pull/370
[#371]: https://github.com/openstreetmap/id-tagging-schema/pull/371
[#372]: https://github.com/openstreetmap/id-tagging-schema/pull/372
[#375]: https://github.com/openstreetmap/id-tagging-schema/pull/375
[#380]: https://github.com/openstreetmap/id-tagging-schema/pull/380
[#381]: https://github.com/openstreetmap/id-tagging-schema/pull/381
[#382]: https://github.com/openstreetmap/id-tagging-schema/pull/382
[#383]: https://github.com/openstreetmap/id-tagging-schema/pull/383
[#385]: https://github.com/openstreetmap/id-tagging-schema/pull/385
[#389]: https://github.com/openstreetmap/id-tagging-schema/issues/389
[#390]: https://github.com/openstreetmap/id-tagging-schema/issues/390
[#391]: https://github.com/openstreetmap/id-tagging-schema/pull/391
[#398]: https://github.com/openstreetmap/id-tagging-schema/issues/398
[#399]: https://github.com/openstreetmap/id-tagging-schema/issues/399
[#400]: https://github.com/openstreetmap/id-tagging-schema/pull/400
[#401]: https://github.com/openstreetmap/id-tagging-schema/issues/401
[#403]: https://github.com/openstreetmap/id-tagging-schema/issues/403
[#407]: https://github.com/openstreetmap/id-tagging-schema/pull/407
[#413]: https://github.com/openstreetmap/id-tagging-schema/issues/413
[#414]: https://github.com/openstreetmap/id-tagging-schema/pull/414
[#416]: https://github.com/openstreetmap/id-tagging-schema/pull/416
[#417]: https://github.com/openstreetmap/id-tagging-schema/pull/417
[#418]: https://github.com/openstreetmap/id-tagging-schema/pull/418
[#423]: https://github.com/openstreetmap/id-tagging-schema/pull/423
[#424]: https://github.com/openstreetmap/id-tagging-schema/pull/424
[#425]: https://github.com/openstreetmap/id-tagging-schema/pull/425
[#427]: https://github.com/openstreetmap/id-tagging-schema/pull/427
[#428]: https://github.com/openstreetmap/id-tagging-schema/pull/428
[#432]: https://github.com/openstreetmap/id-tagging-schema/pull/432
[#436]: https://github.com/openstreetmap/id-tagging-schema/issues/436
[#438]: https://github.com/openstreetmap/id-tagging-schema/pull/438
[#439]: https://github.com/openstreetmap/id-tagging-schema/pull/439
[#441]: https://github.com/openstreetmap/id-tagging-schema/pull/441
[#443]: https://github.com/openstreetmap/id-tagging-schema/issues/443
[#445]: https://github.com/openstreetmap/id-tagging-schema/pull/445
[#446]: https://github.com/openstreetmap/id-tagging-schema/pull/446
[#448]: https://github.com/openstreetmap/id-tagging-schema/pull/448
[#449]: https://github.com/openstreetmap/id-tagging-schema/pull/449
[#451]: https://github.com/openstreetmap/id-tagging-schema/pull/451
[#452]: https://github.com/openstreetmap/id-tagging-schema/pull/452
[#453]: https://github.com/openstreetmap/id-tagging-schema/pull/453
[#455]: https://github.com/openstreetmap/id-tagging-schema/pull/455
[#456]: https://github.com/openstreetmap/id-tagging-schema/pull/456
[#458]: https://github.com/openstreetmap/id-tagging-schema/pull/458
[#462]: https://github.com/openstreetmap/id-tagging-schema/pull/462
[#464]: https://github.com/openstreetmap/id-tagging-schema/issues/464
[#465]: https://github.com/openstreetmap/id-tagging-schema/issues/465
[#466]: https://github.com/openstreetmap/id-tagging-schema/issues/466
[@quotquot]: https://github.com/quotquot
[@FloEdelmann]: https://github.com/FloEdelmann
[@Dimitar5555]: https://github.com/Dimitar5555
[@Binnette]: https://github.com/Binnette
[@danieldegroot2]: https://github.com/danieldegroot2
[@arch0345]: https://github.com/arch0345
[@Zverik]: https://github.com/Zverik
[@zymurgic]: https://github.com/zymurgic
[@rkost]: https://github.com/rkost
[@HandyHat]: https://github.com/HandyHat
[@Aniket]: https://github.com/Aniket


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
[#281]: https://github.com/openstreetmap/id-tagging-schema/issues/281
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
ow
