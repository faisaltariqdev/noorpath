import Image from "next/image";
import Link from "next/link";
import PrintKitButton from "@/components/special-needs/PrintKitButton";
import WhatsAppLink from "@/components/WhatsAppLink";
import {
  CANCELLATION_NOTICE_DAYS,
  CONTACT,
  REFUND_WINDOW_DAYS,
  TRIAL_OFFER,
  TUTOR_FACTS,
} from "@/lib/academyFacts";

const WHATSAPP_ASK_FIRST = `${CONTACT.whatsappUrl}?text=${encodeURIComponent(
  "Assalamu Alaikum. My child has autism / ADHD (or I think they might). Before booking a trial, I'd like to ask a few questions about Quran lessons.",
)}`;

/** Two ways forward: book (scrolls to the form on this page) or ask first on WhatsApp. */
function TrialCta({ heading, text }: { heading: string; text: string }) {
  return (
    <div
      className="no-print"
      style={{
        background: "var(--ivory)",
        border: "1px solid var(--border)",
        borderRadius: 16,
        padding: "22px 24px",
        display: "flex",
        flexWrap: "wrap",
        gap: 16,
        alignItems: "center",
        justifyContent: "space-between",
        margin: "28px 0 0",
      }}
    >
      <div style={{ flex: "1 1 320px" }}>
        <p style={{ margin: "0 0 4px", fontWeight: 800, color: "var(--charcoal)" }}>{heading}</p>
        <p style={{ margin: 0, color: "var(--muted)", fontSize: ".9rem", lineHeight: 1.6 }}>{text}</p>
      </div>
      <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
        <a href="#cta" className="btn-primary-np">
          Book 3 free trial sessions →
        </a>
        <WhatsAppLink href={WHATSAPP_ASK_FIRST} target="_blank" rel="noopener noreferrer" className="btn-outline-np">
          Ask us first on WhatsApp
        </WhatsAppLink>
      </div>
    </div>
  );
}

/**
 * Parent-first sections for /special-needs-quran-classes (autism & ADHD focus).
 * Rules: no clinical claims (tutors are Quran teachers, not therapists), no
 * invented students or results — every progress visual is labelled as an example.
 */

const ARABIC_LETTERS = "ا ب ت ث ج ح خ د ذ ر ز س ش ص ض ط ظ ع غ ف ق ك ل م ن ه و ي".split(" ");

const h2Style = {
  fontFamily: "var(--font-playfair), serif",
  fontSize: "1.6rem",
  textAlign: "center" as const,
  margin: "0 0 12px",
  color: "var(--charcoal)",
};
const leadStyle = {
  color: "var(--muted)",
  maxWidth: 720,
  margin: "0 auto 32px",
  lineHeight: 1.75,
  textAlign: "center" as const,
};
const exampleTag = {
  display: "inline-block",
  fontSize: ".7rem",
  fontWeight: 700,
  letterSpacing: ".06em",
  textTransform: "uppercase" as const,
  color: "var(--gold)",
  background: "rgba(201,146,42,.1)",
  borderRadius: 999,
  padding: "3px 10px",
  marginBottom: 10,
};

/* ------------------------------------------------------------------ */
/* Intro: mirror the parent's situation, then reframe                  */
/* ------------------------------------------------------------------ */

const PARENT_MOMENTS = [
  { who: "Autism", text: "The madrasah hall is loud, the routine keeps changing, and your child shuts down or melts down before the lesson even starts." },
  { who: "ADHD", text: "Ten minutes in, they're under the table. The teacher says “he just won't sit still”, and you've heard it before." },
  { who: "Both", text: "They loved listening to Quran at home — until Quran class became the hardest hour of the week." },
  { who: "You", text: "You've tried two teachers already. You feel judged at the masjid door, and quietly wonder if you're doing something wrong." },
];

