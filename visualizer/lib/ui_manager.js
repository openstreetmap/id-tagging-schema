// Combined UI Logic for Tagging Explorer
import { globData, localize, parseSubLocales, gatherReferences, ORIGIN_PRESET } from './data_manager.js';

const FALLBACK_SVG = "data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2222%22%20height%3D%2222%22%20viewBox%3D%220%200%2024%2024%22%3E%3Ctext%20x%3D%2212%22%20y%3D%2220%22%20text-anchor%3D%22middle%22%20font-size%3D%2222%22%20fill%3D%22%23000%22%20font-family%3D%22Arial%2C%20sans-serif%22%3EiD%3C%2Ftext%3E%3C%2Fsvg%3E";

function getIconPath(id) {
    if (!id) return FALLBACK_SVG;
    if (id.startsWith("maki-")) return `https://unpkg.com/@mapbox/maki/icons/${id.replace('maki-', '')}.svg`;
    if (id.startsWith("temaki-")) return `https://cdn.jsdelivr.net/gh/ideditor/temaki@main/icons/${id.replace('temaki-', '')}.svg`;
    if (id.startsWith("iD-")) return `https://cdn.jsdelivr.net/gh/openstreetmap/iD@develop/svg/${id}.svg`;
    return FALLBACK_SVG;
}

function buildIcon(id, large = false) {
    if (id && id.startsWith('fas-')) {
        const icon = document.createElement('i');
        icon.className = id.replace("fas-", "fas fa-") + " icon-fa" + (large ? "-big" : "");
        icon.title = `Icon: ${id}`;
        return icon;
    }
    const img = document.createElement('img');
    img.className = large ? 'icon-img-big' : 'icon-img';
    img.alt = id || 'fallback icon';
    img.title = `Icon: ${id || 'fallback'}`;
    
    const targetUrl = getIconPath(id);
    if (targetUrl === FALLBACK_SVG) {
        img.src = FALLBACK_SVG;
    } else {
        img.src = FALLBACK_SVG;
        const loader = new Image();
        loader.onload = () => { img.src = targetUrl; };
        loader.src = targetUrl;
        if (loader.complete) img.src = targetUrl;
    }
    return img;
}

let activeItemsConfig = {
    members: [],
    folder: '',
    showUncategorized: false
};

export function setupCategories() {
    const listEl = document.getElementById('folder-hierarchy');
    listEl.innerHTML = '';

    const keys = Object.keys(globData.categories).sort((a,b) => {
        const nA = localize(`categories.${a}.name`, globData.categories[a].name || a);
        const nB = localize(`categories.${b}.name`, globData.categories[b].name || b);
        return nA.localeCompare(nB);
    });

    const frag = document.createDocumentFragment();
    keys.forEach(key => {
        const cat = globData.categories[key];
        const name = localize(`categories.${key}.name`, cat.name || key);

        const node = document.createElement('li');
        node.className = 'selectable';
        node.textContent = name;
        node.title = key;

        node.addEventListener('click', () => {
            document.querySelectorAll('#folder-hierarchy .selectable').forEach(n => n.classList.remove('active'));
            node.classList.add('active');
            renderItemsList(cat.members, name, key);
        });
        frag.appendChild(node);
    });
    listEl.appendChild(frag);
}

export function handleSearch(e) {
    const term = e.target.value.toLowerCase();
    const clrBox = document.getElementById('reset-search');
    clrBox.style.display = term.length > 0 ? 'flex' : 'none';
    refreshSchemaItems(term);
}

export function toggleAllItemsDisplay(term) {
    activeItemsConfig.showUncategorized = !activeItemsConfig.showUncategorized;
    document.getElementById('btn-show-all').textContent = activeItemsConfig.showUncategorized ? 'Collapse to folder only' : 'Expand all items';
    refreshSchemaItems(term);
}

export function renderItemsList(mems, catName, catId) {
    document.getElementById('items-title').textContent = catName ? `Folder: ${catName}` : 'Items';
    activeItemsConfig.members = mems || [];
    activeItemsConfig.folder = catId || '';
    activeItemsConfig.showUncategorized = false;
    
    document.getElementById('btn-show-all').textContent = 'Expand all items';
    document.getElementById('items-bottom').style.display = 'block';

    const sBox = document.getElementById('schema-search');
    sBox.value = '';
    document.getElementById('reset-search').style.display = 'none';

    refreshSchemaItems('');
}

