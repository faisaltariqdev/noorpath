import { Award, BookOpen, CheckCircle, Clock, Music, Brain, Users, Video, Shield } from "lucide-react";
import type { KeywordLandingPageProps } from "@/components/KeywordLandingPage";
import { PRICING_PLANS, TRIAL } from "@/lib/academyFacts";

const BASE_CRUMB = [
  { label: "Home", href: "/" },
  { label: "Online Quran Classes", href: "/online-quran-classes" },
];

const DEFAULT_COMPARE = [
  { method: "1-on-1 Live Tutor (NoorPath)", verdict: "Live feedback", note: "The tutor can listen and respond during the lesson" },
  { method: "YouTube / Apps alone", verdict: "Self-directed", note: "Useful for independent study but without live tutor feedback" },
  { method: "Group online class", verdict: "Shared attention", note: "Tutor attention is divided among learners" },
  { method: "Local madrassa", verdict: "In person", note: "Travel and fixed local schedules may be considerations" },
];

export const learnQuranOnline: Omit<KeywordLandingPageProps, "canonicalPath"> & { keywords: string[]; metaTitle: string; metaDescription: string } = {
  metaTitle: "Learn Quran Online — Live 1-on-1 Classes | NoorPath Academy",
  metaDescription:
    "Learn Quran online from zero with live tutors. Noorani Qaida, Tajweed, Hifz and Arabic — 1-on-1 online classes for kids and adults. Free 30-min trial, no credit card.",
  keywords: [
    "learn quran online", "learning quran online", "learn the quran online", "quran learning online",
    "how to learn quran online", "learn quran online free trial", "learn quran online for beginners",
    "learn quran online for kids", "learn quran online for adults", "best way to learn quran online",
  ],
  serviceName: "Learn Quran Online — Live 1-on-1 Classes",
  serviceDescription: "Live online Quran learning for beginners to advanced — Noorani Qaida, Tajweed, Hifz, and Arabic with one-to-one tutors.",
  audience: "Muslim learners of all ages worldwide",
  h1: "Learn Quran Online",
  heroText:
    `Start from zero or pick up where you left off. Live <strong style="color:var(--gold-lt)">1-on-1 Quran classes</strong> — Noorani Qaida, Tajweed, Hifz & Arabic. <strong style="color:var(--gold-lt)">Free ${TRIAL.durationMinutes}-minute trial — no credit card.</strong>`,
  sectionTitle: <>Learn Quran Online with <em className="accent">Live Tutoring</em></>,
  sectionSubtitle:
    "Learn Quran online from home through live one-to-one lessons, tutor matching by timezone, and a structured curriculum from Qaida to Hifz.",
  quickAnswer:
    `One way to <strong>learn Quran online</strong> is through live <strong>1-on-1 classes</strong> with a tutor — starting with Noorani Qaida, then Quran reading, then Tajweed. NoorPath offers a free ${TRIAL.durationMinutes}-minute trial with no credit card. <a href="/free-quran-classes-online" style="color:var(--emerald);font-weight:700;">Book your free class →</a>`,
  seoIntro:
    'Whether you are a parent searching for your child, an adult returning to Quran, or a complete beginner, <strong>learning Quran online</strong> can provide access to live one-to-one teaching from home. NoorPath Academy matches learners with tutors by needs, timezone, preferences, and availability. Unlike self-directed recordings, a live tutor can listen to Makharij (pronunciation) and provide feedback in real time.',
  phases: [
    { phase: "Phase 1", title: "Noorani Qaida", duration: "Timing varies by learner", desc: "Arabic alphabet, harakat, letter joining, and basic word reading." },
    { phase: "Phase 2", title: "Quran Reading", duration: "Individual pace", desc: "Build fluency reading short surahs with live teacher feedback." },
    { phase: "Phase 3", title: "Tajweed & Hifz", duration: "Ongoing", desc: "Polish recitation with Tajweed rules or begin structured Hifz memorization with revision system." },
  ],
  compareRows: DEFAULT_COMPARE,
  features: [
    { icon: <BookOpen size={22} />, title: "Start from Zero", desc: "Complete beginners welcome — we begin with Noorani Qaida and Arabic letters at your pace." },
    { icon: <Users size={22} />, title: "1-on-1 Live Classes", desc: "Live online sessions allow the tutor to listen and provide feedback in real time." },
    { icon: <Award size={22} />, title: "Tutor Matching", desc: "Tutor matching considers learner needs, schedule, preferences, timezone, and availability." },
    { icon: <Clock size={22} />, title: "Flexible Schedule", desc: "Tutor matching is available across learner timezones, subject to current availability." },
    { icon: <Video size={22} />, title: "Kids & Adults", desc: "Programmes are available for children and adult learners at different starting levels." },
    { icon: <CheckCircle size={22} />, title: "Structured Path", desc: "Qaida → Quran reading → Tajweed → optional Hifz, with progress based on the individual learner." },
  ],
  faqs: [
    { q: "Can I learn Quran online as a complete beginner?", a: "Yes. NoorPath starts every beginner with Noorani Qaida — Arabic letters, vowels, and pronunciation. No prior Arabic knowledge is required for children or adults." },
    { q: "How long does it take to learn Quran online?", a: "Learning time is individual and depends on starting level, lesson frequency, practice, goals, and pace. A tutor can suggest an illustrative path after assessing the learner." },
    { q: "Is learning Quran online effective?", a: "Live 1-on-1 classes provide direct tutor attention and real-time pronunciation feedback. Results still depend on the learner's attendance, practice, and pace." },
    { q: "Do you offer learn Quran online for kids?", a: "Yes. Programmes are available for children ages 4–12, with lesson arrangements based on learner needs and tutor availability." },
    { q: "Is the first class really free?", a: `Yes — new learners can request one live ${TRIAL.durationMinutes}-minute trial. No credit card is required and tutor availability is confirmed after the request.` },
    { q: "What is the best age to learn Quran online?", a: "Children can start from age 4 with adapted sessions, and adults can begin at any age. The suitable format depends on the individual learner." },
    { q: "Do I need to know Arabic to learn Quran online?", a: "No. You learn to read the Arabic script of the Quran — not conversational Arabic. Your tutor teaches pronunciation from the very first letter." },
  ],
  breadcrumbs: [...BASE_CRUMB, { label: "Learn Quran Online" }],
  ctaHeadline: <>Start Learning Quran <em style={{ color: "var(--gold-lt)" }}>Online Today</em></>,
  ctaSubtext: "Book your free trial — meet your tutor, get a level assessment, and receive a personalised learning plan.",
  relatedLinks: [
    { href: "/blog/how-to-improve-quran-recitation", label: "How to Improve Quran Recitation" },
    { href: "/online-quran-classes-for-kids", label: "Quran Classes for Kids" },
    { href: "/online-quran-classes-for-adults", label: "Quran Classes for Adults" },
    { href: "/online-quran-for-beginners", label: "Quran for Beginners" },
    { href: "/courses/noorani-qaida-online", label: "Noorani Qaida Online" },
    { href: "/blog/learn-quran-online-adult-beginner-guide", label: "Adult Beginner Guide" },
  ],
};