export function SpecialNeedsIntro() {
  return (
    <div style={{ marginBottom: 48 }}>
      <h2 style={h2Style}>Does this sound like your home?</h2>
      <p style={leadStyle}>Parents of autistic and ADHD children tell us the same things, almost word for word.</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4" style={{ marginBottom: 28 }}>
        {PARENT_MOMENTS.map((m) => (
          <div key={m.text} className="content-card" style={{ borderLeft: "4px solid var(--gold)" }}>
            <div style={{ fontSize: ".72rem", fontWeight: 700, letterSpacing: ".08em", textTransform: "uppercase", color: "var(--gold)", marginBottom: 6 }}>
              {m.who}
            </div>
            <p style={{ margin: 0, color: "var(--slate)", lineHeight: 1.7, fontSize: ".95rem" }}>“{m.text}”</p>
          </div>
        ))}
      </div>

      <div
        style={{
          background: "linear-gradient(135deg, var(--emerald-dk), var(--emerald))",
          color: "#fff",
          borderRadius: 16,
          padding: "26px 28px",
          textAlign: "center",
          marginBottom: 28,
        }}
      >
        <p style={{ fontFamily: "var(--font-playfair), serif", fontSize: "1.35rem", margin: "0 0 8px", color: "#fff" }}>
          It isn’t your child. And it isn’t you. <span style={{ color: "var(--gold-lt)" }}>It’s the format.</span>
        </p>
        <p style={{ margin: 0, color: "rgba(255,255,255,.85)", lineHeight: 1.7, maxWidth: 680, marginInline: "auto" }}>
          A long, noisy group class asks every child to sit the same way for the same time. Change the format — quiet, short,
          one-to-one, the same routine every week — and many children who “couldn’t” start to read.
        </p>
      </div>

      <figure style={{ margin: 0 }}>
        <Image
          src="/marketing/special-needs-before-after.jpg"
          alt="Illustration: a frustrated boy struggling with a Quran book at a table, and the same boy smiling and pointing at Arabic letters during a one-to-one online lesson"
          width={1200}
          height={440}
          sizes="(max-width: 1200px) 100vw, 1200px"
          style={{ width: "100%", height: "auto", borderRadius: 16, display: "block" }}
        />
        <figcaption style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginTop: 10, fontSize: ".85rem", color: "var(--muted)", textAlign: "center" }}>
          <span><strong style={{ color: "var(--slate)" }}>When the format doesn’t fit:</strong> stress, tears, “I can’t”.</span>
          <span><strong style={{ color: "var(--emerald)" }}>When it does:</strong> calm, short wins, wanting to come back.</span>
        </figcaption>
      </figure>

      <TrialCta
        heading="See it with your own child — before you pay anything"
        text={`${TRIAL_OFFER}, no card. Tell us what helps your child in the form and the tutor reads it before the first session.`}
      />
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Method, sample lesson, progress, printable kit, parent relief       */
/* ------------------------------------------------------------------ */

const AUTISM_METHOD = [
  { t: "Same opening, same order, every week", d: "Salam, Bismillah, then the same lesson steps — so your child always knows what comes next." },
  { t: "A heads-up before every change", d: "“Two more letters, then a break.” Transitions are announced, never sudden." },
  { t: "Quiet and low-stimulation", d: "One tutor, one screen, no classroom noise. Headphones help, and you choose the room." },
  { t: "Listen and echo first", d: "Hearing and repeating a short phrase comes before reading, so Quran time starts with success." },
  { t: "Clear, literal language", d: "Short instructions, one at a time — no sarcasm, no long explanations." },
  { t: "Their interests as motivation", d: "Tell the tutor what your child loves; a favourite topic can become the reward." },
  { t: "No unexpected touch", d: "The lesson happens on a screen, so there is no physical prompting, no hand on the shoulder, no crowded room." },
  { t: "A calm time slot", d: "Pick the time your child is usually settled — for many, not straight after school or late in the evening." },
];

