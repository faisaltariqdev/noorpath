import Link from "next/link";
import { MessageCircle, Mail, Globe } from "lucide-react";

const IconFacebook = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
  </svg>
);
const IconInstagram = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);
const IconYoutube = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.96-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/><polygon fill="#fff" points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"/>
  </svg>
);
const IconTwitterX = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);

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
              <div className="flex gap-2 flex-wrap">
                <Link
                  href="https://www.facebook.com/noorpathacademy"
                  className="social-btn"
                  aria-label="NoorPath on Facebook"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <IconFacebook />
                </Link>
                <Link
                  href="https://www.instagram.com/noorpathacademy"
                  className="social-btn"
                  aria-label="NoorPath on Instagram"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <IconInstagram />
                </Link>
                <Link
                  href="https://www.youtube.com/@noorpathacademy"
                  className="social-btn"
                  aria-label="NoorPath on YouTube"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <IconYoutube />
                </Link>
                <Link
                  href="https://twitter.com/noorpathacademy"
                  className="social-btn"
                  aria-label="NoorPath on Twitter/X"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <IconTwitterX />
                </Link>
                <Link
                  href="https://wa.me/923124877906"
                  className="social-btn"
                  aria-label="WhatsApp NoorPath"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle size={15} />
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