export const onlineQuranAcademy: Omit<KeywordLandingPageProps, "canonicalPath"> & { keywords: string[]; metaTitle: string; metaDescription: string } = {
  metaTitle: "Online Quran Academy — Live 1-on-1 Tutors | NoorPath",
  metaDescription:
    "NoorPath Online Quran Academy — live 1-on-1 classes for kids and adults. Noorani Qaida, Tajweed, Hifz and Arabic. Free 30-minute trial.",
  keywords: [
    "online quran academy", "quran academy online", "online quran learning academy",
    "learn online quran academy", "best online quran academy", "quran academies online",
    "online islamic academy", "quran school online", "online quran institute",
  ],
  serviceName: "NoorPath Online Quran Academy",
  serviceDescription: "Online Quran academy offering 1-on-1 live classes — Qaida, Tajweed, Hifz, Arabic and Islamic studies for families.",
  audience: "Muslim families seeking structured online Quran education",
  h1: "Online Quran Academy",
  heroText:
    `NoorPath Academy is an <strong style="color:var(--gold-lt)">online Quran academy</strong> offering live 1-on-1 tutoring rather than pre-recorded lessons. <strong style="color:var(--gold-lt)">Free ${TRIAL.durationMinutes}-minute trial class.</strong>`,
  sectionTitle: <>Why Choose Our <em className="accent">Online Quran Academy</em></>,
  sectionSubtitle:
    "NoorPath is a dedicated Quran academy with live one-to-one lessons, structured programmes, and tutor matching based on learner needs and availability.",
  quickAnswer:
    `An <strong>online Quran academy</strong> offers structured Quran learning through online lessons. NoorPath Academy provides live 1-on-1 classes and a free ${TRIAL.durationMinutes}-minute trial with no credit card required. <a href="/free-quran-classes-online" style="color:var(--emerald);font-weight:700;">Book free trial →</a>`,
  seoIntro:
    'When comparing an <strong>online Quran academy</strong>, families may consider lesson format, curriculum, scheduling, and pricing. NoorPath Academy offers live one-to-one lessons, a structured Noorani Qaida-to-Hifz curriculum, family plans, and tutor matching based on timezone and current availability.',
  phases: [
    { phase: "Program 1", title: "Noorani Qaida", duration: "Ages 4+", desc: "Arabic foundation for complete beginners and learners who need reading practice." },
    { phase: "Program 2", title: "Quran & Tajweed", duration: "All ages", desc: "Fluent Quran reading with proper Tajweed rules — the core of academy education." },
    { phase: "Program 3", title: "Hifz & Advanced", duration: "Ages 7+", desc: "Full Quran memorization with Sabaq-Sabqi-Manzil revision and optional Sanad track." },
  ],
  compareRows: [
    { method: "NoorPath Academy (structured)", verdict: "Live 1-on-1", note: "Structured programmes with tutor matching and family plan options" },
    { method: "Tutor marketplace", verdict: "Independent choice", note: "Learners compare and select individual tutors" },
    { method: "Pre-recorded courses", verdict: "Self-directed", note: "Recorded content does not provide live listening or correction" },
    { method: "Local madrassa", verdict: "In person", note: "Travel and local scheduling are practical considerations" },
  ],
  features: [
    { icon: <Award size={22} />, title: "Tutor Matching", desc: "Tutors are matched according to learner needs, preferences, schedule, and availability." },
    { icon: <BookOpen size={22} />, title: "Full Curriculum", desc: "Noorani Qaida, Tajweed, Hifz, Arabic, Islamic studies — all under one academy." },
    { icon: <Users size={22} />, title: "Family Plans", desc: "Enroll multiple children at sibling discounts — one academy for the whole family." },
    { icon: <Shield size={22} />, title: "Parent Involvement", desc: "Parents may monitor children's online lessons and discuss scheduling needs during matching." },
    { icon: <Clock size={22} />, title: "Global Scheduling", desc: "UK, US, Canada, Australia, UAE, Pakistan — timezone-friendly slots." },
    { icon: <CheckCircle size={22} />, title: "Structured Programmes", desc: "Course paths cover Qaida, Quran reading, Tajweed, Hifz, Arabic, and Islamic studies." },
  ],
  faqs: [
    { q: "What is an online Quran academy?", a: "An online Quran academy provides Quran education via online lessons. NoorPath offers live one-to-one lessons, structured programmes, tutor matching, and enrolment support." },
    { q: "How is NoorPath different from tutor marketplaces?", a: "Tutor marketplaces allow users to select independent listings. NoorPath matches a tutor based on learner needs, preferences, schedule, timezone, and current availability." },
    { q: "What courses does your online Quran academy offer?", a: "Noorani Qaida, Quran reading, Tajweed, Hifz memorization, Arabic language, Islamic studies, and daily duas for kids — all with live 1-on-1 instruction." },
    { q: "How much does online Quran academy cost?", a: `Plans start from $${PRICING_PLANS[0].monthlyPriceUsd}/month. New learners can request a free ${TRIAL.durationMinutes}-minute trial with no credit card required.` },
    { q: "Do you have an online Quran academy for kids?", a: "Yes — ages 4–12 with child-specialist tutors. See our dedicated kids program page." },
    { q: "Where is NoorPath Academy located?", a: "We are an online academy serving families worldwide — with timezone-friendly slots for UK, USA, Canada, Australia, UAE, and Pakistan." },
    { q: "How do I enroll in the online Quran academy?", a: "Book a free 30-minute trial via the form below. After your trial, choose a monthly plan. No payment until you decide to continue." },
  ],
  breadcrumbs: [...BASE_CRUMB, { label: "Online Quran Academy" }],
  ctaHeadline: <>Join Our <em style={{ color: "var(--gold-lt)" }}>Online Quran Academy</em></>,
  ctaSubtext: "Request a free trial to experience a live one-to-one lesson before choosing a monthly plan.",
  relatedLinks: [
    { href: "/blog/best-online-quran-academy-guide", label: "How to Choose an Academy" },
    { href: "/online-quran-classes-for-kids", label: "Kids Classes" },
    { href: "/our-tutors", label: "Our Tutors" },
    { href: "/pricing", label: "Academy Pricing" },
    { href: "/locations", label: "Classes by Country" },
  ],
};

