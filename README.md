# esbuild-plugin-browserslist

![build status](https://github.com/nihalgonsalves/esbuild-plugin-browserslist/workflows/build/badge.svg)

Configure [esbuild](https://github.com/evanw/esbuild)'s target based on a [browserslist](https://github.com/browserslist/browserslist) query

## Installation

```sh
yarn add esbuild-plugin-browserslist esbuild browserslist
```

## Usage

```ts
const esbuild = require('esbuild');
const browserslist = require('browserslist');
const {
  esbuildPluginBrowserslist,
  resolveToEsbuildTarget,
} = require('esbuild-plugin-browserslist');

await esbuild.build({
  entryPoints: ['./foo/bar.ts'],
  // ... other options (except `target`) ...
  plugins: [
    esbuildPluginBrowserslist(browserslist('defaults'), {
      printUnknownTargets: false,
    }),
  ],
});

// Or:

const target = resolveToEsbuildTarget(browserslist('defaults'), {
  printUnknownTargets: false,
});

await esbuild.build({
  entryPoints: ['./foo/bar.ts'],
  target,
});
```

## Caveats

- Only `edge`, `firefox`, `chrome`, `safari`, `ios_saf`, and `node` have direct equivalents for esbuild targets.
- `android` and `and_chr` are mapped to the `chrome` target, and `and_ff` is mapped to the `firefox` target.
- All other browsers are ignored (`and_qq`, `samsung`, `opera`, `op_mini`, `op_mob`, `ie`, `ie_mob`, `bb`, `baidu`, and `kaios`)

## Debugging

You can turn on debug logs (which will print all resolutions or failures) using `DEBUG=esbuild-plugin-browserslist`
