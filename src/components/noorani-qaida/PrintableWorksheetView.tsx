"use client";

import { Printer, Download, Sparkles, CheckSquare } from "lucide-react";
import type { QaidaWorksheetMeta } from "@/data/noorani-qaida/worksheets";

export default function PrintableWorksheetView({
  worksheet,
}: {
  worksheet: QaidaWorksheetMeta;
}) {
  const handlePrint = () => {
    if (typeof window !== "undefined") {
      window.print();
    }
  };

  return (
    <div style={{ margin: "2rem 0" }}>
      {/* Action Bar */}
      <div
        className="no-print"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: 12,
          background: "#f0fdf4",
          border: "1.5px solid rgba(10,110,79,.2)",
          borderRadius: "14px",
          padding: "16px 20px",
          marginBottom: "1.5rem",
        }}
      >
        <div>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 6, fontSize: ".82rem", fontWeight: 700, color: "var(--emerald)", textTransform: "uppercase", letterSpacing: ".5px" }}>
            <Sparkles size={14} /> Free Printable Learning Resource
          </div>
          <div style={{ fontSize: "1.02rem", fontWeight: 700, color: "var(--charcoal)", marginTop: 2 }}>
            Print directly or save as PDF for home practice
          </div>
        </div>

        <button
          type="button"
          onClick={handlePrint}
          className="btn-primary-np"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            padding: "10px 22px",
            borderRadius: "50px",
            fontSize: ".94rem",
            fontWeight: 700,
            cursor: "pointer",
            background: "linear-gradient(135deg, #0a6e4f 0%, #08553d 100%)",
            color: "#ffffff",
            border: "none",
            boxShadow: "0 4px 14px rgba(10,110,79,.25)",
          }}
        >
          <Printer size={18} />
          <span>Print / Save as PDF</span>
        </button>
      </div>

      {/* Printable Sheet Frame */}
      <div
        className="worksheet-paper"
        style={{
          background: "#ffffff",
          border: "2px solid #e5e7eb",
          borderRadius: "16px",
          padding: "clamp(1.5rem, 4vw, 3rem)",
          boxShadow: "0 10px 30px rgba(0,0,0,.06)",
        }}
      >
        {/* Worksheet Header */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            borderBottom: "2px solid var(--emerald)",
            paddingBottom: "1.25rem",
            marginBottom: "1.5rem",
            flexWrap: "wrap",
            gap: 16,
          }}
        >
          <div>
            <div style={{ fontSize: ".85rem", fontWeight: 800, color: "var(--emerald)", letterSpacing: "1px", textTransform: "uppercase" }}>
              NoorPath Online Quran Academy
            </div>
            <h2 style={{ fontSize: "1.5rem", fontWeight: 800, color: "var(--charcoal)", margin: "4px 0" }}>
              {worksheet.title.replace(" — Free Printable PDF", "")}
            </h2>
            <div style={{ fontSize: ".85rem", color: "var(--slate)" }}>
              Noorani Qaida Practical Worksheet · Level: Beginner (Ages 4+)
            </div>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 8,
              minWidth: 200,
              fontSize: ".88rem",
              color: "var(--slate)",
            }}
          >
            <div style={{ borderBottom: "1px dashed #9ca3af", paddingBottom: 2 }}>
              <strong>Student Name:</strong> ________________
            </div>
            <div style={{ borderBottom: "1px dashed #9ca3af", paddingBottom: 2 }}>
              <strong>Date:</strong> _______________________
            </div>
            <div style={{ borderBottom: "1px dashed #9ca3af", paddingBottom: 2 }}>
              <strong>Score:</strong> ______ / 10 ★★★
            </div>
          </div>
        </div>

        {/* Exercises */}
        {worksheet.worksheetExercises.map((sec, sIdx) => (
          <div key={sec.title} style={{ marginBottom: "2rem" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }}>
              <CheckSquare size={18} style={{ color: "var(--emerald)" }} />
              <h3 style={{ fontSize: "1.15rem", fontWeight: 750, color: "var(--charcoal)", margin: 0 }}>
                {sec.title}
              </h3>
            </div>
            <p style={{ fontSize: ".92rem", color: "var(--slate)", marginBottom: 14 }}>
              {sec.instruction}
            </p>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(130px, 1fr))",
                gap: "1rem",
              }}
            >
              {sec.items.map((item, iIdx) => (
                <div
                  key={`${item.arabic}-${iIdx}`}
                  style={{
                    border: "1.5px solid #d1d5db",
                    borderRadius: "12px",
                    padding: "1rem",
                    textAlign: "center",
                    background: "#fafafa",
                  }}
                >
                  <div
                    style={{
                      fontFamily: "'Amiri', serif",
                      fontSize: "2.6rem",
                      direction: "rtl",
                      color: "var(--charcoal)",
                      lineHeight: 1.4,
                      marginBottom: 6,
                    }}
                  >
                    {item.arabic}
                  </div>
                  {item.transliteration && (
                    <div style={{ fontSize: ".82rem", fontWeight: 700, color: "var(--emerald)", marginBottom: 4 }}>
                      {item.transliteration}
                    </div>
                  )}
                  {item.label && (
                    <div style={{ fontSize: ".76rem", color: "#6b7280" }}>
                      {item.label}
                    </div>
                  )}
                  {/* Practice Dotted Line for handwriting */}
                  <div
                    style={{
                      marginTop: 10,
                      paddingTop: 8,
                      borderTop: "1px dashed #9ca3af",
                      fontSize: ".7rem",
                      color: "#9ca3af",
                    }}
                  >
                    Write here: _______
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* Teacher/Parent Notes Strip */}
        <div
          style={{
            border: "1px solid #e5e7eb",
            borderRadius: "10px",
            padding: "12px 16px",
            background: "#f9fafb",
            fontSize: ".82rem",
            color: "var(--slate)",
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: 10,
          }}
        >
          <div>
            <strong>Teacher / Parent Note:</strong> Listen to the child pronounce each example aloud cleanly. Check for accurate lip shape and correct vowel duration.
          </div>
          <div style={{ fontWeight: 700, color: "var(--emerald)" }}>
            https://www.noorpath.online
          </div>
        </div>
      </div>

      {/* Global Print Styles */}
      <style jsx global>{`
        @media print {
          body {
            background: #ffffff !important;
            color: #000000 !important;
          }
          nav, header, footer, .no-print, .qaida-breadcrumbs, .qaida-course-cta, .qaida-hero {
            display: none !important;
          }
          .worksheet-paper {
            border: none !important;
            box-shadow: none !important;
            padding: 0 !important;
            width: 100% !important;
          }
        }
      `}</style>
    </div>
  );
}
