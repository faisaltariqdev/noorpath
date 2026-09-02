/**
 * Zakat engine test suite — run with: npx tsx scripts/test-zakat-engine.ts
 *
 * Cases are checked against published scholarly worked examples:
 * - zakat.org's FCNA 401k example: $100,000 balance, 20% penalty, 25% tax on
 *   the remainder → $60,000 zakatable → $1,500 zakat.
 * - Standard nisab math: 87.48 g gold / 612.36 g silver × spot price.
 */
import assert from "node:assert/strict";
import {
  EMPTY_INPUTS,
  NISAB_GRAMS,
  calculateZakat,
  retirementZakatable,
  type MetalPrices,
} from "../src/lib/zakat/engine";

const prices: MetalPrices = {
  goldPerGram: 100, // simple round numbers so expected values are exact
  silverPerGram: 1.2,
  currency: "USD",
  asOf: "2026-09-02T00:00:00Z",
};
// nisabGold = 87.48 × 100 = 8,748 ; nisabSilver = 612.36 × 1.2 = 734.83

let passed = 0;
function test(name: string, fn: () => void) {
  try {
    fn();
    passed += 1;
    console.log(`  ✓ ${name}`);
  } catch (err) {
    console.error(`  ✗ ${name}`);
    throw err;
  }
}

console.log("zakat-engine tests");

test("FCNA 401k worked example (zakat.org): 100k − 20% penalty − 25% tax = 60k", () => {
  assert.equal(retirementZakatable(100_000, "netWithdrawable", 20, 25), 60_000);
});

test("majority position excludes retirement entirely", () => {
  assert.equal(retirementZakatable(100_000, "excluded", 20, 25), 0);
});

test("FCNA-only wealth: zakat = 2.5% of 60k = 1,500", () => {
  const r = calculateZakat(
    { ...EMPTY_INPUTS, retirementBalance: 100_000, retirementMethod: "netWithdrawable", retirementPenaltyPct: 20, retirementTaxPct: 25 },
    prices,
    "silver",
  );
  assert.equal(r.netZakatable, 60_000);
  assert.equal(r.meetsNisab, true);
  assert.equal(r.zakatDue, 1_500);
});

test("nisab thresholds derive from NISAB_GRAMS × spot", () => {
  const r = calculateZakat(EMPTY_INPUTS, prices, "silver");
  assert.equal(r.nisabGold, Math.round(NISAB_GRAMS.gold * 100 * 100) / 100); // 8748
  assert.equal(r.nisabSilver, Math.round(NISAB_GRAMS.silver * 1.2 * 100) / 100); // 734.83
});

test("below silver nisab → no zakat due", () => {
  const r = calculateZakat({ ...EMPTY_INPUTS, cashInHand: 700 }, prices, "silver");
  assert.equal(r.meetsNisab, false);
  assert.equal(r.zakatDue, 0);
});

test("at exactly the silver nisab → zakat IS due (threshold inclusive)", () => {
  const r = calculateZakat({ ...EMPTY_INPUTS, cashInHand: 734.83 }, prices, "silver");
  assert.equal(r.meetsNisab, true);
  assert.equal(r.zakatDue, Math.round(734.83 * 0.025 * 100) / 100);
});

test("same wealth can be below gold nisab but above silver nisab", () => {
  const inputs = { ...EMPTY_INPUTS, cashInHand: 5_000 };
  assert.equal(calculateZakat(inputs, prices, "gold").meetsNisab, false); // < 8,748
  assert.equal(calculateZakat(inputs, prices, "silver").meetsNisab, true); // > 734.83
});

test("gold grams valued at spot and added to direct value", () => {
  const r = calculateZakat({ ...EMPTY_INPUTS, goldGrams: 50, goldValueDirect: 1_000 }, prices, "silver");
  const goldLine = r.lines.find((l) => l.key === "gold");
  assert.equal(goldLine?.amount, 50 * 100 + 1_000); // 6,000
});

test("debts reduce net zakatable wealth", () => {
  const r = calculateZakat({ ...EMPTY_INPUTS, cashInHand: 10_000, debtsDueNow: 2_000 }, prices, "silver");
  assert.equal(r.netZakatable, 8_000);
  assert.equal(r.zakatDue, 200);
});

test("debts larger than assets floor at zero (never negative)", () => {
  const r = calculateZakat({ ...EMPTY_INPUTS, cashInHand: 1_000, debtsDueNow: 5_000 }, prices, "silver");
  assert.equal(r.netZakatable, 0);
  assert.equal(r.zakatDue, 0);
});

test("negative/NaN inputs are treated as zero (hostile input safety)", () => {
  const r = calculateZakat(
    { ...EMPTY_INPUTS, cashInHand: -500, bankAccounts: Number.NaN, cryptoValue: Infinity ? 0 : 0, stocksValue: 2_000 },
    prices,
    "silver",
  );
  assert.equal(r.totalAssets, 2_000);
});

test("mixed portfolio end-to-end", () => {
  const r = calculateZakat(
    {
      ...EMPTY_INPUTS,
      cashInHand: 1_500,
      bankAccounts: 12_000,
      goldGrams: 30, // 3,000
      stocksValue: 8_000,
      cryptoValue: 2_500,
      rsuVestedValue: 4_000,
      retirementBalance: 50_000,
      retirementMethod: "netWithdrawable",
      retirementPenaltyPct: 10,
      retirementTaxPct: 22, // 50,000 × .9 × .78 = 35,100
      businessAssets: 5_000,
      moneyOwedToYou: 1_000,
      debtsDueNow: 3_000,
    },
    prices,
    "silver",
  );
  const expectedAssets = 1_500 + 12_000 + 3_000 + 8_000 + 2_500 + 4_000 + 35_100 + 5_000 + 1_000; // 72,100
  assert.equal(r.totalAssets, expectedAssets);
  assert.equal(r.netZakatable, expectedAssets - 3_000); // 69,100
  assert.equal(r.zakatDue, Math.round(69_100 * 0.025 * 100) / 100); // 1,727.50
});

test("100% penalty+tax edge → zero zakatable, no negative", () => {
  assert.equal(retirementZakatable(100_000, "netWithdrawable", 100, 100), 0);
});

console.log(`\nAll ${passed} tests passed ✅`);