function refreshSchemaItems(term) {
    const container = document.getElementById('items-list');
    container.innerHTML = '';

    const getRealItems = () => Object.keys(globData.presets).filter(id => !id.startsWith('{') && !!globData.presets[id]);

    const buildItemNode = (pId) => {
        const pObj = globData.presets[pId];
        if (!pObj) return null;

        const pName = localize(`presets.${pId}.name`, pObj.name || pId);
        const pTerms = (pObj.terms || []).join(', ').toLowerCase();

        if (term && !pName.toLowerCase().includes(term) && !pTerms.includes(term) && !pId.toLowerCase().includes(term)) return null;

        const row = document.createElement('li');
        row.className = 'items-list-entry selectable';
        row.appendChild(buildIcon(pObj.icon || null));

        const wrap = document.createElement('span');
        const sections = pName.split(/([\s\/\(\),]+)/);
        
        sections.forEach(s => {
            if (!s) return;
            if (/^[\s\/\(\),]+$/.test(s)) {
                wrap.appendChild(document.createTextNode(s));
            } else {
                const chunk = document.createElement('span');
                chunk.className = 'text-chunk';
                chunk.textContent = s;
                chunk.title = `Refine by: ${s}`;
                chunk.addEventListener('click', (ev) => {
                    ev.stopPropagation();
                    document.getElementById('schema-search').value = s;
                    document.getElementById('reset-search').style.display = 'flex';
                    refreshSchemaItems(s.toLowerCase());
                });
                wrap.appendChild(chunk);
            }
        });

        row.appendChild(wrap);
        row.addEventListener('click', () => {
            document.querySelectorAll('.items-list-entry').forEach(n => n.classList.remove('active'));
            row.classList.add('active');
            displayDetailsPane(pId);
        });
        return row;
    };

    const docFrag = document.createDocumentFragment();
    let hits = 0;

    if (term) {
        const fullSet = new Set([...activeItemsConfig.members, ...getRealItems()]);
        fullSet.forEach(i => {
            const elm = buildItemNode(i);
            if (elm) { docFrag.appendChild(elm); hits++; }
        });
    } else {
        activeItemsConfig.members.forEach(i => {
            const elm = buildItemNode(i);
            if (elm) { docFrag.appendChild(elm); hits++; }
        });

        if (activeItemsConfig.showUncategorized) {
            const validBases = new Set(
                activeItemsConfig.members.filter(id => id.includes('/') && !id.startsWith('{')).map(id => id.split('/')[0])
            );
            if (validBases.size === 0 && activeItemsConfig.folder) validBases.add(activeItemsConfig.folder.replace(/^category-/, ''));

            const showed = new Set(activeItemsConfig.members.filter(id => !!globData.presets[id]));
            const additions = getRealItems().filter(id => {
                if (showed.has(id)) return false;
                const bs = id.split('/')[0];
                return validBases.has(bs);
            });

            if (additions.length > 0) {
                const head = document.createElement('li');
                head.className = 'divider-row';
                head.textContent = 'More matching prefix';
                docFrag.appendChild(head);

                additions.forEach(i => {
                    const elm = buildItemNode(i);
                    if (elm) { docFrag.appendChild(elm); hits++; }
                });
            }
        }
    }

    if (hits === 0) container.innerHTML = '<li class="placeholder-msg">Nothing found.</li>';
    else container.appendChild(docFrag);
}

export function displayDetailsPane(pId) {
    const item = globData.presets[pId];
    if (!item) return;

    window.explorerSelection = pId;
    const pane = document.getElementById('item-view');
    pane.innerHTML = '';

    const frag = document.createDocumentFragment();

    const t = document.createElement('h2');
    t.className = 'item-heading';
    t.textContent = localize(`presets.${pId}.name`, item.name || pId);
    frag.appendChild(t);

    const infoBlk = document.createElement('div');
    infoBlk.className = 'data-block';
    
    let infoData = '<div class="meta-grid">';
    infoData += `<strong>Key ID:</strong><code style="color: var(--action-color);">${pId}</code>`;
    infoData += `<strong>Symbol:</strong><div id="sym-wrap" style="display: flex; gap: 8px; align-items: center;">
                 <span style="${!item.icon ? 'color: var(--text-faded);' : ''}">${item.icon || 'default'}</span></div>`;
    if (item.geometry && item.geometry.length) infoData += `<strong>Shapes:</strong><span>${item.geometry.join(', ')}</span>`;
    if (item.terms && item.terms.length) infoData += `<strong>Aliases:</strong><span>${item.terms.join(', ')}</span>`;
    infoData += '</div>';

    infoBlk.innerHTML = infoData;
    const wrp = infoBlk.querySelector('#sym-wrap');
    wrp.insertBefore(buildIcon(item.icon || null, true), wrp.firstChild);
    frag.appendChild(infoBlk);

    if (item.tags && Object.keys(item.tags).length) {
        const tgBlk = document.createElement('div');
        tgBlk.className = 'data-block';
        tgBlk.innerHTML = '<h3>OSM Tags</h3><div class="labels-group"></div>';
        const lbls = tgBlk.querySelector('.labels-group');
        for (const [k, v] of Object.entries(item.tags)) {
            const b = document.createElement('span');
            b.className = 'label-chip';
            b.textContent = v === '*' ? k : `${k}=${v}`;
            lbls.appendChild(b);
        }
        frag.appendChild(tgBlk);
    }

    pane.appendChild(frag);

    const { primaryOut, secondaryOut } = gatherReferences(item);
    if (primaryOut.length > 0) pane.appendChild(buildPropsSection('Primary Properties', primaryOut));
    if (secondaryOut.length > 0) pane.appendChild(buildPropsSection('Extra Properties', secondaryOut));
}