const ADHD_METHOD = [
  { t: "Short blocks with breaks between them", d: "The lesson is split into short focused blocks, with a movement break in between." },
  { t: "Move, then focus", d: "Stretching, jumping or a quick game in the breaks — moving is allowed, not punished." },
  { t: "Instant, specific praise", d: "“You got ب perfectly!” straight away, not at the end of the lesson." },
  { t: "One tiny target at a time", d: "One letter or one harakah per block, so success comes fast and often." },
  { t: "Variety inside the routine", d: "The steps stay the same, but the activity changes — pointing, tracing, echoing, a letter hunt." },
  { t: "First–then", d: "“First this line, then your star.” A clear finish line makes starting easier." },
  { t: "Hifz in tiny portions", d: "One or two lines at a time: listen, repeat together, then repeat alone — and review before adding more." },
];

const SAMPLE_LESSON = [
  { min: 3, label: "Salam & same opening", color: "#0f8f66" },
  { min: 7, label: "Block 1: one new letter", color: "#0a6e4f" },
  { min: 3, label: "Movement break", color: "#e8b84b" },
  { min: 7, label: "Block 2: review + read", color: "#0a6e4f" },
  { min: 3, label: "Game or calm break", color: "#e8b84b" },
  { min: 5, label: "Short surah by ear", color: "#0f8f66" },
  { min: 2, label: "Star & “next week”", color: "#c9922a" },
];

const MILESTONES = [
  { n: 1, t: "Comes to the lesson calmly", d: "Quran time stops being a battle." },
  { n: 2, t: "Stays for one full block", d: "Focus builds a few minutes at a time." },
  { n: 3, t: "Knows the first letters", d: "Recognises and says them with the tutor." },
  { n: 4, t: "Reads letters with harakat", d: "Joins sounds with fatha, kasra and damma." },
  { n: 5, t: "Recites Al-Fatiha", d: "By ear, from the page, or both — ready for salah." },
];

const HOME_PLAN = [
  { day: "Mon", task: "Listen to today's surah once and echo one line" },
  { day: "Tue", task: "Trace this week's letter with a finger or crayon" },
  { day: "Wed", task: "Letter hunt: find this week's letter on the Qaida page" },
  { day: "Thu", task: "Read the week's letters to a parent or a favourite toy" },
  { day: "Fri", task: "Recite at bedtime, then colour a star" },
];

const SETUP_CHECKLIST = [
  "Same place and same time every week",
  "Headphones on, TV and other screens off",
  "Device on a stand, Qaida or Mushaf beside it",
  "Toilet, water and a snack before the lesson",
  "A fidget or squeeze toy is fine",
  "A parent within earshot",
];

const SCHEDULE_CARDS = [
  { icon: "👋", label: "Salam" },
  { icon: "👂", label: "Listen" },
  { icon: "🔤", label: "One letter" },
  { icon: "🤸", label: "Move" },
  { icon: "📖", label: "Short surah" },
  { icon: "⭐", label: "Star!" },
];

const PARENT_RELIEF = [
  { t: "You stop being teacher and referee", d: "The tutor teaches. You sit nearby — or have a cup of tea." },
  { t: "No audience if it's a hard day", d: "No waiting room, no stares. If your child needs to pause, the lesson pauses." },
  { t: "No guessing about progress", d: "The Parent Portal shows attendance, homework and teacher reports for each lesson." },
  { t: "A tutor who fits your child", d: TUTOR_FACTS.rematch },
  { t: "No long contract", d: `Cancel with ${CANCELLATION_NOTICE_DAYS} days' notice. Full refund if you ask within ${REFUND_WINDOW_DAYS} days of the first paid class.` },
  { t: "Nothing to lose by trying", d: `${TRIAL_OFFER}, no card needed. Watch the tutor with your child first.` },
];

