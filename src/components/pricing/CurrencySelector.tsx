"use client";

import { useId, type CSSProperties } from "react";
import { useCurrency } from "@/components/pricing/LocalPrice";

/** Manual display-currency choice; lists only currencies with a licence-clear rate, plus USD. */
export default function CurrencySelector({ style }: { style?: CSSProperties }) {
  const currency = useCurrency();
  const id = useId();
  if (!currency) return null;

  const others = Object.keys(currency.rates.perUsd)
    .filter((code) => code !== currency.defaultCode)
    .sort();
  const options = Array.from(new Set([currency.defaultCode, "USD", ...others]));

  return (
    <div style={{ display: "inline-flex", alignItems: "center", gap: 8, ...style }}>
      <label htmlFor={id} style={{ fontSize: ".85rem", fontWeight: 600, color: "var(--slate)" }}>
        Show prices in
      </label>
      <select
        id={id}
        value={currency.code}
        onChange={(event) => currency.setCode(event.target.value)}
        style={{
          minHeight: 44,
          padding: "8px 12px",
          borderRadius: 10,
          border: "1px solid var(--border)",
          background: "#fff",
          fontSize: ".9rem",
          fontWeight: 600,
          color: "var(--charcoal)",
        }}
      >
        {options.map((code) => (
          <option key={code} value={code}>
            {code === "USD" ? "USD (billing currency)" : code}
          </option>
        ))}
      </select>
    </div>
  );
}
