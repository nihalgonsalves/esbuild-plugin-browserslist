import debug from "debug";

export const PLUGIN_NAME = "esbuild-plugin-browserslist";

export const log = (msg: string): void => {
  // eslint-disable-next-line no-console
  console.error(`[${PLUGIN_NAME}] ${msg}`);
};

export const dbg = debug(PLUGIN_NAME);
