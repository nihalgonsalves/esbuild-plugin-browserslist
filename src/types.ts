/**
 * From: https://github.com/ben-eb/caniuse-lite/blob/v1.0.30001218/data/browsers.js
 *
 * License:
 *
 * """
 * The data in this repo is available for use under a CC BY 4.0 license (http://creativecommons.org/licenses/by/4.0).
 * For attribution just mention somewhere that the source is caniuse.com.
 * If you have any questions about using the data for your project please contact me here: http://a.deveria.com/contact
 * """
 */
export enum BrowserslistKind {
  Edge = 'edge',
  Firefox = 'firefox',
  Chrome = 'chrome',
  Safari = 'safari',
  iOS = 'ios_saf',
  Android = 'android',
  AndroidChrome = 'and_chr',
  AndroidFirefox = 'and_ff',
  AndroidUC = 'and_uc',
  AndroidQQ = 'and_qq',
  Samsung = 'samsung',
  Opera = 'opera',
  OperaMini = 'op_mini',
  OperaMobile = 'op_mob',
  IE = 'ie',
  IEMobile = 'ie_mob',
  BlackBerry = 'bb',
  Baidu = 'baidu',
  Kaios = 'kaios',
  Node = 'node',
}

/** https://github.com/evanw/esbuild/blob/v0.15.12/internal/compat/js_table.go#L21-L47 */
export enum EsbuildEngine {
  Chrome = 'chrome',
  Edge = 'edge',
  ES = 'es',
  Firefox = 'firefox',
  Hermes = 'hermes',
  IE = 'ie',
  IOS = 'ios',
  Node = 'node',
  Opera = 'opera',
  Rhino = 'rhino'
  Safari = 'safari',
}

export const BrowserslistEsbuildMapping: Partial<
  Record<BrowserslistKind, EsbuildEngine>
> = {
  // exact map
  [BrowserslistKind.Edge]: EsbuildEngine.Edge,
  [BrowserslistKind.Firefox]: EsbuildEngine.Firefox,
  [BrowserslistKind.Chrome]: EsbuildEngine.Chrome,
  [BrowserslistKind.Safari]: EsbuildEngine.Safari,
  [BrowserslistKind.iOS]: EsbuildEngine.IOS,
  [BrowserslistKind.Node]: EsbuildEngine.Node,
  [BrowserslistKind.IE]: EsbuildEngine.IE,
  [BrowserslistKind.Opera]: EsbuildEngine.Opera,
  // approximate mapping
  [BrowserslistKind.Android]: EsbuildEngine.Chrome,
  [BrowserslistKind.AndroidChrome]: EsbuildEngine.Chrome,
  [BrowserslistKind.AndroidFirefox]: EsbuildEngine.Firefox,
  // the rest have no equivalent for esbuild
};
