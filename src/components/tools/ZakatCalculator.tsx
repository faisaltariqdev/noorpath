"use client";

import React, { useCallback, useEffect, useMemo, useState } from "react";
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
import {
  Banknote,
  Building2,
  Check,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  Coins,
  Copy,
  Gem,
  HelpCircle,
  Info,
  Lock,
  Printer,
  Receipt,
  RefreshCw,
  RotateCcw,
  Scale,
  ShieldCheck,
  Sparkles,
  TrendingUp,
  Wallet,
  X,
} from "lucide-react";

const CURRENCIES = [
  "USD", "GBP", "EUR", "CAD", "AUD", "PKR", "INR", "AED", "SAR", "QAR",
  "KWD", "MYR", "SGD", "ZAR", "BDT", "TRY", "NOK", "SEK", "DKK", "NZD",
] as const;

const CURRENCY_INFO: Record<
  string,
  { symbol: string; flag: string; name: string }
> = {
  USD: { symbol: "$", flag: "🇺🇸", name: "US Dollar" },
  GBP: { symbol: "£", flag: "🇬🇧", name: "British Pound" },
  EUR: { symbol: "€", flag: "🇪🇺", name: "Euro" },
  CAD: { symbol: "$", flag: "🇨🇦", name: "Canadian Dollar" },
  AUD: { symbol: "$", flag: "🇦🇺", name: "Australian Dollar" },
  PKR: { symbol: "₨", flag: "🇵🇰", name: "Pakistani Rupee" },
  INR: { symbol: "₹", flag: "🇮🇳", name: "Indian Rupee" },
  AED: { symbol: "AED", flag: "🇦🇪", name: "UAE Dirham" },
  SAR: { symbol: "SAR", flag: "🇸🇦", name: "Saudi Riyal" },
  QAR: { symbol: "QAR", flag: "🇶🇦", name: "Qatari Riyal" },
  KWD: { symbol: "KD", flag: "🇰🇼", name: "Kuwaiti Dinar" },
  MYR: { symbol: "RM", flag: "🇲🇾", name: "Malaysian Ringgit" },
  SGD: { symbol: "$", flag: "🇸🇬", name: "Singapore Dollar" },
  ZAR: { symbol: "R", flag: "🇿🇦", name: "South African Rand" },
  BDT: { symbol: "৳", flag: "🇧🇩", name: "Bangladeshi Taka" },
  TRY: { symbol: "₺", flag: "🇹🇷", name: "Turkish Lira" },
  NOK: { symbol: "kr", flag: "🇳🇴", name: "Norwegian Krone" },
  SEK: { symbol: "kr", flag: "🇸🇪", name: "Swedish Krona" },
  DKK: { symbol: "kr", flag: "🇩🇰", name: "Danish Krone" },
  NZD: { symbol: "$", flag: "🇳🇿", name: "New Zealand Dollar" },
};

const STORAGE_KEY = "noorpath-zakat-calculator-v1";

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

function InputField({
  label,
  value,
  onChange,
  hint,
  currencySymbol,
  unit,
  step = "any",
}: {
  label: string;
  value: number;
  onChange: (n: number) => void;
  hint?: string;
  currencySymbol?: string;
  unit?: string;
  step?: string;
}) {
  return (
    <div className="relative">
      <label className="block text-xs font-bold text-[var(--slate)] mb-1.5 uppercase tracking-wide">
        {label}
      </label>
      <div className="relative flex items-center">
        {currencySymbol && (
          <span className="absolute left-3.5 text-xs font-bold text-[var(--muted)] pointer-events-none select-none">
            {currencySymbol}
          </span>
        )}
        <input
          type="number"
          min={0}
          step={step}
          inputMode="decimal"
          value={value === 0 ? "" : value}
          placeholder="0"
          onChange={(e) =>
            onChange(e.target.value === "" ? 0 : Number(e.target.value))
          }
          className={`w-full py-2.5 rounded-xl border border-[var(--border)] bg-white text-[0.95rem] font-semibold text-[var(--charcoal)] transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-[var(--emerald)] focus:border-transparent ${
            currencySymbol ? "pl-9" : "pl-3.5"
          } ${unit || value > 0 ? "pr-12" : "pr-3.5"}`}
        />
        {unit && (
          <span className="absolute right-3.5 text-xs font-semibold text-[var(--muted)] pointer-events-none select-none">
            {unit}
          </span>
        )}
        {value > 0 && !unit && (
          <button
            type="button"
            onClick={() => onChange(0)}
            aria-label="Clear field"
            className="absolute right-3 text-[var(--muted)] hover:text-[var(--charcoal)] p-1 rounded-full hover:bg-[rgba(0,0,0,0.05)] transition-colors"
          >
            <X size={14} />
          </button>
        )}
      </div>
      {hint && (
        <p className="text-[0.74rem] text-[var(--muted)] mt-1.5 leading-relaxed">
          {hint}
        </p>
      )}
    </div>
  );
}

