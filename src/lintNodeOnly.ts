import { defineConfig } from "oxlint";
import { lintBase } from "./lintBase.ts";

export default defineConfig({
  ...lintBase,
  // See: https://oxc.rs/docs/guide/usage/linter/plugins.html#supported-plugins
  plugins: ["eslint", "typescript", "unicorn", "oxc", "import", "promise"],
  rules: {
    ...lintBase.rules,
    "unicorn/require-post-message-target-origin": "off", // node workers, not windows
  },
});