function buildPropsSection(headerStr, propertyLists) {
    const section = document.createElement('div');
    section.className = 'data-block';
    section.innerHTML = `<h3>${headerStr}</h3><div class="props-grid"></div>`;
    const grd = section.querySelector('.props-grid');

    propertyLists.forEach(prop => {
        const leadRef = prop.refs[0];
        const spec = globData.fields[leadRef];
        const cd = document.createElement('div');
        cd.className = 'prop-card';

        if (!spec) {
            cd.innerHTML = `<div class="prop-head"><span class="prop-title">${leadRef}</span><span class="prop-kind">Generic</span></div>`;
        } else {
            let labelText = spec.label || spec.name || leadRef;
            if (labelText.startsWith('{') && labelText.endsWith('}')) {
                const subRef = labelText.slice(1, -1);
                if (globData.fields[subRef]) labelText = globData.fields[subRef].label || globData.fields[subRef].name || subRef;
            }
            labelText = parseSubLocales(localize(`fields.${leadRef}.label`, labelText));

            const t = spec.type || 'text';
            const k = spec.key || leadRef;
            let bdg = '';
            if (prop.type && prop.type !== ORIGIN_PRESET) {
                bdg = `<span class="origin-badge">via ${prop.label}</span>`;
            }
            cd.innerHTML = `
                <div class="prop-head">
                    <span class="prop-title">${labelText}${bdg}</span>
                    <span class="prop-kind">${t}</span>
                </div>
                <div class="prop-id">${k !== leadRef ? leadRef : k}</div>
            `;
        }

        if (prop.refs.length > 1) {
            const others = prop.refs.slice(1);
            const varWrap = document.createElement('div');
            varWrap.style.marginTop = '12px';
            varWrap.style.paddingTop = '10px';
            varWrap.style.borderTop = '1px dashed var(--line-color)';

            const b = document.createElement('div');
            b.innerHTML = `🌎 ${others.length} Regional variants <i class="fas fa-caret-down"></i>`;
            b.style.fontSize = '0.85em';
            b.style.color = 'var(--text-faded)';
            b.style.cursor = 'pointer';

            const u = document.createElement('ul');
            u.style.display = 'none';
            u.style.marginTop = '8px';
            u.style.fontSize = '0.85rem';
            
            const defLi = document.createElement('li');
            defLi.innerHTML = `<strong>Base:</strong> ${leadRef}`;
            u.appendChild(defLi);

            others.forEach(o => {
                const vL = document.createElement('li');
                vL.style.marginTop = '4px';
                let rm = o;
                const dIdx = o.lastIndexOf('-');
                if (dIdx > 0) rm = o.slice(dIdx+1).split('-').join(', ');
                vL.innerHTML = `<strong>${rm}:</strong> ${o}`;
                u.appendChild(vL);
            });

            b.addEventListener('click', () => {
                const hid = u.style.display === 'none';
                u.style.display = hid ? 'block' : 'none';
                b.innerHTML = hid ? `🌎 Hide variants <i class="fas fa-caret-up"></i>` : `🌎 ${others.length} Regional variants <i class="fas fa-caret-down"></i>`;
            });

            varWrap.appendChild(b);
            varWrap.appendChild(u);
            cd.appendChild(varWrap);
        }

        grd.appendChild(cd);
    });

    return section;
}
