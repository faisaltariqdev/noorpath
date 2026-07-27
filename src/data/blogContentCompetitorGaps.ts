import { PRICING_PLANS, TRIAL } from "@/lib/academyFacts";

const STYLE = `.article-body { font-size: 1.05rem; line-height: 1.85; color: #374151; }
  .article-body h2 { font-size: 1.55rem; font-weight: 700; color: var(--charcoal); margin: 44px 0 16px; scroll-margin-top: 90px; }
  .article-body h3 { font-size: 1.15rem; font-weight: 700; color: var(--emerald); margin: 26px 0 10px; }
  .article-body p { margin-bottom: 18px; }
  .article-body ul, .article-body ol { margin: 0 0 18px 22px; }
  .article-body li { margin-bottom: 8px; }
  .article-body a { color: var(--emerald); font-weight: 600; }
  .highlight-box { background: rgba(10,110,79,.06); border-left: 4px solid var(--emerald); border-radius: 8px; padding: 20px 24px; margin: 24px 0; }
  .np-table { width: 100%; border-collapse: collapse; margin: 24px 0; font-size: .93rem; }
  .np-table th, .np-table td { border: 1px solid var(--border); padding: 12px 14px; text-align: left; vertical-align: top; }
  .np-table th { background: var(--ivory); color: var(--charcoal); font-weight: 700; }
  .faq-item { border: 1px solid var(--border); border-radius: 10px; margin-bottom: 12px; overflow: hidden; }
  .faq-q { padding: 16px 20px; font-weight: 700; background: var(--ivory); color: var(--charcoal); font-size: .95rem; }
  .faq-a { padding: 16px 20px; margin: 0; color: #374151; font-size: .92rem; line-height: 1.75; border-top: 1px solid var(--border); }`;

