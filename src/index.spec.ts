import crypto from "crypto";
import fs from "fs";
import os from "os";
import path from "path";

import browserslist from "browserslist";
import * as esbuild from "esbuild";
import { vi, describe, it } from "vitest";

import { esbuildPluginBrowserslist } from "./index.js";

const getFile = async (
  input: string,
): Promise<{ entryPoint: string; outfile: string }> => {
  const randomString = crypto.randomBytes(16).toString("hex");
  const entryPoint = path.join(os.tmpdir(), `${randomString}.js`);
  const outfile = path.join(os.tmpdir(), `${randomString}-out.js`);

  await fs.promises.writeFile(entryPoint, input, "utf8");

  return { entryPoint, outfile };
};

describe.concurrent("esbuild-plugin-browserslist", () => {
  it("throws an error when a target is already set", async ({ expect }) => {
    const { entryPoint, outfile } = await getFile("");

    await expect(
      esbuild.build({
        target: "node14",
        entryPoints: [entryPoint],
        outfile,
        plugins: [
          esbuildPluginBrowserslist([], {
            printUnknownTargets: false,
          }),
        ],
      }),
    ).rejects.toThrow(/cannot be used with a set target/);
  });

  it("builds correctly", async ({ expect }) => {
    await Promise.all(
      [
        {
          input: `const x = foo?.bar;`,
          query: ["chrome 50"],
          expectedOutput: `const x = foo == null ? void 0 : foo.bar;`,
        },
        {
          input: `const x = foo?.bar;`,
          query: ["node 16"],
          expectedOutput: `const x = foo?.bar;`,
        },
        {
          input: `const x = foo?.bar;`,
          query: ["ios_saf 13.4-13.7"],
          expectedOutput: `const x = foo?.bar;`,
        },
        {
          input: `const x = foo?.bar;`,
          // i.e. default
          query: undefined,
          expectedOutput: `const x = foo?.bar;`,
        },
      ].map(async ({ input, query, expectedOutput }) => {
        const { entryPoint, outfile } = await getFile(input);

        await esbuild.build({
          entryPoints: [entryPoint],
          outfile,
          plugins: [
            esbuildPluginBrowserslist(browserslist(query), {
              printUnknownTargets: false,
            }),
          ],
        });

        expect(await fs.promises.readFile(outfile, "utf8")).toBe(
          `${expectedOutput}\n`,
        );
      }),
    );
  });

  it("also logs in the usual way", async ({ expect }) => {
    const consoleSpy = vi.spyOn(console, "error");

    const { entryPoint, outfile } = await getFile("");
    await esbuild.build({
      entryPoints: [entryPoint],
      outfile,
      plugins: [
        esbuildPluginBrowserslist(["chrome 90", "op_mob all"], {
          printUnknownTargets: true,
        }),
      ],
    });

    expect(consoleSpy.mock.calls).toMatchInlineSnapshot(`
      [
        [
          "[esbuild-plugin-browserslist] Skipping unknown target: entry=op_mob all, browser=op_mob, version=1",
        ],
      ]
    `);
  });
});