function StepCard({
  step,
  title,
  icon,
  subtotal,
  badgeText,
  children,
}: {
  step: number;
  title: string;
  icon: React.ReactNode;
  subtotal?: string;
  badgeText?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="bg-white border border-[var(--border)] rounded-2xl p-5 sm:p-6 shadow-[var(--shadow-sm)] transition-shadow hover:shadow-[var(--shadow-md)]">
      <div className="flex flex-wrap items-center justify-between gap-3 mb-5 pb-3.5 border-b border-[rgba(10,110,79,0.08)]">
        <div className="flex items-center gap-3">
          <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-[var(--emerald)] text-white text-xs font-extrabold shadow-sm">
            {step}
          </span>
          <div className="flex items-center gap-2">
            <span className="text-[var(--emerald)]">{icon}</span>
            <h3 className="font-serif text-[1.1rem] font-bold text-[var(--charcoal)] m-0">
              {title}
            </h3>
          </div>
          {badgeText && (
            <span className="hidden sm:inline-block text-[0.7rem] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md bg-[rgba(201,146,42,0.12)] text-[var(--gold)]">
              {badgeText}
            </span>
          )}
        </div>
        {subtotal && (
          <span className="text-xs font-extrabold text-[var(--emerald)] bg-[rgba(10,110,79,0.08)] px-3 py-1 rounded-full border border-[rgba(10,110,79,0.15)] animate-fade-in">
            Subtotal: {subtotal}
          </span>
        )}
      </div>
      <div className="grid gap-4 sm:gap-5">{children}</div>
    </div>
  );
}

