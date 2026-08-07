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
      unsorted: 'Terms must be lowercase and sorted alphabetically',
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

        for (const [index, term] of terms.entries()) {
          if (term.value === expected[index]) continue; // pass

          context.report({
            loc: term.loc,
            messageId: 'unsorted',
            fix: fixer => fixer.replaceTextRange(
              [term.loc.start.offset, term.loc.end.offset],
              JSON.stringify(expected[index])
            ),
          });
        }
      },
    };
  },
};
