import type { FileInfoResult, Options } from 'prettier';
import type { PrettierVuePluginOptions } from '../types';
export type ResolvePrettierOptionsAndFileInfoFn = (options: {
    filepath: string;
    physicalFilepath: string;
    pluginOptions: PrettierVuePluginOptions;
}) => {
    prettierFileInfo: FileInfoResult;
    prettierOptions: Options;
};
