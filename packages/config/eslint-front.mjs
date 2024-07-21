import pluginVue from "eslint-plugin-vue";
import pluginTypescript from "@typescript-eslint/eslint-plugin";
import parserTypescript from "@typescript-eslint/parser";
import configPrettier from "eslint-config-prettier";
// import configPrettierVue from "eslint-config-prettier-vue";
// import vueRecommended from "eslint-plugin-vue/lib/configs/recommended";
// import typescriptRecommended from "@typescript-eslint/eslint-plugin/dist/configs/recommended";

export default [
  // ...pluginVue.configs["flat/recommended"],
  // typescriptRecommended,
  configPrettier,
  {
    // extends: [
    //   "config:recommended",
    //   "plugin:vue/vue3-recommended",
    //   "plugin:@typescript-config/recommended",
    //   "plugin:prettier-vue/recommended",
    //   "prettier",
    // ],
    files: ["*.ts", "*.tsx", "*.vue"],
    parser: parserTypescript,
    languageOptions: {
      parserOptions: {
        sourceType: "module",
        project: "./backend.json",
        parser: "@typescript-eslint/parser",
        extraFileExtensions: [".vue"],
        ecmaVersion: 2023,
      },
    },
    plugins: {
      vue: pluginVue,
      "@typescript-eslint": pluginTypescript,
    },
    rules: {
      "import/order": "on",
      "spaced-comment": "off",
      "no-console": "warn",
      "consistent-return": "off",
      "func-names": "off",
      "object-shorthand": "off",
      "no-process-exit": "off",
      "no-param-reassign": "off",
      "no-return-await": "off",
      "no-underscore-dangle": "off",
      "class-methods-use-this": "off",
      "prefer-destructuring": ["error", { "object": true, "array": false }],
      "no-unused-vars": "warn",
      "@typescript-eslint/no-unused-vars": "warn",
    },
  },
];