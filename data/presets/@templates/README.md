# About `@templates`

Presets in `@templates` are a convention for a _virtual_ presets that are only used from inside other presets.

The only property that really matter for these special presets are the `fields`.

All other properties can be copied from existing template presets and ignored. They are default values that are meant to match all cases where they might be referenced.

## How to use

Inside another preset, reference the template – or any other preset - like `"{@templates/internet_access}"` in `fields` or  `moreFields`. This will "copy" all the listed fields from the file `data/presets/@templates/internet_access.json`.

You can only "copy" (template) `fields` to (preset) `fields` and (template) `moreFields` to (preset) `moreFields`.
