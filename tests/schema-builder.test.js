import fs from 'fs';
import shell from 'shelljs';

import schemaBuilder from '../lib/index.js';

const _workspace = 'tests/workspace';

beforeAll(() => {
  if (!fs.existsSync(_workspace)) {
    fs.mkdirSync(_workspace);
  }
});

afterAll(() => {
  shell.rm('-rf', [
    _workspace
  ]);
});

beforeEach(() => {
  shell.rm('-rf', [
    _workspace + '/*'
  ]);
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
    expect(schemaBuilder && schemaBuilder.validate).not.toBeUndefined();
    expect(schemaBuilder && schemaBuilder.fetchTranslations).not.toBeUndefined();
  });

  it('runs validate', () => {
    writeSourceData({
      'data/presets/natural.json': {
        tags: {
          natural: '*'
        },
        geometry: ['point', 'vertex', 'line', 'area', 'relation'],
        name: 'Natural Feature'
      }
    });
    schemaBuilder.validate({
      inDirectory: _workspace + '/data'
    });
    expect(fs.existsSync(_workspace + '/interim')).toBe(false);
    expect(fs.existsSync(_workspace + '/dist')).toBe(false);
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

  it('runs buildDist', (done) => {
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
    schemaBuilder.buildDist({
      inDirectory: _workspace + '/data',
      interimDirectory: _workspace + '/interim',
      outDirectory: _workspace + '/dist',
      taginfoProjectInfo: {
        name: 'IntrepiD',
        description: 'iD editor, but adventurous.',
        project_url: 'https://example.com/IntrepiD',
        contact_name: 'J. Maintainer',
        contact_email: 'maintainer@example.com'
      },
      listReusedIcons: true
    }).then(function() {
      expect(fs.existsSync(_workspace + '/interim/source_strings.yaml')).toBe(true);
      expect(fs.existsSync(_workspace + '/dist')).toBe(true);
      done();
    });
  });
});
