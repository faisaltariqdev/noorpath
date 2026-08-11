/**
 * Gulf lifestyle commercial guide (UAE & Qatar evenings) — online-only, no campuses.
 */

import { PRICING_PLANS, TRIAL } from "@/lib/academyFacts";

const S = `.article-body { font-size: 1.05rem; line-height: 1.85; color: #374151; }
  .article-body h2 { font-size: 1.55rem; font-weight: 700; color: var(--charcoal); margin: 44px 0 16px; scroll-margin-top: 90px; }
  .article-body h3 { font-size: 1.15rem; font-weight: 700; color: var(--emerald); margin: 26px 0 10px; }
  .article-body p { margin-bottom: 18px; }
  .article-body ul, .article-body ol { margin: 0 0 18px 22px; }
  .article-body li { margin-bottom: 8px; }
  .article-body a { color: var(--emerald); font-weight: 600; }
  .highlight-box { background: rgba(10,110,79,.06); border-left: 4px solid var(--emerald); border-radius: 8px; padding: 20px 24px; margin: 24px 0; }
  .gold-box { background: rgba(232,184,75,.08); border-left: 4px solid var(--gold); border-radius: 8px; padding: 20px 24px; margin: 24px 0; }
  .np-table { width: 100%; border-collapse: collapse; margin: 24px 0; font-size: .93rem; }
  .np-table th, .np-table td { border: 1px solid var(--border); padding: 12px 14px; text-align: left; vertical-align: top; }
  .np-table th { background: var(--ivory); color: var(--charcoal); font-weight: 700; }
  .np-table tr:nth-child(even) td { background: rgba(10,110,79,.03); }
  .faq-acc { border: 1px solid var(--border); border-radius: 10px; margin-bottom: 12px; overflow: hidden; }
  .faq-acc summary { padding: 16px 20px; font-weight: 700; cursor: pointer; background: var(--ivory); color: var(--charcoal); list-style: none; display: flex; justify-content: space-between; align-items: center; font-size: .95rem; }
  .faq-acc summary::-webkit-details-marker { display: none; }
  .faq-acc summary span { color: var(--emerald); margin-left: 12px; }
  .faq-acc p { padding: 16px 20px; margin: 0; color: #374151; font-size: .92rem; line-height: 1.75; border-top: 1px solid var(--border); }
  @media (max-width: 576px) { .np-table { font-size: .82rem; } .np-table th, .np-table td { padding: 8px 9px; } }`;

