"use client";
import { useState, useRef } from "react";
import { motion } from "framer-motion";
import ConfettiBlast from "@/components/learning/ui/ConfettiBlast";
import type { ScreenId } from "@/data/learning/types";

interface Props { onNavigate: (id: ScreenId) => void; done: Set<number>; }

export default function CertificateScreen({ onNavigate, done }: Props) {
  const [name, setName] = useState("");
  const [celebrated, setCelebrated] = useState(false);
  const today = new Date().toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" });

  return (
    <div style={{ maxWidth: 980, margin: "0 auto", padding: "24px 16px 64px" }}>
      <ConfettiBlast trigger={celebrated} />

      <div style={{ borderRadius: 16, padding: "28px 24px", marginBottom: 24, background: "linear-gradient(135deg,#C8902E,#A0721F)", color: "#fff" }}>
        <div style={{ display: "inline-block", background: "rgba(255,255,255,.15)", color: "#fff", fontSize: ".65rem", fontWeight: 800, letterSpacing: "2px", textTransform: "uppercase", padding: "3px 12px", borderRadius: 50, marginBottom: 8 }}>Achievement</div>
        <h1 style={{ fontSize: "clamp(1.4rem,3.5vw,2rem)", fontWeight: 900, margin: 0 }}>Certificate of Achievement</h1>
        <p style={{ color: "rgba(255,255,255,.75)", fontSize: ".88rem", margin: "6px 0 0" }}>Congratulations on completing the NoorPath Noorani Qaida!</p>
      </div>

      {/* Name input */}
      <div style={{ background: "#fff", borderRadius: 16, boxShadow: "0 2px 14px rgba(0,0,0,.07)", padding: 20, marginBottom: 24 }}>
        <label style={{ display: "block", fontWeight: 700, fontSize: ".88rem", color: "#555", marginBottom: 8 }}>Enter Student's Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="e.g. Muhammad Ali"
          style={{ width: "100%", padding: "12px 16px", borderRadius: 12, border: "2px solid #E0E0E0", fontSize: "1rem", fontFamily: "'Nunito',sans-serif", outline: "none", boxSizing: "border-box" }}
          onFocus={(e) => (e.target.style.borderColor = "#1B6B3A")}
          onBlur={(e) => (e.target.style.borderColor = "#E0E0E0")}
        />
      </div>

      {/* Certificate */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        style={{
          border: "7px double #C8902E",
          borderRadius: 20,
          background: "linear-gradient(135deg,#FFFEF0,#FFF8DC)",
          padding: "36px 28px",
          textAlign: "center",
          position: "relative",
          marginBottom: 24,
          boxShadow: "0 8px 40px rgba(200,144,46,.2)",
        }}
      >
        {/* Top decoration */}
        <div style={{ color: "#C8902E", fontSize: ".72rem", letterSpacing: "8px", marginBottom: 20 }}>— — —</div>

        <div style={{ color: "#C8902E", fontSize: ".72rem", fontWeight: 900, letterSpacing: "3px", textTransform: "uppercase", marginBottom: 10 }}>NoorPath Online Quran Academy</div>
        <div style={{ fontSize: "clamp(1.8rem,5vw,2.8rem)", fontWeight: 900, color: "#1B6B3A", margin: "8px 0" }}>
          Certificate of Achievement
        </div>

        <div style={{ color: "#555", fontSize: ".88rem", margin: "16px 0 8px" }}>This is to certify that</div>

        <div style={{
          fontWeight: 900, fontSize: "clamp(1.6rem,5vw,2.4rem)", color: "#1B6B3A",
          borderBottom: "3px solid #C8902E",
          display: "inline-block", padding: "4px 24px", marginBottom: 16,
          minWidth: 240,
        }}>
          {name || "Your Name Here"}
        </div>

        <div style={{ color: "#555", fontSize: ".88rem", lineHeight: 1.7, maxWidth: 480, margin: "0 auto 20px" }}>
          has successfully completed the <strong>NoorPath Noorani Qaida</strong> —
          mastering all 28 Arabic letters, Harakat, Diacritics, and foundational Quran reading.
        </div>

        <div style={{ color: "#888", fontSize: ".78rem", marginBottom: 20 }}>
          {done.size} of 28 letters completed · {today}
        </div>

        {/* Seals */}
        <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap", marginTop: 16 }}>
          {[
            { icon: "📖", label: "Quran Reader", color: "#1B6B3A" },
            { icon: "⭐", label: `${done.size}/28 Letters`, color: "#C8902E" },
            { icon: "🏅", label: "Noorani Qaida", color: "#1565C0" },
          ].map(({ icon, label, color }) => (
            <div key={label} style={{
              width: 72, height: 72, borderRadius: "50%",
              border: `3px solid ${color}`,
              display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
              background: "#fff", color, fontSize: ".52rem", fontWeight: 800, textAlign: "center",
              padding: 6,
            }}>
              <span style={{ fontSize: "1.6rem", display: "block" }}>{icon}</span>
              <span>{label}</span>
            </div>
          ))}
        </div>

        {/* Bottom decoration */}
        <div style={{ color: "#C8902E", fontSize: ".72rem", letterSpacing: "8px", marginTop: 24 }}>— — —</div>
      </motion.div>

      {/* Actions */}
      <div style={{ display: "flex", justifyContent: "center", gap: 12, flexWrap: "wrap", marginBottom: 20 }}>
        <motion.button whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}
          onClick={() => { setCelebrated(true); setTimeout(() => setCelebrated(false), 100); }}
          style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "linear-gradient(135deg,#FFD700,#FFA000)", color: "#1a1a1a", fontWeight: 900, fontSize: ".95rem", padding: "12px 28px", borderRadius: 50, border: "none", cursor: "pointer" }}>
          🎉 Celebrate!
        </motion.button>
        <motion.button whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}
          onClick={() => window.print()}
          style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(0,0,0,.06)", color: "#333", fontWeight: 700, fontSize: ".92rem", padding: "12px 24px", borderRadius: 50, border: "2px solid #E0E0E0", cursor: "pointer" }}>
          🖨️ Print
        </motion.button>
      </div>

      <div style={{ textAlign: "center" }}>
        <motion.button whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }} onClick={() => onNavigate("cover")}
          style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "linear-gradient(135deg,#1B6B3A,#0D3D1E)", color: "#fff", fontWeight: 900, fontSize: ".92rem", padding: "12px 28px", borderRadius: 50, border: "none", cursor: "pointer" }}>
          🏠 Back to Home
        </motion.button>
      </div>
    </div>
  );
}
