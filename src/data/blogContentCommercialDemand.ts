/**
 * High-demand commercial parent topics from online Quran academy search intent:
 * starting Hifz for kids + online Tajweed classes for kids.
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

export const commercialDemandBlogContent: Record<string, { style: string; content: string }> = {
  "how-to-start-hifz-for-kids": {
    style: S,
    content: `<p>Parents searching <strong>how to start Hifz for kids</strong> usually want a start line — not a viral “finish the Quran in two years” promise. Hifz begins when reading is stable enough to carry memorisation, and when the family can protect revision — not only new pages.</p>

          <div class="highlight-box">
            <strong>Quick answer:</strong> Start Hifz after the child can read short passages with reasonable fluency and basic Tajweed awareness. Begin tiny (lines, not pages), build a sabaq + revision habit, and test tutor fit with a free <a href="/free-quran-classes-online">${TRIAL.durationMinutes}-minute trial</a>. Also read <a href="/blog/online-hifz-classes-for-kids">online Hifz classes for kids</a> and <a href="/blog/difference-between-hifz-and-tajweed-classes">Hifz vs Tajweed</a>.
          </div>

          <h2 id="ready">Is my child ready to start Hifz?</h2>
          <table class="np-table">
            <tr><th>Ready signals</th><th>Wait / strengthen first</th></tr>
            <tr><td>Reads continuously without constant guessing</td><td>Still letter-by-letter decoding only</td></tr>
            <tr><td>Accepts correction without shutdown</td><td>Every correction becomes a fight</td></tr>
            <tr><td>Can revise yesterday’s line with help</td><td>New lines vanish within hours with no review system</td></tr>
            <tr><td>Family can protect daily short revision</td><td>Schedule only allows rare weekend bursts</td></tr>
          </table>
          <p>If Qaida/fluency is incomplete, start there: <a href="/blog/when-child-ready-qaida-to-quran">when a child is ready from Qaida to Quran</a> · <a href="/blog/what-should-my-child-learn-first-in-quran">what to learn first</a>.</p>

          <h2 id="first-30">First 30 days — a realistic start plan</h2>
          <ol>
            <li><strong>Week 1:</strong> placement listen + choose a tiny daily target (even 1–2 lines)</li>
            <li><strong>Week 2:</strong> same target + mandatory revision of everything new</li>
            <li><strong>Week 3:</strong> slight increase only if retention is clean</li>
            <li><strong>Week 4:</strong> review the system with the tutor — not only “pages done”</li>
          </ol>
          <div class="gold-box">
            <strong>Do not promise:</strong> full Quran timelines, “photographic memory” claims, or punishment-based speed. Retention research and lived practice both favour steady revision — see <a href="/blog/hifz-revision-schedule">Hifz revision schedule</a>.
          </div>

          <h2 id="system">The three-part Hifz habit (keep it simple)</h2>
          <ul>
            <li><strong>New lesson (sabaq):</strong> small enough to perfect</li>
            <li><strong>Recent revision:</strong> yesterday / this week</li>
            <li><strong>Older rotation:</strong> previously memorised portions on a cycle</li>
          </ul>
          <p>Juz Amma starters: <a href="/blog/how-to-memorize-juz-amma">how to memorize Juz Amma</a>. Longer timelines context: <a href="/blog/how-long-to-memorize-quran">how long to memorize Quran</a>.</p>

          <h2 id="frequency">How many classes per week to start?</h2>
          <p>Many families begin with <strong>2–3 live sessions</strong> plus short daily home revision. Jumping to Intensive ($${PRICING_PLANS[2].monthlyPriceUsd}/mo class of rhythm) before habits exist often creates burnout. Published plans: <a href="/pricing">pricing</a>. Frequency help: <a href="/blog/how-many-quran-classes-per-week">classes per week</a>.</p>

          <h2 id="home">Parent role at home (15 minutes or less)</h2>
          <ul>
            <li>Listen to today’s line without turning it into a lecture</li>
            <li>Keep one quiet corner and the same mushaf edition</li>
            <li>Celebrate accurate revision more than “new pages”</li>
            <li>Protect sleep — tired memorisation is fragile</li>
          </ul>

          <h2 id="start">Start with a placement trial</h2>
          <p>Tell the academy the child’s reading level and that you want a Hifz-readiness check, not a sales pitch. Trial is ${TRIAL.durationMinutes} minutes with no credit card. <a href="/free-quran-classes-online">Book a free Hifz readiness trial</a> · <a href="/hifz-quran-online">explore our online Hifz memorisation program</a> · <a href="/online-quran-classes-for-kids">view kids Quran courses</a>.</p>

          <h2 id="faq">FAQ</h2>
          <details class="faq-acc"><summary>What age should a child start Hifz?<span>+</span></summary>
            <p>Age alone is not enough. Start when reading fluency, emotional readiness, and a daily revision habit are realistic — often after solid Qaida/reading foundations.</p>
          </details>
          <details class="faq-acc"><summary>Should Tajweed come before Hifz?<span>+</span></summary>
            <p>Basic correct reading should come first. Heavy Tajweed polish can grow alongside early Hifz, but memorising major errors is expensive to undo.</p>
          </details>
          <details class="faq-acc"><summary>How much should a beginner memorise daily?<span>+</span></summary>
            <p>Start tiny — lines that can be revised cleanly. Increase only when retention stays strong for a week or more.</p>
          </details>
          <details class="faq-acc"><summary>Can kids start Hifz online?<span>+</span></summary>
            <p>Yes, when lessons are live one-to-one with clear revision homework and parent support at home. Test fit with a trial before paying for intensity.</p>
          </details>
          <p>Hifz starts small, honest, and revisable. The families who finish portions are usually the ones who protected revision — not the ones who bought the biggest promise.</p>`,
  },

  "online-tajweed-classes-for-kids": {
    style: S,
    content: `<p><strong>Online Tajweed classes for kids</strong> are among the highest-intent searches parents make after “online Quran classes” — because families want correct sound, not only page-turning. Live one-to-one correction beats silent apps when makharij and rules must be heard.</p>

          <div class="highlight-box">
            <strong>Quick answer:</strong> Choose live online Tajweed with a child-experienced tutor, short lessons, and rules applied to real surahs — not theory dumps. Start with a free <a href="/free-quran-classes-online">${TRIAL.durationMinutes}-minute trial</a>, and use <a href="/blog/tajweed-rules-complete-guide">Tajweed rules guide</a> as a parent reference, not a replacement for listening.
          </div>

          <h2 id="why-live">Why live online Tajweed beats DIY for most kids</h2>
          <table class="np-table">
            <tr><th>Format</th><th>Strength</th><th>Limit</th></tr>
            <tr><td>Live 1-to-1 online</td><td>Immediate sound correction + rapport</td><td>Needs a protected weekly slot</td></tr>
            <tr><td>Pre-recorded only</td><td>Cheap replay</td><td>Cannot hear <em>this</em> child’s error</td></tr>
            <tr><td>App drills alone</td><td>Fun repetition</td><td>May reinforce wrong mouth shapes</td></tr>
          </table>
          <p>Comparison depth: <a href="/blog/live-online-quran-tutor-vs-prerecorded-courses">live tutor vs pre-recorded</a> · <a href="/blog/tajweed-learning-format-comparison">Tajweed format comparison</a>.</p>

          <h2 id="order">What kids should learn first in Tajweed</h2>
          <ol>
            <li>Clear letter sounds (makharij) — especially hard letters</li>
            <li>Basic elongation and stopping that change meaning</li>
            <li>Noon/meem rules introduced gently with examples</li>
            <li>Application inside short surahs the child already knows</li>
          </ol>
          <p>Hard letters help: <a href="/blog/hard-arabic-letters-for-kids-makharij">hard Arabic letters for kids</a>. If letters are still unstable, delay heavy rule names: <a href="/blog/what-should-my-child-learn-first-in-quran">what to learn first</a>.</p>

          <h2 id="length">Lesson length and weekly plan</h2>
          <ul>
            <li>Ages ~5–8: shorter sessions, high warmth, few rules per week</li>
            <li>Ages ~9–12: 30–45 minutes can fit rule + application</li>
            <li>Common start: Standard-style rhythm ($${PRICING_PLANS[1].monthlyPriceUsd}/mo published class) rather than Intensive on day one</li>
          </ul>
          <p>See <a href="/pricing">pricing</a> · <a href="/blog/how-long-should-online-quran-lessons-be">lesson length</a>.</p>

          <h2 id="parent">How parents support Tajweed at home</h2>
          <ul>
            <li>Ask the tutor for <em>one</em> home-echo target (not five rules)</li>
            <li>Record nothing unless policy allows — privacy first (<a href="/safeguarding">safeguarding</a>)</li>
            <li>Do not over-correct during the live lesson; note questions for the end</li>
            <li>Praise clearer sounds, not “winning” against cousins</li>
          </ul>

          <h2 id="female">Female tutor preference</h2>
          <p>Many families request a female tutor for daughters. Preference is matched when available and confirmed after your request — <a href="/female-quran-teacher-online">female Quran teacher online</a>.</p>

          <div class="gold-box">
            <strong>Red flags:</strong> “Perfect Tajweed in 30 days,” no live listening before payment, or pushing Hifz while basic letters are wrong. Credentials belong to the <em>proposed</em> tutor — ask — see <a href="/blog/what-is-ijazah-in-quran-teaching">what is Ijazah</a>.
          </div>

          <h2 id="start">Book a Tajweed-focused trial</h2>
          <p>Write: child age, current reading level, and “please assess Tajweed priorities.” Trial is ${TRIAL.durationMinutes} minutes with no credit card. <a href="/free-quran-classes-online">Book a free Tajweed assessment trial</a> · <a href="/learn-tajweed-online">explore our online Tajweed course</a> · <a href="/online-quran-classes-for-kids">view kids Quran courses</a>.</p>

          <h2 id="faq">FAQ</h2>
          <details class="faq-acc"><summary>What age can kids start online Tajweed classes?<span>+</span></summary>
            <p>When they can sit for a short live lesson and produce letter sounds with coaching — often overlapping late Qaida / early reading. Exact age varies by child.</p>
          </details>
          <details class="faq-acc"><summary>Are online Tajweed classes effective for kids?<span>+</span></summary>
            <p>Yes when audio is clear, the tutor corrects live, and home echo is tiny and consistent. Effectiveness is proven in the trial and first month — not in ads.</p>
          </details>
          <details class="faq-acc"><summary>Should my child memorise Tajweed rule names?<span>+</span></summary>
            <p>Names help later. Priority one is correct sound in real recitation. Rules without application confuse many children.</p>
          </details>
          <details class="faq-acc"><summary>Can we request a female Tajweed tutor for a daughter?<span>+</span></summary>
            <p>Yes — request the preference when booking; matching confirms availability after your request.</p>
          </details>
          <p>Online Tajweed for kids works when listening is live, goals are small, and parents protect a calm practice minute — not when theory PDFs replace a teacher’s ear.</p>`,
  },
};
