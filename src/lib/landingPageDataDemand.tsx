import { Award, BookOpen, CheckCircle, Clock, Home, Users, Shield, Globe, UserCheck } from "lucide-react";
import type { KeywordLandingPageProps } from "@/components/KeywordLandingPage";
import { PRICING_PLANS, RESCHEDULE_NOTICE_HOURS, TRIAL, TRIAL_OFFER, TUTOR_FACTS } from "@/lib/academyFacts";

/**
 * Landing pages for searches parents make in their own words that no existing
 * page answered: lessons explained in Urdu, "Nazra" (Quran reading by sight),
 * and "online madrasah". Each describes a service NoorPath already delivers —
 * no new claims, no guaranteed timelines.
 */

type LandingData = Omit<KeywordLandingPageProps, "canonicalPath"> & {
  keywords: string[];
  metaTitle: string;
  metaDescription: string;
};

const BASE_CRUMB = [
  { label: "Home", href: "/" },
  { label: "Online Quran Classes", href: "/online-quran-classes" },
];

const STARTER = PRICING_PLANS[0];
const PRICE_LINE = `Plans are monthly in US dollars: ${PRICING_PLANS.map((p) => `${p.name} $${p.monthlyPriceUsd} (${p.sessionsPerMonth} × ${p.sessionMinutes}-minute lessons)`).join(", ")}.`;

/* ───────────────────────── Urdu-speaking Quran teacher ───────────────────────── */

