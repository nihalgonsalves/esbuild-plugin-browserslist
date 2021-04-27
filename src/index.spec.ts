import crypto from 'crypto';
import fs from 'fs';
import os from 'os';
import path from 'path';

import * as esbuild from 'esbuild';

import { esbuildPluginBrowserslist } from '.';

describe('esbuild-plugin-browserslist', () => {
  it('builds correctly', async () => {
    const randomString = crypto.randomBytes(16).toString('hex');
    const entryPoint = path.join(os.tmpdir(), `${randomString}.js`);
    const outfile = path.join(os.tmpdir(), `${randomString}-out.js`);

    const input = `const x = foo?.bar;`;
    await fs.promises.writeFile(entryPoint, input, 'utf8');
    await esbuild.build({
      entryPoints: [entryPoint],
      outfile,
      plugins: [esbuildPluginBrowserslist()],
    });

    const expectedOutput = `const x = foo == null ? void 0 : foo.bar;\n`;
    expect(await fs.promises.readFile(outfile, 'utf8')).toBe(expectedOutput);
  });
});
