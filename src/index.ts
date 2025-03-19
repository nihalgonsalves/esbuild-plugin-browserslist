import type { Plugin } from "esbuild";

import { resolveToEsbuildTarget as resolveToEsbuildTarget_ } from "./resolveToEsbuildTarget.js";
import { dbg, log, PLUGIN_NAME } from "./util.js";

export type Opts = { printUnknownTargets: boolean };

export const resolveToEsbuildTarget = (
  browserlist: string[],
  opts?: Opts,
): string[] => {
  const printUnknownTargets = opts?.printUnknownTargets ?? true;

  return resolveToEsbuildTarget_(
    browserlist,
    printUnknownTargets ? log : dbg,
  ).map(({ target, version }) => `${target}${version}`);
};

export const esbuildPluginBrowserslist = (
  browserlist: string[],
  opts?: Opts,
): Plugin => ({
  name: PLUGIN_NAME,
  setup(build) {
    const esbuildOptions = build.initialOptions;

    if (esbuildOptions.target !== undefined) {
      dbg(
        "Got esbuildOptions.target=%s, expected=<falsey>",
        esbuildOptions.target,
      );
      throw new Error(`${PLUGIN_NAME} cannot be used with a set target`);
    }

    const resolvedTargets = resolveToEsbuildTarget(browserlist, opts);

    dbg("Resolved targets: %j", resolvedTargets);

    esbuildOptions.target = resolvedTargets;
  },
});
