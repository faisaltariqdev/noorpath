"use client";
import { motion, AnimatePresence } from "framer-motion";
import { X, Home, List, BookOpen, GraduationCap, Heart, Calendar, Grid3x3, Layers, CreditCard, BarChart3, Star } from "lucide-react";
import { LETTERS } from "@/data/learning/letters";
import { COLOR_GROUPS } from "@/data/learning/colorGroups";
import type { ScreenId } from "@/data/learning/types";

interface Props {
  open: boolean;
  onClose: () => void;
  onNavigate: (id: ScreenId) => void;
  screen: ScreenId;
  done: Set<number>;
}

const SB_INTRO = [
  { id: "cover" as ScreenId,         icon: <Home size={14} />,          label: "Home & Cover" },
  { id: "toc" as ScreenId,           icon: <List size={14} />,          label: "Table of Contents" },
  { id: "how-to" as ScreenId,        icon: <BookOpen size={14} />,      label: "How to Use" },
  { id: "teacher-guide" as ScreenId, icon: <GraduationCap size={14} />, label: "Teacher's Guide" },
  { id: "parent-guide" as ScreenId,  icon: <Heart size={14} />,         label: "Parent's Guide" },
  { id: "planner" as ScreenId,       icon: <Calendar size={14} />,      label: "Weekly Planner" },
  { id: "alphabet-chart" as ScreenId,icon: <Grid3x3 size={14} />,       label: "Alphabet Chart" },
  { id: "letter-families" as ScreenId,icon:<Layers size={14} />,        label: "Letter Families" },
  { id: "flashcards" as ScreenId,    icon: <CreditCard size={14} />,    label: "Flashcard Mode" },
  { id: "progress" as ScreenId,      icon: <BarChart3 size={14} />,     label: "My Progress" },
];

const UNIT_SECTIONS = [
  { label: "Unit 2 — Vowels",      items: [
    { id: "harakat-intro" as ScreenId, ar: "بَ", label: "Harakat Overview" },
    { id: "fatha" as ScreenId,         ar: "بَ", label: "Fatha (short a)" },
    { id: "kasra" as ScreenId,         ar: "بِ", label: "Kasra (short i)" },
    { id: "damma" as ScreenId,         ar: "بُ", label: "Damma (short u)" },
  ]},
  { label: "Unit 3 — Diacritics",  items: [
    { id: "tanween" as ScreenId,   ar: "ً", label: "Tanween" },
    { id: "sukoon" as ScreenId,    ar: "ْ", label: "Sukoon" },
    { id: "shaddah" as ScreenId,   ar: "ّ", label: "Shaddah" },
  ]},
  { label: "Unit 4 — Madd",        items: [
    { id: "madd" as ScreenId,      ar: "آ", label: "Madd (Long Vowels)" },
  ]},
  { label: "Unit 5 — Reading",     items: [
    { id: "joining" as ScreenId,          ar: "🔗", label: "Joining Letters" },
    { id: "compound" as ScreenId,         ar: "لا", label: "Compound Letters" },
    { id: "reading-words" as ScreenId,    ar: "📖", label: "Reading Words" },
    { id: "reading-stories" as ScreenId,  ar: "📚", label: "Reading Stories" },
    { id: "reading-sentences" as ScreenId,ar: "📄", label: "Sentences" },
    { id: "quran-practice" as ScreenId,   ar: "☀️", label: "Quran Practice" },
  ]},
  { label: "Unit 6 — Tajweed",     items: [
    { id: "tajweed-intro" as ScreenId, ar: "🎵", label: "Tajweed Introduction" },
  ]},
  { label: "Unit 7 — Assessment",  items: [
    { id: "revision" as ScreenId,    ar: "🔄", label: "Grand Revision" },
    { id: "assessment" as ScreenId,  ar: "📋", label: "Assessment" },
    { id: "certificate" as ScreenId, ar: "🏆", label: "Certificate" },
  ]},
];

function SbItem({ id, icon, label, active, done: isDone, onNav }: { id: ScreenId; icon?: React.ReactNode; label: string; active: boolean; done?: boolean; onNav: (id: ScreenId) => void }) {
  return (
    <button
      onClick={() => onNav(id)}
      style={{
        display: "flex", alignItems: "center", gap: 9, width: "100%",
        background: active ? "rgba(255,255,255,.14)" : "transparent",
        border: "none", color: active ? "#fff" : "rgba(255,255,255,.78)",
        fontSize: ".79rem", fontWeight: active ? 700 : 600, padding: "8px 14px",
        cursor: "pointer", textAlign: "left", transition: "background .15s",
        fontFamily: "'Nunito', sans-serif",
      }}
    >
      {icon && <span style={{ opacity: .8 }}>{icon}</span>}
      <span style={{ flex: 1 }}>{label}</span>
      {isDone && <span style={{ color: "#FFD700", fontSize: ".8rem" }}>✓</span>}
    </button>
  );
}