export const learnTajweedOnline: Omit<KeywordLandingPageProps, "canonicalPath"> & { keywords: string[]; metaTitle: string; metaDescription: string } = {
  metaTitle: "Learn Tajweed Online — Live 1-on-1 Tutors | NoorPath Academy",
  metaDescription:
    "Learn Tajweed online through live 1-on-1 classes covering Makharij, Madd, Ghunna and Qalqalah. Free 30-minute trial with no credit card.",
  keywords: [
    "learn tajweed online", "tajweed classes online", "online tajweed course",
    "learn tajweed online free trial", "tajweed lessons online", "quran tajweed online",
    "tajweed for beginners online", "online tajweed teacher", "study tajweed online",
  ],
  serviceName: "Learn Tajweed Online — Live 1-on-1",
  serviceDescription: "Online Tajweed classes with live one-to-one tutoring and real-time recitation feedback.",
  h1: "Learn Tajweed Online",
  heroText:
    'Study Quran recitation through live <strong style="color:var(--gold-lt)">Tajweed classes online</strong> with one-to-one tutor feedback. <strong style="color:var(--gold-lt)">Free trial lesson.</strong>',
  sectionTitle: <>Master Tajweed <em className="accent">Online</em></>,
  sectionSubtitle: "Tajweed covers Quran recitation rules such as Noon Sakinah, Madd, Ghunna, and Qalqalah, practised using Quran verses.",
  quickAnswer:
    `To <strong>learn Tajweed online</strong>, live video lessons allow a tutor to listen to your recitation and provide feedback. NoorPath offers Tajweed programmes for different levels, with a free ${TRIAL.durationMinutes}-minute trial available. <a href="/free-quran-classes-online" style="color:var(--emerald);font-weight:700;">Book free Tajweed lesson →</a>`,
  seoIntro:
    '<strong>Learning Tajweed online</strong> gives learners access to live recitation feedback when local lessons are not practical. The programme covers Makharij, Noon Sakinah, Madd, Qalqalah, and Ghunna using Quran verses. It is intended for learners who can already read basic Quran and for advanced students preparing for further study.',
  phases: [
    { phase: "Level 1", title: "Basic Tajweed", duration: "Individual pace", desc: "Makharij, Noon/Meem Sakinah, basic Madd and Qalqalah — applied to Juz Amma." },
    { phase: "Level 2", title: "Intermediate Rules", duration: "Individual pace", desc: "Idgham, Ikhfa, Iqlab, advanced Madd, characteristics of letters (Sifat)." },
    { phase: "Level 3", title: "Advanced / Ijazah", duration: "Individual pace", desc: "Recitation refinement and preparation for optional Ijazah study with Sanad." },
  ],
  compareRows: DEFAULT_COMPARE,
  features: [
    { icon: <Music size={22} />, title: "Core Tajweed Rules", desc: "Noon/Meem Sakinah, Madd, Idgham, Ikhfa, Qalqalah, and Ghunna." },
    { icon: <Award size={22} />, title: "Advanced Study", desc: "Learners may discuss preparation for optional Ijazah study when appropriate." },
    { icon: <Users size={22} />, title: "Live Feedback", desc: "A tutor can observe recitation and respond during the online lesson." },
    { icon: <BookOpen size={22} />, title: "Beginner to Ijazah", desc: "Start after basic reading or pursue advanced Tajweed and Ijazah certification." },
    { icon: <Clock size={22} />, title: "Flexible Times", desc: "Tutor matching considers your timezone, schedule, and current availability." },
    { icon: <CheckCircle size={22} />, title: "Practice with Quran", desc: "Rules are practised using Quran ayahs as well as supporting exercises." },
  ],
  faqs: [
    { q: "Can I learn Tajweed online without knowing Arabic?", a: "You should be able to read Quran at a basic level first. If you cannot read yet, start with our Noorani Qaida program, then move to Tajweed." },
    { q: "How long does it take to learn Tajweed online?", a: "Timing is individual and depends on reading level, lesson frequency, practice, and goals. Any roadmap given after assessment is illustrative rather than a guaranteed completion timeline." },
    { q: "What Tajweed rules will I learn?", a: "Makharij (articulation points), Noon Sakinah & Tanween rules, Meem Sakinah, Madd (elongation), Qalqalah, Ghunna, and characteristics of letters." },
    { q: "Do you offer Tajweed classes for kids?", a: "Yes — simplified Tajweed for children ages 7+ who can already read basic Quran." },
    { q: "Is there a free Tajweed trial?", a: "Yes — book a free 30-minute lesson. Your tutor assesses your level and demonstrates Tajweed correction live." },
    { q: "What is the difference between reading Quran and Tajweed?", a: "Reading means sounding out Arabic letters correctly. Tajweed is the set of rules that make recitation beautiful and accurate to how the Prophet ﷺ recited — both are essential." },
  ],
  breadcrumbs: [...BASE_CRUMB, { label: "Learn Tajweed Online" }],
  ctaHeadline: <>Start Tajweed <em style={{ color: "var(--gold-lt)" }}>Online Today</em></>,
  ctaSubtext: "Request a free Tajweed trial to experience live one-to-one recitation feedback.",
  relatedLinks: [
    { href: "/learn-tajweed-online", label: "Tajweed Course Details" },
    { href: "/blog/tajweed-rules-complete-guide", label: "Tajweed Rules Guide" },
    { href: "/quran-teacher-online", label: "Online Quran Teacher" },
    { href: "/learn-quran-online", label: "Learn Quran Online" },
  ],
};