export const gulfParentBlogContent: Record<string, { style: string; content: string }> = {
  "after-school-quran-classes-for-gulf-families": {
    style: S,
    content: `<p><strong>After-school Quran classes for Gulf families</strong> often mean one practical question: can a child still have a calm live lesson after school, traffic, and Maghrib — without adding another car journey? For many households in the UAE and Qatar, remote one-to-one lessons in Gulf time are the workable answer when matching confirms a slot.</p>

          <div class="highlight-box">
            <strong>Quick answer:</strong> Plan evening windows in <strong>GST (UAE/Qatar, UTC+4)</strong>, request live 1-to-1 matching, and do not assume a campus or guaranteed 7pm tutor. Start with a free <a href="/free-quran-classes-online">${TRIAL.durationMinutes}-minute trial</a>, then see <a href="/locations/online-quran-classes-uae">online Quran classes in the UAE</a> or <a href="/locations/online-quran-classes-qatar">Qatar</a> for local scheduling context.
          </div>

          <h2 id="why-online">Why after-school online fits many Gulf routines</h2>
          <ul>
            <li>School + activity finish times already fill the late afternoon</li>
            <li>Parents want English explanations with Arabic recitation correction</li>
            <li>Female-tutor preference is common for daughters</li>
            <li>Travel weeks and home-country visits break physical class streaks</li>
          </ul>
          <p>Related: <a href="/blog/quran-classes-for-expat-families">Quran classes for expat families</a> · <a href="/blog/online-quran-classes-for-muslim-families-abroad">Muslim families abroad</a>.</p>

          <h2 id="not-campus">Online-only — not a Dubai or Doha branch</h2>
          <div class="gold-box">
            <strong>Clarity:</strong> NoorPath provides remote live tuition. A UAE or Qatar location page means learners <em>there</em> can request online lessons — it is not a walk-in centre, school partnership campus, or home-visit agency in Dubai, Abu Dhabi, or Doha.
          </div>

          <h2 id="evening">Building a GST evening slot that survives real life</h2>
          <table class="np-table">
            <tr><th>Window</th><th>Parent tip</th></tr>
            <tr><td>Right after school</td><td>Often too rushed — snack and decompress first</td></tr>
            <tr><td>After Maghrib family time</td><td>Common sweet spot when energy returns</td></tr>
            <tr><td>Later evening</td><td>Works for older kids; watch sleep for younger ones</td></tr>
            <tr><td>Weekend morning</td><td>Useful backup when weeknights collapse</td></tr>
          </table>
          <ol>
            <li>Give two or three GST windows when you request a tutor — not one rigid minute.</li>
            <li>Label the recurring appointment in GST explicitly.</li>
            <li>Expect confirmation after matching — evening popularity means flexibility helps.</li>
            <li>Keep home echo to 8–12 minutes on non-lesson days so the week stays kind.</li>
          </ol>
          <p>Not every Gulf household is on the same clock. The UAE and Qatar run on GST (UTC+4), while <a href="/locations/online-quran-classes-saudi-arabia">Saudi Arabia</a> and <a href="/locations/online-quran-classes-kuwait">Kuwait</a> sit an hour behind on AST (UTC+3). If you are in Riyadh, Jeddah or Kuwait City, write the window in your own local time so a one-hour assumption does not quietly move the lesson.</p>
          <p>Ops checklist: <a href="/blog/online-quran-class-checklist-for-parents">online Quran class checklist</a> · <a href="/blog/how-long-should-online-quran-lessons-be">lesson length</a>.</p>

          <h2 id="travel">Travel weeks and home leave</h2>
          <ul>
            <li>Decide before tickets: pause, shift to a temporary timezone, or keep short revision calls</li>
            <li>Tell the academy travel dates early and ask for the written make-up/pause rule</li>
            <li>Avoid restarting from shame — request a placement refresh if the gap was long</li>
          </ul>
          <p>Continuity playbook: <a href="/blog/keeping-quran-classes-during-exams-and-holidays">exams and holidays</a>.</p>

          <h2 id="usd">Budgeting published USD plans from the Gulf</h2>
          <p>NoorPath publishes tuition in US dollars (for example Starter $${PRICING_PLANS[0].monthlyPriceUsd}/mo, Standard $${PRICING_PLANS[1].monthlyPriceUsd}/mo, Intensive $${PRICING_PLANS[2].monthlyPriceUsd}/mo). Gulf households usually convert to AED or QAR at their card/bank rate. Verify the checkout total and any FX fee — do not treat a social-media “AED price” as official unless it matches <a href="/pricing">pricing</a>.</p>
          <p>Multi-child homes: <a href="/blog/sibling-online-quran-classes-scheduling">sibling scheduling and discounts</a>.</p>

          <h2 id="path">Typical after-school learning path</h2>
          <ol>
            <li>Placement listen (letters vs reading vs memorisation readiness)</li>
            <li>Qaida or fluency repair if needed</li>
            <li>Tajweed applied to short surahs used in salah</li>
            <li>Optional light Hifz only when reading is stable</li>
          </ol>
          <p>See <a href="/blog/what-should-my-child-learn-first-in-quran">what should my child learn first</a> and <a href="/online-quran-classes-for-kids">kids classes</a>.</p>

          <h2 id="start">Request an evening trial</h2>
          <p>Share city, GST windows, child age/level, and female-tutor preference if needed. Trial is ${TRIAL.durationMinutes} minutes with no credit card. <a href="/free-quran-classes-online">Book a free trial</a> · <a href="/locations/online-quran-classes-uae">UAE hub</a> · <a href="/locations/online-quran-classes-qatar">Qatar hub</a>.</p>

          <h2 id="faq">FAQ</h2>
          <details class="faq-acc"><summary>Are evening GST slots guaranteed for Gulf families?<span>+</span></summary>
            <p>No. Evening demand is high. Share two or three suitable GST windows; tutor availability is confirmed after matching.</p>
          </details>
          <details class="faq-acc"><summary>Is this a UAE or Qatar campus?<span>+</span></summary>
            <p>No. NoorPath’s provision for Gulf learners is remote-only. Location pages help with scheduling context; they are not physical branches.</p>
          </details>
          <details class="faq-acc"><summary>Can we keep classes during travel weeks?<span>+</span></summary>
            <p>Often yes with a plan: pause, temporary timezone shift, or short revision sessions. Confirm make-up and pause rules in writing before travel.</p>
          </details>
          <details class="faq-acc"><summary>How do we budget published USD plans from the Gulf?<span>+</span></summary>
            <p>Use the published USD plan on the pricing page, then convert with your payment provider’s AED/QAR rate and fees. Treat only the checkout total as binding.</p>
          </details>
          <p>Gulf after-school Quran works when the slot respects real evenings — prayer, traffic, and travel — and when online matching is treated as a service, not a promised campus timetable.</p>`,
  },
};
