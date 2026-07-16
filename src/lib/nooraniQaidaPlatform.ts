/**
 * Public marketing site → interactive learning-platform preview.
 *
 * This is a dedicated PUBLIC route on the admin app that lives outside the
 * `/admin` auth middleware, so website visitors reach it without logging in.
 * Only the Alif lesson is unlocked; all other modules render as locked with an
 * "Enrol for full access" call to action.
 */
export const NOORANI_QAIDA_LIVE_PREVIEW_URL =
  "https://admin.noorpath.online/qaida-preview";