export const hifzQuranOnline: Omit<KeywordLandingPageProps, "canonicalPath"> & { keywords: string[]; metaTitle: string; metaDescription: string } = {
  metaTitle: "Hifz Quran Online — Memorization Program | NoorPath Academy",
  metaDescription:
    "Hifz Quran online with live one-to-one tutoring. Structured Juz-by-Juz memorization and Sabaq-Sabqi-Manzil revision for kids and adults. Free trial.",
  keywords: [
    "hifz quran online", "hifz online", "quran memorization online", "online hifz program",
    "memorize quran online", "hifz classes online", "online hifz course", "hifz tutor online",
    "quran hifz online for kids", "hifz e quran online",
  ],
  serviceName: "Hifz Quran Online — Memorization Program",
  serviceDescription: "Structured online Quran memorization with live one-to-one tutoring and a Sabaq, Sabqi, Manzil revision system.",
  h1: "Hifz Quran Online",
  heroText:
    'Study Quran memorization from home through a live <strong style="color:var(--gold-lt)">Hifz programme online</strong>. Structured Juz-by-Juz learning with revision. Kids and adults welcome. <strong style="color:var(--gold-lt)">Free trial.</strong>',
  sectionTitle: <>Online Hifz Program with <em className="accent">Live Tutoring</em></>,
  sectionSubtitle: "Our Hifz program uses the Sabaq–Sabqi–Manzil approach — new memorization plus structured revision to support retention.",
  quickAnswer:
    '<strong>Hifz Quran online</strong> uses live tutor guidance for memorization and revision. NoorPath offers a Sabaq-Sabqi-Manzil-based programme for kids and adults. <a href="/free-quran-classes-online" style="color:var(--emerald);font-weight:700;">Book free Hifz trial →</a>',
  seoIntro:
    'Studying <strong>Hifz Quran online</strong> involves consistent practice, live tutor guidance, and structured revision. NoorPath\'s online Hifz programme uses Sabaq (new), Sabqi (recent revision), and Manzil (older revision) as a framework for Juz-by-Juz memorization from home.',
  phases: [
    { phase: "Stage 1", title: "Foundation", duration: "Individual pace", desc: "Tajweed assessment, memorization rhythm, and building a consistent Hifz habit with short surahs." },
    { phase: "Stage 2", title: "Juz by Juz", duration: "Individual pace", desc: "Structured new Hifz with Sabqi and Manzil revision, adjusted to the learner." },
    { phase: "Stage 3", title: "Revision & Further Study", duration: "Individual pace", desc: "Full Quran revision, fluency review, and discussion of optional further study." },
  ],
  compareRows: DEFAULT_COMPARE,
  features: [
    { icon: <Brain size={22} />, title: "Structured Hifz Plan", desc: "Custom Juz-by-Juz roadmap based on your pace, age, and daily availability." },
    { icon: <Award size={22} />, title: "Tutor Matching", desc: "Tutor matching considers Hifz goals, learner needs, schedule, and current availability." },
    { icon: <CheckCircle size={22} />, title: "Revision System", desc: "Sabaq (new), Sabqi (recent), and Manzil (older) provide a structured revision framework." },
    { icon: <Users size={22} />, title: "Kids & Adults", desc: "The programme is available for children from age 7 and for adult learners." },
    { icon: <Clock size={22} />, title: "Consistent Schedule", desc: "Lesson frequency is selected according to the learner's plan and available schedule." },
    { icon: <BookOpen size={22} />, title: "Sanad Track", desc: "Advanced students can pursue Ijazah and chain of transmission certification." },
  ],
  faqs: [
    { q: "Can I do Hifz Quran online?", a: "Yes. Live online Hifz lessons can support memorization and revision from home. Progress depends on consistency, practice, lesson frequency, and individual pace." },
    { q: "How long does it take to complete Hifz online?", a: "Completion time is individual and depends on starting level, age, lesson frequency, revision, and pace. Any estimate after assessment is illustrative, not a guaranteed timeline." },
    { q: "Can adults memorize Quran online?", a: "Yes. Adult learners can follow an online Hifz programme adjusted to their goals, schedule, and pace." },
    { q: "What is the Sabaq Sabqi Manzil system?", a: "Sabaq is new memorization, Sabqi revises recent portions (last 10 days), and Manzil revises older completed Juz weekly — the standard Hifz methodology worldwide." },
    { q: "Do you offer Hifz for kids online?", a: "Yes — ages 7+ with child-friendly Hafiz tutors and shorter initial sessions that grow with progress." },
    { q: "How many hours per day should I study Hifz online?", a: "The suitable lesson and revision time varies by learner. A tutor can suggest an illustrative routine based on goals, starting level, and availability." },
  ],
  breadcrumbs: [...BASE_CRUMB, { label: "Hifz Quran Online" }],
  ctaHeadline: <>Begin Your <em style={{ color: "var(--gold-lt)" }}>Hifz Journey Online</em></>,
  ctaSubtext: "Request a free trial lesson and discuss an individual memorization and revision plan.",
  relatedLinks: [
    { href: "/hifz-quran-online", label: "Hifz Program Details" },
    { href: "/blog/how-to-memorize-quran-faster", label: "Memorization Tips" },
    { href: "/online-quran-classes-for-kids", label: "Kids Quran Classes" },
    { href: "/learn-quran-online", label: "Learn Quran Online" },
  ],
};

