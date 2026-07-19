import { defineConfig } from "oxfmt";

export default defineConfig({
  printWidth: 80,
  sortPackageJson: false,
  ignorePatterns: [
    // Don't fight package managers and build tools
    "node_modules/**/*",
    "dist/**/*",
    "build/**/*",
    "bun.lock",
    "bun.lockb",
    "pnpm-lock.yaml",
    "yarn.lock",
    "package-lock.json",
    "pnpm-workspace.yaml",
  ],
});
