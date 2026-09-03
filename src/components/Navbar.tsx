"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { Menu, X, GraduationCap, ChevronDown, Video } from "lucide-react";
import { TRIAL } from "@/lib/academyFacts";
import { PRIORITY_MARKETS } from "@/lib/geoSeo";
import { NOORANI_QAIDA_LIVE_PREVIEW_URL } from "@/lib/nooraniQaidaPlatform";

/* Primary nav — brand SERP sitelink hubs (Classes, Courses, Trial, Pricing, Blog) */
const primaryLinks = [
  { href: "/online-quran-classes", label: "Online Classes" },
  { href: "/courses", label: "Courses" },
  { href: "/free-quran-classes-online", label: "Free Trial" },
  { href: "/pricing", label: "Pricing" },
  { href: "/blog", label: "Blog" },
];

/* Grouped under a "More" dropdown */
const moreLinks = [
  { href: "/tools", label: "🧮 Islamic Tools & Calculators" },
  { href: "/noorani-qaida", label: "Noorani Qaida" },
  { href: "/online-quran-classes-for-kids", label: "Kids Classes" },
  { href: "/one-on-one-quran-classes", label: "1-to-1 Classes" },
  { href: "/quran-classes-for-sisters", label: "Classes for Sisters" },
  { href: "/quran-classes-for-working-professionals", label: "For Professionals" },
  { href: "/our-tutors", label: "Our Tutors" },
  { href: "/islamic-resources", label: "Resources" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

const priorityCountries = PRIORITY_MARKETS.map(({ country, slug }) => ({
  href: `/locations/${slug}`,
  label: country,
}));

function closeParentDetails(e: React.MouseEvent<HTMLElement>) {
  const details = e.currentTarget.closest("details");
  if (details) details.open = false;
}

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [promoVisible, setPromoVisible] = useState(true);
  const moreDetailsRef = useRef<HTMLDetailsElement>(null);
  const countriesDetailsRef = useRef<HTMLDetailsElement>(null);
  const mobileCountriesRef = useRef<HTMLDetailsElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Client-side navigations do not remount the header — close native <details> menus.
  useEffect(() => {
    if (moreDetailsRef.current) moreDetailsRef.current.open = false;
    if (countriesDetailsRef.current) countriesDetailsRef.current.open = false;
    if (mobileCountriesRef.current) mobileCountriesRef.current.open = false;
    // Deferred so the state update is not synchronous inside the effect body.
    const timer = setTimeout(() => setOpen(false), 0);
    return () => clearTimeout(timer);
  }, [pathname]);

  return (
    <header style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 1050 }}>
      {/* ── PROMO BAR ── */}
      {promoVisible && (
        <div
          className="promo-bar-np"
          style={{
            background: "linear-gradient(90deg, #0a6e4f 0%, #0d5436 100%)",
            color: "#fff",
            textAlign: "center",
            fontWeight: 500,
            position: "relative",
            letterSpacing: ".2px",
          }}
        >
          🎁{" "}
          <strong style={{ fontWeight: 700 }}>Free {TRIAL.durationMinutes}-minute trial</strong>{" "}
          — No credit card required.{" "}
          <Link
            href="/free-quran-classes-online"
            style={{ color: "#e8b84b", fontWeight: 700, marginLeft: 8, textDecoration: "none", whiteSpace: "nowrap" }}
          >
            Request Trial →
          </Link>
          <button
            aria-label="Close announcement"
            onClick={() => setPromoVisible(false)}
            style={{
              position: "absolute",
              right: 8,
              top: "50%",
              transform: "translateY(-50%)",
              background: "none",
              border: "none",
              color: "rgba(255,255,255,.6)",
              fontSize: "1.1rem",
              cursor: "pointer",
              lineHeight: 1,
              padding: "2px 6px",
            }}
          >
            ×
          </button>
        </div>
      )}

      {/* ── MAIN NAVBAR ── */}
      <nav
        style={{
          background: scrolled
            ? "rgba(8,35,20,.97)"
            : "linear-gradient(180deg, rgba(4,20,12,.95) 0%, rgba(10,40,25,.88) 100%)",
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
          borderBottom: "1px solid rgba(255,255,255,.07)",
          transition: "background .3s ease, box-shadow .3s ease, padding .3s ease",
          padding: scrolled ? "10px 0" : "14px 0",
          boxShadow: scrolled ? "0 4px 32px rgba(0,0,0,.3)" : "none",
        }}
        aria-label="Main navigation"
        role="navigation"
      >
        <div
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            padding: "0 20px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 8,
          }}
        >
          {/* Logo */}
          <Link href="/" style={{ textDecoration: "none", flexShrink: 0 }}>
            <div
              className="logo-glow"
              style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                fontSize: "1.45rem",
                fontWeight: 700,
                color: "#fff",
                letterSpacing: "-.3px",
                lineHeight: 1,
              }}
            >
              Noor<span style={{ color: "#d4a030" }}>Path</span>{" "}
              <span
                style={{
                  color: "rgba(255,255,255,.45)",
                  fontSize: ".62rem",
                  verticalAlign: "middle",
                  fontFamily: "var(--font-jakarta, sans-serif)",
                  fontWeight: 600,
                  letterSpacing: "1px",
                  textTransform: "uppercase",
                }}
              >
                Academy
              </span>
            </div>
          </Link>

          {/* Desktop nav */}
          <ul
            className="nav-desktop"
            style={{ listStyle: "none", margin: 0, padding: 0, alignItems: "center", gap: 0 }}
          >
            {/* Primary links */}
            {primaryLinks.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  style={{
                    color: "rgba(255,255,255,.82)",
                    fontWeight: 500,
                    fontSize: ".865rem",
                    padding: "7px 11px",
                    borderRadius: 8,
                    textDecoration: "none",
                    letterSpacing: ".1px",
                    display: "block",
                    transition: "color .2s, background .2s",
                    whiteSpace: "nowrap",
                  }}
                  className="nav-link-np"
                >
                  {l.label}
                </Link>
              </li>
            ))}

            {/* More dropdown */}
            <li style={{ position: "relative" }}>
              <details ref={moreDetailsRef}>
                <summary
                  className="nav-countries-np"
                  style={{
                    color: "rgba(255,255,255,.82)",
                    fontWeight: 500,
                    fontSize: ".865rem",
                    padding: "7px 11px",
                    borderRadius: 8,
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    gap: 4,
                    whiteSpace: "nowrap",
                    listStyle: "none",
                  }}
                >
                  More <ChevronDown size={13} />
                </summary>
                <div
                  style={{
                    position: "absolute",
                    top: "calc(100% + 10px)",
                    left: 0,
                    minWidth: 180,
                    padding: 8,
                    background: "rgba(6,28,18,.99)",
                    border: "1px solid rgba(255,255,255,.12)",
                    borderRadius: 12,
                    boxShadow: "0 16px 36px rgba(0,0,0,.35)",
                  }}
                >
                  {moreLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={closeParentDetails}
                      style={{ display: "block", color: "rgba(255,255,255,.82)", padding: "8px 12px", fontSize: ".84rem", textDecoration: "none", borderRadius: 8 }}
                      className="nav-link-np"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </details>
            </li>

            {/* Countries dropdown */}
            <li style={{ position: "relative" }}>
              <details ref={countriesDetailsRef}>
                <summary
                  className="nav-countries-np"
                  style={{
                    color: "rgba(255,255,255,.82)",
                    fontWeight: 500,
                    fontSize: ".865rem",
                    padding: "7px 11px",
                    borderRadius: 8,
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    gap: 4,
                    whiteSpace: "nowrap",
                    listStyle: "none",
                  }}
                >
                  Countries <ChevronDown size={13} />
                </summary>
                <div
                  style={{
                    position: "absolute",
                    top: "calc(100% + 10px)",
                    right: 0,
                    width: 220,
                    padding: 8,
                    background: "rgba(6,28,18,.99)",
                    border: "1px solid rgba(255,255,255,.12)",
                    borderRadius: 12,
                    boxShadow: "0 16px 36px rgba(0,0,0,.35)",
                  }}
                >
                  <Link
                    href="/locations"
                    onClick={closeParentDetails}
                    style={{ display: "block", color: "#e8b84b", padding: "8px 12px", fontWeight: 700, textDecoration: "none", borderRadius: 8 }}
                  >
                    All locations →
                  </Link>
                  {priorityCountries.map((country) => (
                    <Link
                      key={country.href}
                      href={country.href}
                      onClick={closeParentDetails}
                      style={{ display: "block", color: "rgba(255,255,255,.82)", padding: "7px 12px", fontSize: ".83rem", textDecoration: "none", borderRadius: 8 }}
                      className="nav-link-np"
                    >
                      {country.label}
                    </Link>
                  ))}
                </div>
              </details>
            </li>

            {/* Live demo — admin platform preview (lesson-only) */}
            <li style={{ marginLeft: 6 }}>
              <a
                href={NOORANI_QAIDA_LIVE_PREVIEW_URL}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  background: "rgba(10,110,79,.25)",
                  border: "1px solid rgba(10,110,79,.6)",
                  color: "#4ade80",
                  fontWeight: 700,
                  fontSize: ".82rem",
                  padding: "7px 16px",
                  borderRadius: 50,
                  textDecoration: "none",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 5,
                  transition: "all .25s",
                  whiteSpace: "nowrap",
                }}
                className="btn-nav-demo"
              >
                <Video size={13} aria-hidden="true" /> Live Demo
              </a>
            </li>

            {/* Free Trial CTA */}
            <li style={{ marginLeft: 4 }}>
              <Link
                href="/free-quran-classes-online"
                style={{
                  background: "linear-gradient(135deg, #c9922a 0%, #d4a030 100%)",
                  color: "#1a1a2e",
                  fontWeight: 700,
                  fontSize: ".82rem",
                  padding: "8px 18px",
                  borderRadius: 50,
                  textDecoration: "none",
                  letterSpacing: ".2px",
                  boxShadow: "0 4px 14px rgba(201,146,42,.35)",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 5,
                  transition: "all .25s",
                  whiteSpace: "nowrap",
                }}
                className="btn-nav-cta"
              >
                <GraduationCap size={13} aria-hidden="true" /> Free Trial
              </Link>
            </li>
          </ul>

          {/* Mobile hamburger */}
          <button
            className="nav-mobile-btn"
            aria-label="Toggle navigation menu"
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
            style={{
              background: "rgba(255,255,255,.1)",
              border: "1px solid rgba(255,255,255,.15)",
              borderRadius: 10,
              color: "#fff",
              padding: "8px 10px",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
            }}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile dropdown */}
        {open && (
          <div
            style={{
              background: "rgba(6,28,18,.98)",
              backdropFilter: "blur(16px)",
              borderTop: "1px solid rgba(255,255,255,.08)",
              padding: "12px 20px 20px",
            }}
            className="nav-mobile-menu"
          >
            <ul style={{ listStyle: "none", margin: 0, padding: 0 }}>
              {[...primaryLinks, ...moreLinks].map((l) => (
                <li key={l.href} style={{ borderBottom: "1px solid rgba(255,255,255,.06)" }}>
                  <Link
                    href={l.href}
                    className="nav-link-np"
                    style={{ display: "block", padding: "13px 8px", color: "rgba(255,255,255,.85)", textDecoration: "none", fontWeight: 500, fontSize: ".9rem" }}
                    onClick={() => setOpen(false)}
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
              <li style={{ borderBottom: "1px solid rgba(255,255,255,.06)", padding: "8px" }}>
                <details ref={mobileCountriesRef}>
                  <summary style={{ color: "rgba(255,255,255,.85)", padding: "5px 0", fontWeight: 600, cursor: "pointer" }}>
                    Priority countries
                  </summary>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 4, paddingTop: 8 }}>
                    <Link
                      href="/locations"
                      onClick={(e) => {
                        closeParentDetails(e);
                        setOpen(false);
                      }}
                      style={{ color: "#e8b84b", padding: "6px 0", fontSize: ".84rem" }}
                    >
                      All locations
                    </Link>
                    {priorityCountries.map((country) => (
                      <Link
                        key={country.href}
                        href={country.href}
                        onClick={(e) => {
                          closeParentDetails(e);
                          setOpen(false);
                        }}
                        style={{ color: "rgba(255,255,255,.78)", padding: "6px 0", fontSize: ".84rem" }}
                      >
                        {country.label}
                      </Link>
                    ))}
                  </div>
                </details>
              </li>
              <li style={{ marginTop: 10 }}>
                <a
                  href={NOORANI_QAIDA_LIVE_PREVIEW_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 6,
                    background: "rgba(10,110,79,.3)",
                    border: "1px solid rgba(10,110,79,.7)",
                    color: "#4ade80",
                    padding: "12px",
                    borderRadius: 10,
                    fontWeight: 700,
                    textDecoration: "none",
                    fontSize: ".92rem",
                    marginBottom: 8,
                  }}
                  onClick={() => setOpen(false)}
                >
                  <Video size={15} aria-hidden="true" /> View Live Demo
                </a>
              </li>
              <li>
                <Link
                  href="/free-quran-classes-online"
                  style={{
                    display: "block",
                    textAlign: "center",
                    background: "linear-gradient(135deg, #c9922a, #d4a030)",
                    color: "#1a1a2e",
                    padding: "13px",
                    borderRadius: 10,
                    fontWeight: 700,
                    textDecoration: "none",
                    fontSize: ".92rem",
                  }}
                  onClick={() => setOpen(false)}
                >
                  <GraduationCap size={15} style={{ display: "inline", verticalAlign: "middle", marginRight: 6 }} />Book Free Trial Class
                </Link>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
}
