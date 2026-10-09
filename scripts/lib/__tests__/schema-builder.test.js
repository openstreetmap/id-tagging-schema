import fs from 'fs';
import { afterAll, beforeEach, describe, expect, it } from 'vitest';
import schemaBuilder from '../index.js';

const _workspace = 'workspace';

const taginfoProjectInfo = {
  name: 'IntrepiD',
  description: 'iD editor, but adventurous.',
  project_url: 'https://example.com/IntrepiD',
  contact_name: 'J. Maintainer',
  contact_email: 'maintainer@example.com',
};

afterAll(async () => {
  await fs.promises.rm(_workspace, { force: true, recursive: true });
});

beforeEach(async () => {
  await fs.promises.rm(_workspace, { force: true, recursive: true });
  await fs.promises.mkdir(_workspace, { recursive: true });
});

function writeSourceData(data) {
  for (let key in data) {
    let path = '';
    let pathComponents = key.split('/');
    pathComponents.pop();
    while (pathComponents.length) {
      path += '/' + pathComponents.shift();
      if (!fs.existsSync(_workspace + path)) {
        fs.mkdirSync(_workspace + path);
      }
    }
    fs.writeFileSync(_workspace + '/' + key, JSON.stringify(data[key], null, 4));
  }
}


describe('schema-builder', () => {
  it('accesses modules without error', () => {
    expect(schemaBuilder && schemaBuilder.buildDist).not.toBeUndefined();
    expect(schemaBuilder && schemaBuilder.buildDev).not.toBeUndefined();
  });

  it('runs buildDev', () => {
    writeSourceData({
      'data/presets/natural.json': {
        tags: {
          natural: '*'
        },
        geometry: ['point', 'vertex', 'line', 'area', 'relation'],
        name: 'Natural Feature'
      }
    });
    schemaBuilder.buildDev({
      inDirectory: _workspace + '/data',
      interimDirectory: _workspace + '/interim'
    });
    expect(fs.existsSync(_workspace + '/interim/source_strings.yaml')).toBe(true);
    expect(fs.existsSync(_workspace + '/dist')).toBe(false);
  });

  it('runs buildDist', async () => {
    writeSourceData({
      'data/preset_categories/water.json': {
        icon: 'temaki-water',
        name: 'Water Features',
        members: [
          'natural/water',
          'natural/water/pond'
        ]
      },
      'data/fields/natural.json': {
        key: 'natural',
        type: 'typeCombo',
        label: 'Natural Type',
        placeholder: 'water, tree, wood…'
      },
      'data/fields/description.json': {
        key: 'description',
        type: 'textarea',
        label: 'Description',
        universal: true
      },
      'data/fields/water_quality.json': {
        key: 'water_quality',
        type: 'combo',
        label: 'Water Quality',
        strings: {
          options: {
            terrible: 'Terrible',
            bad: 'Bad',
            okay: 'Okay',
            good: 'Good',
            excellent: 'Excellent',
            'super fantastic': 'Super Fantastic'
          }
        },
        terms: [
          'water health'
        ]
      },
      'data/fields/water_quality_multi.json': {
        key: 'water_quality',
        type: 'semiCombo',
        label: '{water_quality}',
        stringsCrossReference: '{water_quality}'
      },
      'data/fields/swimming.json': {
        key: 'swimming',
        type: 'combo',
        label: 'Swimming',
        strings: {
          options: {
            yes: 'Yes',
            no: 'No',
            seasonal: 'Seasonal'
          }
        },
        autoSuggestions: false
      },
      'data/fields/salt.json': {
        key: 'salt',
        type: 'combo',
        label: 'Salt',
        strings: {
          options: {
            yes: {
              title: 'Yes',
              description: 'Notable salinity'
            },
            no: {
              title: 'No',
              description: 'No notable salinity'
            }
          }
        },
        terms: [
          'nitrates', 'saline', 'salinity'
        ]
      },
      'data/fields/color_water.json': {
        key: 'color',
        type: 'colour',
        label: 'Colors',
        options: [
          'azure',
          'teal',
          'sky',
          'aquamarine',
          'pearl',
          'turquoise',
          'mud'
        ],
        autoSuggestions: false
      },
      'data/presets/_natural.json': {
        fields: [
          'natural'
        ],
        tags: {
          natural: '*'
        },
        geometry: ['point', 'vertex', 'line', 'area', 'relation'],
        searchable: false,
        name: 'Natural Feature'
      },
      'data/presets/natural/water.json': {
        fields: [
          'water_quality',
          'color_water'
        ],
        moreFields: [
          'salt',
          'swimming'
        ],
        tags: {
          natural: 'water'
        },
        geometry: ['point', 'area'],
        terms: ['lake', 'pond', 'pool', 'reservoir', 'water', 'water body'],
        name: 'Water',
        aliases: [
          'Water',
          'Water Body'
        ]
      },
      'data/presets/natural/water/pond.json': {
        tags: {
          natural: 'water',
          water: 'pond'
        },
        geometry: ['point', 'area'],
        terms: ['frogs', 'guppies', 'puddle', 'vernal pool'],
        name: 'Pond',
        aliases: ['Vernal Pool', 'Puddle']
      },
      'data/presets/natural/water/lake.json': {
        fields: [
          'water_quality_multi',
          'color_water'
        ],
        tags: {
          natural: 'water',
          water: 'lake'
        },
        geometry: ['point', 'area'],
        name: 'Lake'
      }
    });
    await schemaBuilder.buildDist({
      inDirectory: _workspace + '/data',
      interimDirectory: _workspace + '/interim',
      outDirectory: _workspace + '/dist',
      taginfoProjectInfo,
      listReusedIcons: true
    });
    expect(fs.existsSync(_workspace + '/interim/source_strings.yaml')).toBe(true);
    expect(fs.existsSync(_workspace + '/dist')).toBe(true);
  });

  describe('preset icon references {presets/…}', () => {
    function minimalPreset(overrides) {
      return Object.assign(
        {
          name: 'Test preset',
          geometry: ['point'],
          tags: { test: 'x' },
          terms: ['a'],
        },
        overrides,
      );
    }

    it('T1 resolves preset icon from {presets/id}', async () => {
      writeSourceData({
        'data/presets/t_icon_base.json': minimalPreset({
          tags: { ir: 'base' },
          icon: 'fas-foo',
        }),
        'data/presets/t_icon_child.json': minimalPreset({
          tags: { ir: 'child' },
          icon: '{presets/t_icon_base}',
        }),
      });
      await schemaBuilder.buildDist({
        inDirectory: _workspace + '/data',
        interimDirectory: _workspace + '/interim',
        outDirectory: _workspace + '/dist',
        taginfoProjectInfo,
      });
      const presets = JSON.parse(
        fs.readFileSync(_workspace + '/dist/presets.json', 'utf8'),
      );
      expect(presets.t_icon_child.icon).toBe('fas-foo');
    });

    it('T2 resolves chained preset icon references', async () => {
      writeSourceData({
        'data/presets/t_chain_a.json': minimalPreset({
          tags: { c: 'a' },
          icon: 'maki-x',
        }),
        'data/presets/t_chain_b.json': minimalPreset({
          tags: { c: 'b' },
          icon: '{presets/t_chain_a}',
        }),
        'data/presets/t_chain_c.json': minimalPreset({
          tags: { c: 'c' },
          icon: '{presets/t_chain_b}',
        }),
      });
      await schemaBuilder.buildDist({
        inDirectory: _workspace + '/data',
        interimDirectory: _workspace + '/interim',
        outDirectory: _workspace + '/dist',
        taginfoProjectInfo,
      });
      const presets = JSON.parse(
        fs.readFileSync(_workspace + '/dist/presets.json', 'utf8'),
      );
      expect(presets.t_chain_c.icon).toBe('maki-x');
    });

    it('T3 resolves value from {presets/id} for field icons', async () => {
      writeSourceData({
        'data/presets/t_fld_base.json': minimalPreset({
          tags: { f: 'b' },
          icon: 'iD-bus',
        }),
        'data/fields/t_fld_combo.json': {
          key: 't_fld',
          type: 'combo',
          label: 'T fld',
          universal: true,
          strings: { options: { yes: 'Yes' } },
          icons: { yes: '{presets/t_fld_base}' },
          terms: ['z'],
        },
      });
      await schemaBuilder.buildDist({
        inDirectory: _workspace + '/data',
        interimDirectory: _workspace + '/interim',
        outDirectory: _workspace + '/dist',
        taginfoProjectInfo,
      });
      const fields = JSON.parse(
        fs.readFileSync(_workspace + '/dist/fields.json', 'utf8'),
      );
      expect(fields.t_fld_combo.icons.yes).toBe('iD-bus');
    });

    it('T4 iconsCrossReference works if referenced icons contain icon references', async () => {
      writeSourceData({
        'data/presets/t_xr_base.json': minimalPreset({
          tags: { xr: 'b' },
          icon: 'maki-circle',
        }),
        'data/fields/t_xr_b.json': {
          key: 'xr_b',
          type: 'combo',
          label: 'XR b',
          universal: true,
          strings: { options: { yes: 'Yes' } },
          icons: { yes: '{presets/t_xr_base}' },
          terms: ['y'],
        },
        'data/fields/t_xr_a.json': {
          key: 'xr_a',
          type: 'combo',
          label: 'XR a',
          universal: true,
          strings: { options: { yes: 'Yes' } },
          iconsCrossReference: '{t_xr_b}',
          terms: ['y'],
        },
      });
      await schemaBuilder.buildDist({
        inDirectory: _workspace + '/data',
        interimDirectory: _workspace + '/interim',
        outDirectory: _workspace + '/dist',
        taginfoProjectInfo,
      });
      const fields = JSON.parse(
        fs.readFileSync(_workspace + '/dist/fields.json', 'utf8'),
      );
      expect(fields.t_xr_a.icons.yes).toBe('maki-circle');
      expect(fields.t_xr_b.icons.yes).toBe('maki-circle');
    });

    it('T5 rejects {fields/…} in preset icon', async () => {
      writeSourceData({
        'data/presets/t_bad_fields.json': minimalPreset({
          tags: { bad: 'f' },
          icon: '{fields/nope}',
        }),
      });
      await expect(
        schemaBuilder.buildDev({
          inDirectory: _workspace + '/data',
          interimDirectory: _workspace + '/interim',
        }),
      ).rejects.toThrow(/fields/);
    });

    it('T6 rejects unknown prefix in icon reference', async () => {
      writeSourceData({
        'data/presets/t_bad_type.json': minimalPreset({
          tags: { bad: 't' },
          icon: '{unknown/foo}',
        }),
      });
      await expect(
        schemaBuilder.buildDev({
          inDirectory: _workspace + '/data',
          interimDirectory: _workspace + '/interim',
        }),
      ).rejects.toThrow(/presets/);
    });

    it('T7 rejects cyclic preset icon references', async () => {
      writeSourceData({
        'data/presets/t_cyc_a.json': minimalPreset({
          tags: { cy: 'a' },
          icon: '{presets/t_cyc_b}',
        }),
        'data/presets/t_cyc_b.json': minimalPreset({
          tags: { cy: 'b' },
          icon: '{presets/t_cyc_a}',
        }),
      });
      await expect(
        schemaBuilder.buildDev({
          inDirectory: _workspace + '/data',
          interimDirectory: _workspace + '/interim',
        }),
      ).rejects.toThrow(/Cycle/);
    });

    it('T8 rejects missing preset in icon reference', async () => {
      writeSourceData({
        'data/presets/t_miss.json': minimalPreset({
          tags: { m: '1' },
          icon: '{presets/does/not/exist}',
        }),
      });
      await expect(
        schemaBuilder.buildDev({
          inDirectory: _workspace + '/data',
          interimDirectory: _workspace + '/interim',
        }),
      ).rejects.toThrow(/no preset/);
    });

    it('T9 rejects an icon reference without the presets/ prefix', async () => {
      writeSourceData({
        'data/presets/t_bare.json': minimalPreset({
          tags: { bare: '1' },
          icon: '{t_bare_other}',
        }),
      });
      await expect(
        schemaBuilder.buildDev({
          inDirectory: _workspace + '/data',
          interimDirectory: _workspace + '/interim',
        }),
      ).rejects.toThrow(/must use/);
    });

    it('T10 rejects an icon reference to a preset without an icon', async () => {
      writeSourceData({
        'data/presets/t_noicon_base.json': minimalPreset({
          tags: { ni: 'base' },
        }),
        'data/presets/t_noicon_child.json': minimalPreset({
          tags: { ni: 'child' },
          icon: '{presets/t_noicon_base}',
        }),
      });
      await expect(
        schemaBuilder.buildDev({
          inDirectory: _workspace + '/data',
          interimDirectory: _workspace + '/interim',
        }),
      ).rejects.toThrow(/has no/);
    });

    it('T11 buildDev interim icons.json lists only resolved icon ids', async () => {
      writeSourceData({
        'data/presets/t_icn_base.json': minimalPreset({
          tags: { ic: 'b' },
          icon: 'maki-parking',
        }),
        'data/presets/t_icn_child.json': minimalPreset({
          tags: { ic: 'c' },
          icon: '{presets/t_icn_base}',
        }),
      });
      await schemaBuilder.buildDev({
        inDirectory: _workspace + '/data',
        interimDirectory: _workspace + '/interim',
      });
      const icons = JSON.parse(
        fs.readFileSync(_workspace + '/interim/icons.json', 'utf8'),
      );
      expect(icons).toContain('maki-parking');
      expect(JSON.stringify(icons)).not.toMatch(/\{presets\//);
    });
  });
});
