"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolvePrettierOptions = void 0;
const prettier_1 = require("prettier");
const resolvePrettierOptions = async ({ filepath, physicalFilepath, pluginOptions }) => {
    // resolve options from prettier config files
    const prettierRcOptions = pluginOptions.usePrettierrc
        ? await (0, prettier_1.resolveConfig)(physicalFilepath, {
            editorconfig: true,
        })
        : {};
    // merge options
    return {
        ...prettierRcOptions,
        ...pluginOptions.prettierOptions,
        filepath,
    };
};
exports.resolvePrettierOptions = resolvePrettierOptions;