export const quranLessonOnline: Omit<KeywordLandingPageProps, "canonicalPath"> & { keywords: string[]; metaTitle: string; metaDescription: string } = {
  metaTitle: "Quran Lesson Online — Live 1-on-1 Classes | NoorPath Academy",
  metaDescription:
    "Book live Quran lessons online. 1-on-1 sessions for Qaida, reading, Tajweed and Hifz. Kids and adults. Free 30-minute trial lesson.",
  keywords: [
    "quran lesson online", "quran lessons online", "online quran lesson",
    "quran class online", "private quran lesson online", "live quran lesson",
    "quran tutoring online", "one on one quran lesson", "quran lesson for kids online",
  ],
  serviceName: "Quran Lesson Online — Live 1-on-1",
  serviceDescription: "Live one-to-one Quran lessons online, matched to the learner's level, goals, schedule, and tutor availability.",
  h1: "Quran Lesson Online",
  heroText:
    'Private <strong style="color:var(--gold-lt)">Quran lessons online</strong> — not group classes, not recordings. One tutor, one student, live on Zoom. <strong style="color:var(--gold-lt)">Book a free trial lesson today.</strong>',
  sectionTitle: <>Live Quran Lessons <em className="accent">Tailored to You</em></>,
  sectionSubtitle: "Lessons are adapted to your level — whether you're learning your first Arabic letter or developing advanced Tajweed.",
  quickAnswer:
    `A <strong>Quran lesson online</strong> is a live 1-on-1 video session in which a tutor teaches, listens to recitation, and provides feedback in real time. New learners can request a free ${TRIAL.durationMinutes}-minute trial at NoorPath. <a href="/free-quran-classes-online" style="color:var(--emerald);font-weight:700;">Book free lesson →</a>`,
  seoIntro:
    'Live one-to-one <strong>Quran lessons online</strong> give the learner direct tutor attention during the scheduled session. Lesson content is adapted to recitation, pace, and goals. Programmes are available for children ages 4+, teens, and adults from complete beginner to advanced Hifz study.',
  phases: [
    { phase: "Beginner", title: "Qaida Lessons", duration: "Plan-dependent session length", desc: "Arabic letters, vowels, and joining — building blocks of Quran reading." },
    { phase: "Intermediate", title: "Reading Lessons", duration: "Plan-dependent session length", desc: "Surah-by-surah reading with live pronunciation and fluency practice." },
    { phase: "Advanced", title: "Tajweed & Hifz", duration: "Plan-dependent session length", desc: "Rule-based Tajweed refinement or structured Hifz memorization." },
  ],
  compareRows: DEFAULT_COMPARE,
  features: [
    { icon: <Video size={22} />, title: "Live on Zoom", desc: "Real-time video lessons with screen sharing and digital Qaida — not pre-recorded." },
    { icon: <Users size={22} />, title: "1-on-1 Live", desc: "The learner receives direct tutor attention and real-time recitation feedback." },
    { icon: <BookOpen size={22} />, title: "Any Level", desc: "Complete beginner, intermediate reader, Tajweed student, or Hifz memorizer." },
    { icon: <Clock size={22} />, title: "30–45 Min Sessions", desc: "Optimal length for focus — adjusted for children and adults." },
    { icon: <Award size={22} />, title: "Tutor Matching", desc: "Tutor matching considers learning goals, preferences, schedule, and current availability." },
    { icon: <CheckCircle size={22} />, title: "Homework & Review", desc: "Each lesson ends with clear practice tasks before your next session." },
  ],
  faqs: [
    { q: "What happens in an online Quran lesson?", a: "Your tutor reviews homework, teaches new material (letters, reading, or Tajweed rules), listens to your recitation, corrects mistakes live, and assigns practice for the next session." },
    { q: "How long is each Quran lesson online?", a: `Published plan session lengths are ${PRICING_PLANS.map((plan) => `${plan.name}: ${plan.sessionMinutes} minutes`).join("; ")}.` },
    { q: "Can I book a single trial Quran lesson?", a: `Yes — new learners can request one free ${TRIAL.durationMinutes}-minute trial lesson. No credit card is required and tutor availability is confirmed after the request.` },
    { q: "How many Quran lessons per week do I need?", a: "Lesson frequency is individual and depends on goals, starting level, practice time, and tutor availability. The published plans offer one, two, or four sessions per week." },
    { q: "Are Quran lessons online suitable for children?", a: "Yes — our child-specialist tutors use engaging methods for ages 4–12 with shorter, fun sessions." },
    { q: "What is included in each Quran lesson?", a: "Homework review, new teaching, live recitation with correction, and assigned practice until the next lesson. Parents receive a summary for children's lessons." },
  ],
  breadcrumbs: [...BASE_CRUMB, { label: "Quran Lesson Online" }],
  ctaHeadline: <>Book Your First <em style={{ color: "var(--gold-lt)" }}>Quran Lesson Free</em></>,
  ctaSubtext: "Request one free live trial lesson before selecting a monthly plan.",
  relatedLinks: [
    { href: "/free-quran-classes-online", label: "Free Quran Trial Class" },
    { href: "/quran-teacher-online", label: "Find a Quran Teacher" },
    { href: "/online-quran-classes-for-kids", label: "Kids Lessons" },
    { href: "/pricing", label: "Lesson Pricing" },
  ],
};

