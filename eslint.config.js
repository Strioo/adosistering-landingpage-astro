import eslintPluginAstro from "eslint-plugin-astro";
import js from "@eslint/js";
import tsParser from "@typescript-eslint/parser";
import tsPlugin from "@typescript-eslint/eslint-plugin";
import globals from "globals";

export default [
  {
    // Global ignores — never lint build output, deps, Astro caches, or VS Code Local History
    ignores: [
      "dist/**",
      "node_modules/**",
      ".astro/**",
      ".vercel/**",
      ".history/**",
    ],
  },
  js.configs.recommended,
  ...eslintPluginAstro.configs.recommended,
  {
    // TypeScript files
    files: ["**/*.ts", "**/*.tsx"],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        project: "./tsconfig.json",
      },
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    plugins: {
      "@typescript-eslint": tsPlugin,
    },
    rules: {
      "no-unused-vars": "off",
      "@typescript-eslint/no-unused-vars": "warn",
      "no-console": "warn",
    },
  },
  {
    // Astro files — use typescript-eslint parser for the frontmatter script
    files: ["**/*.astro"],
    languageOptions: {
      parserOptions: {
        parser: tsParser,
      },
      globals: {
        ...globals.browser,
      },
    },
    rules: {
      "no-unused-vars": "warn",
      "no-console": ["warn", { allow: ["warn", "error"] }],
    },
  },
  {
    // Plain JS files (browser-side)
    files: ["**/*.js", "**/*.mjs"],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    rules: {
      "no-unused-vars": "warn",
      "no-console": "warn",
    },
  },
  {
    // CommonJS config files (e.g. tailwind.config.cjs)
    files: ["**/*.cjs"],
    languageOptions: {
      sourceType: "commonjs",
      globals: {
        ...globals.node,
      },
    },
    rules: {
      "no-unused-vars": "warn",
      "no-console": "warn",
    },
  },
];
