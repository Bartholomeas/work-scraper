import pluginVue from "eslint-plugin-vue";
import pluginTypescript from "@typescript-eslint/eslint-plugin";
import parserTypescript from "@typescript-eslint/parser";

export default [
  {
    extends: [
      "config:recommended",
      "plugin:@typescript-config/recommended",
      "prettier",
    ],
    files: ["*.ts", "*.tsx", "*.vue"],
    parser: parserTypescript,
    languageOptions: {
      parserOptions: {
        sourceType: "module",
        project: "./backend.json",
        parser: "@typescript-config/parser",
        ecmaVersion: 2021,
      },
    },
    plugins: {
      "@typescript-eslint": pluginTypescript,
    },
  },
];