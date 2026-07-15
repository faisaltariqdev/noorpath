"use client";
import { motion } from "framer-motion";
import { JOINING_EXAMPLES, QURAN_PRACTICE } from "@/data/learning/curriculum";
import StarRating from "@/components/learning/ui/StarRating";
import type { ScreenId } from "@/data/learning/types";

type ReadingId = "joining" | "compound" | "reading-words" | "reading-stories" | "reading-sentences" | "quran-practice";

interface Props {
  screenId: ReadingId;
  onNavigate: (id: ScreenId) => void;
  onRate: (screen: string, count: number) => void;
}

const NEXT_MAP: Record<ReadingId, ScreenId> = {
  joining: "compound",
  compound: "reading-words",
  "reading-words": "reading-stories",
  "reading-stories": "reading-sentences",
  "reading-sentences": "quran-practice",
  "quran-practice": "tajweed-intro",
};

const PREV_MAP: Record<ReadingId, ScreenId> = {
  joining: "madd",
  compound: "joining",
  "reading-words": "compound",
  "reading-stories": "reading-words",
  "reading-sentences": "reading-stories",
  "quran-practice": "reading-sentences",
};

const COMPOUND_LETTERS = [
  { arabic: "لا", name: "Lam-Alif", roman: "laa", note: "Most common compound — occurs thousands of times in the Quran!" },
  { arabic: "لأ", name: "Lam-Alif Hamza", roman: "la'", note: "Lam with Alif Hamza above — as in 'لأن'" },
  { arabic: "لإ", name: "Lam-Alif Hamza Below", roman: "li'", note: "Lam with Alif Hamza below — as in 'لإله'" },
  { arabic: "لآ", name: "Lam-Alif Madda", roman: "laa", note: "Lam with Alif Madda — stretched sound" },
];

const READING_LEVELS = [
  {
    level: "Level 1 — Simple",
    color: "#2E7D32", bg: "#E8F5E9",
    words: [
      { ar: "كَتَبَ", en: "He wrote" },
      { ar: "قَرَأَ", en: "He read" },
      { ar: "ذَهَبَ", en: "He went" },
      { ar: "جَلَسَ", en: "He sat" },
    ],
  },
  {
    level: "Level 2 — Medium",
    color: "#1565C0", bg: "#E3F2FD",
    words: [
      { ar: "مَدْرَسَة", en: "School" },
      { ar: "بَيْت", en: "House" },
      { ar: "كِتَاب", en: "Book" },
      { ar: "قَلَم", en: "Pen" },
    ],
  },
  {
    level: "Level 3 — Sentences",
    color: "#6A1B9A", bg: "#F3E5F5",
    words: [
      { ar: "هَذَا كِتَابٌ", en: "This is a book" },
      { ar: "ذَهَبَ إِلَى الْمَدْرَسَةِ", en: "He went to school" },
    ],
  },
];

