import { initDataLoad, fetchLocaleDictionary, getLocale, setLocale, globData } from './lib/data_manager.js';
import { setupCategories, handleSearch, toggleAllItemsDisplay, displayDetailsPane } from './lib/ui_manager.js';

async function bootstrap() {
    try {
        await initDataLoad(getLocale());

        const select = document.getElementById('locale-selector');
        if (select) {
            select.value = getLocale();
            select.addEventListener('change', async (e) => {
                const nw = e.target.value;
                localStorage.setItem('explorerLocale', nw);
                setLocale(nw);

                if (nw !== 'en' && !globData.locales[nw]) {
                    document.getElementById('status-indicator').classList.remove('invisible');
                    await fetchLocaleDictionary(nw);
                    document.getElementById('status-indicator').classList.add('invisible');
                }

                setupCategories();
                
                const s = document.getElementById('schema-search');
                // Trigger an artificial search update
                s.value = '';
                document.getElementById('reset-search').style.display = 'none';
                // Rather than trying to call refreshSchemaItems which is encapsulated,
                // we'll just clear the center panel until they select again, or just trigger details re-render.
                document.getElementById('items-list').innerHTML = '<li class="placeholder-msg">Pick a folder to start</li>';
                document.getElementById('items-bottom').style.display = 'none';

                if (window.explorerSelection) displayDetailsPane(window.explorerSelection);
            });
        }

        document.getElementById('status-indicator').classList.add('invisible');
        setupCategories();

        const sBar = document.getElementById('schema-search');
        const sClr = document.getElementById('reset-search');
        
        sBar.disabled = false;
        sBar.addEventListener('input', handleSearch);

        sClr.addEventListener('click', () => {
            sBar.value = '';
            sClr.style.display = 'none';
            // Need a way to call refreshSchemaItems. handleSearch via a fake event or something works.
            sBar.dispatchEvent(new Event('input'));
        });

        document.getElementById('btn-show-all').addEventListener('click', () => {
            const v = sBar.value.toLowerCase();
            toggleAllItemsDisplay(v);
        });

    } catch (e) {
        document.getElementById('status-indicator').textContent = `Fail: ${e.message}`;
        console.error(e);
    }
}

document.addEventListener('DOMContentLoaded', bootstrap);
