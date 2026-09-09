import { CONTACT } from "@/lib/academyFacts";

export const SOFTWARE_SERVICES_PATH = "/software-services";
export const SOFTWARE_SERVICES_CONTENT_VERSION = "2026-09-09";

export const SOFTWARE_SERVICES_WHATSAPP_MESSAGE =
  "Assalamu Alaikum. I would like to discuss a custom software, website, or mobile application project. Please share the next steps for a written proposal.";

export const SOFTWARE_SERVICES_WHATSAPP_URL = `${CONTACT.whatsappUrl}?text=${encodeURIComponent(SOFTWARE_SERVICES_WHATSAPP_MESSAGE)}`;

export const SOFTWARE_SERVICE_OFFERINGS = [
  {
    title: "Custom software development",
    summary:
      "Purpose-built web and backend systems for the process you actually run — records, workflows, roles, reporting, and the rules that keep the operation under control.",
  },
  {
    title: "Website design and development",
    summary:
      "Marketing, institutional, and product websites that explain the offer clearly, load quickly, and can be handed over with the pages, forms, and content model agreed in the proposal.",
  },
  {
    title: "Mobile applications",
    summary:
      "iOS and Android applications for customers or internal teams, including the screens, accounts, and API connection scoped before build work starts.",
  },
  {
    title: "Enterprise systems and dashboards",
    summary:
      "Admin panels, staff tools, and management dashboards so a business can see activity, assign access, and run day-to-day operations from one place.",
  },
  {
    title: "Product design and user experience",
    summary:
      "Information architecture, interface design, and user flows so the product is usable on the devices your people already have — before the build is locked.",
  },
  {
    title: "Launch, handover, and support windows",
    summary:
      "Testing, deployment, administrator handover, and a support window written into the proposal. Extra features after handover are a new written scope.",
  },
] as const;

export const SOFTWARE_CAPABILITIES = [
  "Business and operations web applications",
  "Public, institutional, and product websites",
  "iOS and Android mobile applications",
  "Admin panels, roles, and activity history",
  "Customer or staff dashboards and reports",
  "APIs and third-party connections listed in the proposal",
  "Authentication and account control",
  "Content management agreed for the site or product",
] as const;

export const SOFTWARE_AUDIENCES = [
  {
    title: "Businesses",
    summary:
      "Replace scattered spreadsheets, email threads, or an ageing tool with a system designed around your process.",
  },
  {
    title: "Organisations and institutions",
    summary:
      "A public website, an internal portal, or both — scoped so staff and visitors each see only what they should.",
  },
  {
    title: "Product teams",
    summary:
      "A build partner for a web product or mobile application when you need design, engineering, and a written handover.",
  },
  {
    title: "Operators who need control",
    summary:
      "Dashboards, quotas, approvals, and reporting so managers can see what is happening without chasing files.",
  },
] as const;

export const SOFTWARE_ENGAGEMENT_STEPS = [
  {
    title: "Share the brief",
    detail:
      "Tell us who the product is for, what it must do, and which devices or systems already exist. Delivery is remote. NoorPath does not invent a campus visit or a local software branch.",
  },
  {
    title: "Confirm scope in writing",
    detail:
      "You receive a written proposal for the agreed website, application, or system. Timelines and cost belong to that scope — this page does not publish a fixed package price or a guaranteed calendar for every project.",
  },
  {
    title: "Design and build",
    detail:
      "Work follows the confirmed screens, roles, hosting, and integrations. App-store fees, paid APIs, SMS, payment gateways, and hardware stay excluded unless the proposal lists them.",
  },
  {
    title: "Test, launch, and hand over",
    detail:
      "Testing, bug-fixing, deployment, and administrator handover close the agreed deliverables. Changes after launch are scoped again in writing.",
  },
] as const;

export const SOFTWARE_SERVICES_FAQS = [
  {
    question: "Who is this software service for?",
    answer:
      "Businesses, organisations, and product teams that need custom software, a website, a mobile application, or an enterprise dashboard. We confirm the exact product in a written proposal.",
  },
  {
    question: "What kind of digital work do you take on?",
    answer:
      "The same categories a software house typically delivers: custom software, website design and development, iOS and Android applications, enterprise dashboards, and the design-to-handover path around them. We confirm the exact product in a written proposal. This page does not claim every industry or every technology.",
  },
  {
    question: "Is there a published price or a guaranteed delivery date?",
    answer:
      "No. Software, website, and mobile work is quoted after the brief and environment are clear. Duration depends on the agreed screens, roles, and integrations. No project cost is implied until it is written in a proposal you accept.",
  },
  {
    question: "Do you have a physical office for software projects?",
    answer:
      "No. NoorPath operates online. Discovery, demos, delivery, and handover are remote. Do not treat any city page on this website as a software branch or a local visit offer.",
  },
  {
    question: "Which technologies do you use?",
    answer:
      "The stack is confirmed in the proposal for that product — web, mobile, and backend — rather than promising every framework on this page. Hosting, domains, app-store accounts, SMS, payment gateways, and other third-party fees stay excluded unless the proposal lists them.",
  },
  {
    question: "How do I start a software enquiry?",
    answer:
      `Email ${CONTACT.email} or WhatsApp ${CONTACT.phoneDisplay}. Describe the product (software, website, or mobile app), who will use it, and the outcome you need. Availability and next steps are confirmed after that request.`,
  },
];
