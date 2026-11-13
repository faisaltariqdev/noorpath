/**
 * Hands the trial-form details to the thank-you page without putting names in the URL
 * (URLs are visible to analytics/ad pixels, browser history and referrers).
 * sessionStorage only: it stays in this tab and is cleared when the tab closes.
 */

const STORAGE_KEY = "np_thankyou_v1";

export type ThankYouDetails = {
  name: string;
  child: string;
  course: string;
  country: string;
};

export function saveThankYouDetails(details: ThankYouDetails) {
  try {
    window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(details));
  } catch {
    /* storage blocked: the thank-you page falls back to a generic message */
  }
}

export function readThankYouDetails(): ThankYouDetails | null {
  try {
    const raw = window.sessionStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as ThankYouDetails) : null;
  } catch {
    return null;
  }
}
