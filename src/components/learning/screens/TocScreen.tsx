"use client";
import { motion } from "framer-motion";
import { LETTERS } from "@/data/learning/letters";
import { COLOR_GROUPS } from "@/data/learning/colorGroups";
import type { ScreenId } from "@/data/learning/types";

interface Props { onNavigate: (id: ScreenId) => void; done: Set<number>; }

const UNIT2_ITEMS: { id: ScreenId; ar: string; title: string }[] = [
  { id: "harakat-intro", ar: "بَ", title: "Harakat Overview & Introduction" },
  { id: "fatha",         ar: "بَ", title: "Fatha — Short 'a' Sound" },
  { id: "kasra",         ar: "بِ", title: "Kasra — Short 'i' Sound" },
  { id: "damma",         ar: "بُ", title: "Damma — Short 'u' Sound" },
];
const UNIT3_ITEMS: { id: ScreenId; ar: string; title: string }[] = [
  { id: "tanween", ar: "ً", title: "Tanween — Double Vowels" },
  { id: "sukoon",  ar: "ْ", title: "Sukoon — Resting Sound" },
  { id: "shaddah", ar: "ّ", title: "Shaddah — Doubled Stress" },
];
const UNIT4_ITEMS: { id: ScreenId; ar: string; title: string }[] = [
  { id: "madd", ar: "آ", title: "Madd — Alif, Waw & Ya Long Vowels" },
];
const UNIT5_ITEMS: { id: ScreenId; ar: string; title: string }[] = [
  { id: "joining",           ar: "🔗", title: "Joining Letters Together" },
  { id: "compound",          ar: "لا", title: "Compound Letters (Lam-Alif)" },
  { id: "reading-words",     ar: "📖", title: "Reading Arabic Words (3 Levels)" },
  { id: "reading-stories",   ar: "📚", title: "Reading Stories & Mini Texts" },
  { id: "reading-sentences", ar: "📄", title: "Reading Full Sentences" },
  { id: "quran-practice",    ar: "☀️", title: "Simple Quran Practice" },
];
const UNIT6_ITEMS: { id: ScreenId; ar: string; title: string }[] = [
  { id: "tajweed-intro", ar: "🎵", title: "Introduction to Tajweed" },
];
const UNIT7_ITEMS: { id: ScreenId; ar: string; title: string }[] = [
  { id: "revision",    ar: "🔄", title: "Grand Revision" },
  { id: "assessment",  ar: "📋", title: "Assessment & Evaluation Rubric" },
  { id: "certificate", ar: "🏆", title: "Certificate of Achievement" },
];

const INTRO_ITEMS: { id: ScreenId; ar: string; title: string }[] = [
  { id: "how-to",        ar: "📘", title: "How to Use This Book" },
  { id: "teacher-guide", ar: "👩‍🏫", title: "Complete Teacher's Guide" },
  { id: "parent-guide",  ar: "❤️", title: "Parent's Guide & Checklist" },
  { id: "planner",       ar: "📅", title: "Weekly Learning Planner" },
  { id: "alphabet-chart",ar: "📖", title: "Full Alphabet Chart (28 Letters)" },
  { id: "letter-families",ar:"👥", title: "Letter Families & Groups" },
  { id: "flashcards",    ar: "🃏", title: "Interactive Flashcard Mode" },
  { id: "progress",      ar: "⭐", title: "My Progress Tracker" },
];

function TocUnit({ color, title, children }: { color: string; title: string; children: React.ReactNode }) {
  return (
    <div style={{ borderRadius: 14, overflow: "hidden", marginBottom: 14 }}>
      <div style={{ padding: "11px 18px", fontWeight: 900, fontSize: ".88rem", color: "#fff", background: color }}>{title}</div>
      <div style={{ background: "#fff", border: "1px solid #E0E0E0" }}>{children}</div>
    </div>
  );
}

function TocItem({ ar, title, done, onClick }: { ar: string; title: string; done?: boolean; onClick: () => void }) {
  return (
    <button onClick={onClick} style={{ display: "flex", alignItems: "center", gap: 10, padding: "9px 18px", borderBottom: "1px solid #F5F5F5", cursor: "pointer", textDecoration: "none", color: "#1a1a1a", background: "none", border: "none", width: "100%", textAlign: "left", transition: "background .15s" }}
      onMouseEnter={(e) => (e.currentTarget.style.background = "#F5F5F5")}
      onMouseLeave={(e) => (e.currentTarget.style.background = "none")}
    >
      <span style={{ fontFamily: "'Amiri', serif", fontSize: "1.3rem", width: 32, textAlign: "center", flexShrink: 0 }}>{ar}</span>
      <span style={{ flex: 1, fontWeight: 700, fontSize: ".84rem" }}>{title}</span>
      <span style={{ fontSize: ".8rem", color: done ? "#1B6B3A" : "#ccc" }}>{done ? "✓" : "○"}</span>
    </button>
  );
}

