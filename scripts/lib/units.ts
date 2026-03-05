import { createRequire } from 'node:module';
import type { ExternalTranslations, Units } from './types.def.ts';

const require = createRequire(import.meta.url);

type UnitsFile = typeof import('cldr-units-full/main/en/units.json');
type Locale = keyof UnitsFile['main'];
type UnitPlusDimension = keyof UnitsFile['main'][Locale]['units']['narrow'];

export function getExternalTranslations(locale: string, units: Units): ExternalTranslations {
  const language = locale.split('-')[0];


  let localeData: UnitsFile | undefined;
  let languageData: UnitsFile | undefined;
  try {
    localeData = require(`cldr-units-full/main/${locale}/units.json`);
  } catch {
    // ignore
  }
  try {
    languageData = require(`cldr-units-full/main/${language}/units.json`);
  } catch {
    // ignore
  }

  if (!localeData && !languageData) {
    console.warn(`No CLDR data for ${language}`);
  }

  const output: ExternalTranslations['units']  = {};

  for (const _dimension in units) {
    const dimension = _dimension as keyof Units;
    for (const unit in units[dimension]) {
      for (const type of ['long', 'narrow'] as const) {
        for (const source of [localeData, languageData]) {
          const definition = source
            ?.main
            ?.[locale as Locale]
            ?.units
            ?.[type]
            ?.[`${dimension}-${unit}` as UnitPlusDimension];

          if (definition && 'displayName' in definition) {
            output[dimension] ||= {};
            output[dimension][unit] ||= {};
            output[dimension][unit][type] ||= definition.displayName;
          }
        }
      }
    }
  }

  return { units: output };
}
