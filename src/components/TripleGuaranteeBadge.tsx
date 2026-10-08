import React from "react";
import { ShieldCheck, RefreshCw, CalendarX2, Award } from "lucide-react";
import { TRIAL, CANCELLATION_NOTICE_DAYS } from "@/lib/academyFacts";

export default function TripleGuaranteeBadge() {
  const guarantees = [
    {
      icon: ShieldCheck,
      title: "100% Free 30-Minute Trial",
      desc: `Test our live 1-on-1 teaching before paying a single dollar. No credit card required, zero obligation.`,
      badge: "Risk-Free",
    },
    {
      icon: RefreshCw,
      title: "Tutor Re-Match Guarantee",
      desc: "If you or your child do not feel 100% comfortable with the assigned tutor, we replace the tutor immediately.",
      badge: "Chemistry Match",
    },
    {
      icon: CalendarX2,
      title: "No Long-Term Contracts",
      desc: `Month-to-month flexibility. Pause for vacations or cancel with simple ${CANCELLATION_NOTICE_DAYS} days notice.`,
      badge: "Flexible Billing",
    },
    {
      icon: Award,
      title: "Vetted & Certified Tutors",
      desc: "Native Arabic and English-speaking tutors with verified Tajweed, Ijazah, and child-friendly pedagogy.",
      badge: "Verified Quality",
    },
  ];

  return (
    <div
      className="triple-guarantee-container my-10 p-6 sm:p-8 rounded-2xl border"
      style={{
        background: "linear-gradient(180deg, #ffffff 0%, var(--ivory) 100%)",
        borderColor: "rgba(10, 110, 79, 0.2)",
        boxShadow: "0 10px 30px rgba(0,0,0,0.03)",
      }}
    >
      <div className="text-center max-w-[650px] mx-auto mb-8">
        <span
          style={{
            display: "inline-block",
            fontSize: "0.75rem",
            fontWeight: 800,
            textTransform: "uppercase",
            letterSpacing: "0.08em",
            color: "var(--emerald)",
            background: "rgba(10, 110, 79, 0.1)",
            padding: "4px 12px",
            borderRadius: 50,
            marginBottom: 8,
          }}
        >
          Our Student & Parent Promise
        </span>
        <h3
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(1.3rem, 3vw, 1.7rem)",
            color: "var(--charcoal)",
            fontWeight: 700,
            marginBottom: 6,
          }}
        >
          Learn with 100% Peace of Mind & Confidence
        </h3>
        <p style={{ color: "var(--muted)", fontSize: "0.88rem", lineHeight: 1.5 }}>
          We remove all risk so you can focus entirely on your child&apos;s spiritual and Quranic progress.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {guarantees.map((g, i) => {
          const Icon = g.icon;
          return (
            <div
              key={i}
              className="p-5 rounded-xl border bg-white flex flex-col justify-between transition-all hover:shadow-md"
              style={{
                borderColor: "var(--border)",
              }}
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div
                    className="p-2.5 rounded-lg flex items-center justify-center"
                    style={{ background: "rgba(10, 110, 79, 0.1)", color: "var(--emerald)" }}
                  >
                    <Icon size={20} />
                  </div>
                  <span
                    className="text-[0.7rem] font-bold px-2 py-0.5 rounded-full"
                    style={{ background: "rgba(212, 160, 23, 0.15)", color: "#b45309" }}
                  >
                    {g.badge}
                  </span>
                </div>
                <h4
                  style={{
                    fontSize: "0.98rem",
                    fontWeight: 700,
                    color: "var(--charcoal)",
                    marginBottom: 6,
                  }}
                >
                  {g.title}
                </h4>
                <p style={{ color: "var(--muted)", fontSize: "0.83rem", lineHeight: 1.55 }}>
                  {g.desc}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
