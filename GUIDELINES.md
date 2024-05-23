# Guidelines for the tagging schema

Do you have an idea for a new preset or field? Read this!

## 1. Decide whether the idea works out with the tagging schema project

Adding a preset or field to the tagging schema is a responsibility.
We have to make sure that new and expert users will understand the presets and fields
and contribute high quality data to OpenStreetMap.

Consider the following:

### General guidelines

- 📋 **Established Documentation**: The tagging schema will only consider tags that are well documented on the OSM wiki. The documentation should be established and without ambiguity.
- 🏷️ **Established tags only**: No new or unestablished tags should be introduced through Presets. Establishing tags must remain a community process and not be dictated by software implementation.
- ✅ **Proposal or accepted**: A tagging is considered established when it has completed the [proposal process](https://wiki.openstreetmap.org/wiki/Proposal_process) or can in some other way be considered _accepted_ by the OpenStreetMap community. Other factors are how long a tag is _in use_, how many times it is used and if the usage over time signals growing usage.
- 🤷 **Useful purpose**: Especially for tags that are not that well established yet. Presets and fields should have some application. As by the design of OpenStreetMap, there are countless things that _could_ be collected, such as the brightness of street lamps, etc. and sometimes things like these are even documented on the wiki (because it is a wiki, obviously). That does not mean that it makes sense to nudge users to collect this information via a preset or field.
- 🕓 **Effort vs impact**: Consider if it is worth the effort when compared to the impact the preset and field would have. For how many elements would this quest type apply? This point is especially valid if you don't plan to contribute the code changes yourself through a PR.

### User experience

No preset and field is isolated, they are always presentend next to other preset and fields in the different user interfaces that present the tagging schema.

- 🔦 **Easy to pick**: Users have to be able to understand and pick the right preset given the limited information that the user interfaces can provide. Good presets help guide the user with the best name and good additional documentation `(i)`.
- 🔎 **Easy to search**: When searching, similar presets will be presented next to one another. Consider and test typical search cases. You might have to adjust the name and documentation of other presets so users can make their best decision.
- 👨‍💻 **Users are no experts**: No knowledge about OpenStreetMap or any other background knowledge must be necessary.
- 🐿️ **Easy answer**: Users are out and about and impatient. A quick, straightforward and clear answer for fields must be possible.

### Situational presets

- 🙈 **Unsearchable presets**: The tagging schema is not only for adding information, it is also used to present existing information. Consider adding an _usearchable present_ for tagging that should be highlighted with a preset on the map and with defined fields. Reasons to make a preset unsearchable are: There are multiple ways tag something and we want to present both ways but promote only one way. There are other reasons why a commonly used tagging should be hidden from the search and list interface, e.g. preserve a good [user experience](#user-experience).
- 🏝️ **Local presets and fields**: In general tagging in OSM, presets and fields should apply globally and we need to make an effort to do so. However, when local tagging conventions exist or presets only make sense for certain region, presets and fields can receive a local filter. This will increate the need for good testing and it does make it harder to preserver a good [user experience](#user-experience).

### Tag updates and additions

- ➕ **Suggested additions**: Presets can suggest adding additional tags. The wiki and community consensus has to make a clear case for those suggestions.
- 🔄 **Updates**: Deprecation rules can suggest updating tags. We need good documentation and consensus on those deprecations.


## 2. Design the preset

As mentioned, the user interface must leave no space for misunderstandings, it must be concise and quick and easy to use.

- Define the tags that are required on an object to trigger the preset
- Find a name, category and define a list of english search terms
- Check the search if other presets show up that might cause missunderstanding
- Pick out an icon or start the process to create a new icon
- Define which fields to show `fields` and suggest (`moreFields`) and consider the order of fields
- Check the `(i)` documentation and add or update the Wikidata item if needed to give a great short help text
- Use the PR preview to add test cases with deeplinks to OSM objects that show the preset in use

## 4. Implement

If you know about `JSON`, you can implement the preset or field yourself. Simply create a ticket in which you introduce your quest idea, have it discussed by the community (to get feedback whether it is doable and desired before implementation) and after implementation, create a pull request to get it merged.

More on how to add presets in ["Maging changes"](./CONTRIBUTING.md#making-changes)

If not, still create a ticket. The more of the above considerations and preparational work you have already done, the easier it will be for someone else to put this in code.
