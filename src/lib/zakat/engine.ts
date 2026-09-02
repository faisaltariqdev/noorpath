/**
 * Zakat calculation engine — pure functions, no framework imports.
 *
 * All calculations run client-side; nothing the user enters is transmitted.
 * Methodology notes (sources are cited on the page UI):
 *
 * - Rate: 2.5% (rubʿ al-ʿushr) of net zakatable wealth held for one lunar year.
 * - Nisab: 87.48 g gold or 612.36 g silver (the weights used by major zakat
 *   institutions such as National Zakat Foundation and Islamic Relief; some
 *   scholars use 85 g / 595 g — the page discloses this difference).
 * - Retirement accounts (401k / IRA / pension) carry two documented scholarly
 *   positions, and the user must pick one and apply it consistently:
 *     1. "excluded"        — majority position: locked funds with an early
 *        withdrawal penalty are not fully possessed, so no zakat until
 *        accessible (e.g. zakat.org's summary of the majority view).
 *     2. "netWithdrawable" — Fiqh Council of North America (2024): zakat is
 *        due annually on balance − penalties − taxes.
 * - Vested RSUs are owned shares → zakatable at market value.
 *   Unvested RSUs are not owned → excluded (user is told not to enter them).
 * - Debts deductible: only amounts due now / within the coming year.
 */

export type NisabStandard = "silver" | "gold";
export type RetirementMethod = "excluded" | "netWithdrawable";

export const ZAKAT_RATE = 0.025;

/** Grams used by NZF / Islamic Relief; the alternative 85/595 convention is disclosed in page copy. */
export const NISAB_GRAMS = {
  gold: 87.48,
  silver: 612.36,
} as const;

export interface ZakatInputs {
  cashInHand: number;
  bankAccounts: number;
  goldGrams: number;
  goldValueDirect: number;
  silverGrams: number;
  silverValueDirect: number;
  stocksValue: number;
  cryptoValue: number;
  rsuVestedValue: number;
  retirementBalance: number;
  retirementMethod: RetirementMethod;
  retirementPenaltyPct: number;
  retirementTaxPct: number;
  businessAssets: number;
  moneyOwedToYou: number;
  debtsDueNow: number;
}

export const EMPTY_INPUTS: ZakatInputs = {
  cashInHand: 0,
  bankAccounts: 0,
  goldGrams: 0,
  goldValueDirect: 0,
  silverGrams: 0,
  silverValueDirect: 0,
  stocksValue: 0,
  cryptoValue: 0,
  rsuVestedValue: 0,
  retirementBalance: 0,
  retirementMethod: "excluded",
  retirementPenaltyPct: 10,
  retirementTaxPct: 22,
  businessAssets: 0,
  moneyOwedToYou: 0,
  debtsDueNow: 0,
};

export interface MetalPrices {
  /** Price of one gram of pure gold in the selected currency. */
  goldPerGram: number;
  /** Price of one gram of pure silver in the selected currency. */
  silverPerGram: number;
  currency: string;
  /** ISO timestamp of the price snapshot. */
  asOf: string;
}

export interface ZakatLine {
  key: string;
  label: string;
  amount: number;
  note?: string;
}

export interface ZakatResult {
  lines: ZakatLine[];
  totalAssets: number;
  deductions: number;
  netZakatable: number;
  nisabGold: number;
  nisabSilver: number;
  /** The threshold actually compared against, per the chosen standard. */
  nisabUsed: number;
  standard: NisabStandard;
  meetsNisab: boolean;
  zakatDue: number;
}

const round2 = (n: number) => Math.round(n * 100) / 100;
const safe = (n: number) => (Number.isFinite(n) && n > 0 ? n : 0);

export function retirementZakatable(
  balance: number,
  method: RetirementMethod,
  penaltyPct: number,
  taxPct: number,
): number {
  if (method === "excluded") return 0;
  // FCNA formula: balance − early-withdrawal penalty − taxes on the remainder.
  const afterPenalty = safe(balance) * (1 - Math.min(Math.max(safe(penaltyPct), 0), 100) / 100);
  const afterTax = afterPenalty * (1 - Math.min(Math.max(safe(taxPct), 0), 100) / 100);
  return afterTax;
}

export function calculateZakat(
  inputs: ZakatInputs,
  prices: MetalPrices,
  standard: NisabStandard,
): ZakatResult {
  const goldValue = safe(inputs.goldGrams) * safe(prices.goldPerGram) + safe(inputs.goldValueDirect);
  const silverValue = safe(inputs.silverGrams) * safe(prices.silverPerGram) + safe(inputs.silverValueDirect);
  const retirement = retirementZakatable(
    inputs.retirementBalance,
    inputs.retirementMethod,
    inputs.retirementPenaltyPct,
    inputs.retirementTaxPct,
  );

  const lines: ZakatLine[] = [
    { key: "cash", label: "Cash in hand", amount: safe(inputs.cashInHand) },
    { key: "bank", label: "Bank accounts & savings", amount: safe(inputs.bankAccounts) },
    {
      key: "gold",
      label: "Gold",
      amount: goldValue,
      note: safe(inputs.goldGrams) > 0 ? `${inputs.goldGrams} g × ${round2(prices.goldPerGram)} ${prices.currency}/g` : undefined,
    },
    {
      key: "silver",
      label: "Silver",
      amount: silverValue,
      note: safe(inputs.silverGrams) > 0 ? `${inputs.silverGrams} g × ${round2(prices.silverPerGram)} ${prices.currency}/g` : undefined,
    },
    { key: "stocks", label: "Shares, funds & ETFs (market value)", amount: safe(inputs.stocksValue) },
    { key: "crypto", label: "Cryptocurrency (market value)", amount: safe(inputs.cryptoValue) },
    { key: "rsu", label: "Vested RSU shares (market value)", amount: safe(inputs.rsuVestedValue) },
    {
      key: "retirement",
      label: "Retirement accounts (401k / IRA / pension)",
      amount: retirement,
      note:
        inputs.retirementMethod === "excluded"
          ? "Excluded under the majority position (locked funds not fully possessed)"
          : `FCNA method: balance − ${inputs.retirementPenaltyPct}% penalty − ${inputs.retirementTaxPct}% tax`,
    },
    { key: "business", label: "Business cash, inventory & receivables", amount: safe(inputs.businessAssets) },
    { key: "owed", label: "Money owed to you (expected to be repaid)", amount: safe(inputs.moneyOwedToYou) },
  ];

  const totalAssets = lines.reduce((sum, l) => sum + l.amount, 0);
  const deductions = safe(inputs.debtsDueNow);
  const netZakatable = round2(Math.max(totalAssets - deductions, 0));

  // Round the thresholds BEFORE comparing so the number shown to the user is
  // exactly the number compared against (a value equal to the displayed nisab
  // must count as meeting it).
  const nisabGold = round2(NISAB_GRAMS.gold * safe(prices.goldPerGram));
  const nisabSilver = round2(NISAB_GRAMS.silver * safe(prices.silverPerGram));
  const nisabUsed = standard === "gold" ? nisabGold : nisabSilver;
  const meetsNisab = nisabUsed > 0 && netZakatable >= nisabUsed;

  return {
    lines: lines.map((l) => ({ ...l, amount: round2(l.amount) })),
    totalAssets: round2(totalAssets),
    deductions: round2(deductions),
    netZakatable,
    nisabGold,
    nisabSilver,
    nisabUsed,
    standard,
    meetsNisab,
    zakatDue: meetsNisab ? round2(netZakatable * ZAKAT_RATE) : 0,
  };
}
