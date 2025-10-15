import { includeIgnoreFile } from "@eslint/compat";
import { defineConfig } from "eslint/config";
import vitest from "eslint-plugin-vitest";

// eslint-disable-next-line import/extensions
import sharedConfig from "@nihalgonsalves/esconfig/eslint.config.shared.js";

export default defineConfig(
  includeIgnoreFile(new URL("./.gitignore", import.meta.url).pathname),
  { ignores: ["package-test", "dist"] },
  ...sharedConfig,
  {
    plugins: { vitest },
    rules: vitest.configs.recommended.rules,
  },
);
