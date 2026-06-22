"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "/online-quran-classes", label: "Online Quran Classes" },
  { href: "/courses", label: "Courses" },
  { href: "/locations", label: "Locations" },
  { href: "/pricing", label: "Pricing" },
  { href: "/about", label: "About Us" },
  { href: "/founder", label: "Founder" },
  { href: "/blog", label: "Blog" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`navbar-np${scrolled ? " scrolled" : ""}`}
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
        }}
      >
        {/* Logo */}
        <Link href="/" style={{ textDecoration: "none" }}>
          <div className="logo-text">
            Noor<span className="path">Path</span>{" "}
            <span className="academy">Academy</span>
          </div>
        </Link>

        {/* Desktop nav */}
        <ul
          className="hidden lg:flex"
          style={{
            listStyle: "none",
            margin: 0,
            padding: 0,
            alignItems: "center",
            gap: 2,
          }}
        >
          {navLinks.map((l) => (
            <li key={l.href}>
              <Link href={l.href} className="nav-link-np">
                {l.label}
              </Link>
            </li>
          ))}
          <li style={{ marginLeft: 10 }}>
            <Link href="/online-quran-classes#cta" className="btn-nav-cta">
              🎓 Free Trial
            </Link>
          </li>
        </ul>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden"
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
          className="lg:hidden"
        >
          <ul style={{ listStyle: "none", margin: 0, padding: 0 }}>
            {navLinks.map((l) => (
              <li
                key={l.href}
                style={{ borderBottom: "1px solid rgba(255,255,255,.06)" }}
              >
                <Link
                  href={l.href}
                  className="nav-link-np"
                  style={{ display: "block", padding: "12px 8px" }}
                  onClick={() => setOpen(false)}
                >
                  {l.label}
                </Link>
              </li>
            ))}
            <li style={{ marginTop: 14 }}>
              <Link
                href="/online-quran-classes#cta"
                className="btn-nav-cta"
                style={{ display: "block", textAlign: "center", padding: "12px" }}
                onClick={() => setOpen(false)}
              >
                🎓 Book Free Trial Class
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
