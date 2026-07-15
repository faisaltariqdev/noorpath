"use client";
import { motion } from "framer-motion";
import type { ScreenId } from "@/data/learning/types";

interface Props { onNavigate: (id: ScreenId) => void; }

export default function TeacherGuideScreen({ onNavigate }: Props) {
  return (
    <div style={{ maxWidth: 980, margin: "0 auto", padding: "24px 16px 64px" }}>
      <div style={{ borderRadius: 16, padding: "28px 24px", marginBottom: 24, background: "linear-gradient(135deg,#BF360C,#E64A19)", color: "#fff" }}>
        <div style={{ display: "inline-block", background: "rgba(255,255,255,.15)", color: "#fff", fontSize: ".65rem", fontWeight: 800, letterSpacing: "2px", textTransform: "uppercase", padding: "3px 12px", borderRadius: 50, marginBottom: 8 }}>Teacher Edition</div>
        <h1 style={{ fontSize: "clamp(1.4rem,3.5vw,2rem)", fontWeight: 900, margin: 0 }}>Complete Teacher's Guide</h1>
        <p style={{ color: "rgba(255,255,255,.75)", fontSize: ".88rem", margin: "6px 0 0" }}>Professional guidance for classroom, home and online Quran teaching.</p>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))", gap: 16, marginBottom: 16 }}>
        {/* Lesson Time Plan */}
        <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} style={{ background: "#fff", borderRadius: 16, boxShadow: "0 2px 14px rgba(0,0,0,.07)", overflow: "hidden" }}>
          <div style={{ background: "#FFF3E0", color: "#E65100", padding: "12px 18px", fontWeight: 800, fontSize: ".88rem" }}>⏱ Lesson Time Plan</div>
          <div style={{ padding: 18 }}>
            {[["Warm-up & Revision","3 min"],["New Letter Introduction","5 min"],["Makharij Pronunciation","4 min"],["Tracing & Activities","5 min"],["Stars & Wrap-up","3 min"]].map(([step, time]) => (
              <div key={step} style={{ display: "flex", justifyContent: "space-between", padding: "7px 0", borderBottom: "1px solid #F5F5F5", fontSize: ".84rem" }}>
                <span>{step}</span><strong>{time}</strong>
              </div>
            ))}
            <div style={{ display: "flex", justifyContent: "space-between", padding: "7px 0", fontSize: ".84rem", fontWeight: 900, color: "#E65100" }}>
              <strong>Total</strong><strong>20 min</strong>
            </div>
          </div>
        </motion.div>

        {/* Online/Zoom Tips */}
        <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.08 }} style={{ background: "#fff", borderRadius: 16, boxShadow: "0 2px 14px rgba(0,0,0,.07)", overflow: "hidden" }}>
          <div style={{ background: "#E3F2FD", color: "#1565C0", padding: "12px 18px", fontWeight: 800, fontSize: ".88rem" }}>📹 Online / Zoom Tips</div>
          <div style={{ padding: 18 }}>
            {["Share screen to show letters","Ask children to show tracing on camera","Unmute one child at a time","Use Zoom whiteboard for drawing","Announce stars in the chat","Send PDF homework after class","Breakout rooms for pair reading"].map((tip, i) => (
              <div key={i} style={{ marginBottom: 8, fontSize: ".84rem", display: "flex", gap: 8 }}>
                <span>📌</span>{tip}
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Makharij Master Reference */}
      <div style={{ background: "#fff", borderRadius: 16, boxShadow: "0 2px 14px rgba(0,0,0,.07)", overflow: "hidden", marginBottom: 16 }}>
        <div style={{ background: "#E8F5E9", color: "#1B6B3A", padding: "12px 18px", fontWeight: 800, fontSize: ".88rem" }}>🎤 Makharij Master Reference</div>
        <div style={{ padding: 18, display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))", gap: 12 }}>
          {[
            { title: "Throat Letters (Halqiyyah)", color: "#E65100", letters: "ء ه ع ح غ خ", tip: "Three pairs from the throat. Practice breathing exercises first." },
            { title: "Tongue Letters (Lisaniyyah)", color: "#1B6B3A", letters: "ق ك ج ش ي", tip: "Specific tongue positions required. Use a mirror to see placement." },
            { title: "Lip Letters (Shafawiyyah)", color: "#C8902E", letters: "ب م و ف", tip: "Easiest for beginners. Mirror activity works beautifully!" },
          ].map(({ title, color, letters, tip }) => (
            <div key={title} style={{ background: "#F9F9F9", borderRadius: 12, padding: "14px 16px", border: `2px dashed ${color}44` }}>
              <div style={{ fontSize: ".7rem", fontWeight: 900, textTransform: "uppercase", letterSpacing: "1px", color, marginBottom: 6 }}>{title}</div>
              <div style={{ fontFamily: "'Amiri', serif", fontSize: "1.8rem", color, textAlign: "center", marginBottom: 6 }}>{letters}</div>
              <p style={{ fontSize: ".78rem", color: "#555", margin: 0 }}>{tip}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Revision & Assessment */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))", gap: 16, marginBottom: 20 }}>
        <div style={{ background: "#fff", borderRadius: 16, boxShadow: "0 2px 14px rgba(0,0,0,.07)", overflow: "hidden" }}>
          <div style={{ background: "#F3E5F5", color: "#6A1B9A", padding: "12px 18px", fontWeight: 800, fontSize: ".88rem" }}>🔄 Revision Strategy</div>
          <div style={{ padding: 18 }}>
            {["Review previous lesson first","Revise every 5 lessons as a group","Use Flashcard Mode for rapid review","Sing the alphabet song together","\"Which letter?\" guessing games","Track progress on the chart"].map((s, i) => (
              <div key={i} style={{ marginBottom: 8, fontSize: ".84rem", display: "flex", gap: 8 }}><span>🔄</span>{s}</div>
            ))}
          </div>
        </div>
        <div style={{ background: "#fff", borderRadius: 16, boxShadow: "0 2px 14px rgba(0,0,0,.07)", overflow: "hidden" }}>
          <div style={{ background: "#FFEBEE", color: "#C62828", padding: "12px 18px", fontWeight: 800, fontSize: ".88rem" }}>⭐ Assessment Rubric</div>
          <div style={{ padding: 18 }}>
            {[["⭐⭐⭐","Excellent — confident, correct Makharij"],["⭐⭐","Good — minor errors, self-corrects"],["⭐","Developing — needs support & practice"],["📝","Not yet — requires further revision"]].map(([stars, desc]) => (
              <div key={stars} style={{ display: "flex", gap: 12, padding: "7px 0", borderBottom: "1px solid #F5F5F5", fontSize: ".84rem" }}>
                <span style={{ fontWeight: 900, flexShrink: 0 }}>{stars}</span><span>{desc}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div style={{ textAlign: "center" }}>
        <motion.button whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }} onClick={() => onNavigate("parent-guide")}
          style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "linear-gradient(135deg,#FFD700,#FFA000)", color: "#1a1a1a", fontWeight: 900, fontSize: ".95rem", padding: "12px 28px", borderRadius: 50, border: "none", cursor: "pointer" }}>
          ➡️ Parent's Guide
        </motion.button>
      </div>
    </div>
  );
}
