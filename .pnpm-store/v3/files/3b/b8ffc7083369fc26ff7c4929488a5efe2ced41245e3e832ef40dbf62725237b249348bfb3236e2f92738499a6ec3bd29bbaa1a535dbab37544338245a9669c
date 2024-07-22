"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolvePrettierFileInfo = void 0;
const prettier_1 = require("prettier");
const resolvePrettierFileInfo = async ({ physicalFilepath, pluginOptions, prettierOptions }) => {
    const fileInfoOptions = {
        resolveConfig: false,
        withNodeModules: false,
        ignorePath: '.prettierignore',
        plugins: prettierOptions.plugins ?? undefined,
        ...pluginOptions.fileInfoOptions,
    };
    return (0, prettier_1.getFileInfo)(physicalFilepath, fileInfoOptions);
};
exports.resolvePrettierFileInfo = resolvePrettierFileInfo;
