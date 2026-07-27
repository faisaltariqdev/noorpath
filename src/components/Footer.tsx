import Link from "next/link";
import { MessageCircle, Mail, Globe, Star } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram, FaTiktok, FaFacebookF, FaYoutube } from "react-icons/fa6";
import { GOOGLE_BUSINESS_URL, TRUSTPILOT } from "@/lib/academyFacts";
import { PRIORITY_MARKETS } from "@/lib/geoSeo";
import { getBuildLabel } from "@/lib/siteVersion";
import WhatsAppLink from "@/components/WhatsAppLink";

const courses = [
  { href: "/noorani-qaida", label: "Interactive Noorani Qaida" },
  { href: "/learn-tajweed-online", label: "Tajweed Rules" },
  { href: "/hifz-quran-online", label: "Hifz Program" },
  { href: "/online-quran-classes-for-kids", label: "Kids Quran" },
  { href: "/one-on-one-quran-classes", label: "1-to-1 Quran Classes" },
  { href: "/quran-classes-for-sisters", label: "Classes for Sisters" },
  { href: "/quran-classes-for-working-professionals", label: "For Professionals" },
  { href: "/courses/noorani-qaida-online", label: "Noorani Qaida" },
  { href: "/courses/arabic-language-online", label: "Arabic Language" },
  { href: "/courses/islamic-studies-online", label: "Islamic Studies" },
  { href: "/courses/daily-duas-for-kids", label: "Daily Duas" },
];

const company = [
  { href: "/about", label: "About Us" },
  { href: "/founder", label: "Founder & CEO" },
  { href: "/our-tutors", label: "Our Tutors" },
  { href: "/#parent-portal", label: "Parent Portal" },
  { href: "/safeguarding", label: "Safeguarding" },
  { href: "/contact", label: "Contact" },
  { href: "/locations", label: "All Locations" },
  { href: "/blog", label: "Blog & Articles" },
  { href: "/islamic-resources", label: "Free Resources" },
  { href: "/pricing", label: "Pricing" },
  { href: "/online-quran-classes#cta", label: "Free Trial" },
];

const quickLinks = [
  { href: "/noorani-qaida", label: "Interactive Noorani Qaida" },
  { href: "/learn-quran-online", label: "Learn Quran Online" },
  { href: "/online-quran-classes", label: "Online Quran Academy" },
  { href: "/online-quran-classes-for-kids", label: "Quran Classes for Kids" },
  { href: "/learn-tajweed-online", label: "Learn Tajweed Online" },
  { href: "/hifz-quran-online", label: "Hifz Quran Online" },
  { href: "/courses/noorani-qaida-online", label: "Noorani Qaida Online" },
  { href: "/courses/arabic-language-online", label: "Arabic Language" },
];

const priorityCountries = PRIORITY_MARKETS.map(({ country, slug }) => ({
  href: `/locations/${slug}`,
  label: country,
}));

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
          <nav aria-label="Priority country locations" className="flex flex-wrap gap-3 justify-center">
            <Link href="/locations" style={{ color: "var(--emerald)", fontWeight: 700, fontSize: ".8rem" }}>
              All locations
            </Link>
            {priorityCountries.map((country) => (
              <Link key={country.href} href={country.href} style={{ color: "var(--muted)", fontWeight: 600, fontSize: ".8rem" }}>
                {country.label}
              </Link>
            ))}
          </nav>
        </div>
      </section>

      <footer className="site-footer">
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
                Founder-led online Quran education for children, adults and
                families, with live lessons and timezone-based tutor matching.
              </p>
              <div className="flex gap-2 flex-wrap items-center">
                <WhatsAppLink
                  href="https://wa.me/923124877906"
                  className="social-btn"
                  aria-label="WhatsApp NoorPath"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaWhatsapp size={15} />
                </WhatsAppLink>
                <Link
                  href="https://www.facebook.com/noorpathquranacademy"
                  className="social-btn"
                  aria-label="NoorPath on Facebook"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaFacebookF size={15} />
                </Link>
                <Link
                  href="https://www.instagram.com/noorpath.online/"
                  className="social-btn"
                  aria-label="NoorPath on Instagram"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaInstagram size={15} />
                </Link>
                <Link
                  href="https://www.tiktok.com/@noorpathacademy"
                  className="social-btn"
                  aria-label="NoorPath on TikTok"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaTiktok size={15} />
                </Link>
                <Link
                  href="https://www.youtube.com/@NoorPath.Online"
                  className="social-btn"
                  aria-label="NoorPath on YouTube"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaYoutube size={15} />
                </Link>
              </div>
              {/* Email + website + Trustpilot on one row */}
              <div
                style={{
                  marginTop: 10,
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                  flexWrap: "wrap",
                }}
              >
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
                  href={TRUSTPILOT.url}
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
                    minHeight: 44,
                  }}
                >
                  <Star size={14} fill="#00b67a" stroke="#00b67a" />
                  Review us on Trustpilot
                </Link>
                <Link
                  href={GOOGLE_BUSINESS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="View NoorPath Academy on Google"
                  style={{ color: "rgba(255,255,255,.72)", fontSize: ".78rem" }}
                >
                  View on Google
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
                  <WhatsAppLink
                    href="https://wa.me/923124877906"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    WhatsApp: +92 312 4877906
                  </WhatsAppLink>
                </li>
                <li style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  <FaFacebookF size={14} style={{ flexShrink: 0, opacity: 0.7 }} />
                  <Link
                    href="https://www.facebook.com/noorpathquranacademy"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    NoorPath Academy
                  </Link>
                </li>
                <li style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  <FaInstagram size={14} style={{ flexShrink: 0, opacity: 0.7 }} />
                  <Link
                    href="https://www.instagram.com/noorpath.online/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    @noorpath.online
                  </Link>
                </li>
                <li style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  <FaTiktok size={14} style={{ flexShrink: 0, opacity: 0.7 }} />
                  <Link
                    href="https://www.tiktok.com/@noorpathacademy"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    @noorpathacademy
                  </Link>
                </li>
                <li style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  <FaYoutube size={14} style={{ flexShrink: 0, opacity: 0.7 }} />
                  <Link
                    href="https://www.youtube.com/@NoorPath.Online"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    @NoorPath.Online
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
            <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
              <div>© 2026 NoorPath Academy. All rights reserved.</div>
              <div style={{ fontSize: ".72rem", color: "rgba(255,255,255,.45)", fontFamily: "monospace" }}>
                Deploy {getBuildLabel()}
              </div>
            </div>
            <nav aria-label="Legal links" className="flex flex-wrap gap-x-5 gap-y-2">
              <Link href="/contact">Contact</Link>
              <Link href="/safeguarding">Safeguarding</Link>
              <Link href="/editorial-policy">Editorial Policy</Link>
              <Link href="/accessibility-statement">Accessibility</Link>
              <Link href="/privacy-policy">Privacy Policy</Link>
              <Link href="/terms-of-service">Terms of Service</Link>
            </nav>
          </div>
        </div>
      </footer>
    </>
  );
}
