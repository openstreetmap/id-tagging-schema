/* Downloads the latest translations from Transifex */
import fs from 'fs';
import fetch from 'node-fetch';
import YAML from 'js-yaml';
import { transifexApi } from '@transifex/api';

/**
 * Sorts the keys of an object alphabetically
 * @template {object} T @param {T} original @returns {T}
 */
export function sortObject(original) {
  const sorted = {};
  for (const k of Object.keys(original).sort()) {
    sorted[k] = original[k];
  }
  return sorted;
}

function fetchTranslations(options) {

  // Transifex doesn't allow anonymous downloading
  /* eslint-disable no-process-env */
  if (process.env.transifex_password) {
    // Deployment scripts may prefer environment variables
    transifexApi.setup({ auth: process.env.transifex_password });
  } else {
    // Credentials can be stored in transifex.auth as a json object. This file is gitignored.
    // You must use an API token for authentication: You can generate one at https://www.transifex.com/user/settings/api/.
    // {
    //   "password": "<api_key>"
    // }
    transifexApi.setup({ auth: JSON.parse(fs.readFileSync('./transifex.auth', 'utf8')).password });
  }
  /* eslint-enable no-process-env */

  if (!options) options = {};
  options = Object.assign({
    translOrgId: '',
    translProjectId: '',
    translResourceIds: ['presets'],
    translReviewedOnly: false,
    outDirectory: 'dist',
    sourceLocale: 'en'
  }, options);

  const outDir = `./${options.outDirectory}/translations`;

  if (!fs.existsSync(outDir)) {
    fs.mkdirSync(outDir);
  }

  const translResourceIds = options.translResourceIds;
  return new Promise(function(resolve) {
      asyncMap(translResourceIds, getResourceInfo, function(err, results) {
        gotResourceInfo(err, results);
        asyncMap(translResourceIds, getResource, function(err, results) {
            gotResource(err, results);
            resolve();
        });
      });
  });


  async function getResourceInfo(resourceId, callback) {
    try {
      const result = [];
      for await (const stat of transifexApi.ResourceLanguageStats.filter({
        project: `o:${options.translOrgId}:p:${options.translProjectId}`,
        resource: `o:${options.translOrgId}:p:${options.translProjectId}:r:${resourceId}`
      }).all()) {
        result.push(stat);
      }
      process.stdout.write(`got resource language stats collection for ${resourceId}\n`);
      callback(null, result);
    } catch (err) {
      process.stderr.write(`error while getting resource language stats collection for ${resourceId}\n`, err);
      callback(err);
    }
  }

  function gotResourceInfo(err, results) {
    if (err) return process.stderr.write(err + '\n');

    let coverageByLocaleCode = {};
    results.forEach(function(info) {
      info.forEach(stat => {
        let code = stat.relationships.language.data.id.substr(2).replace(/_/g, '-');
        let type = 'translated_strings';
        if (options.translReviewedOnly && (
          !Array.isArray(options.translReviewedOnly)
          || options.translReviewedOnly.indexOf(code) !== -1)) {
          type = 'reviewed_strings';
        }
        let coveragePart = (stat.attributes[type] /  stat.attributes.total_strings) / results.length;

        if (coverageByLocaleCode[code] === undefined) coverageByLocaleCode[code] = 0;
        coverageByLocaleCode[code] += coveragePart;
      });
    });
    let dataLocales = {};
    // explicitly list the source locale as having 100% coverage
    dataLocales[options.sourceLocale] = { pct: 1 };

    for (let code in coverageByLocaleCode) {
      let coverage = coverageByLocaleCode[code];
      // we don't need high precision here, but we need to know if it's exactly 100% or not
      coverage = Math.floor(coverage * 100) / 100;
      dataLocales[code] = {
        pct: coverage
      };
    }

    const sortedLocales = sortObject(dataLocales);
    fs.writeFileSync(`${outDir}/index.json`, JSON.stringify(sortedLocales));
    fs.writeFileSync(`${outDir}/index.min.json`, JSON.stringify(sortedLocales, null, 4));
  }

  function getResource(resourceId, callback) {
    getLanguages((err, codes) => {
      if (err) return callback(err);

      asyncMap(codes, getLanguage(resourceId), (err, results) => {
        if (err) return callback(err);

        let locale = {};
        results.forEach((result, i) => {
          let presets = (result.presets && result.presets.presets) || {};
          for (const key of Object.keys(presets)) {
            let preset = presets[key];

            if (preset.name) {
                let names = preset.name.split('\n').map(s => s.trim()).filter(Boolean);
                preset.name = names[0];
                if (names.length > 1) {
                    preset.aliases = names.slice(1);
                }
            }

            if (!preset.terms) continue;

            // remove duplicates
            preset.terms = Array.from(new Set(
                // remove translation message if it was included somehow
                preset.terms.replace(/<.*>/, '')
                  // convert to an array
                  .split(',')
                  // make everything lowercase and remove whitespace
                  .map(s => s.toLowerCase().trim())
                  // remove empty strings
                  .filter(Boolean)
              ));

            if (!preset.terms.length) {
              // no need to include empty terms
              delete preset.terms;
              if (!Object.keys(preset).length) {
                delete presets[key];
              }
            }
          }

          let fields = (result.presets && result.presets.fields) || {};
          for (const key of Object.keys(fields)) {
            let field = fields[key];
            if (!field.terms) continue;

            // remove duplicates
            field.terms = Array.from(new Set(
              // remove translation message if it was included somehow
              field.terms.replace(/\[.*\]/, '')
              // convert to an array
              .split(/[,،]/)
              // make everything lowercase and remove whitespace
              .map(s => s.toLowerCase().trim())
              // remove empty strings
              .filter(Boolean)
            ));

            if (!field.terms.length) {
              // no need to include empty terms
              delete field.terms;
              if (!Object.keys(field).length) {
                delete fields[key];
              }
            }
          }

          locale[codes[i]] = result;
        });

        callback(null, locale);
      });
    });
  }


  function gotResource(err, results) {
    if (err) return process.stderr.write(err + '\n');

    // merge in strings fetched from transifex
    let allStrings = {};
    results.forEach(resourceStrings => {
      Object.keys(resourceStrings).forEach(code => {
        if (!allStrings[code]) allStrings[code] = {};
        let source = resourceStrings[code];
        let target = allStrings[code];
        Object.keys(source).forEach(k => target[k] = source[k]);
      });
    });

    for (let code in allStrings) {
      let obj = {};
      obj[code] = allStrings[code] || {};
      fs.writeFileSync(`${outDir}/${code}.json`, JSON.stringify(obj, null, 4));
      fs.writeFileSync(`${outDir}/${code}.min.json`, JSON.stringify(obj));
    }
  }

  function getLanguage(resourceId) {
    return async (code, callback) => {
      try {
        code = code.replace(/-/g, '_');
        let reviewedOnly = options.translReviewedOnly && (
          !Array.isArray(options.translReviewedOnly)
          || options.translReviewedOnly.indexOf(code) !== -1);
        const url = await transifexApi.ResourceTranslationsAsyncDownload.download({
          resource: {data:{type:'resources', id:`o:${options.translOrgId}:p:${options.translProjectId}:r:${resourceId}`}},
          language: {data:{type:'languages', id:`l:${code}`}},
          // fetch only reviewed strings for some languages
          mode: reviewedOnly ? 'reviewed' : 'default'
        });
        const data = await fetch(url).then(d => d.text());
        process.stdout.write(`got translations for ${resourceId}, language ${code}\n`);
        callback(null, YAML.load(data)[code]);
      } catch (err) {
        process.stderr.write(`error while getting translations for ${resourceId}, language ${code}\n`);
        callback(err);
      }
    };
  }


  async function getLanguages(callback) {
    try {
      const result = [];
      const project = await transifexApi.Project.get({
        organization: `o:${options.translOrgId}`,
        slug: options.translProjectId
      });
      const lngs = await project.fetch('languages');
      for await (const lng of lngs.all()) {
        if (lng.attributes.code === 'en') continue;
        result.push(lng.attributes.code.replace(/_/g, '-'));
      }
      process.stdout.write('got project languages\n');
      callback(null, result);
    } catch (err) {
      process.stderr.write('error while getting project languages\n');
      callback(err);
    }
  }
}


function asyncMap(inputs, func, callback) {
  let index = 0;
  let remaining = inputs.length;
  let results = [];
  let error;

  next();

  function next() {
    callFunc(index++);
    if (index < inputs.length) {
      setTimeout(next, 50);
    }
  }

  function callFunc(i) {
    let d = inputs[i];
    func(d, (err, data) => {
      if (err) error = err;
      results[i] = data;
      remaining--;
      if (!remaining && callback) callback(error, results);
    });
  }
}

export default fetchTranslations;
