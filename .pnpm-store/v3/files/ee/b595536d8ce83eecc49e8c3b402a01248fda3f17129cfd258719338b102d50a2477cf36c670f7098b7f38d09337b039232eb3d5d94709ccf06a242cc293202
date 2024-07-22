"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.runPrettierAndReportDifferences = void 0;
const path = require("path");
const picocolors = require("picocolors");
const prettier_linter_helpers_1 = require("prettier-linter-helpers");
const synckit_1 = require("synckit");
const report_difference_1 = require("./report-difference");
let prettierFormat;
const runPrettierAndReportDifferences = ({ context, offset = 0, options, source, }) => {
    if (!prettierFormat) {
        prettierFormat = (0, synckit_1.createSyncFn)(require.resolve('../workers/prettier-format'));
    }
    // prettier.format() may throw a SyntaxError if it cannot parse the
    // source code it is given. Usually for JS files this isn't a
    // problem as ESLint will report invalid syntax before trying to
    // pass it to the prettier plugin. However this might be a problem
    // for non-JS languages that are handled by a plugin. Notably Vue
    // files throw an error if they contain unclosed elements, such as
    // `<template><div></template>. In this case report an error at the
    // point at which parsing failed.
    let prettierSource;
    try {
        prettierSource = prettierFormat(source, options);
    }
    catch (err) {
        if (!(err instanceof Error)) {
            throw err;
        }
        // UndefinedParserError
        if (err.message.startsWith('No parser could be inferred for file')) {
            console.warn(picocolors.yellow('warning'), '[prettier-vue]', `No parser could be inferred for "${path.extname(options.filepath ?? '')}" format`);
            return;
        }
        if (!(err instanceof SyntaxError)) {
            throw err;
        }
        let message = `Parsing error: ${err.message}`;
        const error = err;
        // Prettier's message contains a codeframe style preview of the
        // invalid code and the line/column at which the error occurred.
        // ESLint shows those pieces of information elsewhere already so
        // remove them from the message
        if (error.codeFrame) {
            message = message.replace(`\n${error.codeFrame}`, '');
        }
        if (error.loc) {
            message = message.replace(/ \(\d+:\d+\)$/, '');
        }
        context.report({ message, loc: error.loc });
        return;
    }
    if (source !== prettierSource) {
        (0, prettier_linter_helpers_1.generateDifferences)(source, prettierSource).forEach((difference) => (0, report_difference_1.reportDifference)(context, difference, difference.offset + offset));
    }
};
exports.runPrettierAndReportDifferences = runPrettierAndReportDifferences;
