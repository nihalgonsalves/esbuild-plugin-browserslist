import type { Plugin } from 'esbuild';

export const esbuildPluginBrowserslist = (): Plugin => ({
  name: 'esbuild-plugin-browserslist',
  setup(_build) {},
});
