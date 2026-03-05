import { promises as fs } from 'node:fs';
import { join } from 'node:path';
import unitPreference from 'cldr-core/supplemental/unitPreferenceData.json' with { type: 'json' };
import unitTranslations from 'cldr-units-full/main/en/units.json' with { type: 'json' };

// this file auto-generates the files in schemas/auto-generated/* based on npm dependencies

type Dimension = keyof typeof unitPreference.supplemental.unitPreferenceData;

const dimension = {
  $schema: 'http://json-schema.org/draft-07/schema#',
  $id: 'https://github.com/openstreetmap/id-tagging-schema/raw/main/schemas/auto-generated/dimension.json',

  enum: [
    ...new Set([
      ...Object.keys(unitPreference.supplemental.unitPreferenceData),
      // not all dimensions are defined in unitPreferenceData (such as  frequency
      // in Hertz). Therefore, we need to check the full list too.
      ...Object.keys(unitTranslations.main.en.units.long)
        .filter((item) => item.includes('-') && !item.startsWith('10p')) // exclude metric prefixes
        .map((item) => item.split('-')[0]),
    ]),
  ] as Dimension[],
};

const usage = {
  $schema: 'http://json-schema.org/draft-07/schema#',
  $id: 'https://github.com/openstreetmap/id-tagging-schema/raw/main/schemas/auto-generated/usage.json',

  allOf: dimension.enum.map((dimension) => {
    const value = unitPreference.supplemental.unitPreferenceData[dimension] || {
      default: {},
    };
    return {
      if: { properties: { dimension: { const: dimension } } },
      then: { properties: { usage: { enum: Object.keys(value) } } },
    };
  }),
};

const unitTypes = {
  $schema: 'http://json-schema.org/draft-07/schema#',
  $id: 'https://github.com/openstreetmap/id-tagging-schema/raw/main/schemas/auto-generated/unit-types.json',

  $defs: Object.fromEntries(
    dimension.enum.map((dimension) => {
      const defaults =
        unitPreference.supplemental.unitPreferenceData[dimension] || {};

      const units = new Set<string>(
        // units.json does not include 'Mixed Units', so we need to add some of
        // the 'Mixed Units' (only the ones which are used):
        Object.values(defaults)
          .flatMap(Object.values)
          .flat()
          .map((item) => item.unit),
      );

      // also add all standard units:
      for (const key in unitTranslations.main.en.units.long) {
        if (key.startsWith(`${dimension}-`)) {
          const unit = key.split('-').slice(1).join('-');
          units.add(unit);
        }
      }

      return [dimension, { enum: [...units] }];
    }),
  ),

  allOf: dimension.enum.map((dimension) => {
    return {
      if: { properties: { dimension: { const: dimension } } },
      then: {
        properties: {
          units: { items: { $ref: `#/$defs/${dimension}` } },
          impliedUnit: { $ref: `#/$defs/${dimension}` },
        },
      },
    };
  }),
};

const units = {
  $schema: 'http://json-schema.org/draft-07/schema#',
  $id: 'https://github.com/openstreetmap/id-tagging-schema/raw/main/schemas/auto-generated/units.json',
  title: 'Units of measurement',
  description:
    'Defines the suffix used in the OSM tag value for every unit of measurement. If there are multiple values, the first one will be preferred.',
  type: 'object',
  properties: Object.fromEntries(
    Object.entries(unitTypes.$defs).map(([dimension, value]) => {
      return [
        dimension,
        {
          type: 'object',
          properties: Object.fromEntries(
            value.enum.map((unit) => {
              return [
                unit,
                {
                  type: 'array',
                  minItems: 1,
                  uniqueItems: true,
                  items: { type: 'string' },
                },
              ];
            }),
          ),
          additionalProperties: false,
          minProperties: 1,
        },
      ];
    }),
  ),
  additionalProperties: false,
};

const files = { dimension, usage, 'unit-types': unitTypes, units };

const generatedFolder = join(import.meta.dirname, '../schemas/auto-generated');
await fs.mkdir(generatedFolder, { recursive: true });

for (const [fileName, fileContent] of Object.entries(files)) {
  await fs.writeFile(
    join(generatedFolder, `${fileName}.json`),
    JSON.stringify(fileContent, null, 4),
  );
}
