import pluginVue from "eslint-plugin-vue";
import pluginTypescript from "@typescript-eslint/eslint-plugin";
import parserTypescript from "@typescript-eslint/parser";

export default [
  {
    languageOptions: {
      parser: parserTypescript,
      parserOptions: {
        project: "./tsconfig.json",
      },
    },
    plugins: {
      vue: pluginVue,
      "@typescript-eslint": pluginTypescript,
    },
    rules: {
      "import/order": "off",
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
  ...pluginVue.configs["flat/recommended"],
];