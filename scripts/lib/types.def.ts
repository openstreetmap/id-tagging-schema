import type { Field, Preset } from '../../dist';

export type * from '../../dist';


export interface AllPresets {
    [presetId: string]: Preset;
}

export interface AllFields {
    [fieldId: string]: Field;
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
