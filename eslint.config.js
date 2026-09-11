import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import { defineConfig, globalIgnores } from "eslint/config";
import eslintPluginPrettier from "eslint-plugin-prettier/recommended";

export default defineConfig([
  globalIgnores(["dist"]),

  js.configs.recommended,
  eslintPluginPrettier,

  {
    files: ["**/*.{js,jsx}"],
    plugins: {
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
    },
    languageOptions: {
      globals: globals.browser,
      parserOptions: {
        ecmaFeatures: { jsx: true },
      },
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      "react-refresh/only-export-components": ["warn", { allowConstantExport: true }],

      "space-infix-ops": "error",
      "no-console": "error",

      "prettier/prettier": [
        "error",
        {
          endOfLine: "auto",
          singleQuote: false,
          printWidth: 130,
          tabWidth: 2,
        },
      ],
    },
  },
]);
