# Guidelines for the Tagging Schema

Do you have an idea for a new preset or field? Read this!

## 1. Evaluate Your Idea for the Tagging Schema Project

Adding a preset or field to the tagging schema is a significant responsibility.
We must ensure that both new and experienced users can understand the presets and fields,
thereby contributing high-quality data to OpenStreetMap (OSM).

Consider the following:

### General Guidelines

- 📋 **Established Documentation**: The tagging schema will only consider tags that are well-documented on the OSM wiki. The documentation should be clear and unambiguous.
- 🏷️ **Established Tags Only**: No new or unestablished tags should be part of presets. Establishing tags must remain a community-driven process, not dictated by software implementation.
- ✅ **Proposal or Accepted**: A tag is considered established when it has completed the [proposal process](https://wiki.openstreetmap.org/wiki/Proposal_process) or is otherwise accepted by the OSM community. Factors include the tag's duration and frequency of use, whether its usage is increasing over time and its usage by mainstream data consumers.
- 🤷 **Notable Purpose**: Especially for less established tags, presets and fields should have a practical application. OSM allows for the collection of a wide variety of data, some of it for niche purposes. For example, the brightness of street lamps might be documented, but it doesn't necessarily warrant a preset or field.
- 🕓 **Effort vs. Impact**: Consider whether the effort required is justified by the impact the preset or field will have. Assess how many elements this new type will apply to. This is particularly important if you do not plan to contribute the code changes yourself through a pull request (PR).

### User Experience

No preset or field is isolated; they are always presented alongside others in various user interfaces that utilize the tagging schema.

- 🔦 **Easy to Pick**: Users must be able to understand and select the correct preset given the limited information available in the user interfaces. Good presets guide the user with clear names and helpful additional documentation `(i)`.
- 🔎 **Easy to Search**: When searching, similar presets will appear next to each other. Consider and test typical search scenarios. You might need to adjust the names and documentation of other presets to ensure users can make the best decision.
- 👨‍💻 **Users Are Not Experts**: No prior knowledge of OpenStreetMap or any other background information should be necessary.
- 🐿️ **Easy Answer**: Users are often on the go and impatient. Fields should allow for quick, straightforward, and clear answers.

### Situational Presets

- 🙈 **Unsearchable Presets**: The tagging schema is not only for adding information but also for presenting existing information. Consider adding an unsearchable preset for tagging that should be highlighted with a preset on the map and with defined fields. Reasons to make a preset unsearchable include: multiple ways to tag something where one method is preferred, or other reasons to hide commonly used tags from the search and list interface to preserve a good [user experience](#user-experience).
- 🏝️ **Local Presets and Fields**: Generally, presets and fields in OSM should be globally applicable, and efforts should be made to ensure this. However, when local tagging conventions exist or when presets only make sense for certain regions, presets and fields can be given a local filter. This increases the need for thorough testing and makes it more challenging to maintain a good [user experience](#user-experience).

### Usage count sufficient to consider a tag as established

There is no fixed threshold above which a tag will be eligible to be included due its significant usage. Factors include:

- whether usage is organic or result of import/mass edit. In some cases [chronology graph at taginfo](https://taginfo.openstreetmap.org/tags/building=trullo) can reveal that tag was not added by mappers in normal editing, such usage would be almost entirely discounted. Note that in some cases this will be less visible, for example with slow-moving automated retagging or import.
- how widely the tag is used - a tag used 20 000 times in a single location or by a single mapper will be rejected as not established, while a tag used less but by many mappers across the world is far likely to be accepted
- how often it could be used - a tag with 10 000 uses is unlikely to be considered as established if it is a property that could be added to every `shop=`. In comparison a property of the [`diplomatic=embassy`](https://wiki.openstreetmap.org/wiki/Key:embassy) would require much lower usage threshold to be considered established, as number of embassies is vastly lower than number of shops.
- whether another value is likely to be used by mistake - for example [`generator:source=wave`](https://wiki.openstreetmap.org/wiki/Tag%3Agenerator%3Asource%3Dwave) is used just a few times worldwide, but if omitted from presets such power plants could end up mistagged as [`generator:source=hydro`](https://wiki.openstreetmap.org/wiki/Tag:generator:source%3Dhydro) or [`generator:source=tidal`](https://wiki.openstreetmap.org/wiki/Tag:generator:source%3Dtidal). The same applies, for example, to [rarely used `shop=` values likely to be mistagged as something else](https://github.com/openstreetmap/id-tagging-schema/pull/2004).

In general, iD tagging schema is not intended as a place to promote new tagging that should be established but for some reason is not yet popular. If some tag is barely used and should be used more widely consider for example:
- mapping such objects or properties in your area
- organizing a mapping event focused on mapping this property or feature type
- sharing this tag with others and encouraging them to map it
- creating a JOSM user preset or adding it to more specialized tagging tools
- going through [proposal process](https://wiki.openstreetmap.org/wiki/Proposal_process)
- adding it to MapComplete, StreetComplete tasks if applicable

If global tag usage could be increased by 10% in the time necessary to implement, test and review a pull request adding it to the iD tagging schema, it is a very strong sign that it is too early to add it here.

If unsure, you can search among [pull requests](https://github.com/openstreetmap/id-tagging-schema/pulls?q=is%3Apr) for similar ones and see whether any were accepted/rejected, this gives strong indicator what may happen with a new one. Especially ones with [label "waitfor-higher-usage"](https://github.com/openstreetmap/id-tagging-schema/issues?q=label%3Awaitfor-higher-usage) are especially likely to be relevant.

### Tag Updates and Additions

- ➕ **Suggested Additions**: Presets can suggest additional tags. These suggestions must be clearly supported by the wiki and community consensus.
- 🔄 **Updates**: Deprecation rules can suggest updating tags. Good documentation and consensus are needed for these deprecations.

**In both cases, _indicators for consensus_ are:**

- The deprecation is documented in the wiki and is either official (resulting from a proposal process) or long-standing (about a year).
- There is a significant drop in usage compared to previous numbers, with a negative trend ([visible in the graph](https://taghistory.raifer.tech/)).
- Usage of the deprecated tag remains stagnant for a longer period (about a year).

In addition, the deprecated tag must have reasonably high usage to be considered. Low usage tags should be addressed through other cleanup methods, such as [MapRoulette](https://maproulette.org/) or similar initiatives.

**Deprecations are not for cleanup:**

Deprecation rules work such that the user sees a message with suggestions and can act only when editing the given element. This makes them well-suited for gradual, human-reviewed updates of taggings like crossings. However, they are not suitable for cleaning up incorrect tagging from the database, especially for low-volume changes.

There are, however, alternatives to consider:
- Your cleanup task might be eligible for an automated (bot) edit. [Please learn more on the wiki…](https://wiki.openstreetmap.org/wiki/Automated_Edits_code_of_conduct)
- If your task is small enough, a few [editing sessions in JOSM](https://wiki.openstreetmap.org/wiki/JOSM) will often do the trick. However, mass-replacing without checking each object is still considered an automated edit, so the [guidelines apply](https://wiki.openstreetmap.org/wiki/Automated_Edits_code_of_conduct). Please consult other mappers first.
- A good way to work down a list of tasks is to create [a MapRoulette Challenge](https://maproulette.org/).
- Should those options not suit you, you can always suggest such changes in the [OSM community forum](https://community.openstreetmap.org/).

## 2. Design the Preset

The user interface must be clear, concise, and easy to use, leaving no room for misunderstandings.

- Define the tags required on an object to trigger the preset.
- Choose a name, category, and define a list of American English search terms.
- Use Title Case for the the preset `name` and [`aliases`](https://github.com/ideditor/schema-builder?tab=readme-ov-file#aliases) as well as the field [`label`](https://github.com/ideditor/schema-builder?tab=readme-ov-file#label) property. Use lower case for the preset [`terms`](https://github.com/ideditor/schema-builder?tab=readme-ov-file#terms) (sorted A-Z) and Title Case or sentences for preset's [`strings`-`options`](https://github.com/ideditor/schema-builder?tab=readme-ov-file#strings).
- Check the search functionality to ensure other presets do not cause confusion.
- Select an icon or start the process to create a new one.
- Define which fields to show (`fields`) and suggest (`moreFields`), considering the order of fields.
- Check the [`(i)` documentation](./CONTRIBUTING.md#info-i) and add or update the OSM Wiki data item if needed to provide a helpful short text.
- Use the PR preview to add test cases with deep links to OSM objects that demonstrate the preset in use.

## 3. Implement

If you are familiar with `JSON`, you can implement the preset or field yourself. First, create a ticket to introduce your tagging idea and discuss it with the community to get feedback on its feasibility and desirability. After implementation, create a pull request to get it merged.

For more details on adding presets, see ["Making changes"](./CONTRIBUTING.md#making-changes).

If you are not familiar with `JSON`, still create a ticket. The more you have considered and prepared from the above steps, the easier it will be for someone else to code it.

### File Name Conventions and Directory Structure

The folder structure and file names of the presets and fields closely follows the main `tags` of the respective files.
* For example, the preset for `natural=tree` is defined in the file `tree.json` in the directory `data/presets/natural`.
* For presets with more than one tag, the directory structure is nested: e.g. the preset for `highway=service + service=driveway` is included as `highway/service/driveway.json`.
* Unsearchable presets are defined in a file name starting with an underscore.
* Regional presets or fields should be suffixed with a dash and the respective region codes where they are applied, the "default" preset for the rest of the world is kept without a suffix (e.g. `royal_cypher-GB.json`).
* If reasonable, avoid renaming or moving files when altering the tags of a presets: because translations and some external datasets (e.g. [NSI](https://github.com/osmlab/name-suggestion-index)) are referencing presets by their file and directory name as an identifier, every time a preset or field file is renamed or moved, existing translations are lost and external references potentially broken. If a file name really need to be changed, consider the following approach to limit the impact of the identifier change: 
  1. add a placeholder preset with the file name and directory as the preset's previous version that is:
    * not searchable
    * references the strings and fields of the new preset or field
    * has a low matchscore
  2. after the id-tagging-schema release that includes the id change: notify upstream consumers of the data (e.g. NSI) about the change and ask them to update their ids to the new ids
  3. delete the placeholder presets some time after all relevant upstream data was updated and released

