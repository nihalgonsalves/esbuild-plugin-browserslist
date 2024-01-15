const {
  esbuildPluginBrowserslist,
  resolveToEsbuildTarget,
} = require("esbuild-plugin-browserslist");
const assert = require("assert");

assert.strictEqual(
  esbuildPluginBrowserslist().name,
  "esbuild-plugin-browserslist",
);
assert.strictEqual(resolveToEsbuildTarget(["chrome 90"])[0], "chrome90");