export const competitorGapBlogContent: Record<string, { style: string; content: string }> = {
  "what-is-ijazah-in-quran-teaching": {
    style: STYLE,
    content: `
          <div class="highlight-box">
            <strong>Quick answer:</strong> An <strong>Ijazah</strong> in Quran teaching is a formal authorisation — often with a chain of transmission (sanad) — that a teacher may recite and/or teach a specific Quran reading (riwayah) after being examined by a qualified sheikh. It is <em>not</em> the same as a university diploma, and not every good online tutor holds one. Always ask what an academy has verified for <em>your</em> proposed tutor.
          </div>

          <p><strong>What is Ijazah in Quran teaching?</strong> Families searching for an “Al-Azhar certified Quran teacher online” or “Ijazah certified teacher” are usually trying to answer one practical question: <em>Is this person qualified to correct my recitation?</em> This guide explains Ijazah clearly, how it differs from other credentials, and what to ask before you enrol.</p>

          <h2>Ijazah meaning in simple terms</h2>
          <p>In classical Islamic education, an Ijazah is permission to transmit knowledge. For Quran, that often means the student has recited a portion (or the whole Quran) to a teacher with a continuous chain back through earlier teachers, and has been authorised to teach that reading.</p>
          <p>Important nuances:</p>
          <ul>
            <li>An Ijazah may cover <strong>recitation</strong>, <strong>teaching</strong>, or both — ask which.</li>
            <li>It is usually tied to a specific <strong>riwayah</strong> (for example Hafs ‘an ‘Asim).</li>
            <li>It is <strong>not</strong> automatically the same as graduating from Al-Azhar University.</li>
            <li>Holding an Ijazah does not by itself prove child-safeguarding skills or online teaching ability.</li>
          </ul>

          <h2>Ijazah vs Al-Azhar vs “certified tutor”</h2>
          <table class="np-table">
            <thead><tr><th>Claim</th><th>What it may mean</th><th>What to ask</th></tr></thead>
            <tbody>
              <tr><td>Ijazah</td><td>Authorisation in a stated reading / teaching pathway</td><td>Which riwayah? Who issued it? Can you show evidence for this tutor?</td></tr>
              <tr><td>Al-Azhar graduate</td><td>University/institutional study pathway</td><td>Degree, faculty, and whether it matches the course (Tajweed vs general Islamic studies)</td></tr>
              <tr><td>“Certified”</td><td>Vague marketing word</td><td>Certified by whom, for what, and verified how?</td></tr>
            </tbody>
          </table>
          <p>NoorPath does <strong>not</strong> claim that every tutor is Al-Azhar certified. Families may ask for the <strong>proposed tutor’s</strong> relevant credentials before enrolment — see <a href="/our-tutors">our tutors matching page</a>.</p>

          <h2>Why parents search “Ijazah certified teacher”</h2>
          <p>Competitors often repeat “Al-Azhar / Ijazah certified” on every page. That keyword demand is real — but blanket claims without per-tutor evidence are a red flag. A better process:</p>
          <ol>
            <li>Book a trial and hear the teaching style</li>
            <li>Ask which credentials apply to <em>this</em> tutor</li>
            <li>Confirm subject fit (kids Qaida vs adult Tajweed vs Hifz)</li>
            <li>Confirm schedule and safeguarding preferences</li>
          </ol>
          <p>For a full checklist, read <a href="/blog/how-to-choose-online-quran-teacher">how to choose an online Quran teacher</a>.</p>

          <h2>Do you need an Ijazah tutor to start?</h2>
          <p>Beginners learning letters and short surahs benefit most from clear pronunciation, patience, and a structured plan. Advanced Tajweed or formal sanad pathways may require more specialised authorisation. Match the credential to the goal — not the marketing slogan.</p>

          <h2>How many classes help after you choose a tutor?</h2>
          <p>Credential questions sit beside frequency questions such as “how many classes per week to memorize Quran.” Memorisation needs depend on retention and revision load; reading/Tajweed goals may need fewer weekly sessions. Compare <a href="/blog/difference-between-hifz-and-tajweed-classes">Hifz vs Tajweed classes</a> and published <a href="/pricing">pricing plans</a>.</p>

          <div class="highlight-box">
            <strong>Next step:</strong> Request a free ${TRIAL.durationMinutes}-minute trial with no credit card, then ask for the proposed tutor’s credential details before paid enrolment — <a href="/free-quran-classes-online">start with a free trial class</a> · <a href="/one-on-one-quran-classes">1-to-1 Quran classes</a>.
          </div>

          <h2>Frequently Asked Questions</h2>
          <div class="faq-item"><div class="faq-q">What is Ijazah in Quran teaching?</div><div class="faq-a">It is a formal authorisation — often with a chain of transmission — to recite and/or teach a specific Quran reading after assessment by a qualified teacher. Ask what evidence applies to your proposed tutor.</div></div>
          <div class="faq-item"><div class="faq-q">Is Ijazah the same as Al-Azhar certification?</div><div class="faq-a">No. Al-Azhar refers to a university/institutional pathway; Ijazah refers to authorisation in a Quran reading/teaching tradition. A person may have one, both, or neither.</div></div>
          <div class="faq-item"><div class="faq-q">Should every online Quran academy claim all tutors have Ijazah?</div><div class="faq-a">Be cautious of blanket claims. Ask for the specific tutor’s credentials related to your course goal.</div></div>
          <div class="faq-item"><div class="faq-q">Can I request proof before paying?</div><div class="faq-a">Yes. Reputable academies confirm relevant credentials for the proposed tutor before enrolment. Use the free trial to assess teaching fit as well.</div></div>
          <div class="faq-item"><div class="faq-q">Where can I try a class without a credit card?</div><div class="faq-a">NoorPath offers a free ${TRIAL.durationMinutes}-minute trial with no credit card required. <a href="/free-quran-classes-online">Book a free trial</a>.</div></div>
    `,
  },

  "is-online-quran-learning-as-effective-as-in-person": {
    style: STYLE,
    content: `
          <div class="highlight-box">
            <strong>Quick answer:</strong> Live <strong>1-to-1 online Quran learning</strong> can be as effective as in-person lessons for many families when the tutor is suitable, corrections are live, attendance is consistent, and home practice happens. Group recordings or poor connections are weaker. Neither format guarantees a fixed outcome timeline.
          </div>

          <p>Parents and adult learners often ask: <strong>is online Quran learning as effective as in-person?</strong> The honest answer depends on lesson design — not the screen alone. This guide compares formats so you can choose with clear criteria.</p>

          <h2>What “effective” should mean</h2>
          <ul>
            <li>Accurate pronunciation and correction</li>
            <li>Steady attendance and revision</li>
            <li>Age-appropriate pacing (especially for children)</li>
            <li>Safeguarding and parent visibility for kids</li>
            <li>A plan that matches the goal (Qaida, Tajweed, or Hifz)</li>
          </ul>

          <h2>Online vs in-person — practical comparison</h2>
          <table class="np-table">
            <thead><tr><th>Factor</th><th>Live 1-to-1 online</th><th>Local in-person</th></tr></thead>
            <tbody>
              <tr><td>Correction</td><td>Immediate if mic/camera quality is good</td><td>Immediate in a good class; weaker in large groups</td></tr>
              <tr><td>Travel</td><td>None</td><td>Time and transport cost</td></tr>
              <tr><td>Tutor choice</td><td>Broader matching (subject, gender, timezone)</td><td>Limited to local availability</td></tr>
              <tr><td>Community</td><td>Usually private lessons</td><td>Stronger local community for some families</td></tr>
              <tr><td>Schedule</td><td>Evening/weekend matching possible</td><td>Fixed centre timetable</td></tr>
            </tbody>
          </table>

          <h2>When online works especially well</h2>
          <ul>
            <li>Working professionals needing evening slots — see <a href="/quran-classes-for-working-professionals">Quran classes for working professionals</a></li>
            <li>Sisters requesting a female tutor — <a href="/quran-classes-for-sisters">classes for sisters</a></li>
            <li>Families abroad without a nearby Tajweed teacher</li>
            <li>Children who focus better in a short private lesson than a long group hall</li>
          </ul>

          <h2>When in-person may be better</h2>
          <p>Some children need physical classroom energy, or families want a local Islamic centre community. Hybrid approaches also work: online for Tajweed correction plus local weekend circle for social learning.</p>

          <h2>How to test effectiveness before paying</h2>
          <ol>
            <li>Book a free trial with no credit card</li>
            <li>Ask the tutor to correct one deliberate pronunciation mistake</li>
            <li>Request a simple practice plan for the next week</li>
            <li>Compare total monthly cost honestly — <a href="/blog/online-quran-classes-cost-pricing-guide">cost guide</a> and <a href="/pricing">NoorPath pricing</a></li>
          </ol>

          <div class="highlight-box">
            <strong>Ready to compare with a live lesson?</strong> <a href="/free-quran-classes-online">Start with a free trial class</a> · <a href="/one-on-one-quran-classes">see 1-to-1 Quran classes</a> · <a href="/blog/how-to-choose-online-quran-teacher">how to choose a teacher</a>.
          </div>

          <p>Adults comparing formats can test fit via a free trial on <a href="/online-quran-classes-for-adults">online Quran classes for adults</a>.</p>
          <h2>Frequently Asked Questions</h2>
          <div class="faq-item"><div class="faq-q">Is online Quran learning as effective as in-person?</div><div class="faq-a">It can be, when lessons are live 1-to-1 with real correction, consistent attendance, and home practice. Outcomes still vary by learner and tutor fit.</div></div>
          <div class="faq-item"><div class="faq-q">Are recorded Quran courses enough?</div><div class="faq-a">Recordings help listening, but beginners usually need live correction for makharij and Tajweed mistakes.</div></div>
          <div class="faq-item"><div class="faq-q">Can adults learn effectively online?</div><div class="faq-a">Yes. Many adults prefer private online lessons around work. See adult classes and the working professionals page.</div></div>
          <div class="faq-item"><div class="faq-q">How do I keep a child safe online?</div><div class="faq-a">Parents should arrange bookings, supervise young learners, keep devices in shared spaces, and use official academy channels. Read NoorPath’s safeguarding guidance.</div></div>
          <div class="faq-item"><div class="faq-q">How much do effective online classes cost?</div><div class="faq-a">NoorPath plans start from $${PRICING_PLANS[0].monthlyPriceUsd}/month. The trial is free with no credit card. See the pricing page for current plans.</div></div>
    `,
  },

  "difference-between-hifz-and-tajweed-classes": {
    style: STYLE,
    content: `
          <div class="highlight-box">
            <strong>Quick answer:</strong> <strong>Tajweed classes</strong> focus on correct pronunciation and rules of recitation. <strong>Hifz classes</strong> focus on memorising the Quran with a new-lesson + revision structure. Many learners need Tajweed foundations before intensive Hifz. They are different goals — not interchangeable course names.
          </div>

          <p>Searching <strong>difference between Hifz and Tajweed classes</strong> usually means you are choosing a pathway for a child or yourself. This guide separates the two clearly and links to the right NoorPath pages.</p>

          <h2>Tajweed classes — what you practise</h2>
          <ul>
            <li>Makharij (articulation points)</li>
            <li>Rules such as noon sakinah, meem sakinah, madd, qalqalah</li>
            <li>Applying rules while reading from the mushaf</li>
            <li>Listening and immediate correction</li>
          </ul>
          <p>Explore <a href="/learn-tajweed-online">learn Tajweed online</a> and the deeper <a href="/blog/tajweed-rules-complete-guide">Tajweed rules guide</a>.</p>

          <h2>Hifz classes — what you practise</h2>
          <ul>
            <li>New memorisation portions</li>
            <li>Recent revision (last few days/weeks)</li>
            <li>Older revision cycles</li>
            <li>Retention checks and error logging</li>
          </ul>
          <p>See <a href="/hifz-quran-online">Hifz Quran online</a> and <a href="/blog/how-long-to-memorize-quran">how long to memorize Quran</a> (planning estimates, not guarantees).</p>

          <h2>Side-by-side comparison</h2>
          <table class="np-table">
            <thead><tr><th></th><th>Tajweed</th><th>Hifz</th></tr></thead>
            <tbody>
              <tr><td>Primary goal</td><td>Correct recitation</td><td>Memorisation + retention</td></tr>
              <tr><td>Typical starting need</td><td>Can already read letters/words</td><td>Stable reading + capacity for daily revision</td></tr>
              <tr><td>Home practice</td><td>Short corrected passages</td><td>New + revision blocks every day</td></tr>
              <tr><td>Weekly lessons</td><td>Often 1–3</td><td>Often more frequent for momentum</td></tr>
              <tr><td>Success signal</td><td>Fewer pronunciation errors</td><td>Retention of recent and older portions</td></tr>
            </tbody>
          </table>

          <h2>How many classes per week?</h2>
          <p>There is no universal number. Tajweed improvement can happen with steady weekly lessons plus short daily practice. Hifz usually needs more contact <em>and</em> independent revision. Ask a tutor to recommend frequency after hearing the learner — do not treat competitor “finish in X months” ads as promises.</p>

          <h2>Which should you start with?</h2>
          <ol>
            <li>Cannot read Arabic yet → start with <a href="/courses/noorani-qaida-online">Noorani Qaida</a></li>
            <li>Can read but errors are frequent → Tajweed focus</li>
            <li>Reading is stable and you want memorisation → Hifz with revision discipline</li>
          </ol>
          <p>Not sure? Book a free trial and let the tutor assess — <a href="/free-quran-classes-online">free trial Quran class</a> · <a href="/pricing">see simple pricing plans</a>.</p>

          <div class="highlight-box">
            <strong>Related commercial pages:</strong> <a href="/one-on-one-quran-classes">1-to-1 Quran classes</a> · <a href="/online-quran-classes-for-kids">kids classes</a> · <a href="/quran-classes-for-working-professionals">evening classes for professionals</a>.
          </div>

          <p>If you are still at letter/Qaida stage, start with <a href="/online-quran-for-beginners">online Quran for beginners</a> before choosing Hifz or Tajweed tracks.</p>
          <h2>Frequently Asked Questions</h2>
          <div class="faq-item"><div class="faq-q">What is the difference between Hifz and Tajweed classes?</div><div class="faq-a">Tajweed trains correct recitation rules; Hifz trains memorisation with structured revision. Many students need Tajweed foundations before heavy Hifz.</div></div>
          <div class="faq-item"><div class="faq-q">Can I take both together?</div><div class="faq-a">Sometimes. A tutor may correct Tajweed inside Hifz lessons, or keep separate focus blocks. Overloading beginners usually slows both goals.</div></div>
          <div class="faq-item"><div class="faq-q">How many classes per week to memorize Quran?</div><div class="faq-a">It depends on retention, revision quality, and available practice time. More lessons help only if revision is also done between classes. Ask for a personal plan after assessment.</div></div>
          <div class="faq-item"><div class="faq-q">Which course is cheaper?</div><div class="faq-a">Price depends on session length and weekly frequency more than the label. Compare plans on the pricing page; Hifz often needs more weekly contact.</div></div>
          <div class="faq-item"><div class="faq-q">How do I start without guessing?</div><div class="faq-a">Book a free ${TRIAL.durationMinutes}-minute trial with no credit card. The tutor can recommend Qaida, Tajweed, or Hifz after hearing the learner.</div></div>
    `,
  },
};
