const schemaBuilder = require('@ideditor/schema-builder');

schemaBuilder.buildDist({
  taginfoProjectInfo: {
    name: 'iD Tagging Schema',
    description: 'Presets available in the iD and Go Map!! editors and recognized by the Overpass turbo query wizard',
    project_url: 'https://github.com/openstreetmap/id-tagging-schema/',
    icon_url: 'https://cdn.jsdelivr.net/gh/openstreetmap/iD@release/dist/img/logo.png',
    contact_name: 'Martin Raifer',
    contact_email: 'martin@raifer.tech'
  },
  translOrgId: 'openstreetmap',
  translProjectId: 'id-editor',
  translResourceIds: ['presets'],
  translReviewedOnly: ['vi']
});
