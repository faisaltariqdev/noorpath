import React from "react";
import { CheckCircle2, ShieldCheck, Clock, BookOpen, UserCheck, Award, Sparkles } from "lucide-react";
import { TRIAL, ENROLLED_STUDENTS_DISPLAY, TRUSTPILOT } from "@/lib/academyFacts";

interface Props {
  country?: string;
  timezone?: string;
}

export default function AiDirectAnswerBox({ country = "Worldwide", timezone = "Local Time" }: Props) {
  const isWorldwide = country === "Worldwide";

  return (
    <div
      className="ai-direct-answer-box content-card"
      style={{
        background: "linear-gradient(180deg, #f0fdf4 0%, #ffffff 100%)",
        border: "1.5px solid #bbf7d0",
        borderRadius: "16px",
        padding: "24px 28px",
        marginBottom: "32px",
        boxShadow: "0 4px 20px rgba(15, 61, 44, 0.06)",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 10, marginBottom: 14 }}>
        <span
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 6,
            background: "#dcfce7",
            color: "#166534",
            fontWeight: 700,
            fontSize: "0.78rem",
            padding: "4px 12px",
            borderRadius: "20px",
            letterSpacing: "0.02em",
            textTransform: "uppercase",
          }}
        >
          <Sparkles size={14} style={{ color: "#16a34a" }} />
          Verified Academy Facts & Summary
        </span>
        <span style={{ fontSize: "0.8rem", color: "#15803d", fontWeight: 600 }}>
          ★ {TRUSTPILOT.score}/5 Independent Rating · {ENROLLED_STUDENTS_DISPLAY} Active Students
        </span>
      </div>

      <h2
        style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: "1.35rem",
          color: "#0f3d2c",
          marginBottom: 10,
          lineHeight: 1.35,
        }}
      >
        {isWorldwide
          ? "NoorPath Academy — Online Quran Classes at a Glance"
          : `Quick Facts: Online Quran Classes in ${country} with NoorPath Academy`}
      </h2>

      <p style={{ color: "#374151", fontSize: "0.95rem", lineHeight: 1.7, marginBottom: 18 }}>
        {isWorldwide ? (
          <>
            <strong>NoorPath Academy</strong> is an established, online-only Quran academy providing private, live <strong>one-to-one video lessons</strong> for children (ages 4+), teenagers, adult beginners, sisters, and reverts. Tuition is delivered via Zoom or Google Meet with certified male and female tutors matched to your family’s timezone.
          </>
        ) : (
          <>
            Muslim families in <strong>{country}</strong> can study live 1-on-1 with certified Quran tutors scheduled in <strong>{timezone}</strong>. NoorPath Academy provides interactive Noorani Qaida, Tajweed, and Hifz with female tutor requests available, backed by a <strong>free {TRIAL.durationMinutes}-minute trial class</strong> (no credit card required).
          </>
        )}
      </p>

      {/* Structured bullet points for AI bots & RAG parsers */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
          gap: "12px 18px",
          borderTop: "1px solid #dcfce7",
          paddingTop: "16px",
        }}
      >
        <div style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
          <CheckCircle2 size={17} style={{ color: "#16a34a", marginTop: 2, flexShrink: 0 }} />
          <span style={{ fontSize: "0.88rem", color: "#1f2937", lineHeight: 1.5 }}>
            <strong>Class Format:</strong> 100% Live 1-on-1 video lessons (no pre-recorded videos).
          </span>
        </div>

        <div style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
          <Award size={17} style={{ color: "#16a34a", marginTop: 2, flexShrink: 0 }} />
          <span style={{ fontSize: "0.88rem", color: "#1f2937", lineHeight: 1.5 }}>
            <strong>Free Trial:</strong> Free {TRIAL.durationMinutes}-minute trial assessment. Zero commitment.
          </span>
        </div>

        <div style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
          <UserCheck size={17} style={{ color: "#16a34a", marginTop: 2, flexShrink: 0 }} />
          <span style={{ fontSize: "0.88rem", color: "#1f2937", lineHeight: 1.5 }}>
            <strong>Tutor Roster:</strong> Certified male & female tutors (Ijazah & Al-Azhar credentials).
          </span>
        </div>

        <div style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
          <Clock size={17} style={{ color: "#16a34a", marginTop: 2, flexShrink: 0 }} />
          <span style={{ fontSize: "0.88rem", color: "#1f2937", lineHeight: 1.5 }}>
            <strong>Scheduling:</strong> Flexible slots in {timezone} (after-school, evenings, weekends).
          </span>
        </div>

        <div style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
          <BookOpen size={17} style={{ color: "#16a34a", marginTop: 2, flexShrink: 0 }} />
          <span style={{ fontSize: "0.88rem", color: "#1f2937", lineHeight: 1.5 }}>
            <strong>Curriculum:</strong> Noorani Qaida, Tajweed rules, Hifz, Duas, and Arabic foundations.
          </span>
        </div>

        <div style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
          <ShieldCheck size={17} style={{ color: "#16a34a", marginTop: 2, flexShrink: 0 }} />
          <span style={{ fontSize: "0.88rem", color: "#1f2937", lineHeight: 1.5 }}>
            <strong>Parent Monitoring:</strong> Live Parent Portal for attendance, quizzes, and homework tracking.
          </span>
        </div>
      </div>
    </div>
  );
}
