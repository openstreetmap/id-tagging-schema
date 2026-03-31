// Combined Data, Translation and Field Resolution Logic

export const ENDPOINT_PRESETS = 'https://raw.githubusercontent.com/openstreetmap/id-tagging-schema/main/dist/presets.json';
export const ENDPOINT_FIELDS = 'https://raw.githubusercontent.com/openstreetmap/id-tagging-schema/main/dist/fields.json';
export const ENDPOINT_CATEGORIES = 'https://raw.githubusercontent.com/openstreetmap/id-tagging-schema/main/dist/preset_categories.json';
export const ENDPOINT_DEFAULTS = 'https://raw.githubusercontent.com/openstreetmap/id-tagging-schema/main/dist/preset_defaults.json';
export const ENDPOINT_LANGS = 'https://raw.githubusercontent.com/openstreetmap/id-tagging-schema/main/dist/translations/';

export const globData = {
    presets: {},
    fields: {},
    categories: {},
    defaults: {},
    locales: {}
};

let currentLocale = localStorage.getItem('explorerLocale') || navigator.language.split('-')[0] || 'en';

export const getLocale = () => currentLocale;
export const setLocale = (l) => { currentLocale = l; };

export async function initDataLoad(locale) {
    const promises = [
        fetch(ENDPOINT_PRESETS),
        fetch(ENDPOINT_FIELDS),
        fetch(ENDPOINT_CATEGORIES),
        fetch(ENDPOINT_DEFAULTS)
    ];

    if (locale !== 'en') {
        promises.push(fetch(`${ENDPOINT_LANGS}${locale}.json`).catch(() => null));
    }

    const res = await Promise.all(promises);

    globData.presets = await res[0].json();
    globData.fields = await res[1].json();
    globData.categories = await res[2].json();
    globData.defaults = await res[3].json();

    if (locale !== 'en' && res[4] && res[4].ok) {
        const langData = await res[4].json();
        globData.locales[locale] = langData[locale] ? langData[locale].presets : {};
    } else {
        globData.locales[locale] = {};
    }
}

export async function fetchLocaleDictionary(locale) {
    try {
        const req = await fetch(`${ENDPOINT_LANGS}${locale}.json`);
        if (req.ok) {
            const parsed = await req.json();
            globData.locales[locale] = parsed[locale] ? parsed[locale].presets : {};
        } else {
            globData.locales[locale] = {};
        }
    } catch(e) {
        globData.locales[locale] = {};
    }
}

export function localize(keyPath, defaultVal) {
    if (currentLocale === 'en' || !globData.locales[currentLocale]) return defaultVal;
    
    const parts = keyPath.split('.');
    let node = globData.locales[currentLocale];
    for (const p of parts) {
        if (!node || typeof node !== 'object') return defaultVal;
        node = node[p];
    }
    return node !== undefined ? node : defaultVal;
}

export function parseSubLocales(text) {
    if (!text) return text;
    return text.replace(/\{([^}]+)\}/g, (_, fieldKey) => {
        const f = globData.fields[fieldKey];
        const def = f ? (f.label || f.name || fieldKey) : fieldKey;
        return localize(`fields.${fieldKey}.label`, def);
    });
}

// Field Resolver logic
export const ORIGIN_PRESET = 'preset';
export const ORIGIN_TAG = 'tag';
export const ORIGIN_GEOM = 'geometry';
export const ORIGIN_GROUP = 'group';

function getBaselineRefs(item) {
    const outs = { geom: [], tag: [] };
    const shapes = item.geometry || [];

    shapes.forEach(s => {
        const shapeDefaults = globData.defaults[s] || [];
        shapeDefaults.forEach(pId => {
            const p = globData.presets[pId];
            if (!p) return;

            if (p.tags) {
                let isMatch = true;
                for (const [k, v] of Object.entries(p.tags)) {
                    if (!item.tags || !item.tags[k]) { isMatch = false; break; }
                    if (v !== '*' && item.tags[k] !== v) { isMatch = false; break; }
                }
                if (!isMatch) return;
            }

            if (p.fields) outs.geom.push({ refs: p.fields, type: ORIGIN_GEOM, label: `geometry (${s})`, primary: true });
            if (p.moreFields) outs.geom.push({ refs: p.moreFields, type: ORIGIN_GEOM, label: `geometry (${s})`, primary: false });
        });
    });

    return outs;
}

