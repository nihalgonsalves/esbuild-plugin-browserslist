import * as z from 'zod';

import { BrowserslistEsbuildMapping, BrowserslistKind } from './types';
import type { EsbuildEngine } from './types';
import { dbg } from './util';

const BrowserSchema = z.nativeEnum(BrowserslistKind);
/** 123 or 123.456 or 123.456.789 */
const VersionSchema = z.string().regex(/^(\d+\.\d+\.\d+|\d+\.\d+|\d+)$/);

export const resolveToEsbuildTarget = (
  browserlist: string[],
  logFn: (msg: string) => void,
): { target: EsbuildEngine; version: string }[] =>
  browserlist
    .map((entry) => {
      const [rawBrowser, rawVersionOrRange] = entry.split(' ');

      const rawVersionNormalized = rawVersionOrRange
        // e.g. 13.4-13.7, take the lower range
        ?.replace(/-[\d.]+$/, '')
        // all => replace with 1
        ?.replace('all', '1');

      const browserResult = BrowserSchema.safeParse(rawBrowser);
      const versionResult = VersionSchema.safeParse(rawVersionNormalized);

      dbg('Got result for entry=%s: %j', entry, {
        rawBrowser,
        rawVersionOrRange,
        rawVersionNormalized,
        browserResult,
        versionResult,
      });

      if (!browserResult.success || !versionResult.success) {
        logFn(
          `Could not parse Browserslist result to a meaningful format. entry=${entry}`,
        );
        return undefined;
      }

      const { data: browser } = browserResult;
      const { data: version } = versionResult;

      const esbuildTarget = BrowserslistEsbuildMapping[browser];

      dbg('Got target for entry=%s: %s', entry, esbuildTarget);

      if (!esbuildTarget) {
        logFn(
          `Skipping unknown target: entry=${entry}, browser=${browser}, version=${version}`,
        );
        return undefined;
      }

      return { target: esbuildTarget, version };
    })
    .filter((x): x is NonNullable<typeof x> => x != null);
