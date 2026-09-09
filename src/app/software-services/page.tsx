import type { Metadata } from "next";
import Link from "next/link";
import {
  Building2,
  Code2,
  Globe,
  LayoutDashboard,
  Mail,
  MonitorSmartphone,
  Palette,
  Rocket,
  Smartphone,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import WhatsAppLink from "@/components/WhatsAppLink";
import { CONTACT } from "@/lib/academyFacts";
import { BASE_URL, ORGANIZATION_ID } from "@/lib/organizationSchema";
import { serializeJsonLd } from "@/lib/jsonLd";
import { absolutePageTitle } from "@/lib/pageTitle";
import {
  SOFTWARE_AI_SNIPPETS,
  SOFTWARE_AUDIENCES,
  SOFTWARE_CAPABILITIES,
  SOFTWARE_ENGAGEMENT_STEPS,
  SOFTWARE_SERVICE_OFFERINGS,
  SOFTWARE_SERVICES_FAQS,
  SOFTWARE_SERVICES_PATH,
  SOFTWARE_SERVICES_WHATSAPP_URL,
} from "@/data/softwareServices";

export const revalidate = false;

const PAGE_URL = `${BASE_URL}${SOFTWARE_SERVICES_PATH}`;

const description =
  "NoorPath delivers custom software, websites, mobile applications, and enterprise digital systems. Scoped in writing. Online delivery worldwide.";

export const metadata: Metadata = {
  title: absolutePageTitle("Custom Software, Websites & Mobile Apps | NoorPath"),
  description,
  keywords: [
    "custom software development",
    "website development",
    "mobile app development",
    "enterprise software solutions",
    "NoorPath software services",
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "Custom Software, Websites & Mobile Apps | NoorPath",
    description,
    url: PAGE_URL,
    siteName: "NoorPath",
    type: "website",
    locale: "en_GB",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "NoorPath software services" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Custom Software, Websites & Mobile Apps | NoorPath",
    description,
    images: ["/og-image.png"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": `${PAGE_URL}#page`,
      url: PAGE_URL,
      name: "NoorPath Software & Digital Services",
      description: SOFTWARE_AI_SNIPPETS.entityDefinition,
      isPartOf: { "@id": `${BASE_URL}/#website` },
      about: { "@id": `${PAGE_URL}#service` },
      mainEntity: { "@id": `${PAGE_URL}#service` },
      speakable: {
        "@type": "SpeakableSpecification",
        cssSelector: ["#software-ai-entity"],
      },
    },
    {
      "@type": "ProfessionalService",
      "@id": `${PAGE_URL}#service`,
      name: "NoorPath Software & Digital Services",
      url: PAGE_URL,
      provider: { "@id": ORGANIZATION_ID },
      areaServed: "Worldwide",
      serviceType: [
        "Custom software development",
        "Website design and development",
        "Mobile application development",
        "Enterprise systems and dashboards",
      ],
      description: SOFTWARE_AI_SNIPPETS.entityDefinition,
    },
    {
      "@type": "OfferCatalog",
      name: "NoorPath software service types",
      itemListElement: SOFTWARE_SERVICE_OFFERINGS.map((item, index) => ({
        "@type": "Offer",
        position: index + 1,
        itemOffered: {
          "@type": "Service",
          name: item.title,
          description: item.summary,
        },
      })),
    },
    {
      "@type": "FAQPage",
      mainEntity: SOFTWARE_SERVICES_FAQS.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: { "@type": "Answer", text: faq.answer },
      })),
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: BASE_URL },
        { "@type": "ListItem", position: 2, name: "Software Services", item: PAGE_URL },
      ],
    },
  ],
};

const icons = [Code2, Globe, Smartphone, LayoutDashboard, Palette, Rocket];

