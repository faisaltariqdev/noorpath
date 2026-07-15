"use client";
import { motion } from "framer-motion";
import StarRating from "@/components/learning/ui/StarRating";
import type { ScreenId } from "@/data/learning/types";

interface Props { onNavigate: (id: ScreenId) => void; onRate: (screen: string, count: number) => void; }

const TAJWEED_RULES = [
  { name: "Noon & Meem Mushaddad", arabic: "نّ مّ", rule: "When Noon or Meem has a Shaddah, apply Ghunnah — nasal sound for 2 counts.", color: "#C62828", bg: "#FFEBEE" },
  { name: "Qalqalah", arabic: "ق ط ب ج د", rule: "5 letters that bounce when they have Sukoon — a slight vibrating echo sound.", color: "#1565C0", bg: "#E3F2FD" },
  { name: "Madd Tabee'i", arabic: "آ ْو ْي", rule: "Natural elongation — stretch the vowel for exactly 2 counts.", color: "#2E7D32", bg: "#E8F5E9" },
  { name: "Waqf (Stopping)", arabic: "ۃ ۚ ۛ", rule: "Rules for where and how to pause/stop when reading the Quran.", color: "#E65100", bg: "#FFF3E0" },
];

export default function TajweedIntroScreen({ onNavigate, onRate }: Props) {
  return (
    <div style={{ maxWidth: 980, margin: "0 auto", padding: "24px 16px 64px" }}>
      <div style={{ borderRadius: 16, padding: "28px 24px", marginBottom: 24, background: "linear-gradient(135deg,#263238,#37474F)", color: "#fff" }}>
        <div style={{ display: "inline-block", background: "rgba(255,215,0,.2)", color: "#FFD700", fontSize: ".65rem", fontWeight: 800, letterSpacing: "2px", textTransform: "uppercase", padding: "3px 12px", borderRadius: 50, marginBottom: 8 }}>Unit 6</div>
        <h1 style={{ fontSize: "clamp(1.4rem,3.5vw,2rem)", fontWeight: 900, margin: 0 }}>Introduction to Tajweed</h1>
        <p style={{ color: "rgba(255,255,255,.75)", fontSize: ".88rem", margin: "6px 0 0" }}>The science of beautifying Quran recitation — every letter in its perfect place.</p>
      </div>

      <div style={{ background: "#fff", borderRadius: 16, boxShadow: "0 2px 14px rgba(0,0,0,.07)", padding: 20, marginBottom: 20 }}>
        <h2 style={{ fontWeight: 900, fontSize: "1.1rem", color: "#37474F", marginBottom: 12 }}>What is Tajweed?</h2>
        <p style={{ fontSize: ".88rem", color: "#444", lineHeight: 1.7 }}>
          Tajweed (تجويد) means "to do something well" or "to make something excellent." It is the set of rules that govern how the Quran should be recited.
          The Prophet Muhammad ﷺ received the Quran with Tajweed from Jibreel, and it has been passed down in exactly the same way for 1,400 years.
        </p>
        <div style={{ background: "#E8F5E9", borderLeft: "4px solid #1B6B3A", borderRadius: "0 10px 10px 0", padding: "12px 16px", marginTop: 12, fontSize: ".84rem" }}>
          🎵 Allah says: "And recite the Quran with measured recitation." (73:4)
        </div>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))", gap: 14, marginBottom: 20 }}>
        {TAJWEED_RULES.map((rule, i) => (
          <motion.div
            key={rule.name}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            style={{ background: rule.bg, borderRadius: 16, padding: "18px 16px", border: `2px solid ${rule.color}22` }}
          >
            <div style={{ fontFamily: "'Amiri', serif", fontSize: "2rem", color: rule.color, marginBottom: 8 }}>{rule.arabic}</div>
            <div style={{ fontWeight: 900, fontSize: ".88rem", color: rule.color, marginBottom: 6 }}>{rule.name}</div>
            <p style={{ fontSize: ".8rem", color: "#444", margin: 0, lineHeight: 1.6 }}>{rule.rule}</p>
          </motion.div>
        ))}
      </div>

      <div style={{ background: "#FFFDE7", borderLeft: "4px solid #FDD835", borderRadius: "0 12px 12px 0", padding: "12px 18px", marginBottom: 20, fontSize: ".88rem", lineHeight: 1.6 }}>
        💡 <strong>For Beginners:</strong> Don't try to master all Tajweed rules at once. Focus first on correct Makharij and Harakat. Tajweed is a lifelong journey — even the greatest scholars keep learning!
      </div>

      <div style={{ marginBottom: 20 }}>
        <div style={{ fontWeight: 700, fontSize: ".84rem", color: "#555", marginBottom: 8 }}>⭐ My Stars:</div>
        <StarRating screenId="tajweed-intro" onRate={(count) => onRate("tajweed-intro", count)} />
      </div>

      <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 10 }}>
        <motion.button whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }} onClick={() => onNavigate("quran-practice")}
          style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "linear-gradient(135deg,#1B6B3A,#0D3D1E)", color: "#fff", fontWeight: 800, fontSize: ".84rem", padding: "10px 22px", borderRadius: 50, border: "none", cursor: "pointer" }}>
          ← Quran Practice
        </motion.button>
        <motion.button whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }} onClick={() => onNavigate("revision")}
          style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "linear-gradient(135deg,#FFD700,#FFA000)", color: "#1a1a1a", fontWeight: 800, fontSize: ".84rem", padding: "10px 22px", borderRadius: 50, border: "none", cursor: "pointer" }}>
          Unit 7: Revision →
        </motion.button>
      </div>
    </div>
  );
}
