"use client";
import { motion } from "framer-motion";
import { LETTERS } from "@/data/learning/letters";
import { WEEKLY_PLANS } from "@/data/learning/curriculum";
import type { ScreenId } from "@/data/learning/types";

interface Props { onNavigate: (id: ScreenId) => void; }

export default function PlannerScreen({ onNavigate }: Props) {
  return (
    <div style={{ maxWidth: 980, margin: "0 auto", padding: "24px 16px 64px" }}>
      <div style={{ borderRadius: 16, padding: "28px 24px", marginBottom: 24, background: "linear-gradient(135deg,#0D47A1,#1565C0)", color: "#fff" }}>
        <div style={{ display: "inline-block", background: "rgba(255,255,255,.15)", color: "#fff", fontSize: ".65rem", fontWeight: 800, letterSpacing: "2px", textTransform: "uppercase", padding: "3px 12px", borderRadius: 50, marginBottom: 8 }}>Planning Tool</div>
        <h1 style={{ fontSize: "clamp(1.4rem,3.5vw,2rem)", fontWeight: 900, margin: 0 }}>Weekly Learning Planner</h1>
        <p style={{ color: "rgba(255,255,255,.75)", fontSize: ".88rem", margin: "6px 0 0" }}>Plan which letter to teach each day. Stay consistent for amazing results!</p>
      </div>

      {WEEKLY_PLANS.map((week, wi) => (
        <motion.div
          key={week.week}
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: wi * 0.1 }}
          style={{ background: "#fff", borderRadius: 16, boxShadow: "0 2px 14px rgba(0,0,0,.07)", overflow: "hidden", marginBottom: 16 }}
        >
          <div style={{ background: week.bg, color: week.color, padding: "12px 18px", fontWeight: 800, fontSize: ".88rem" }}>
            Week {week.week} — {week.title}
          </div>
          <div style={{ padding: 16 }}>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(7,1fr)", gap: 6 }}>
              {week.days.map((day) => {
                const lt = day.letterIdx >= 0 ? LETTERS[day.letterIdx] : null;
                return (
                  <div key={day.day} style={{ borderRadius: 10, padding: "10px 4px", textAlign: "center", border: "2px solid #E0E0E0", background: lt ? "#fff" : day.letterIdx === -1 ? "#F5F5F5" : "#FFF3E0" }}>
                    <div style={{ fontSize: ".62rem", fontWeight: 800, textTransform: "uppercase", color: day.color, marginBottom: 4 }}>{day.day}</div>
                    {lt ? (
                      <>
                        <div style={{ fontFamily: "'Amiri', serif", fontSize: "1.6rem", lineHeight: 1 }}>{lt.letter}</div>
                        <div style={{ fontSize: ".58rem", fontWeight: 700, color: "#666", marginTop: 3 }}>{lt.name}</div>
                      </>
                    ) : (
                      <div style={{ fontSize: ".9rem" }}>{day.label}</div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </motion.div>
      ))}

      <div style={{ background: "#FFFDE7", borderLeft: "4px solid #FDD835", borderRadius: "0 10px 10px 0", padding: "12px 16px", marginBottom: 20, fontSize: ".88rem" }}>
        💡 Consistency is key! Even 15 minutes daily is far better than 2 hours once a week. Make learning a beautiful habit!
      </div>

      <div style={{ textAlign: "center" }}>
        <motion.button whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }} onClick={() => onNavigate("alphabet-chart")}
          style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "linear-gradient(135deg,#FFD700,#FFA000)", color: "#1a1a1a", fontWeight: 900, fontSize: ".95rem", padding: "12px 28px", borderRadius: 50, border: "none", cursor: "pointer" }}>
          ➡️ Alphabet Chart
        </motion.button>
      </div>
    </div>
  );
}