export default function SoftwareServicesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializeJsonLd(jsonLd) }} />

      <div>
        <header
          className="relative overflow-hidden text-white pt-28 sm:pt-32 pb-16 px-4 sm:px-6"
          style={{ background: "linear-gradient(135deg, #021a11 0%, #063824 60%, #0b5336 100%)" }}
        >
          <div className="relative max-w-4xl mx-auto">
            <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-1.5 text-xs text-white/70 mb-5">
              <Link href="/" className="hover:text-white">Home</Link>
              <span aria-hidden="true">/</span>
              <span className="text-[var(--gold-lt)]">Software services</span>
            </nav>
            <p className="text-xs font-bold tracking-[0.14em] uppercase text-[var(--gold-lt)] mb-3">
              Software house · Digital services
            </p>
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight">
              Custom software, websites, and mobile applications
            </h1>
            <p
              id="software-ai-entity"
              className="mt-5 max-w-2xl text-sm sm:text-base text-white/90 leading-relaxed font-medium"
            >
              {SOFTWARE_AI_SNIPPETS.entityDefinition}
            </p>
            <p className="mt-3 max-w-2xl text-sm sm:text-base text-white/80 leading-relaxed">
              {SOFTWARE_AI_SNIPPETS.pricingHonesty}
            </p>
            <ul className="mt-6 flex flex-wrap gap-2 text-xs sm:text-sm text-white/80">
              {["Written scope before build", "Web, mobile, and enterprise systems", "Online delivery worldwide"].map((chip) => (
                <li key={chip} className="rounded-full border border-white/20 bg-white/5 px-3 py-1.5">
                  {chip}
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={`mailto:${CONTACT.email}?subject=Software%20services%20enquiry`}
                className="inline-flex items-center gap-2 min-h-11 px-5 py-3 rounded-xl bg-[var(--gold)] font-bold text-[var(--charcoal)]"
              >
                <Mail size={16} aria-hidden="true" /> Email a brief
              </a>
              <WhatsAppLink
                href={SOFTWARE_SERVICES_WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 min-h-11 px-5 py-3 rounded-xl bg-white/10 border border-white/25 font-semibold text-white"
              >
                <FaWhatsapp size={16} aria-hidden="true" /> WhatsApp {CONTACT.phoneDisplay}
              </WhatsAppLink>
            </div>
          </div>
        </header>

        <section className="max-w-5xl mx-auto px-4 sm:px-6 py-14">
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[var(--charcoal)] mb-3">
            Software-house services
          </h2>
          <p className="text-[var(--slate)] leading-relaxed max-w-3xl mb-10">
            You describe the product. We confirm whether it fits a custom build. If it does, you get a
            written proposal for that website, application, or system — not a generic package with
            invented client counts or a guaranteed go-live date.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {SOFTWARE_SERVICE_OFFERINGS.map((item, index) => {
              const Icon = icons[index] ?? MonitorSmartphone;
              return (
                <article
                  key={item.title}
                  className="rounded-3xl border border-[var(--border)] bg-white p-6 shadow-sm"
                >
                  <Icon className="text-[var(--emerald)] mb-3" size={26} aria-hidden="true" />
                  <h3 className="font-serif text-xl font-bold text-[var(--charcoal)] mb-2">{item.title}</h3>
                  <p className="text-sm text-[var(--slate)] leading-relaxed">{item.summary}</p>
                </article>
              );
            })}
          </div>
        </section>

        <section className="bg-[var(--ivory)] py-14">
          <div className="max-w-5xl mx-auto px-4 sm:px-6">
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[var(--charcoal)] mb-3">
              What a typical engagement can include
            </h2>
            <p className="text-[var(--slate)] leading-relaxed max-w-3xl mb-6">
              These are the kinds of work a software house scopes after the brief. The exact list is
              written into your proposal.
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-[var(--slate)]">
              {SOFTWARE_CAPABILITIES.map((line) => (
                <li key={line} className="rounded-2xl bg-white border border-[var(--border)] px-4 py-3">
                  {line}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="max-w-5xl mx-auto px-4 sm:px-6 py-14">
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[var(--charcoal)] mb-3">
            Who this is for
          </h2>
          <p className="text-[var(--slate)] leading-relaxed max-w-3xl mb-8">
            We work with organisations that need a digital product built and handed over — not a
            named client roster on this page, and not a walk-in office.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {SOFTWARE_AUDIENCES.map((item) => (
              <article
                key={item.title}
                className="rounded-3xl border border-[var(--border)] bg-white p-6 shadow-sm"
              >
                <Building2 className="text-[var(--emerald)] mb-3" size={22} aria-hidden="true" />
                <h3 className="font-serif text-lg font-bold text-[var(--charcoal)] mb-2">{item.title}</h3>
                <p className="text-sm text-[var(--slate)] leading-relaxed">{item.summary}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="bg-[var(--ivory)] py-14">
          <div className="max-w-5xl mx-auto px-4 sm:px-6">
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[var(--charcoal)] mb-8">
              How an engagement works
            </h2>
            <ol className="space-y-5">
              {SOFTWARE_ENGAGEMENT_STEPS.map((step, index) => (
                <li key={step.title} className="flex gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[var(--emerald)] text-white font-bold">
                    {index + 1}
                  </span>
                  <div>
                    <h3 className="font-bold text-[var(--charcoal)]">{step.title}</h3>
                    <p className="text-sm text-[var(--slate)] leading-relaxed mt-1">{step.detail}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="max-w-3xl mx-auto px-4 sm:px-6 py-14" aria-labelledby="software-faq-heading">
          <h2 id="software-faq-heading" className="font-serif text-2xl sm:text-3xl font-bold text-[var(--charcoal)] mb-5">
            Frequently asked questions
          </h2>
          <div className="space-y-3">
            {SOFTWARE_SERVICES_FAQS.map((faq) => (
              <details key={faq.question} className="rounded-2xl border border-[var(--border)] bg-white px-5 py-4">
                <summary className="cursor-pointer font-semibold text-[var(--charcoal)]">{faq.question}</summary>
                <p className="mt-2 text-sm text-[var(--slate)] leading-relaxed">{faq.answer}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="max-w-5xl mx-auto px-4 sm:px-6 pb-20">
          <div
            className="rounded-3xl p-8 sm:p-10 text-white"
            style={{ background: "linear-gradient(135deg, #05291b 0%, #0a4d33 100%)", border: "1.5px solid rgba(232, 184, 75, 0.3)" }}
          >
            <Globe className="text-[var(--gold-lt)] mb-3" size={28} aria-hidden="true" />
            <h2 className="font-serif text-2xl sm:text-3xl font-extrabold mb-3">Start with a written brief</h2>
            <p className="text-sm text-white/85 leading-relaxed max-w-2xl mb-6">
              Online delivery worldwide. Email {CONTACT.email} or WhatsApp {CONTACT.phoneDisplay}.
              Include the product you need — software, website, or mobile app — who will use it, and
              the outcome. Next steps are confirmed after we read that request.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href={`mailto:${CONTACT.email}?subject=Software%20services%20enquiry`}
                className="inline-flex items-center gap-2 min-h-11 px-5 py-3 rounded-xl bg-[var(--gold)] font-bold text-[var(--charcoal)]"
              >
                <Mail size={16} aria-hidden="true" /> {CONTACT.email}
              </a>
              <Link
                href="/privacy-policy"
                className="inline-flex items-center min-h-11 px-5 py-3 rounded-xl bg-white/10 border border-white/25 font-semibold text-white"
              >
                Privacy policy
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
