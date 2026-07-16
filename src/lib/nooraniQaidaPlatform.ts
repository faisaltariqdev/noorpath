/** Public marketing site → admin learning platform preview (limited lesson-only view). */
export const NOORANI_QAIDA_ADMIN_BASE = "https://admin.noorpath.online/admin/noorani-qaida";

/**
 * Query params consumed by the admin panel to unlock only the lesson area
 * when visitors arrive from the public website (remaining modules stay locked).
 *
 * Admin implementation: honour `preview=public`, `source=website`, and `section=lesson`.
 */
export const NOORANI_QAIDA_LIVE_PREVIEW_URL =
  `${NOORANI_QAIDA_ADMIN_BASE}?preview=public&source=website&section=lesson`;
