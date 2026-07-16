"use client";
import { useState, useCallback } from "react";
import Link from "next/link";
import {
  BookOpen, Star, Lock, ChevronLeft, ChevronRight,
  Volume2, PencilLine, Gamepad2, Gift, Home, X,
} from "lucide-react";
import BubblePopGame from "@/components/demo/BubblePopGame";
import QuickQuiz from "@/components/demo/QuickQuiz";
import LetterMatchGame from "@/components/demo/LetterMatchGame";

/* ── Data ─────────────────────────────────────────────────────── */
const ALIF = {
  arabic: "ا",
  name: "Alif",
  number: 1,
  transliteration: "ā / a",
  sound: "a (as in apple) — silent when used for Madd",
  makhraj: "Open throat and chest (الجَوْف)",
  forms: [
    { label: "Isolated", arabic: "ا" },
    { label: "Initial", arabic: "اَ" },
    { label: "Medial", arabic: "ـا" },
    { label: "Final", arabic: "ـا" },
  ],
  examples: [
    { arabic: "أَسَد", meaning: "Lion", transliteration: "asad" },
    { arabic: "قَالَ", meaning: "He said", transliteration: "qāla" },
  ],
  parentTip: "Say 'open wide' — Alif's sound starts from the chest, not the lips. Let your child copy your open mouth.",
  childPrompt: "Open your mouth like you're yawning — that's where Alif lives!",
  writingCue: "One straight stroke downwards — like a tall standing person.",
};

const LOCKED_LETTERS = ["ب","ت","ث","ج","ح","خ","د","ذ","ر","ز","س","ش","ص","ض","ط","ظ","ع","غ","ف","ق","ك","ل","م","ن","ه","و","ي"];

type Tab = "meet" | "hear" | "trace" | "play" | "reward";
type Game = "bubble" | "quiz" | "match" | null;

const TABS: { id: Tab; label: string; icon: React.ReactNode }[] = [
  { id: "meet", label: "Meet", icon: <BookOpen size={15} /> },
  { id: "hear", label: "Hear", icon: <Volume2 size={15} /> },
  { id: "trace", label: "Trace", icon: <PencilLine size={15} /> },
  { id: "play", label: "Play", icon: <Gamepad2 size={15} /> },
  { id: "reward", label: "Reward", icon: <Gift size={15} /> },
];

const GAMES: { id: Exclude<Game, null>; label: string; icon: string; color: string; desc: string }[] = [
  { id: "bubble", label: "Bubble Pop", icon: "🫧", color: "#22c55e", desc: "Pop every Alif bubble!" },
  { id: "quiz", label: "Quick Quiz", icon: "❓", color: "#f59e0b", desc: "5 questions about Alif" },
  { id: "match", label: "Letter Match", icon: "🎯", color: "#3b82f6", desc: "Match letters to names" },
];

/* Stable waveform bar heights (avoids Math.random() in render) */
const WAVE_HEIGHTS = Array.from({ length: 24 }, (_, i) =>
  20 + Math.sin(i * 0.7) * 14 + (i * 7 % 9)
);

