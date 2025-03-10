import { includeIgnoreFile } from "@eslint/compat";
import vitest from "eslint-plugin-vitest";
import tseslint from "typescript-eslint";

// eslint-disable-next-line import/extensions
import sharedConfig from "@nihalgonsalves/esconfig/eslint.config.shared.js";

export default tseslint.config(
  includeIgnoreFile(new URL("./.gitignore", import.meta.url).pathname),
  { ignores: ["package-test", "dist"] },
  ...sharedConfig,
  {
    plugins: { vitest },
    rules: vitest.configs.recommended.rules,
  },
);
