"use client";

import { createContext, useContext, useState, useSyncExternalStore, type CSSProperties, type ReactNode } from "react";
import { OFFICIAL_PEGS, type DisplayRates } from "@/lib/currency/rates";
import { formatMoney, formatRateDate } from "@/lib/currency/format";

const STORAGE_KEY = "np-currency";

interface CurrencyContextValue {
  code: string;
  setCode: (code: string) => void;
  rates: DisplayRates;
  defaultCode: string;
}

const CurrencyContext = createContext<CurrencyContextValue | null>(null);

export function useCurrency(): CurrencyContextValue | null {
  return useContext(CurrencyContext);
}

function readSavedCurrency(): string | null {
  try {
    return window.localStorage.getItem(STORAGE_KEY);
  } catch {
    return null;
  }
}

function subscribeToSavedCurrency(onChange: () => void): () => void {
  window.addEventListener("storage", onChange);
  return () => window.removeEventListener("storage", onChange);
}

/**
 * Holds the visitor's display currency for approximate price hints.
 * Server render uses the page's local currency (or USD); a saved choice is
 * read through useSyncExternalStore so server and client markup match.
 */
export function CurrencyProvider({
  defaultCode,
  rates,
  children,
}: {
  defaultCode: string;
  rates: DisplayRates;
  children: ReactNode;
}) {
  const initial = rates.perUsd[defaultCode] ? defaultCode : "USD";
  const saved = useSyncExternalStore(subscribeToSavedCurrency, readSavedCurrency, () => null);
  const [chosen, setChosen] = useState<string | null>(null);
  const isUsable = (value: string | null): value is string =>
    Boolean(value && (value === "USD" || rates.perUsd[value]));
  const code = isUsable(chosen) ? chosen : isUsable(saved) ? saved : initial;

  const setCode = (next: string) => {
    setChosen(next);
    try {
      window.localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // Storage unavailable: choice lasts for this page view only.
    }
  };

  return (
    <CurrencyContext.Provider value={{ code, setCode, rates, defaultCode: initial }}>
      {children}
    </CurrencyContext.Provider>
  );
}

/** "≈ £22 / month" next to a USD price; renders nothing when USD is selected. */
export function LocalPrice({
  usd,
  suffix = " / month",
  decimals = 0,
}: {
  usd: number;
  suffix?: string;
  decimals?: number;
}) {
  const currency = useCurrency();
  if (!currency || currency.code === "USD") return null;
  const rate = currency.rates.perUsd[currency.code];
  if (!rate) return null;
  return (
    <>
      ≈ {formatMoney(usd * rate, currency.code, decimals)}
      {suffix}
    </>
  );
}

/** Billing and rate-source note required wherever an approximate price is shown. */
export function PriceDisclosure({ style }: { style?: CSSProperties }) {
  const currency = useCurrency();
  const code = currency?.code ?? "USD";
  const source = currency?.rates.source[code];
  const ecbDate = currency?.rates.ecbDate;

  let sourceNote: ReactNode = null;
  if (code !== "USD" && source === "ecb" && ecbDate) {
    sourceNote = (
      <>
        {" "}
        Converted from{" "}
        <a
          href="https://www.ecb.europa.eu/stats/policy_and_exchange_rates/euro_reference_exchange_rates/html/index.en.html"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "inherit", textDecoration: "underline" }}
        >
          European Central Bank euro reference rates
        </a>{" "}
        ({formatRateDate(ecbDate)}).
      </>
    );
  } else if (code !== "USD" && source === "peg") {
    sourceNote = ` Converted at the official USD peg set by the ${OFFICIAL_PEGS[code].issuer}.`;
  }

  return (
    <p style={style}>
      {code === "USD"
        ? "Prices are shown in US dollars (USD), the currency plans are billed in."
        : "Local amounts are approximate. Plans are billed in US dollars (USD)."}{" "}
      Your bank or card provider converts at its own rate and may charge fees.
      {sourceNote}
    </p>
  );
}
