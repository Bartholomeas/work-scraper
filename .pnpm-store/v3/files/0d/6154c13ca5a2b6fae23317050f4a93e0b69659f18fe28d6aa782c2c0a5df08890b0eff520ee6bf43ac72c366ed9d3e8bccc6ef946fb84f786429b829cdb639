"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const synckit_1 = require("synckit");
const resolve_prettier_file_info_1 = require("../utils/resolve-prettier-file-info");
const resolve_prettier_options_1 = require("../utils/resolve-prettier-options");
(0, synckit_1.runAsWorker)(async ({ filepath, physicalFilepath, pluginOptions, }) => {
    // resolve prettier options and file info
    const prettierOptions = await (0, resolve_prettier_options_1.resolvePrettierOptions)({
        filepath,
        physicalFilepath,
        pluginOptions,
    });
    const prettierFileInfo = await (0, resolve_prettier_file_info_1.resolvePrettierFileInfo)({
        physicalFilepath,
        pluginOptions,
        prettierOptions,
    });
    return {
        prettierFileInfo,
        prettierOptions,
    };
});
