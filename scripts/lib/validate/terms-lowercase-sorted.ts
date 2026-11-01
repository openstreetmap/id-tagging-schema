import type { JSONRuleDefinition } from '@eslint/json';

export const termsLowercaseSorted: JSONRuleDefinition<{ MessageIds: 'unsorted' }> = {
  meta: {
    type: 'layout',
    docs: {
      description: 'Terms must be lowercase and sorted alphabetically',
      url: 'https://github.com/openstreetmap/id-tagging-schema/blob/main/SCHEMA.md#terms',
    },
    fixable: 'code',
    schema: [],
    messages: {
      unsorted: 'Terms must be lowercase and sorted alphabetically. Expected order: {{json}}',
    },
  },
  create(context) {
    return {
      Member(node) {
        if (node.name.type !== 'String' || node.name.value !== 'terms' || node.value.type !== 'Array') return;

        const terms = node.value.elements
          .map(element => element.value)
          .filter(value => value.type === 'String')

        // if any values are not strings, the length with be different, so abort.
        // the json-schema validator will flag this.
        if (terms.length !== node.value.elements.length) return;

        const expected = terms
          .map(term => term.value.toLowerCase().trim())
          .sort();

        const isPerfect = terms.every((term, index) => term.value === expected[index]);
        if (isPerfect) return; // pass

        context.report({
          loc: node.value.loc,
          messageId: 'unsorted',
          data: { json: JSON.stringify(expected) },
          fix(fixer) {
            return terms.map((term, index) => {
              return fixer.replaceText(term, JSON.stringify(expected[index]));
            })
          },
        });
      },
    };
  },
};
