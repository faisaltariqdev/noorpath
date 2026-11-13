/**
 * Remembers where a visitor came from (UTM tags + TikTok click id) for the rest of the
 * browser session, so a lead that browses a few pages before submitting the trial form
 * can still be traced back to the ad. Stored in sessionStorage only (first-party, no
 * personal data, cleared when the tab closes).
 */

const STORAGE_KEY = "np_attr_v1";
const FIELDS = ["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term", "ttclid"] as const;

export type Attribution = Partial<Record<(typeof FIELDS)[number], string>> & {
  /** Path of the first page the visitor landed on this session (no query string). */
  first_landing?: string;
};

function clean(value: string | null): string {
  return (value ?? "").trim().slice(0, 150);
}

export function readAttribution(): Attribution {
  try {
    const raw = window.sessionStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as Attribution) : {};
  } catch {
    return {};
  }
}

/** Call on every page load: stores any ad tags found in the URL (latest ad click wins). */
export function captureAttribution(): Attribution {
  const stored = readAttribution();
  try {
    const params = new URLSearchParams(window.location.search);
    const next: Attribution = { ...stored };
    let changed = false;
    for (const field of FIELDS) {
      const value = clean(params.get(field));
      if (value && next[field] !== value) {
        next[field] = value;
        changed = true;
      }
    }
    if (!next.first_landing) {
      next.first_landing = window.location.pathname;
      changed = true;
    }
    if (changed) window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(next));
    return next;
  } catch {
    return stored;
  }
}
