import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowRight, BookOpen, CheckCircle } from "lucide-react";
import { QAIDA_SCREENSHOTS } from "@/data/noorani-qaida";
import CTAForm from "@/components/CTAForm";
import WhatsAppLink from "@/components/WhatsAppLink";
import { CONTACT, TRIAL, TRIAL_OFFER } from "@/lib/academyFacts";

export const QAIDA_BASE_URL = "https://www.noorpath.online/noorani-qaida";

export function QaidaBreadcrumbs({
  items,
  inverse = false,
}: {
  items: Array<{ label: string; href?: string }>;
  inverse?: boolean;
}) {
  return (
    <nav aria-label="Breadcrumb" className="qaida-breadcrumbs">
      <ol>
        {items.map((item, index) => (
          <li key={`${item.label}-${index}`}>
            {item.href ? (
              <Link href={item.href} className={inverse ? "qaida-link-inverse" : undefined}>
                {item.label}
              </Link>
            ) : (
              <span aria-current="page">{item.label}</span>
            )}
            {index < items.length - 1 && <span aria-hidden="true">›</span>}
          </li>
        ))}
      </ol>
    </nav>
  );
}

export function QaidaScreenshot({
  kind,
  priority = false,
}: {
  kind: keyof typeof QAIDA_SCREENSHOTS;
  priority?: boolean;
}) {
  const image = QAIDA_SCREENSHOTS[kind];
  return (
    <figure className="qaida-screenshot">
      <Image
        src={image.src}
        alt={image.alt}
        width={image.width}
        height={image.height}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 92vw, 1120px"
        priority={priority}
      />
      <figcaption>{image.caption}</figcaption>
    </figure>
  );
}

export function QaidaCallout({
  title,
  children,
  tone = "green",
}: {
  title: string;
  children: ReactNode;
  tone?: "green" | "gold" | "blue";
}) {
  return (
    <aside className={`qaida-callout qaida-callout-${tone}`}>
      <h2>{title}</h2>
      <div>{children}</div>
    </aside>
  );
}

export function QaidaCourseCta({
  title = "Want guided Noorani Qaida lessons?",
  description = `Book ${TRIAL_OFFER}, live and 1-to-1, for ages 4+ with a certified tutor. Female tutors available, no credit card.`,
}: {
  title?: string;
  description?: string;
}) {
  return (
    <section id="qaida-trial" className="qaida-course-cta" aria-labelledby="qaida-course-cta-title">
      <div className="qaida-course-cta-copy">
        <span className="qaida-eyebrow">{TRIAL.classes} free live trial sessions</span>
        <h2 id="qaida-course-cta-title">{title}</h2>
        <p>{description}</p>
        <div className="qaida-cta-actions">
          <WhatsAppLink
            href={`${CONTACT.whatsappUrl}?text=${encodeURIComponent(`Assalamu Alaikum, I am practicing Noorani Qaida with my child and would like to book ${TRIAL_OFFER}.`)}`}
            className="btn-outline-np"
            style={{ display: "inline-flex", alignItems: "center", gap: 6, background: "#25D366", borderColor: "#25D366", color: "#0b3d2e", fontWeight: 700 }}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>💬 Book on WhatsApp</span>
          </WhatsAppLink>
          <Link href="/courses/noorani-qaida-online" className="btn-outline-np">
            <BookOpen size={17} aria-hidden="true" /> View Online Qaida Classes
          </Link>
        </div>
      </div>
      <div className="qaida-course-cta-form">
        <CTAForm compact formVariant="qaida" idPrefix="qaida" />
      </div>
    </section>
  );
}

export function QaidaPracticeSteps({ steps }: { steps: string[] }) {
  return (
    <ol className="qaida-practice-steps">
      {steps.map((step, index) => (
        <li key={step}>
          <span aria-hidden="true">{index + 1}</span>
          <p>{step}</p>
        </li>
      ))}
    </ol>
  );
}

export function QaidaFaqs({
  faqs,
}: {
  faqs: Array<{ question: string; answer: string }>;
}) {
  return (
    <section className="qaida-section" aria-labelledby="qaida-faq-heading">
      <span className="qaida-eyebrow">Questions answered</span>
      <h2 id="qaida-faq-heading">Frequently asked questions</h2>
      <div className="qaida-faq-list">
        {faqs.map((faq) => (
          <details key={faq.question}>
            <summary>{faq.question}</summary>
            <p>{faq.answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}

export function QaidaRelatedLinks({
  title,
  links,
  headingId = "qaida-related-heading",
}: {
  title: string;
  links: Array<{ href: string; label: string; description?: string }>;
  /** Unique per block, so a page can show more than one related-links section. */
  headingId?: string;
}) {
  return (
    <section className="qaida-section" aria-labelledby={headingId}>
      <h2 id={headingId}>{title}</h2>
      <div className="qaida-related-grid">
        {links.map((link) => (
          <Link key={link.href} href={link.href}>
            <CheckCircle size={18} aria-hidden="true" />
            <span>
              <strong>{link.label}</strong>
              {link.description && <small>{link.description}</small>}
            </span>
            <ArrowRight size={17} aria-hidden="true" />
          </Link>
        ))}
      </div>
    </section>
  );
}

/**
 * Parent next steps shown on the Noorani Qaida hub, games and guides. These pages bring most of the site's
 * search visits; this sends them to the parent-question articles that already rank near the top of Google.
 */
export function QaidaParentNextSteps() {
  return (
    <QaidaRelatedLinks
      title="Next steps for parents"
      headingId="qaida-parent-steps-heading"
      links={[
        {
          href: "/blog/how-long-does-noorani-qaida-take",
          label: "How long does Noorani Qaida take for kids?",
          description: "Realistic 3–9 month timelines by age and what “finished” should mean.",
        },
        {
          href: "/blog/when-child-ready-qaida-to-quran",
          label: "When is my child ready to move to the Quran?",
          description: "A readiness checklist and a 4-week bridge plan.",
        },
        {
          href: "/blog/child-forgets-arabic-letters",
          label: "My child forgets Arabic letters",
          description: "A quick check, recovery plans and review games.",
        },
      ]}
    />
  );
}
