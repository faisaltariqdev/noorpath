/**
 * Turns the number a parent typed into an international number, using the country they
 * picked in the form. Many parents type a local number ("07700 900123") even though the
 * form asks for a country code; without it the team cannot message them on WhatsApp.
 */

/** Dial codes for the countries offered in the trial form (CTAForm). */
const DIAL_CODES: Record<string, string> = {
  "United Kingdom": "44",
  "United States": "1",
  "United Arab Emirates": "971",
  Canada: "1",
  Australia: "61",
  Germany: "49",
  Nigeria: "234",
  Qatar: "974",
  Kuwait: "965",
  "Saudi Arabia": "966",
  Pakistan: "92",
  France: "33",
  Malaysia: "60",
  Indonesia: "62",
  Turkey: "90",
  "South Africa": "27",
  India: "91",
  Bangladesh: "880",
  Ireland: "353",
  Netherlands: "31",
  Sweden: "46",
  Norway: "47",
  Finland: "358",
  Denmark: "45",
  "New Zealand": "64",
  Singapore: "65",
  Spain: "34",
  "Hong Kong": "852",
  Italy: "39",
  Belgium: "32",
  Switzerland: "41",
  Oman: "968",
  Japan: "81",
  Russia: "7",
  China: "86",
};

export type NormalisedPhone = {
  /** International format, e.g. "+44 7700900123". Empty when the input has no digits. */
  international: string;
  /** "kept": parent typed + or 00; "added": code added from country; "assumed_full": looked like it already had the code; "unknown": could not tell. */
  status: "kept" | "added" | "assumed_full" | "unknown";
};

export function normalisePhone(raw: string, country: string): NormalisedPhone {
  const value = raw.trim();
  let digits = value.replace(/\D/g, "");
  if (!digits) return { international: "", status: "unknown" };

  if (value.startsWith("+")) return { international: `+${digits}`, status: "kept" };
  if (value.startsWith("00")) return { international: `+${digits.slice(2)}`, status: "kept" };

  const code = DIAL_CODES[country];
  if (!code) return { international: digits, status: "unknown" };

  // Local numbers start with a trunk "0" (07700..., 0312...) that is dropped internationally.
  digits = digits.replace(/^0+/, "");
  if (!digits) return { international: "", status: "unknown" };

  // 11+ digits that already start with the country code were typed in full (e.g. 447700900123).
  if (digits.startsWith(code) && digits.length >= 11) {
    return { international: `+${digits}`, status: "assumed_full" };
  }
  return { international: `+${code} ${digits}`, status: "added" };
}
