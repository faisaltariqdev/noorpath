import Link from "next/link";
import { MessageCircle, Mail, Globe, Star } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { TRUSTPILOT_URL } from "@/lib/organizationSchema";

const courses = [
  { href: "/courses/tajweed-classes-online", label: "Tajweed Rules" },
  { href: "/courses/hifz-program-online", label: "Hifz Program" },
  { href: "/courses/quran-classes-for-kids", label: "Kids Quran" },
  { href: "/courses/noorani-qaida-online", label: "Noorani Qaida" },
  { href: "/courses/arabic-language-online", label: "Arabic Language" },
  { href: "/courses/islamic-studies-online", label: "Islamic Studies" },
  { href: "/courses/daily-duas-for-kids", label: "Daily Duas" },
];

const company = [
  { href: "/about", label: "About Us" },
  { href: "/founder", label: "Founder & CEO" },
  { href: "/our-tutors", label: "Our Tutors" },
  { href: "/locations", label: "All Locations" },
  { href: "/blog", label: "Blog & Articles" },
  { href: "/islamic-resources", label: "Free Resources" },
  { href: "/pricing", label: "Pricing" },
  { href: "/online-quran-classes#cta", label: "Free Trial" },
];

const quickLinks = [
  { href: "/courses/tajweed-classes-online", label: "Tajweed Classes Online" },
  { href: "/courses/hifz-program-online", label: "Hifz Program Online" },
  { href: "/courses/quran-classes-for-kids", label: "Quran Classes for Kids" },
  { href: "/courses/noorani-qaida-online", label: "Noorani Qaida Online" },
  { href: "/courses/arabic-language-online", label: "Arabic Language" },
  { href: "/locations/online-quran-classes-canada", label: "Quran Classes Canada" },
  { href: "/locations/online-quran-classes-uk", label: "Quran Classes UK" },
  { href: "/locations/online-quran-classes-usa", label: "Quran Classes USA" },
];

export default function Footer() {
  return (
    <>
      {/* Quick links bar */}
      <section
        style={{
          background: "var(--ivory)",
          padding: "48px 0 36px",
          borderTop: "1px solid var(--border)",
        }}
      >
        <div className="max-w-[1200px] mx-auto px-4">
          <div className="flex flex-wrap gap-3 mb-4 justify-center">
            {quickLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                style={{
                  background: "rgba(10,110,79,.08)",
                  border: "1px solid rgba(10,110,79,.2)",
                  borderRadius: "50px",
                  padding: "7px 16px",
                  fontSize: ".8rem",
                  color: "var(--emerald)",
                  fontWeight: 600,
                  textDecoration: "none",
                }}
              >
                {l.label}
              </Link>
            ))}
            <Link
              href="/online-quran-classes#cta"
              style={{
                background: "var(--gold)",
                borderRadius: "50px",
                padding: "7px 16px",
                fontSize: ".8rem",
                color: "var(--charcoal)",
                fontWeight: 700,
                textDecoration: "none",
              }}
            >
              Free Trial Class
            </Link>
          </div>
        </div>
      </section>

      <footer>
        <div className="max-w-[1200px] mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* Brand */}
            <div>
              <div className="footer-brand">
                <div
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: "1.5rem",
                    fontWeight: 700,
                    color: "#fff",
                  }}
                >
                  Noor<span style={{ color: "var(--gold)" }}>Path</span>{" "}
                  <span
                    style={{
                      color: "rgba(255,255,255,.5)",
                      fontSize: ".75rem",
                      verticalAlign: "middle",
                    }}
                  >
                    Academy
                  </span>
                </div>
              </div>
              <p className="footer-desc">
                Illuminating hearts through the teachings of the Holy Quran.
                Founder-led online Quran education for families worldwide since
                2018, built with a strong focus on quality teaching,
                accessibility, and modern learning technology.
              </p>
              <div className="flex gap-2 flex-wrap items-center">
                <Link
                  href="https://wa.me/923124877906"
                  className="social-btn"
                  aria-label="WhatsApp NoorPath"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaWhatsapp size={15} />
                </Link>
                <Link
                  href="mailto:info@noorpath.online"
                  className="social-btn"
                  aria-label="Email NoorPath"
                >
                  <Mail size={15} />
                </Link>
                <Link
                  href="https://www.noorpath.online"
                  className="social-btn"
                  aria-label="NoorPath Website"
                >
                  <Globe size={15} />
                </Link>
                <Link
                  href={TRUSTPILOT_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Review NoorPath Academy on Trustpilot"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 6,
                    background: "rgba(0,182,122,.15)",
                    border: "1px solid rgba(0,182,122,.35)",
                    borderRadius: 8,
                    padding: "6px 12px",
                    color: "#00b67a",
                    fontSize: ".78rem",
                    fontWeight: 700,
                    textDecoration: "none",
                    marginTop: 4,
                  }}
                >
                  <Star size={14} fill="#00b67a" stroke="#00b67a" />
                  Trustpilot
                </Link>
              </div>
            </div>

            {/* Courses */}
            <div>
              <div className="footer-heading">Courses</div>
              <ul className="footer-links">
                {courses.map((c) => (
                  <li key={c.href}>
                    <Link href={c.href}>{c.label}</Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <div className="footer-heading">Company</div>
              <ul className="footer-links">
                {company.map((c) => (
                  <li key={c.href}>
                    <Link href={c.href}>{c.label}</Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <div className="footer-heading">Contact Us</div>
              <ul className="footer-links">
                <li style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  <Mail size={14} style={{ flexShrink: 0, opacity: 0.7 }} />
                  <Link href="mailto:info@noorpath.online">info@noorpath.online</Link>
                </li>
                <li style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  <MessageCircle size={14} style={{ flexShrink: 0, opacity: 0.7 }} />
                  <Link
                    href="https://wa.me/923124877906"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    WhatsApp: +92 312 4877906
                  </Link>
                </li>
                <li style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  <Globe size={14} style={{ flexShrink: 0, opacity: 0.7 }} />
                  <Link href="https://www.noorpath.online">www.noorpath.online</Link>
                </li>
                <li style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  <Star size={14} style={{ flexShrink: 0, opacity: 0.7, color: "#00b67a" }} />
                  <Link
                    href={TRUSTPILOT_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: "#00b67a" }}
                  >
                    Review us on Trustpilot
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="footer-bottom">
            <div>© 2026 NoorPath Academy. All rights reserved.</div>
            <div className="flex gap-5">
              <Link href="/privacy-policy">Privacy Policy</Link>
              <Link href="/terms-of-service">Terms of Service</Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