export const quranClassesInUrdu: LandingData = {
  metaTitle: "Online Quran Classes in Urdu — Urdu-Speaking Teacher | NoorPath",
  metaDescription:
    `Online Quran classes explained in Urdu, English or both. One-to-one Qaida, Nazra, Tajweed and Hifz with an Urdu-speaking Quran teacher, male or female. ${TRIAL.classes} free trial sessions.`,
  keywords: [
    "online quran classes in urdu", "urdu speaking quran teacher", "online quran teacher urdu",
    "quran classes in urdu and english", "pakistani quran teacher online", "urdu quran tutor online",
    "online quran academy urdu", "quran teacher for kids urdu", "female quran teacher urdu speaking",
    "learn quran online in urdu",
  ],
  serviceName: "Online Quran Classes Taught in Urdu",
  serviceDescription:
    "Live one-to-one online Quran lessons — Noorani Qaida, Quran reading (Nazra), Tajweed and Hifz — explained in Urdu, English, or a mix of both, by an Urdu-speaking tutor.",
  audience: "Urdu-speaking families and adult learners worldwide",
  whoThisIsFor: [
    "You speak Urdu at home and want the teacher to explain the lesson the way you would",
    "Your child understands Urdu but answers in English, and needs a teacher comfortable in both",
    "You are an adult who learned a little in childhood and wants to restart in your own language",
    "Grandparents or parents want to follow the lesson and help with the sabaq afterwards",
    "You want a female Urdu-speaking teacher for your daughter or for yourself",
  ],
  h1: "Online Quran Classes in Urdu — One-to-One with an Urdu-Speaking Teacher",
  eyebrow: "Urdu · English · or both",
  heroText:
    'Learn Quran online with a teacher who explains in <strong style="color:var(--gold-lt)">Urdu, English, or a mix of both</strong>. Live one-to-one lessons for children and adults — Qaida, Nazra, Tajweed and Hifz — at a time that suits your country. <strong style="color:var(--gold-lt)">Free trial.</strong>',
  sectionTitle: <>Quran Lessons in the Language <em className="accent">Your Family Speaks</em></>,
  sectionSubtitle:
    "The Quran is read in Arabic, but the explanation — where the sound comes from, what the rule is, what to practise — lands best in the language the learner actually thinks in.",
  quickAnswer:
    `<strong>Yes — NoorPath teaches online Quran classes in Urdu.</strong> Tell us the language you want (Urdu, English or both) on the trial form; a tutor who teaches in that language is matched for your level and time zone, and you start with ${TRIAL_OFFER}. <a href="/free-quran-classes-online" style="color:var(--emerald);font-weight:700;">Request a trial →</a>`,
  seoIntro:
    'Families from Pakistan and India living in the UK, Europe, the Gulf, North America and Australia often want two things at once: a teacher who explains in <strong>Urdu</strong>, as lessons were explained to them, and a teacher who can switch to <strong>English</strong> for a child growing up abroad. Online one-to-one lessons make that possible wherever you live, because the teacher does not need to be nearby.',
  phases: [
    { phase: "Step 1", title: "Noorani Qaida", duration: "Own pace", desc: "Arabic letters, harakat (zabar, zer, pesh), tanween, sukoon and shaddah — explained in Urdu or English." },
    { phase: "Step 2", title: "Nazra Quran", duration: "Own pace", desc: "Reading the Quran by sight, sabaq by sabaq, with mistakes corrected as the learner reads." },
    { phase: "Step 3", title: "Tajweed or Hifz", duration: "Ongoing", desc: "Tajweed rules for correct recitation, or a Hifz plan with Sabaq, Sabqi and Manzil revision." },
  ],
  steps: [
    { title: "Choose the language", desc: "On the trial form, say whether you want lessons explained in Urdu, English or a mix. For children raised abroad, a mix usually works best." },
    { title: "Meet the tutor in a free lesson", desc: `A ${TRIAL.durationMinutes}-minute one-to-one video lesson. The tutor checks the learner's level and you hear how they explain.` },
    { title: "Agree a weekly time", desc: `Lesson times are arranged in your own time zone and can be moved with ${RESCHEDULE_NOTICE_HOURS} hours' notice, subject to tutor availability.` },
    { title: "Follow the sabaq at home", desc: "Because you understand the explanation too, you can listen to the day's lesson and help your child practise it." },
  ],
  features: [
    { icon: <Users size={22} />, title: "Urdu, English or Both", desc: "The tutor explains in the language the learner follows best, and can switch between the two in the same lesson." },
    { icon: <UserCheck size={22} />, title: "One Learner, One Teacher", desc: "Every lesson is live and one-to-one, so the teacher hears every word that is read." },
    { icon: <Shield size={22} />, title: "Female Teachers Available", desc: `${TUTOR_FACTS.femaleTutors} Ask for one when you book.` },
    { icon: <Award size={22} />, title: "Qualified Tutors", desc: TUTOR_FACTS.credentials },
    { icon: <Clock size={22} />, title: "Your Time Zone", desc: "After school in the UK, evenings in the Gulf, weekends in North America — the time is agreed around your routine." },
    { icon: <Home size={22} />, title: "Parents Can Follow Along", desc: "Sit in on any lesson, and see homework, attendance and progress in the Parent Portal." },
  ],
  compareRows: [
    { method: "Urdu-speaking tutor, 1-on-1 online (NoorPath)", verdict: "Explained in your language", note: "Live correction, your time zone, parents can follow the lesson" },
    { method: "English-only online class", verdict: "Works for some children", note: "Parents and grandparents who prefer Urdu may not be able to help at home" },
    { method: "Local masjid class", verdict: "In person", note: "Good for community; teaching language and class times depend on what is available nearby" },
    { method: "Videos and apps", verdict: "Self-study", note: "Useful for practice, but nobody listens and corrects" },
  ],
  faqs: [
    { q: "Can my child learn Quran online in Urdu?", a: "Yes. Ask for an Urdu-speaking tutor on the trial form. Lessons are one-to-one, so the tutor explains in Urdu, in English, or in both, depending on what your child understands best." },
    { q: "My child speaks English but understands Urdu. Which should we choose?", a: "Choose both. Many children raised abroad follow instructions in Urdu but answer in English; a bilingual tutor can explain a rule in Urdu and check understanding in English." },
    { q: "Is there a female Urdu-speaking Quran teacher?", a: `${TUTOR_FACTS.femaleTutors} Mention both preferences — female and Urdu-speaking — when you enquire; the tutor is assigned subject to availability and confirmed before the trial.` },
    { q: "What can we learn in Urdu-medium lessons?", a: "Noorani Qaida for beginners, Nazra (reading the Quran by sight), Tajweed, and Hifz. Daily duas and Islamic studies can be added for children." },
    { q: "Do you teach Urdu translation (tarjuma) of the Quran?", a: "The main courses teach reading, recitation and memorisation. If you want to study the translation as well, say so when you book and ask in the trial whether the matched tutor can include it." },
    { q: "Are the lessons one-to-one or in a group?", a: "One-to-one. Each lesson is one learner with one tutor on a live video call." },
    { q: "How much do online Quran classes in Urdu cost?", a: `The language of the lesson does not change the price. ${PRICE_LINE} You start with ${TRIAL_OFFER}, with no credit card.` },
    { q: "Which countries do you teach in?", a: "Lessons are online, so families join from the UK, Europe, the Gulf, the USA, Canada, Australia, Pakistan and elsewhere. The lesson time is agreed in your own time zone." },
  ],
  locations: [
    { href: "/locations/online-quran-classes-uk", label: "🇬🇧 United Kingdom", note: "After-school and weekend slots" },
    { href: "/locations/online-quran-classes-uae", label: "🇦🇪 UAE", note: "Evening slots in Gulf time" },
    { href: "/locations/online-quran-classes-saudi-arabia", label: "🇸🇦 Saudi Arabia", note: "Around school and work" },
    { href: "/locations/online-quran-classes-usa", label: "🇺🇸 United States", note: "Eastern to Pacific time" },
    { href: "/locations/online-quran-classes-canada", label: "🇨🇦 Canada", note: "All provinces" },
    { href: "/locations/online-quran-classes-pakistan", label: "🇵🇰 Pakistan", note: "Pakistan time" },
    { href: "/locations", label: "🌍 All countries", note: "Europe, Gulf, Asia and more" },
  ],
  breadcrumbs: [...BASE_CRUMB, { label: "Quran Classes in Urdu" }],
  ctaHeadline: <>Learn Quran in <em style={{ color: "var(--gold-lt)" }}>Urdu or English</em></>,
  ctaSubtext: "Request free trial sessions and tell us which language you want the lessons explained in.",
  ctaBullets: [
    `✓ ${TRIAL.classes} free ${TRIAL.durationMinutes}-minute trial sessions — no credit card`,
    "✓ Urdu, English or both",
    "✓ Male and female tutors",
    "✓ Lesson times in your own time zone",
  ],
  formNotesLabel: "Which language should the teacher explain in? (Urdu, English or both)",
  relatedLinks: [
    { href: "/nazra-quran-online", label: "Nazra Quran Online" },
    { href: "/online-madrasah", label: "Online Madrasah for Kids" },
    { href: "/online-quran-classes-for-kids", label: "Quran Classes for Kids" },
    { href: "/female-quran-teacher-online", label: "Female Quran Teacher" },
    { href: "/hifz-quran-online", label: "Online Hifz Program" },
    { href: "/pricing", label: "Fees and Plans" },
  ],
};

