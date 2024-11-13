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
- Check the `(i)` documentation and add or update the OSM Wikidata item if needed to provide a helpful short text.
- Use the PR preview to add test cases with deep links to OSM objects that demonstrate the preset in use.

## 3. Implement

If you are familiar with `JSON`, you can implement the preset or field yourself. First, create a ticket to introduce your tagging idea and discuss it with the community to get feedback on its feasibility and desirability. After implementation, create a pull request to get it merged.

For more details on adding presets, see ["Making changes"](./CONTRIBUTING.md#making-changes).

If you are not familiar with `JSON`, still create a ticket. The more you have considered and prepared from the above steps, the easier it will be for someone else to code it.
