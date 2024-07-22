"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reportDifference = void 0;
const prettier_linter_helpers_1 = require("prettier-linter-helpers");
/**
 * Reports a difference.
 *
 * @param {import('eslint').Rule.RuleContext} context - The ESLint rule context.
 * @param {import('prettier-linter-helpers').Difference} difference - The difference object.
 * @returns {void}
 */
const reportDifference = (context, difference, offset) => {
    const { operation, deleteText = '', insertText = '' } = difference;
    const range = [offset, offset + deleteText.length];
    const [start, end] = range.map(index => context.getSourceCode().getLocFromIndex(index));
    context.report({
        messageId: operation,
        data: {
            deleteText: (0, prettier_linter_helpers_1.showInvisibles)(deleteText),
            insertText: (0, prettier_linter_helpers_1.showInvisibles)(insertText),
        },
        loc: { start, end },
        fix: fixer => fixer.replaceTextRange(range, insertText),
    });
};
exports.reportDifference = reportDifference;