export const studyingQuranOnline: Omit<KeywordLandingPageProps, "canonicalPath"> & { keywords: string[]; metaTitle: string; metaDescription: string } = {
  metaTitle: "Studying Quran Online — Live Classes | NoorPath Academy",
  metaDescription:
    "Study Quran online through structured 1-on-1 classes for Qaida, reading, Tajweed and Hifz. Flexible tutor matching and a free trial.",
  keywords: [
    "studying quran online", "study quran online", "studying the quran online",
    "online quran study", "quran study online", "study quran online for beginners",
    "studying quran online for kids", "how to study quran online",
  ],
  serviceName: "Studying Quran Online — Structured Program",
  serviceDescription: "Structured online Quran study program with live 1-on-1 tutoring for all ages and levels.",
  h1: "Studying Quran Online",
  heroText:
    'Structured <strong style="color:var(--gold-lt)">Quran study online</strong> with a personal tutor — not self-paced apps alone. Live classes, real correction, real progress. <strong style="color:var(--gold-lt)">Free trial session.</strong>',
  sectionTitle: <>A Structured Way to <em className="accent">Study Quran Online</em></>,
  sectionSubtitle: "Live online study gives a tutor the opportunity to guide recitation, review practice, and support a consistent routine.",
  quickAnswer:
    '<strong>Studying Quran online</strong> can combine live weekly sessions with self-practice between lessons. A tutor can support accountability and provide pronunciation feedback that self-directed recordings do not provide. <a href="/free-quran-classes-online" style="color:var(--emerald);font-weight:700;">Start free trial →</a>',
  seoIntro:
    '<strong>Studying the Quran online</strong> is an option for Muslim families who cannot access suitable local lessons. NoorPath offers structured Quran study through live one-to-one classes, with tutor matching based on learner needs, timezone, preferences, and availability. Programmes include Noorani Qaida, Quran reading, Tajweed, and Hifz.',
  phases: [
    { phase: "Stage 1", title: "Assessment & Setup", duration: "Individual pace", desc: "Free trial request, level discussion, tutor matching, and an illustrative study routine." },
    { phase: "Stage 2", title: "Core Study", duration: "Individual pace", desc: "Qaida or Quran reading lessons and practice based on learner progress." },
    { phase: "Stage 3", title: "Advanced Study", duration: "Ongoing", desc: "Further Tajweed, Hifz, or Arabic study based on individual goals." },
  ],
  compareRows: DEFAULT_COMPARE,
  features: [
    { icon: <BookOpen size={22} />, title: "Structured Study Plan", desc: "Clear weekly goals — not random YouTube videos without progression." },
    { icon: <Users size={22} />, title: "Accountability", desc: "A tutor who expects your homework — consistency is the secret to Quran study." },
    { icon: <Award size={22} />, title: "Live Guidance", desc: "Tutors can explain recitation and Tajweed concepts during the lesson." },
    { icon: <Clock size={22} />, title: "Timezone Matching", desc: "Tutor matching considers your preferred schedule and current availability." },
    { icon: <Shield size={22} />, title: "Parent Involvement", desc: "Parents may monitor children's online lessons and discuss learning needs." },
    { icon: <CheckCircle size={22} />, title: "Individual Progress", desc: "Learning pace and milestones depend on the learner's level, practice, and goals." },
  ],
  faqs: [
    { q: "Is studying Quran online as good as a local madrassa?", a: "The formats differ. Online one-to-one lessons provide direct tutor attention and avoid travel, while a local madrassa provides in-person learning. The suitable option depends on the learner and family." },
    { q: "How should I study Quran online effectively?", a: "Book 2–3 live lessons per week, practice 15–20 minutes daily between sessions, and follow your tutor's structured plan from Qaida through Tajweed." },
    { q: "Can children study Quran online?", a: "Yes — ages 4+ with specialist tutors. Shorter sessions, visual Qaida, and games keep children engaged while studying Quran online." },
    { q: "What do I need to study Quran online?", a: "A laptop or tablet with camera, stable internet, Zoom installed, and a printed Noorani Qaida or Mushaf. Your tutor guides everything else." },
    { q: "Can I try studying Quran online for free?", a: "Yes — book a free 30-minute trial session. Experience a real study lesson before enrolling." },
    { q: "How is studying Quran online different from learning Quran online?", a: "They mean the same thing at NoorPath — live 1-on-1 classes with structured curriculum. 'Studying' often implies regular long-term commitment; we support both casual learners and serious Hifz students." },
  ],
  breadcrumbs: [...BASE_CRUMB, { label: "Studying Quran Online" }],
  ctaHeadline: <>Start Studying Quran <em style={{ color: "var(--gold-lt)" }}>Online Today</em></>,
  ctaSubtext: "Your first study session is free — meet your tutor and get a personalised Quran study plan.",
  relatedLinks: [
    { href: "/learn-quran-online", label: "Learn Quran Online" },
    { href: "/online-quran-classes", label: "Online Quran Academy" },
    { href: "/online-quran-for-beginners", label: "Quran for Beginners" },
    { href: "/blog/benefits-of-online-quran-classes", label: "Benefits of Online Classes" },
  ],
};
