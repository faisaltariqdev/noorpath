"use client";

import React, { useCallback, useEffect, useMemo, useState } from "react";
import { DHIKR_PRESETS, type DhikrPreset } from "@/lib/tools/tasbeehData";
import {
  Bell,
  CheckCircle2,
  Copy,
  Maximize2,
  Minimize2,
  Moon,
  Plus,
  RefreshCw,
  RotateCcw,
  Sparkles,
  Undo,
  Volume2,
  VolumeX,
  Vibrate,
  Flame,
} from "lucide-react";

export default function TasbeehCounter() {
  const [selectedDhikrId, setSelectedDhikrId] = useState<string>("tasbeeh_fatimah");
  const [customDhikr, setCustomDhikr] = useState<{ name: string; arabic: string; target: number }>({
    name: "Custom Dhikr",
    arabic: "ذِكْرُ اللَّهِ",
    target: 33,
  });
  const [count, setCount] = useState<number>(0);
  const [laps, setLaps] = useState<number>(0);
  const [totalTally, setTotalTally] = useState<number>(0);
  const [soundEnabled, setSoundEnabled] = useState<boolean>(true);
  const [vibrateEnabled, setVibrateEnabled] = useState<boolean>(true);
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);
  const [copied, setCopied] = useState<boolean>(false);

  // Load saved state from LocalStorage on mount
  useEffect(() => {
    try {
      const savedTally = localStorage.getItem("noorpath_tasbeeh_tally");
      if (savedTally) setTotalTally(Number(savedTally));
    } catch {
      // ignore
    }
  }, []);

  const activeDhikr: DhikrPreset = useMemo(() => {
    if (selectedDhikrId === "custom") {
      return {
        id: "custom",
        name: customDhikr.name || "Custom Dhikr",
        arabic: customDhikr.arabic || "ذِكْرُ اللَّهِ",
        transliteration: "Custom Dhikr",
        translation: "Remembering Allah SWT",
        defaultTarget: customDhikr.target || 33,
        virtue: "The remembrance of Allah is the greatest deed (Quran 29:45).",
        hadithReference: "Quran & Sunnah",
      };
    }
    return DHIKR_PRESETS.find((d) => d.id === selectedDhikrId) || DHIKR_PRESETS[0];
  }, [selectedDhikrId, customDhikr]);

  const target = activeDhikr.defaultTarget;

  // Web Audio Synthetic Click & Chime Generator
  const playBeep = useCallback((isGoal = false) => {
    if (!soundEnabled || typeof window === "undefined") return;
    try {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (!AudioCtx) return;
      const ctx = new AudioCtx();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.connect(gain);
      gain.connect(ctx.destination);

      if (isGoal) {
        // High pleasant bell harmonic
        osc.type = "sine";
        osc.frequency.setValueAtTime(587.33, ctx.currentTime); // D5
        osc.frequency.exponentialRampToValueAtTime(880, ctx.currentTime + 0.15); // A5
        gain.gain.setValueAtTime(0.3, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.4);
        osc.start(ctx.currentTime);
        osc.stop(ctx.currentTime + 0.45);
      } else {
        // Subtle soft wooden bead tick
        osc.type = "triangle";
        osc.frequency.setValueAtTime(320, ctx.currentTime);
        gain.gain.setValueAtTime(0.15, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.04);
        osc.start(ctx.currentTime);
        osc.stop(ctx.currentTime + 0.05);
      }
    } catch {
      // Audio not permitted or supported
    }
  }, [soundEnabled]);

  const triggerVibration = useCallback((isGoal = false) => {
    if (!vibrateEnabled || typeof window === "undefined" || !navigator.vibrate) return;
    try {
      if (isGoal) {
        navigator.vibrate([100, 50, 150]); // 2 pulses on target reached
      } else {
        navigator.vibrate(25); // Subtle tap
      }
    } catch {
      // vibration blocked
    }
  }, [vibrateEnabled]);

  const handleIncrement = useCallback(() => {
    setCount((prev) => {
      const next = prev + 1;
      const isTargetReached = next >= target;

      if (isTargetReached) {
        playBeep(true);
        triggerVibration(true);
        setLaps((l) => l + 1);
        return 0; // Reset for next lap
      } else {
        playBeep(false);
        triggerVibration(false);
        return next;
      }
    });

    setTotalTally((prev) => {
      const nextTally = prev + 1;
      try {
        localStorage.setItem("noorpath_tasbeeh_tally", String(nextTally));
      } catch {
        // ignore
      }
      return nextTally;
    });
  }, [target, playBeep, triggerVibration]);

  const handleUndo = () => {
    if (count > 0) {
      setCount((prev) => prev - 1);
      setTotalTally((prev) => Math.max(prev - 1, 0));
    }
  };

  const handleResetCurrent = () => {
    setCount(0);
  };

  const handleResetAll = () => {
    if (confirm("Reset current count and laps?")) {
      setCount(0);
      setLaps(0);
    }
  };

  // Radial progress calculations
  const radius = 110;
  const circumference = 2 * Math.PI * radius;
  const progress = target > 0 ? (count / target) * circumference : 0;
  const strokeDashoffset = circumference - progress;

  return (
    <div className={`tasbeeh-container ${isFullscreen ? "fixed inset-0 z-50 bg-[#031d13] p-6 overflow-y-auto" : ""}`}>
      {/* ── Top Preset Dhikr Selector ─────────────────────────────── */}
      {!isFullscreen && (
        <div className="mb-8">
          <label className="block text-xs font-bold text-[var(--slate)] uppercase tracking-wider mb-2">
            Select Authentic Sunnah Adhkar or Create Custom:
          </label>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2.5">
            {DHIKR_PRESETS.map((d) => (
              <button
                key={d.id}
                type="button"
                onClick={() => {
                  setSelectedDhikrId(d.id);
                  setCount(0);
                }}
                className={`p-3 rounded-2xl text-left border transition-all flex flex-col justify-between ${
                  selectedDhikrId === d.id
                    ? "bg-[rgba(10,110,79,0.08)] border-[var(--emerald)] text-[var(--emerald)] shadow-sm font-bold"
                    : "bg-white border-[var(--border)] text-[var(--charcoal)] hover:bg-[var(--ivory)]"
                }`}
              >
                <div className="text-xs font-bold truncate mb-1">{d.name}</div>
                <div className="flex justify-between items-center text-[0.7rem] text-[var(--muted)]">
                  <span>Target: {d.defaultTarget}x</span>
                  <span className="font-arabic text-xs" dir="rtl">{d.arabic.slice(0, 15)}...</span>
                </div>
              </button>
            ))}

            <button
              type="button"
              onClick={() => {
                setSelectedDhikrId("custom");
                setCount(0);
              }}
              className={`p-3 rounded-2xl text-left border transition-all flex items-center justify-between ${
                selectedDhikrId === "custom"
                  ? "bg-[rgba(10,110,79,0.08)] border-[var(--emerald)] text-[var(--emerald)] font-bold"
                  : "bg-white border-[var(--border)] text-[var(--slate)] hover:bg-[var(--ivory)]"
              }`}
            >
              <div className="text-xs font-bold">✨ Custom Dhikr</div>
              <Plus size={16} />
            </button>
          </div>
        </div>
      )}

      {/* ── Main Interactive Tasbeeh Bead Interface ──────────────── */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: The Digital Tasbeeh Bead Counter */}
        <div className="lg:col-span-7 flex flex-col items-center">
          <div
            className="w-full max-w-md rounded-3xl p-6 sm:p-8 text-white relative shadow-2xl overflow-hidden flex flex-col items-center"
            style={{
              background: "linear-gradient(160deg, #021a11 0%, #063422 50%, #0a4f33 100%)",
              border: "2px solid rgba(232, 184, 75, 0.4)",
            }}
          >
            {/* Top Toolbar: Audio, Vibration, Fullscreen, Reset */}
            <div className="w-full flex items-center justify-between gap-2 mb-4 pb-3 border-b border-white/10 text-xs text-white/75">
              <div className="flex items-center gap-1">
                <button
                  type="button"
                  onClick={() => setSoundEnabled((v) => !v)}
                  className={`p-2 rounded-xl transition-colors ${
                    soundEnabled ? "bg-white/15 text-[var(--gold-lt)]" : "text-white/40 hover:bg-white/10"
                  }`}
                  title={soundEnabled ? "Sound On" : "Sound Muted"}
                >
                  {soundEnabled ? <Volume2 size={16} /> : <VolumeX size={16} />}
                </button>
                <button
                  type="button"
                  onClick={() => setVibrateEnabled((v) => !v)}
                  className={`p-2 rounded-xl transition-colors ${
                    vibrateEnabled ? "bg-white/15 text-[var(--gold-lt)]" : "text-white/40 hover:bg-white/10"
                  }`}
                  title={vibrateEnabled ? "Vibration On" : "Vibration Off"}
                >
                  <Vibrate size={16} />
                </button>
              </div>

              <div className="flex items-center gap-2">
                <span className="font-bold text-[var(--gold-lt)]">
                  Lap {laps + 1}
                </span>
                <button
                  type="button"
                  onClick={() => setIsFullscreen((v) => !v)}
                  className="p-2 rounded-xl hover:bg-white/10 transition-colors text-white/80"
                  title="Toggle Focus Mode"
                >
                  {isFullscreen ? <Minimize2 size={16} /> : <Maximize2 size={16} />}
                </button>
              </div>
            </div>

            {/* Dhikr Arabic Heading */}
            <div className="text-center my-2 max-w-xs">
              <div className="font-arabic text-xl sm:text-2xl font-extrabold text-[var(--gold-lt)] leading-relaxed" dir="rtl">
                {activeDhikr.arabic}
              </div>
              <div className="text-xs text-white/80 font-medium mt-1">
                {activeDhikr.transliteration}
              </div>
            </div>

            {/* Circular Interactive Click Button */}
            <div className="my-6 relative flex items-center justify-center">
              <svg className="w-64 h-64 -rotate-90 transform" viewBox="0 0 250 250">
                {/* Background Ring */}
                <circle
                  cx="125"
                  cy="125"
                  r={radius}
                  stroke="rgba(255, 255, 255, 0.1)"
                  strokeWidth="10"
                  fill="transparent"
                />
                {/* Progress Ring */}
                <circle
                  cx="125"
                  cy="125"
                  r={radius}
                  stroke="var(--gold-lt)"
                  strokeWidth="10"
                  strokeDasharray={circumference}
                  strokeDashoffset={strokeDashoffset}
                  strokeLinecap="round"
                  fill="transparent"
                  className="transition-all duration-150 ease-out"
                />
              </svg>

              {/* Big Touch Click Center Button */}
              <button
                type="button"
                onClick={handleIncrement}
                className="absolute w-44 h-44 rounded-full flex flex-col items-center justify-center text-white cursor-pointer select-none transition-transform active:scale-95 shadow-inner group"
                style={{
                  background: "radial-gradient(circle at 35% 35%, #0e5e3e 0%, #063422 75%, #021a11 100%)",
                  boxShadow: "0 10px 30px rgba(0,0,0,0.5), inset 0 2px 4px rgba(255,255,255,0.2)",
                  border: "2px solid rgba(232, 184, 75, 0.3)",
                }}
              >
                <span className="text-xs uppercase tracking-widest text-white/60 font-bold mb-0.5">
                  Tap to Count
                </span>
                <span className="font-mono text-5xl font-black text-white group-active:text-[var(--gold-lt)] transition-colors">
                  {count}
                </span>
                <span className="text-[0.72rem] text-[var(--gold-lt)] font-semibold mt-1">
                  / {target}
                </span>
              </button>
            </div>

            {/* Bottom Controls: Undo, Reset Lap, Reset All */}
            <div className="w-full grid grid-cols-3 gap-2 pt-2 text-xs">
              <button
                type="button"
                onClick={handleUndo}
                disabled={count === 0}
                className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-white/10 hover:bg-white/20 disabled:opacity-30 disabled:cursor-not-allowed text-white font-bold transition-all"
              >
                <Undo size={14} />
                <span>Undo</span>
              </button>
              <button
                type="button"
                onClick={handleResetCurrent}
                className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold transition-all"
              >
                <RotateCcw size={14} />
                <span>Reset</span>
              </button>
              <button
                type="button"
                onClick={handleResetAll}
                className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-red-950/40 hover:bg-red-900/60 border border-red-500/30 text-red-200 font-bold transition-all"
              >
                <RefreshCw size={14} />
                <span>Clear All</span>
              </button>
            </div>

            {/* Daily Lifetime Tally */}
            <div className="w-full mt-5 pt-3 border-t border-white/10 flex justify-between items-center text-xs text-white/70">
              <span className="flex items-center gap-1.5">
                <Flame size={14} className="text-[var(--gold-lt)]" />
                <span>Total Lifetime Dhikr:</span>
              </span>
              <span className="font-mono font-bold text-white text-sm">{totalTally.toLocaleString()}</span>
            </div>
          </div>
        </div>

        {/* Right Column: Dhikr Details, Translation, Hadith Virtues */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-white border border-[var(--border)] rounded-3xl p-6 sm:p-7 shadow-sm">
            <div className="flex items-center justify-between gap-2 mb-4 pb-3 border-b border-[rgba(0,0,0,0.06)]">
              <h3 className="font-serif text-lg font-bold text-[var(--charcoal)] m-0">
                {activeDhikr.name}
              </h3>
              <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-[rgba(10,110,79,0.1)] text-[var(--emerald)]">
                {activeDhikr.defaultTarget} Times
              </span>
            </div>

            <div className="space-y-4 text-xs sm:text-sm">
              <div>
                <label className="block text-[0.7rem] uppercase font-bold text-[var(--slate)] mb-1">
                  Full Arabic Text
                </label>
                <div
                  className="p-3.5 rounded-2xl bg-[var(--ivory)] border border-[var(--border)] font-arabic text-base sm:text-lg font-bold text-[var(--emerald)] leading-loose text-right"
                  dir="rtl"
                >
                  {activeDhikr.arabic}
                </div>
              </div>

              <div>
                <label className="block text-[0.7rem] uppercase font-bold text-[var(--slate)] mb-1">
                  English Translation
                </label>
                <p className="text-[var(--charcoal)] leading-relaxed italic bg-[var(--ivory)] p-3 rounded-xl border border-[var(--border)]">
                  &ldquo;{activeDhikr.translation}&rdquo;
                </p>
              </div>

              <div>
                <label className="block text-[0.7rem] uppercase font-bold text-[var(--slate)] mb-1">
                  Virtue &amp; Hadith Reference
                </label>
                <div className="p-3.5 rounded-2xl bg-[rgba(232,184,75,0.08)] border border-[var(--gold)]">
                  <p className="text-xs text-[var(--charcoal)] font-medium leading-relaxed mb-1.5">
                    {activeDhikr.virtue}
                  </p>
                  <div className="text-[0.68rem] text-[var(--muted)] font-bold">
                    Source: {activeDhikr.hadithReference}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Custom Dhikr Input Form (when selected) */}
          {selectedDhikrId === "custom" && (
            <div className="bg-white border border-[var(--border)] rounded-3xl p-6 shadow-sm space-y-3">
              <h4 className="font-serif text-sm font-bold text-[var(--charcoal)]">
                Configure Custom Dhikr
              </h4>
              <div>
                <label className="block text-xs font-bold text-[var(--slate)] mb-1">Title / Name</label>
                <input
                  type="text"
                  value={customDhikr.name}
                  onChange={(e) => setCustomDhikr((prev) => ({ ...prev, name: e.target.value }))}
                  className="w-full py-2 px-3 rounded-xl border border-[var(--border)] text-xs font-bold"
                  placeholder="e.g. Salawat on Friday"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-[var(--slate)] mb-1">Arabic Text</label>
                <input
                  type="text"
                  dir="rtl"
                  value={customDhikr.arabic}
                  onChange={(e) => setCustomDhikr((prev) => ({ ...prev, arabic: e.target.value }))}
                  className="w-full py-2 px-3 rounded-xl border border-[var(--border)] text-xs font-bold font-arabic text-right"
                  placeholder="اللَّهُمَّ صَلِّ عَلَى مُحَمَّدٍ"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-[var(--slate)] mb-1">Target Count</label>
                <input
                  type="number"
                  min={1}
                  max={10000}
                  value={customDhikr.target}
                  onChange={(e) =>
                    setCustomDhikr((prev) => ({ ...prev, target: Math.max(Number(e.target.value), 1) }))
                  }
                  className="w-full py-2 px-3 rounded-xl border border-[var(--border)] text-xs font-bold"
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
