/* eslint-disable no-console */
const schemaBuilder = require('@ideditor/schema-builder');

const nsiBrands = require('name-suggestion-index/dist/brands.json').brands;
const nsiWikidata = require('name-suggestion-index/dist/wikidata.json').wikidata;

schemaBuilder.build({
  inDirectory: 'data',
  outDirectory: 'dist',
  processPresets: addNsiPresets,
  taginfoProjectInfo: {
    name: 'iD Editor',
    description: 'Online editor for OSM data.',
    project_url: 'https://github.com/openstreetmap/iD',
    icon_url: 'https://cdn.jsdelivr.net/gh/openstreetmap/iD@release/dist/img/logo.png',
    contact_name: 'Quincy Morgan',
    contact_email: 'q@quincylvania.com'
  }
});

function addNsiPresets(presets) {
  Object.keys(nsiBrands).forEach(kvnd => {
    const suggestion = nsiBrands[kvnd];
    const qid = suggestion.tags['brand:wikidata'];
    if (!qid || !/^Q\d+$/.test(qid)) return;   // wikidata tag missing or looks wrong..

    const parts = kvnd.split('|', 2);
    const kv = parts[0];
    const name = parts[1].replace('~', ' ');

    let presetID, preset;

    // sometimes we can choose a more specific preset then key/value..
    if (suggestion.tags.cuisine) {
      // cuisine can contain multiple values, so try them all in order
      let cuisines = suggestion.tags.cuisine.split(';');
      for (let i = 0; i < cuisines.length; i++) {
        presetID = kv + '/' + cuisines[i].trim();
        preset = presets[presetID];
        if (preset) break;  // we matched one
      }

    } else if (suggestion.tags.vending) {
      if (suggestion.tags.vending === 'parcel_pickup;parcel_mail_in') {
        presetID = kv + '/parcel_pickup_dropoff';
      } else {
        presetID = kv + '/' + suggestion.tags.vending;
      }
      preset = presets[presetID];
    }

    // A few exceptions where the NSI tagging doesn't exactly match iD tagging..
    if (kv === 'healthcare/clinic') {
      presetID = 'amenity/clinic';
      preset = presets[presetID];
    } else if (kv === 'leisure/tanning_salon') {
      presetID = 'shop/beauty/tanning';
      preset = presets[presetID];
    }

    // fallback to key/value
    if (!preset) {
      presetID = kv;
      preset = presets[presetID];
    }

    // still no match?
    if (!preset) {
      console.log(`Warning:  No preset "${presetID}" for name-suggestion "${name}"`);
      return;
    }

    let suggestionID = presetID + '/' + name.replace('/', '');

    let tags = { 'brand:wikidata': qid };
    for (let k in preset.tags) {
      // prioritize suggestion tags over preset tags (for `vending`,`cuisine`, etc)
      tags[k] = suggestion.tags[k] || preset.tags[k];
    }

    // Prefer a wiki commons logo sometimes.. #6361
    const preferCommons = {
      Q177054: true,    // Burger King
      Q524757: true,    // KFC
      Q779845: true,    // CBA
      Q1205312: true,   // In-N-Out
      Q10443115: true   // Carlings
    };

    let logoURL;
    let logoURLs = nsiWikidata[qid] && nsiWikidata[qid].logos;
    if (logoURLs) {
      if (logoURLs.wikidata && preferCommons[qid]) {
        logoURL = logoURLs.wikidata;
      } else if (logoURLs.facebook) {
        logoURL = logoURLs.facebook;
      } else if (logoURLs.twitter) {
        logoURL = logoURLs.twitter;
      } else {
        logoURL = logoURLs.wikidata;
      }
    }

    presets[suggestionID] = {
      name: name,
      icon: preset.icon,
      imageURL: logoURL,
      geometry: preset.geometry,
      tags: tags,
      addTags: suggestion.tags,
      reference: preset.reference,
      countryCodes: suggestion.countryCodes,
      terms: (suggestion.matchNames || []),
      matchScore: 2,
      suggestion: true
    };
  });
}
