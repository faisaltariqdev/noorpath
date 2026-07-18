import Image from "next/image";
import Link from "next/link";
import {
  BookOpenCheck,
  ClipboardList,
  Globe2,
  Smartphone,
  Sparkles,
  TrendingUp,
} from "lucide-react";

const PORTAL_URL = "https://admin.noorpath.online/";

const highlights = [
  {
    icon: TrendingUp,
    title: "Daily progress",
    desc: "See lessons completed, attendance, and how each child is advancing — day by day.",
  },
  {
    icon: BookOpenCheck,
    title: "Homework & quizzes",
    desc: "Check assigned homework, quiz practice, and what needs attention before the next class.",
  },
  {
    icon: ClipboardList,
    title: "Reports & attendance",
    desc: "View class history, tutor updates, and attendance in one Family Hub.",
  },
  {
    icon: Smartphone,
    title: "Works on mobile",
    desc: "Open the portal on phone or tablet anytime — stay connected on the go.",
  },
] as const;

export default function ParentPortalSection() {
  return (
    <section
      id="parent-portal"
      aria-labelledby="parent-portal-heading"
      style={{
        background: "linear-gradient(180deg, #fff 0%, var(--ivory) 55%, #fff 100%)",
        padding: "72px 0",
        borderTop: "1px solid var(--border)",
        borderBottom: "1px solid var(--border)",
      }}
    >
      <div className="max-w-[1200px] mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          <div>
            <span
              className="section-eyebrow"
              style={{ display: "inline-flex", alignItems: "center", gap: 6 }}
            >
              <Sparkles size={13} /> Parent Portal
            </span>
            <h2 id="parent-portal-heading" className="section-title">
              Stay Close to Your Child&apos;s{" "}
              <em className="accent">Quran Journey</em>
            </h2>
            <p className="section-desc" style={{ marginBottom: 18 }}>
              Every NoorPath family gets access to our secure{" "}
              <strong style={{ color: "var(--charcoal)" }}>Parent Portal</strong> —
              so you can follow homework, daily progress, quizzes, attendance, and
              tutor updates for all your children in one place. Built for busy
              parents, and easy to use on mobile.
            </p>
            <p
              style={{
                display: "flex",
                alignItems: "flex-start",
                gap: 10,
                color: "var(--emerald)",
                fontWeight: 700,
                fontSize: ".95rem",
                marginBottom: 28,
                lineHeight: 1.55,
              }}
            >
              <Globe2 size={20} style={{ flexShrink: 0, marginTop: 2 }} aria-hidden />
              Trusted by Muslim families worldwide — a leading online Quran academy
              for clear, connected learning.
            </p>

            <ul
              style={{
                listStyle: "none",
                margin: 0,
                padding: 0,
                display: "flex",
                flexDirection: "column",
                gap: 14,
                marginBottom: 28,
              }}
            >
              {highlights.map(({ icon: Icon, title, desc }) => (
                <li
                  key={title}
                  style={{
                    display: "flex",
                    gap: 14,
                    alignItems: "flex-start",
                  }}
                >
                  <span
                    aria-hidden
                    style={{
                      width: 42,
                      height: 42,
                      flexShrink: 0,
                      borderRadius: 12,
                      background: "rgba(10,110,79,.1)",
                      color: "var(--emerald)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Icon size={20} />
                  </span>
                  <span>
                    <span
                      style={{
                        display: "block",
                        fontWeight: 700,
                        color: "var(--charcoal)",
                        fontSize: ".95rem",
                        marginBottom: 3,
                      }}
                    >
                      {title}
                    </span>
                    <span
                      style={{
                        color: "var(--muted)",
                        fontSize: ".86rem",
                        lineHeight: 1.65,
                      }}
                    >
                      {desc}
                    </span>
                  </span>
                </li>
              ))}
            </ul>

            <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
              <a
                href={PORTAL_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary-np"
              >
                Open Parent Portal →
              </a>
              <Link href="/online-quran-classes#cta" className="btn-outline-np">
                Start Free Trial
              </Link>
            </div>
            <p style={{ marginTop: 12, fontSize: ".78rem", color: "var(--muted)" }}>
              Portal login:{" "}
              <a
                href={PORTAL_URL}
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "var(--emerald)", fontWeight: 600 }}
              >
                admin.noorpath.online
              </a>
              {" · "}
              Credentials are shared privately after enrolment.
            </p>
          </div>

          <figure style={{ margin: 0 }}>
            <div
              style={{
                borderRadius: "var(--radius-lg)",
                overflow: "hidden",
                border: "1px solid var(--border)",
                boxShadow: "var(--shadow-md)",
                background: "#fff",
              }}
            >
              <Image
                src="/marketing/parent-portal-promo.jpg"
                alt="NoorPath Parent Portal — Family Hub on laptop and secure login on mobile for homework, progress, and attendance"
                width={1600}
                height={1066}
                sizes="(max-width: 1024px) 100vw, 560px"
                style={{ width: "100%", height: "auto", display: "block" }}
              />
            </div>
            <figcaption
              style={{
                marginTop: 12,
                textAlign: "center",
                fontSize: ".8rem",
                color: "var(--muted)",
                lineHeight: 1.5,
              }}
            >
              Family Hub · homework · daily progress · quizzes · attendance — on web
              and mobile
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}