function MethodColumn({ title, subtitle, items, accent }: { title: string; subtitle: string; items: { t: string; d: string }[]; accent: string }) {
  return (
    <div className="content-card" style={{ borderTop: `4px solid ${accent}` }}>
      <h3 style={{ fontFamily: "var(--font-playfair), serif", fontSize: "1.2rem", margin: "0 0 4px", color: "var(--charcoal)" }}>{title}</h3>
      <p style={{ margin: "0 0 16px", color: "var(--muted)", fontSize: ".88rem" }}>{subtitle}</p>
      <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "grid", gap: 12 }}>
        {items.map((i) => (
          <li key={i.t} style={{ display: "flex", gap: 10 }}>
            <span aria-hidden="true" style={{ color: accent, fontWeight: 800 }}>✓</span>
            <span style={{ fontSize: ".9rem", lineHeight: 1.6, color: "var(--slate)" }}>
              <strong>{i.t}.</strong> {i.d}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function LetterTracker() {
  const mastered = 9;
  return (
    <div className="content-card">
      <span style={exampleTag}>Example tracker</span>
      <h3 style={{ fontFamily: "var(--font-playfair), serif", fontSize: "1.05rem", margin: "0 0 4px" }}>Letters your child knows</h3>
      <p style={{ margin: "0 0 14px", color: "var(--muted)", fontSize: ".85rem" }}>Each letter is coloured in once it’s secure — {mastered} of 28 in this example.</p>
      <div dir="rtl" style={{ display: "grid", gridTemplateColumns: "repeat(7, 1fr)", gap: 6 }}>
        {ARABIC_LETTERS.map((l, i) => {
          const done = i < mastered;
          return (
            <span
              key={l}
              style={{
                fontFamily: "var(--font-amiri), serif",
                fontSize: "1.25rem",
                lineHeight: 1,
                textAlign: "center",
                padding: "8px 0",
                borderRadius: 8,
                background: done ? "var(--emerald)" : "var(--ivory)",
                color: done ? "#fff" : "var(--muted)",
                border: done ? "none" : "1px dashed rgba(10,110,79,.25)",
              }}
            >
              {l}
            </span>
          );
        })}
      </div>
    </div>
  );
}

function StarChart() {
  const weeks = [
    { w: "Week 1", stars: 1 },
    { w: "Week 2", stars: 2 },
    { w: "Week 3", stars: 2 },
    { w: "Week 4", stars: 3 },
    { w: "Week 5", stars: 4 },
    { w: "Week 6", stars: 5 },
  ];
  return (
    <div className="content-card">
      <span style={exampleTag}>Example star chart</span>
      <h3 style={{ fontFamily: "var(--font-playfair), serif", fontSize: "1.05rem", margin: "0 0 4px" }}>Small wins, every week</h3>
      <p style={{ margin: "0 0 14px", color: "var(--muted)", fontSize: ".85rem" }}>One star per goal met — calm start, a full block, a new letter, a home task, a surah line.</p>
      <div style={{ display: "grid", gap: 8 }}>
        {weeks.map((row) => (
          <div key={row.w} style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <span style={{ width: 62, fontSize: ".8rem", color: "var(--muted)" }}>{row.w}</span>
            <span aria-label={`${row.stars} of 5 stars`} style={{ letterSpacing: 4, fontSize: "1.05rem", color: "var(--gold)" }}>
              {"★".repeat(row.stars)}
              <span style={{ color: "rgba(201,146,42,.25)" }}>{"★".repeat(5 - row.stars)}</span>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export function SpecialNeedsLearningKit() {
  const total = SAMPLE_LESSON.reduce((sum, s) => sum + s.min, 0);
  return (
    <div style={{ marginBottom: 56 }}>
      {/* How we teach */}
      <h2 style={h2Style}>How we teach autistic and ADHD children</h2>
      <p style={leadStyle}>
        Same Quran, same Noorani Qaida — a different way of delivering it. You brief the tutor before the first lesson on what
        helps and what to avoid, and the lessons follow that brief.
      </p>
      <figure style={{ margin: "0 0 24px" }}>
        <Image
          src="/marketing/special-needs-calm-lesson.jpg"
          alt="Illustration: a young boy wearing headphones smiles at his female Quran tutor on a tablet, in a calm softly lit room with a Quran on a wooden stand"
          width={1200}
          height={570}
          sizes="(max-width: 1200px) 100vw, 1200px"
          style={{ width: "100%", height: "auto", borderRadius: 16, display: "block" }}
        />
      </figure>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6" style={{ marginBottom: 20 }}>
        <MethodColumn title="For autistic children" subtitle="Predictable, quiet, no surprises" items={AUTISM_METHOD} accent="var(--emerald)" />
        <MethodColumn title="For children with ADHD" subtitle="Short, active, quick wins" items={ADHD_METHOD} accent="var(--gold)" />
      </div>
      <p style={{ fontSize: ".85rem", color: "var(--muted)", textAlign: "center", maxWidth: 760, margin: "0 auto 56px", lineHeight: 1.7 }}>
        Many children have both, or don’t have a diagnosis at all — the tutor mixes what works. NoorPath tutors are qualified Quran
        teachers, not therapists; keep clinical support with your child’s school or therapist.
      </p>

      {/* Sample lesson */}
      <h2 style={h2Style}>What a 30-minute lesson looks like</h2>
      <p style={leadStyle}>An example plan. Your tutor adjusts the blocks and breaks to your child.</p>
      <div className="content-card" style={{ marginBottom: 56 }}>
        <div role="img" aria-label="Example 30-minute lesson split into short blocks and breaks" style={{ display: "flex", height: 18, borderRadius: 999, overflow: "hidden", marginBottom: 18 }}>
          {SAMPLE_LESSON.map((s) => (
            <span key={s.label} style={{ flex: s.min, background: s.color }} />
          ))}
        </div>
        <ol style={{ listStyle: "none", padding: 0, margin: 0, display: "grid", gap: 10, gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))" }}>
          {SAMPLE_LESSON.map((s) => (
            <li key={s.label} style={{ display: "flex", gap: 10, alignItems: "center", fontSize: ".9rem", color: "var(--slate)" }}>
              <span aria-hidden="true" style={{ width: 12, height: 12, borderRadius: 3, background: s.color, flexShrink: 0 }} />
              <span>
                <strong>{s.min} min</strong> — {s.label}
              </span>
            </li>
          ))}
        </ol>
        <p style={{ margin: "14px 0 0", fontSize: ".8rem", color: "var(--muted)" }}>Total: {total} minutes.</p>
      </div>

      {/* Progress */}
      <h2 style={h2Style}>Progress you can actually see</h2>
      <p style={leadStyle}>
        For our children, progress isn’t “finished the Qaida by March”. It’s a calm start, then a full block, then a first letter.
        These are the milestones we track — every child moves through them at their own pace.
      </p>
      <div className="content-card" style={{ marginBottom: 20 }}>
        <span style={exampleTag}>Typical milestones — timing differs for every child</span>
        <ol style={{ listStyle: "none", padding: 0, margin: 0, display: "grid", gap: 14, gridTemplateColumns: "repeat(auto-fit, minmax(170px, 1fr))" }}>
          {MILESTONES.map((m) => (
            <li key={m.n} style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
              <span
                aria-hidden="true"
                style={{
                  width: 30,
                  height: 30,
                  borderRadius: "50%",
                  background: "var(--emerald)",
                  color: "#fff",
                  display: "grid",
                  placeItems: "center",
                  fontWeight: 800,
                  fontSize: ".85rem",
                  flexShrink: 0,
                }}
              >
                {m.n}
              </span>
              <span style={{ fontSize: ".88rem", lineHeight: 1.5 }}>
                <strong style={{ color: "var(--charcoal)", display: "block" }}>{m.t}</strong>
                <span style={{ color: "var(--muted)" }}>{m.d}</span>
              </span>
            </li>
          ))}
        </ol>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6" style={{ marginBottom: 12 }}>
        <LetterTracker />
        <StarChart />
      </div>
      <p style={{ fontSize: ".8rem", color: "var(--muted)", textAlign: "center", margin: "0 0 56px" }}>
        Examples only, not a real student’s results. Enrolled families see their own child’s attendance, homework and teacher
        reports in the Parent Portal.
      </p>

      {/* Hope, honestly */}
      <div className="content-card" style={{ marginBottom: 56, borderLeft: "4px solid var(--emerald)" }}>
        <h2 style={{ ...h2Style, textAlign: "left", fontSize: "1.3rem" }}>Can autistic and ADHD children memorise the Quran?</h2>
        <p style={{ margin: "0 0 10px", color: "var(--slate)", lineHeight: 1.75 }}>
          Yes — many do. News outlets in the UAE, Qatar and Malaysia have reported autistic children who memorised the whole
          Quran, and many autistic learners have a strong memory for sound and pattern. Children with ADHD often memorise well
          in short, lively bursts.
        </p>
        <p style={{ margin: 0, color: "var(--muted)", lineHeight: 1.75, fontSize: ".92rem" }}>
          What we won’t do is promise you a timeline. Some children memorise quickly by ear and read slowly; others need months
          just to feel safe in a lesson. Both are progress. The goal is a child who loves Quran time — the memorising follows
          from that.
        </p>
        <TrialCta
          heading="Every child starts somewhere"
          text="Tell us where your child is today. The tutor starts there — not where a textbook says they should be."
        />
      </div>

      {/* Printable kit */}
      <div style={{ textAlign: "center" }}>
        <h2 style={h2Style}>Free printable kit for home</h2>
        <p style={leadStyle}>
          The same tools our tutors use, for the days in between. Print it, stick it on the fridge, and keep Quran time
          predictable all week.
        </p>
        <div style={{ marginBottom: 24 }}>
          <PrintKitButton />
        </div>
      </div>
      <div id="np-print-kit" style={{ marginBottom: 56 }}>
        <div className="np-print-only" style={{ textAlign: "center", marginBottom: 16 }}>
          <strong style={{ fontSize: "1.2rem" }}>NoorPath — Quran time kit for home</strong>
          <div style={{ fontSize: ".8rem" }}>www.noorpath.online/special-needs-quran-classes</div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="content-card np-kit-card">
            <h3 style={{ fontFamily: "var(--font-playfair), serif", fontSize: "1.05rem", margin: "0 0 12px" }}>1. Visual lesson schedule</h3>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 8 }}>
              {SCHEDULE_CARDS.map((c, i) => (
                <div key={c.label} style={{ border: "2px solid var(--border)", borderRadius: 12, padding: "10px 4px", textAlign: "center" }}>
                  <div aria-hidden="true" style={{ fontSize: "1.6rem" }}>{c.icon}</div>
                  <div style={{ fontSize: ".78rem", fontWeight: 700, color: "var(--slate)" }}>
                    {i + 1}. {c.label}
                  </div>
                </div>
              ))}
            </div>
            <p style={{ margin: "10px 0 0", fontSize: ".8rem", color: "var(--muted)" }}>Cut out the cards and turn each one over when it’s done.</p>
          </div>

          <div className="content-card np-kit-card">
            <h3 style={{ fontFamily: "var(--font-playfair), serif", fontSize: "1.05rem", margin: "0 0 12px" }}>2. First → Then board</h3>
            <div style={{ display: "grid", gridTemplateColumns: "1fr auto 1fr", gap: 10, alignItems: "stretch" }}>
              <div style={{ border: "2px solid var(--emerald)", borderRadius: 12, padding: 14, textAlign: "center" }}>
                <div style={{ fontWeight: 800, color: "var(--emerald)", marginBottom: 6 }}>FIRST</div>
                <div aria-hidden="true" style={{ fontSize: "1.6rem" }}>📖</div>
                <div style={{ fontSize: ".85rem" }}>Quran time</div>
              </div>
              <div aria-hidden="true" style={{ alignSelf: "center", fontSize: "1.4rem", color: "var(--gold)" }}>→</div>
              <div style={{ border: "2px dashed var(--gold)", borderRadius: 12, padding: 14, textAlign: "center" }}>
                <div style={{ fontWeight: 800, color: "var(--gold)", marginBottom: 6 }}>THEN</div>
                <div style={{ height: 30 }} />
                <div style={{ fontSize: ".85rem", borderTop: "1px solid #ccc", paddingTop: 4 }}>draw or write the reward</div>
              </div>
            </div>
          </div>

          <div className="content-card np-kit-card">
            <h3 style={{ fontFamily: "var(--font-playfair), serif", fontSize: "1.05rem", margin: "0 0 12px" }}>3. 5-minute home practice</h3>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: ".85rem" }}>
              <tbody>
                {HOME_PLAN.map((d) => (
                  <tr key={d.day} style={{ borderBottom: "1px solid var(--border)" }}>
                    <td style={{ padding: "7px 8px 7px 0", fontWeight: 700, color: "var(--emerald)", width: 44 }}>{d.day}</td>
                    <td style={{ padding: "7px 0", color: "var(--slate)" }}>{d.task}</td>
                    <td style={{ padding: "7px 0", width: 28, textAlign: "center", fontSize: "1.1rem", color: "var(--gold)" }}>☆</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="content-card np-kit-card">
            <h3 style={{ fontFamily: "var(--font-playfair), serif", fontSize: "1.05rem", margin: "0 0 12px" }}>4. Calm lesson setup checklist</h3>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "grid", gap: 8 }}>
              {SETUP_CHECKLIST.map((c) => (
                <li key={c} style={{ display: "flex", gap: 10, fontSize: ".88rem", color: "var(--slate)" }}>
                  <span aria-hidden="true" style={{ width: 16, height: 16, border: "2px solid var(--emerald)", borderRadius: 4, flexShrink: 0, marginTop: 2 }} />
                  {c}
                </li>
              ))}
            </ul>
          </div>

          <div className="content-card np-kit-card md:col-span-2">
            <h3 style={{ fontFamily: "var(--font-playfair), serif", fontSize: "1.05rem", margin: "0 0 12px" }}>5. My letter star chart — colour a letter when you know it</h3>
            <div dir="rtl" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(52px, 1fr))", gap: 8 }}>
              {ARABIC_LETTERS.map((l) => (
                <span
                  key={l}
                  style={{
                    fontFamily: "var(--font-amiri), serif",
                    fontSize: "1.5rem",
                    textAlign: "center",
                    padding: "8px 0",
                    border: "2px dashed rgba(10,110,79,.35)",
                    borderRadius: 10,
                    color: "var(--charcoal)",
                  }}
                >
                  {l}
                </span>
              ))}
            </div>
          </div>
        </div>
        <p className="no-print" style={{ fontSize: ".85rem", color: "var(--muted)", textAlign: "center", marginTop: 14 }}>
          Want to practise letters on screen? Try the{" "}
          <Link href="/noorani-qaida" style={{ color: "var(--emerald)", fontWeight: 700 }}>
            free interactive Noorani Qaida
          </Link>{" "}
          — no account needed.
        </p>
      </div>

      {/* Trial worries */}
      <h2 style={h2Style}>“What if my child won’t engage in the trial?”</h2>
      <p style={leadStyle}>
        It’s the most common worry we hear — and it’s exactly why there are three free sessions, not one. A gentle way to use
        them:
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5" style={{ marginBottom: 12 }}>
        {[
          { n: "Session 1", t: "Just say hello", d: "Your child can sit on your lap, wave, or watch from across the room. No reading is needed. Ask for this when you book." },
          { n: "Session 2", t: "One small try", d: "Listening and echoing one short phrase, or pointing to one letter. If that's all, that's a win." },
          { n: "Session 3", t: "A short real lesson", d: "A few minutes in the shape of a normal lesson, so you can see how the tutor paces your child." },
        ].map((s) => (
          <div key={s.n} className="content-card" style={{ borderTop: "3px solid var(--gold)" }}>
            <div style={{ fontSize: ".72rem", fontWeight: 700, letterSpacing: ".08em", textTransform: "uppercase", color: "var(--gold)", marginBottom: 6 }}>
              {s.n}
            </div>
            <h3 style={{ fontFamily: "var(--font-playfair), serif", fontSize: "1rem", margin: "0 0 6px" }}>{s.t}</h3>
            <p style={{ margin: 0, color: "var(--muted)", fontSize: ".87rem", lineHeight: 1.6 }}>{s.d}</p>
          </div>
        ))}
      </div>
      <p style={{ fontSize: ".85rem", color: "var(--muted)", textAlign: "center", maxWidth: 720, margin: "0 auto 56px", lineHeight: 1.7 }}>
        A suggestion, not a fixed script — tell us what your child needs and the tutor follows it. If the tutor isn’t the right
        fit, ask for another one.
      </p>

      {/* Parent relief */}
      <h2 style={h2Style}>What gets lighter for you</h2>
      <p style={leadStyle}>You carry a lot already. This shouldn’t be one more fight.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5" style={{ marginBottom: 32 }}>
        {PARENT_RELIEF.map((r) => (
          <div key={r.t} className="content-card">
            <h3 style={{ fontFamily: "var(--font-playfair), serif", fontSize: ".98rem", margin: "0 0 6px", color: "var(--charcoal)" }}>{r.t}</h3>
            <p style={{ margin: 0, color: "var(--muted)", fontSize: ".87rem", lineHeight: 1.6 }}>{r.d}</p>
          </div>
        ))}
      </div>

      <blockquote
        style={{
          margin: 0,
          background: "var(--ivory)",
          border: "1px solid var(--border)",
          borderRadius: 16,
          padding: "24px 28px",
          textAlign: "center",
        }}
      >
        <p style={{ fontFamily: "var(--font-playfair), serif", fontSize: "1.15rem", lineHeight: 1.6, margin: "0 0 8px", color: "var(--charcoal)" }}>
          “The one who is skilled in the Quran will be with the noble, righteous scribes, and the one who recites it with
          difficulty, stammering, will have a double reward.”
        </p>
        <footer style={{ fontSize: ".85rem", color: "var(--muted)" }}>Sahih al-Bukhari 4937, Sahih Muslim 798</footer>
        <p style={{ margin: "12px 0 0", fontSize: ".92rem", color: "var(--slate)" }}>
          Every slow, hard-won letter your child reads counts — twice.
        </p>
      </blockquote>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5" style={{ marginTop: 20 }}>
        <div className="content-card">
          <span style={exampleTag}>For you, the parent</span>
          <h3 style={{ fontFamily: "var(--font-playfair), serif", fontSize: "1.05rem", margin: "0 0 10px" }}>A dua for your child</h3>
          <p dir="rtl" lang="ar" style={{ fontFamily: "var(--font-amiri), serif", fontSize: "1.45rem", lineHeight: 1.9, margin: "0 0 8px", color: "var(--charcoal)" }}>
            رَبَّنَا هَبْ لَنَا مِنْ أَزْوَاجِنَا وَذُرِّيَّاتِنَا قُرَّةَ أَعْيُنٍ وَاجْعَلْنَا لِلْمُتَّقِينَ إِمَامًا
          </p>
          <p style={{ margin: "0 0 6px", color: "var(--slate)", fontSize: ".92rem", lineHeight: 1.65 }}>
            “Our Lord, grant us from our spouses and our children the coolness of our eyes, and make us leaders of the
            righteous.” <span style={{ color: "var(--muted)" }}>(Al-Furqan 25:74)</span>
          </p>
          <p style={{ margin: 0, color: "var(--muted)", fontSize: ".85rem", lineHeight: 1.6 }}>
            The Prophet ﷺ named a parent’s supplication for their child among the prayers that are answered (Sunan Abi Dawud
            1536).
          </p>
        </div>
        <div className="content-card">
          <span style={exampleTag}>On the hard days</span>
          <h3 style={{ fontFamily: "var(--font-playfair), serif", fontSize: "1.05rem", margin: "0 0 10px" }}>You are not failing</h3>
          <p style={{ margin: "0 0 8px", color: "var(--slate)", fontSize: ".92rem", lineHeight: 1.65 }}>
            “Allah does not burden a soul beyond that it can bear.” <span style={{ color: "var(--muted)" }}>(Al-Baqarah 2:286)</span>
          </p>
          <p style={{ margin: 0, color: "var(--muted)", fontSize: ".87rem", lineHeight: 1.65 }}>
            That includes your child — and you. Bringing Quran into their life gently, at the pace they can manage, is not
            “less”. It is the job, done with mercy. For questions about what is required of your child, speak to a scholar you
            trust.
          </p>
        </div>
      </div>
    </div>
  );
}
