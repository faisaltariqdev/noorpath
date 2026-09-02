"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import {
  EMPTY_INPUTS,
  NISAB_GRAMS,
  ZAKAT_RATE,
  calculateZakat,
  type MetalPrices,
  type NisabStandard,
  type RetirementMethod,
  type ZakatInputs,
} from "@/lib/zakat/engine";

const CURRENCIES = [
  "USD", "GBP", "EUR", "CAD", "AUD", "PKR", "INR", "AED", "SAR", "QAR",
  "KWD", "MYR", "SGD", "ZAR", "BDT", "TRY", "NOK", "SEK", "DKK", "NZD",
] as const;

const STORAGE_KEY = "noorpath-zakat-calculator-v1";

/** First-visit currency guess from the browser locale region (falls back to USD). */
const REGION_CURRENCY: Record<string, string> = {
  US: "USD", GB: "GBP", CA: "CAD", AU: "AUD", NZ: "NZD", PK: "PKR", IN: "INR",
  AE: "AED", SA: "SAR", QA: "QAR", KW: "KWD", MY: "MYR", SG: "SGD", ZA: "ZAR",
  BD: "BDT", TR: "TRY", NO: "NOK", SE: "SEK", DK: "DKK",
  DE: "EUR", FR: "EUR", NL: "EUR", BE: "EUR", ES: "EUR", IT: "EUR", IE: "EUR",
  AT: "EUR", FI: "EUR", PT: "EUR",
};

function detectCurrency(): string | null {
  try {
    const region = new Intl.Locale(navigator.language).maximize().region;
    return region ? REGION_CURRENCY[region] ?? null : null;
  } catch {
    return null;
  }
}

interface Saved {
  inputs: ZakatInputs;
  currency: string;
  standard: NisabStandard;
}

function formatMoney(value: number, currency: string): string {
  try {
    return new Intl.NumberFormat("en", {
      style: "currency",
      currency,
      maximumFractionDigits: 2,
    }).format(value);
  } catch {
    return `${currency} ${value.toFixed(2)}`;
  }
}

const numberField: React.CSSProperties = {
  width: "100%",
  padding: "10px 12px",
  borderRadius: 10,
  border: "1px solid var(--border)",
  fontSize: ".95rem",
  color: "var(--charcoal)",
  background: "#fff",
};

const labelStyle: React.CSSProperties = {
  display: "block",
  fontSize: ".82rem",
  fontWeight: 700,
  color: "var(--slate)",
  marginBottom: 6,
};

const hintStyle: React.CSSProperties = {
  fontSize: ".75rem",
  color: "var(--muted)",
  marginTop: 4,
  lineHeight: 1.5,
};

function Field({
  label,
  value,
  onChange,
  hint,
  step = "any",
}: {
  label: string;
  value: number;
  onChange: (n: number) => void;
  hint?: string;
  step?: string;
}) {
  return (
    <div>
      <label style={labelStyle}>
        {label}
        <input
          type="number"
          min={0}
          step={step}
          inputMode="decimal"
          value={value === 0 ? "" : value}
          placeholder="0"
          onChange={(e) => onChange(e.target.value === "" ? 0 : Number(e.target.value))}
          style={{ ...numberField, marginTop: 6 }}
        />
      </label>
      {hint ? <p style={hintStyle}>{hint}</p> : null}
    </div>
  );
}

function Card({ title, emoji, children }: { title: string; emoji: string; children: React.ReactNode }) {
  return (
    <div style={{ background: "#fff", border: "1px solid var(--border)", borderRadius: 16, padding: "22px 20px", boxShadow: "var(--shadow-sm)" }}>
      <h3 style={{ fontFamily: "'Playfair Display',serif", fontSize: "1.05rem", color: "var(--charcoal)", margin: "0 0 16px" }}>
        <span aria-hidden style={{ marginRight: 8 }}>{emoji}</span>
        {title}
      </h3>
      <div style={{ display: "grid", gap: 14 }}>{children}</div>
    </div>
  );
}

