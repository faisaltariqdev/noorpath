import { CONTACT } from "@/lib/academyFacts";

export const SOFTWARE_SERVICES_PATH = "/software-services";
export const SOFTWARE_SERVICES_CONTENT_VERSION = "2026-09-09";

export const SOFTWARE_SERVICES_WHATSAPP_MESSAGE =
  "Assalamu Alaikum. I would like to discuss a custom software or operational system for our institute. Please share the next steps for a written proposal.";

export const SOFTWARE_SERVICES_WHATSAPP_URL = `${CONTACT.whatsappUrl}?text=${encodeURIComponent(SOFTWARE_SERVICES_WHATSAPP_MESSAGE)}`;

export const SOFTWARE_SERVICE_OFFERINGS = [
  {
    title: "Institute operations software",
    summary:
      "Purpose-built systems for schools and institutes that need to control a real operational process — for example printing credits, user accounts, and usage history.",
  },
  {
    title: "Admin dashboards and user control",
    summary:
      "Role-based admin panels to add students and staff, activate or deactivate accounts, assign balances, and review activity without spreading access across unofficial spreadsheets.",
  },
  {
    title: "Credit, quota, and restriction logic",
    summary:
      "Rules that consume a unit when work happens and automatically block the next action when the balance reaches zero, with a clear recharge path for the administrator.",
  },
  {
    title: "Web applications and handover",
    summary:
      "Browser-based applications, authentication, database setup, and deployment into an environment we agree in writing. Scope is confirmed before build work starts.",
  },
] as const;

export const SOFTWARE_ENGAGEMENT_STEPS = [
  {
    title: "Describe the problem",
    detail:
      "Share who uses the process today, what should be allowed or blocked, and which devices or printers already exist. NoorPath does not invent a campus visit or on-site branch.",
  },
  {
    title: "Confirm scope in writing",
    detail:
      "You receive a written proposal for the agreed system. Timelines and cost are specific to that scope — this page does not publish a fixed package price or a guaranteed calendar for every project.",
  },
  {
    title: "Build against the agreed environment",
    detail:
      "Work follows the confirmed printer, operating-system, hosting, and login requirements. Hardware, SMS, payment gateways, and other third-party services stay excluded unless the proposal says otherwise.",
  },
  {
    title: "Test, deploy, and hand over",
    detail:
      "Testing, bug-fixing, deployment, and administrator handover close the agreed deliverables. Extra features after handover are a new written scope.",
  },
] as const;

export const SOFTWARE_SERVICES_FAQS = [
  {
    question: "Does NoorPath only teach Quran, or do you also build software?",
    answer:
      "NoorPath Academy remains an online Quran academy with live classes, a public Holy Quran reader, and free Islamic tools. NoorPath also builds custom software for operational problems — for example institute printing-credit control — as a separate service line. Published Quran class prices do not apply to software projects.",
  },
  {
    question: "What kind of software problems do you take on?",
    answer:
      "We take scoped operational systems: admin panels, student and staff records, credit or quota control, activity history, authentication, and deployment. A printing credit management system — one credit per printed page, automatic block at zero, admin recharge — is a typical example. We do not claim every industry or every technology on this page.",
  },
  {
    question: "Is there a published price or a guaranteed delivery date?",
    answer:
      "No. Software work is quoted after the problem and environment are clear. A sample printing-credit proposal may show an illustrative 3–4 week plan for that design; other work can be shorter or longer. No project cost is implied until it is written in a proposal you accept.",
  },
  {
    question: "Do you have a physical office for software projects?",
    answer:
      "No. NoorPath operates online. Delivery, demos, and handover are remote. Do not treat any city page on this website as a software branch or a local visit offer.",
  },
  {
    question: "What is not included unless we agree it in writing?",
    answer:
      "Printer hardware, hosting, domains, SMS, payment gateways, and other third-party fees are excluded unless the proposal lists them. Printing features depend on the institute’s existing printer and operating-system setup.",
  },
  {
    question: "How do I start a software enquiry?",
    answer:
      `Email ${CONTACT.email} or WhatsApp ${CONTACT.phoneDisplay}. Describe the process you need to control, who will administer it, and the current environment. Availability and next steps are confirmed after that request.`,
  },
];