/* ───────────────────────── Nazra Quran (reading by sight) ───────────────────────── */

export const nazraQuranOnline: LandingData = {
  metaTitle: "Nazra Quran Online — Quran Reading Classes 1-on-1 | NoorPath",
  metaDescription:
    `Nazra Quran online: learn to read the Quran by sight after Noorani Qaida, with a live one-to-one teacher who corrects every mistake. Kids and adults. ${TRIAL.classes} free trial sessions.`,
  keywords: [
    "nazra quran online", "online nazra quran classes", "nazra quran course", "quran reading classes online",
    "learn to read quran online", "nazra quran for kids", "nazra quran with tajweed", "quran reading course for adults",
    "nazira quran online", "online quran reading teacher",
  ],
  serviceName: "Nazra Quran Online — Quran Reading Course",
  serviceDescription:
    "Live one-to-one online lessons in reading the Quran by sight (Nazra) after Noorani Qaida, with correct pronunciation and basic Tajweed, at the learner's own pace.",
  audience: "Children and adults who have finished, or nearly finished, Noorani Qaida",
  whoThisIsFor: [
    "Your child has finished Noorani Qaida and is ready to start reading from the Quran",
    "You can read slowly and want to become fluent and correct",
    "You learned Nazra as a child and have forgotten much of it",
    "You are an adult who wants to complete a full reading of the Quran with a teacher listening",
    "Your child reads quickly but with mistakes that nobody has corrected",
  ],
  h1: "Nazra Quran Online — Learn to Read the Quran with a Live Teacher",
  eyebrow: "Quran reading by sight · after Qaida",
  heroText:
    'Nazra means reading the Quran by looking at the page. In live <strong style="color:var(--gold-lt)">one-to-one Nazra Quran classes</strong>, the teacher listens to every line, corrects pronunciation as you read, and moves forward only when the lesson is sound. <strong style="color:var(--gold-lt)">Free trial.</strong>',
  sectionTitle: <>Nazra Quran: From Slow Reading to <em className="accent">Fluent Recitation</em></>,
  sectionSubtitle:
    "Nazra is the stage between Noorani Qaida and Hifz or advanced Tajweed. It is where a learner turns letters and rules into real reading — and where uncorrected mistakes become habits.",
  quickAnswer:
    `<strong>Nazra Quran</strong> is reading the Quran by sight, from the Mushaf, with correct pronunciation. It follows Noorani Qaida and comes before Hifz. NoorPath teaches Nazra online in live one-to-one lessons for children and adults, starting with ${TRIAL_OFFER}. <a href="/free-quran-classes-online" style="color:var(--emerald);font-weight:700;">Book a Nazra trial →</a>`,
  seoIntro:
    'In a <strong>Nazra Quran course</strong> the learner reads a set portion (the sabaq) to the teacher each lesson. The teacher corrects letters, vowel lengths and stops, the learner repeats, and the next sabaq is set. Because online lessons at NoorPath are one-to-one, the whole lesson is spent on that one learner\'s reading rather than waiting for a turn.',
  phases: [
    { phase: "Stage 1", title: "Level Check", duration: "Trial lessons", desc: "The teacher hears the learner read and checks whether any part of Noorani Qaida needs revising first." },
    { phase: "Stage 2", title: "Slow, Correct Reading", duration: "Own pace", desc: "Short portions read carefully, usually beginning with the short surahs of Juz Amma, with every mistake corrected." },
    { phase: "Stage 3", title: "Fluent Reading", duration: "Own pace", desc: "Longer portions with steady pace, correct stops and the main Tajweed rules applied while reading." },
    { phase: "Stage 4", title: "Completing the Quran", duration: "Ongoing", desc: "Continuing through the Quran portion by portion, then choosing Tajweed in depth or Hifz." },
  ],
  steps: [
    { title: "Tell us where the learner is", desc: "Finished Qaida, halfway through the Quran, or restarting after years — share the level and your time zone." },
    { title: "Read to a tutor in a free lesson", desc: `In a ${TRIAL.durationMinutes}-minute trial the tutor listens, corrects, and tells you honestly where to begin.` },
    { title: "Set a regular sabaq", desc: "Two to four short lessons a week keep reading fresh. The tutor sets a portion to practise before the next lesson." },
    { title: "Practise a little every day", desc: "Ten minutes of reading the day's sabaq aloud at home makes the next lesson much easier." },
  ],
  features: [
    { icon: <BookOpen size={22} />, title: "Every Line Heard", desc: "One-to-one means the teacher listens to the whole sabaq, not a few lines of it." },
    { icon: <CheckCircle size={22} />, title: "Mistakes Fixed Early", desc: "Wrong letters and vowel lengths are corrected as they happen, before they become habit." },
    { icon: <Award size={22} />, title: "Tajweed While Reading", desc: "The main Tajweed rules are introduced during Nazra, in the verses where they appear." },
    { icon: <Users size={22} />, title: "Kids and Adults", desc: "Children moving on from Qaida and adults restarting are both normal starting points." },
    { icon: <Shield size={22} />, title: "Male and Female Tutors", desc: `${TUTOR_FACTS.femaleTutors}` },
    { icon: <Globe size={22} />, title: "English or Urdu", desc: "Lessons can be explained in English, Urdu or both; say which you prefer when you book." },
  ],
  compareRows: [
    { method: "1-on-1 online Nazra (NoorPath)", verdict: "Whole lesson is your reading", note: "Live correction on every line, at home, in your time zone" },
    { method: "Group class", verdict: "Shared turns", note: "Each child reads a few lines; mistakes are easy to miss" },
    { method: "Reading alone or with a parent", verdict: "Depends on the listener", note: "Works if the listener reads correctly and can spot errors" },
    { method: "Apps and recordings", verdict: "Listening practice", note: "Good for hearing correct recitation; they cannot hear you" },
  ],
  faqs: [
    { q: "What is Nazra Quran?", a: "Nazra (also written Nazira) means reading the Quran by sight — looking at the Arabic text and reading it correctly — as opposed to Hifz, which is reciting from memory. It is usually the stage after Noorani Qaida." },
    { q: "What is the difference between Nazra and Hifz?", a: "In Nazra the learner reads from the page. In Hifz the learner memorises and recites without looking. Fluent, correct Nazra normally comes first, because memorising a mistake is harder to undo than reading one." },
    { q: "Does my child need to finish Noorani Qaida before Nazra?", a: "Yes, or very nearly. The Qaida teaches the letters, vowel marks and joining rules that Nazra relies on. In the trial the tutor checks the level and revises any weak Qaida lessons first." },
    { q: "Is Nazra taught with Tajweed?", a: "Yes. Correct pronunciation is part of every lesson, and the main Tajweed rules are introduced as they come up in the reading. Learners who want the rules in depth can continue with a Tajweed course." },
    { q: "How long does Nazra Quran take?", a: "It differs from learner to learner and depends on the starting level, the number of lessons a week and daily practice, so NoorPath does not promise a completion date. After the trial the tutor can describe a realistic plan for your situation." },
    { q: "Can adults join Nazra classes?", a: "Yes. Many adults read slowly, or stopped years ago. Lessons are private and one-to-one, so you read only to your tutor." },
    { q: "Can I get a female teacher for Nazra?", a: `${TUTOR_FACTS.femaleTutors} Ask when you enquire; she is assigned subject to availability and confirmed before the trial.` },
    { q: "How much do online Nazra Quran classes cost?", a: `${PRICE_LINE} You begin with ${TRIAL_OFFER} and no credit card.` },
  ],
  breadcrumbs: [...BASE_CRUMB, { label: "Nazra Quran Online" }],
  ctaHeadline: <>Start Reading the Quran <em style={{ color: "var(--gold-lt)" }}>Correctly</em></>,
  ctaSubtext: "Request free trial sessions. The tutor listens to the learner read and tells you where to begin.",
  ctaBullets: [
    `✓ ${TRIAL.classes} free ${TRIAL.durationMinutes}-minute trial sessions — no credit card`,
    "✓ Live one-to-one reading with correction",
    "✓ Kids and adults, male and female tutors",
    `✓ Plans from $${STARTER.monthlyPriceUsd} a month`,
  ],
  relatedLinks: [
    { href: "/courses/noorani-qaida-online", label: "Noorani Qaida (before Nazra)" },
    { href: "/learn-tajweed-online", label: "Tajweed Classes (after Nazra)" },
    { href: "/hifz-quran-online", label: "Online Hifz Program" },
    { href: "/online-quran-classes-in-urdu", label: "Quran Classes in Urdu" },
    { href: "/online-quran-classes-for-adults", label: "Quran Classes for Adults" },
    { href: "/noorani-qaida", label: "Free Interactive Noorani Qaida" },
  ],
};

