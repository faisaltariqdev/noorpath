/**
 * Approximate local-currency display rates. NoorPath prices and bills in USD
 * (PRICING_PLANS); these rates only power "≈ local" hints next to USD prices.
 *
 * Licence-clear sources only:
 * - European Central Bank euro reference rates — free reuse with the ECB cited
 *   as source; our USD cross rate is a stated modification.
 * - Official fixed pegs published by the issuing central bank.
 * Currencies outside these sources (e.g. PKR, BDT, NGN, KWD) stay USD-only.
 */

export type RateSource = "ecb" | "peg";

export interface DisplayRates {
  /** Units of each currency per 1 USD. */
  perUsd: Record<string, number>;
  source: Record<string, RateSource>;
  /** ECB reference date (YYYY-MM-DD) the cross rates were calculated from. */
  ecbDate: string | null;
}

const ECB_DAILY_URL = "https://www.ecb.europa.eu/stats/eurofxref/eurofxref-daily.xml";
const ONE_DAY_SECONDS = 86400;
const MAX_ECB_AGE_DAYS = 7;

/** Official USD pegs, by issuing central bank. Re-verify at each release. */
export const OFFICIAL_PEGS: Record<string, { perUsd: number; issuer: string }> = {
  AED: { perUsd: 3.6725, issuer: "Central Bank of the UAE" },
  SAR: { perUsd: 3.75, issuer: "Saudi Central Bank" },
  QAR: { perUsd: 3.64, issuer: "Qatar Central Bank" },
  OMR: { perUsd: 0.3845, issuer: "Central Bank of Oman" },
};

/** ECB reference currencies NoorPath country pages use. */
const ECB_CURRENCIES = [
  "GBP", "CAD", "AUD", "NZD", "DKK", "NOK", "SEK", "CHF", "TRY",
  "INR", "IDR", "MYR", "SGD", "HKD", "ZAR",
] as const;

function parseEcbXml(xml: string): { date: string; perEur: Record<string, number> } | null {
  const date = xml.match(/time=['"](\d{4}-\d{2}-\d{2})['"]/)?.[1];
  if (!date) return null;
  const perEur: Record<string, number> = {};
  for (const match of xml.matchAll(/currency=['"]([A-Z]{3})['"]\s+rate=['"]([\d.]+)['"]/g)) {
    perEur[match[1]] = Number(match[2]);
  }
  return perEur.USD ? { date, perEur } : null;
}

function isFresh(isoDate: string): boolean {
  const ageMs = Date.now() - Date.parse(`${isoDate}T00:00:00Z`);
  return ageMs >= 0 && ageMs <= MAX_ECB_AGE_DAYS * ONE_DAY_SECONDS * 1000;
}

/**
 * Daily-cached display rates. Never throws: if the ECB feed is unavailable or
 * stale, only the official pegs are returned and every other page shows USD.
 */
export async function getDisplayRates(): Promise<DisplayRates> {
  const perUsd: Record<string, number> = {};
  const source: Record<string, RateSource> = {};
  for (const [code, peg] of Object.entries(OFFICIAL_PEGS)) {
    perUsd[code] = peg.perUsd;
    source[code] = "peg";
  }

  let ecbDate: string | null = null;
  try {
    const response = await fetch(ECB_DAILY_URL, { next: { revalidate: ONE_DAY_SECONDS } });
    const parsed = response.ok ? parseEcbXml(await response.text()) : null;
    if (parsed && isFresh(parsed.date)) {
      const usdPerEur = parsed.perEur.USD;
      perUsd.EUR = 1 / usdPerEur;
      source.EUR = "ecb";
      for (const code of ECB_CURRENCIES) {
        const rate = parsed.perEur[code];
        if (rate) {
          perUsd[code] = rate / usdPerEur;
          source[code] = "ecb";
        }
      }
      ecbDate = parsed.date;
    }
  } catch {
    // Network or parse failure: fall back to pegs + USD.
  }

  return { perUsd, source, ecbDate };
}
