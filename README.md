[![npm version](https://img.shields.io/npm/v/@s-h-a-d-o-w/oxlint-config)](https://www.npmjs.com/package/@s-h-a-d-o-w/oxlint-config)

# @s-h-a-d-o-w/oxlint-config

My personal default oxlint and oxfmt configs. Intended to be used with TypeScript, React, Next.js, and Vitest.

Disables TS rules for JS files. (If new rules are added, this might lag behind, since rules currently need to be individually disabled.)

See this comment for more detail on `extends` behavior than the docs provide: https://github.com/oxc-project/oxc/discussions/20126#discussioncomment-16233538

## Usage

`npm install -D @s-h-a-d-o-w/oxlint-config`

### oxlint

In your `oxlint.config.ts` (`env` HAS to be declared per-project!):

```
import sharedConfig from "@s-h-a-d-o-w/oxlint-config/oxlint.js";
import { defineConfig } from "oxlint";

export default defineConfig({
  extends: [sharedConfig],
  env: {
    node: true,
    browser: true,
  },
});
```

But if you don't need globals, you can just do:

```
export { default } from '@s-h-a-d-o-w/oxlint-config/oxlint.js';
```

### oxfmt

In your `oxfmt.config.ts`:

```
export { default } from '@s-h-a-d-o-w/oxlint-config/oxfmt.js';
```

For extending it - just treat it like any JS object, e.g.:

```
import baseConfig from "@s-h-a-d-o-w/oxlint-config/oxfmt.js";
import { defineConfig } from "oxfmt";

export default defineConfig({
  ...baseConfig,
  ignorePatterns: [
    ...baseConfig.ignorePatterns,
    "public/**/*",
    "**/model_prices_and_context_window.json",
  ],
});
```
