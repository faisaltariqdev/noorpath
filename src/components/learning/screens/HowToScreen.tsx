"use client";
import { motion } from "framer-motion";
import type { ScreenId } from "@/data/learning/types";

interface Props { onNavigate: (id: ScreenId) => void; }

export default function HowToScreen({ onNavigate }: Props) {
  return (
    <div style={{ maxWidth: 980, margin: "0 auto", padding: "24px 16px 64px" }}>
      <div style={{ borderRadius: 16, padding: "28px 24px", marginBottom: 24, background: "linear-gradient(135deg,#0D3D1E,#1B6B3A)", color: "#fff" }}>
        <div style={{ display: "inline-block", background: "rgba(255,215,0,.18)", color: "#FFD700", fontSize: ".65rem", fontWeight: 800, letterSpacing: "2px", textTransform: "uppercase", padding: "3px 12px", borderRadius: 50, marginBottom: 8 }}>Guide</div>
        <h1 style={{ fontSize: "clamp(1.4rem,3.5vw,2rem)", fontWeight: 900, margin: 0 }}>How to Use This Book</h1>
        <p style={{ color: "rgba(255,255,255,.75)", fontSize: ".88rem", margin: "6px 0 0" }}>Read this page carefully before starting — it will help you get the very best results!</p>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 16, marginBottom: 20 }}>
        {[
          { title: "For Students", icon: "👦", color: "#1565C0", bg: "#E3F2FD", items: ["Start from Lesson 1 (Alif)","Do every activity on each page","Say each letter OUT LOUD","Trace letters with your finger first","Collect stars after each lesson","Practise 10 minutes every day","Have fun — you can do it!"] },
          { title: "For Teachers", icon: "👩‍🏫", color: "#E65100", bg: "#FFF3E0", items: ["Each lesson: 15–20 minutes","Read Teacher Notes before class","Always start with a warm-up","Check Makharij carefully","Use Flashcard Mode for revision","Give stars for every effort!","Revise every 5 lessons"] },
          { title: "For Parents", icon: "❤️", color: "#1B6B3A", bg: "#E8F5E9", items: ["10 minutes daily home practice","Always praise your child's effort","Use the Weekly Planner page","Help with tracing exercises","Stickers as rewards!","Make du'a together every day","Never scold — be patient"] },
        ].map(({ title, icon, color, bg, items }) => (
          <motion.div key={title} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} style={{ background: "#fff", borderRadius: 16, boxShadow: "0 2px 14px rgba(0,0,0,.07)", overflow: "hidden" }}>
            <div style={{ background: bg, color, padding: "12px 18px", fontWeight: 800, fontSize: ".88rem", display: "flex", alignItems: "center", gap: 8 }}>
              <span style={{ fontSize: "1.2rem" }}>{icon}</span> {title}
            </div>
            <div style={{ padding: 18 }}>
              <ul style={{ listStyle: "none", margin: 0, padding: 0 }}>
                {items.map((item, i) => (
                  <li key={i} style={{ marginBottom: 8, fontSize: ".84rem", display: "flex", alignItems: "flex-start", gap: 8 }}>
                    <span style={{ color, flexShrink: 0 }}>✓</span>{item}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>

      <div style={{ background: "#fff", borderRadius: 16, boxShadow: "0 2px 14px rgba(0,0,0,.07)", overflow: "hidden", marginBottom: 20 }}>
        <div style={{ background: "#FFF8E1", color: "#C8902E", padding: "12px 18px", fontWeight: 800, fontSize: ".88rem" }}>🎨 Colour Coding System</div>
        <div style={{ padding: 18 }}>
          <p style={{ fontSize: ".84rem", marginBottom: 12 }}>Each letter group has its own colour to help memory:</p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
            {[
              { bg: "#FFEBEE", color: "#C62828", text: "Red: ا ب ت ث" },
              { bg: "#E3F2FD", color: "#1565C0", text: "Blue: ج ح خ" },
              { bg: "#E8F5E9", color: "#2E7D32", text: "Green: د ذ ر ز" },
              { bg: "#FFF3E0", color: "#E65100", text: "Orange: س ش ص ض ط ظ" },
              { bg: "#F3E5F5", color: "#6A1B9A", text: "Purple: ع غ" },
              { bg: "#E0F2F1", color: "#00695C", text: "Teal: ف ق ك" },
              { bg: "#FCE4EC", color: "#AD1457", text: "Pink: ل م ن" },
              { bg: "#ECEFF1", color: "#37474F", text: "Grey: ه و ي" },
            ].map(({ bg, color, text }) => (
              <span key={text} style={{ background: bg, color, borderRadius: 50, padding: "4px 12px", fontSize: ".74rem", fontWeight: 700 }}>{text}</span>
            ))}
          </div>
        </div>
      </div>

      <div style={{ textAlign: "center" }}>
        <motion.button whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }} onClick={() => onNavigate("teacher-guide")}
          style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "linear-gradient(135deg,#FFD700,#FFA000)", color: "#1a1a1a", fontWeight: 900, fontSize: ".95rem", padding: "12px 28px", borderRadius: 50, border: "none", cursor: "pointer" }}>
          ➡️ Teacher's Guide
        </motion.button>
      </div>
    </div>
  );
}
