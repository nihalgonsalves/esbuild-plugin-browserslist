import type { Plugin } from 'esbuild';

import { resolveToEsbuildTarget } from './resolveToEsbuildTarget';
import { dbg, log, PLUGIN_NAME } from './util';

export const esbuildPluginBrowserslist = (
  browserlist: string[],
  opts: { printUnknownTargets: boolean },
): Plugin => ({
  name: PLUGIN_NAME,
  setup(build) {
    const printUnknownTargets = opts.printUnknownTargets ?? true;

    const esbuildOptions = build.initialOptions;

    if (esbuildOptions.target) {
      throw new Error(`${PLUGIN_NAME} cannot be used with a set target`);
    }

    esbuildOptions.target = resolveToEsbuildTarget(
      browserlist,
      printUnknownTargets ? log : dbg,
    ).map(({ target, version }) => `${target}${version}`);
  },
});