export default function QaidaSidebar({ open, onClose, onNavigate, screen, done }: Props) {
  return (
    <>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={onClose}
            style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,.5)", zIndex: 1050 }}
          />
        )}
      </AnimatePresence>

      <motion.nav
        initial={{ x: "-100%" }} animate={{ x: open ? 0 : "-100%" }}
        transition={{ type: "spring", damping: 28, stiffness: 260 }}
        style={{
          position: "fixed", top: 0, left: 0, width: 280, height: "100vh",
          background: "linear-gradient(180deg, #0D3D1E 0%, #0a2e18 100%)",
          zIndex: 1060, overflowY: "auto", paddingBottom: 40,
          boxShadow: "4px 0 24px rgba(0,0,0,.35)",
        }}
        aria-label="Lesson navigation"
      >
        {/* Header */}
        <div style={{ background: "rgba(0,0,0,.3)", padding: "18px 14px", textAlign: "center", borderBottom: "1px solid rgba(255,255,255,.1)", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div>
            <div style={{ color: "#FFD700", fontWeight: 900, fontSize: ".88rem", fontFamily: "'Baloo 2', cursive" }}>NoorPath Academy</div>
            <div style={{ color: "rgba(255,255,255,.55)", fontSize: ".68rem", marginTop: 2 }}>Noorani Qaida · Ages 3–6</div>
          </div>
          <button onClick={onClose} aria-label="Close navigation" style={{ background: "rgba(255,255,255,.1)", border: "none", borderRadius: 8, color: "#fff", padding: "6px 8px", cursor: "pointer" }}>
            <X size={16} />
          </button>
        </div>

        {/* Intro links */}
        <div style={{ color: "#FFD700", fontSize: ".62rem", fontWeight: 800, letterSpacing: "2px", padding: "10px 14px 2px", textTransform: "uppercase" }}>Introduction</div>
        {SB_INTRO.map(({ id, icon, label }) => (
          <SbItem key={id} id={id} icon={icon} label={label} active={screen === id} onNav={onNavigate} />
        ))}

        {/* Unit 1 — Letters */}
        <div style={{ color: "#FFD700", fontSize: ".62rem", fontWeight: 800, letterSpacing: "2px", padding: "10px 14px 2px", textTransform: "uppercase" }}>Unit 1 — Alphabet</div>
        {LETTERS.map((lt) => {
          const gc = COLOR_GROUPS[lt.colorGroup];
          const sid = `letter-${lt.id}` as ScreenId;
          return (
            <SbItem
              key={lt.id}
              id={sid}
              icon={<span style={{ fontFamily: "'Amiri', serif", fontSize: "1.05rem", color: gc.bg, width: 20, textAlign: "center" }}>{lt.letter}</span>}
              label={`${lt.id}. ${lt.name}`}
              active={screen === sid}
              done={done.has(lt.id)}
              onNav={onNavigate}
            />
          );
        })}

        {/* Units 2–7 */}
        {UNIT_SECTIONS.map((section) => (
          <div key={section.label}>
            <div style={{ color: "#FFD700", fontSize: ".62rem", fontWeight: 800, letterSpacing: "2px", padding: "10px 14px 2px", textTransform: "uppercase" }}>{section.label}</div>
            {section.items.map(({ id, ar, label }) => (
              <SbItem
                key={id}
                id={id}
                icon={<span style={{ fontFamily: "'Amiri', serif", fontSize: "1rem", width: 20, textAlign: "center" }}>{ar}</span>}
                label={label}
                active={screen === id}
                onNav={onNavigate}
              />
            ))}
          </div>
        ))}

        {/* Stars earned */}
        {done.size > 0 && (
          <div style={{ margin: "16px 14px", background: "rgba(255,215,0,.12)", border: "1px solid rgba(255,215,0,.25)", borderRadius: 12, padding: "12px" }}>
            <div style={{ color: "#FFD700", fontWeight: 800, fontSize: ".78rem", marginBottom: 6, display: "flex", alignItems: "center", gap: 6 }}>
              <Star size={13} fill="#FFD700" stroke="#FFD700" /> My Progress
            </div>
            <div style={{ color: "rgba(255,255,255,.8)", fontSize: ".74rem" }}>{done.size} of 28 letters completed ({Math.round((done.size / 28) * 100)}%)</div>
          </div>
        )}
      </motion.nav>
    </>
  );
}
