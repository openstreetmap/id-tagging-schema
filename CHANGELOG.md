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

# unreleased (5.1.0-dev, changelog incomplete)

#### Development
* Upgrade schema-builder to version 5.2, updates transifex API to v3 (see also [iD#9375])

[iD#9375]: https://github.com/openstreetmap/iD/pull/9375


# 5.0.1

#### Bugfixes
* add missing `caseSensitive` property to many combo fields which require it


# 5.0.0

#### Schema Changes
* Upgrade to the schema-build version 5 ([#598])
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
[iD#9305]: https://github.com/openstreetmap/iD/issues/9305
[iD#9341]: https://github.com/openstreetmap/iD/issues/9341
[@EvanCarroll]: https://github.com/EvanCarroll
[@Miroff]: https://github.com/Miroff
[@kolgza]: https://github.com/kolgza
[@Morion-Self]: https://github.com/Morion-Self
[@Marc-marc-marc]: https://github.com/Marc-marc-marc


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
* Add presets for pedestrian crossings with traffic signals for lines ([#368])
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
