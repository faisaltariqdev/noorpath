import Link from "next/link";
import type {
  CityGuideContent,
  CountryGuideContent,
} from "@/data/countryGuideTypes";

interface CountryQuranClassesGuideProps {
  guide: CountryGuideContent | CityGuideContent;
  eyebrow?: string;
}

export default function CountryQuranClassesGuide({
  guide,
  eyebrow = "Country learning guide",
}: CountryQuranClassesGuideProps) {
  return (
    <article aria-labelledby="country-guide-title">
      <header className="content-card" style={{ marginBottom: 28 }}>
        <p
          style={{
            color: "var(--emerald)",
            fontSize: ".78rem",
            fontWeight: 800,
            letterSpacing: ".08em",
            marginBottom: 8,
            textTransform: "uppercase",
          }}
        >
          {eyebrow}
        </p>
        <h2
          id="country-guide-title"
          style={{
            color: "var(--charcoal)",
            fontFamily: "'Playfair Display',serif",
            fontSize: "1.65rem",
            marginBottom: 12,
          }}
        >
          {guide.title}
        </h2>
        <p
          style={{
            color: "var(--muted)",
            fontSize: "1rem",
            lineHeight: 1.8,
            marginBottom: 12,
          }}
        >
          {guide.description}
        </p>
        <p style={{ color: "var(--muted)", fontSize: ".8rem", margin: 0 }}>
          Reviewed {guide.reviewedDate} · Service details are checked against
          NoorPath&apos;s published policies and current booking process.{" "}
          <Link href="/editorial-policy" style={{ color: "var(--emerald)" }}>
            Read the editorial policy
          </Link>
          .
        </p>
      </header>

      {guide.sections.map((section, index) => (
        <section
          id={section.id}
          key={section.id}
          className="content-card"
          style={{ marginBottom: 28, scrollMarginTop: 100 }}
        >
          <h2
            style={{
              color: "var(--charcoal)",
              fontFamily: "'Playfair Display',serif",
              fontSize: "1.35rem",
              lineHeight: 1.35,
              marginBottom: 14,
            }}
          >
            {section.heading}
          </h2>

          {section.directAnswer && (
            <p
              style={{
                background: "rgba(10,110,79,.07)",
                borderLeft: "4px solid var(--emerald)",
                borderRadius: "0 10px 10px 0",
                color: "var(--slate)",
                fontSize: ".98rem",
                fontWeight: 600,
                lineHeight: 1.75,
                marginBottom: 18,
                padding: "14px 16px",
              }}
            >
              {section.directAnswer}
            </p>
          )}

          {section.paragraphs.map((paragraph) => (
            <p
              key={paragraph.slice(0, 72)}
              style={{
                color: "var(--muted)",
                fontSize: ".96rem",
                lineHeight: 1.85,
                marginBottom: 15,
              }}
            >
              {paragraph}
            </p>
          ))}

          {section.bullets && (
            <ul
              style={{
                color: "var(--slate)",
                display: "grid",
                gap: 9,
                lineHeight: 1.7,
                margin: "16px 0 0",
                paddingLeft: 22,
              }}
            >
              {section.bullets.map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>
          )}

          {section.table && (
            <div style={{ marginTop: 18, overflowX: "auto" }}>
              <table
                style={{
                  borderCollapse: "collapse",
                  fontSize: ".88rem",
                  minWidth: 520,
                  width: "100%",
                }}
              >
                <thead>
                  <tr>
                    {section.table.headers.map((header) => (
                      <th
                        key={header}
                        scope="col"
                        style={{
                          background: "var(--emerald)",
                          color: "#fff",
                          padding: "11px 12px",
                          textAlign: "left",
                        }}
                      >
                        {header}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {section.table.rows.map(([label, detail]) => (
                    <tr key={`${label}-${detail}`}>
                      <th
                        scope="row"
                        style={{
                          borderBottom: "1px solid var(--border)",
                          color: "var(--charcoal)",
                          fontWeight: 700,
                          padding: "11px 12px",
                          textAlign: "left",
                          verticalAlign: "top",
                        }}
                      >
                        {label}
                      </th>
                      <td
                        style={{
                          borderBottom: "1px solid var(--border)",
                          color: "var(--muted)",
                          lineHeight: 1.65,
                          padding: "11px 12px",
                          verticalAlign: "top",
                        }}
                      >
                        {detail}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {index === 3 && (
            <p
              style={{
                borderTop: "1px solid var(--border)",
                color: "var(--muted)",
                fontSize: ".88rem",
                lineHeight: 1.7,
                margin: "20px 0 0",
                paddingTop: 16,
              }}
            >
              Before choosing a plan, review NoorPath&apos;s{" "}
              <Link href="/pricing" style={{ color: "var(--emerald)", fontWeight: 700 }}>
                published pricing
              </Link>
              ,{" "}
              <Link href="/our-tutors" style={{ color: "var(--emerald)", fontWeight: 700 }}>
                tutor-matching information
              </Link>{" "}
              and{" "}
              <Link href="/safeguarding" style={{ color: "var(--emerald)", fontWeight: 700 }}>
                safeguarding guidance
              </Link>
              .
            </p>
          )}
        </section>
      ))}
    </article>
  );
}
