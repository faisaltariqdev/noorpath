import type { Metadata } from "next";
import Link from "next/link";
import {
  CANCELLATION_NOTICE_DAYS,
  CONTACT,
  TRIAL,
} from "@/lib/academyFacts";

export const revalidate = false;

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "NoorPath Academy terms for trial requests, online classes, scheduling, payments, cancellations and responsible service use.",
  alternates: { canonical: "https://www.noorpath.online/terms-of-service" },
  robots: { index: true, follow: true },
};

export default function TermsPage() {
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
          <h1>Terms of Service</h1>
          <p>Last updated: 14 July 2026</p>
        </div>
      </div>
      <section>
        <div className="max-w-[760px] mx-auto px-4">
          <div className="content-card">
            <p style={paragraphStyle}>
              These terms apply when you use NoorPath Academy&apos;s website,
              request a trial, or enrol in online classes. Requesting a trial
              does not create a paid subscription.
            </p>

            <h2 style={sectionStyle}>Trial requests</h2>
            <p style={paragraphStyle}>
              New learners may request a free {TRIAL.durationMinutes}-minute
              trial without providing a credit card. A requested date, time or
              tutor is not confirmed until NoorPath contacts you. Trials are
              subject to tutor and schedule availability.
            </p>

            <h2 style={sectionStyle}>Classes and tutor matching</h2>
            <p style={paragraphStyle}>
              Classes are delivered online using an agreed meeting platform.
              NoorPath matches learners according to course needs, tutor
              preference, timezone and current availability. A tutor preference
              is a request rather than a guarantee. If a match is unsuitable,
              contact NoorPath to discuss another available tutor.
            </p>
            <p style={paragraphStyle}>
              Learning progress differs by starting level, attendance, lesson
              frequency and practice. NoorPath does not promise a fixed
              completion date, certification or learning outcome unless a
              separate written agreement states otherwise.
            </p>

            <h2 style={sectionStyle}>Scheduling and attendance</h2>
            <p style={paragraphStyle}>
              You agree to provide accurate booking information and attend
              agreed sessions. Please give at least 24 hours&apos; notice when
              requesting a class change. Rescheduling depends on tutor
              availability and should be agreed directly with NoorPath.
            </p>

            <h2 style={sectionStyle}>Plans and payments</h2>
            <p style={paragraphStyle}>
              Current plan prices, session frequency and lesson duration are
              published on the{" "}
              <Link href="/pricing" style={{ color: "var(--emerald)" }}>
                Pricing page
              </Link>
              . Paid plans are billed monthly unless NoorPath confirms a
              different arrangement in writing. Plan changes take effect from
              the next billing cycle unless otherwise agreed.
            </p>

            <h2 style={sectionStyle}>Cancellation and refunds</h2>
            <p style={paragraphStyle}>
              You may cancel with at least {CANCELLATION_NOTICE_DAYS} days&apos;
              notice before the next billing date. NoorPath does not charge a
              cancellation fee. Payments already made for a partial month are
              not refundable, but remaining scheduled sessions in that paid
              period may be used. This policy does not limit any non-waivable
              rights available under applicable consumer law.
            </p>

            <h2 style={sectionStyle}>Children and responsible use</h2>
            <p style={paragraphStyle}>
              A parent or guardian should arrange and manage classes for a
              child, remain responsible for appropriate supervision, and use
              the official contact channels for scheduling. Users and tutors
              must behave respectfully and must not record, copy or distribute
              a session without the other participants&apos; permission and any
              required parent or guardian consent.
            </p>

            <h2 style={sectionStyle}>Privacy and third-party services</h2>
            <p style={paragraphStyle}>
              Our{" "}
              <Link href="/privacy-policy" style={{ color: "var(--emerald)" }}>
                Privacy Policy
              </Link>{" "}
              explains how information is handled. Video meeting, messaging
              and payment providers may also apply their own terms and privacy
              policies.
            </p>

            <h2 style={sectionStyle}>Service availability and changes</h2>
            <p style={paragraphStyle}>
              NoorPath may update course content, tutors, schedules, technology
              or these terms when reasonably necessary. Material changes will
              be published on this page. We are not responsible for disruption
              caused by a learner&apos;s device, internet connection or a
              third-party platform outside our reasonable control.
            </p>

            <h2 style={sectionStyle}>Contact</h2>
            <p style={paragraphStyle}>
              Questions about these terms can be sent to{" "}
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
