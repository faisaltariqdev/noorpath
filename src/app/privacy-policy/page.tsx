import type { Metadata } from "next";
import Link from "next/link";
import { CONTACT } from "@/lib/academyFacts";

export const revalidate = false;

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How NoorPath Academy collects, uses, shares and protects information for trial requests, online classes and website analytics.",
  alternates: { canonical: "https://www.noorpath.online/privacy-policy" },
  robots: { index: true, follow: true },
};

export default function PrivacyPolicyPage() {
  const sectionStyle = {
    fontFamily: "'Playfair Display',serif",
    fontSize: "1.2rem",
    marginBottom: 12,
    marginTop: 28,
  };
  const paragraphStyle = {
    color: "var(--muted)",
    lineHeight: 1.8,
    marginBottom: 14,
  };

  return (
    <>
      <div className="page-hero">
        <div className="max-w-[1200px] mx-auto px-4 page-hero-content">
          <h1>Privacy Policy</h1>
          <p>Last updated: 14 July 2026</p>
        </div>
      </div>
      <section>
        <div className="max-w-[760px] mx-auto px-4">
          <div className="content-card">
            <p style={paragraphStyle}>
              This policy explains how NoorPath Academy (&quot;NoorPath&quot;,
              &quot;we&quot;, &quot;us&quot;) handles personal information when
              you visit our website, request a trial class, contact us, or use
              our online education services.
            </p>

            <h2 style={sectionStyle}>Who controls your information</h2>
            <p style={paragraphStyle}>
              NoorPath Academy is responsible for the information described in
              this policy. Privacy questions and requests can be sent to{" "}
              <Link href={`mailto:${CONTACT.email}`} style={{ color: "var(--emerald)" }}>
                {CONTACT.email}
              </Link>
              .
            </p>

            <h2 style={sectionStyle}>Information we collect</h2>
            <p style={paragraphStyle}>
              When you request a trial, you may provide your name, email,
              WhatsApp or phone number, country, learner details, course
              interest, timezone or preferred class time, tutor preference and
              family-plan preference. We also record the page and referrer
              connected with the request so our team can understand the
              enquiry.
            </p>
            <p style={paragraphStyle}>
              If you allow analytics cookies, Google and Meta tools may collect
              information about visits and interactions, such as page views,
              referral information, device or browser details, cookie or
              advertising identifiers, and enquiry events. When a consented
              trial request is submitted, contact details may be used by Meta
              for conversion matching and measurement.
            </p>

            <h2 style={sectionStyle}>Why we use information</h2>
            <ul style={{ ...paragraphStyle, paddingLeft: 22 }}>
              <li>To respond to enquiries and arrange requested trial classes.</li>
              <li>To match a learner with an available tutor and schedule.</li>
              <li>To provide classes, service messages and customer support.</li>
              <li>To maintain website security and prevent misuse.</li>
              <li>With consent, to understand website use and measure advertising enquiries.</li>
            </ul>
            <p style={paragraphStyle}>
              Depending on the activity and applicable law, processing is based
              on your request before entering a service agreement, performance
              of an agreement, legitimate interests in operating and securing
              the service, legal obligations, or consent. You can withdraw
              analytics consent through the Cookie settings control.
            </p>

            <h2 style={sectionStyle}>Services that receive information</h2>
            <p style={paragraphStyle}>
              NoorPath uses service providers to operate the website and
              classes. Depending on the features enabled, these may include FormSubmit for trial-form
              delivery; WhatsApp for conversations; Google Analytics and Google
              Ads for consented measurement; Meta Pixel and Conversions API for
              consented advertising measurement; and online meeting providers
              such as Zoom or Google Meet for classes. These providers process
              information under their own terms and privacy policies.
            </p>
            <p style={paragraphStyle}>
              We do not sell personal information. Providers may process
              information in countries different from yours. Where required,
              NoorPath and its providers must use appropriate transfer
              safeguards.
            </p>

            <h2 style={sectionStyle}>Cookies and tracking choices</h2>
            <p style={paragraphStyle}>
              Essential storage remembers your privacy choice. Google and Meta
              tracking is loaded only after you select &quot;Accept
              analytics&quot;. Selecting &quot;Essential only&quot; keeps those
              optional tools disabled. You can reopen Cookie settings at any
              time to change your choice.
            </p>

            <h2 style={sectionStyle}>Children and parent information</h2>
            <p style={paragraphStyle}>
              Trial forms for children should be completed by a parent or
              guardian. Children should not submit contact information
              independently. Parents may contact NoorPath to ask what
              information is held about their child or to request correction or
              deletion where applicable.
            </p>

            <h2 style={sectionStyle}>Retention and security</h2>
            <p style={paragraphStyle}>
              Information is kept only for as long as reasonably needed to
              respond to the request, provide the service, maintain required
              business records, resolve disputes and meet legal obligations.
              The exact period depends on the type of record and whether a
              learner enrols. We use reasonable administrative and technical
              safeguards, but no online service can promise absolute security.
            </p>

            <h2 style={sectionStyle}>Your choices and rights</h2>
            <p style={paragraphStyle}>
              Depending on where you live, you may have rights to access,
              correct, delete, restrict or object to processing, request a copy
              of information, withdraw consent, or complain to a data
              protection authority. Contact us using the email below. We may
              need to verify your identity before completing a request.
            </p>

            <h2 style={sectionStyle}>Policy updates</h2>
            <p style={paragraphStyle}>
              We may update this policy when our services or legal obligations
              change. The latest version and review date will be published on
              this page.
            </p>

            <h2 style={sectionStyle}>Contact</h2>
            <p style={paragraphStyle}>
              For privacy questions or requests, email{" "}
              <Link href={`mailto:${CONTACT.email}`} style={{ color: "var(--emerald)" }}>
                {CONTACT.email}
              </Link>
              .
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
