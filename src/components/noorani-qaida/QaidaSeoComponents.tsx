import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowRight, BookOpen, CheckCircle, GraduationCap } from "lucide-react";
import { QAIDA_SCREENSHOTS } from "@/data/noorani-qaida";

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
  description = "Explore live one-to-one classes for ages 4+, with tutor matching based on learner needs, timezone, and availability.",
}: {
  title?: string;
  description?: string;
}) {
  return (
    <section className="qaida-course-cta" aria-labelledby="qaida-course-cta-title">
      <div>
        <span className="qaida-eyebrow">Live class pathway</span>
        <h2 id="qaida-course-cta-title">{title}</h2>
        <p>{description}</p>
      </div>
      <div className="qaida-cta-actions">
        <Link href="/courses/noorani-qaida-online" className="btn-primary-np">
          <BookOpen size={17} aria-hidden="true" /> View Online Qaida Classes
        </Link>
        <Link href="/free-quran-classes-online" className="btn-outline-np">
          <GraduationCap size={17} aria-hidden="true" /> Request a Free Trial
        </Link>
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
}: {
  title: string;
  links: Array<{ href: string; label: string; description?: string }>;
}) {
  return (
    <section className="qaida-section" aria-labelledby="qaida-related-heading">
      <h2 id="qaida-related-heading">{title}</h2>
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
