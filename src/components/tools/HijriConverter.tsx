"use client";

import React, { useMemo, useState } from "react";
import {
  convertGregorianToHijri,
  convertHijriToGregorian,
  getUpcomingIslamicHolidays,
  HIJRI_MONTHS,
  ARABIC_WEEKDAYS,
  type HijriDate,
  type GregorianDate,
} from "@/lib/tools/hijriEngine";
import {
  ArrowRightLeft,
  Calendar,
  CheckCircle2,
  Clock,
  Compass,
  Copy,
  Globe,
  Info,
  Moon,
  ShieldAlert,
  Sparkles,
  Sun,
} from "lucide-react";

export default function HijriConverter() {
  const [direction, setDirection] = useState<"greg_to_hijri" | "hijri_to_greg">("greg_to_hijri");
  const [dayAdjustment, setDayAdjustment] = useState<number>(0);
  const [copied, setCopied] = useState(false);

  // Gregorian inputs
  const [gregDateStr, setGregDateStr] = useState<string>(() => {
    const today = new Date();
    return today.toISOString().split("T")[0];
  });

  // Hijri inputs
  const [hijriDay, setHijriDay] = useState<number>(1);
  const [hijriMonth, setHijriMonth] = useState<number>(9); // Ramadan
  const [hijriYear, setHijriYear] = useState<number>(1448);

  // Today's live Hijri date
  const todayHijri = useMemo(() => convertGregorianToHijri(new Date(), dayAdjustment), [dayAdjustment]);

  // Conversion result
  const conversionResult = useMemo(() => {
    if (direction === "greg_to_hijri") {
      const parts = gregDateStr.split("-").map(Number);
      const d = new Date(parts[0], (parts[1] || 1) - 1, parts[2] || 1);
      const hijri = convertGregorianToHijri(d, dayAdjustment);
      return {
        type: "hijri" as const,
        hijri,
        source: `${d.toLocaleDateString("en-US", { weekday: "long", year: "numeric", month: "long", day: "numeric" })}`,
      };
    } else {
      const greg = convertHijriToGregorian(hijriYear, hijriMonth, hijriDay, dayAdjustment);
      const monthInfo = HIJRI_MONTHS[hijriMonth - 1];
      return {
        type: "gregorian" as const,
        greg,
        source: `${hijriDay} ${monthInfo?.name || ""} ${hijriYear} AH`,
      };
    }
  }, [direction, gregDateStr, hijriDay, hijriMonth, hijriYear, dayAdjustment]);

  // Upcoming holidays
  const upcomingHolidays = useMemo(
    () => getUpcomingIslamicHolidays(new Date(), dayAdjustment).slice(0, 6),
    [dayAdjustment]
  );

  const handleCopy = () => {
    let text = "";
    if (conversionResult.type === "hijri") {
      text = `📅 Islamic Hijri Date: ${conversionResult.hijri.formatted} (${conversionResult.hijri.monthNameArabic}) | Equivalent: ${conversionResult.source}`;
    } else {
      text = `📅 Gregorian Date: ${conversionResult.greg.formatted} (${conversionResult.greg.weekdayName}) | Equivalent: ${conversionResult.source}`;
    }
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="hijri-converter-root space-y-8">
      {/* ── Today's Live Islamic Date Hero Widget ─────────────────── */}
      <div
        className="rounded-3xl p-6 sm:p-8 text-white relative overflow-hidden shadow-xl"
        style={{
          background: "linear-gradient(135deg, #032115 0%, #073823 50%, #0c4d32 100%)",
          border: "1.5px solid rgba(232, 184, 75, 0.35)",
        }}
      >
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-xs font-bold text-[var(--gold-lt)]">
              <Moon size={14} />
              <span>Today&apos;s Islamic Date</span>
            </div>
            <div className="font-serif text-3xl sm:text-4xl font-extrabold text-[var(--gold-lt)] tracking-tight">
              {todayHijri.formatted}
            </div>
            <div className="text-lg sm:text-xl font-arabic text-emerald-200" dir="rtl">
              {todayHijri.day} {todayHijri.monthNameArabic} {todayHijri.year} هـ &bull; {todayHijri.weekdayNameArabic}
            </div>
            <p className="text-xs text-white/70">
              Corresponds to:{" "}
              <strong className="text-white">
                {new Date().toLocaleDateString("en-GB", {
                  weekday: "long",
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </strong>
            </p>
          </div>

          {/* Moon Sighting Adjustment Control */}
          <div className="bg-black/25 backdrop-blur-md border border-white/10 p-4 rounded-2xl w-full md:w-auto text-center md:text-right space-y-2">
            <div className="flex items-center justify-center md:justify-end gap-1.5 text-xs text-white/80 font-bold">
              <Globe size={13} className="text-[var(--gold-lt)]" />
              <span>Local Moon Sighting Adjustment:</span>
            </div>
            <div className="inline-flex items-center gap-1 bg-white/10 p-1 rounded-xl border border-white/10">
              {[-2, -1, 0, 1, 2].map((adj) => (
                <button
                  key={adj}
                  type="button"
                  onClick={() => setDayAdjustment(adj)}
                  className={`px-2.5 py-1 text-xs font-bold rounded-lg transition-all ${
                    dayAdjustment === adj
                      ? "bg-[var(--gold)] text-[var(--charcoal)] shadow-sm"
                      : "text-white/80 hover:bg-white/10"
                  }`}
                >
                  {adj > 0 ? `+${adj}` : adj}d
                </button>
              ))}
            </div>
            <p className="text-[0.68rem] text-white/60">
              Adjust ±1–2 days to match UK, USA, Saudi, or Indo-Pak sightings.
            </p>
          </div>
        </div>
      </div>

      {/* ── Conversion Section ───────────────────────────────────── */}
      <div className="bg-white border border-[var(--border)] rounded-3xl p-6 sm:p-8 shadow-sm">
        {/* Toggle Mode Buttons */}
        <div className="flex flex-wrap gap-2 p-1.5 bg-[var(--ivory)] border border-[var(--border)] rounded-2xl mb-8">
          <button
            type="button"
            onClick={() => setDirection("greg_to_hijri")}
            className={`flex-1 min-w-[200px] flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs sm:text-sm font-bold transition-all ${
              direction === "greg_to_hijri"
                ? "bg-[var(--emerald)] text-white shadow-sm"
                : "text-[var(--slate)] hover:bg-white"
            }`}
          >
            <Sun size={16} />
            <span>Gregorian (English) → Islamic (Hijri)</span>
          </button>
          <button
            type="button"
            onClick={() => setDirection("hijri_to_greg")}
            className={`flex-1 min-w-[200px] flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs sm:text-sm font-bold transition-all ${
              direction === "hijri_to_greg"
                ? "bg-[var(--emerald)] text-white shadow-sm"
                : "text-[var(--slate)] hover:bg-white"
            }`}
          >
            <Moon size={16} />
            <span>Islamic (Hijri) → Gregorian (English)</span>
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Inputs Column */}
          <div className="lg:col-span-6 space-y-4">
            <h3 className="font-serif text-lg font-bold text-[var(--charcoal)] flex items-center gap-2">
              <Calendar size={18} className="text-[var(--emerald)]" />
              <span>
                {direction === "greg_to_hijri" ? "Select Gregorian Date" : "Select Islamic Hijri Date"}
              </span>
            </h3>

            {direction === "greg_to_hijri" ? (
              <div className="space-y-3">
                <label className="block text-xs font-bold text-[var(--slate)] uppercase">
                  Gregorian Calendar Date:
                </label>
                <input
                  type="date"
                  value={gregDateStr}
                  onChange={(e) => setGregDateStr(e.target.value)}
                  className="w-full py-3.5 px-4 rounded-xl border border-[var(--border)] font-bold text-base text-[var(--charcoal)] focus:outline-none focus:border-[var(--emerald)]"
                />
                <div className="flex flex-wrap gap-2 pt-1">
                  <button
                    type="button"
                    onClick={() => setGregDateStr(new Date().toISOString().split("T")[0])}
                    className="text-xs font-bold px-3 py-1.5 rounded-lg border border-[var(--border)] bg-[var(--ivory)] hover:border-[var(--emerald)] text-[var(--charcoal)]"
                  >
                    Today
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      const d = new Date();
                      d.setDate(d.getDate() + 1);
                      setGregDateStr(d.toISOString().split("T")[0]);
                    }}
                    className="text-xs font-bold px-3 py-1.5 rounded-lg border border-[var(--border)] bg-[var(--ivory)] hover:border-[var(--emerald)] text-[var(--charcoal)]"
                  >
                    Tomorrow
                  </button>
                </div>
              </div>
            ) : (
              <div className="space-y-3">
                <div className="grid grid-cols-3 gap-2">
                  <div>
                    <label className="block text-xs font-bold text-[var(--slate)] mb-1">Day</label>
                    <select
                      value={hijriDay}
                      onChange={(e) => setHijriDay(Number(e.target.value))}
                      className="w-full py-2.5 px-3 rounded-xl border border-[var(--border)] font-bold text-sm"
                    >
                      {Array.from({ length: 30 }, (_, i) => i + 1).map((d) => (
                        <option key={d} value={d}>
                          {d}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[var(--slate)] mb-1">Month</label>
                    <select
                      value={hijriMonth}
                      onChange={(e) => setHijriMonth(Number(e.target.value))}
                      className="w-full py-2.5 px-2 rounded-xl border border-[var(--border)] font-bold text-xs"
                    >
                      {HIJRI_MONTHS.map((m) => (
                        <option key={m.index} value={m.index}>
                          {m.index}. {m.name}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[var(--slate)] mb-1">Year (AH)</label>
                    <input
                      type="number"
                      min={1}
                      max={1600}
                      value={hijriYear}
                      onChange={(e) => setHijriYear(Number(e.target.value))}
                      className="w-full py-2.5 px-3 rounded-xl border border-[var(--border)] font-bold text-sm"
                    />
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Results Box */}
          <div className="lg:col-span-6">
            <div
              className="rounded-2xl p-6 text-center space-y-3 relative overflow-hidden"
              style={{
                background: "linear-gradient(145deg, #072b1d 0%, #0d422d 100%)",
                border: "1.5px solid rgba(232, 184, 75, 0.3)",
              }}
            >
              <div className="text-xs text-[var(--gold-lt)] uppercase tracking-wider font-bold">
                Converted Islamic Date
              </div>

              {conversionResult.type === "hijri" ? (
                <>
                  <div className="font-serif text-2xl sm:text-3xl font-extrabold text-white">
                    {conversionResult.hijri.formatted}
                  </div>
                  <div className="text-lg font-arabic text-emerald-200" dir="rtl">
                    {conversionResult.hijri.day} {conversionResult.hijri.monthNameArabic}{" "}
                    {conversionResult.hijri.year} هـ &bull; {conversionResult.hijri.weekdayNameArabic}
                  </div>
                  <div className="text-xs text-white/70">
                    Day: <strong>{conversionResult.hijri.weekdayName}</strong>
                    {conversionResult.hijri.isSacredMonth && (
                      <span className="ml-2 inline-flex items-center gap-1 text-[var(--gold-lt)] font-bold">
                        ★ Sacred Month
                      </span>
                    )}
                  </div>
                </>
              ) : (
                <>
                  <div className="font-serif text-2xl sm:text-3xl font-extrabold text-white">
                    {conversionResult.greg.formatted}
                  </div>
                  <div className="text-sm font-bold text-emerald-200">
                    {conversionResult.greg.weekdayName}
                  </div>
                  <div className="text-xs text-white/70">
                    Original Hijri: <strong>{conversionResult.source}</strong>
                  </div>
                </>
              )}

              <div className="pt-3 flex justify-center gap-2">
                <button
                  type="button"
                  onClick={handleCopy}
                  className="inline-flex items-center gap-1.5 py-2 px-4 rounded-xl bg-white/15 hover:bg-white/25 border border-white/20 text-xs font-bold text-white transition-colors"
                >
                  {copied ? <CheckCircle2 size={14} className="text-green-300" /> : <Copy size={14} />}
                  <span>{copied ? "Copied!" : "Copy Result"}</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Upcoming Islamic Holidays Countdown ─────────────────── */}
      <div className="bg-white border border-[var(--border)] rounded-3xl p-6 sm:p-8 shadow-sm">
        <div className="flex items-center justify-between gap-2 mb-6">
          <div>
            <h3 className="font-serif text-xl font-bold text-[var(--charcoal)] m-0">
              Upcoming Islamic Events &amp; Holidays
            </h3>
            <p className="text-xs text-[var(--muted)] mt-1">
              Live countdowns for key Islamic dates in the Hijri calendar ({todayHijri.year} – {todayHijri.year + 1} AH).
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {upcomingHolidays.map((holiday) => (
            <div
              key={holiday.name}
              className="p-4 rounded-2xl border border-[var(--border)] bg-[var(--ivory)] hover:border-[var(--emerald)] transition-colors flex flex-col justify-between"
            >
              <div>
                <div className="flex justify-between items-start gap-2 mb-2">
                  <span className="text-xs font-bold text-[var(--charcoal)] leading-tight">{holiday.name}</span>
                  <span className="text-[0.68rem] font-bold px-2 py-0.5 rounded-full bg-[rgba(10,110,79,0.1)] text-[var(--emerald)] whitespace-nowrap">
                    {holiday.daysRemaining === 0 ? "Today!" : `In ${holiday.daysRemaining} days`}
                  </span>
                </div>
                <div className="text-xs font-arabic text-[var(--emerald)] font-bold mb-1" dir="rtl">
                  {holiday.arabicName}
                </div>
                <p className="text-[0.72rem] text-[var(--slate)] leading-relaxed mb-3">
                  {holiday.description}
                </p>
              </div>

              <div className="pt-2.5 border-t border-[rgba(0,0,0,0.06)] text-[0.7rem] text-[var(--muted)] flex justify-between">
                <span>{holiday.hijriDay} {HIJRI_MONTHS[holiday.hijriMonth - 1]?.name}</span>
                <strong className="text-[var(--charcoal)]">{holiday.gregorianFormatted}</strong>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── 12 Islamic Months Reference Table ─────────────────────── */}
      <div className="bg-white border border-[var(--border)] rounded-3xl p-6 sm:p-8 shadow-sm">
        <h3 className="font-serif text-xl font-bold text-[var(--charcoal)] mb-4">
          The 12 Islamic Hijri Months in Order
        </h3>
        <p className="text-xs text-[var(--slate)] mb-6">
          The Islamic calendar consists of 12 lunar months totaling 354 or 355 days per year. Four of these months are
          designated as sacred (Al-Ashhur Al-Hurum) in the Holy Quran (Surah At-Tawbah 9:36).
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
          {HIJRI_MONTHS.map((m) => (
            <div
              key={m.index}
              className={`p-3.5 rounded-2xl border ${
                m.sacred
                  ? "bg-[rgba(232,184,75,0.08)] border-[var(--gold)]"
                  : "bg-[var(--ivory)] border-[var(--border)]"
              }`}
            >
              <div className="flex justify-between items-center mb-1">
                <span className="text-xs font-extrabold text-[var(--emerald)]">#{m.index}</span>
                {m.sacred && (
                  <span className="text-[0.65rem] font-bold px-2 py-0.5 rounded-md bg-[var(--gold)] text-[var(--charcoal)]">
                    Sacred Month
                  </span>
                )}
              </div>
              <div className="font-serif font-bold text-sm text-[var(--charcoal)]">{m.name}</div>
              <div className="font-arabic text-xs text-[var(--emerald)] font-bold mb-1" dir="rtl">
                {m.arabic}
              </div>
              <div className="text-[0.7rem] text-[var(--muted)] italic">{m.meaning}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
