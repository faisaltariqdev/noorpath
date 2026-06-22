import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "404 — Page Not Found",
  description: "The page you are looking for could not be found. Return to NoorPath Academy homepage.",
  // Noindex so Google doesn't index 404 pages
  robots: { index: false, follow: false },
};

const quickLinks = [
  { href: "/", label: "🏠 Homepage" },
  { href: "/online-quran-classes", label: "📖 Online Quran Classes" },
  { href: "/courses", label: "📚 All Courses" },
  { href: "/blog", label: "✍️ Blog" },
  { href: "/pricing", label: "💰 Pricing" },
  { href: "/online-quran-classes#cta", label: "🎓 Free Trial Class" },
];

export default function NotFound() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "var(--ivory)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "100px 20px 60px",
      }}
    >
      <div style={{ textAlign: "center", maxWidth: 560 }}>
        {/* Icon */}
        <div style={{ fontSize: "5rem", marginBottom: 20 }}>🕌</div>

        {/* 404 number */}
        <div
          style={{
            fontFamily: "var(--font-playfair), serif",
            fontSize: "clamp(5rem, 15vw, 9rem)",
            fontWeight: 700,
            color: "var(--emerald)",
            lineHeight: 1,
            marginBottom: 8,
            opacity: 0.15,
          }}
        >
          404
        </div>

        <h1
          style={{
            fontFamily: "var(--font-playfair), serif",
            fontSize: "clamp(1.5rem, 4vw, 2rem)",
            color: "var(--charcoal)",
            marginBottom: 12,
            marginTop: -20,
          }}
        >
          Page Not Found
        </h1>

        <p
          style={{
            color: "var(--muted)",
            fontSize: "1rem",
            lineHeight: 1.75,
            marginBottom: 32,
          }}
        >
          The page you are looking for may have been moved, renamed, or no
          longer exists. Try one of the links below to find what you need.
        </p>

        {/* Quick links */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 10,
            justifyContent: "center",
            marginBottom: 32,
          }}
        >
          {quickLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              style={{
                background: "#fff",
                border: "1px solid var(--border)",
                borderRadius: 10,
                padding: "9px 18px",
                color: "var(--charcoal)",
                fontWeight: 600,
                fontSize: ".87rem",
                textDecoration: "none",
                transition: "all .2s",
              }}
            >
              {l.label}
            </Link>
          ))}
        </div>

        <Link
          href="/online-quran-classes#cta"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            background: "var(--gold)",
            color: "var(--charcoal)",
            fontWeight: 700,
            padding: "14px 28px",
            borderRadius: 50,
            textDecoration: "none",
            fontSize: ".95rem",
          }}
        >
          Book a Free Trial Class →
        </Link>
      </div>
    </div>
  );
}