export default function ZakatCalculator() {
  const [inputs, setInputs] = useState<ZakatInputs>(EMPTY_INPUTS);
  const [currency, setCurrency] = useState<string>("USD");
  const [standard, setStandard] = useState<NisabStandard>("silver");
  const [priceState, setPriceState] = useState<{
    forCurrency: string;
    data: MetalPrices | null;
    error: boolean;
    loading: boolean;
  }>({ forCurrency: "USD", data: null, error: false, loading: true });

  const [manualGold, setManualGold] = useState(0);
  const [manualSilver, setManualSilver] = useState(0);
  const [restored, setRestored] = useState(false);
  const [copied, setCopied] = useState(false);

  // Karat helper state
  const [showKaratHelper, setShowKaratHelper] = useState(false);
  const [karatGrams, setKaratGrams] = useState(0);
  const [karatPurity, setKaratPurity] = useState<number>(21);

  // Restore last session
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
        // Ignore corrupt data
      }
      setRestored(true);
    }, 0);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!restored) return;
    try {
      window.localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify({ inputs, currency, standard } satisfies Saved)
      );
    } catch {
      // Ignore private storage restriction
    }
  }, [inputs, currency, standard, restored]);

  const fetchPrices = useCallback((curr: string) => {
    setPriceState((prev) => ({ ...prev, forCurrency: curr, loading: true, error: false }));
    let cancelled = false;
    fetch(`/api/nisab?currency=${curr}`)
      .then((r) => (r.ok ? r.json() : Promise.reject()))
      .then((data: MetalPrices) => {
        if (!cancelled) {
          setPriceState({ forCurrency: curr, data, error: false, loading: false });
        }
      })
      .catch(() => {
        if (!cancelled) {
          setPriceState({ forCurrency: curr, data: null, error: true, loading: false });
        }
      });
    return () => {
      cancelled = true;
    };
  }, []);

  useEffect(() => {
    return fetchPrices(currency);
  }, [currency, fetchPrices]);

  const prices = priceState.forCurrency === currency ? priceState.data : null;
  const priceError = priceState.forCurrency === currency && priceState.error;
  const priceLoading = priceState.forCurrency === currency && priceState.loading;

  const effectivePrices: MetalPrices = useMemo(() => {
    if (prices && prices.currency === currency) return prices;
    if (prices) return prices;
    return {
      goldPerGram: manualGold,
      silverPerGram: manualSilver,
      currency,
      asOf: new Date().toISOString(),
    };
  }, [prices, currency, manualGold, manualSilver]);

  const result = useMemo(
    () => calculateZakat(inputs, effectivePrices, standard),
    [inputs, effectivePrices, standard]
  );

  const resetAll = useCallback(() => {
    setInputs(EMPTY_INPUTS);
    try {
      window.localStorage.removeItem(STORAGE_KEY);
    } catch {
      // Nothing to clear
    }
  }, []);

  const set = useCallback(
    <K extends keyof ZakatInputs>(key: K) =>
      (value: ZakatInputs[K]) =>
        setInputs((prev) => ({ ...prev, [key]: value })),
    []
  );

  const displayCurrency = effectivePrices.currency;
  const currInfo = CURRENCY_INFO[displayCurrency] ?? {
    symbol: displayCurrency,
    flag: "🌐",
    name: displayCurrency,
  };

  const priceReady =
    effectivePrices.goldPerGram > 0 && effectivePrices.silverPerGram > 0;
  const hasEntries = result.totalAssets > 0 || result.deductions > 0;

  const subtotalFor = (...keys: string[]) => {
    const sum = result.lines
      .filter((l) => keys.includes(l.key))
      .reduce((s, l) => s + l.amount, 0);
    return sum > 0 ? formatMoney(sum, displayCurrency) : undefined;
  };

  const nisabProgress =
    priceReady && result.nisabUsed > 0
      ? Math.min((result.netZakatable / result.nisabUsed) * 100, 100)
      : 0;

  // Karat helper calculation
  const calculatedPureGrams = useMemo(() => {
    if (karatGrams <= 0) return 0;
    return Math.round(((karatGrams * karatPurity) / 24) * 100) / 100;
  }, [karatGrams, karatPurity]);

  const applyKaratGrams = () => {
    if (calculatedPureGrams > 0) {
      set("goldGrams")(
        Math.round((inputs.goldGrams + calculatedPureGrams) * 100) / 100
      );
      setKaratGrams(0);
      setShowKaratHelper(false);
    }
  };

  const handleCopySummary = () => {
    const summaryText = `NoorPath Zakat Statement (${new Date().toLocaleDateString()})
Currency: ${displayCurrency}
Nisab Standard: ${standard.toUpperCase()} (${formatMoney(result.nisabUsed, displayCurrency)})
--------------------------------------
Total Zakatable Assets: ${formatMoney(result.totalAssets, displayCurrency)}
Deductible Debts: − ${formatMoney(result.deductions, displayCurrency)}
Net Zakatable Wealth: ${formatMoney(result.netZakatable, displayCurrency)}
--------------------------------------
Zakat Status: ${result.meetsNisab ? "OBLIGATORY (2.5%)" : "BELOW NISAB"}
Zakat Payable: ${formatMoney(result.zakatDue, displayCurrency)}
Calculated privately via https://www.noorpath.online/tools/zakat-calculator`;

    navigator.clipboard.writeText(summaryText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="zakat-calc-root">
      {/* ── Top Bar / Settings ─────────────────────────────────────── */}
      <div className="bg-white border border-[var(--border)] rounded-2xl p-4 sm:p-5 mb-8 shadow-[var(--shadow-sm)]">
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
          {/* Left: Currency & Nisab standard selector */}
          <div className="flex flex-wrap items-center gap-3 sm:gap-4">
            <div>
              <label className="block text-[0.72rem] font-bold text-[var(--muted)] uppercase tracking-wider mb-1">
                Currency
              </label>
              <div className="relative">
                <select
                  value={currency}
                  onChange={(e) => setCurrency(e.target.value)}
                  className="appearance-none bg-[var(--ivory)] border border-[var(--border)] rounded-xl py-2 pl-3.5 pr-8 text-sm font-bold text-[var(--charcoal)] cursor-pointer focus:outline-none focus:ring-2 focus:ring-[var(--emerald)]"
                >
                  {CURRENCIES.map((c) => (
                    <option key={c} value={c}>
                      {CURRENCY_INFO[c]?.flag} {c} ({CURRENCY_INFO[c]?.symbol})
                    </option>
                  ))}
                </select>
                <ChevronDown
                  size={14}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-[var(--muted)] pointer-events-none"
                />
              </div>
            </div>

            <div>
              <span className="block text-[0.72rem] font-bold text-[var(--muted)] uppercase tracking-wider mb-1">
                Nisab Standard
              </span>
              <div className="inline-flex p-1 bg-[var(--ivory)] border border-[var(--border)] rounded-xl">
                {(["silver", "gold"] as const).map((s) => (
                  <button
                    key={s}
                    type="button"
                    onClick={() => setStandard(s)}
                    className={`px-3 sm:px-4 py-1.5 rounded-lg text-xs font-extrabold transition-all duration-150 ${
                      standard === s
                        ? "bg-[var(--emerald)] text-white shadow-sm"
                        : "text-[var(--slate)] hover:text-[var(--charcoal)]"
                    }`}
                  >
                    {s === "silver" ? (
                      <span className="flex items-center gap-1.5">
                        <span>Silver ({NISAB_GRAMS.silver}g)</span>
                        <span className="hidden sm:inline text-[0.65rem] bg-[rgba(255,255,255,0.25)] px-1 rounded">
                          Recommended
                        </span>
                      </span>
                    ) : (
                      <span>Gold ({NISAB_GRAMS.gold}g)</span>
                    )}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Live Market Prices Badge */}
          <div className="flex items-center justify-between md:justify-end gap-3 pt-3 md:pt-0 border-t md:border-t-0 border-[rgba(0,0,0,0.06)]">
            {prices && priceReady ? (
              <div className="flex flex-col md:items-end text-xs text-[var(--slate)]">
                <div className="flex items-center gap-1.5 font-bold text-[var(--emerald)]">
                  <span className="w-2 h-2 rounded-full bg-[var(--emerald)] animate-pulse" />
                  <span>Live Spot Rates ({prices.currency})</span>
                </div>
                <div className="text-[0.74rem] text-[var(--muted)] font-medium mt-0.5">
                  Gold: {formatMoney(prices.goldPerGram, prices.currency)}/g ·
                  Silver: {formatMoney(prices.silverPerGram, prices.currency)}/g
                </div>
              </div>
            ) : priceLoading ? (
              <div className="flex items-center gap-2 text-xs text-[var(--muted)]">
                <RefreshCw size={13} className="animate-spin text-[var(--emerald)]" />
                <span>Fetching live gold &amp; silver prices…</span>
              </div>
            ) : priceError ? (
              <div className="text-xs text-amber-700 bg-amber-50 px-2.5 py-1 rounded-lg border border-amber-200">
                <span>Manual price entry active</span>
              </div>
            ) : null}

            <button
              type="button"
              onClick={() => fetchPrices(currency)}
              title="Refresh live prices"
              aria-label="Refresh live prices"
              className="p-2 rounded-xl text-[var(--muted)] hover:text-[var(--emerald)] hover:bg-[rgba(10,110,79,0.08)] transition-colors"
            >
              <RefreshCw size={15} />
            </button>
          </div>
        </div>

        {/* Manual Price Override in case upstream rate is missing */}
        {priceError && (
          <div className="mt-4 p-3.5 rounded-xl bg-amber-50/70 border border-amber-200/80 text-xs text-amber-900">
            <p className="font-bold mb-2">
              ⚠️ Live market feed was unavailable. Please enter today&apos;s
              local metal price per gram:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-md">
              <InputField
                label={`Gold price / gram (${currency})`}
                value={manualGold}
                onChange={setManualGold}
                currencySymbol={currInfo.symbol}
              />
              <InputField
                label={`Silver price / gram (${currency})`}
                value={manualSilver}
                onChange={setManualSilver}
                currencySymbol={currInfo.symbol}
              />
            </div>
          </div>
        )}
      </div>

      {/* ── Main Layout: Inputs on Left, Sticky Summary on Right ────── */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column (Inputs) */}
        <div className="lg:col-span-7 xl:col-span-8 grid gap-6">
          {/* 1. Cash & Bank */}
          <StepCard
            step={1}
            title="Cash & Liquid Balances"
            icon={<Banknote size={20} />}
            subtotal={subtotalFor("cash", "bank")}
          >
            <InputField
              label={`Cash in Hand (${displayCurrency})`}
              value={inputs.cashInHand}
              onChange={set("cashInHand")}
              currencySymbol={currInfo.symbol}
              hint="Physical cash, wallet balances, and ready funds at home."
            />
            <InputField
              label={`Bank Accounts & Savings (${displayCurrency})`}
              value={inputs.bankAccounts}
              onChange={set("bankAccounts")}
              currencySymbol={currInfo.symbol}
              hint="Checking, savings accounts, digital wallets (PayPal, Wise), and short-term deposits."
            />
          </StepCard>

          {/* 2. Gold & Silver with Karat Converter */}
          <StepCard
            step={2}
            title="Gold & Silver"
            icon={<Coins size={20} />}
            subtotal={subtotalFor("gold", "silver")}
            badgeText="Live Valued"
          >
            <div className="bg-[var(--ivory)] border border-[var(--border)] rounded-xl p-3.5 text-xs text-[var(--slate)]">
              <div className="flex items-center justify-between">
                <span className="font-bold flex items-center gap-1.5 text-[var(--charcoal)]">
                  <Sparkles size={14} className="text-[var(--gold)]" />
                  Have 21K, 22K or 18K Jewelry?
                </span>
                <button
                  type="button"
                  onClick={() => setShowKaratHelper(!showKaratHelper)}
                  className="text-[var(--emerald)] font-bold hover:underline"
                >
                  {showKaratHelper ? "Hide Converter ▲" : "Open Purity Converter ▼"}
                </button>
              </div>

              {showKaratHelper && (
                <div className="mt-3 pt-3 border-t border-[rgba(0,0,0,0.08)] grid gap-2.5">
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                    <div>
                      <label className="block text-[0.7rem] font-bold text-[var(--muted)] mb-1">
                        Jewelry Weight (g)
                      </label>
                      <input
                        type="number"
                        min={0}
                        step="any"
                        value={karatGrams === 0 ? "" : karatGrams}
                        placeholder="e.g. 50"
                        onChange={(e) =>
                          setKaratGrams(
                            e.target.value === "" ? 0 : Number(e.target.value)
                          )
                        }
                        className="w-full py-1.5 px-2.5 rounded-lg border border-[var(--border)] bg-white text-xs font-semibold"
                      />
                    </div>
                    <div>
                      <label className="block text-[0.7rem] font-bold text-[var(--muted)] mb-1">
                        Purity / Karat
                      </label>
                      <select
                        value={karatPurity}
                        onChange={(e) => setKaratPurity(Number(e.target.value))}
                        className="w-full py-1.5 px-2 rounded-lg border border-[var(--border)] bg-white text-xs font-semibold"
                      >
                        <option value={24}>24K (99.9% Pure)</option>
                        <option value={22}>22K (91.7% Pure)</option>
                        <option value={21}>21K (87.5% Pure)</option>
                        <option value={18}>18K (75.0% Pure)</option>
                        <option value={14}>14K (58.3% Pure)</option>
                      </select>
                    </div>
                    <div className="col-span-2 sm:col-span-1 flex items-end">
                      <button
                        type="button"
                        onClick={applyKaratGrams}
                        disabled={calculatedPureGrams <= 0}
                        className="w-full py-1.5 px-3 rounded-lg bg-[var(--emerald)] text-white text-xs font-bold disabled:opacity-50 disabled:cursor-not-allowed hover:bg-[var(--emerald-dk)] transition-colors"
                      >
                        + Add {calculatedPureGrams}g (24K)
                      </button>
                    </div>
                  </div>
                  <p className="text-[0.7rem] text-[var(--muted)]">
                    Calculates 24k fine equivalent ({karatGrams || 0}g ×{" "}
                    {karatPurity}/24 = {calculatedPureGrams}g pure gold).
                  </p>
                </div>
              )}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <InputField
                label="Gold Owned (grams)"
                value={inputs.goldGrams}
                onChange={set("goldGrams")}
                unit="grams"
                hint="Valued automatically at today's pure gold market price."
              />
              <InputField
                label={`Direct Gold Value (${displayCurrency})`}
                value={inputs.goldValueDirect}
                onChange={set("goldValueDirect")}
                currencySymbol={currInfo.symbol}
                hint="Alternative: enter direct jeweller/appraisal valuation."
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <InputField
                label="Silver Owned (grams)"
                value={inputs.silverGrams}
                onChange={set("silverGrams")}
                unit="grams"
                hint="Valued automatically at today's silver market price."
              />
              <InputField
                label={`Direct Silver Value (${displayCurrency})`}
                value={inputs.silverValueDirect}
                onChange={set("silverValueDirect")}
                currencySymbol={currInfo.symbol}
                hint="Alternative: enter direct valuation of silver bullion/items."
              />
            </div>
          </StepCard>

          {/* 3. Investments */}
          <StepCard
            step={3}
            title="Stocks, Crypto &amp; Investments"
            icon={<TrendingUp size={20} />}
            subtotal={subtotalFor("stocks", "crypto", "rsu")}
          >
            <InputField
              label={`Shares, Funds & ETFs — Market Value (${displayCurrency})`}
              value={inputs.stocksValue}
              onChange={set("stocksValue")}
              currencySymbol={currInfo.symbol}
              hint="Current total market value of active trading shares or ETF holdings on your zakat date."
            />
            <InputField
              label={`Cryptocurrency Holdings (${displayCurrency})`}
              value={inputs.cryptoValue}
              onChange={set("cryptoValue")}
              currencySymbol={currInfo.symbol}
              hint="Market value of BTC, ETH, stablecoins and altcoins held as investments."
            />
            <InputField
              label={`Vested RSU Shares (${displayCurrency})`}
              value={inputs.rsuVestedValue}
              onChange={set("rsuVestedValue")}
              currencySymbol={currInfo.symbol}
              hint="Only count shares that have officially vested. Unvested shares are not yet owned."
            />
          </StepCard>

          {/* 4. Retirement Accounts */}
          <StepCard
            step={4}
            title="Retirement Accounts (401k / IRA / Pension)"
            icon={<Building2 size={20} />}
            subtotal={subtotalFor("retirement")}
          >
            <div>
              <span className="block text-xs font-bold text-[var(--slate)] mb-2 uppercase tracking-wide">
                Scholarly Position to Apply
              </span>
              <div className="grid gap-2.5">
                {[
                  {
                    value: "excluded" as RetirementMethod,
                    title: "Position 1: Exclude Until Accessible (Majority View)",
                    desc: "Locked funds behind an early-withdrawal penalty are not in full constructive possession. Zakat is paid once accessible.",
                  },
                  {
                    value: "netWithdrawable" as RetirementMethod,
                    title: "Position 2: Pay Annually on Net Withdrawable (FCNA 2024)",
                    desc: "Zakat is calculated each year on the net amount you could withdraw today (Balance minus penalty minus taxes).",
                  },
                ].map((pos) => (
                  <label
                    key={pos.value}
                    className={`flex items-start gap-3 p-3.5 rounded-xl border cursor-pointer transition-all ${
                      inputs.retirementMethod === pos.value
                        ? "bg-[rgba(10,110,79,0.04)] border-[var(--emerald)] shadow-sm"
                        : "bg-white border-[var(--border)] hover:bg-[var(--ivory)]"
                    }`}
                  >
                    <input
                      type="radio"
                      name="retirement-method"
                      checked={inputs.retirementMethod === pos.value}
                      onChange={() => set("retirementMethod")(pos.value)}
                      className="mt-1 text-[var(--emerald)] focus:ring-[var(--emerald)]"
                    />
                    <div>
                      <div className="text-xs font-bold text-[var(--charcoal)]">
                        {pos.title}
                      </div>
                      <div className="text-[0.74rem] text-[var(--muted)] mt-0.5 leading-relaxed">
                        {pos.desc}
                      </div>
                    </div>
                  </label>
                ))}
              </div>
            </div>

            {inputs.retirementMethod === "netWithdrawable" && (
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 pt-2 border-t border-[rgba(0,0,0,0.06)] animate-fade-in">
                <InputField
                  label={`Total Balance (${displayCurrency})`}
                  value={inputs.retirementBalance}
                  onChange={set("retirementBalance")}
                  currencySymbol={currInfo.symbol}
                />
                <InputField
                  label="Early Penalty %"
                  value={inputs.retirementPenaltyPct}
                  onChange={set("retirementPenaltyPct")}
                  unit="%"
                  hint="Standard IRS penalty is 10% in USA."
                />
                <InputField
                  label="Estimated Tax %"
                  value={inputs.retirementTaxPct}
                  onChange={set("retirementTaxPct")}
                  unit="%"
                  hint="Your estimated marginal tax bracket (e.g. 20–25%)."
                />
              </div>
            )}
          </StepCard>

          {/* 5. Business & Debts */}
          <StepCard
            step={5}
            title="Business Stock, Receivables &amp; Debts"
            icon={<Receipt size={20} />}
            subtotal={subtotalFor("business", "owed")}
          >
            <InputField
              label={`Business Merchandise &amp; Cash (${displayCurrency})`}
              value={inputs.businessAssets}
              onChange={set("businessAssets")}
              currencySymbol={currInfo.symbol}
              hint="Finished inventory at retail selling price, trade cash, and collectible trade invoices. Fixed assets/tools are exempt."
            />
            <InputField
              label={`Money Owed to You (Strong Loans) (${displayCurrency})`}
              value={inputs.moneyOwedToYou}
              onChange={set("moneyOwedToYou")}
              currencySymbol={currInfo.symbol}
              hint="Money you loaned to others that you confidently expect to be repaid."
            />
            <div className="pt-2 border-t border-[rgba(0,0,0,0.06)]">
              <InputField
                label={`Deductible Immediate Debts Due Now (${displayCurrency})`}
                value={inputs.debtsDueNow}
                onChange={set("debtsDueNow")}
                currencySymbol={currInfo.symbol}
                hint="Deduct bills, unpaid rent, credit cards, and upcoming monthly mortgage/car instalments due now — NOT the entire multi-year mortgage principal."
              />
            </div>
          </StepCard>
        </div>

        {/* Right Column: Luxury Summary Card (Sticky) */}
        <div className="lg:col-span-5 xl:col-span-4 sticky top-24">
          <div
            className="rounded-3xl p-6 sm:p-7 text-white relative overflow-hidden shadow-2xl"
            style={{
              background:
                "linear-gradient(145deg, #041f14 0%, #083422 50%, #0d4a30 100%)",
              border: "1.5px solid rgba(232, 184, 75, 0.3)",
            }}
          >
            {/* Subtle background glow */}
            <div
              className="absolute -top-24 -right-24 w-48 h-48 rounded-full pointer-events-none"
              style={{
                background:
                  "radial-gradient(circle, rgba(201, 146, 42, 0.25) 0%, rgba(0,0,0,0) 70%)",
              }}
            />

            <div className="flex items-center justify-between gap-2 mb-4 pb-3 border-b border-[rgba(255,255,255,0.12)]">
              <div className="flex items-center gap-2">
                <Scale size={18} className="text-[var(--gold-lt)]" />
                <h3 className="font-serif text-lg font-bold text-white m-0">
                  Zakat Summary
                </h3>
              </div>
              <span className="text-[0.72rem] font-extrabold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-[rgba(255,255,255,0.12)] text-[var(--gold-lt)]">
                {displayCurrency}
              </span>
            </div>

            {/* Financial Ledger Breakdown */}
            <dl className="space-y-2.5 text-xs sm:text-[0.82rem] m-0 mb-5">
              <div className="flex justify-between items-center">
                <dt className="text-white/70">Total Zakatable Assets</dt>
                <dd className="font-bold text-white m-0">
                  {formatMoney(result.totalAssets, displayCurrency)}
                </dd>
              </div>
              <div className="flex justify-between items-center text-amber-200/90">
                <dt>Deductible Debts Due</dt>
                <dd className="font-bold m-0">
                  − {formatMoney(result.deductions, displayCurrency)}
                </dd>
              </div>
              <div className="flex justify-between items-center pt-2.5 border-t border-white/10 font-bold">
                <dt className="text-white/80">Net Zakatable Wealth</dt>
                <dd className="text-white text-sm m-0">
                  {formatMoney(result.netZakatable, displayCurrency)}
                </dd>
              </div>
              <div className="flex justify-between items-center text-white/70">
                <dt>
                  Nisab Threshold ({result.standard === "silver" ? "Silver" : "Gold"})
                </dt>
                <dd className="font-semibold text-white/90 m-0">
                  {priceReady
                    ? formatMoney(result.nisabUsed, displayCurrency)
                    : "Calculating…"}
                </dd>
              </div>
            </dl>

            {/* Nisab Progress Bar */}
            {priceReady && hasEntries && (
              <div className="mb-5 bg-black/20 p-3 rounded-xl border border-white/10">
                <div className="flex justify-between text-[0.7rem] font-bold mb-1.5">
                  <span className="text-white/70">Nisab Threshold Meter</span>
                  <span
                    className={
                      result.meetsNisab ? "text-[var(--gold-lt)]" : "text-white/60"
                    }
                  >
                    {result.meetsNisab
                      ? "Threshold Met (100%+)"
                      : `${Math.round(nisabProgress)}% of Nisab`}
                  </span>
                </div>
                <div className="h-2 w-full bg-white/15 rounded-full overflow-hidden">
                  <div
                    className={`h-full rounded-full transition-all duration-500 ${
                      result.meetsNisab
                        ? "bg-gradient-to-r from-[var(--gold)] to-[var(--gold-lt)]"
                        : "bg-white/50"
                    }`}
                    style={{ width: `${nisabProgress}%` }}
                  />
                </div>
              </div>
            )}

            {/* Final Big Result Banner */}
            <div
              className="p-4 rounded-2xl text-center mb-5 transition-all"
              style={{
                background: result.meetsNisab
                  ? "linear-gradient(135deg, rgba(201, 146, 42, 0.25) 0%, rgba(10, 110, 79, 0.35) 100%)"
                  : "rgba(255, 255, 255, 0.08)",
                border: result.meetsNisab
                  ? "1.5px solid rgba(232, 184, 75, 0.5)"
                  : "1px solid rgba(255, 255, 255, 0.15)",
              }}
            >
              {!priceReady ? (
                <p className="m-0 text-xs text-white/80">
                  Connecting to live metal rates…
                </p>
              ) : !hasEntries ? (
                <div className="text-xs text-white/80 leading-relaxed py-1">
                  👋 Enter your assets on the left — your zakat will compute here
                  instantaneously.
                </div>
              ) : result.meetsNisab ? (
                <div>
                  <span className="inline-flex items-center gap-1.5 text-[0.7rem] font-extrabold uppercase tracking-widest text-[var(--gold-lt)] bg-black/30 px-3 py-1 rounded-full mb-2">
                    <CheckCircle2 size={13} className="text-[var(--gold-lt)]" />
                    Zakat is Obligatory (Fard)
                  </span>
                  <div className="text-2xl sm:text-3xl font-extrabold text-[var(--gold-lt)] tracking-tight">
                    {formatMoney(result.zakatDue, displayCurrency)}
                  </div>
                  <p className="text-[0.72rem] text-white/70 mt-1.5 m-0">
                    Exact 2.5% of net wealth held for one full lunar year (Hawl).
                  </p>
                </div>
              ) : (
                <div className="py-1">
                  <span className="inline-block text-xs font-bold text-amber-200 mb-1">
                    Below Nisab Threshold
                  </span>
                  <p className="text-xs text-white/75 m-0 leading-relaxed">
                    Net wealth is currently below the {result.standard} nisab of{" "}
                    <strong>
                      {formatMoney(result.nisabUsed, displayCurrency)}
                    </strong>
                    . Zakat is not due until this threshold is reached.
                  </p>
                </div>
              )}
            </div>

            {/* Action Buttons */}
            <div className="grid grid-cols-2 gap-2.5 no-print mb-4">
              <button
                type="button"
                onClick={handleCopySummary}
                className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-xs font-bold text-white transition-colors"
              >
                {copied ? <Check size={14} className="text-green-300" /> : <Copy size={14} />}
                <span>{copied ? "Copied!" : "Copy Summary"}</span>
              </button>
              <button
                type="button"
                onClick={() => window.print()}
                className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-[var(--gold)] hover:bg-[var(--gold-lt)] text-[var(--charcoal)] text-xs font-extrabold transition-colors shadow-sm"
              >
                <Printer size={14} />
                <span>Print PDF</span>
              </button>
            </div>

            <div className="flex items-center justify-between text-[0.72rem] text-white/60 pt-3 border-t border-white/10">
              <span className="flex items-center gap-1">
                <ShieldCheck size={13} className="text-[var(--emerald-lt)]" />
                100% Client-Side Privacy
              </span>
              <button
                type="button"
                onClick={resetAll}
                className="text-white/60 hover:text-white underline"
              >
                Reset All
              </button>
            </div>
          </div>

          {/* Itemized Calculation Ledger */}
          {hasEntries && (
            <div className="mt-5 bg-white border border-[var(--border)] rounded-2xl p-4 sm:p-5 shadow-[var(--shadow-sm)]">
              <h4 className="font-serif text-sm font-bold text-[var(--charcoal)] mb-3 pb-2 border-b border-[rgba(0,0,0,0.06)] flex items-center justify-between">
                <span>Calculated Line Items</span>
                <span className="text-xs font-sans text-[var(--muted)] font-normal">
                  {result.lines.filter((l) => l.amount > 0).length} items active
                </span>
              </h4>
              <ul className="space-y-2 m-0 p-0 list-none text-xs">
                {result.lines
                  .filter((l) => l.amount > 0 || l.key === "retirement")
                  .map((l) => (
                    <li
                      key={l.key}
                      className="flex flex-col py-1 border-b border-[rgba(0,0,0,0.04)] last:border-none"
                    >
                      <div className="flex justify-between items-center">
                        <span className="text-[var(--slate)] font-medium">
                          {l.label}
                        </span>
                        <strong className="text-[var(--charcoal)]">
                          {formatMoney(l.amount, displayCurrency)}
                        </strong>
                      </div>
                      {l.note && (
                        <span className="text-[0.68rem] text-[var(--muted)] mt-0.5 italic">
                          {l.note}
                        </span>
                      )}
                    </li>
                  ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
