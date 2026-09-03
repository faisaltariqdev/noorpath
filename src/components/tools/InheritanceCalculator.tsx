"use client";

import React, { useMemo, useState } from "react";
import Link from "next/link";
import {
  calculateIslamicInheritance,
  DEFAULT_ESTATE,
  DEFAULT_HEIRS,
  type EstateDeductions,
  type FamilyHeirs,
} from "@/lib/tools/inheritanceEngine";
import {
  AlertCircle,
  BookOpen,
  CheckCircle2,
  Coins,
  Copy,
  DollarSign,
  Heart,
  HelpCircle,
  Info,
  Layers,
  Printer,
  Scale,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react";

const CURRENCIES = [
  { code: "USD", symbol: "$", label: "USD ($) - US Dollar" },
  { code: "GBP", symbol: "£", label: "GBP (£) - British Pound" },
  { code: "EUR", symbol: "€", label: "EUR (€) - Euro" },
  { code: "AED", symbol: "AED", label: "AED (د.إ) - UAE Dirham" },
  { code: "SAR", symbol: "SAR", label: "SAR (﷼) - Saudi Riyal" },
  { code: "CAD", symbol: "C$", label: "CAD ($) - Canadian Dollar" },
  { code: "AUD", symbol: "A$", label: "AUD ($) - Australian Dollar" },
  { code: "PKR", symbol: "Rs", label: "PKR (Rs) - Pakistani Rupee" },
  { code: "INR", symbol: "₹", label: "INR (₹) - Indian Rupee" },
];

export default function InheritanceCalculator() {
  const [currency, setCurrency] = useState("USD");
  const [estate, setEstate] = useState<EstateDeductions>(DEFAULT_ESTATE);
  const [heirs, setHeirs] = useState<FamilyHeirs>(DEFAULT_HEIRS);
  const [copied, setCopied] = useState(false);

  const currencySymbol = useMemo(
    () => CURRENCIES.find((c) => c.code === currency)?.symbol || "$",
    [currency]
  );

  const result = useMemo(
    () => calculateIslamicInheritance(estate, heirs),
    [estate, heirs]
  );

  const updateEstate = <K extends keyof EstateDeductions>(key: K, val: number) => {
    setEstate((prev) => ({ ...prev, [key]: val }));
  };

  const updateHeirs = <K extends keyof FamilyHeirs>(key: K, val: FamilyHeirs[K]) => {
    setHeirs((prev) => ({ ...prev, [key]: val }));
  };

  const formatMoney = (val: number) => {
    return `${currencySymbol} ${Math.round(val).toLocaleString()}`;
  };

  const handleCopy = () => {
    const text = `⚖️ Islamic Inheritance (Miras) Distribution Summary
--------------------------------------------------
Gross Estate: ${formatMoney(result.grossEstate)}
Total Deductions (Funeral, Debts, Wasiyyah): ${formatMoney(result.totalDeductions)}
Net Distributable Estate: ${formatMoney(result.netDistributableEstate)}

Heir Shares:
${result.heirShares
  .map(
    (h) =>
      `• ${h.relation} (${h.count}x): ${h.fractionText} -> Total: ${formatMoney(
        h.totalAmountForGroup
      )} (${formatMoney(h.amountPerPerson)}/person)`
  )
  .join("\n")}

Calculated according to Quran (Surah An-Nisa 4:11-12) via https://www.noorpath.online/tools/inheritance-calculator`;

    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="inheritance-calculator-root space-y-8">
      {/* ── Top Header Controls: Currency Selector ──────────────── */}
      <div className="flex flex-wrap items-center justify-between gap-4 p-4 bg-white border border-[var(--border)] rounded-2xl shadow-sm">
        <div className="flex items-center gap-2 text-xs font-bold text-[var(--charcoal)]">
          <Scale size={18} className="text-[var(--emerald)]" />
          <span>Shariah Estate Calculation Engine (Surah An-Nisa 4:11–12)</span>
        </div>

        <div className="flex items-center gap-2">
          <label className="text-xs font-bold text-[var(--slate)]">Currency:</label>
          <select
            value={currency}
            onChange={(e) => setCurrency(e.target.value)}
            className="py-1.5 px-3 rounded-xl border border-[var(--border)] text-xs font-bold bg-[var(--ivory)]"
          >
            {CURRENCIES.map((c) => (
              <option key={c.code} value={c.code}>
                {c.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* ── Main Input & Output Grid ────────────────────────────── */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Estate Assets & Heirs Selection */}
        <div className="lg:col-span-7 space-y-6">
          {/* Card 1: Estate Assets & Obligations Prior to Distribution */}
          <div className="bg-white border border-[var(--border)] rounded-3xl p-6 sm:p-7 shadow-sm">
            <h3 className="font-serif text-lg font-bold text-[var(--charcoal)] mb-2 flex items-center gap-2">
              <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-[var(--emerald)] text-white text-xs font-extrabold">
                1
              </span>
              <span>Total Estate &amp; Prior Obligations (Tajheez &amp; Dayn)</span>
            </h3>
            <p className="text-xs text-[var(--muted)] leading-relaxed mb-4">
              In Islamic law, debts and funeral costs MUST be cleared before any heir receives inheritance.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              <div>
                <label className="block font-bold text-[var(--slate)] mb-1">
                  Total Gross Estate Value ({currencySymbol})
                </label>
                <input
                  type="number"
                  min={0}
                  value={estate.totalGrossEstate || ""}
                  onChange={(e) => updateEstate("totalGrossEstate", Number(e.target.value))}
                  className="w-full py-2.5 px-3.5 rounded-xl border border-[var(--border)] font-bold text-sm text-[var(--charcoal)]"
                  placeholder="e.g. 250000"
                />
              </div>

              <div>
                <label className="block font-bold text-[var(--slate)] mb-1">
                  Funeral &amp; Burial Expenses ({currencySymbol})
                </label>
                <input
                  type="number"
                  min={0}
                  value={estate.funeralExpenses || ""}
                  onChange={(e) => updateEstate("funeralExpenses", Number(e.target.value))}
                  className="w-full py-2.5 px-3.5 rounded-xl border border-[var(--border)] font-bold text-sm text-[var(--charcoal)]"
                  placeholder="e.g. 3000"
                />
              </div>

              <div>
                <label className="block font-bold text-[var(--slate)] mb-1">
                  Outstanding Debts (Dayn) ({currencySymbol})
                </label>
                <input
                  type="number"
                  min={0}
                  value={estate.debtsOwed || ""}
                  onChange={(e) => updateEstate("debtsOwed", Number(e.target.value))}
                  className="w-full py-2.5 px-3.5 rounded-xl border border-[var(--border)] font-bold text-sm text-[var(--charcoal)]"
                  placeholder="e.g. 5000"
                />
              </div>

              <div>
                <label className="block font-bold text-[var(--slate)] mb-1">
                  Non-Heir Bequests (Wasiyyah - Max 1/3)
                </label>
                <input
                  type="number"
                  min={0}
                  value={estate.wasiyyahBequests || ""}
                  onChange={(e) => updateEstate("wasiyyahBequests", Number(e.target.value))}
                  className="w-full py-2.5 px-3.5 rounded-xl border border-[var(--border)] font-bold text-sm text-[var(--charcoal)]"
                  placeholder="e.g. 0"
                />
              </div>
            </div>

            {result.isWasiyyahExceeded && (
              <div className="mt-4 p-3 rounded-xl bg-amber-50 border border-amber-200 text-amber-800 text-xs flex items-start gap-2">
                <AlertCircle size={16} className="shrink-0 mt-0.5" />
                <span>
                  <strong>Shariah Notice:</strong> Wasiyyah (Bequest to non-heirs or charity) is capped at 1/3
                  ({formatMoney(result.wasiyyahCappedAmount)}) as per the Sahih Hadith of Sa&apos;d ibn Abi Waqqas (RA).
                </span>
              </div>
            )}
          </div>

          {/* Card 2: Surviving Heirs & Family Tree */}
          <div className="bg-white border border-[var(--border)] rounded-3xl p-6 sm:p-7 shadow-sm">
            <h3 className="font-serif text-lg font-bold text-[var(--charcoal)] mb-4 flex items-center gap-2">
              <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-[var(--emerald)] text-white text-xs font-extrabold">
                2
              </span>
              <span>Surviving Primary Heirs (Ashab al-Furood &amp; &apos;Asabah)</span>
            </h3>

            {/* Deceased Gender */}
            <div className="mb-4">
              <label className="block text-xs font-bold text-[var(--slate)] uppercase mb-2">
                Deceased Person&apos;s Gender:
              </label>
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => updateHeirs("deceasedGender", "male")}
                  className={`py-2.5 px-4 rounded-xl text-xs font-bold border transition-all ${
                    heirs.deceasedGender === "male"
                      ? "bg-[var(--emerald)] text-white shadow-sm"
                      : "bg-[var(--ivory)] border-[var(--border)] text-[var(--slate)]"
                  }`}
                >
                  Male (Husband / Father)
                </button>
                <button
                  type="button"
                  onClick={() => updateHeirs("deceasedGender", "female")}
                  className={`py-2.5 px-4 rounded-xl text-xs font-bold border transition-all ${
                    heirs.deceasedGender === "female"
                      ? "bg-[var(--emerald)] text-white shadow-sm"
                      : "bg-[var(--ivory)] border-[var(--border)] text-[var(--slate)]"
                  }`}
                >
                  Female (Wife / Mother)
                </button>
              </div>
            </div>

            {/* Spouse */}
            <div className="p-4 rounded-2xl bg-[var(--ivory)] border border-[var(--border)] mb-4 space-y-3">
              <div className="flex justify-between items-center text-xs">
                <span className="font-bold text-[var(--charcoal)]">
                  Surviving {heirs.deceasedGender === "male" ? "Wife / Wives" : "Husband"}?
                </span>
                <input
                  type="checkbox"
                  checked={heirs.hasSpouse}
                  onChange={(e) => updateHeirs("hasSpouse", e.target.checked)}
                  className="w-4 h-4 accent-[var(--emerald)] cursor-pointer"
                />
              </div>

              {heirs.hasSpouse && heirs.deceasedGender === "male" && (
                <div className="pt-2 border-t border-[rgba(0,0,0,0.06)] flex items-center justify-between text-xs">
                  <span className="text-[var(--slate)]">Number of Surviving Wives:</span>
                  <select
                    value={heirs.wifeCount}
                    onChange={(e) => updateHeirs("wifeCount", Number(e.target.value))}
                    className="py-1 px-2.5 rounded-lg border border-[var(--border)] font-bold text-xs"
                  >
                    <option value={1}>1 Wife</option>
                    <option value={2}>2 Wives (Share 1/8 equally)</option>
                    <option value={3}>3 Wives (Share 1/8 equally)</option>
                    <option value={4}>4 Wives (Share 1/8 equally)</option>
                  </select>
                </div>
              )}
            </div>

            {/* Parents */}
            <div className="grid grid-cols-2 gap-3 mb-4">
              <label className="p-3.5 rounded-2xl border border-[var(--border)] bg-[var(--ivory)] flex items-center justify-between text-xs cursor-pointer">
                <span className="font-bold text-[var(--charcoal)]">Father Alive?</span>
                <input
                  type="checkbox"
                  checked={heirs.fatherAlive}
                  onChange={(e) => updateHeirs("fatherAlive", e.target.checked)}
                  className="w-4 h-4 accent-[var(--emerald)]"
                />
              </label>

              <label className="p-3.5 rounded-2xl border border-[var(--border)] bg-[var(--ivory)] flex items-center justify-between text-xs cursor-pointer">
                <span className="font-bold text-[var(--charcoal)]">Mother Alive?</span>
                <input
                  type="checkbox"
                  checked={heirs.motherAlive}
                  onChange={(e) => updateHeirs("motherAlive", e.target.checked)}
                  className="w-4 h-4 accent-[var(--emerald)]"
                />
              </label>
            </div>

            {/* Children (Sons & Daughters) */}
            <div className="p-4 rounded-2xl bg-[var(--ivory)] border border-[var(--border)] space-y-3">
              <div className="font-bold text-xs text-[var(--charcoal)]">Children (Direct Descendants):</div>
              <div className="grid grid-cols-2 gap-3 text-xs">
                <div>
                  <label className="block text-[var(--slate)] mb-1">Number of Sons:</label>
                  <input
                    type="number"
                    min={0}
                    max={20}
                    value={heirs.sonsCount}
                    onChange={(e) => updateHeirs("sonsCount", Math.max(Number(e.target.value), 0))}
                    className="w-full py-2 px-3 rounded-xl border border-[var(--border)] font-bold text-sm"
                  />
                </div>
                <div>
                  <label className="block text-[var(--slate)] mb-1">Number of Daughters:</label>
                  <input
                    type="number"
                    min={0}
                    max={20}
                    value={heirs.daughtersCount}
                    onChange={(e) => updateHeirs("daughtersCount", Math.max(Number(e.target.value), 0))}
                    className="w-full py-2 px-3 rounded-xl border border-[var(--border)] font-bold text-sm"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Inheritance Shares Breakdown Ledger */}
        <div className="lg:col-span-5 space-y-6 sticky top-24">
          <div
            className="rounded-3xl p-6 sm:p-7 text-white relative shadow-2xl overflow-hidden"
            style={{
              background: "linear-gradient(145deg, #032115 0%, #083823 50%, #0d4a30 100%)",
              border: "1.5px solid rgba(232, 184, 75, 0.35)",
            }}
          >
            <div className="flex items-center justify-between gap-2 mb-4 pb-3 border-b border-white/10">
              <div className="flex items-center gap-2">
                <Scale size={20} className="text-[var(--gold-lt)]" />
                <h3 className="font-serif text-lg font-bold text-white m-0">Net Inheritance Pool</h3>
              </div>
              <span className="text-xs font-bold text-[var(--gold-lt)]">{currency}</span>
            </div>

            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 text-center mb-5">
              <div className="text-xs text-white/70 uppercase tracking-widest font-bold mb-1">
                Net Distributable Estate
              </div>
              <div className="text-2xl sm:text-3xl font-extrabold text-[var(--gold-lt)]">
                {formatMoney(result.netDistributableEstate)}
              </div>
              <div className="text-[0.7rem] text-white/70 mt-1">
                Gross: {formatMoney(result.grossEstate)} | Deductions: {formatMoney(result.totalDeductions)}
              </div>
            </div>

            {/* Heirs Table */}
            <div className="space-y-3 mb-5">
              {result.heirShares.map((heir, idx) => (
                <div
                  key={idx}
                  className="p-3 rounded-xl bg-white/10 border border-white/10 flex flex-col justify-between gap-1 text-xs"
                >
                  <div className="flex justify-between items-center">
                    <span className="font-bold text-white">{heir.relation}</span>
                    <span className="font-bold text-[var(--gold-lt)]">{heir.fractionText}</span>
                  </div>
                  <div className="flex justify-between items-center text-white/80 text-[0.72rem]">
                    <span>
                      {heir.count > 1 ? `Each (${heir.count}): ` : "Individual Share: "}
                      <strong className="text-white">{formatMoney(heir.amountPerPerson)}</strong>
                    </span>
                    <span className="font-extrabold text-white">{formatMoney(heir.totalAmountForGroup)}</span>
                  </div>
                </div>
              ))}

              {result.heirShares.length === 0 && (
                <div className="text-center text-xs text-white/60 py-4 italic">
                  Select surviving heirs to generate Quranic breakdown.
                </div>
              )}
            </div>

            {/* Action Buttons */}
            <div className="grid grid-cols-2 gap-2.5 no-print mb-3">
              <button
                type="button"
                onClick={handleCopy}
                className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-xs font-bold text-white transition-colors"
              >
                {copied ? <CheckCircle2 size={14} className="text-green-300" /> : <Copy size={14} />}
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
          </div>

          {/* Scholarly Advisory Banner */}
          <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 text-xs text-amber-900 space-y-1.5">
            <div className="flex items-center gap-1.5 font-bold">
              <Info size={15} className="text-amber-700" />
              <span>Important Islamic Legal Disclaimer</span>
            </div>
            <p className="text-[0.72rem] leading-relaxed text-amber-800">
              This calculator provides accurate baseline calculations according to mainstream Sunni jurisprudence
              (Hanafi, Shafi&apos;i, Maliki, Hanbali). Complex estates involving grandparents, step-children, or civil
              probate jurisdictions should be ratified by a certified Shariah scholar.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
