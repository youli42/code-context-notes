/**
 * Path comparison helpers.
 *
 * Note binding used to compare file paths with exact string equality, which
 * is wrong on Windows: the filesystem is case-insensitive, and the case VS
 * Code hands us (the workspace folder's case) can differ from the case that
 * wrote the note. A legacy note storing `f:\Work\file.ts` then never matches
 * `F:\Work\file.ts`, so its CodeLens, comment thread and commands silently
 * find nothing.
 *
 * These helpers are for comparisons only — storage keeps the path as given.
 */

import * as path from 'path';

const CASE_INSENSITIVE_FS = process.platform === 'win32';

/** Canonical form used for comparisons; never written to disk. */
export function canonicalizePath(filePath: string): string {
  const normalized = path.normalize(filePath);
  return CASE_INSENSITIVE_FS ? normalized.toLowerCase() : normalized;
}

/** True when both paths point at the same file on this platform. */
export function pathsEqual(a: string, b: string): boolean {
  return canonicalizePath(a) === canonicalizePath(b);
}