/* ── Component ─────────────────────────────────────────────────── */
export default function TryDemoPage() {
  const [tab, setTab] = useState<Tab>("meet");
  const [activeGame, setActiveGame] = useState<Game>(null);
  const [xp, setXp] = useState(0);
  const [stars, setStars] = useState(0);
  const [completedGames, setCompletedGames] = useState<string[]>([]);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [hearPlaying, setHearPlaying] = useState(false);
  const [traceDots, setTraceDots] = useState<{ x: number; y: number }[]>([]);
  const [traceMsg, setTraceMsg] = useState("");

  const handleGameComplete = useCallback((gameId: string, score: number) => {
    setXp((prev) => prev + score);
    if (!completedGames.includes(gameId)) {
      setCompletedGames((prev) => [...prev, gameId]);
      setStars((prev) => Math.min(prev + 1, 3));
    }
    setActiveGame(null);
  }, [completedGames]);

  const simulateHear = () => {
    setHearPlaying(true);
    setTimeout(() => setHearPlaying(false), 2000);
  };

  const handleTrace = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setTraceDots((prev) => {
      const next = [...prev, { x, y }];
      if (next.length > 40) {
        setTraceMsg("Great tracing! Alif goes straight down ⬇");
        setTimeout(() => { setTraceDots([]); setTraceMsg(""); }, 1800);
        return [];
      }
      return next;
    });
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100vh", overflow: "hidden", fontFamily: "var(--font-jakarta, sans-serif)", background: "#f0f4f2" }}>

      {/* ── TOP HEADER ── */}
      <header style={{ background: "linear-gradient(90deg, #052e1c 0%, #0a6e4f 100%)", padding: "0 16px", height: 56, display: "flex", alignItems: "center", justifyContent: "space-between", flexShrink: 0, gap: 12 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <button
            aria-label="Toggle menu"
            onClick={() => setSidebarOpen((o) => !o)}
            style={{ background: "rgba(255,255,255,.1)", border: "1px solid rgba(255,255,255,.2)", borderRadius: 8, padding: "6px 8px", cursor: "pointer", color: "#fff", display: "flex" }}
          >
            ☰
          </button>
          <Link href="/" style={{ display: "flex", alignItems: "center", gap: 6, textDecoration: "none" }}>
            <span style={{ fontFamily: "var(--font-playfair, Georgia, serif)", fontWeight: 700, color: "#fff", fontSize: "1.1rem" }}>
              Noor<span style={{ color: "#d4a030" }}>Path</span>
            </span>
          </Link>
          <span style={{ background: "#22c55e", color: "#fff", fontSize: ".64rem", fontWeight: 800, padding: "2px 8px", borderRadius: 20, letterSpacing: ".08em", textTransform: "uppercase" }}>
            Free Demo
          </span>
        </div>

        {/* XP bar */}
        <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 5, background: "rgba(255,255,255,.12)", borderRadius: 20, padding: "5px 12px" }}>
            <Star size={14} fill="#eab308" color="#eab308" />
            <span style={{ color: "#fff", fontSize: ".82rem", fontWeight: 700 }}>{xp} XP</span>
          </div>
          <div style={{ display: "flex", gap: 3 }}>
            {[0,1,2].map((i) => (
              <Star key={i} size={16} fill={i < stars ? "#eab308" : "transparent"} color={i < stars ? "#eab308" : "rgba(255,255,255,.3)"} />
            ))}
          </div>
          <Link href="/courses/noorani-qaida-online" style={{ background: "#d4a030", color: "#1a1a2e", fontWeight: 700, fontSize: ".76rem", padding: "6px 14px", borderRadius: 20, textDecoration: "none", whiteSpace: "nowrap" }}>
            Enrol →
          </Link>
        </div>
      </header>

      {/* ── DEMO NOTICE ── */}
      <div style={{ background: "linear-gradient(90deg, #0a6e4f, #15803d)", color: "#fff", padding: "7px 16px", fontSize: ".78rem", textAlign: "center", flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center", gap: 12, flexWrap: "wrap" }}>
        <span>🎮 <strong>Demo mode</strong> — Letter 1 (Alif) is unlocked. All games are free to play.</span>
        <Link href="/courses/noorani-qaida-online" style={{ color: "#d4a030", fontWeight: 700, textDecoration: "none" }}>
          Unlock all 28 letters →
        </Link>
      </div>

      {/* ── MAIN CONTENT ── */}
      <div style={{ display: "flex", flex: 1, overflow: "hidden", position: "relative" }}>

        {/* ── SIDEBAR ── */}
        <aside
          style={{
            width: sidebarOpen ? 220 : 0,
            minWidth: sidebarOpen ? 220 : 0,
            background: "#052e1c",
            overflowY: "auto",
            overflowX: "hidden",
            transition: "width .3s, min-width .3s",
            flexShrink: 0,
            display: "flex",
            flexDirection: "column",
          }}
          aria-label="Course navigation"
        >
          {sidebarOpen && (
            <div style={{ padding: "16px 12px", minWidth: 220 }}>
              <div style={{ color: "rgba(255,255,255,.5)", fontSize: ".68rem", fontWeight: 800, letterSpacing: ".1em", textTransform: "uppercase", marginBottom: 10 }}>
                Noorani Qaida
              </div>

              {/* Unlocked — Alif */}
              <button
                onClick={() => { setTab("meet"); setSidebarOpen(false); }}
                style={{ width: "100%", display: "flex", alignItems: "center", gap: 10, background: "rgba(34,197,94,.15)", border: "1px solid rgba(34,197,94,.3)", borderRadius: 10, padding: "10px 12px", cursor: "pointer", marginBottom: 6, textAlign: "left" }}
              >
                <span style={{ color: "#4ade80", fontFamily: "var(--font-amiri, serif)", fontSize: "1.3rem", lineHeight: 1, minWidth: 28, textAlign: "center" }}>ا</span>
                <div>
                  <div style={{ color: "#fff", fontWeight: 700, fontSize: ".84rem" }}>Letter 1 — Alif</div>
                  <div style={{ color: "#4ade80", fontSize: ".7rem" }}>✅ Unlocked</div>
                </div>
              </button>

              {/* Locked letters */}
              {LOCKED_LETTERS.map((letter, i) => (
                <div
                  key={letter}
                  style={{ display: "flex", alignItems: "center", gap: 10, background: "rgba(255,255,255,.04)", borderRadius: 10, padding: "8px 12px", marginBottom: 4, opacity: 0.55 }}
                >
                  <span style={{ color: "rgba(255,255,255,.4)", fontFamily: "var(--font-amiri, serif)", fontSize: "1.2rem", lineHeight: 1, minWidth: 28, textAlign: "center" }}>{letter}</span>
                  <div style={{ flex: 1 }}>
                    <div style={{ color: "rgba(255,255,255,.5)", fontSize: ".8rem" }}>Letter {i + 2}</div>
                  </div>
                  <Lock size={12} color="rgba(255,255,255,.35)" />
                </div>
              ))}

              <Link
                href="/courses/noorani-qaida-online"
                style={{ display: "block", textAlign: "center", background: "#d4a030", color: "#1a1a2e", fontWeight: 700, fontSize: ".82rem", padding: "10px", borderRadius: 10, textDecoration: "none", marginTop: 14 }}
              >
                Unlock Full Course →
              </Link>
            </div>
          )}
        </aside>

        {/* ── LESSON AREA ── */}
        <div style={{ flex: 1, display: "flex", flexDirection: "column", overflow: "hidden" }}>

          {/* Lesson header */}
          <div style={{ background: "#fff", borderBottom: "1px solid #e5e7eb", padding: "10px 16px", display: "flex", alignItems: "center", justifyContent: "space-between", flexShrink: 0 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <Home size={15} color="#6b7280" />
              <span style={{ color: "#9ca3af", fontSize: ".8rem" }}>›</span>
              <span style={{ color: "#374151", fontSize: ".85rem", fontWeight: 600 }}>Noorani Qaida</span>
              <span style={{ color: "#9ca3af", fontSize: ".8rem" }}>›</span>
              <span style={{ color: "#0a6e4f", fontSize: ".85rem", fontWeight: 700 }}>1. Alif</span>
            </div>
            <div style={{ display: "flex", gap: 6 }}>
              <button style={{ background: "#f3f4f6", border: "none", borderRadius: 8, padding: "5px 10px", cursor: "not-allowed", opacity: .5, display: "flex", alignItems: "center", gap: 3, fontSize: ".78rem", color: "#374151" }}>
                <ChevronLeft size={14} /> Prev
              </button>
              <button style={{ background: "#f3f4f6", border: "none", borderRadius: 8, padding: "5px 10px", cursor: "not-allowed", opacity: .5, display: "flex", alignItems: "center", gap: 3, fontSize: ".78rem", color: "#374151" }}>
                Next <ChevronRight size={14} />
              </button>
            </div>
          </div>

          {/* Tabs */}
          <div style={{ background: "#fff", borderBottom: "1px solid #e5e7eb", padding: "0 16px", display: "flex", gap: 0, flexShrink: 0, overflowX: "auto" }}>
            {TABS.map((t) => (
              <button
                key={t.id}
                onClick={() => { setTab(t.id); setActiveGame(null); }}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 5,
                  padding: "12px 16px",
                  border: "none",
                  borderBottom: `3px solid ${tab === t.id ? "#0a6e4f" : "transparent"}`,
                  background: "none",
                  color: tab === t.id ? "#0a6e4f" : "#6b7280",
                  fontWeight: tab === t.id ? 700 : 500,
                  fontSize: ".84rem",
                  cursor: "pointer",
                  whiteSpace: "nowrap",
                  transition: "all .15s",
                }}
              >
                {t.icon} {t.label}
              </button>
            ))}
          </div>

          {/* Tab content */}
          <div style={{ flex: 1, overflowY: "auto", padding: "16px" }}>

            {/* ── MEET TAB ── */}
            {tab === "meet" && (
              <div style={{ maxWidth: 780, margin: "0 auto" }}>
                <div style={{ display: "grid", gridTemplateColumns: "minmax(180px, 1fr) 2fr", gap: 16, marginBottom: 16 }}>
                  {/* Letter hero */}
                  <div style={{ background: "radial-gradient(circle, #fff, #f7f0db)", border: "2px solid #eedda6", borderRadius: 20, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "24px 12px", minHeight: 200 }}>
                    <span style={{ fontFamily: "var(--font-amiri, serif)", fontSize: "clamp(5rem, 12vw, 7rem)", fontWeight: 700, color: "#052e1c", lineHeight: 1 }}>ا</span>
                    <span style={{ color: "#6b7280", fontSize: ".8rem", marginTop: 8, fontWeight: 600 }}>Letter 1 · Alif</span>
                  </div>

                  {/* Info panel */}
                  <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                    <div style={{ background: "#fff", border: "1px solid #e5e7eb", borderRadius: 14, padding: "14px 16px" }}>
                      <div style={{ fontSize: ".68rem", color: "#9ca3af", fontWeight: 800, textTransform: "uppercase", letterSpacing: ".1em", marginBottom: 4 }}>Sound</div>
                      <div style={{ fontWeight: 700, color: "#111827", fontSize: "1rem" }}>{ALIF.transliteration}</div>
                      <div style={{ color: "#6b7280", fontSize: ".84rem", marginTop: 2 }}>{ALIF.sound}</div>
                    </div>
                    <div style={{ background: "#f0fdf4", border: "1px solid #bbf7d0", borderRadius: 14, padding: "14px 16px" }}>
                      <div style={{ fontSize: ".68rem", color: "#15803d", fontWeight: 800, textTransform: "uppercase", letterSpacing: ".1em", marginBottom: 4 }}>Makhraj (Origin)</div>
                      <div style={{ fontWeight: 600, color: "#111827", fontSize: ".9rem" }}>{ALIF.makhraj}</div>
                    </div>
                    <div style={{ background: "#fefce8", border: "1px solid #fef08a", borderRadius: 14, padding: "14px 16px" }}>
                      <div style={{ fontSize: ".68rem", color: "#a16207", fontWeight: 800, textTransform: "uppercase", letterSpacing: ".1em", marginBottom: 4 }}>💡 Child Prompt</div>
                      <div style={{ color: "#374151", fontSize: ".88rem", lineHeight: 1.55 }}>{ALIF.childPrompt}</div>
                    </div>
                  </div>
                </div>

                {/* Four forms */}
                <div style={{ background: "#fff", border: "1px solid #e5e7eb", borderRadius: 16, padding: "16px", marginBottom: 14 }}>
                  <div style={{ fontSize: ".72rem", color: "#9ca3af", fontWeight: 800, textTransform: "uppercase", letterSpacing: ".1em", marginBottom: 12 }}>Four Forms</div>
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 8 }}>
                    {ALIF.forms.map((f) => (
                      <div key={f.label} style={{ background: "#f9fafb", border: "1px solid #e5e7eb", borderRadius: 12, padding: "12px 8px", textAlign: "center" }}>
                        <div style={{ fontFamily: "var(--font-amiri, serif)", fontSize: "2.2rem", color: "#0a6e4f", fontWeight: 700, lineHeight: 1 }} lang="ar">{f.arabic}</div>
                        <div style={{ fontSize: ".72rem", color: "#6b7280", marginTop: 6 }}>{f.label}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Examples */}
                <div style={{ background: "#fff", border: "1px solid #e5e7eb", borderRadius: 16, padding: "16px", marginBottom: 14 }}>
                  <div style={{ fontSize: ".72rem", color: "#9ca3af", fontWeight: 800, textTransform: "uppercase", letterSpacing: ".1em", marginBottom: 12 }}>Examples</div>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
                    {ALIF.examples.map((ex) => (
                      <div key={ex.arabic} style={{ background: "#f9fafb", border: "1px solid #e5e7eb", borderRadius: 12, padding: "12px 14px", textAlign: "center" }}>
                        <div style={{ fontFamily: "var(--font-amiri, serif)", fontSize: "1.8rem", color: "#111827", lineHeight: 1 }} lang="ar" dir="rtl">{ex.arabic}</div>
                        <div style={{ fontWeight: 700, color: "#0a6e4f", fontSize: ".86rem", marginTop: 6 }}>{ex.meaning}</div>
                        <div style={{ color: "#6b7280", fontSize: ".75rem" }}>{ex.transliteration}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Parent tip */}
                <div style={{ background: "#f0f9ff", border: "1px solid #bae6fd", borderRadius: 14, padding: "14px 16px" }}>
                  <div style={{ fontSize: ".68rem", color: "#0369a1", fontWeight: 800, textTransform: "uppercase", letterSpacing: ".1em", marginBottom: 4 }}>👨‍👩‍👧 Parent Tip</div>
                  <p style={{ color: "#0c4a6e", fontSize: ".88rem", lineHeight: 1.6, margin: 0 }}>{ALIF.parentTip}</p>
                </div>
              </div>
            )}

            {/* ── HEAR TAB ── */}
            {tab === "hear" && (
              <div style={{ maxWidth: 520, margin: "0 auto", textAlign: "center" }}>
                <div style={{ background: "radial-gradient(circle, #fff, #f7f0db)", border: "2px solid #eedda6", borderRadius: 24, padding: "32px 24px", marginBottom: 20 }}>
                  <div style={{ fontFamily: "var(--font-amiri, serif)", fontSize: "6rem", color: "#052e1c", fontWeight: 700, lineHeight: 1 }}>ا</div>
                  <div style={{ color: "#6b7280", fontWeight: 600, marginTop: 8 }}>Alif — ā / a</div>
                </div>

                <button
                  onClick={simulateHear}
                  style={{
                    background: hearPlaying ? "#15803d" : "#0a6e4f",
                    color: "#fff",
                    border: "none",
                    borderRadius: 50,
                    padding: "14px 36px",
                    fontSize: "1rem",
                    fontWeight: 700,
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                    margin: "0 auto 20px",
                    transition: "all .2s",
                    boxShadow: hearPlaying ? "0 0 0 6px rgba(34,197,94,.2)" : "none",
                  }}
                >
                  <Volume2 size={20} />
                  {hearPlaying ? "Playing…" : "Play Sound"}
                </button>

                {/* Fake waveform */}
                <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 3, height: 48, marginBottom: 20 }}>
                  {WAVE_HEIGHTS.map((h, i) => (
                    <div
                      key={i}
                      style={{
                        width: 4,
                        borderRadius: 2,
                        background: hearPlaying ? "#22c55e" : "#d1d5db",
                        height: `${h}px`,
                        transition: "all .1s",
                      }}
                    />
                  ))}
                </div>

                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, textAlign: "left" }}>
                  <div style={{ background: "#fff", border: "1px solid #e5e7eb", borderRadius: 14, padding: "14px" }}>
                    <div style={{ fontSize: ".7rem", color: "#9ca3af", fontWeight: 800, textTransform: "uppercase", marginBottom: 4 }}>Normal Speed</div>
                    <button
                      onClick={simulateHear}
                      style={{ background: "#0a6e4f", color: "#fff", border: "none", borderRadius: 20, padding: "6px 14px", fontSize: ".8rem", fontWeight: 700, cursor: "pointer", width: "100%" }}
                    >
                      ▶ Normal
                    </button>
                  </div>
                  <div style={{ background: "#fff", border: "1px solid #e5e7eb", borderRadius: 14, padding: "14px" }}>
                    <div style={{ fontSize: ".7rem", color: "#9ca3af", fontWeight: 800, textTransform: "uppercase", marginBottom: 4 }}>Slow Speed</div>
                    <button
                      onClick={simulateHear}
                      style={{ background: "#6b7280", color: "#fff", border: "none", borderRadius: 20, padding: "6px 14px", fontSize: ".8rem", fontWeight: 700, cursor: "pointer", width: "100%" }}
                    >
                      ▶ Slow ×0.5
                    </button>
                  </div>
                </div>

                <p style={{ color: "#6b7280", fontSize: ".82rem", marginTop: 20, lineHeight: 1.6 }}>
                  Tip: Listen several times, then try to say Alif yourself. The sound comes from the open throat — not the lips.
                </p>
              </div>
            )}

            {/* ── TRACE TAB ── */}
            {tab === "trace" && (
              <div style={{ maxWidth: 520, margin: "0 auto" }}>
                <div
                  onMouseMove={(e) => { if (e.buttons === 1) handleTrace(e); }}
                  onClick={handleTrace}
                  style={{ background: "#fff", border: "2px dashed #d1d5db", borderRadius: 24, padding: 0, marginBottom: 16, position: "relative", height: 280, cursor: "crosshair", userSelect: "none" }}
                >
                  {/* Guide letter */}
                  <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", pointerEvents: "none" }}>
                    <span style={{ fontFamily: "var(--font-amiri, serif)", fontSize: "10rem", fontWeight: 700, color: "rgba(10,110,79,.06)", lineHeight: 1 }}>ا</span>
                  </div>
                  {/* Trace dots */}
                  {traceDots.map((dot, i) => (
                    <div
                      key={i}
                      style={{ position: "absolute", left: `${dot.x}%`, top: `${dot.y}%`, width: 10, height: 10, borderRadius: "50%", background: "#0a6e4f", transform: "translate(-50%,-50%)", opacity: Math.max(0.2, i / traceDots.length) }}
                    />
                  ))}
                  {traceMsg && (
                    <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", background: "rgba(255,255,255,.88)", borderRadius: 22 }}>
                      <div style={{ fontSize: "1.1rem", fontWeight: 700, color: "#15803d" }}>{traceMsg}</div>
                    </div>
                  )}
                  <div style={{ position: "absolute", top: 10, right: 12, fontSize: ".72rem", color: "#9ca3af" }}>Click or drag to trace</div>
                </div>

                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginBottom: 14 }}>
                  <button
                    onClick={() => setTraceDots([])}
                    style={{ background: "#f3f4f6", border: "1px solid #e5e7eb", borderRadius: 10, padding: "10px", fontSize: ".84rem", fontWeight: 600, color: "#374151", cursor: "pointer" }}
                  >
                    Clear
                  </button>
                  <button
                    onClick={() => { setTraceDots([]); setTraceMsg("Great! Alif is a single vertical stroke ⬇"); setTimeout(() => setTraceMsg(""), 2000); }}
                    style={{ background: "#0a6e4f", border: "none", borderRadius: 10, padding: "10px", fontSize: ".84rem", fontWeight: 700, color: "#fff", cursor: "pointer" }}
                  >
                    Check
                  </button>
                </div>

                <div style={{ background: "#fff", border: "1px solid #e5e7eb", borderRadius: 14, padding: "14px 16px" }}>
                  <div style={{ fontSize: ".7rem", color: "#9ca3af", fontWeight: 800, textTransform: "uppercase", marginBottom: 6 }}>Writing Cue</div>
                  <p style={{ color: "#374151", fontSize: ".88rem", lineHeight: 1.6, margin: 0 }}>{ALIF.writingCue}</p>
                </div>
              </div>
            )}

            {/* ── PLAY TAB ── */}
            {tab === "play" && (
              <div style={{ maxWidth: 680, margin: "0 auto" }}>
                {activeGame === null ? (
                  <>
                    <div style={{ marginBottom: 20 }}>
                      <h2 style={{ fontFamily: "var(--font-playfair, Georgia, serif)", fontSize: "1.25rem", fontWeight: 700, color: "#111827", margin: "0 0 4px" }}>
                        Let&apos;s Practise with Fun! 🎮
                      </h2>
                      <p style={{ color: "#6b7280", fontSize: ".88rem", margin: 0 }}>
                        All 3 games focus on Alif (ا) — play them all to earn stars and XP.
                      </p>
                    </div>

                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: 14, marginBottom: 20 }}>
                      {GAMES.map((game) => (
                        <button
                          key={game.id}
                          onClick={() => setActiveGame(game.id)}
                          style={{
                            background: "#fff",
                            border: `2px solid ${completedGames.includes(game.id) ? game.color : "#e5e7eb"}`,
                            borderRadius: 18,
                            padding: "20px 14px",
                            textAlign: "center",
                            cursor: "pointer",
                            transition: "all .2s",
                            position: "relative",
                          }}
                        >
                          {completedGames.includes(game.id) && (
                            <div style={{ position: "absolute", top: 8, right: 8, background: game.color, color: "#fff", borderRadius: "50%", width: 20, height: 20, fontSize: ".65rem", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 800 }}>✓</div>
                          )}
                          <div style={{ fontSize: "2.4rem", lineHeight: 1, marginBottom: 8 }}>{game.icon}</div>
                          <div style={{ fontWeight: 700, color: "#111827", fontSize: ".92rem", marginBottom: 4 }}>{game.label}</div>
                          <div style={{ color: "#6b7280", fontSize: ".78rem" }}>{game.desc}</div>
                        </button>
                      ))}
                    </div>

                    {/* Locked games notice */}
                    <div style={{ background: "linear-gradient(135deg, #f9fafb, #f3f4f6)", border: "1px solid #e5e7eb", borderRadius: 16, padding: "16px", textAlign: "center" }}>
                      <Lock size={20} color="#9ca3af" style={{ margin: "0 auto 8px", display: "block" }} />
                      <div style={{ fontWeight: 600, color: "#374151", fontSize: ".9rem", marginBottom: 4 }}>4 more games unlock with full access</div>
                      <div style={{ color: "#6b7280", fontSize: ".8rem", marginBottom: 10 }}>Find Letter · Letter Train · Puzzle · Sound Match</div>
                      <Link href="/courses/noorani-qaida-online" style={{ background: "#0a6e4f", color: "#fff", fontWeight: 700, fontSize: ".82rem", padding: "8px 20px", borderRadius: 20, textDecoration: "none" }}>
                        Unlock All Games →
                      </Link>
                    </div>
                  </>
                ) : (
                  <div>
                    <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 16 }}>
                      <button
                        onClick={() => setActiveGame(null)}
                        style={{ background: "#f3f4f6", border: "none", borderRadius: 8, padding: "6px 10px", cursor: "pointer", display: "flex", alignItems: "center", gap: 4, fontSize: ".82rem", color: "#374151", fontWeight: 600 }}
                      >
                        <X size={14} /> Back to Games
                      </button>
                      <span style={{ fontWeight: 700, color: "#111827", fontSize: "1rem" }}>
                        {GAMES.find((g) => g.id === activeGame)?.icon}{" "}
                        {GAMES.find((g) => g.id === activeGame)?.label}
                      </span>
                    </div>

                    <div style={{ background: "#fff", border: "1px solid #e5e7eb", borderRadius: 20, padding: "20px 16px" }}>
                      {activeGame === "bubble" && (
                        <BubblePopGame onComplete={(score) => handleGameComplete("bubble", score)} />
                      )}
                      {activeGame === "quiz" && (
                        <QuickQuiz onComplete={(score) => handleGameComplete("quiz", score)} />
                      )}
                      {activeGame === "match" && (
                        <LetterMatchGame onComplete={(score) => handleGameComplete("match", score)} />
                      )}
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* ── REWARD TAB ── */}
            {tab === "reward" && (
              <div style={{ maxWidth: 520, margin: "0 auto", textAlign: "center" }}>
                {/* Stars */}
                <div style={{ display: "flex", gap: 10, justifyContent: "center", marginBottom: 20 }}>
                  {[0,1,2].map((i) => (
                    <div key={i} style={{ width: 70, height: 70, borderRadius: "50%", background: i < stars ? "linear-gradient(135deg,#fde047,#f59e0b)" : "#f3f4f6", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "2rem", boxShadow: i < stars ? "0 4px 14px rgba(245,158,11,.4)" : "none", transition: "all .3s" }}>
                      {i < stars ? "⭐" : "☆"}
                    </div>
                  ))}
                </div>

                <div style={{ background: "#fff", border: "1px solid #e5e7eb", borderRadius: 20, padding: "24px", marginBottom: 16 }}>
                  <div style={{ fontSize: "1.4rem", fontWeight: 800, color: "#111827", marginBottom: 8 }}>
                    {xp} XP earned
                  </div>
                  <div style={{ color: "#6b7280", fontSize: ".9rem", lineHeight: 1.6, marginBottom: 16 }}>
                    {completedGames.length === 0 && "Play games to earn XP and stars!"}
                    {completedGames.length === 1 && "Great start! Try the other games to earn more stars."}
                    {completedGames.length === 2 && "Nearly there! One more game for full stars."}
                    {completedGames.length === 3 && "🏆 You completed all Alif activities! Brilliant work."}
                  </div>

                  {/* Progress */}
                  <div style={{ background: "#f3f4f6", borderRadius: 10, height: 10, marginBottom: 12, overflow: "hidden" }}>
                    <div style={{ background: "linear-gradient(90deg, #22c55e, #0a6e4f)", height: "100%", width: `${(completedGames.length / 3) * 100}%`, borderRadius: 10, transition: "width .5s ease" }} />
                  </div>
                  <div style={{ fontSize: ".78rem", color: "#6b7280" }}>{completedGames.length}/3 activities completed</div>
                </div>

                {/* Badge */}
                <div style={{ background: completedGames.length === 3 ? "linear-gradient(135deg,#fef9c3,#fde047)" : "#f9fafb", border: `2px solid ${completedGames.length === 3 ? "#eab308" : "#e5e7eb"}`, borderRadius: 20, padding: "20px", marginBottom: 16 }}>
                  <div style={{ fontSize: "2.5rem", marginBottom: 8 }}>{completedGames.length === 3 ? "🥇" : "🏅"}</div>
                  <div style={{ fontWeight: 700, color: "#374151" }}>{completedGames.length === 3 ? "Alif Champion Badge!" : "Alif Explorer Badge"}</div>
                  <div style={{ color: "#6b7280", fontSize: ".82rem", marginTop: 4 }}>
                    {completedGames.length === 3 ? "Awarded for completing all Alif activities" : "Complete all 3 games to unlock the Champion badge"}
                  </div>
                </div>

                <Link
                  href="/courses/noorani-qaida-online"
                  style={{ display: "block", background: "linear-gradient(135deg,#0a6e4f,#15803d)", color: "#fff", fontWeight: 700, padding: "14px 24px", borderRadius: 20, textDecoration: "none", fontSize: ".95rem" }}
                >
                  Continue with All 28 Letters →
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
