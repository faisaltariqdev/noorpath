"use client";

import Link from "next/link";
import { useVisitorCountry } from "@/lib/visitorCountry";

/**
 * Sidebar card that points readers to the Quran-classes page for their own
 * country (guessed from the browser time zone). Server render and unmapped
 * zones show the generic "find your country" version.
 */
export default function CountryClassesCard() {
  const visitor = useVisitorCountry();
  return (
    <div className="content-card" style={{ marginBottom: 20 }}>
      <p style={{ fontSize: ".72rem", fontWeight: 800, letterSpacing: ".08em", textTransform: "uppercase", color: "var(--emerald)", margin: "0 0 6px" }}>
        {visitor ? `${visitor.flag} For families in ${visitor.inText}` : "🌍 Classes in your time zone"}
      </p>
      <h3 style={{ fontFamily: "'Playfair Display',serif", fontSize: "1.05rem", color: "var(--charcoal)", margin: "0 0 8px", lineHeight: 1.35 }}>
        {visitor ? `Online Quran classes in ${visitor.inText}` : "Online Quran classes near you — online"}
      </h3>
      <p style={{ fontSize: ".83rem", color: "var(--muted)", lineHeight: 1.55, margin: "0 0 12px" }}>
        Live one-to-one lessons for kids and adults, with lesson times arranged in your local time and female tutors on request.
      </p>
      <Link
        href={visitor ? visitor.href : "/locations"}
        style={{ display: "block", textAlign: "center", border: "1.5px solid var(--emerald)", color: "var(--emerald)", padding: "10px", borderRadius: 10, fontWeight: 700, textDecoration: "none", fontSize: ".86rem" }}
      >
        {visitor ? `See classes in ${visitor.inText} →` : "Find your country →"}
      </Link>
    </div>
  );
}
