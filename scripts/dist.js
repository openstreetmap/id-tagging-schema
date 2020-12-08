const schemaBuilder = require('@ideditor/schema-builder');

schemaBuilder.buildDist({
  taginfoProjectInfo: {
    name: 'iD Editor',
    description: 'Online editor for OSM data.',
    project_url: 'https://github.com/openstreetmap/iD',
    icon_url: 'https://cdn.jsdelivr.net/gh/openstreetmap/iD@release/dist/img/logo.png',
    contact_name: 'Quincy Morgan',
    contact_email: 'q@quincylvania.com'
  },
  translOrgId: 'openstreetmap',
  translProjectId: 'id-editor',
  translResourceIds: ['presets'],
  translReviewedOnly: ['vi']
});
