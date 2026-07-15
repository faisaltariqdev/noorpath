"use client";
import { motion } from "framer-motion";
import { LETTERS } from "@/data/learning/letters";
import type { ScreenId } from "@/data/learning/types";

interface Props { onNavigate: (id: ScreenId) => void; }

const TAGS = ["Full Colour", "Fun Activities", "Online Ready", "Flashcard Mode", "Teacher Edition", "Parent Guide", "28 Letters", "7 Units"];

export default function CoverScreen({ onNavigate }: Props) {
  return (
    <section style={{ minHeight: "calc(100vh - 62px)", display: "flex", alignItems: "center", justifyContent: "center", textAlign: "center", padding: "40px 20px", background: "radial-gradient(ellipse at top, #1B6B3A 0%, #0D3D1E 60%)" }}>
      <div style={{ maxWidth: 680, width: "100%" }}>
        <motion.div
          initial={{ scale: 0, rotate: -20 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ type: "spring", damping: 14, stiffness: 180 }}
          style={{ width: 100, height: 100, borderRadius: "50%", background: "linear-gradient(135deg,#FFD700,#FFA000)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 20px", fontSize: "2.8rem", boxShadow: "0 0 40px rgba(255,215,0,.35)" }}
        >
          ☀️
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
          <div style={{ color: "#FFD700", fontSize: ".72rem", fontWeight: 800, letterSpacing: "3px", textTransform: "uppercase", marginBottom: 10 }}>NoorPath Online Quran Academy</div>
          <h1 style={{ color: "#fff", fontSize: "clamp(2.2rem,7vw,4rem)", fontWeight: 900, lineHeight: 1.1, margin: "0 0 6px", fontFamily: "'Baloo 2', cursive" }}>
            Noorani <span style={{ color: "#FFD700" }}>Qaida</span>
          </h1>
          <div style={{ fontFamily: "'Amiri', serif", color: "rgba(255,255,255,.85)", fontSize: "clamp(1.6rem,4vw,2.6rem)", margin: "8px 0", direction: "rtl" }}>
            القاعدة النورانية
          </div>
          <p style={{ color: "rgba(255,255,255,.7)", fontSize: ".94rem", margin: "10px 0 24px", maxWidth: 480, marginLeft: "auto", marginRight: "auto" }}>
            Premium Complete Edition · Ages 3–6 · Montessori-Inspired<br />
            <strong style={{ color: "#FFD700" }}>International School Quality · 28 Letters · 7 Curriculum Units</strong>
          </p>

          <div style={{ display: "flex", flexWrap: "wrap", gap: 8, justifyContent: "center", marginBottom: 28 }}>
            {TAGS.map((t) => (
              <span key={t} style={{ background: "rgba(255,255,255,.1)", color: "rgba(255,255,255,.9)", border: "1px solid rgba(255,255,255,.2)", borderRadius: 50, padding: "5px 14px", fontSize: ".74rem", fontWeight: 700 }}>{t}</span>
            ))}
          </div>

          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(255,215,0,.5)" }}
            whileTap={{ scale: 0.97 }}
            onClick={() => onNavigate("toc")}
            style={{ display: "inline-flex", alignItems: "center", gap: 10, background: "linear-gradient(135deg,#FFD700,#FFA000)", color: "#1a1a1a", fontWeight: 900, fontSize: "1rem", padding: "14px 34px", borderRadius: 50, border: "none", cursor: "pointer", fontFamily: "'Nunito', sans-serif" }}
          >
            📖 Begin Learning Journey
          </motion.button>

          {/* Alphabet preview */}
          <div style={{ marginTop: 32, opacity: 0.35, display: "flex", flexWrap: "wrap", gap: 5, justifyContent: "center" }}>
            {LETTERS.map((lt) => (
              <span key={lt.id} style={{ fontFamily: "'Amiri', serif", color: "#FFD700", fontSize: "1.4rem" }}>{lt.letter}</span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
