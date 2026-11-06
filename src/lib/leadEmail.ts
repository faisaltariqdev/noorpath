/**
 * Trial-lead notification email sent to the NoorPath team by /api/leads.
 * Table layout + inline styles so it renders the same in Gmail, Outlook and Apple Mail.
 */

export type LeadEmail = {
  name: string;
  contact: string;
  country: string;
  learnerType: string;
  learnerName: string;
  learnerAge: string;
  course: string;
  preferredTime: string;
  tutorPreference: string;
  landingPage: string;
  referrer: string;
  formVariant: string;
};

const EMERALD = "#0a6e4f";
const EMERALD_DK = "#063d2c";
const GOLD = "#c9922a";
const CREAM = "#fdf8f0";
const INK = "#1f2933";
const MUTED = "#5f6673";
const BORDER = "#e6ece9";

function esc(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function learnerTypeLabel(type: string): string {
  if (type === "child") return "Child";
  if (type === "self") return "Adult (booking for themselves)";
  return type || "Not specified";
}

function receivedAt(date: Date): string {
  return new Intl.DateTimeFormat("en-GB", {
    timeZone: "Asia/Karachi",
    day: "numeric",
    month: "short",
    year: "numeric",
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  }).format(date) + " PKT";
}

export function leadEmailSubject(lead: LeadEmail): string {
  return `New trial request — ${lead.name} (${lead.country})`;
}

export function leadEmailText(lead: LeadEmail, now = new Date()): string {
  return [
    "New NoorPath trial request",
    `Received: ${receivedAt(now)}`,
    "",
    `Contact name: ${lead.name}`,
    `Contact: ${lead.contact}`,
    `Country: ${lead.country}`,
    "",
    `Learner: ${lead.learnerName || "Not provided"} (${learnerTypeLabel(lead.learnerType)})`,
    `Age: ${lead.learnerAge || "Not provided"}`,
    `Course: ${lead.course || "Free trial class"}`,
    `Preferred time: ${lead.preferredTime || "Not specified"}`,
    `Tutor preference: ${lead.tutorPreference || "Not specified"}`,
    "",
    `Form: ${lead.formVariant}`,
    `Landing page: ${lead.landingPage || "Not provided"}`,
    `Referrer: ${lead.referrer || "Direct"}`,
  ].join("\n");
}

function row(label: string, value: string, isLast = false): string {
  return `<tr>
    <td style="padding:10px 0;${isLast ? "" : `border-bottom:1px solid ${BORDER};`}color:${MUTED};font-size:13px;width:150px;vertical-align:top;">${esc(label)}</td>
    <td style="padding:10px 0;${isLast ? "" : `border-bottom:1px solid ${BORDER};`}color:${INK};font-size:14px;font-weight:600;vertical-align:top;">${value}</td>
  </tr>`;
}

function section(title: string, rows: string): string {
  return `<tr><td style="padding:24px 32px 0;">
    <div style="font-size:11px;font-weight:700;letter-spacing:1.2px;text-transform:uppercase;color:${GOLD};margin-bottom:6px;">${esc(title)}</div>
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border-collapse:collapse;">${rows}</table>
  </td></tr>`;
}

function button(href: string, label: string, primary: boolean): string {
  const bg = primary ? EMERALD : "#ffffff";
  const color = primary ? "#ffffff" : EMERALD;
  return `<a href="${esc(href)}" style="display:inline-block;padding:12px 22px;margin:0 8px 8px 0;border-radius:8px;background:${bg};color:${color};border:1px solid ${EMERALD};font-size:14px;font-weight:700;text-decoration:none;">${esc(label)}</a>`;
}

export function leadEmailHtml(lead: LeadEmail, now = new Date()): string {
  const isEmail = lead.contact.includes("@");
  const digits = lead.contact.replace(/\D/g, "");
  const firstName = lead.name.split(/\s+/)[0] || lead.name;
  const waText = `Assalamu Alaikum ${firstName}, this is NoorPath Academy about your free Quran trial request.`;

  const actions = [
    !isEmail && digits.length >= 7
      ? button(`https://wa.me/${digits}?text=${encodeURIComponent(waText)}`, "Reply on WhatsApp", true)
      : "",
    isEmail
      ? button(`mailto:${lead.contact}?subject=${encodeURIComponent("Your free NoorPath Quran trial")}`, "Reply by email", true)
      : "",
    !isEmail && digits.length >= 7 ? button(`tel:+${digits}`, "Call", false) : "",
  ].join("");

  const contactValue = isEmail
    ? `<a href="mailto:${esc(lead.contact)}" style="color:${EMERALD};text-decoration:none;">${esc(lead.contact)}</a>`
    : esc(lead.contact);

  const landing = lead.landingPage
    ? `<a href="${esc(lead.landingPage)}" style="color:${EMERALD};text-decoration:none;word-break:break-all;">${esc(lead.landingPage.replace(/^https?:\/\/(www\.)?/, ""))}</a>`
    : "Not provided";

  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>${esc(leadEmailSubject(lead))}</title>
</head>
<body style="margin:0;padding:0;background:${CREAM};font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;">
<div style="display:none;max-height:0;overflow:hidden;">${esc(`${lead.name} from ${lead.country} wants a free trial — ${lead.course || "Free trial class"}.`)}</div>
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:${CREAM};padding:24px 12px;">
<tr><td align="center">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:600px;background:#ffffff;border-radius:14px;overflow:hidden;border:1px solid ${BORDER};">
    <tr><td style="background:${EMERALD_DK};background-image:linear-gradient(135deg,${EMERALD_DK},${EMERALD});padding:24px 32px;">
      <div style="font-size:20px;font-weight:800;color:#ffffff;">Noor<span style="color:${GOLD};">Path</span> <span style="font-size:13px;font-weight:600;color:rgba(255,255,255,.75);">Academy</span></div>
      <div style="margin-top:14px;display:inline-block;padding:4px 10px;border-radius:999px;background:${GOLD};color:#1a1a2e;font-size:11px;font-weight:800;letter-spacing:.8px;text-transform:uppercase;">New trial request</div>
      <div style="margin-top:10px;font-size:22px;font-weight:700;color:#ffffff;line-height:1.3;">${esc(lead.name)}</div>
      <div style="margin-top:4px;font-size:13px;color:rgba(255,255,255,.8);">${esc(lead.country)} · ${esc(receivedAt(now))}</div>
    </td></tr>

    ${actions ? `<tr><td style="padding:24px 32px 0;">${actions}</td></tr>` : ""}

    ${section("Contact", row("Name", esc(lead.name)) + row("Contact", contactValue) + row("Country", esc(lead.country), true))}

    ${section(
      "Learner",
      row("Learner", esc(lead.learnerName || "Not provided")) +
        row("Type", esc(learnerTypeLabel(lead.learnerType))) +
        row("Age", esc(lead.learnerAge || "Not provided")) +
        row("Course", esc(lead.course || "Free trial class")) +
        row("Preferred time", esc(lead.preferredTime || "Not specified")) +
        row("Tutor", esc(lead.tutorPreference || "Not specified"), true),
    )}

    ${section("Source", row("Form", esc(lead.formVariant)) + row("Landing page", landing) + row("Referrer", esc(lead.referrer || "Direct"), true))}

    <tr><td style="padding:24px 32px 28px;">
      <div style="background:${CREAM};border-radius:10px;padding:14px 16px;font-size:13px;color:${MUTED};line-height:1.5;">
        Aim to reply within 24 hours — the website tells families to expect a WhatsApp or email confirmation in that time.
      </div>
    </td></tr>
  </table>
  <div style="max-width:600px;padding:16px 8px;font-size:12px;color:${MUTED};text-align:center;">
    Sent automatically by the trial form on <a href="https://www.noorpath.online" style="color:${MUTED};">noorpath.online</a>
  </div>
</td></tr>
</table>
</body>
</html>`;
}
