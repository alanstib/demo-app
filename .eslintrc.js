module.exports = {
  root: true,
  extends: ["@react-native-community", "plugin:react/jsx-runtime"],
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint", "import", "regex"],
  ignorePatterns: ["**/generated/index.ts", "*.js"],
  overrides: [
    {
      files: ["*.ts"],
      rules: {
        "no-undef": "off",
      },
    },
    {
      files: ["*.ts", "*.tsx"],
      parserOptions: {
        project: ["./tsconfig.json"],
      },
    },
    {
      files: ["*.ts", "*.tsx", "*.js"],
      rules: {
        "arrow-body-style": ["error", "as-needed"],
        "object-shorthand": ["error"],
        "regex/invalid": [
          "error",
          ["export function", "export type [^{]", "export enum", "export interface"],
        ],
        "react/jsx-curly-brace-presence": [2, "always"],
        "react/jsx-boolean-value": [2, "always"],
        "@typescript-eslint/no-shadow": ["error"],
        "no-shadow": "off",
        "@typescript-eslint/no-unnecessary-condition": ["error"],
        "@typescript-eslint/no-unused-vars": [
          2,
          { argsIgnorePattern: "^_", ignoreRestSiblings: true },
        ],
        "@typescript-eslint/quotes": ["error"],
        "@typescript-eslint/object-curly-spacing": ["error", "always"],
        "max-len": "off",
        quotes: "off",
        "newline-after-var": 2,
        "padding-line-between-statements": [
          "error",
          { blankLine: "always", prev: "*", next: "block" },
          { blankLine: "always", prev: "block", next: "*" },
          { blankLine: "always", prev: "*", next: "block-like" },
          { blankLine: "always", prev: "block-like", next: "*" },
        ],
        "import/exports-last": 2,
        "import/no-default-export": 2,
        "import/order": [
          "error",
          {
            groups: ["builtin", "external", "parent", "sibling", "index"],
            pathGroups: [
              {
                pattern: "react",
                group: "external",
                position: "before",
              },
              {
                pattern: "react-native",
                group: "external",
                position: "before",
              },
            ],
            pathGroupsExcludedImportTypes: ["react"],
            "newlines-between": "never",
          },
        ],
        "react/function-component-definition": [
          2,
          {
            namedComponents: "arrow-function",
          },
        ],
      },
    },
    {
      files: ["tamagui.config.ts", "app.config.js", "*.stories.tsx"],
      rules: {
        "import/no-default-export": 0,
      },
    },
  ],
};
