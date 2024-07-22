/**
 * Options for how to process vue SFC blocks
 */
export interface SFCBlocksOptions {
    customBlocks?: Record<string, false | {
        lang: string;
    }>;
    script?: boolean;
    style?: boolean;
    template?: boolean;
}
/**
 * The parsed result of vue SFC block
 */
export interface PrettierVueSFCBlock {
    /**
     * The language of the source string
     */
    lang: string;
    /**
     * The offset of source string in the original file
     *
     * Used to calculate the lint error location
     */
    offset: number;
    /**
     * The source string to be passed to prettier
     */
    source: string;
    /**
     * The type of the SFC block
     */
    type: string;
}
/**
 * Parse the vue SFC file
 *
 * @param {Object} vueFile
 * @param {string} vueFile.source source code string of the `.vue` file
 * @param {string} vueFile.filepath file path of the `.vue` file
 * @param {Object} vueFile.options options for custom blocks, which is set in `settings['prettier-vue'].SFCBlocks` of `.eslintrc.js`
 *
 * @returns {Array<Object>} returns an array of Object to be used by prettier
 */
export declare const parseVue: ({ filepath, options, source, }: {
    filepath: string;
    options: SFCBlocksOptions;
    source: string;
}) => PrettierVueSFCBlock[];
