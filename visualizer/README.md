# OSM iD Tagging Schema Explorer

<p align="center">
  A dedicated web application to visualize, explore, and comprehend the OpenStreetMap iD editor tagging schema presets.
</p>

## Problem Statement

Currently, the presets used in the iD editor and other OSM editors are maintained purely as code (JSON files) inside the `id-tagging-schema` repository. Because these presets are only available in raw code format outside of their intended use within the editor, it is incredibly difficult for contributors to:

- Fully comprehend how presets and fields are structured.
- See how comprehensive the tagging schema truly is.
- Debug issues related to tagging schema inheritance, group unwrapping, and prioritization.

This creates a high barrier to entry for the OSM community when trying to contribute to or consume the tagging schema repository.

## My Proposal & Solution

This project proposes and implements a standalone web application that visually unpacks the OSM iD Tagging Schema. By bringing the schema out of raw JSON format and into an interactive dashboard, this tool is designed to drastically lower the barrier to contribution.

It acts as a **"reference implementation"** for consumers of the tagging schema, accurately visualising properties such as:

- **Inheritance & Hierarchy**: How fields inherit from other presets and geometry defaults.
- **Regional Variants**: Interactive grouping of country/region-specific variants of a preset or field.
- **Translations & Aliases**: Support for translated names, aliases, and search terms dynamically fetched from the schema.
- **Iconography**: Direct resolution of `maki`, `temaki`, and `iD` icons as visualized in the editor.

## Key Features

- **Live Data Fetching:** Directly pulls live data from the `dist/` branch of the `id-tagging-schema` repository.
- **Smart Field Resolution:** Simulates the internal resolving mechanics to attribute whether a field arrived via geometry, inherited tags, or group templates.
- **Regional Variant Unrolling:** Consolidates variants (e.g., `-BG`, `-DE-AT-CH`) so the user isn't overwhelmed by duplicate base fields, while preserving their visibility.
- **Multilingual Support:** Implements dynamic i18n switching that automatically hydrates fallback fields using nested references.
- **Responsive Architecture:** Built gracefully using CSS Grid and Flexbox with native dark-mode adoption.

## Architecture

This application is built with vanilla modern Web technologies (ES2022+, HTML5, CSS3) favoring speed, maintainability, and no build-step requirements.

The structure is intentionally modular:
```text
├── index.html                   # Main entry point and semantic structure
├── theme.css                    # Custom UI styles, theming, and layout engine
├── main.js                      # Application bootstrap and orchestration
└── lib/
    ├── data_manager.js          # Core engine: Data fetching, state, i18n parsing, and field resolution logic
    └── ui_manager.js            # View engine: DOM generation, category trees, preset lists, and icons
```

## How to Run Locally

Because the project leverages modern **ES Modules**, modern browsers require the files to be served over a local HTTP/HTTPS server to prevent CORS policy restrictions.

1. **Clone the repository:**
   ```bash
   git clone <your-repo-link>
   cd osm-id-tagging-schema
   ```

2. **Serve the files:**
   You can use any lightweight local web server. 
   
   Using Node.js:
   ```bash
   npx serve .
   ```
   Or using Python 3:
   ```bash
   python -m http.server
   ```

3. **Open your browser:**
   Navigate to `http://localhost:3000` (or the port provided by your server).

## GSoC Alignment

This project specifically targets the "Visualizing the OSM iD Tagging Schema" proposal (suggested by Martin Raifer). 

By providing a clean, comprehensible reference implementation of the schema’s logic, this tool will help the OpenStreetMap community easily interact with, debug, and expand the iD Tagging Schema.
