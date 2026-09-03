"use client";

import React, { useMemo, useState } from "react";
import Link from "next/link";
import {
  calculateHifzPlan,
  DEFAULT_HIFZ_INPUTS,
  type HifzInputs,
  type HifzPaceUnit,
  type TargetMode,
  QURAN_METRICS,
} from "@/lib/tools/hifzEngine";
import {
  BookOpen,
  Calendar,
  CheckCircle2,
  Clock,
  Copy,
  Flame,
  GraduationCap,
  Info,
  Milestone,
  Printer,
  RotateCcw,
  Sparkles,
  Target,
  Trophy,
  Users,
} from "lucide-react";
import WhatsAppLink from "@/components/WhatsAppLink";
import { CONTACT, TRIAL } from "@/lib/academyFacts";

export default function HifzCalculator() {
  const [inputs, setInputs] = useState<HifzInputs>(DEFAULT_HIFZ_INPUTS);
  const [copied, setCopied] = useState(false);

  const plan = useMemo(() => calculateHifzPlan(inputs), [inputs]);

  const update = <K extends keyof HifzInputs>(key: K, val: HifzInputs[K]) => {
    setInputs((prev) => ({ ...prev, [key]: val }));
  };

  const handleCopyPlan = () => {
    const text = `📖 NoorPath Quran Hifz Roadmap (${plan.formattedDuration})
---------------------------------------------
Mode: ${inputs.mode.replace("_", " ").toUpperCase()}
Pages Remaining: ${plan.remainingPages} / ${QURAN_METRICS.totalPages} pages
Daily New Target: ${plan.dailyNewPaceDescription}
Estimated Completion Date: ${plan.estimatedCompletionDate}

Weekly Routine:
• ${plan.recommendedWeeklySchedule.newLessonDays} Days/Week New Lesson (Sabaq)
• ${plan.recommendedWeeklySchedule.revisionDays} Days/Week Dedicated Revision (Sabqi & Manzil)
• Recommended Study Time: ~${plan.recommendedWeeklySchedule.recommendedDailyTimeMinutes} mins/day

Generated privately via https://www.noorpath.online/tools/hifz-calculator`;

    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="hifz-calculator-root">
      {/* ── Mode Selection Tabs ─────────────────────────────────── */}
      <div className="flex flex-wrap gap-2 p-1.5 bg-white border border-[var(--border)] rounded-2xl shadow-sm mb-8">
        {[
          { id: "by_pace" as TargetMode, label: "🎯 Plan by Daily Pace", icon: <Target size={15} /> },
          { id: "by_target_date" as TargetMode, label: "📅 Plan by Target Date", icon: <Calendar size={15} /> },
          { id: "khatmah_reading" as TargetMode, label: "📖 Quran Reading Khatmah", icon: <BookOpen size={15} /> },
        ].map((tab) => (
          <button
            key={tab.id}
            type="button"
            onClick={() => update("mode", tab.id)}
            className={`flex-1 min-w-[180px] flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs sm:text-sm font-bold transition-all ${
              inputs.mode === tab.id
                ? "bg-[var(--emerald)] text-white shadow-sm"
                : "text-[var(--slate)] hover:bg-[var(--ivory)] hover:text-[var(--charcoal)]"
            }`}
          >
            {tab.icon}
            <span>{tab.label}</span>
          </button>
        ))}
      </div>

      {/* ── Main Layout: Inputs on Left, Results on Right ────────── */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Inputs Column */}
        <div className="lg:col-span-7 space-y-6">
          {/* Card 1: Starting Level / Current Progress */}
          <div className="bg-white border border-[var(--border)] rounded-2xl p-5 sm:p-6 shadow-sm">
            <h3 className="font-serif text-lg font-bold text-[var(--charcoal)] mb-4 flex items-center gap-2">
              <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-[var(--emerald)] text-white text-xs font-extrabold">
                1
              </span>
              <span>Current Memorization Progress</span>
            </h3>

            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-xs font-bold text-[var(--slate)] mb-1.5">
                  <span>How much Quran have you already memorized?</span>
                  <span className="text-[var(--emerald)]">
                    {inputs.alreadyMemorizedPages} Pages (~
                    {(inputs.alreadyMemorizedPages / 20).toFixed(1)} Juz)
                  </span>
                </div>
                <input
                  type="range"
                  min={0}
                  max={604}
                  step={5}
                  value={inputs.alreadyMemorizedPages}
                  onChange={(e) => update("alreadyMemorizedPages", Number(e.target.value))}
                  className="w-full accent-[var(--emerald)] cursor-pointer"
                />
                <div className="flex justify-between text-[0.7rem] text-[var(--muted)] mt-1">
                  <span>Beginner (0 Pages)</span>
                  <span>15 Juz (300 Pages)</span>
                  <span>Full Quran (604 Pages)</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 pt-2">
                {[
                  { label: "Just Starting", pages: 0 },
                  { label: "Juz Amma (30th Juz)", pages: 23 },
                  { label: "5 Juz", pages: 100 },
                  { label: "10 Juz", pages: 200 },
                  { label: "15 Juz (Half)", pages: 300 },
                ].map((preset) => (
                  <button
                    key={preset.label}
                    type="button"
                    onClick={() => update("alreadyMemorizedPages", preset.pages)}
                    className="text-xs font-semibold px-3 py-1.5 rounded-lg border border-[var(--border)] bg-[var(--ivory)] hover:border-[var(--emerald)] text-[var(--charcoal)] transition-colors"
                  >
                    {preset.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Card 2: Pace & Schedule Configuration */}
          <div className="bg-white border border-[var(--border)] rounded-2xl p-5 sm:p-6 shadow-sm">
            <h3 className="font-serif text-lg font-bold text-[var(--charcoal)] mb-4 flex items-center gap-2">
              <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-[var(--emerald)] text-white text-xs font-extrabold">
                2
              </span>
              <span>
                {inputs.mode === "khatmah_reading"
                  ? "Khatmah Reading Target"
                  : inputs.mode === "by_target_date"
                  ? "Target Finish Date"
                  : "Daily Study Pace"}
              </span>
            </h3>

            {inputs.mode === "by_pace" && (
              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-[var(--slate)] mb-1.5 uppercase">
                    How would you like to measure your daily target?
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {[
                      { id: "pages_per_day" as HifzPaceUnit, label: "Pages / day" },
                      { id: "lines_per_day" as HifzPaceUnit, label: "Lines / day" },
                      { id: "ayahs_per_day" as HifzPaceUnit, label: "Ayahs / day" },
                      { id: "juz_per_month" as HifzPaceUnit, label: "Juz / month" },
                    ].map((unit) => (
                      <button
                        key={unit.id}
                        type="button"
                        onClick={() => {
                          update("paceUnit", unit.id);
                          if (unit.id === "pages_per_day") update("paceValue", 1);
                          if (unit.id === "lines_per_day") update("paceValue", 7);
                          if (unit.id === "ayahs_per_day") update("paceValue", 5);
                          if (unit.id === "juz_per_month") update("paceValue", 1);
                        }}
                        className={`py-2 px-2.5 rounded-xl text-xs font-bold border transition-all ${
                          inputs.paceUnit === unit.id
                            ? "bg-[rgba(10,110,79,0.08)] border-[var(--emerald)] text-[var(--emerald)]"
                            : "bg-white border-[var(--border)] text-[var(--slate)] hover:bg-[var(--ivory)]"
                        }`}
                      >
                        {unit.label}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[var(--slate)] mb-1.5">
                    Target amount per study day:
                  </label>
                  <div className="flex items-center gap-3">
                    <input
                      type="number"
                      min={0.1}
                      max={20}
                      step={inputs.paceUnit === "pages_per_day" ? 0.25 : 1}
                      value={inputs.paceValue}
                      onChange={(e) => update("paceValue", Math.max(Number(e.target.value), 0.1))}
                      className="w-32 py-2.5 px-3.5 rounded-xl border border-[var(--border)] font-bold text-base text-[var(--charcoal)]"
                    />
                    <span className="text-xs text-[var(--muted)]">
                      {inputs.paceUnit === "pages_per_day" &&
                        `Page${inputs.paceValue === 1 ? "" : "s"} (~${Math.round(inputs.paceValue * 15)} lines)`}
                      {inputs.paceUnit === "lines_per_day" && "Lines (1 page = 15 lines)"}
                      {inputs.paceUnit === "ayahs_per_day" && "Ayahs per day"}
                      {inputs.paceUnit === "juz_per_month" && "Juz every month"}
                    </span>
                  </div>
                </div>
              </div>
            )}

            {inputs.mode === "by_target_date" && (
              <div className="space-y-3">
                <label className="block text-xs font-bold text-[var(--slate)] uppercase">
                  Select your target completion date:
                </label>
                <input
                  type="date"
                  min={new Date(Date.now() + 30 * 24 * 3600 * 1000).toISOString().split("T")[0]}
                  value={
                    inputs.targetDateStr ||
                    new Date(Date.now() + 730 * 24 * 3600 * 1000).toISOString().split("T")[0]
                  }
                  onChange={(e) => update("targetDateStr", e.target.value)}
                  className="w-full sm:w-64 py-2.5 px-3.5 rounded-xl border border-[var(--border)] font-bold text-sm text-[var(--charcoal)]"
                />
                <p className="text-xs text-[var(--muted)]">
                  The calculator will reverse-calculate the exact daily lines and revision pace required.
                </p>
              </div>
            )}

            {inputs.mode === "khatmah_reading" && (
              <div className="space-y-3">
                <label className="block text-xs font-bold text-[var(--slate)] uppercase">
                  In how many days do you want to complete reciting the entire Quran?
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                  {[
                    { days: 30, label: "30 Days (Ramadan Pace)" },
                    { days: 60, label: "60 Days (2 Months)" },
                    { days: 90, label: "90 Days (3 Months)" },
                    { days: 365, label: "1 Year (Daily Habit)" },
                  ].map((preset) => (
                    <button
                      key={preset.days}
                      type="button"
                      onClick={() => update("readingKhatmahDays", preset.days)}
                      className={`py-3 px-3 rounded-xl text-xs font-bold border transition-all ${
                        inputs.readingKhatmahDays === preset.days
                          ? "bg-[rgba(10,110,79,0.08)] border-[var(--emerald)] text-[var(--emerald)] shadow-sm"
                          : "bg-white border-[var(--border)] text-[var(--slate)] hover:bg-[var(--ivory)]"
                      }`}
                    >
                      {preset.label}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {inputs.mode !== "khatmah_reading" && (
              <div className="pt-4 mt-4 border-t border-[rgba(0,0,0,0.06)] grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-[var(--slate)] mb-1">
                    Study Days / Week
                  </label>
                  <select
                    value={inputs.studyDaysPerWeek}
                    onChange={(e) => update("studyDaysPerWeek", Number(e.target.value))}
                    className="w-full py-2 px-3 rounded-xl border border-[var(--border)] text-xs font-bold"
                  >
                    <option value={5}>5 Days (2 Days Revision - Recommended)</option>
                    <option value={6}>6 Days (1 Day Revision)</option>
                    <option value={7}>7 Days (Everyday)</option>
                    <option value={4}>4 Days (Light / Weekend Plan)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[var(--slate)] mb-1">
                    Daily Time Available
                  </label>
                  <select
                    value={inputs.dailyMinutesAvailable}
                    onChange={(e) => update("dailyMinutesAvailable", Number(e.target.value))}
                    className="w-full py-2 px-3 rounded-xl border border-[var(--border)] text-xs font-bold"
                  >
                    <option value={30}>30 Minutes</option>
                    <option value={45}>45 Minutes</option>
                    <option value={60}>60 Minutes (Recommended)</option>
                    <option value={90}>90 Minutes</option>
                    <option value={120}>2 Hours (Fast Track)</option>
                  </select>
                </div>
              </div>
            )}
          </div>

          {/* Card 3: The 3-Tier Traditional Madrasa Revision Engine (Sabaq, Sabqi, Manzil) */}
          {inputs.mode !== "khatmah_reading" && (
            <div className="bg-[var(--ivory)] border border-[var(--border)] rounded-2xl p-5 sm:p-6 shadow-sm">
              <div className="flex items-center gap-2 mb-3">
                <Flame size={18} className="text-[var(--gold)]" />
                <h3 className="font-serif text-base font-bold text-[var(--charcoal)] m-0">
                  The Sabaq–Sabqi–Manzil Retention Framework
                </h3>
              </div>
              <p className="text-xs text-[var(--muted)] leading-relaxed mb-4">
                Top Huffaz never rely on memorizing new pages alone. Here is your daily structured division:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="p-3 bg-white rounded-xl border border-[var(--border)]">
                  <div className="text-[0.7rem] font-extrabold uppercase text-[var(--emerald)] mb-1">
                    1. Sabaq (New Lesson)
                  </div>
                  <div className="text-xs font-bold text-[var(--charcoal)]">
                    {plan.dailyNewPaceDescription}
                  </div>
                  <div className="text-[0.68rem] text-[var(--muted)] mt-1">
                    Recited &amp; corrected with tutor daily.
                  </div>
                </div>

                <div className="p-3 bg-white rounded-xl border border-[var(--border)]">
                  <div className="text-[0.7rem] font-extrabold uppercase text-[var(--gold)] mb-1">
                    2. Sabqi (Recent Juz)
                  </div>
                  <div className="text-xs font-bold text-[var(--charcoal)]">
                    {plan.revisionSystem.sabqi}
                  </div>
                  <div className="text-[0.68rem] text-[var(--muted)] mt-1">
                    Past 5–10 pages revised to cement memory.
                  </div>
                </div>

                <div className="p-3 bg-white rounded-xl border border-[var(--border)]">
                  <div className="text-[0.7rem] font-extrabold uppercase text-purple-700 mb-1">
                    3. Manzil (Old Juz Cycle)
                  </div>
                  <div className="text-xs font-bold text-[var(--charcoal)]">
                    {plan.revisionSystem.manzil}
                  </div>
                  <div className="text-[0.68rem] text-[var(--muted)] mt-1">
                    Rotating cycle of earlier memorized Juz.
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Right Column: Luxury Output Plan Summary (Sticky) */}
        <div className="lg:col-span-5 sticky top-24 space-y-5">
          <div
            className="rounded-3xl p-6 sm:p-7 text-white relative overflow-hidden shadow-2xl"
            style={{
              background: "linear-gradient(145deg, #041f14 0%, #083422 50%, #0d4a30 100%)",
              border: "1.5px solid rgba(232, 184, 75, 0.3)",
            }}
          >
            <div className="flex items-center justify-between gap-2 mb-4 pb-3 border-b border-white/10">
              <div className="flex items-center gap-2">
                <Trophy size={20} className="text-[var(--gold-lt)]" />
                <h3 className="font-serif text-lg font-bold text-white m-0">Your Hifz Timeline</h3>
              </div>
              <span className="text-[0.7rem] font-extrabold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-white/10 text-[var(--gold-lt)]">
                {plan.mode.replace("_", " ")}
              </span>
            </div>

            {/* Big Headline Duration */}
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 text-center mb-5">
              <div className="text-xs text-white/70 uppercase tracking-widest font-bold mb-1">
                Estimated Completion Time
              </div>
              <div className="text-2xl sm:text-3xl font-extrabold text-[var(--gold-lt)]">
                {plan.formattedDuration}
              </div>
              <div className="text-xs text-white/80 mt-1">
                Target Date: <strong className="text-white">{plan.estimatedCompletionDate}</strong>
              </div>
            </div>

            {/* Metrics Breakdown */}
            <dl className="space-y-2.5 text-xs m-0 mb-5">
              <div className="flex justify-between items-center text-white/75">
                <dt>Pages Remaining:</dt>
                <dd className="font-bold text-white m-0">
                  {plan.remainingPages} / {QURAN_METRICS.totalPages} pages
                </dd>
              </div>
              <div className="flex justify-between items-center text-white/75">
                <dt>Daily Target Pace:</dt>
                <dd className="font-bold text-white m-0">{plan.dailyNewPaceDescription}</dd>
              </div>
              <div className="flex justify-between items-center text-white/75">
                <dt>Total Study Sessions:</dt>
                <dd className="font-bold text-white m-0">{plan.totalStudyDays} days</dd>
              </div>
              <div className="flex justify-between items-center text-white/75">
                <dt>Pace Advisory:</dt>
                <dd className="font-semibold text-[var(--gold-lt)] m-0 text-right max-w-[180px]">
                  {plan.isPaceRealistic ? "Realistic & Sustainable" : "High Intensity"}
                </dd>
              </div>
            </dl>

            <p className="text-[0.72rem] text-white/60 leading-relaxed italic bg-black/20 p-2.5 rounded-xl border border-white/5 mb-5">
              &ldquo;{plan.paceAdvisoryNote}&rdquo;
            </p>

            {/* Action Buttons */}
            <div className="grid grid-cols-2 gap-2.5 no-print mb-4">
              <button
                type="button"
                onClick={handleCopyPlan}
                className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-xs font-bold text-white transition-colors"
              >
                {copied ? <CheckCircle2 size={14} className="text-green-300" /> : <Copy size={14} />}
                <span>{copied ? "Copied Plan!" : "Copy Plan"}</span>
              </button>
              <button
                type="button"
                onClick={() => window.print()}
                className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-[var(--gold)] hover:bg-[var(--gold-lt)] text-[var(--charcoal)] text-xs font-extrabold transition-colors shadow-sm"
              >
                <Printer size={14} />
                <span>Print Schedule</span>
              </button>
            </div>
          </div>

          {/* Direct Conversion to NoorPath Live Hifz Program */}
          <div className="bg-white border border-[var(--border)] rounded-2xl p-5 shadow-sm">
            <div className="flex items-start gap-3 mb-3">
              <div className="p-2 rounded-xl bg-[rgba(10,110,79,0.1)] text-[var(--emerald)]">
                <GraduationCap size={22} />
              </div>
              <div>
                <h4 className="font-serif text-sm font-bold text-[var(--charcoal)] mb-0.5">
                  Start Your Hifz with a Verified Tutor
                </h4>
                <p className="text-xs text-[var(--muted)] leading-relaxed">
                  Self-study without teacher correction risks memorizing pronunciation mistakes. Get matched with a live
                  1-on-1 Qari / Hafiza.
                </p>
              </div>
            </div>

            <div className="pt-3 border-t border-[rgba(0,0,0,0.06)] flex flex-col sm:flex-row gap-2">
              <Link
                href="/hifz-quran-online"
                className="flex-1 text-center py-2.5 px-3 rounded-xl bg-[var(--emerald)] hover:bg-[var(--emerald-dk)] !text-white text-xs font-bold transition-colors"
                style={{ color: "#ffffff" }}
              >
                Explore Hifz Program →
              </Link>
              <Link
                href="/free-quran-classes-online"
                className="flex-1 text-center py-2.5 px-3 rounded-xl bg-[var(--gold)] hover:bg-[var(--gold-lt)] text-[var(--charcoal)] text-xs font-bold transition-colors"
                style={{ color: "var(--charcoal)" }}
              >
                Book Free Trial Class
              </Link>
            </div>
          </div>

          {/* Milestones Roadmap */}
          {plan.milestones.length > 0 && (
            <div className="bg-white border border-[var(--border)] rounded-2xl p-4 sm:p-5 shadow-sm">
              <h4 className="font-serif text-xs font-bold text-[var(--charcoal)] uppercase tracking-wider mb-3 flex items-center gap-1.5">
                <Milestone size={14} className="text-[var(--emerald)]" />
                <span>Estimated Target Milestones</span>
              </h4>
              <div className="space-y-2">
                {plan.milestones.map((m) => (
                  <div
                    key={m.juzNumber}
                    className="flex justify-between items-center text-xs p-2 rounded-lg bg-[var(--ivory)]"
                  >
                    <span className="font-bold text-[var(--charcoal)]">
                      Juz {m.juzNumber} Complete ({m.pagesCumulative}p)
                    </span>
                    <span className="text-[var(--emerald)] font-semibold">{m.estimatedDate}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
