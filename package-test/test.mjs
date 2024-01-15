import {
  esbuildPluginBrowserslist,
  resolveToEsbuildTarget,
} from "esbuild-plugin-browserslist";
import assert from "assert";

assert.strictEqual(
  esbuildPluginBrowserslist().name,
  "esbuild-plugin-browserslist",
);
assert.strictEqual(resolveToEsbuildTarget(["chrome 90"])[0], "chrome90");
