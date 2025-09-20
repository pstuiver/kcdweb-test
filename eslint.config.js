import eslintPluginSvelte from "eslint-plugin-svelte";

export default [
  ...eslintPluginSvelte.configs["flat/prettier"],

  {
    files: ["**/*.js", "**/*.svelte", "*.svelte"],
    ignores: [
      "**/*.test.js",
      "**/pnpm-lock.yaml",
      "**/package-lock.json",
      "**/yarn.lock",
      "**/.DS_Store",
      "node_modules",
      "/build",
      "/.svelte-kit",
      "/.vscode",
      "/package.*",
      "**/.*",
      "**/!.*",
    ],
  },
  {
    languageOptions: {
      globals: {
        document: true,
        process: true,
      },
    },
    rules: {
      "svelte/no-at-html-tags": "off",
    },
  },
];
