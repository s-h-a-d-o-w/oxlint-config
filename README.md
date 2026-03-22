Not ready for use yet because extend behavior is not thoroughly documented. See also: https://github.com/oxc-project/oxc/discussions/20126#discussioncomment-16233538


[![npm version](https://img.shields.io/npm/v/@s-h-a-d-o-w/oxlint-config)](https://www.npmjs.com/package/@s-h-a-d-o-w/oxlint-config)

# @s-h-a-d-o-w/oxlint-config

My personal default oxlint and oxfmt configs.

Intended to be used with TypeScript, React, Next.js, and Vitest.

Disables TS rules for JS files. (If new rules are added, this might lag behind, since rules currently need to be individually disabled.)

## Usage

`npm install -D @s-h-a-d-o-w/oxlint-config`

In your `.oxlintrc.json`:

```
{
  "extends": ["./node_modules/@s-h-a-d-o-w/oxlint-config/.oxlintrc.json"]
  "env": {
    ... // If you need e.g. node/browser globals
  }
}
```

In your `.oxfmtrc.jsonc`:

```
{
  "extends": ["./node_modules/@s-h-a-d-o-w/oxlint-config/.oxfmtrc.jsonc"]
}
```