export function gatherReferences(item) {
    const trackMap = new Map();
    const groupHistory = new Map();

    const WEIGHTS = {
        [ORIGIN_GROUP]: 4,
        [ORIGIN_GEOM]: 3,
        [ORIGIN_TAG]: 2,
        [ORIGIN_PRESET]: 1
    };

    function traverse(refs, oType, oLabel, isPrimary) {
        if (!refs) return;

        refs.forEach(r => {
            if (r.startsWith('{') && r.endsWith('}')) {
                const gId = r.slice(1, -1);
                const showGId = gId.startsWith('@') ? gId.substring(1) : gId;

                const nextType = ORIGIN_GROUP;
                const nextLabel = `group (${showGId})`;

                const weight = WEIGHTS[nextType];
                const prevWeight = groupHistory.get(gId) || 0;
                
                if (weight <= prevWeight) return;
                groupHistory.set(gId, weight);

                const grp = globData.presets[gId] || globData.presets[showGId] || globData.presets[`@${gId}`];
                if (grp) {
                    traverse(grp.fields, nextType, nextLabel, isPrimary);
                    traverse(grp.moreFields, nextType, nextLabel, false);
                }
                return;
            }

            const fieldDef = globData.fields[r];
            const dedupKey = (fieldDef && fieldDef.key) ? fieldDef.key : r;

            if (trackMap.has(dedupKey)) {
                const existing = trackMap.get(dedupKey);
                if (!existing.refs.includes(r)) existing.refs.push(r);

                if (WEIGHTS[oType] > WEIGHTS[existing.type]) {
                    existing.type = oType;
                    existing.label = oLabel;
                    if (isPrimary) existing.primary = true;
                } else if (WEIGHTS[oType] === WEIGHTS[existing.type]) {
                    if (isPrimary) existing.primary = true;
                }
            } else {
                trackMap.set(dedupKey, {
                    id: dedupKey,
                    refs: [r],
                    type: oType,
                    label: oLabel,
                    primary: isPrimary
                });
            }
        });
    }

    const baseline = getBaselineRefs(item);
    baseline.geom.forEach(b => traverse(b.refs, ORIGIN_GEOM, b.label, b.primary));

    if (item.tags) {
        const itemTagKeys = Object.keys(item.tags).length;

        for (const [id, preset] of Object.entries(globData.presets)) {
            if (id === item.id) continue;
            if (!preset.tags) continue;

            const tCount = Object.keys(preset.tags).length;
            if (tCount >= itemTagKeys) continue;
            if (Object.values(preset.tags).includes('*')) continue;

            let matches = true;
            for (const [k, v] of Object.entries(preset.tags)) {
                if (!item.tags[k] || item.tags[k] !== v) {
                    matches = false;
                    break;
                }
            }

            if (matches && tCount > 0) {
                const lbl = Object.entries(preset.tags).map(([k,v]) => `${k}=${v}`).join(', ');
                traverse(preset.fields, ORIGIN_TAG, `tag (${lbl})`, true);
                traverse(preset.moreFields, ORIGIN_TAG, `tag (${lbl})`, false);
            }
        }
    }

    traverse(item.fields, ORIGIN_PRESET, ORIGIN_PRESET, true);
    traverse(item.moreFields, ORIGIN_PRESET, ORIGIN_PRESET, false);

    const primaryOut = [];
    const secondaryOut = [];

    for (const entry of trackMap.values()) {
        if (entry.primary) primaryOut.push(entry);
        else secondaryOut.push(entry);
    }

    return { primaryOut, secondaryOut };
}
