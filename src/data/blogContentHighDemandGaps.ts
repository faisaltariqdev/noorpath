/**
 * High-demand / lower-competition gap fills from Priority-A SEO research.
 * Intents: lesson frequency, lesson length by age, curriculum order ("learn first").
 * Commercial bridges to pricing/trial — no invented outcomes or medical claims.
 */

import { PRICING_PLANS, TRIAL } from "@/lib/academyFacts";

const starter = PRICING_PLANS[0];
const standard = PRICING_PLANS[1];
const intensive = PRICING_PLANS[2];

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
  .stat-row { display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px; margin: 24px 0; }
  .stat-pill { text-align: center; background: rgba(10,110,79,.05); border-radius: 12px; padding: 14px 8px; }
  .stat-pill strong { display: block; color: var(--emerald); font-size: 1.05rem; }
  .stat-pill span { font-size: .72rem; color: var(--muted); }
  @media (max-width: 576px) { .np-table { font-size: .82rem; } .stat-row { grid-template-columns: 1fr; } }`;

export const highDemandGapBlogContent: Record<string, { style: string; content: string }> = {
  "how-many-quran-classes-per-week": {
    style: S,
    content: `<p>Parents searching <strong>how many Quran classes per week</strong> usually want a decision rule — not a sales slogan. The honest answer: <strong>most children progress well with 1–2 live one-to-one lessons per week</strong> plus short daily home practice. Hifz-heavy goals may need more live time. The right number is the highest frequency your calendar can keep for three months without burnout.</p>

          <div class="highlight-box">
            <strong>Quick answer:</strong> Start with <strong>1×/week</strong> if the household is new to online lessons or energy is low; choose <strong>2×/week</strong> for steady reading/Tajweed progress; reserve <strong>3–4×/week</strong> for intensive Hifz only when revision capacity exists. Compare published plans on <a href="/pricing">pricing</a>, then confirm fit in a <a href="/free-quran-classes-online">free ${TRIAL.durationMinutes}-minute trial</a>.
          </div>

          <div class="stat-row">
            <div class="stat-pill"><strong>1× / week</strong><span>${starter.name}: ${starter.sessionsPerWeek}× · ${starter.sessionMinutes} min · $${starter.monthlyPriceUsd}/mo</span></div>
            <div class="stat-pill"><strong>2× / week</strong><span>${standard.name}: ${standard.sessionsPerWeek}× · ${standard.sessionMinutes} min · $${standard.monthlyPriceUsd}/mo</span></div>
            <div class="stat-pill"><strong>4× / week</strong><span>${intensive.name}: ${intensive.sessionsPerWeek}× · ${intensive.sessionMinutes} min · $${intensive.monthlyPriceUsd}/mo</span></div>
          </div>

          <h2 id="decision-rule">The decision rule that beats “as many as possible”</h2>
          <p>Frequency fails when parents buy intensity they cannot attend. A missed intensive package teaches the child that Quran is optional chaos. A lighter package kept every week teaches that Quran is a fixed appointment — like school.</p>
          <p>Ask three questions before you choose:</p>
          <ol>
            <li>Can we protect the same weekday clock times for the next 12 weeks?</li>
            <li>Can someone sit nearby for younger learners and run a 10-minute home echo on most other days?</li>
            <li>Is the goal foundations (Qaida/reading), accuracy (Tajweed), or memorisation with revision (Hifz)?</li>
          </ol>
          <p>If any answer is shaky, start lower. You can increase after a successful month. See also <a href="/blog/quran-lessons-for-busy-parents">Quran lessons for busy parents</a>.</p>

          <h2 id="by-goal">How many classes per week by learning goal</h2>
          <table class="np-table">
            <tr><th>Goal</th><th>Typical live frequency</th><th>Home practice</th><th>Risk if too high</th></tr>
            <tr><td><strong>Noorani Qaida / beginners</strong></td><td>1–2× / week</td><td>10–15 min most days</td><td>Fatigue; guessing letters to “keep up”</td></tr>
            <tr><td><strong>Fluent reading / Tajweed</strong></td><td>2× / week</td><td>Short review of weak rules</td><td>Skipping revision to rush new pages</td></tr>
            <tr><td><strong>Early Hifz</strong></td><td>2–3× / week</td><td>Daily Sabaq + Sabqi habit</td><td>New pages without Manzil repair</td></tr>
            <tr><td><strong>Intensive Hifz</strong></td><td>3–4× / week</td><td>Structured revision blocks</td><td>Burnout; school conflict; tutor churn</td></tr>
            <tr><td><strong>Adult returner</strong></td><td>1–2× / week</td><td>Short focused drills</td><td>Shame spiral from over-ambition</td></tr>
          </table>
          <p>Hifz frequency is not the same as reading frequency. Memorisation fails without revision capacity — not because the child “needs more classes.” Read <a href="/blog/online-hifz-classes-for-kids">online Hifz classes for kids</a> and <a href="/blog/difference-between-hifz-and-tajweed-classes">Hifz vs Tajweed</a>.</p>

          <h2 id="twice-weekly">Why twice-weekly is the sweet spot for many families</h2>
          <p>Two live lessons per week leave gaps short enough for retention and long enough for school life. The NoorPath <strong>${standard.name}</strong> plan is built around ${standard.sessionsPerWeek} sessions per week (${standard.sessionsPerMonth}/month) at ${standard.sessionMinutes} minutes — a common steady rhythm for reading and Tajweed.</p>
          <p>Twice-weekly works when:</p>
          <ul>
            <li>Home echo happens on at least three non-lesson days</li>
            <li>The child is not already overloaded with evening tuition</li>
            <li>Parents can keep both slots across exam weeks (shorten home practice, keep live touchpoints)</li>
          </ul>
          <p>It fails when both slots are late at night, or when siblings share one exhausted device slot back-to-back without buffers.</p>

          <h2 id="once-weekly">When one class per week is the smart start</h2>
          <p>One weekly lesson is not “not serious.” It is often the correct on-ramp for:</p>
          <ul>
            <li>First-time online learners testing attention and audio quality</li>
            <li>Young children with short focus windows</li>
            <li>Busy households rebuilding consistency after failed intensive packages</li>
            <li>Adults returning after years away who need confidence before intensity</li>
          </ul>
          <p>The ${starter.name} plan publishes ${starter.sessionsPerWeek}× weekly (${starter.sessionsPerMonth} sessions/month) at ${starter.sessionMinutes} minutes for $${starter.monthlyPriceUsd} USD. Pair it with honest home practice or progress stalls — live time alone cannot carry the week.</p>

          <h2 id="intensive">When 3–4 classes per week makes sense</h2>
          <p>Higher frequency suits learners with a clear Hifz pathway, stable reading foundations, and a household that can protect revision. The ${intensive.name} plan publishes ${intensive.sessionsPerWeek}× weekly (${intensive.sessionsPerMonth}/month) at ${intensive.sessionMinutes} minutes for $${intensive.monthlyPriceUsd} USD.</p>
          <div class="gold-box">
            <strong>Warning:</strong> Do not buy intensive frequency to relieve parental guilt. If the child already resists short lessons, more live hours usually worsen dread. Fix placement, tutor rapport and session length first — then scale frequency.
          </div>

          <h2 id="home-practice">Frequency without home practice is theatre</h2>
          <p>A useful weekly pattern:</p>
          <ul>
            <li>Live lessons: fixed weekdays</li>
            <li>Home echo: 10 minutes — point, listen once if a model exists, one calm attempt</li>
            <li>Parent log: unclear letters for the tutor (do not invent sounds from English spelling)</li>
          </ul>
          <p>Use free recognition tools on the <a href="/noorani-qaida">Interactive Noorani Qaida</a> hub between lessons. Soft practice only. For a template, see <a href="/blog/quran-practice-routine-at-home-kids">Quran practice routine at home for kids</a>.</p>

          <h2 id="age">Age and energy change the number</h2>
          <p>Ages 4–5 often need shorter lessons more than more lessons. Ages 6–10 often thrive at 2×/week. Teens may prefer 1–2×/week with clearer goals (fluency, Tajweed, selected Hifz) rather than vague “more Quran.” Adults usually win with 1–2×/week and sleep-friendly timing.</p>
          <p>Related: <a href="/blog/how-long-should-online-quran-lessons-be">how long should online Quran lessons be</a> and <a href="/blog/best-age-to-start-quran-learning">best age to start Quran learning</a>.</p>

          <h2 id="switch">How to change frequency without chaos</h2>
          <ol>
            <li>Run the current plan for at least 3–4 weeks after a successful trial</li>
            <li>Review attendance, home echo honesty, and tutor notes</li>
            <li>Increase only one notch (1→2 or 2→3/4) — not from starter to intensive overnight</li>
            <li>Decrease immediately if dread, tears or repeated no-shows appear</li>
          </ol>
          <p>Ask support about plan changes through published channels. Confirm tutor availability when you request a higher frequency — slots are matched, not guaranteed from a webpage.</p>

          <h2 id="start">Start this week</h2>
          <ol>
            <li>Pick the lightest published plan you can keep for 12 weeks</li>
            <li>Write two preferred weekday windows</li>
            <li>Book a <a href="/free-quran-classes-online">free trial</a> and ask for placement + frequency advice</li>
            <li>Protect a short daily home echo from day one</li>
          </ol>
          <p>Explore <a href="/online-quran-classes">online Quran classes</a>, <a href="/one-on-one-quran-classes">one-on-one Quran classes</a>, and <a href="/pricing">current pricing</a>.</p>

          <h2 id="faq">FAQ</h2>
          <details class="faq-acc"><summary>How many Quran classes per week are enough for kids?<span>+</span></summary>
            <p>Most children do well with 1–2 live one-to-one lessons per week plus short daily home practice. Increase only when attendance and revision are already stable.</p>
          </details>
          <details class="faq-acc"><summary>Is twice weekly better than daily classes?<span>+</span></summary>
            <p>For many families, twice weekly live lessons with daily short practice beats daily long live sessions that cause fatigue and cancellations. Daily live intensity is rarely sustainable for school-age children.</p>
          </details>
          <details class="faq-acc"><summary>How many classes per week for Hifz?<span>+</span></summary>
            <p>Hifz usually needs more live touchpoints and daily revision than reading alone — often 2–4×/week depending on load. New pages without revision capacity is the common failure mode.</p>
          </details>
          <details class="faq-acc"><summary>Can we start with one class and upgrade later?<span>+</span></summary>
            <p>Yes. Starting lighter is often wiser. Confirm plan-change and tutor-availability rules after your trial before you assume an instant upgrade path.</p>
          </details>
          <p>The winning frequency is the one still on your calendar in month three. Choose sustainability first, then intensity — and let honest placement guide the rest.</p>`,
  },

  "how-long-should-online-quran-lessons-be": {
    style: S,
    content: `<p>Parents asking <strong>how long should online Quran lessons be</strong> are usually fighting Zoom fatigue, not “laziness.” The useful answer: <strong>match lesson length to attention and goal</strong> — commonly about <strong>20–30 minutes for younger beginners</strong> and <strong>30–45 minutes for steady school-age readers</strong>, with longer blocks reserved for older learners and intensive Hifz who can still focus.</p>

          <div class="highlight-box">
            <strong>Quick answer:</strong> Prefer the shortest live block the child can finish willingly. NoorPath publishes plans with ${starter.sessionMinutes}-, ${standard.sessionMinutes}- and ${intensive.sessionMinutes}-minute sessions — compare on <a href="/pricing">pricing</a> and test fit in a free <a href="/free-quran-classes-online">${TRIAL.durationMinutes}-minute trial</a>. Length without home practice still underperforms.
          </div>

          <h2 id="by-age">Recommended online Quran lesson length by age</h2>
          <table class="np-table">
            <tr><th>Age / learner</th><th>Typical live length</th><th>Why</th></tr>
            <tr><td><strong>Ages 4–5</strong></td><td>15–25 minutes</td><td>Short attention; success = finishing calm</td></tr>
            <tr><td><strong>Ages 6–8</strong></td><td>25–35 minutes</td><td>Enough for letters/joins + review</td></tr>
            <tr><td><strong>Ages 9–12</strong></td><td>30–45 minutes</td><td>Reading/Tajweed blocks with revision</td></tr>
            <tr><td><strong>Teens</strong></td><td>30–45 minutes</td><td>Focus on quality goals, not marathon guilt</td></tr>
            <tr><td><strong>Adults</strong></td><td>30–45 minutes</td><td>Respect work fatigue; consistency &gt; hero sessions</td></tr>
            <tr><td><strong>Intensive Hifz (ready)</strong></td><td>45–60 minutes</td><td>Only if revision capacity exists</td></tr>
          </table>
          <p>These are planning ranges, not medical prescriptions. If a child melts down at minute 18 every week, shorten before buying a longer package. Related: <a href="/blog/online-quran-classes-for-shy-kids">online Quran classes for shy kids</a>.</p>

          <h2 id="published">How NoorPath session lengths map to plans</h2>
          <ul>
            <li><strong>${starter.name}</strong> — ${starter.sessionMinutes} minutes · ${starter.sessionsPerWeek}×/week · $${starter.monthlyPriceUsd} USD/month</li>
            <li><strong>${standard.name}</strong> — ${standard.sessionMinutes} minutes · ${standard.sessionsPerWeek}×/week · $${standard.monthlyPriceUsd} USD/month</li>
            <li><strong>${intensive.name}</strong> — ${intensive.sessionMinutes} minutes · ${intensive.sessionsPerWeek}×/week · $${intensive.monthlyPriceUsd} USD/month</li>
          </ul>
          <p>Choose length and frequency together. A 60-minute lesson four times weekly is a different product from a 30-minute weekly start. See <a href="/blog/how-many-quran-classes-per-week">how many Quran classes per week</a>.</p>

          <h2 id="structure">What should happen inside the minutes</h2>
          <p>A productive 30-minute kids lesson often looks like:</p>
          <ol>
            <li>2 minutes — settle, greeting, yesterday’s target recall</li>
            <li>15–20 minutes — new or repaired material with live correction</li>
            <li>5 minutes — consolidate what succeeded</li>
            <li>3 minutes — parent note: home echo target for the week</li>
          </ol>
          <p>Longer lessons need micro-breaks for younger children: stand, sip water, stretch — then return. Movement is a tool, not misbehaviour, when it helps attention return.</p>

          <h2 id="too-long">Signs the lesson is too long</h2>
          <ul>
            <li>Accuracy collapses in the final third every session</li>
            <li>Child begs to end early or invents bathroom exits</li>
            <li>Parent spends the lesson policing posture instead of listening</li>
            <li>Homework fights the same evening slot until tears</li>
          </ul>
          <p>Shorten the live block and keep frequency, or move the slot earlier. Do not “push through” dread for weeks — it trains avoidance.</p>

          <h2 id="too-short">Signs the lesson is too short</h2>
          <ul>
            <li>Tutor never reaches revision because settling eats the clock</li>
            <li>Child is still engaged when the call ends</li>
            <li>Progress stalls despite daily home practice</li>
          </ul>
          <p>Then trial a modestly longer block — or add a second weekly touchpoint — after matching confirms availability.</p>

          <h2 id="screen">Screen time without Quran guilt</h2>
          <p>Online Quran is purposeful screen use, but it still costs attention. Rules that help:</p>
          <ul>
            <li>Device ready five minutes early; no other tabs</li>
            <li>Shared family space for young learners</li>
            <li>No back-to-back entertainment YouTube immediately before class</li>
            <li>End on a win, then leave the screen</li>
          </ul>
          <p>Safeguarding and observation expectations: <a href="/safeguarding">safeguarding</a>.</p>

          <h2 id="trial">Use the free trial to measure length fit</h2>
          <p>During the ${TRIAL.durationMinutes}-minute free trial, watch minute-by-minute energy. Note when focus peaks and when it drops. Tell the matcher what you observed when choosing a continuing plan. No credit card is required for the published trial.</p>

          <h2 id="faq">FAQ</h2>
          <details class="faq-acc"><summary>How long should online Quran lessons be for a 6-year-old?<span>+</span></summary>
            <p>Often about 25–35 minutes if the child can finish calmly. Prefer finishing willing over filling a longer package.</p>
          </details>
          <details class="faq-acc"><summary>Are 60-minute Quran classes better?<span>+</span></summary>
            <p>Only when the learner can sustain attention and the goal needs that block (often intensive Hifz). Longer is not automatically better for beginners.</p>
          </details>
          <details class="faq-acc"><summary>Can we split a long lesson into two shorter ones?<span>+</span></summary>
            <p>Sometimes two shorter weekly lessons beat one long session. Confirm frequency options on published plans and tutor matching — availability is confirmed after your request.</p>
          </details>
          <details class="faq-acc"><summary>Does lesson length include settling time?<span>+</span></summary>
            <p>Practically yes. Device delays eat learning minutes. Prepare early so the paid block is mostly teaching.</p>
          </details>
          <p>Ideal lesson length is the longest block your learner can still love. Test it live, protect home echoes, and scale only after calm consistency.</p>`,
  },

  "what-should-my-child-learn-first-in-quran": {
    style: S,
    content: `<p>Parents asking <strong>what should my child learn first in Quran</strong> are usually stuck between relatives (“start Hifz”), apps (“memorise Juz Amma now”), and fear of wasting months. The clear order for most children: <strong>Arabic letter recognition and joining (often via Noorani Qaida) → short accurate reading → Tajweed refinement → memorisation with revision</strong>. Skipping foundations creates fragile fluency that looks impressive until a new page appears.</p>

          <div class="highlight-box">
            <strong>Quick answer:</strong> If letters and short vowels are unstable, start with <a href="/noorani-qaida">Noorani Qaida</a> / beginner reading — not Hifz. If continuous reading exists, prioritise accuracy and fluency before heavy memorisation. Confirm placement in a <a href="/free-quran-classes-online">free trial</a>; see <a href="/online-quran-classes-for-kids">online Quran classes for kids</a>.
          </div>

          <h2 id="order">The learning order that prevents expensive rework</h2>
          <table class="np-table">
            <tr><th>Stage</th><th>What “ready” looks like</th><th>What to request</th></tr>
            <tr><td><strong>1. Letters &amp; joins</strong></td><td>Recognises shapes; blends short vowels without wild guessing</td><td>Noorani Qaida / beginner track</td></tr>
            <tr><td><strong>2. Continuous reading</strong></td><td>Reads simple lines with fewer freezes</td><td>Quran reading fluency</td></tr>
            <tr><td><strong>3. Tajweed focus</strong></td><td>Can already read; needs rule application and correction</td><td>Tajweed-focused lessons</td></tr>
            <tr><td><strong>4. Hifz</strong></td><td>Reading stable enough to memorise without inventing words</td><td>Hifz with Sabqi/Manzil discipline</td></tr>
          </table>
          <p>This order is pedagogical, not a claim that every child takes the same number of months. Timelines depend on age, frequency and home practice — see <a href="/blog/how-long-does-noorani-qaida-take">how long Noorani Qaida takes</a>.</p>

          <h2 id="not-first">What usually should NOT come first</h2>
          <ul>
            <li><strong>Full Hifz marketing</strong> before the child can decode unfamiliar lines</li>
            <li><strong>Advanced Tajweed jargon</strong> before letter stability</li>
            <li><strong>Racing Juz Amma by ear only</strong> with no reading path (ear memory helps salah but hides reading gaps)</li>
            <li><strong>Multiple apps + two academies</strong> teaching conflicting methods in the same week</li>
          </ul>
          <div class="gold-box">
            <strong>Relative pressure:</strong> “Start memorising now” is often social anxiety. A calm foundation is not delay — it is protection. Explain the readiness checklist once; then protect the child’s confidence.
          </div>

          <h2 id="age-first">What to learn first by age band</h2>
          <h3>Ages 4–5</h3>
          <p>Short, playful letter recognition and listening. Sessions should end while the child is still willing. Heavy Hifz targets at this age often create dread. See <a href="/blog/best-age-to-start-quran-learning">best age to start Quran learning</a>.</p>
          <h3>Ages 6–8</h3>
          <p>Noorani Qaida or equivalent foundations, then short surahs with accurate reading. Home practice should be tiny and daily.</p>
          <h3>Ages 9–12</h3>
          <p>Many are ready for fluency + early Tajweed; some are ready for structured Hifz if reading is honest. Assess — do not assume.</p>
          <h3>Teens</h3>
          <p>Teens may refuse “baby Qaida” branding even when they need foundations. Ask for respectful adult-framed beginner placement when required, or Tajweed repair if they already read.</p>

          <h2 id="salah">Salah surahs vs reading foundations</h2>
          <p>Families often want short surahs for prayer quickly. That goal can sit beside foundations if the tutor plans carefully: a small set of surahs for salah plus letter work — not a fake choice between “deen” and “method.” Ear-only memorisation without reading should be labelled honestly so gaps are not hidden.</p>

          <h2 id="parents-no-arabic">If parents do not speak Arabic</h2>
          <p>You can still start correctly. Your job is routine, device readiness and logging unclear letters — not inventing makharij from English spelling. Read <a href="/blog/parents-dont-speak-arabic-child-learn-quran">parents don’t speak Arabic — child learn Quran</a>.</p>

          <h2 id="female">Daughters and tutor preference</h2>
          <p>Learning order does not change with gender, but households may request a female tutor. State preference when booking; availability is confirmed after matching — <a href="/female-quran-teacher-online">female Quran teacher online</a>.</p>

          <h2 id="placement">How placement should work in the first trial</h2>
          <ol>
            <li>Child reads or attempts letters without heavy prompting</li>
            <li>Tutor notes strengths and fragile spots</li>
            <li>Parent hears a clear next-step recommendation (Qaida vs reading vs Tajweed vs Hifz)</li>
            <li>Household chooses a published frequency/length they can keep</li>
          </ol>
          <p>Pair with <a href="/blog/how-many-quran-classes-per-week">how many Quran classes per week</a> and <a href="/blog/how-long-should-online-quran-lessons-be">lesson length guidance</a>.</p>

          <h2 id="home">First-week home targets (keep tiny)</h2>
          <ul>
            <li>One letter group or one short line — not five new goals</li>
            <li>10 minutes most days</li>
            <li>Stop while goodwill remains</li>
            <li>Free soft practice: <a href="/noorani-qaida">Interactive Noorani Qaida</a> / <a href="/noorani-qaida/games">games</a></li>
          </ul>

          <h2 id="start">Start this week</h2>
          <ol>
            <li>Write what your child can do today in one honest paragraph</li>
            <li>Ignore course labels until a tutor hears them</li>
            <li>Book a <a href="/free-quran-classes-online">free trial</a> and ask “what should we learn first?”</li>
            <li>Protect a short daily echo after matching</li>
          </ol>
          <p>Also useful: <a href="/blog/how-to-teach-quran-to-kids">how to teach Quran to kids</a> and <a href="/pricing">pricing plans</a>.</p>

          <h2 id="faq">FAQ</h2>
          <details class="faq-acc"><summary>Should my child learn Juz Amma first?<span>+</span></summary>
            <p>Short surahs help salah, but if letter reading is weak, pair surah goals with foundations. Ear-only Juz Amma can hide reading gaps.</p>
          </details>
          <details class="faq-acc"><summary>Should Tajweed come before Noorani Qaida?<span>+</span></summary>
            <p>Usually no. Tajweed rules need a stable reading base. Beginners typically start with letters and joins first.</p>
          </details>
          <details class="faq-acc"><summary>When should Hifz start?<span>+</span></summary>
            <p>When reading is stable enough that memorisation does not become guessing, and the household can protect daily revision — not only new pages.</p>
          </details>
          <details class="faq-acc"><summary>What if relatives push Hifz immediately?<span>+</span></summary>
            <p>Share the readiness checklist from this guide and the trial tutor’s recommendation. Protect the child’s confidence over social timelines.</p>
          </details>
          <p>What your child should learn first is whatever makes the next page honest. Foundations first is not slow — it is how accurate readers are built.</p>`,
  },
};
