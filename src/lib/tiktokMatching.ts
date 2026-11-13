/**
 * TikTok "advanced matching": gives the pixel a SHA-256 hash of the lead's email / phone so
 * TikTok can match the conversion to the ad viewer. Only the hash leaves the browser, never
 * the raw value. Callers must check analytics consent first.
 */

async function sha256Hex(value: string): Promise<string> {
  const bytes = new TextEncoder().encode(value);
  const digest = await crypto.subtle.digest("SHA-256", bytes);
  return Array.from(new Uint8Array(digest))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}

/** E.164-style: "+" followed by digits only. The form asks for a country code. */
function normalisePhone(phone: string): string {
  let digits = phone.replace(/\D/g, "");
  if (phone.trim().startsWith("00")) digits = digits.slice(2);
  return digits ? `+${digits}` : "";
}

export async function identifyTikTokUser(contact: { email: string; phone: string }): Promise<void> {
  try {
    if (typeof window === "undefined" || !window.ttq || typeof window.ttq.identify !== "function") return;
    if (!crypto?.subtle) return;
    const payload: Record<string, string> = {};
    const email = contact.email.trim().toLowerCase();
    const phone = normalisePhone(contact.phone);
    if (email) payload.email = await sha256Hex(email);
    if (phone) payload.phone_number = await sha256Hex(phone);
    if (Object.keys(payload).length) window.ttq.identify(payload);
  } catch {
    /* tracking must never break the form */
  }
}
