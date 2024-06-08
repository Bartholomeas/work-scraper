import pluginVue from "eslint-plugin-vue";
import pluginTypescript from "@typescript-eslint/eslint-plugin";
import parserTypescript from "@typescript-eslint/parser";

export default [
  {
    extends: [
      "eslint:recommended",
      "plugin:@typescript-eslint/recommended",
      "prettier",
    ],
    files: ["*.ts", "*.tsx", "*.vue"],
    parser: parserTypescript,
    languageOptions: {
      parserOptions: {
        sourceType: "module",
        project: "./tsconfig.json",
        parser: "@typescript-eslint/parser",
        ecmaVersion: 2021,
      },
    },
    plugins: {
      "@typescript-eslint": pluginTypescript,
    },
  },
];