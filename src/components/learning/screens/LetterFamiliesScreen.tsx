"use client";
import { motion } from "framer-motion";
import { LETTERS } from "@/data/learning/letters";
import { LETTER_FAMILIES } from "@/data/learning/curriculum";
import type { ScreenId } from "@/data/learning/types";

interface Props { onNavigate: (id: ScreenId) => void; }

export default function LetterFamiliesScreen({ onNavigate }: Props) {
  return (
    <div style={{ maxWidth: 980, margin: "0 auto", padding: "24px 16px 64px" }}>
      <div style={{ borderRadius: 16, padding: "28px 24px", marginBottom: 24, background: "linear-gradient(135deg,#311B92,#4527A0)", color: "#fff" }}>
        <div style={{ display: "inline-block", background: "rgba(255,255,255,.15)", color: "#fff", fontSize: ".65rem", fontWeight: 800, letterSpacing: "2px", textTransform: "uppercase", padding: "3px 12px", borderRadius: 50, marginBottom: 8 }}>Visual Learning</div>
        <h1 style={{ fontSize: "clamp(1.4rem,3.5vw,2rem)", fontWeight: 900, margin: 0 }}>Letter Families</h1>
        <p style={{ color: "rgba(255,255,255,.75)", fontSize: ".88rem", margin: "6px 0 0" }}>Letters that look similar are grouped together — learn one, learn them all!</p>
      </div>

      {LETTER_FAMILIES.map((family, fi) => (
        <motion.div
          key={family.id}
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: fi * 0.1 }}
          style={{ background: "#fff", borderRadius: 16, boxShadow: "0 2px 14px rgba(0,0,0,.07)", overflow: "hidden", marginBottom: 16 }}
        >
          <div style={{ background: family.bg, color: family.color, padding: "12px 18px", fontWeight: 800, fontSize: ".88rem" }}>
            {family.title}
          </div>
          <div style={{ padding: 18 }}>
            <p style={{ fontSize: ".84rem", color: "#555", marginBottom: 12 }}>{family.subtitle}</p>
            <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginBottom: 14 }}>
              {family.members.map(({ letterIdx, label, note }) => {
                const lt = LETTERS[letterIdx];
                return (
                  <motion.button
                    key={letterIdx}
                    whileHover={{ scale: 1.06, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => onNavigate(`letter-${lt.id}` as ScreenId)}
                    style={{
                      background: family.bg, borderRadius: 14, padding: 14,
                      flex: "1 1 150px", border: `2px solid ${family.color}33`,
                      cursor: "pointer", textAlign: "center",
                    }}
                  >
                    <div style={{ fontWeight: 800, fontSize: ".7rem", textTransform: "uppercase", color: family.color, marginBottom: 6 }}>{label}</div>
                    <div style={{ fontFamily: "'Amiri', serif", fontSize: "2.5rem", color: family.color, lineHeight: 1 }}>{lt.letter}</div>
                    <div style={{ fontSize: ".72rem", color: "#666", marginTop: 6 }}>{note}</div>
                  </motion.button>
                );
              })}
            </div>
            <div style={{ background: "#FFFDE7", borderLeft: "4px solid #FDD835", borderRadius: "0 10px 10px 0", padding: "10px 14px", fontSize: ".83rem" }}>
              💡 {family.tip}
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
