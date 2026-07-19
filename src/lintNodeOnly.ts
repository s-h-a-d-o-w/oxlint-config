import { defineConfig } from "oxlint";
import { lintBase } from "./lintBase.js";

export default defineConfig({
  ...lintBase,
  // See: https://oxc.rs/docs/guide/usage/linter/plugins.html#supported-plugins
  plugins: ["eslint", "typescript", "unicorn", "oxc", "import", "promise"],
});
