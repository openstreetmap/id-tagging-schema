const schemaBuilder = require('@ideditor/schema-builder');

schemaBuilder.fetchTranslations({
  organizationId: 'openstreetmap',
  projectId: 'id-editor',
  resourceIds: ['presets'],
  reviewedOnly: ['vi']
});
