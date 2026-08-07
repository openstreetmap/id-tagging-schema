import type * as Taginfo from 'taginfo-projects';
import type { Field, Preset, PresetCategory } from '../../dist';

export type * from '../../dist';

/**
 * this library doesn't follow the type-definitions strictly, it uses `string[]` instead
 * of `string` for the description field.
 */
export type TaginfoTag = Taginfo.Tag & { _description?: string[] };
export type TaginfoSchema = Omit<Taginfo.Schema, 'tags'> & { tags: TaginfoTag[] }


export interface AllPresets {
    [presetId: string]: Preset;
}

export interface AllFields {
    [fieldId: string]: Field;
}

export interface AllCategories {
    [categoryId: string]: PresetCategory;
}

export interface Options {
    inDirectory?: string;
    interimDirectory?: string;
    outDirectory: string;
    sourceLocale: string;
    taginfoProjectInfo?: Taginfo.Project,
    processCategories?: null | ((categories: AllCategories) => void);
    processFields?: null | ((fields: AllFields) => void);
    processPresets?: null | ((presets: AllPresets) => void);
    listReusedIcons?: boolean;
    translOrgId?: string;
    translProjectId?: string;
    translResourceIds?: string[];
    translReviewedOnly?: false | string[];
}

export interface References {
    fields: {
        [fieldId: string]: {
            labelAndTerms?: string;
            placeholder?: string;
            options?: {
                [prop: string]: {
                    [optionKey: string]: string;
                };
            };
            iconsCrossReference?: string;
            stringsCrossReference?: string;
        };
    };
    presets: {
        [presetId: string]: {
            relation?: string;
            nameTermsAliases?: string;
        };
    };
}

export interface TStrings {
    presets: {
        [presetId: string]: {
            '#name'?: string;
            name?: string;
            '#terms'?: string;
            terms?: string | string[];
            '#aliases'?: string;
            aliases?: string | string[];
            relation?: {
                role_labels:  {
                    [role: string]: string;
                };
            };
        };
    };
    fields: {
        [fieldId: string]: {
            '#label'?: string;
            label?: string;
            '#terms'?: string;
            terms?: string | string[];
            '#placeholder'?: string;
            placeholder?: string;
        } & {
            [otherProp: string]: {
                [option: string]: string | {
                    '#title'?: string;
                    title: string;
                    '#description'?: string;
                    description: string;
                };
            };
        };
    };
    categories: {
        [categoryId: string]: {
            name: string;
        };
    };
}

export interface ExternalTranslations {
    units: {
        [dimension: string]: {
            [unit: string]: {
                [type: string]: string
            };
        };
    };
}

export interface SourceStrings {
    [locale: string]: {
        /** group is always "presets" */
        [group: string]: TStrings
     }
}

export interface ResourceInfo {
    relationships: {
        language: {
            data: {
                id: string;
            }
        }
    };
    attributes: {
        [type: string]: number;
    };
}
