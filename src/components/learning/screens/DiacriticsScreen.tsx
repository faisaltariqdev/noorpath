"use client";
import { motion } from "framer-motion";
import StarRating from "@/components/learning/ui/StarRating";
import ActivityBox from "@/components/learning/ui/ActivityBox";
import type { ScreenId } from "@/data/learning/types";

type DiacriticId = "tanween" | "sukoon" | "shaddah";

interface Props {
  id: DiacriticId;
  onNavigate: (id: ScreenId) => void;
  onRate: (screen: string, count: number) => void;
}

const DIACRITICS = {
  tanween: {
    name: "Tanween",
    arabic: "\u064B",
    display: "\u0628\u064B",
    sound: "an / in / un",
    description: "Double vowel marks that add a 'n' sound to the end of a word.",
    color: "#1565C0",
    bg: "#E3F2FD",
    emoji: "✨",
    examples: [
      { text: "\u0628\u064B", roman: "ban", mark: "Fathatan (an)" },
      { text: "\u0628\u064C", roman: "bin", mark: "Kasratan (in)" },
      { text: "\u0628\u064D", roman: "bun", mark: "Dammatan (un)" },
    ],
    tip: "Tanween adds an 'n' sound to the end — think of it as double the vowel!",
    next: "sukoon" as ScreenId,
    prev: "damma" as ScreenId,
  },
  sukoon: {
    name: "Sukoon",
    arabic: "\u0652",
    display: "\u0628\u0652",
    sound: "(no vowel)",
    description: "A small circle above a letter meaning it has no vowel — the letter just stops.",
    color: "#00695C",
    bg: "#E0F2F1",
    emoji: "🤫",
    examples: [
      { text: "\u0633\u064A\u0652\u0641", roman: "sayf", mark: "Sukoon on Fa" },
      { text: "\u0643\u064E\u0644\u0652\u0628", roman: "kalb", mark: "Sukoon on Ba" },
      { text: "\u0628\u064E\u064A\u0652\u062A", roman: "bayt", mark: "Sukoon on Ta" },
    ],
    tip: "Sukoon means 'silence' — the letter stops without any vowel sound!",
    next: "shaddah" as ScreenId,
    prev: "tanween" as ScreenId,
  },
  shaddah: {
    name: "Shaddah",
    arabic: "\u0651",
    display: "\u0628\u0651",
    sound: "doubled",
    description: "A doubled stress mark — the letter is pronounced twice as strongly.",
    color: "#6A1B9A",
    bg: "#F3E5F5",
    emoji: "💪",
    examples: [
      { text: "\u0645\u064E\u062D\u064E\u0628\u0651\u064E\u0629", roman: "mahab-ba", mark: "Love" },
      { text: "\u0631\u064E\u0628\u0651", roman: "rabb", mark: "Lord" },
      { text: "\u062C\u064E\u0646\u0651\u064E\u0629", roman: "jan-na", mark: "Paradise" },
    ],
    tip: "Shaddah means the letter is 'doubled' — say it with extra emphasis!",
    next: "madd" as ScreenId,
    prev: "sukoon" as ScreenId,
  },
};

export default function DiacriticsScreen({ id, onNavigate, onRate }: Props) {
  const d = DIACRITICS[id];
  return (
    <div style={{ maxWidth: 980, margin: "0 auto", padding: "24px 16px 64px" }}>
      <div style={{ borderRadius: 16, padding: "28px 24px", marginBottom: 24, background: `linear-gradient(135deg,${d.color}dd,${d.color})`, color: "#fff" }}>
        <div style={{ display: "inline-block", background: "rgba(255,255,255,.15)", color: "#fff", fontSize: ".65rem", fontWeight: 800, letterSpacing: "2px", textTransform: "uppercase", padding: "3px 12px", borderRadius: 50, marginBottom: 8 }}>Unit 3 · Diacritics</div>
        <h1 style={{ fontSize: "clamp(1.4rem,3.5vw,2rem)", fontWeight: 900, margin: 0 }}>{d.name} — {d.description.split(" ").slice(0, 5).join(" ")}…</h1>
        <p style={{ color: "rgba(255,255,255,.75)", fontSize: ".88rem", margin: "6px 0 0" }}>{d.description}</p>
      </div>

      {/* Big display */}
      <div style={{ background: d.bg, borderRadius: 20, padding: "32px 20px", textAlign: "center", marginBottom: 20 }}>
        <div style={{ fontSize: "2rem", marginBottom: 8 }}>{d.emoji}</div>
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", damping: 12 }}
          style={{ fontFamily: "'Amiri', serif", fontSize: "clamp(4rem,15vw,8rem)", color: d.color, lineHeight: 1 }}
        >
          {d.display}
        </motion.div>
        <div style={{ fontWeight: 900, fontSize: "1.4rem", color: d.color, marginTop: 8 }}>{d.name}</div>
        <div style={{ fontSize: ".96rem", color: `${d.color}99`, fontWeight: 700 }}>Sound: "{d.sound}"</div>
      </div>

      {/* Examples */}
      <div style={{ background: "#fff", borderRadius: 16, boxShadow: "0 2px 14px rgba(0,0,0,.07)", overflow: "hidden", marginBottom: 16 }}>
        <div style={{ background: d.bg, color: d.color, padding: "12px 18px", fontWeight: 800, fontSize: ".88rem" }}>Examples</div>
        <div style={{ padding: 18, display: "flex", gap: 10, flexWrap: "wrap" }}>
          {d.examples.map(({ text, roman, mark }) => (
            <div key={text} style={{ background: d.bg, borderRadius: 14, padding: "14px 18px", textAlign: "center", flex: "1 1 120px", border: `2px solid ${d.color}22` }}>
              <div style={{ fontFamily: "'Amiri', serif", fontSize: "2.4rem", color: d.color, lineHeight: 1 }}>{text}</div>
              <div style={{ fontWeight: 800, fontSize: ".8rem", color: d.color, marginTop: 6 }}>{roman}</div>
              <div style={{ fontSize: ".68rem", color: "#666", marginTop: 2 }}>{mark}</div>
            </div>
          ))}
        </div>
      </div>

      <div style={{ background: "#FFFDE7", borderLeft: "4px solid #FDD835", borderRadius: "0 12px 12px 0", padding: "12px 18px", marginBottom: 16, fontSize: ".88rem" }}>
        💡 {d.tip}
      </div>

      <ActivityBox variant="reward" title="My Stars" icon="⭐">
        <StarRating screenId={id} onRate={(count) => onRate(id, count)} />
      </ActivityBox>

      <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 10, marginTop: 16 }}>
        <motion.button whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }} onClick={() => onNavigate(d.prev)}
          style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "linear-gradient(135deg,#1B6B3A,#0D3D1E)", color: "#fff", fontWeight: 800, fontSize: ".84rem", padding: "10px 22px", borderRadius: 50, border: "none", cursor: "pointer" }}>
          ← Back
        </motion.button>
        <motion.button whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }} onClick={() => onNavigate(d.next)}
          style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "linear-gradient(135deg,#FFD700,#FFA000)", color: "#1a1a1a", fontWeight: 800, fontSize: ".84rem", padding: "10px 22px", borderRadius: 50, border: "none", cursor: "pointer" }}>
          Next →
        </motion.button>
      </div>
    </div>
  );
}
