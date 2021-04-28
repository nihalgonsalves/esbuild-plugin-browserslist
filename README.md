# esbuild-plugin-browserslist

![build status](https://github.com/nihalgonsalves/esbuild-plugin-browserslist/workflows/build/badge.svg)

Configure esbuild's target based on a browserslist query

## Installation

```sh
yarn add esbuild-plugin-browserslist esbuild browserslist
```

## Usage

```ts
// import/ESM

import * as esbuild from 'esbuild';
import browserslist from 'browserslist';
import {
  esbuildPluginBrowserslist,
  resolveToEsbuildTarget,
} from 'esbuild-plugin-browserslist';

// require/CJS

const esbuild = require('esbuild');
const browserslist = require('browserslist');
const {
  esbuildPluginBrowserslist,
  resolveToEsbuildTarget,
} = require('esbuild-plugin-browserslist');

// Usage

await esbuild.build({
  entryPoints: ['./foo/bar.ts'],
  // ... other options (except `target`) ...
  plugins: [
    esbuildPluginBrowserslist(browserslist('default'), {
      printUnknownTargets: false,
    }),
  ],
});

// Or:

const target = resolveToEsbuildTarget(
  browserslist('default', {
    printUnknownTargets: false,
  }),
);

await esbuild.build({
  entryPoints: ['./foo/bar.ts'],
  target,
});
```

## Caveats
