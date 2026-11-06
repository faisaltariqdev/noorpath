/**
 * Helpers for templated page metadata, so generated titles and descriptions stay
 * inside search-result limits (Bing flags titles over 70 and descriptions over 160).
 */

export const TITLE_MAX = 65;
export const DESCRIPTION_MAX = 155;

/** First candidate that fits, else the last (shortest) one. Order candidates longest/most descriptive first. */
export function fitTitle(candidates: string[], max = TITLE_MAX): string {
  return candidates.find((t) => t.length <= max) ?? candidates[candidates.length - 1];
}

/** Base text plus the longest tail that keeps it within the limit. */
export function withTail(base: string, tails: string[], max = DESCRIPTION_MAX): string {
  const text = base.trim();
  const tail = tails.find((t) => text.length + 1 + t.length <= max);
  return tail ? `${text} ${tail}` : text;
}
