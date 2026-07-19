import { defineConfig } from "oxlint";
import { lintBase } from "./lintBase.ts";

export default defineConfig({
  ...lintBase,
  // See: https://oxc.rs/docs/guide/usage/linter/plugins.html#supported-plugins
  plugins: [
    "eslint",
    "typescript",
    "unicorn",
    "react",
    "react-perf",
    "nextjs",
    "oxc",
    "import",
    "jsx-a11y",
    "promise",
  ],
});