export default function ReadingScreen({ screenId, onNavigate, onRate }: Props) {
  const heroConfig: Record<ReadingId, { title: string; sub: string; color: string }> = {
    joining: { title: "Joining Letters Together", sub: "Arabic letters connect to form words — learn the rules!", color: "#AD1457" },
    compound: { title: "Compound Letters", sub: "Some letters form special shapes when combined", color: "#37474F" },
    "reading-words": { title: "Reading Arabic Words", sub: "Three levels — from simple to sentences!", color: "#1B6B3A" },
    "reading-stories": { title: "Reading Stories & Mini Texts", sub: "Short passages using letters you've learned", color: "#1565C0" },
    "reading-sentences": { title: "Reading Full Sentences", sub: "Complete sentences with harakat and punctuation", color: "#6A1B9A" },
    "quran-practice": { title: "Simple Quran Practice", sub: "Practise reading real Quran verses!", color: "#C8902E" },
  };

  const config = heroConfig[screenId];

  return (
    <div style={{ maxWidth: 980, margin: "0 auto", padding: "24px 16px 64px" }}>
      <div style={{ borderRadius: 16, padding: "28px 24px", marginBottom: 24, background: `linear-gradient(135deg,${config.color}dd,${config.color})`, color: "#fff" }}>
        <div style={{ display: "inline-block", background: "rgba(255,255,255,.15)", color: "#fff", fontSize: ".65rem", fontWeight: 800, letterSpacing: "2px", textTransform: "uppercase", padding: "3px 12px", borderRadius: 50, marginBottom: 8 }}>Unit 5</div>
        <h1 style={{ fontSize: "clamp(1.4rem,3.5vw,2rem)", fontWeight: 900, margin: 0 }}>{config.title}</h1>
        <p style={{ color: "rgba(255,255,255,.75)", fontSize: ".88rem", margin: "6px 0 0" }}>{config.sub}</p>
      </div>

      {screenId === "joining" && (
        <div>
          <div style={{ background: "#fff", borderRadius: 16, boxShadow: "0 2px 14px rgba(0,0,0,.07)", padding: 20, marginBottom: 16 }}>
            <h2 style={{ fontWeight: 900, fontSize: "1.1rem", color: "#AD1457", marginBottom: 12 }}>The Joining Rule</h2>
            <p style={{ fontSize: ".88rem", color: "#444", lineHeight: 1.7 }}>
              Arabic letters join to their neighbours — but some letters (<strong style={{ fontFamily: "'Amiri', serif", fontSize: "1.2rem" }}>ا د ذ ر ز و</strong>) only join on the right.
              When letters join, they change shape — using Initial, Medial, or Final forms.
            </p>
          </div>
          {JOINING_EXAMPLES.map((ex, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              style={{ background: "#fff", borderRadius: 14, boxShadow: "0 2px 10px rgba(0,0,0,.06)", padding: "16px 18px", marginBottom: 12 }}
            >
              <div style={{ display: "flex", gap: 10, alignItems: "center", flexWrap: "wrap" }}>
                <div style={{ display: "flex", gap: 6 }}>
                  {ex.letters.map((l, li) => (
                    <div key={li} style={{ background: "#E8F5E9", borderRadius: 8, padding: "8px 12px", fontFamily: "'Amiri', serif", fontSize: "1.8rem", color: "#1B6B3A", lineHeight: 1 }}>{l}</div>
                  ))}
                </div>
                <div style={{ fontSize: "1.4rem", color: "#aaa" }}>→</div>
                <div style={{ fontFamily: "'Amiri', serif", fontSize: "2.4rem", color: "#1B6B3A", background: "#E8F5E9", borderRadius: 12, padding: "10px 18px", lineHeight: 1 }}>{ex.joined}</div>
                <div>
                  <div style={{ fontWeight: 700, fontSize: ".84rem", color: "#333" }}>{ex.roman}</div>
                  <div style={{ fontSize: ".74rem", color: "#888" }}>{ex.meaning}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      )}

      {screenId === "compound" && (
        <div>
          <div style={{ background: "#fff", borderRadius: 16, boxShadow: "0 2px 14px rgba(0,0,0,.07)", padding: 20, marginBottom: 16 }}>
            <h2 style={{ fontWeight: 900, fontSize: "1.1rem", color: "#37474F", marginBottom: 12 }}>What are Compound Letters?</h2>
            <p style={{ fontSize: ".88rem", color: "#444", lineHeight: 1.7 }}>
              When Lam (ل) is followed by Alif (ا), they form a special combination called "Lam-Alif" (لا).
              This is the most common compound letter in Arabic and occurs thousands of times in the Quran.
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))", gap: 12, marginBottom: 16 }}>
            {COMPOUND_LETTERS.map((c) => (
              <div key={c.arabic} style={{ background: "#ECEFF1", borderRadius: 14, padding: "18px 16px", textAlign: "center" }}>
                <div style={{ fontFamily: "'Amiri', serif", fontSize: "3.5rem", color: "#37474F", lineHeight: 1, marginBottom: 6 }}>{c.arabic}</div>
                <div style={{ fontWeight: 900, fontSize: ".88rem", color: "#37474F" }}>{c.name}</div>
                <div style={{ fontSize: ".74rem", color: "#555", marginTop: 4 }}>{c.note}</div>
              </div>
            ))}
          </div>
        </div>
      )}

      {screenId === "reading-words" && (
        <div>
          {READING_LEVELS.map((level, i) => (
            <motion.div key={level.level} initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}
              style={{ background: "#fff", borderRadius: 16, boxShadow: "0 2px 14px rgba(0,0,0,.07)", overflow: "hidden", marginBottom: 16 }}>
              <div style={{ background: level.bg, color: level.color, padding: "12px 18px", fontWeight: 800, fontSize: ".88rem" }}>{level.level}</div>
              <div style={{ padding: 18, display: "flex", flexWrap: "wrap", gap: 10 }}>
                {level.words.map((w) => (
                  <div key={w.ar} style={{ background: level.bg, borderRadius: 12, padding: "12px 16px", textAlign: "center", border: `2px solid ${level.color}22`, minWidth: 100 }}>
                    <div style={{ fontFamily: "'Amiri', serif", fontSize: "1.8rem", color: level.color, lineHeight: 1 }}>{w.ar}</div>
                    <div style={{ fontSize: ".72rem", fontWeight: 700, color: "#666", marginTop: 4 }}>{w.en}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      )}

      {screenId === "reading-stories" && (
        <div>
          <div style={{ background: "#fff", borderRadius: 16, boxShadow: "0 2px 14px rgba(0,0,0,.07)", overflow: "hidden", marginBottom: 16 }}>
            <div style={{ background: "#E3F2FD", color: "#1565C0", padding: "12px 18px", fontWeight: 800, fontSize: ".88rem" }}>📚 Story 1: Ali at School</div>
            <div style={{ padding: 18 }}>
              <div style={{ fontFamily: "'Amiri', serif", fontSize: "1.6rem", direction: "rtl", lineHeight: 2.2, color: "#1a1a1a", background: "#F9F6EF", borderRadius: 10, padding: "14px 18px", marginBottom: 12 }}>
                ذَهَبَ عَلِيٌّ إِلَى الْمَدْرَسَةِ.<br />
                أَخَذَ كِتَابَهُ وَقَلَمَهُ.<br />
                جَلَسَ مَعَ أَصْدِقَائِهِ.<br />
                قَرَأَ الدَّرْسَ بِصَوْتٍ جَمِيلٍ.
              </div>
              <p style={{ fontSize: ".84rem", color: "#555", lineHeight: 1.6 }}>
                Ali went to school. He took his book and pen. He sat with his friends. He read the lesson with a beautiful voice.
              </p>
            </div>
          </div>
        </div>
      )}

      {screenId === "reading-sentences" && (
        <div>
          <div style={{ background: "#fff", borderRadius: 16, boxShadow: "0 2px 14px rgba(0,0,0,.07)", overflow: "hidden", marginBottom: 16 }}>
            <div style={{ background: "#F3E5F5", color: "#6A1B9A", padding: "12px 18px", fontWeight: 800, fontSize: ".88rem" }}>📄 Full Sentences</div>
            <div style={{ padding: 18 }}>
              {[
                { ar: "هَٰذَا كِتَابٌ جَمِيلٌ.", en: "This is a beautiful book." },
                { ar: "اللَّهُ أَكْبَرُ.", en: "Allah is the Greatest." },
                { ar: "الْحَمْدُ لِلَّهِ.", en: "All praise is for Allah." },
                { ar: "الْعِلْمُ نُورٌ.", en: "Knowledge is light." },
                { ar: "الصَّبْرُ جَمِيلٌ.", en: "Patience is beautiful." },
              ].map(({ ar, en }) => (
                <div key={ar} style={{ fontFamily: "'Amiri', serif", fontSize: "1.5rem", direction: "rtl", background: "#F9F6EF", borderRadius: 10, border: "1px solid #E0E0E0", padding: "10px 18px", margin: "7px 0", lineHeight: 2 }}>
                  {ar} <span style={{ fontFamily: "'Nunito', sans-serif", fontSize: ".8rem", color: "#888", direction: "ltr" }}>— {en}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {screenId === "quran-practice" && (
        <div>
          <div style={{ background: "#fff", borderRadius: 16, boxShadow: "0 2px 14px rgba(0,0,0,.07)", overflow: "hidden", marginBottom: 16 }}>
            <div style={{ background: "#FFF8E1", color: "#C8902E", padding: "12px 18px", fontWeight: 800, fontSize: ".88rem" }}>☀️ Quran Practice Verses</div>
            <div style={{ padding: 18 }}>
              {QURAN_PRACTICE.map((v) => (
                <div key={v.arabic} style={{ marginBottom: 16, borderBottom: "1px solid #F5F5F5", paddingBottom: 16 }}>
                  <div style={{ fontSize: ".72rem", fontWeight: 800, textTransform: "uppercase", letterSpacing: "1px", color: "#C8902E", marginBottom: 6 }}>{v.surah}</div>
                  <div style={{ fontFamily: "'Amiri', serif", fontSize: "1.8rem", direction: "rtl", background: "#FFF8E1", borderRadius: 10, padding: "12px 18px", color: "#1B6B3A", lineHeight: 2 }}>
                    {v.arabic}
                  </div>
                  <div style={{ fontSize: ".82rem", color: "#666", marginTop: 6, fontStyle: "italic" }}>{v.translation}</div>
                </div>
              ))}
              <div style={{ background: "#FFFDE7", borderLeft: "4px solid #FDD835", borderRadius: "0 10px 10px 0", padding: "10px 14px", fontSize: ".84rem" }}>
                💡 Read each verse slowly and clearly. Focus on applying your Makharij and Harakat correctly.
              </div>
            </div>
          </div>
        </div>
      )}

      <div style={{ marginBottom: 20 }}>
        <div style={{ fontWeight: 700, fontSize: ".84rem", color: "#555", marginBottom: 8 }}>⭐ My Stars:</div>
        <StarRating screenId={screenId} onRate={(count) => onRate(screenId, count)} />
      </div>

      <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 10 }}>
        <motion.button whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }} onClick={() => onNavigate(PREV_MAP[screenId])}
          style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "linear-gradient(135deg,#1B6B3A,#0D3D1E)", color: "#fff", fontWeight: 800, fontSize: ".84rem", padding: "10px 22px", borderRadius: 50, border: "none", cursor: "pointer" }}>
          ← Back
        </motion.button>
        <motion.button whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }} onClick={() => onNavigate(NEXT_MAP[screenId])}
          style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "linear-gradient(135deg,#FFD700,#FFA000)", color: "#1a1a1a", fontWeight: 800, fontSize: ".84rem", padding: "10px 22px", borderRadius: 50, border: "none", cursor: "pointer" }}>
          Next →
        </motion.button>
      </div>
    </div>
  );
}
