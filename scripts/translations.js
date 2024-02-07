import schemaBuilder from '@ideditor/schema-builder';

schemaBuilder.fetchTranslations({
  translOrgId: 'openstreetmap',
  translProjectId: 'id-editor',
  translResourceIds: ['presets'],
  translReviewedOnly: ['vi']
});
