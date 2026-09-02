/**
 * Expert end-to-end test of /tools/zakat-calculator against a running server.
 * Usage: BASE=http://localhost:3777 node scripts/test-zakat-ui.mjs
 */
import { chromium } from "playwright";

const BASE = process.env.BASE ?? "http://localhost:3777";
const PAGE_URL = `${BASE}/tools/zakat-calculator`;

let passed = 0;
const fail = (msg) => {
  throw new Error(`FAIL: ${msg}`);
};
const check = (cond, msg) => {
  if (!cond) fail(msg);
  passed += 1;
  console.log(`  ✓ ${msg}`);
};

const browser = await chromium.launch({ channel: "chrome", headless: true });
const page = await browser.newPage();
const consoleErrors = [];
page.on("console", (m) => {
  if (m.type() === "error") consoleErrors.push(m.text());
});
page.on("pageerror", (e) => consoleErrors.push(String(e)));

try {
  // ── API contract ──
  const api = await page.request.get(`${BASE}/api/nisab?currency=GBP`);
  check(api.ok(), "nisab API responds 200 for GBP");
  const snap = await api.json();
  check(snap.goldPerGram > 0 && snap.silverPerGram > 0, `nisab API returns positive prices (gold ${snap.goldPerGram}, silver ${snap.silverPerGram} ${snap.currency})`);

  // ── Page load + SEO fundamentals ──
  const resp = await page.goto(PAGE_URL, { waitUntil: "networkidle" });
  check(resp.status() === 200, "page returns 200");
  const title = await page.title();
  check(/zakat calculator/i.test(title), `title contains "Zakat Calculator" (${title})`);
  check((await page.locator("h1").count()) === 1, "exactly one <h1>");
  const canonical = await page.locator('link[rel="canonical"]').getAttribute("href");
  check(canonical === "https://www.noorpath.online/tools/zakat-calculator", "canonical URL correct");
  const ldCount = await page.locator('script[type="application/ld+json"]').count();
  check(ldCount >= 1, `JSON-LD present (${ldCount} blocks)`);
  const ldTexts = await page.locator('script[type="application/ld+json"]').allTextContents();
  const hasFaq = ldTexts.some((t) => t.includes('"FAQPage"'));
  const hasApp = ldTexts.some((t) => t.includes('"WebApplication"'));
  check(hasFaq && hasApp, "FAQPage + WebApplication schema present");
  const metaDesc = await page.locator('meta[name="description"]').getAttribute("content");
  check(metaDesc && metaDesc.length > 70 && metaDesc.length <= 165, `meta description length ok (${metaDesc.length})`);

  // ── Live prices load ──
  await page.waitForSelector("text=Live prices", { timeout: 20000 });
  check(true, "live gold/silver prices rendered");

  // ── Calculation flow: enter 10,000 cash ──
  const cash = page.locator('label:has-text("Cash in hand") input');
  await cash.fill("10000");
  await page.waitForTimeout(300);
  const summary = page.locator("text=Your zakat summary").locator("..");
  const summaryText = await summary.textContent();
  check(/10,000/.test(summaryText), "total assets shows 10,000");
  check(/250/.test(summaryText), "zakat due shows 2.5% = 250");

  // ── Nisab standard toggle changes threshold ──
  const silverNisabText = await page.locator("dd", { hasText: /./ }).nth(3).textContent();
  await page.locator('button:has-text("Gold (87.48 g)")').click();
  await page.waitForTimeout(200);
  const goldNisabText = await page.locator("dd", { hasText: /./ }).nth(3).textContent();
  check(silverNisabText !== goldNisabText, `nisab changes with standard (silver ${silverNisabText?.trim()} → gold ${goldNisabText?.trim()})`);
  await page.locator('button:has-text("Silver (612.36 g)")').click();

  // ── FCNA retirement method reveals extra fields & affects total ──
  await page.locator('input[name="retirement-method"]').nth(1).check();
  const balanceField = page.getByRole("spinbutton", { name: /Account balance/ });
  await balanceField.waitFor({ timeout: 5000 });
  await balanceField.fill("100000");
  await page.getByRole("spinbutton", { name: /Early-withdrawal penalty/ }).fill("20");
  await page.getByRole("spinbutton", { name: /Estimated tax/ }).fill("25");
  await page.waitForTimeout(300);
  const withRetirement = await summary.textContent();
  check(/70,000/.test(withRetirement), "10k cash + 60k net-withdrawable 401k = 70,000 net zakatable");
  check(/1,750/.test(withRetirement), "zakat due = 1,750 (matches FCNA worked example + cash)");

  // ── Persistence across reload ──
  await page.reload({ waitUntil: "networkidle" });
  await page.waitForTimeout(600);
  const cashAfter = await page.locator('label:has-text("Cash in hand") input').inputValue();
  check(cashAfter === "10000", "inputs persist across reload (localStorage)");

  // ── Reset clears everything ──
  await page.locator('button:has-text("Clear all amounts")').click();
  await page.waitForTimeout(300);
  const cashCleared = await page.locator('label:has-text("Cash in hand") input').inputValue();
  check(cashCleared === "", "reset button clears inputs");
  const stored = await page.evaluate(() => window.localStorage.getItem("noorpath-zakat-calculator-v1"));
  // The save effect may rewrite an empty snapshot afterwards; what matters is amounts are zero.
  const parsedOk = stored === null || JSON.parse(stored).inputs.cashInHand === 0;
  check(parsedOk, "saved data cleared/zeroed");

  // ── Privacy audit: no request body ever contains entered amounts ──
  const leaks = [];
  page.on("request", (req) => {
    const post = req.postData();
    if (post && post.includes("98765")) leaks.push(req.url());
  });
  await page.locator('label:has-text("Cash in hand") input').fill("98765");
  await page.waitForTimeout(1500);
  check(leaks.length === 0, "entered amounts never sent over the network");

  // ── Mobile viewport sanity ──
  await page.setViewportSize({ width: 375, height: 720 });
  await page.waitForTimeout(300);
  const overflow = await page.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth);
  check(overflow <= 1, `no horizontal overflow on 375px mobile (${overflow}px)`);

  // ── FAQ visible text matches FAQPage JSON-LD ──
  const faqLd = JSON.parse(ldTexts.find((t) => t.includes('"FAQPage"')));
  const graph = faqLd["@graph"] ?? [faqLd];
  const faqNode = graph.find((n) => n["@type"] === "FAQPage");
  for (const q of faqNode.mainEntity) {
    const visible = await page.locator(`summary:has-text(${JSON.stringify(q.name)})`).count();
    if (visible === 0) fail(`FAQ question missing from visible page: ${q.name}`);
  }
  check(true, `all ${faqNode.mainEntity.length} FAQ schema questions visible on page`);

  check(consoleErrors.length === 0, `no console errors (${consoleErrors.length ? consoleErrors.join(" | ") : "clean"})`);

  console.log(`\nAll ${passed} UI checks passed ✅`);
} finally {
  await browser.close();
}
