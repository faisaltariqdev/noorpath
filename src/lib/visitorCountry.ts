"use client";

import { useSyncExternalStore } from "react";

/**
 * Best-guess visitor country from the browser's IANA time zone — no IP lookup,
 * no permission prompt, nothing sent anywhere. Only countries with a NoorPath
 * country page are mapped; everyone else gets the generic experience.
 *
 * `formName` must match an option in CTAForm's country list.
 */
export interface VisitorCountry {
  formName: string;
  /** Used in running text: "families in the UK". */
  inText: string;
  flag: string;
  href: string;
}

const C = (formName: string, inText: string, flag: string, slug: string): VisitorCountry => ({
  formName,
  inText,
  flag,
  href: `/locations/online-quran-classes-${slug}`,
});

const UK = C("United Kingdom", "the UK", "🇬🇧", "uk");
const US = C("United States", "the US", "🇺🇸", "usa");
const CA = C("Canada", "Canada", "🇨🇦", "canada");
const AU = C("Australia", "Australia", "🇦🇺", "australia");

/** Exact time zones. Prefix rules below cover the rest of the US, Canada and Australia. */
const BY_ZONE: Record<string, VisitorCountry> = {
  "Europe/London": UK,
  "Europe/Belfast": UK,
  "Europe/Dublin": C("Ireland", "Ireland", "🇮🇪", "ireland"),
  "Asia/Dubai": C("United Arab Emirates", "the UAE", "🇦🇪", "uae"),
  "Asia/Riyadh": C("Saudi Arabia", "Saudi Arabia", "🇸🇦", "saudi-arabia"),
  "Asia/Qatar": C("Qatar", "Qatar", "🇶🇦", "qatar"),
  "Asia/Kuwait": C("Kuwait", "Kuwait", "🇰🇼", "kuwait"),
  "Asia/Muscat": C("Oman", "Oman", "🇴🇲", "oman"),
  "Europe/Berlin": C("Germany", "Germany", "🇩🇪", "germany"),
  "Europe/Paris": C("France", "France", "🇫🇷", "france"),
  "Europe/Amsterdam": C("Netherlands", "the Netherlands", "🇳🇱", "netherlands"),
  "Europe/Brussels": C("Belgium", "Belgium", "🇧🇪", "belgium"),
  "Europe/Stockholm": C("Sweden", "Sweden", "🇸🇪", "sweden"),
  "Europe/Oslo": C("Norway", "Norway", "🇳🇴", "norway"),
  "Europe/Copenhagen": C("Denmark", "Denmark", "🇩🇰", "denmark"),
  "Europe/Helsinki": C("Finland", "Finland", "🇫🇮", "finland"),
  "Europe/Zurich": C("Switzerland", "Switzerland", "🇨🇭", "switzerland"),
  "Europe/Madrid": C("Spain", "Spain", "🇪🇸", "spain"),
  "Europe/Rome": C("Italy", "Italy", "🇮🇹", "italy"),
  "Europe/Istanbul": C("Turkey", "Turkey", "🇹🇷", "turkey"),
  "Europe/Moscow": C("Russia", "Russia", "🇷🇺", "russia"),
  "Asia/Singapore": C("Singapore", "Singapore", "🇸🇬", "singapore"),
  "Asia/Kuala_Lumpur": C("Malaysia", "Malaysia", "🇲🇾", "malaysia"),
  "Asia/Hong_Kong": C("Hong Kong", "Hong Kong", "🇭🇰", "hong-kong"),
  "Asia/Tokyo": C("Japan", "Japan", "🇯🇵", "japan"),
  "Asia/Shanghai": C("China", "China", "🇨🇳", "china"),
  "Asia/Karachi": C("Pakistan", "Pakistan", "🇵🇰", "pakistan"),
  "Asia/Kolkata": C("India", "India", "🇮🇳", "india"),
  "Asia/Calcutta": C("India", "India", "🇮🇳", "india"),
  "Asia/Dhaka": C("Bangladesh", "Bangladesh", "🇧🇩", "bangladesh"),
  "Asia/Jakarta": C("Indonesia", "Indonesia", "🇮🇩", "indonesia"),
  "Africa/Lagos": C("Nigeria", "Nigeria", "🇳🇬", "nigeria"),
  "Africa/Johannesburg": C("South Africa", "South Africa", "🇿🇦", "south-africa"),
  "Pacific/Auckland": C("New Zealand", "New Zealand", "🇳🇿", "new-zealand"),
};

const CANADA_ZONES = new Set([
  "America/Toronto", "America/Vancouver", "America/Edmonton", "America/Winnipeg", "America/Halifax",
  "America/St_Johns", "America/Regina", "America/Moncton", "America/Montreal",
]);

export function countryFromTimeZone(timeZone: string | undefined): VisitorCountry | null {
  if (!timeZone) return null;
  if (BY_ZONE[timeZone]) return BY_ZONE[timeZone];
  if (CANADA_ZONES.has(timeZone)) return CA;
  if (timeZone.startsWith("Australia/")) return AU;
  if (timeZone.startsWith("America/") || timeZone.startsWith("US/") || timeZone === "Pacific/Honolulu") {
    // Only the main US zones; other American zones (Latin America) stay generic.
    const usZones = ["New_York", "Chicago", "Denver", "Los_Angeles", "Phoenix", "Anchorage", "Detroit", "Boise", "Indiana", "Kentucky", "North_Dakota"];
    if (timeZone === "Pacific/Honolulu" || timeZone.startsWith("US/") || usZones.some((z) => timeZone.includes(z))) return US;
  }
  return null;
}

const noopSubscribe = () => () => {};

function clientZone(): string {
  try {
    return Intl.DateTimeFormat().resolvedOptions().timeZone || "";
  } catch {
    return "";
  }
}

/** Visitor country on the client; null during server render and for unmapped zones. */
export function useVisitorCountry(): VisitorCountry | null {
  const zone = useSyncExternalStore(noopSubscribe, clientZone, () => "");
  return countryFromTimeZone(zone);
}