export default function ZakatCalculator() {
  const [inputs, setInputs] = useState<ZakatInputs>(EMPTY_INPUTS);
  const [currency, setCurrency] = useState<string>("USD");
  const [standard, setStandard] = useState<NisabStandard>("silver");
  const [priceState, setPriceState] = useState<
    { forCurrency: string; data: MetalPrices | null; error: boolean } | null
  >(null);
  const [manualGold, setManualGold] = useState(0);
  const [manualSilver, setManualSilver] = useState(0);
  const [restored, setRestored] = useState(false);

  // Restore last session (device-local only). Runs after paint via a timer
  // callback so hydration matches the server-rendered empty form.
  useEffect(() => {
    const timer = setTimeout(() => {
      try {
        const raw = window.localStorage.getItem(STORAGE_KEY);
        if (raw) {
          const saved = JSON.parse(raw) as Saved;
          if (saved.inputs) setInputs({ ...EMPTY_INPUTS, ...saved.inputs });
          if (saved.currency) setCurrency(saved.currency);
          if (saved.standard) setStandard(saved.standard);
        } else {
          const guessed = detectCurrency();
          if (guessed) setCurrency(guessed);
        }
      } catch {
        // Ignore corrupt local data.
      }
      setRestored(true);
    }, 0);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!restored) return;
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify({ inputs, currency, standard } satisfies Saved));
    } catch {
      // Storage may be unavailable (private mode); calculator still works.
    }
  }, [inputs, currency, standard, restored]);

  useEffect(() => {
    let cancelled = false;
    fetch(`/api/nisab?currency=${currency}`)
      .then((r) => (r.ok ? r.json() : Promise.reject()))
      .then((data: MetalPrices) => {
        if (!cancelled) setPriceState({ forCurrency: currency, data, error: false });
      })
      .catch(() => {
        if (!cancelled) setPriceState({ forCurrency: currency, data: null, error: true });
      });
    return () => {
      cancelled = true;
    };
  }, [currency]);

  // Only trust price data fetched for the currently selected currency.
  const prices = priceState?.forCurrency === currency ? priceState.data : null;
  const priceError = priceState?.forCurrency === currency && priceState.error;

  const effectivePrices: MetalPrices = useMemo(() => {
    if (prices && prices.currency === currency) return prices;
    if (prices) return prices; // fallback source may be USD-only; UI labels it
    return {
      goldPerGram: manualGold,
      silverPerGram: manualSilver,
      currency,
      asOf: new Date().toISOString(),
    };
  }, [prices, currency, manualGold, manualSilver]);

  const result = useMemo(
    () => calculateZakat(inputs, effectivePrices, standard),
    [inputs, effectivePrices, standard],
  );

  const resetAll = useCallback(() => {
    setInputs(EMPTY_INPUTS);
    try {
      window.localStorage.removeItem(STORAGE_KEY);
    } catch {
      // Nothing to clear.
    }
  }, []);

  const set = useCallback(
    <K extends keyof ZakatInputs>(key: K) =>
      (value: ZakatInputs[K]) =>
        setInputs((prev) => ({ ...prev, [key]: value })),
    [],
  );

  const displayCurrency = effectivePrices.currency;
  const priceReady = effectivePrices.goldPerGram > 0 && effectivePrices.silverPerGram > 0;

  return (
    <div>
      {/* Controls */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: 16, alignItems: "flex-end", marginBottom: 24 }}>
        <div>
          <label style={labelStyle}>
            Currency
            <select
              value={currency}
              onChange={(e) => setCurrency(e.target.value)}
              style={{ ...numberField, marginTop: 6, width: 140 }}
            >
              {CURRENCIES.map((c) => (
                <option key={c} value={c}>{c}</option>
              ))}
            </select>
          </label>
        </div>
        <div>
          <span style={labelStyle}>Nisab standard</span>
          <div style={{ display: "inline-flex", border: "1px solid var(--border)", borderRadius: 10, overflow: "hidden" }}>
            {(["silver", "gold"] as const).map((s) => (
              <button
                key={s}
                type="button"
                onClick={() => setStandard(s)}
                style={{
                  padding: "10px 18px",
                  fontSize: ".85rem",
                  fontWeight: 700,
                  border: "none",
                  cursor: "pointer",
                  background: standard === s ? "var(--emerald)" : "#fff",
                  color: standard === s ? "#fff" : "var(--slate)",
                }}
              >
                {s === "silver" ? `Silver (${NISAB_GRAMS.silver} g)` : `Gold (${NISAB_GRAMS.gold} g)`}
              </button>
            ))}
          </div>
          <p style={hintStyle}>
            Most zakat institutions recommend the silver standard when your wealth is a mix of assets, because its lower threshold is safer for those entitled to zakat.
          </p>
        </div>
      </div>

      {/* Price status */}
      <div style={{ marginBottom: 24, padding: "12px 16px", borderRadius: 12, background: "var(--ivory)", border: "1px solid var(--border)", fontSize: ".82rem", color: "var(--slate)" }}>
        {prices && priceReady ? (
          <>
            Live prices ({prices.currency}): gold {formatMoney(prices.goldPerGram, prices.currency)}/g · silver{" "}
            {formatMoney(prices.silverPerGram, prices.currency)}/g
            {prices.currency !== currency ? (
              <strong> — live prices for {currency} are unavailable right now, so USD prices are shown; results are in {prices.currency}.</strong>
            ) : null}
          </>
        ) : priceError ? (
          <div style={{ display: "grid", gap: 10 }}>
            <span>Live metal prices could not be loaded. Enter today&apos;s per-gram prices manually to continue:</span>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, maxWidth: 420 }}>
              <Field label={`Gold price per gram (${currency})`} value={manualGold} onChange={setManualGold} />
              <Field label={`Silver price per gram (${currency})`} value={manualSilver} onChange={setManualSilver} />
            </div>
          </div>
        ) : (
          <>Loading live gold &amp; silver prices…</>
        )}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6" style={{ alignItems: "start" }}>
        {/* Inputs */}
        <div className="lg:col-span-2" style={{ display: "grid", gap: 20 }}>
          <Card title="Cash & bank" emoji="💵">
            <Field label={`Cash in hand (${displayCurrency})`} value={inputs.cashInHand} onChange={set("cashInHand")} />
            <Field
              label={`Bank accounts & savings (${displayCurrency})`}
              value={inputs.bankAccounts}
              onChange={set("bankAccounts")}
              hint="Include current, savings and digital wallet balances on your zakat date."
            />
          </Card>

          <Card title="Gold & silver" emoji="🥇">
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
              <Field label="Gold owned (grams)" value={inputs.goldGrams} onChange={set("goldGrams")} />
              <Field label={`…or gold value (${displayCurrency})`} value={inputs.goldValueDirect} onChange={set("goldValueDirect")} />
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
              <Field label="Silver owned (grams)" value={inputs.silverGrams} onChange={set("silverGrams")} />
              <Field label={`…or silver value (${displayCurrency})`} value={inputs.silverValueDirect} onChange={set("silverValueDirect")} />
            </div>
            <p style={hintStyle}>
              Enter grams for automatic valuation at today&apos;s price, or enter a value directly (for example a jeweller&apos;s valuation). If you use both, they are added together.
            </p>
          </Card>

          <Card title="Investments" emoji="📈">
            <Field
              label={`Shares, funds & ETFs — current market value (${displayCurrency})`}
              value={inputs.stocksValue}
              onChange={set("stocksValue")}
              hint="Use today's market value, not what you paid. Some scholars allow a lower basis for long-term holdings — ask your scholar if this applies to you."
            />
            <Field
              label={`Cryptocurrency — current market value (${displayCurrency})`}
              value={inputs.cryptoValue}
              onChange={set("cryptoValue")}
            />
            <Field
              label={`Vested RSU shares — current market value (${displayCurrency})`}
              value={inputs.rsuVestedValue}
              onChange={set("rsuVestedValue")}
              hint="Only shares that have already vested. Unvested RSUs are not yet owned, so they are not zakatable."
            />
          </Card>

          <Card title="Retirement accounts (401k / IRA / pension)" emoji="🏦">
            <div>
              <span style={labelStyle}>Scholarly position to apply</span>
              <div style={{ display: "grid", gap: 8 }}>
                {(
                  [
                    ["excluded", "Exclude until accessible — majority position: funds locked behind an early-withdrawal penalty are not fully in your possession."],
                    ["netWithdrawable", "Pay annually on the net withdrawable amount — Fiqh Council of North America: balance minus penalties and taxes."],
                  ] as [RetirementMethod, string][]
                ).map(([value, text]) => (
                  <label key={value} style={{ display: "flex", gap: 10, alignItems: "flex-start", fontSize: ".82rem", color: "var(--slate)", lineHeight: 1.55, cursor: "pointer" }}>
                    <input
                      type="radio"
                      name="retirement-method"
                      checked={inputs.retirementMethod === value}
                      onChange={() => set("retirementMethod")(value)}
                      style={{ marginTop: 3 }}
                    />
                    <span>{text}</span>
                  </label>
                ))}
              </div>
              <p style={hintStyle}>Choose one position and apply it consistently every year.</p>
            </div>
            {inputs.retirementMethod === "netWithdrawable" ? (
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 12 }}>
                <Field label={`Account balance (${displayCurrency})`} value={inputs.retirementBalance} onChange={set("retirementBalance")} />
                <Field label="Early-withdrawal penalty %" value={inputs.retirementPenaltyPct} onChange={set("retirementPenaltyPct")} />
                <Field label="Estimated tax %" value={inputs.retirementTaxPct} onChange={set("retirementTaxPct")} />
              </div>
            ) : null}
          </Card>

          <Card title="Business, receivables & debts" emoji="🧾">
            <Field
              label={`Business cash, inventory & receivables (${displayCurrency})`}
              value={inputs.businessAssets}
              onChange={set("businessAssets")}
              hint="Stock held for sale at its current selling value, business cash, and invoices you expect to collect. Equipment and premises are not zakatable."
            />
            <Field
              label={`Money owed to you that you expect to be repaid (${displayCurrency})`}
              value={inputs.moneyOwedToYou}
              onChange={set("moneyOwedToYou")}
            />
            <Field
              label={`Debts due now or within the coming year (${displayCurrency})`}
              value={inputs.debtsDueNow}
              onChange={set("debtsDueNow")}
              hint="Deduct rent, bills and instalments currently due — not the entire balance of a long-term mortgage."
            />
          </Card>
        </div>

        {/* Results */}
        <div style={{ position: "sticky", top: 90 }}>
          <div style={{ background: "linear-gradient(135deg, #041f14, #0a3d28)", borderRadius: 20, padding: "26px 24px", color: "#fff" }}>
            <h3 style={{ fontFamily: "'Playfair Display',serif", fontSize: "1.15rem", margin: "0 0 18px", color: "#fff" }}>
              Your zakat summary
            </h3>
            <dl style={{ margin: 0, display: "grid", gap: 10, fontSize: ".88rem" }}>
              <div style={{ display: "flex", justifyContent: "space-between", gap: 12 }}>
                <dt style={{ color: "rgba(255,255,255,.7)" }}>Total zakatable assets</dt>
                <dd style={{ margin: 0, fontWeight: 700 }}>{formatMoney(result.totalAssets, displayCurrency)}</dd>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", gap: 12 }}>
                <dt style={{ color: "rgba(255,255,255,.7)" }}>Deductible debts</dt>
                <dd style={{ margin: 0, fontWeight: 700 }}>− {formatMoney(result.deductions, displayCurrency)}</dd>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", gap: 12, borderTop: "1px solid rgba(255,255,255,.15)", paddingTop: 10 }}>
                <dt style={{ color: "rgba(255,255,255,.7)" }}>Net zakatable wealth</dt>
                <dd style={{ margin: 0, fontWeight: 700 }}>{formatMoney(result.netZakatable, displayCurrency)}</dd>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", gap: 12 }}>
                <dt style={{ color: "rgba(255,255,255,.7)" }}>
                  Nisab ({result.standard} standard)
                </dt>
                <dd style={{ margin: 0, fontWeight: 700 }}>
                  {priceReady ? formatMoney(result.nisabUsed, displayCurrency) : "—"}
                </dd>
              </div>
            </dl>

            <div style={{ marginTop: 20, padding: "18px 16px", borderRadius: 14, background: "rgba(255,255,255,.08)", textAlign: "center" }}>
              {!priceReady ? (
                <p style={{ margin: 0, fontSize: ".85rem", color: "rgba(255,255,255,.8)" }}>
                  Waiting for metal prices to determine the nisab…
                </p>
              ) : result.meetsNisab ? (
                <>
                  <p style={{ margin: "0 0 4px", fontSize: ".8rem", color: "rgba(255,255,255,.7)" }}>
                    Zakat due ({ZAKAT_RATE * 100}% of net zakatable wealth)
                  </p>
                  <p style={{ margin: 0, fontSize: "1.9rem", fontWeight: 800, color: "var(--gold-lt)" }}>
                    {formatMoney(result.zakatDue, displayCurrency)}
                  </p>
                </>
              ) : (
                <p style={{ margin: 0, fontSize: ".85rem", color: "rgba(255,255,255,.85)", lineHeight: 1.6 }}>
                  Your net zakatable wealth is below the {result.standard} nisab of{" "}
                  <strong>{formatMoney(result.nisabUsed, displayCurrency)}</strong>, so zakat is not obligatory on it.
                </p>
              )}
            </div>

            <div className="no-print" style={{ display: "grid", gap: 10, marginTop: 18 }}>
              <button
                type="button"
                onClick={() => window.print()}
                style={{ width: "100%", padding: "12px 16px", borderRadius: 50, border: "1px solid rgba(255,255,255,.3)", background: "transparent", color: "#fff", fontWeight: 700, fontSize: ".85rem", cursor: "pointer" }}
              >
                🖨️ Print / save this calculation
              </button>
              <button
                type="button"
                onClick={resetAll}
                style={{ width: "100%", padding: "10px 16px", borderRadius: 50, border: "none", background: "transparent", color: "rgba(255,255,255,.6)", fontWeight: 600, fontSize: ".78rem", cursor: "pointer", textDecoration: "underline" }}
              >
                Clear all amounts &amp; saved data
              </button>
            </div>
            <p style={{ margin: "12px 0 0", fontSize: ".72rem", color: "rgba(255,255,255,.55)", lineHeight: 1.55 }}>
              Everything you enter stays on this device. Amounts are never sent to our servers.
            </p>
          </div>

          {/* Breakdown */}
          <div style={{ marginTop: 20, background: "#fff", border: "1px solid var(--border)", borderRadius: 16, padding: "20px 18px" }}>
            <h4 style={{ fontFamily: "'Playfair Display',serif", fontSize: ".95rem", color: "var(--charcoal)", margin: "0 0 12px" }}>
              How this was calculated
            </h4>
            <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "grid", gap: 8 }}>
              {result.lines
                .filter((l) => l.amount > 0 || l.key === "retirement")
                .map((l) => (
                  <li key={l.key} style={{ fontSize: ".8rem", color: "var(--slate)", lineHeight: 1.5 }}>
                    <span style={{ display: "flex", justifyContent: "space-between", gap: 10 }}>
                      <span>{l.label}</span>
                      <strong>{formatMoney(l.amount, displayCurrency)}</strong>
                    </span>
                    {l.note ? <span style={{ color: "var(--muted)", fontSize: ".72rem" }}>{l.note}</span> : null}
                  </li>
                ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
