import schemaBuilder from '@ideditor/schema-builder';

let translationOptions = {};
if (process.argv.includes('translations')) {
  translationOptions = {
    translOrgId: 'openstreetmap',
    translProjectId: 'id-editor',
    translResourceIds: ['presets'],
    translReviewedOnly: ['vi']
  };
}

schemaBuilder.buildDist({
  inDirectory: "./og_data",
  taginfoProjectInfo: {
    name: 'iD Tagging Schema',
    description: 'Presets available in the iD editor, Rapid, StreetComplete, Go Map!!, Every Door, and other applications',
    project_url: 'https://github.com/openstreetmap/id-tagging-schema/',
    icon_url: 'https://cdn.jsdelivr.net/gh/openstreetmap/iD@release/dist/img/logo.png',
    contact_name: 'Martin Raifer',
    contact_email: 'martin@raifer.tech'
  },
  ...translationOptions
});