/* ───────────────────────── Online madrasah ───────────────────────── */

export const onlineMadrasah: LandingData = {
  metaTitle: "Online Madrasah for Kids — One-to-One Quran & Islamic Studies",
  metaDescription:
    `An online madrasah at home: one-to-one Quran reading, duas and Islamic studies for children, at times you choose. Male and female teachers. ${TRIAL.classes} free trial sessions.`,
  keywords: [
    "online madrasah", "online madrasa", "online madrasah for kids", "online madrassa uk",
    "online madrasa south africa", "online maktab", "online islamic school for kids", "madrasah classes online",
    "online madrasah one to one", "evening madrasah online",
  ],
  serviceName: "Online Madrasah — One-to-One Quran and Islamic Studies for Children",
  serviceDescription:
    "A one-to-one online alternative to an evening madrasah: Noorani Qaida or Quran reading, daily duas and basic Islamic studies for children, taught live at home at times the family chooses.",
  audience: "Parents of children aged about 4 to 14",
  whoThisIsFor: [
    "There is no madrasah nearby, or the nearest one has a waiting list",
    "Evening madrasah five days a week does not fit around school, clubs and homework",
    "Your child is lost in a large class and needs individual attention",
    "You want Quran reading, duas and Islamic basics taught together, at home",
    "You want to see exactly what was taught and what to practise",
  ],
  h1: "Online Madrasah for Kids — Quran, Duas and Islamic Studies One-to-One",
  eyebrow: "Madrasah · Madrasa · Maktab — at home",
  heroText:
    'A madrasah education at home: <strong style="color:var(--gold-lt)">Quran reading, daily duas and Islamic studies</strong> taught live and one-to-one, at times that fit your child\'s week. Your child gets the whole lesson, not a turn in a queue. <strong style="color:var(--gold-lt)">Free trial.</strong>',
  sectionTitle: <>What an <em className="accent">Online Madrasah</em> Looks Like at NoorPath</>,
  sectionSubtitle:
    "It is not a recorded course or a large online classroom. It is one teacher and one child on a live video call, following a plan you agree: so much Quran, so much duas, so much Islamic studies.",
  quickAnswer:
    `An <strong>online madrasah</strong> teaches children what an evening madrasah or maktab teaches — Qaida or Quran reading, duas, and the basics of Islam — over live video at home. At NoorPath every lesson is one-to-one, you choose the days and the balance of subjects, and you start with ${TRIAL_OFFER}. <a href="/free-quran-classes-online" style="color:var(--emerald);font-weight:700;">Request a trial →</a>`,
  seoIntro:
    'Parents use the words <strong>madrasah</strong>, <strong>madrasa</strong>, <strong>madrassa</strong> and <strong>maktab</strong> for the same thing: regular after-school Islamic education. Where a good local madrasah is within reach, it gives children friends and community. Where it is not — or where the timetable does not work — one-to-one online lessons cover the same learning at home, and many families use both.',
  phases: [
    { phase: "Subject 1", title: "Qaida or Quran Reading", duration: "Every lesson", desc: "Beginners start with Noorani Qaida; children who can read continue with Quran reading and Tajweed. This is the core of each lesson." },
    { phase: "Subject 2", title: "Daily Duas", duration: "A few minutes", desc: "Duas for eating, sleeping, waking, travelling and leaving the home, with meanings, learned a little at a time." },
    { phase: "Subject 3", title: "Islamic Studies", duration: "As agreed", desc: "The pillars of Islam, the basics of prayer and belief, stories from the Seerah, and good character, at the child's level." },
  ],
  steps: [
    { title: "Tell us about your child", desc: "Age, what they can already read, and what you want covered — Quran only, or Quran with duas and Islamic studies." },
    { title: "Try it free", desc: `Your child meets the teacher in ${TRIAL_OFFER}. You see how the teacher handles your child before paying anything.` },
    { title: "Choose days and times", desc: `Pick one to four lessons a week around school and activities. A lesson can be moved with ${RESCHEDULE_NOTICE_HOURS} hours' notice, subject to tutor availability.` },
    { title: "See the progress", desc: "Sit in on lessons whenever you like, and check homework, attendance and progress in the Parent Portal." },
  ],
  features: [
    { icon: <UserCheck size={22} />, title: "One Child, One Teacher", desc: "The whole lesson is your child reading, answering and being corrected — no waiting for a turn." },
    { icon: <Clock size={22} />, title: "Fits the School Week", desc: "After school, early evening or weekends, in your own time zone. No travel, no daily two-hour block." },
    { icon: <BookOpen size={22} />, title: "Three Subjects, One Plan", desc: "Quran reading, duas and Islamic studies combined in the proportion you choose." },
    { icon: <Shield size={22} />, title: "Parents Can Watch", desc: "Lessons happen in your home. Stay in the room or nearby for any lesson." },
    { icon: <Award size={22} />, title: "Qualified Teachers", desc: `${TUTOR_FACTS.credentials} ${TUTOR_FACTS.femaleTutors}` },
    { icon: <Home size={22} />, title: "A Teacher Who Fits", desc: TUTOR_FACTS.rematch },
  ],
  compareRows: [
    { method: "One-to-one online madrasah (NoorPath)", verdict: "Individual attention", note: "At home, flexible days, parents can watch every lesson" },
    { method: "Local mosque madrasah", verdict: "Community and friends", note: "Valuable where available; fixed timetable, larger classes, travel each day" },
    { method: "Online group madrasah", verdict: "Lower cost per child", note: "A shared class on video; less time reading to the teacher" },
    { method: "Teaching at home yourself", verdict: "Closest bond", note: "Works when a parent reads correctly and has the time every day" },
  ],
  faqs: [
    { q: "What is an online madrasah?", a: "It is after-school Islamic education delivered over live video instead of in a mosque classroom: learning to read the Quran, memorising duas and short surahs, and learning the basics of Islam. At NoorPath it is taught one-to-one rather than as a class." },
    { q: "Can an online madrasah replace our local madrasah?", a: "For the learning itself — Quran reading, duas, Islamic basics — yes, and many children progress faster with individual attention. What it does not replace is the community of a mosque. Many families keep a weekend mosque class for that and use online lessons for the reading." },
    { q: "What age can children start?", a: "Children can begin Noorani Qaida from about age 4 with short lessons. Duas suit young children well; Islamic studies topics are introduced as the child is ready." },
    { q: "How many days a week is it?", a: "You choose: one, two or four lessons a week on the published plans. Unlike a five-evening madrasah, the timetable is built around your child's school week." },
    { q: "What subjects are covered?", a: "Noorani Qaida or Quran reading with Tajweed, daily duas, and Islamic studies basics — the pillars of Islam, prayer, belief, Seerah stories and manners. Hifz can be added for children who are ready. You agree the balance with the teacher." },
    { q: "Is it a live teacher or recorded lessons?", a: "A live teacher, every lesson, on a one-to-one video call. Nothing is pre-recorded." },
    { q: "Can my daughter have a female teacher?", a: `${TUTOR_FACTS.femaleTutors} Ask when you enquire; she is assigned subject to availability and confirmed before the trial.` },
    { q: "How much does an online madrasah cost?", a: `${PRICE_LINE} Sibling discounts apply for families. You start with ${TRIAL_OFFER} and no credit card.` },
    { q: "Do you give a certificate or follow a school syllabus?", a: "NoorPath is a tutoring academy, not an accredited school, and does not issue formal qualifications. Progress is recorded in the Parent Portal so you can see what your child has completed." },
  ],
  locations: [
    { href: "/locations/online-quran-classes-uk", label: "🇬🇧 United Kingdom", note: "After-school slots in UK time" },
    { href: "/locations/online-quran-classes-south-africa", label: "🇿🇦 South Africa", note: "Afternoon and evening" },
    { href: "/locations/online-quran-classes-usa", label: "🇺🇸 United States", note: "Eastern to Pacific time" },
    { href: "/locations/online-quran-classes-canada", label: "🇨🇦 Canada", note: "All provinces" },
    { href: "/locations/online-quran-classes-australia", label: "🇦🇺 Australia", note: "After school" },
    { href: "/locations", label: "🌍 All countries", note: "Europe, Gulf, Asia and more" },
  ],
  breadcrumbs: [...BASE_CRUMB, { label: "Online Madrasah" }],
  ctaHeadline: <>A Madrasah That Fits <em style={{ color: "var(--gold-lt)" }}>Your Child’s Week</em></>,
  ctaSubtext: "Request free trial sessions and tell us what you want covered: Quran, duas, Islamic studies, or all three.",
  ctaBullets: [
    `✓ ${TRIAL.classes} free ${TRIAL.durationMinutes}-minute trial sessions — no credit card`,
    "✓ One-to-one, live, at home",
    "✓ Quran reading, duas and Islamic studies",
    "✓ Male and female teachers",
  ],
  formNotesLabel: "What would you like covered? (Quran, duas, Islamic studies)",
  relatedLinks: [
    { href: "/online-quran-classes-for-kids", label: "Quran Classes for Kids" },
    { href: "/courses/islamic-studies-online", label: "Islamic Studies Online" },
    { href: "/courses/daily-duas-for-kids", label: "Daily Duas for Kids" },
    { href: "/nazra-quran-online", label: "Nazra Quran Online" },
    { href: "/online-quran-classes-in-urdu", label: "Quran Classes in Urdu" },
    { href: "/noorani-qaida", label: "Free Interactive Noorani Qaida" },
  ],
};
