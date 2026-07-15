"use client";
import { motion } from "framer-motion";
import { LETTERS } from "@/data/learning/letters";
import type { ScreenId } from "@/data/learning/types";

interface Props { onNavigate: (id: ScreenId) => void; }

export default function ParentGuideScreen({ onNavigate }: Props) {
  return (
    <div style={{ maxWidth: 980, margin: "0 auto", padding: "24px 16px 64px" }}>
      <div style={{ borderRadius: 16, padding: "28px 24px", marginBottom: 24, background: "linear-gradient(135deg,#880E4F,#AD1457)", color: "#fff" }}>
        <div style={{ display: "inline-block", background: "rgba(255,255,255,.15)", color: "#fff", fontSize: ".65rem", fontWeight: 800, letterSpacing: "2px", textTransform: "uppercase", padding: "3px 12px", borderRadius: 50, marginBottom: 8 }}>Parent Edition</div>
        <h1 style={{ fontSize: "clamp(1.4rem,3.5vw,2rem)", fontWeight: 900, margin: 0 }}>Parent's Complete Guide</h1>
        <p style={{ color: "rgba(255,255,255,.75)", fontSize: ".88rem", margin: "6px 0 0" }}>Help your child succeed with daily love, patience, and encouragement.</p>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))", gap: 16, marginBottom: 20 }}>
        <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} style={{ background: "#fff", borderRadius: 16, boxShadow: "0 2px 14px rgba(0,0,0,.07)", overflow: "hidden" }}>
          <div style={{ background: "#E8F5E9", color: "#1B6B3A", padding: "12px 18px", fontWeight: 800, fontSize: ".88rem" }}>📅 Daily Practice Schedule</div>
          <div style={{ padding: 18 }}>
            {[["Morning","Revise yesterday's letter — 5 min"],["After Class","Practise new letter — 10 min"],["Evening","Tracing & colouring — 5 min"],["Bedtime","Say letters aloud — 3 min"]].map(([time, activity]) => (
              <div key={time} style={{ display: "flex", gap: 12, padding: "7px 0", borderBottom: "1px solid #F5F5F5", fontSize: ".84rem" }}>
                <strong style={{ color: "#1B6B3A", minWidth: 80 }}>{time}</strong><span>{activity}</span>
              </div>
            ))}
            <div style={{ display: "flex", gap: 12, padding: "7px 0", fontSize: ".84rem", fontWeight: 900, color: "#1B6B3A" }}>
              <strong style={{ minWidth: 80 }}>Total</strong><strong>Only 23 minutes!</strong>
            </div>
            <div style={{ background: "#FFFDE7", borderLeft: "4px solid #FDD835", borderRadius: "0 10px 10px 0", padding: "10px 14px", marginTop: 10, fontSize: ".8rem" }}>
              Just 23 minutes per day produces remarkable results over 3 months!
            </div>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.08 }} style={{ background: "#fff", borderRadius: 16, boxShadow: "0 2px 14px rgba(0,0,0,.07)", overflow: "hidden" }}>
          <div style={{ background: "#FCE4EC", color: "#AD1457", padding: "12px 18px", fontWeight: 800, fontSize: ".88rem" }}>💝 Positive Reinforcement</div>
          <div style={{ padding: 18 }}>
            {["Always praise effort, not just results","Sticker reward chart on the fridge","Celebrate every letter mastered!","Small treats for completing a unit","Take photos of their work to share","Make du'a — 'May Allah make it easy'","Never scold for mistakes — just smile!"].map((tip, i) => (
              <div key={i} style={{ marginBottom: 8, fontSize: ".84rem", display: "flex", gap: 8 }}>
                <span>{i === 6 ? "❌" : "⭐"}</span>{tip}
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Letter checklist */}
      <div style={{ background: "#fff", borderRadius: 16, boxShadow: "0 2px 14px rgba(0,0,0,.07)", overflow: "hidden", marginBottom: 20 }}>
        <div style={{ background: "#FFF8E1", color: "#C8902E", padding: "12px 18px", fontWeight: 800, fontSize: ".88rem" }}>📋 Learning Checklist — Parent Tracking</div>
        <div style={{ padding: 18, display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(130px,1fr))", gap: 8 }}>
          {LETTERS.map((lt) => (
            <label key={lt.id} style={{ display: "flex", alignItems: "center", gap: 8, cursor: "pointer", fontSize: ".8rem", background: "#F5F5F5", borderRadius: 8, padding: "7px 10px" }}>
              <input type="checkbox" style={{ width: 15, height: 15, accentColor: "#1B6B3A" }} />
              <span style={{ fontFamily: "'Amiri', serif", fontSize: "1.2rem", color: "#1B6B3A" }}>{lt.letter}</span>
              <span>{lt.name}</span>
            </label>
          ))}
        </div>
      </div>

      <div style={{ textAlign: "center" }}>
        <motion.button whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }} onClick={() => onNavigate("planner")}
          style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "linear-gradient(135deg,#FFD700,#FFA000)", color: "#1a1a1a", fontWeight: 900, fontSize: ".95rem", padding: "12px 28px", borderRadius: 50, border: "none", cursor: "pointer" }}>
          ➡️ Weekly Planner
        </motion.button>
      </div>
    </div>
  );
}
