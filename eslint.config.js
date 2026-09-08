// @ts-check
import js from '@eslint/js';
import json from '@eslint/json';
import { defineConfig } from 'eslint/config';
import tseslint from 'typescript-eslint';
import vitest from '@vitest/eslint-plugin';
import prettier from 'eslint-plugin-prettier';
import local from './scripts/lib/validate/index.ts';

export default defineConfig(
  {
    ignores: ['.coverage', 'dist/*']
  },
  {
    files: ['**/*.js', '**/*.ts'],
    extends: [js.configs.recommended, tseslint.configs.recommended],
    rules: {
        'prefer-const': 'off',
    }
  },
  {
    files: ['tests/**/*.js', 'tests/**/*.ts'],
    plugins: { vitest },
    rules: {
      ...vitest.configs.recommended.rules,
    },
    languageOptions: {
      globals: vitest.environments.env.globals,
    },
  },
  {
    files: ['**/*.json'],
    ignores: [
      'package.json',
      'package-lock.json',
      'data/deprecated.json',
      'data/discarded.json',
    ],
    language: 'json/json',
    plugins: { json, prettier, local },
    rules: {
      'prettier/prettier': 'error',
      'json/no-duplicate-keys': 'error',
      'local/terms-lowercase-sorted': 'error',
    },
  }
);
