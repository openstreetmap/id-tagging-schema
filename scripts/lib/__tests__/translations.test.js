import { describe, expect, it } from 'vitest';
import { expandTStrings } from '../translations.ts';

describe('expandTStrings', () => {
  it('splits preset terms by regular comma, arabic comma, and full-width comma', () => {
    const tstrings = {
      presets: {
        'building/point': {
          terms: '建筑物，屋宇,房屋،建筑'
        }
      },
      fields: {},
      categories: {}
    };
    expandTStrings('zh-CN', tstrings);
    expect(tstrings.presets['building/point'].terms).toEqual([
      '建筑物',
      '屋宇',
      '房屋',
      '建筑'
    ]);
  });

  it('splits field terms by regular comma, arabic comma, and full-width comma', () => {
    const tstrings = {
      presets: {},
      fields: {
        tactile_paving: {
          terms: '盲道，导盲砖,导盲条،盲道砖'
        }
      },
      categories: {}
    };
    expandTStrings('zh-CN', tstrings);
    expect(tstrings.fields.tactile_paving.terms).toEqual([
      '盲道',
      '导盲砖',
      '导盲条',
      '盲道砖'
    ]);
  });

  it('does not split field terms by ideographic comma', () => {
    const tstrings = {
      presets: {},
      fields: {
        tactile_paving: {
          terms: '盲道、导盲砖，盲道砖'
        }
      },
      categories: {}
    };

    expandTStrings('zh-CN', tstrings);

    expect(tstrings.fields.tactile_paving.terms).toEqual([
      '盲道、导盲砖',
      '盲道砖'
    ]);
  });
});

