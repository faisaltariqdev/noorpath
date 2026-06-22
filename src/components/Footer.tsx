import Link from "next/link";
import { BookOpen, Info, Mail, Globe } from "lucide-react";

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
  { href: "/locations", label: "All Locations" },
  { href: "/blog", label: "Blog & Articles" },
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
              <div className="flex gap-2 flex-wrap">
                <Link href="/blog" className="social-btn" aria-label="Blog">
                  <BookOpen size={15} />
                </Link>
                <Link
                  href="/about"
                  className="social-btn"
                  aria-label="About NoorPath"
                >
                  <Info size={15} />
                </Link>
                <Link
                  href="mailto:info@noorpath.online"
                  className="social-btn"
                  aria-label="Email NoorPath"
                >
                  <Mail size={15} />
                </Link>
                <Link
                  href="https://wa.me/923124877906"
                  className="social-btn"
                  aria-label="WhatsApp"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Globe size={15} />
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
                <li>
                  <Link href="mailto:info@noorpath.online">
                    ✉ info@noorpath.online
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://wa.me/923124877906"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    💬 WhatsApp: +92 312 4877906
                  </Link>
                </li>
                <li>
                  <Link href="https://www.noorpath.online">
                    🌐 www.noorpath.online
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
