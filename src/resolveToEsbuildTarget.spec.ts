import browserslist from 'browserslist';

import { resolveToEsbuildTarget } from './resolveToEsbuildTarget';
import { EsbuildEngine } from './types';

describe('resolveToEsbuildTarget', () => {
  let logs: string[];
  let logFn: (log: string) => void;

  beforeEach(() => {
    logs = [];
    logFn = (log) => {
      logs.push(log);
    };
  });

  it('resolves browserlist versions to esbuild configs', () => {
    const query = [
      'chrome 87',
      'firefox 88',
      'node 14.16.0',
      'ios_saf 14.0-14.4',
      'ios_saf 14.0-14.4',
      'opera 91',
    ];

    const result = resolveToEsbuildTarget(browserslist(query, {}), logFn);
    expect(result).toMatchObject([
      { target: EsbuildEngine.Chrome, version: '87' },
      { target: EsbuildEngine.Firefox, version: '88' },
      { target: EsbuildEngine.IOS, version: '14.0' },
      { target: EsbuildEngine.Node, version: '14.16.0' },
      { target: EsbuildEngine.Opera, version: '91' },
    ]);

    expect(logs).toEqual([]);
  });

  it('throws an error on no targets', () => {
    const query = ['ie_mob 11'];

    expect(() =>
      resolveToEsbuildTarget(browserslist(query, {}), logFn),
    ).toThrow(/Could not resolve/);

    expect(logs).toMatchInlineSnapshot(`
      [
        "Skipping unknown target: entry=ie_mob 11, browser=ie_mob, version=11",
      ]
    `);
  });

  it('skips unmappable targets', () => {
    const query = ['chrome 90', 'ie_mob 11'];

    const result = resolveToEsbuildTarget(browserslist(query, {}), logFn);

    expect(result).toEqual([{ target: EsbuildEngine.Chrome, version: '90' }]);
    expect(logs).toMatchInlineSnapshot(`
      [
        "Skipping unknown target: entry=ie_mob 11, browser=ie_mob, version=11",
      ]
    `);
  });

  it('skips unknown targets', () => {
    const result = resolveToEsbuildTarget(
      [
        'chrome 90',
        'notABrowser 123',
        'chrome notAVersion',
        'chrome 1.2.3.4',
        'chrome 1.2.3.',
        'chrome 1.2.',
        'chrome 1.',
        'AaaAAaaAaa',
        '',
      ],
      logFn,
    );

    expect(result).toEqual([{ target: EsbuildEngine.Chrome, version: '90' }]);
    expect(logs).toMatchInlineSnapshot(`
      [
        "Could not parse Browserslist result to a meaningful format. entry=notABrowser 123",
        "Could not parse Browserslist result to a meaningful format. entry=chrome notAVersion",
        "Could not parse Browserslist result to a meaningful format. entry=chrome 1.2.3.4",
        "Could not parse Browserslist result to a meaningful format. entry=chrome 1.2.3.",
        "Could not parse Browserslist result to a meaningful format. entry=chrome 1.2.",
        "Could not parse Browserslist result to a meaningful format. entry=chrome 1.",
        "Could not parse Browserslist result to a meaningful format. entry=AaaAAaaAaa",
        "Could not parse Browserslist result to a meaningful format. entry=",
      ]
    `);
  });
});
