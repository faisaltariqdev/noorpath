/**
 * Family-operations commercial guides:
 * sibling scheduling, teenagers path, exams & holidays continuity.
 * Honest USD discounts from academyFacts; no invented outcomes.
 */

import { FAMILY_DISCOUNTS, PRICING_PLANS, TRIAL } from "@/lib/academyFacts";

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

const siblingDiscountRows = FAMILY_DISCOUNTS.map(
  (d) =>
    `<tr><td>${d.siblings}</td><td>${d.discountPercent}% off published plan pricing (confirm at checkout)</td></tr>`
).join("");

export const familyOpsBlogContent: Record<string, { style: string; content: string }> = {
  "sibling-online-quran-classes-scheduling": {
    style: S,
    content: `<p>Parents searching <strong>sibling online Quran classes</strong> usually want two things at once: fair attention for each child, and a schedule that does not collapse the household. Multi-child Quran learning works when each learner has a clear level path — and when discounts, tutors, and back-to-back slots are planned honestly.</p>

          <div class="highlight-box">
            <strong>Quick answer:</strong> Prefer <em>separate</em> one-to-one lessons (not one shared class) when ages or levels differ. Stack short slots with a buffer, request the same tutor only when it helps both children, and check published sibling discounts on <a href="/pricing">pricing</a>. Start with a free <a href="/free-quran-classes-online">${TRIAL.durationMinutes}-minute trial</a> per child when levels differ.
          </div>

          <h2 id="shared-vs-separate">Shared lesson vs separate lessons</h2>
          <table class="np-table">
            <tr><th>Setup</th><th>When it can work</th><th>Risk</th></tr>
            <tr><td>One shared live lesson</td><td>Very close ages, same level, calm temperament</td><td>One child waits while the other is corrected; rivalry rises</td></tr>
            <tr><td>Separate 1-to-1 back-to-back</td><td>Different levels or energy needs</td><td>Parent fatigue if there is no buffer</td></tr>
            <tr><td>Separate days</td><td>Busy weeknights, exam seasons</td><td>Needs calendar discipline</td></tr>
          </table>
          <p>NoorPath classes are arranged as live one-to-one sessions. Treat “siblings together on camera” as a parenting choice only when both children genuinely learn at the same step — not as a default cost shortcut.</p>

          <h2 id="discounts">Published sibling discounts (USD)</h2>
          <p>NoorPath publishes family discounts against plan pricing. Confirm the active percentage at checkout — do not rely on chat screenshots alone.</p>
          <table class="np-table">
            <tr><th>Household</th><th>Published discount</th></tr>
            ${siblingDiscountRows}
          </table>
          <p>Plans themselves remain the published USD options (for example Starter $${PRICING_PLANS[0].monthlyPriceUsd}/mo, Standard $${PRICING_PLANS[1].monthlyPriceUsd}/mo, Intensive $${PRICING_PLANS[2].monthlyPriceUsd}/mo). Full detail: <a href="/blog/online-quran-classes-cost-pricing-guide">online Quran classes cost guide</a>.</p>

          <h2 id="same-tutor">Same tutor or different tutors?</h2>
          <ul>
            <li><strong>Same tutor</strong> can simplify parent updates and house rules — useful when both children are calm with that teacher.</li>
            <li><strong>Different tutors</strong> often fit better when one child needs Qaida patience and another needs Tajweed or light Hifz pace.</li>
            <li>Female-tutor preference can be requested per learner and remains subject to matching — see <a href="/female-quran-teacher-online">female Quran teacher online</a>.</li>
          </ul>
          <div class="gold-box">
            <strong>Honesty rule:</strong> Do not assume one tutor can cover every sibling at every level on demand. Matching confirms availability after your request.
          </div>

          <h2 id="schedule">A practical sibling schedule template</h2>
          <ol>
            <li>Place the younger or more restless child first when evenings are short.</li>
            <li>Keep a 10–15 minute buffer for bathroom, water, and mood reset.</li>
            <li>Label every slot in the family’s local timezone.</li>
            <li>Avoid stacking intensive plans for two children in the same weeknight block unless energy is proven.</li>
            <li>Use lighter frequency during exam weeks — see <a href="/blog/keeping-quran-classes-during-exams-and-holidays">exams and holidays continuity</a>.</li>
          </ol>
          <p>Frequency help: <a href="/blog/how-many-quran-classes-per-week">how many Quran classes per week</a> · <a href="/blog/how-long-should-online-quran-lessons-be">lesson length by age</a>.</p>

          <h2 id="home-echo">Home echo without sibling warfare</h2>
          <ul>
            <li>One child practises while the other is off-camera or in another room</li>
            <li>Praise effort privately — public comparisons poison motivation</li>
            <li>Keep each child’s weekly target on a sticky note, not a shared “who is ahead” chart</li>
          </ul>
          <p>Routine guide: <a href="/blog/quran-practice-routine-at-home-kids">Quran practice routine at home</a>.</p>

          <h2 id="booking">How to book two kids cleanly</h2>
          <p>Send one message that lists ages, current levels, preferred windows, and whether you want the same tutor. Book a trial for each child when levels differ. Trial is ${TRIAL.durationMinutes} minutes with no credit card. <a href="/free-quran-classes-online">Book free trials</a> · <a href="/online-quran-classes-for-kids">kids classes</a> · <a href="/pricing">pricing</a>.</p>

          <h2 id="faq">FAQ</h2>
          <details class="faq-acc"><summary>Should siblings share one online Quran lesson?<span>+</span></summary>
            <p>Only if ages and levels are genuinely close and both stay engaged. Most households get better results from separate one-to-one lessons with a short buffer between them.</p>
          </details>
          <details class="faq-acc"><summary>How do sibling discounts work at NoorPath?<span>+</span></summary>
            <p>Published discounts apply for multi-child households: ${FAMILY_DISCOUNTS.map((d) => `${d.siblings} (${d.discountPercent}%)`).join(", ")}. Confirm the active rate at checkout against the pricing page.</p>
          </details>
          <details class="faq-acc"><summary>Should siblings use the same Quran tutor?<span>+</span></summary>
            <p>Same tutor can simplify updates; different tutors often fit different levels better. Request what you need and confirm during matching.</p>
          </details>
          <details class="faq-acc"><summary>How do we book two kids without back-to-back burnout?<span>+</span></summary>
            <p>Add a buffer, put the higher-energy child first when evenings are short, and avoid stacking two intensive plans on the same weeknight until the routine is stable.</p>
          </details>
          <p>Sibling Quran success is an operations problem as much as a teaching problem — clear levels, kind scheduling, and honest pricing beat forcing two children into one rushed slot.</p>`,
  },

  "online-quran-classes-for-teenagers": {
    style: S,
    content: `<p><strong>Online Quran classes for teenagers</strong> need a different tone than kids’ Qaida games or adult beginner courses. Teens notice awkwardness, hate feeling “behind,” and often want dignity more than stickers. The right path is usually fluency and Tajweed first — with light Hifz only when foundations are stable.</p>

          <div class="highlight-box">
            <strong>Quick answer:</strong> Place the teen by listening, not by age. Most teens who paused years ago restart with reading fluency + core Tajweed, then optional short memorisation. Prefer respectful one-to-one lessons, clear goals, and a free <a href="/free-quran-classes-online">${TRIAL.durationMinutes}-minute trial</a> before paying for intensity.
          </div>

          <h2 id="first">What should a teenager learn first?</h2>
          <table class="np-table">
            <tr><th>Current reality</th><th>Usually start with</th></tr>
            <tr><td>Knows letters but reads slowly / guesses</td><td>Fluency + letter connection repair</td></tr>
            <tr><td>Reads continuously with many Tajweed gaps</td><td>Targeted Tajweed with short surah application</td></tr>
            <tr><td>Already fluent, wants memorisation</td><td>Light Hifz + heavy revision rules</td></tr>
            <tr><td>Skipped foundations entirely</td><td>Compressed Qaida bridge — without shame language</td></tr>
          </table>
          <p>Parent decision map: <a href="/blog/what-should-my-child-learn-first-in-quran">what should my child learn first</a> · <a href="/blog/difference-between-hifz-and-tajweed-classes">Hifz vs Tajweed</a>.</p>

          <h2 id="length">Lesson length and weekly rhythm for teens</h2>
          <ul>
            <li><strong>45 minutes</strong> often fits teens better than 30 when focus is present</li>
            <li><strong>2× per week</strong> beats a heroic 4× plan that dies after exams start</li>
            <li>Protect one non-negotiable slot; add intensity only after four stable weeks</li>
          </ul>
          <p>Published plans include Standard ($${PRICING_PLANS[1].monthlyPriceUsd}/mo, ${PRICING_PLANS[1].sessionsPerWeek}×/week) and Intensive options — see <a href="/pricing">pricing</a>. Length guide: <a href="/blog/how-long-should-online-quran-lessons-be">how long should online Quran lessons be</a>.</p>

          <h2 id="dignity">How to start without embarrassing a teen</h2>
          <ol>
            <li>Frame the trial as “checking fit,” not “catching up because you failed.”</li>
            <li>Let the teen speak first about goals (fluency for salah, Tajweed, Juz Amma).</li>
            <li>Avoid comparing them to younger siblings in the same message thread.</li>
            <li>Ask for a tutor style that is firm but respectful — not primary-school baby talk.</li>
            <li>Keep early home echo private and short.</li>
          </ol>
          <div class="gold-box">
            <strong>Do not promise:</strong> “Finish Hifz this year” or “sound like a Qari in 30 days.” Teens smell empty guarantees. Promise a clear next skill and honest feedback.
          </div>

          <h2 id="female">Female tutor and privacy preferences</h2>
          <p>Teens — especially sisters — may request a female tutor. Preferences are matched when available and confirmed after your request. Learn more: <a href="/female-quran-teacher-online">female Quran teacher online</a> · <a href="/quran-classes-for-sisters">Quran classes for sisters</a>.</p>

          <h2 id="devices">Teen-specific setup</h2>
          <ul>
            <li>Headphones reduce household noise and self-consciousness</li>
            <li>Camera on for mouth-shape correction when the teen consents and policy allows</li>
            <li>Phone notifications off for the lesson block</li>
            <li>Parent nearby for safeguarding with younger teens; more autonomy for older teens once trust is stable — see <a href="/safeguarding">safeguarding</a></li>
          </ul>

          <h2 id="goals">90-day goal examples (realistic)</h2>
          <ul>
            <li>Read short passages with fewer guessing pauses</li>
            <li>Apply 2–3 Tajweed rules consistently in known surahs</li>
            <li>Memorise a small set (for example selected short surahs) with weekly revision — not a race through Juz Amma</li>
          </ul>
          <p>Memorisation help: <a href="/blog/how-to-memorize-juz-amma">how to memorize Juz Amma</a>.</p>

          <h2 id="start">Start with dignity</h2>
          <p>Book a trial, state age and goals plainly, and ask for a respectful tutor match. <a href="/free-quran-classes-online">Free ${TRIAL.durationMinutes}-minute trial</a> · <a href="/online-quran-classes-for-kids">kids &amp; family pathways</a> · <a href="/one-on-one-quran-classes">one-on-one classes</a>.</p>

          <h2 id="faq">FAQ</h2>
          <details class="faq-acc"><summary>What should a teenager learn first if they skipped Qaida years?<span>+</span></summary>
            <p>Start with a calm placement listen. Many teens need a compressed foundation bridge into fluency — without childish framing — before Tajweed polish or Hifz.</p>
          </details>
          <details class="faq-acc"><summary>How long should online Quran lessons be for teenagers?<span>+</span></summary>
            <p>Often 45 minutes works well when attention is present. Begin with a sustainable weekly rhythm (commonly 2×) and increase only after consistency is proven.</p>
          </details>
          <details class="faq-acc"><summary>Can teens request a female Quran tutor?<span>+</span></summary>
            <p>Yes — female-tutor preference can be requested and is confirmed during matching subject to availability.</p>
          </details>
          <details class="faq-acc"><summary>How do we start without embarrassing a teen who feels behind?<span>+</span></summary>
            <p>Call it a fit check, let them set the goal language, avoid sibling comparisons, and choose a respectful tutor style. Focus on the next skill, not years “lost.”</p>
          </details>
          <p>Teenagers return to the Quran when the lesson protects their dignity. Clear placement, respectful teaching, and honest goals beat pressure dressed as piety.</p>`,
  },

  "keeping-quran-classes-during-exams-and-holidays": {
    style: S,
    content: `<p>Parents often ask whether they should pause <strong>Quran classes during exams and school holidays</strong>. The enterprise answer is rarely “stop everything” or “keep the intensive plan no matter what.” Protect a lighter continuity habit so restarting later does not feel like beginning again from zero.</p>

          <div class="highlight-box">
            <strong>Quick answer:</strong> In exam weeks, reduce frequency or length rather than cancelling the habit entirely. In holidays, choose either gentle maintenance or a planned intensive — not accidental drift. Confirm make-up and pause rules in writing before you need them, and use a free <a href="/free-quran-classes-online">${TRIAL.durationMinutes}-minute trial</a> when restarting after a long gap.
          </div>

          <h2 id="exam-week">Exam week — pause or protect?</h2>
          <table class="np-table">
            <tr><th>Situation</th><th>Better move</th></tr>
            <tr><td>Heavy exam cluster (few days)</td><td>Keep one short live touchpoint or convert to revision-only</td></tr>
            <tr><td>Multi-week exam season</td><td>Drop to 1×/week maintenance; pause Intensive temporarily</td></tr>
            <tr><td>Learner already overwhelmed / ill</td><td>Pause with a written restart date</td></tr>
            <tr><td>Quran is the calm anchor for the child</td><td>Keep the slot; shorten home echo</td></tr>
          </table>
          <p>Frequency logic: <a href="/blog/how-many-quran-classes-per-week">how many Quran classes per week</a>. Busy-household tips: <a href="/blog/quran-lessons-for-busy-parents">Quran lessons for busy parents</a>.</p>

          <h2 id="make-ups">Make-up rules to ask in writing</h2>
          <ul>
            <li>How much notice is required to reschedule?</li>
            <li>Are make-ups offered for exam conflicts, or only for tutor-side issues?</li>
            <li>Do unused lessons roll, expire, or convert?</li>
            <li>What is the pause / cancel notice period before the next billing date?</li>
          </ul>
          <div class="gold-box">
            <strong>Rule:</strong> If make-up policy is only “we’ll see,” expect friction later. Get the rule before exam season starts. Booking questions: <a href="/blog/questions-to-ask-before-booking-a-quran-tutor">questions to ask before booking</a>.
          </div>

          <h2 id="holidays">School holidays vs summer “camp” intensives</h2>
          <ul>
            <li><strong>Maintenance holidays:</strong> keep the usual tutor and a lighter rhythm so skills do not fade</li>
            <li><strong>Planned intensives:</strong> increase sessions for a defined window with a clear end date — see <a href="/blog/online-summer-quran-camp-for-kids">online summer Quran camp</a></li>
            <li><strong>Travel weeks:</strong> decide in advance whether to pause, shift timezone, or keep short revision calls — Gulf/expat notes in <a href="/blog/quran-classes-for-expat-families">Quran classes for expat families</a></li>
          </ul>
          <p>Holidays without a plan often become a silent three-month gap. Write the plan on the family calendar.</p>

          <h2 id="restart">Restarting after a long break</h2>
          <ol>
            <li>Do not assume the old page number is still the right level — request a short placement listen</li>
            <li>Restart on a lighter plan than the one that burned out</li>
            <li>Spend the first two weeks on confidence and accuracy, not speed</li>
            <li>Re-establish home echo before adding Intensive frequency</li>
          </ol>
          <p>If the tutor fit changed during the break, rematch thoughtfully: <a href="/blog/when-to-change-your-online-quran-tutor">when to change your online Quran tutor</a>.</p>

          <h2 id="plans">Which published plan fits which season?</h2>
          <table class="np-table">
            <tr><th>Season</th><th>Often fits</th></tr>
            <tr><td>Exam / illness</td><td>Starter-style maintenance ($${PRICING_PLANS[0].monthlyPriceUsd}/mo class of rhythm) or temporary pause</td></tr>
            <tr><td>Normal term</td><td>Standard ($${PRICING_PLANS[1].monthlyPriceUsd}/mo) for steady progress</td></tr>
            <tr><td>Planned holiday push</td><td>Short Intensive window ($${PRICING_PLANS[2].monthlyPriceUsd}/mo) with an end date</td></tr>
          </table>
          <p>Always verify current USD details on <a href="/pricing">pricing</a>. Sibling households: <a href="/blog/sibling-online-quran-classes-scheduling">sibling scheduling</a>.</p>

          <h2 id="start">Keep the thread alive</h2>
          <p>Message your academy with exam dates early, choose maintenance or pause in writing, and restart with a trial if the gap was long. <a href="/free-quran-classes-online">Free trial</a> · <a href="/online-quran-classes-for-kids">kids classes</a> · <a href="/contact">contact</a>.</p>

          <h2 id="faq">FAQ</h2>
          <details class="faq-acc"><summary>Should we pause Quran during exam week?<span>+</span></summary>
            <p>Often reduce frequency or shorten sessions rather than full pause. Pause fully when the learner is overwhelmed or ill — and set a restart date in writing.</p>
          </details>
          <details class="faq-acc"><summary>What make-up rules should we ask about?<span>+</span></summary>
            <p>Ask about notice periods, whether exam conflicts qualify, whether lessons roll or expire, and pause/cancel terms before the next billing date.</p>
          </details>
          <details class="faq-acc"><summary>How do holidays differ from a summer camp intensive?<span>+</span></summary>
            <p>Holidays can be gentle maintenance with the same tutor. A camp-style intensive is a planned higher-frequency window with a clear end — not accidental overbooking.</p>
          </details>
          <details class="faq-acc"><summary>How do we restart after a long break without starting from zero?<span>+</span></summary>
            <p>Request a fresh placement listen, restart lighter than before, rebuild confidence for two weeks, then increase frequency only when the habit is stable again.</p>
          </details>
          <p>Continuity beats intensity theatre. A thin golden thread through exams and holidays protects years of Quran learning better than stop-start guilt.</p>`,
  },
};
