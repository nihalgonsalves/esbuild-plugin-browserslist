import assert from "assert";

import { esbuildPluginBrowserslist, resolveToEsbuildTarget } from "esbuild-plugin-browserslist";

assert.strictEqual(esbuildPluginBrowserslist().name, "esbuild-plugin-browserslist");
assert.strictEqual(resolveToEsbuildTarget(["chrome 90"])[0], "chrome90");
