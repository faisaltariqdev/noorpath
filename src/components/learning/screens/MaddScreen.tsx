"use client";
import { motion } from "framer-motion";
import StarRating from "@/components/learning/ui/StarRating";
import type { ScreenId } from "@/data/learning/types";

interface Props { onNavigate: (id: ScreenId) => void; onRate: (screen: string, count: number) => void; }

const MADD_TYPES = [
  { name: "Madd Alif", arabic: "آ", roman: "aa", example: "\u0643\u0650\u062A\u064E\u0627\u0628", exRoman: "kitaab", desc: "Fatha + Alif = long 'aa' sound (hold for 2 counts)", color: "#C62828", bg: "#FFEBEE" },
  { name: "Madd Waw", arabic: "\u0648\u064F", roman: "uu", example: "\u0646\u064F\u0648\u0631", exRoman: "nuur", desc: "Damma + Waw = long 'uu' sound (hold for 2 counts)", color: "#1565C0", bg: "#E3F2FD" },
  { name: "Madd Ya", arabic: "\u064A\u0650", roman: "ii", example: "\u0643\u0650\u062A\u064E\u0627\u0628", exRoman: "kiib", desc: "Kasra + Ya = long 'ii' sound (hold for 2 counts)", color: "#2E7D32", bg: "#E8F5E9" },
];

export default function MaddScreen({ onNavigate, onRate }: Props) {
  return (
    <div style={{ maxWidth: 980, margin: "0 auto", padding: "24px 16px 64px" }}>
      <div style={{ borderRadius: 16, padding: "28px 24px", marginBottom: 24, background: "linear-gradient(135deg,#E65100,#F57C00)", color: "#fff" }}>
        <div style={{ display: "inline-block", background: "rgba(255,255,255,.15)", color: "#fff", fontSize: ".65rem", fontWeight: 800, letterSpacing: "2px", textTransform: "uppercase", padding: "3px 12px", borderRadius: 50, marginBottom: 8 }}>Unit 4</div>
        <h1 style={{ fontSize: "clamp(1.4rem,3.5vw,2rem)", fontWeight: 900, margin: 0 }}>Madd — Long Vowels</h1>
        <p style={{ color: "rgba(255,255,255,.75)", fontSize: ".88rem", margin: "6px 0 0" }}>When a vowel is stretched for 2 counts — making the sound longer and deeper.</p>
      </div>

      <div style={{ background: "#fff", borderRadius: 16, boxShadow: "0 2px 14px rgba(0,0,0,.07)", padding: 20, marginBottom: 20 }}>
        <p style={{ fontSize: ".88rem", color: "#444", lineHeight: 1.7, marginBottom: 16 }}>
          Madd (مد) means "stretching." In the Quran, certain vowels must be stretched for exactly 2 counts (or more, depending on Tajweed rules).
          The three Madd letters are Alif (ا), Waw (و), and Ya (ي).
        </p>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))", gap: 14 }}>
          {MADD_TYPES.map((m, i) => (
            <motion.div
              key={m.name}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              style={{ background: m.bg, borderRadius: 16, padding: "20px 16px", textAlign: "center", border: `2px solid ${m.color}22` }}
            >
              <div style={{ fontFamily: "'Amiri', serif", fontSize: "3.5rem", color: m.color, lineHeight: 1, marginBottom: 8 }}>{m.arabic}</div>
              <div style={{ fontWeight: 900, fontSize: "1rem", color: m.color }}>{m.name}</div>
              <div style={{ fontSize: ".78rem", color: "#555", margin: "6px 0" }}>{m.desc}</div>
              <div style={{ background: "rgba(255,255,255,.7)", borderRadius: 10, padding: "8px 12px", marginTop: 8 }}>
                <div style={{ fontFamily: "'Amiri', serif", fontSize: "1.8rem", color: m.color }}>{m.example}</div>
                <div style={{ fontSize: ".72rem", color: "#666", fontWeight: 700 }}>{m.exRoman}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div style={{ background: "#FFFDE7", borderLeft: "4px solid #FDD835", borderRadius: "0 12px 12px 0", padding: "12px 18px", marginBottom: 16, fontSize: ".88rem", lineHeight: 1.6 }}>
        💡 <strong>How to practise Madd:</strong> Hold the vowel sound for exactly 2 full counts. You can tap your finger twice while reading — one tap = one count!
      </div>

      <div style={{ background: "#fff", borderRadius: 16, boxShadow: "0 2px 14px rgba(0,0,0,.07)", padding: 18, marginBottom: 20 }}>
        <div style={{ fontWeight: 800, fontSize: ".88rem", color: "#333", marginBottom: 12 }}>Madd in the Quran (Bismillah):</div>
        <div style={{ fontFamily: "'Amiri', serif", fontSize: "clamp(1.4rem,4vw,2.4rem)", direction: "rtl", background: "#F9F6EF", borderRadius: 10, padding: "14px 18px", lineHeight: 2, color: "#1B6B3A" }}>
          بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
        </div>
        <p style={{ fontSize: ".82rem", color: "#666", marginTop: 8 }}>
          In "الرَّحْمَٰنِ" — notice the small Alif above the Meem — this is Madd Alif, stretch the "aa" sound!
        </p>
      </div>

      <div style={{ marginBottom: 20 }}>
        <div style={{ fontWeight: 700, fontSize: ".84rem", color: "#555", marginBottom: 8 }}>⭐ My Stars:</div>
        <StarRating screenId="madd" onRate={(count) => onRate("madd", count)} />
      </div>

      <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 10 }}>
        <motion.button whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }} onClick={() => onNavigate("shaddah")}
          style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "linear-gradient(135deg,#1B6B3A,#0D3D1E)", color: "#fff", fontWeight: 800, fontSize: ".84rem", padding: "10px 22px", borderRadius: 50, border: "none", cursor: "pointer" }}>
          ← Shaddah
        </motion.button>
        <motion.button whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }} onClick={() => onNavigate("joining")}
          style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "linear-gradient(135deg,#FFD700,#FFA000)", color: "#1a1a1a", fontWeight: 800, fontSize: ".84rem", padding: "10px 22px", borderRadius: 50, border: "none", cursor: "pointer" }}>
          Unit 5: Reading →
        </motion.button>
      </div>
    </div>
  );
}