export default function TocScreen({ onNavigate, done }: Props) {
  return (
    <div style={{ maxWidth: 980, margin: "0 auto", padding: "24px 16px 64px" }}>
      <div style={{ borderRadius: 16, padding: "28px 24px", marginBottom: 24, background: "linear-gradient(135deg,#0D3D1E,#1B6B3A)", color: "#fff" }}>
        <div style={{ display: "inline-block", background: "rgba(255,215,0,.18)", color: "#FFD700", fontSize: ".65rem", fontWeight: 800, letterSpacing: "2px", textTransform: "uppercase", padding: "3px 12px", borderRadius: 50, marginBottom: 8 }}>Navigation</div>
        <h1 style={{ fontSize: "clamp(1.4rem,3.5vw,2rem)", fontWeight: 900, margin: 0 }}>Table of Contents</h1>
        <p style={{ color: "rgba(255,255,255,.75)", fontSize: ".88rem", margin: "6px 0 0" }}>Your complete learning roadmap — click any lesson to jump straight to it!</p>
      </div>

      <TocUnit color="#1B6B3A" title="Introduction & Setup">
        {INTRO_ITEMS.map(({ id, ar, title }) => (
          <TocItem key={id} ar={ar} title={title} onClick={() => onNavigate(id)} />
        ))}
      </TocUnit>

      <TocUnit color="#1565C0" title="Unit 1 — Arabic Alphabet (28 Lessons)">
        {LETTERS.map((lt) => {
          const gc = COLOR_GROUPS[lt.colorGroup];
          return (
            <TocItem
              key={lt.id}
              ar={<span style={{ color: gc.text, fontFamily: "'Amiri', serif" }}>{lt.letter}</span> as unknown as string}
              title={`Lesson ${lt.id}: ${lt.name} (${lt.arabicName})`}
              done={done.has(lt.id)}
              onClick={() => onNavigate(`letter-${lt.id}` as ScreenId)}
            />
          );
        })}
      </TocUnit>

      <TocUnit color="#6A1B9A" title="Unit 2 — Short Vowels (Harakat)">
        {UNIT2_ITEMS.map(({ id, ar, title }) => <TocItem key={id} ar={ar} title={title} onClick={() => onNavigate(id)} />)}
      </TocUnit>

      <TocUnit color="#00695C" title="Unit 3 — Special Diacritics">
        {UNIT3_ITEMS.map(({ id, ar, title }) => <TocItem key={id} ar={ar} title={title} onClick={() => onNavigate(id)} />)}
      </TocUnit>

      <TocUnit color="#E65100" title="Unit 4 — Madd (Long Vowels)">
        {UNIT4_ITEMS.map(({ id, ar, title }) => <TocItem key={id} ar={ar} title={title} onClick={() => onNavigate(id)} />)}
      </TocUnit>

      <TocUnit color="#AD1457" title="Unit 5 — Joining Letters & Reading">
        {UNIT5_ITEMS.map(({ id, ar, title }) => <TocItem key={id} ar={ar} title={title} onClick={() => onNavigate(id)} />)}
      </TocUnit>

      <TocUnit color="#37474F" title="Unit 6 — Tajweed Basics">
        {UNIT6_ITEMS.map(({ id, ar, title }) => <TocItem key={id} ar={ar} title={title} onClick={() => onNavigate(id)} />)}
      </TocUnit>

      <TocUnit color="#C8902E" title="Unit 7 — Revision & Achievement">
        {UNIT7_ITEMS.map(({ id, ar, title }) => <TocItem key={id} ar={ar} title={title} onClick={() => onNavigate(id)} />)}
      </TocUnit>

      <div style={{ textAlign: "center", marginTop: 12 }}>
        <motion.button whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }} onClick={() => onNavigate("how-to")}
          style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "linear-gradient(135deg,#FFD700,#FFA000)", color: "#1a1a1a", fontWeight: 900, fontSize: "1rem", padding: "13px 32px", borderRadius: 50, border: "none", cursor: "pointer" }}>
          ➡️ Let's Begin!
        </motion.button>
      </div>
    </div>
  );
}
