import './patch_legacy_url.js';

const { default: schemaBuilder } = await import('@ideditor/schema-builder');

schemaBuilder.fetchTranslations({
  translOrgId: 'openstreetmap',
  translProjectId: 'id-editor',
  translResourceIds: ['presets'],
  translReviewedOnly: ['vi']
});
