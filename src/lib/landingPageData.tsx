import { Award, BookOpen, CheckCircle, Clock, Home, Music, Brain, Users, Video, Shield, MapPin, Globe, UserCheck } from "lucide-react";
import type { KeywordLandingPageProps } from "@/components/KeywordLandingPage";
import { CANCELLATION_NOTICE_DAYS, PRICING_PLANS, TRIAL } from "@/lib/academyFacts";

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

/**
 * Pillar for the "no local masjid / Muslim-minority area" cluster.
 *
 * This intent is problem-based, not geo-based: these families search "no mosque near me
 * quran classes", not "quran classes in <town>". It is therefore deliberately served by
 * one substantive page plus the existing minority-country hubs, rather than by new city
 * pages — the site already carries noindexed thin city URLs from an earlier expansion.
 *
 * Kept distinct from the blog "How to Teach Quran When There's No Mosque Nearby", which
 * is DIY guidance for parents teaching alone; this page is the tutor-matching service.
 */
export const noMasjidNearby: Omit<KeywordLandingPageProps, "canonicalPath"> & { keywords: string[]; metaTitle: string; metaDescription: string } = {
  metaTitle: "Online Quran Classes With No Masjid Nearby | NoorPath Academy",
  metaDescription:
    "No masjid or Quran teacher near you? NoorPath matches families in Muslim-minority areas with live 1-on-1 online tutors who teach in English — flexible timing in your timezone, female tutor on request. Free 30-minute trial, no credit card.",
  keywords: [
    "online quran classes no masjid nearby",
    "quran classes no mosque near me",
    "online quran teacher rural area",
    "quran classes for muslim minority countries",
    "learn quran at home no masjid",
    "online quran classes small town",
    "quran teacher for kids no local madrasa",
    "online quran classes for isolated muslim families",
    "quran classes english speaking tutor",
    "online madrasa alternative",
    "female quran teacher no masjid nearby",
    "flexible timing quran classes online",
  ],
  serviceName: "Online Quran Classes for Families With No Local Masjid",
  serviceDescription:
    "Live one-to-one online Quran lessons for families who have no masjid, madrasa or Quran teacher within reach — English-speaking tutors, flexible timing in the learner's timezone, and female tutor requests for sisters and daughters.",
  audience: "Muslim families in areas with no nearby masjid or Quran teacher",
  areaServed: [
    "United Kingdom", "United States", "Canada", "Australia", "New Zealand", "Ireland",
    "Germany", "France", "Netherlands", "Sweden", "Norway", "Denmark", "Finland", "Singapore",
  ],
  whoThisIsFor: [
    "Families in a town, suburb or rural area with no masjid or madrasa within a reasonable drive",
    "Parents who do not read Arabic themselves and need a teacher who corrects the child live",
    "Children who speak English (or a local language) but not Urdu or Arabic",
    "Sisters and daughters who prefer a female Quran teacher",
    "Families who need evening, weekend or school-holiday timings in their own timezone",
    "Adults returning to Quran reading quietly, without a local class to join",
  ],
  h1: "Online Quran Classes When There Is No Masjid Nearby",
  eyebrow: "For families far from a masjid",
  heroText:
    `If the nearest masjid is an hour away — or there isn't one — your child can still learn to read Quran properly. <strong style="color:var(--gold-lt)">Live 1-on-1 lessons</strong> with tutors who teach in English, at a time that fits your week. <strong style="color:var(--gold-lt)">Free ${TRIAL.durationMinutes}-minute trial — no credit card.</strong>`,
  sectionTitle: <>When There Is No Masjid, the <em className="accent">Teacher Comes to You</em></>,
  sectionSubtitle:
    "Distance is the single biggest reason children in Muslim-minority areas stop learning Quran. A live online tutor removes the drive without removing the teacher.",
  quickAnswer:
    `Families with <strong>no masjid or madrasa nearby</strong> can learn Quran through live <strong>one-to-one online lessons</strong>. A tutor listens to the child read and corrects pronunciation in real time, so no parent needs to already know Arabic. NoorPath Academy matches tutors by timezone and language preference, and offers a free ${TRIAL.durationMinutes}-minute trial with no credit card. <a href="/free-quran-classes-online" style="color:var(--emerald);font-weight:700;">Book a free trial →</a>`,
  seoIntro:
    'In many towns and rural areas there is no masjid, no madrasa, and no Quran teacher within a reasonable drive. Weekend classes, where they exist at all, can mean an hour in the car each way — and that is the point at which most families quietly give up. <strong>Online Quran classes</strong> change what is being asked of you: instead of moving the child to the teacher, the lesson happens at your kitchen table. NoorPath Academy is an online-only academy, so this is not a fallback version of a local service — it is how every lesson is taught. Tutors are matched by the learner\'s level, timezone, and language of instruction, which matters when a child speaks English or a local language but not Urdu or Arabic.',
  steps: [
    { title: "Tell us what is around you", desc: "Share the learner's age and level, your timezone, and whether you need instruction in English. If there is no local teacher at all, say so — it changes the starting plan." },
    { title: "Meet a matched tutor free", desc: `A free ${TRIAL.durationMinutes}-minute live lesson so you can hear how the tutor speaks to your child and check the audio works from your home. No credit card.` },
    { title: "Fix a weekly slot that survives", desc: "Choose a recurring time that fits school and daylight hours in your area. A slot you can actually keep beats an ambitious one you cannot." },
    { title: "Keep a short daily echo at home", desc: "Five to ten minutes of repeating the lesson between sessions. This is what replaces the daily reinforcement a local madrasa would have given." },
  ],
  compareRows: [
    { method: "1-on-1 live online tutor (NoorPath)", verdict: "Teacher at home", note: "Real-time correction with no travel; requires stable internet and a fixed weekly slot" },
    { method: "Driving to a distant weekend madrasa", verdict: "In person, high cost", note: "Community contact and peer group, but travel time and tiredness often end it within a year" },
    { method: "Parent teaching alone", verdict: "Free, but limited", note: "Workable for routine and revision; hard to correct Makharij if the parent does not read Arabic" },
    { method: "Apps and YouTube only", verdict: "Self-directed", note: "Good for practice between lessons; nothing listens back or corrects a mistake being repeated" },
  ],
  features: [
    { icon: <Home size={22} />, title: "No Travel At All", desc: "The lesson happens wherever your laptop is. No weekend drive, no winter roads, no dropping out because the journey got too hard." },
    { icon: <Users size={22} />, title: "English-Speaking Tutors", desc: "You can request a tutor who instructs in English, so a child who does not speak Urdu or Arabic still understands the explanation." },
    { icon: <BookOpen size={22} />, title: "Start From the Alphabet", desc: "Beginners start at Noorani Qaida — Arabic letters and sounds. No prior exposure to a madrasa is assumed." },
    { icon: <Clock size={22} />, title: "Your Timezone, Not Ours", desc: "Tutor matching works around your school day and daylight hours, which matters in far-northern and remote regions." },
    { icon: <Shield size={22} />, title: "Vetted Without a Local Reference", desc: "Families with no local community cannot ask around about a teacher. Our safeguarding policy and the free trial let you judge the tutor yourself first." },
    { icon: <Video size={22} />, title: "Parents Can Watch", desc: "Sit in on lessons whenever you like, and track homework and attendance in the Parent Portal — useful when you have no local teacher to ask." },
  ],
  faqs: [
    { q: "There is no masjid or madrasa near us at all. Can my child still learn to read Quran?", a: "Yes. Live one-to-one online lessons cover the same ground a beginner madrasa would: Arabic letters, vowel signs, joining, then Quran reading and Tajweed. Because the tutor hears the child read aloud each lesson, pronunciation is corrected as it develops rather than after a habit forms." },
    { q: "I do not read Arabic myself. Can I still support my child?", a: "Yes, and most parents in this situation do not read Arabic. Your role is to protect the weekly slot and a short daily practice, not to teach. The tutor handles correction, and you can watch any lesson and see homework in the Parent Portal." },
    { q: "Our child only speaks English. Will the tutor be able to teach them?", a: "You can request instruction in English when booking. Tutor and language availability are confirmed during matching, and you can hear how the tutor explains things in the free trial before committing." },
    { q: "How do I know an online tutor is safe when I have no local community to ask?", a: "This is a fair concern when there is no one nearby to vouch for a teacher. Read the safeguarding policy first, use the free trial to observe a full lesson yourself, keep communication on official channels, and stay present for a child's early lessons." },
    { q: "We live somewhere with very long or very short daylight. Can lessons still be scheduled?", a: "Yes. Share your timezone and the windows that actually work across the year when you request a trial. A recurring time is confirmed after a suitable tutor is matched, and it can be revisited when the season changes." },
    { q: "Is online learning worse than a local madrasa for my child?", a: "The formats trade off differently. A madrasa offers in-person contact and a peer group, which online lessons do not replace. One-to-one online lessons offer undivided tutor attention and no travel. For families where the realistic alternative is no lessons at all, the comparison is with nothing rather than with a madrasa." },
    { q: "My child is the only Muslim in their class. Does that change how you teach?", a: "It often changes motivation more than method. Tell the tutor during matching — knowing a child has no Muslim peers helps them pace expectations and keep lessons encouraging rather than pressured." },
    { q: "Can we request a female Quran teacher if there is no one local?", a: "Yes. Sisters and parents of daughters can request a female tutor when booking the trial. The proposed tutor's relevant credentials and schedule availability are confirmed before enrolment — there is no extra charge for the request itself." },
    { q: "Our week is unpredictable. How flexible is the timing?", a: "Lessons are one-to-one, so the slot is yours rather than a fixed class timetable. Share the evening, weekend or school-holiday windows that work in your local timezone; a recurring time is confirmed after tutor matching, and it can be revisited when work or school terms change." },
    { q: "How much does it cost and can we try it first?", a: `Published plans start at $${PRICING_PLANS[0].monthlyPriceUsd} per month for ${PRICING_PLANS[0].sessionsPerMonth} ${PRICING_PLANS[0].sessionMinutes}-minute one-to-one sessions. The ${TRIAL.durationMinutes}-minute trial costs $${TRIAL.price} and needs no credit card, so you can judge the fit before paying anything.` },
  ],
  locations: [
    { href: "/locations/online-quran-classes-new-zealand", label: "🇳🇿 New Zealand", note: "NZST — small, spread-out communities" },
    { href: "/locations/online-quran-classes-ireland", label: "🇮🇪 Ireland", note: "GMT/IST — limited outside Dublin" },
    { href: "/locations/online-quran-classes-norway", label: "🇳🇴 Norway", note: "CET — long-daylight scheduling" },
    { href: "/locations/online-quran-classes-finland", label: "🇫🇮 Finland", note: "EET — remote-region friendly" },
    { href: "/locations/online-quran-classes-denmark", label: "🇩🇰 Denmark", note: "CET — evening and weekend windows" },
    { href: "/locations/online-quran-classes-sweden", label: "🇸🇪 Sweden", note: "CET — outside the main cities too" },
  ],
  breadcrumbs: [...BASE_CRUMB, { label: "No Masjid Nearby" }],
  ctaHeadline: <>No Masjid Nearby? <em style={{ color: "var(--gold-lt)" }}>Start This Week</em></>,
  ctaSubtext: "Book a free trial lesson from home — meet the tutor, check the audio, and see how your child responds before you decide anything.",
  relatedLinks: [
    { href: "/quran-classes-near-me", label: "Searching “Quran Classes Near Me”? Read This First" },
    { href: "/female-quran-teacher-online", label: "Request a Female Quran Teacher" },
    { href: "/quran-classes-for-working-professionals", label: "Flexible Timing for Working Adults" },
    { href: "/blog/how-to-teach-quran-when-theres-no-mosque-nearby", label: "How to Teach Quran When There's No Mosque Nearby" },
    { href: "/blog/raising-muslim-child-in-non-muslim-country", label: "Raising a Muslim Child in a Non-Muslim Country" },
    { href: "/blog/online-quran-classes-for-muslim-families-abroad", label: "Quran Classes for Muslim Families Abroad" },
    { href: "/blog/online-quran-classes-for-homeschool-families", label: "Quran Classes for Homeschool Families" },
    { href: "/blog/quran-classes-for-expat-families", label: "Quran Classes for Expat Families" },
    { href: "/blog/weekend-quran-classes-for-nordic-families", label: "Weekend Quran Classes for Nordic Families" },
    { href: "/blog/trustworthy-online-quran-teacher-live-abroad", label: "Finding a Trustworthy Tutor Abroad" },
    { href: "/safeguarding", label: "Safeguarding for Online Lessons" },
  ],
};

/**
 * /quran-classes-near-me — the "near me" intent owner.
 *
 * Honesty rule: NoorPath is online-only with no premises anywhere, so this page
 * never claims a local branch. It answers the search literally — "near me" for an
 * online academy means the teacher joins you on a video call — and is written for
 * the searcher whose local result list came back empty (Muslim-minority towns,
 * rural areas, expat families) or unusable (no female tutor, no workable timing).
 *
 * Distinct from /online-quran-classes-no-masjid-nearby, which is the service page
 * for families with *no* local option at all; this page also serves families who
 * have a local class but cannot use it (timing, female tutor, one-to-one need).
 */
export const quranClassesNearMe: Omit<KeywordLandingPageProps, "canonicalPath"> & { keywords: string[]; metaTitle: string; metaDescription: string } = {
  metaTitle: "Quran Classes Near Me? Live 1-on-1 Online Tutors, Any Timezone | NoorPath",
  metaDescription:
    "Searched “Quran classes near me” and found nothing that fits? NoorPath is online-only: live 1-on-1 Quran lessons at home, flexible timing in your timezone, female tutors on request. Free 30-minute trial, no credit card.",
  keywords: [
    "quran classes near me",
    "quran teacher near me",
    "quran tutor near me",
    "quran lessons near me",
    "learn quran near me",
    "madrasa near me",
    "islamic classes near me",
    "quran classes for kids near me",
    "female quran teacher near me",
    "quran classes near me for adults",
    "quran classes near me flexible timing",
    "online quran classes muslim minority area",
  ],
  serviceName: "Quran Classes Near Me — Live 1-on-1 Online Lessons Anywhere",
  serviceDescription:
    "For anyone searching “Quran classes near me”: NoorPath Academy is an online-only academy with no premises. Live one-to-one Quran lessons are delivered by video call at a time that fits the learner's own timezone, with English-speaking tutors and female tutors available on request.",
  audience: "Muslim families and adults whose local “near me” search returned no usable Quran class",
  areaServed: [
    "United Kingdom", "United States", "Canada", "Australia", "New Zealand", "Ireland",
    "Germany", "France", "Netherlands", "Sweden", "Norway", "Denmark", "Finland",
    "Singapore", "Malaysia", "United Arab Emirates", "Qatar", "Kuwait", "Saudi Arabia",
    "India", "Pakistan", "Bangladesh", "Nigeria", "South Africa", "Indonesia", "Turkey",
  ],
  whoThisIsFor: [
    "You searched “Quran classes near me” and the nearest option is a long drive away — or there is none",
    "You live in a Muslim-minority town, suburb or rural area with no madrasa or weekend class",
    "There is a local class, but its fixed timetable clashes with school, shifts or commuting",
    "You need a female Quran teacher for a daughter or for yourself and none is available locally",
    "Your child needs one-to-one correction rather than a group of twenty",
    "You are an adult beginner who would rather learn privately than join a children's class",
  ],
  h1: "Quran Classes Near Me — When “Near” Means Your Living Room",
  eyebrow: "Online-only · no premises · any timezone",
  heroText:
    `If your search for a Quran class nearby came back empty, or the only option does not fit your week, a live <strong style="color:var(--gold-lt)">one-to-one online tutor</strong> is the honest alternative. Lessons happen at home, at a time you choose in your own timezone, with <strong style="color:var(--gold-lt)">female tutors available on request</strong>. <strong style="color:var(--gold-lt)">Free ${TRIAL.durationMinutes}-minute trial — no credit card.</strong>`,
  sectionTitle: <>What “Quran Classes Near Me” Actually Gets You <em className="accent">Online</em></>,
  sectionSubtitle:
    "NoorPath Academy has no building to drive to, anywhere. Every lesson is a live video call between one learner and one tutor — which is exactly why the class can be “near” a family in a village in Ireland and a flat in Singapore on the same day.",
  quickAnswer:
    `<strong>“Quran classes near me”</strong> returns two different kinds of result: places you can drive to, and online academies that teach remotely. NoorPath Academy is the second kind — <strong>online-only, no premises</strong>. If there is no usable class within reach, a live <strong>1-on-1 online tutor</strong> teaches your child (or you) at home, at a time that fits your timezone, with an <strong>English-speaking or female tutor on request</strong>. Start with a free ${TRIAL.durationMinutes}-minute trial, no credit card. <a href="/free-quran-classes-online" style="color:var(--emerald);font-weight:700;">Book the free trial →</a>`,
  seoIntro:
    'For a Muslim family in a city with several masjids, “near me” is a useful filter. For a family in a small town in Norway, a suburb in Texas with one masjid forty minutes away, or an expat compound in the Gulf where the only class runs during work hours, the same search mostly produces frustration. This page is written for the second group. It explains plainly what an <strong>online-only Quran academy</strong> can and cannot replace, how <strong>flexible timing</strong> works when the lesson is one-to-one, how to <strong>request a female Quran teacher</strong>, and how to judge a tutor safely when there is no local community to ask. Where a good local class exists within reach, use it — many families sensibly do both: the community class for belonging, and a weekly online slot for the individual correction a group cannot give.',
  steps: [
    { title: "Tell us what “near me” looks like for you", desc: "Your country and timezone, the learner's age and level, whether you need instruction in English, and whether you are requesting a female tutor. If there is nothing local at all, say so — it changes the starting plan." },
    { title: "Meet a matched tutor in a free live lesson", desc: `A ${TRIAL.durationMinutes}-minute one-to-one trial at home. Hear how the tutor explains letters, check the audio and video from your own room, and let the child (or yourself) decide whether it feels right. No credit card.` },
    { title: "Fix a recurring slot you can actually keep", desc: "Because the lesson is one-to-one, the slot is built around your evenings, weekends or school-run — not a hall timetable. Confirmed after matching; revisited when school terms, shifts or seasons change." },
    { title: "Keep a short daily echo at home", desc: "Five to ten minutes repeating the lesson between sessions replaces the daily reinforcement a local madrasa would have provided. The Parent Portal shows homework and attendance so you never have to guess." },
  ],
  compareRows: [
    { method: "Live 1-on-1 online tutor (NoorPath)", verdict: "Teacher at home", note: "Real-time Makharij correction, flexible timing in your timezone, female tutor on request; needs stable internet and a kept weekly slot" },
    { method: "Local masjid / madrasa class within reach", verdict: "In person, community", note: "Peer group and belonging — use it if it exists and the timetable works; pair with online for individual correction" },
    { method: "Driving to a distant weekend class", verdict: "High cost in time", note: "Often an hour each way; most families stop within a year when winter, work or a second child arrives" },
    { method: "Apps and YouTube alone", verdict: "Self-directed", note: "Useful practice between lessons; nothing listens back or corrects a mistake being repeated" },
  ],
  features: [
    { icon: <MapPin size={22} />, title: "Honest About “Near”", desc: "NoorPath has no premises in any country. “Near you” means the tutor joins you on a video call — not that someone will visit your home or that there is a branch in your town." },
    { icon: <Clock size={22} />, title: "Flexible Timing, Your Timezone", desc: "One-to-one lessons are scheduled around your evenings, weekends and school terms in your local time — GMT, EST, CET, GST, SGT and more — and can be adjusted when life changes." },
    { icon: <UserCheck size={22} />, title: "Female Tutor on Request", desc: "Sisters and parents of daughters can request a female Quran teacher when booking. Relevant credentials and availability are confirmed before enrolment." },
    { icon: <Users size={22} />, title: "English-Speaking Instruction", desc: "Request a tutor who explains in English, so a child raised in the UK, US, Europe or Australia understands the lesson even without Urdu or Arabic at home." },
    { icon: <Shield size={22} />, title: "Vetted Without a Local Reference", desc: "When there is no community to ask about a teacher, the published safeguarding policy, credential confirmation and the free trial let you judge the tutor yourself first." },
    { icon: <Globe size={22} />, title: "Same Lesson in a Village or a Capital", desc: "Because it is online-only, the format is identical whether you are in rural Finland, suburban Texas or central London — the only variable is the slot you choose." },
  ],
  faqs: [
    { q: "I searched “Quran classes near me” — is NoorPath actually near me?", a: "Not physically. NoorPath Academy is an online-only academy with no premises, branches or visiting teachers in any country. What is “near” you is the lesson itself: a live one-to-one video call with a tutor, scheduled in your own timezone. If you specifically want a teacher in the room, a local masjid or community class is the honest answer." },
    { q: "There is no masjid, madrasa or Quran teacher anywhere near us. Can my child still learn properly?", a: "Yes. Live one-to-one online lessons cover the same ground a beginner madrasa would — Arabic letters, vowel signs, joining, then Quran reading and Tajweed — and the tutor hears the child read aloud every lesson, so pronunciation is corrected as it forms rather than after a habit sets." },
    { q: "There is a local class, but the timing does not work for us. Is online a reasonable alternative?", a: "It is a common reason families switch or add online lessons. Because the lesson is one-to-one, the slot is arranged around your week — evenings, weekends, before school, or around shift work — rather than a fixed hall timetable. The recurring time is confirmed after tutor matching and can be changed when circumstances change." },
    { q: "Can I request a female Quran teacher near me online?", a: "Yes. Sisters, teenage girls and parents of daughters can request a female tutor when booking the free trial. The proposed tutor's relevant credentials and schedule availability are confirmed before enrolment. There is no extra charge for making the request." },
    { q: "How flexible is the timing really?", a: "Lessons are scheduled in the learner's local timezone across the UK, US, Canada, Europe, the Gulf, Asia, Africa and Australasia. You share the windows that genuinely work — for example weekday evenings after 6 pm or Saturday mornings — and a recurring slot is confirmed once a suitable tutor is matched. Availability for very specific windows is confirmed at booking, not guaranteed in advance." },
    { q: "Our child only speaks English. Will the tutor be able to teach them?", a: "You can request instruction in English when booking. Tutor and language availability are confirmed during matching, and the free trial lets you hear exactly how the tutor explains things before you commit." },
    { q: "How do I know an online tutor is safe when I have no local community to ask?", a: "Read the published safeguarding policy first, use the free trial to watch a full lesson yourself, keep communication on official channels, and stay present for a child's early lessons. Relevant credentials for the proposed tutor are confirmed before enrolment — ask for the specific evidence." },
    { q: "Is online worse than a local madrasa for my child?", a: "They trade off differently. A madrasa gives in-person contact and a peer group that online lessons do not replace. One-to-one online lessons give undivided tutor attention, real-time correction and no travel. Where the realistic local alternative is nothing, the fair comparison is with nothing — and many families with a local class still add a weekly online slot for individual correction." },
    { q: "How much does it cost and can we try before paying?", a: `Published plans start at $${PRICING_PLANS[0].monthlyPriceUsd} per month for ${PRICING_PLANS[0].sessionsPerMonth} ${PRICING_PLANS[0].sessionMinutes}-minute one-to-one sessions. The ${TRIAL.durationMinutes}-minute trial costs $${TRIAL.price}, needs no credit card, and tutor availability is confirmed after the request.` },
  ],
  locations: [
    { href: "/locations/online-quran-classes-uk", label: "🇬🇧 United Kingdom", note: "GMT/BST — after-school & weekend slots" },
    { href: "/locations/online-quran-classes-usa", label: "🇺🇸 United States", note: "EST to PST — suburbs & small towns" },
    { href: "/locations/online-quran-classes-canada", label: "🇨🇦 Canada", note: "Provincial timezones — spread-out communities" },
    { href: "/locations/online-quran-classes-australia", label: "🇦🇺 Australia", note: "AEST/AWST — regional families" },
    { href: "/locations/online-quran-classes-ireland", label: "🇮🇪 Ireland", note: "GMT/IST — limited outside Dublin" },
    { href: "/locations/online-quran-classes-new-zealand", label: "🇳🇿 New Zealand", note: "NZST — small, dispersed communities" },
    { href: "/locations/online-quran-classes-germany", label: "🇩🇪 Germany", note: "CET — evening windows" },
    { href: "/locations", label: "🌍 All countries", note: "Nordics, Gulf, Asia, Africa & more" },
  ],
  breadcrumbs: [...BASE_CRUMB, { label: "Quran Classes Near Me" }],
  ctaHeadline: <>No Class Nearby? <em style={{ color: "var(--gold-lt)" }}>Bring the Teacher Home</em></>,
  ctaSubtext: "Book a free one-to-one trial from your own living room — choose your timezone, request a female or English-speaking tutor, and see how the learner responds before you decide anything.",
  ctaBullets: [
    `✓ Free ${TRIAL.durationMinutes}-minute live trial — no credit card`,
    "✓ Online-only: no premises, no travel, any country",
    "✓ Flexible recurring slot in your own timezone",
    "✓ Female tutor and English instruction on request",
  ],
  relatedLinks: [
    { href: "/online-quran-classes-no-masjid-nearby", label: "No Masjid Nearby — Full Service Guide" },
    { href: "/female-quran-teacher-online", label: "Female Quran Teacher Online" },
    { href: "/quran-classes-for-working-professionals", label: "Flexible Classes for Working Professionals" },
    { href: "/online-quran-classes-for-kids", label: "Online Quran Classes for Kids" },
    { href: "/online-quran-classes-for-adults", label: "Quran Classes for Adults" },
    { href: "/blog/how-to-teach-quran-when-theres-no-mosque-nearby", label: "Teaching Quran With No Mosque Nearby" },
    { href: "/blog/raising-muslim-child-in-non-muslim-country", label: "Raising a Muslim Child in a Non-Muslim Country" },
    { href: "/blog/trustworthy-online-quran-teacher-live-abroad", label: "Finding a Trustworthy Tutor Abroad" },
    { href: "/safeguarding", label: "Safeguarding Policy" },
  ],
};

/**
 * /learn-quran-as-a-revert — for new Muslims (reverts / converts) starting from
 * zero, often without a Muslim family, sometimes without anyone knowing.
 *
 * Written from real r/converts and r/islam threads: "I don't know what I don't
 * know", "I can't recite loudly at home", "I'm concealing my faith", "I'm 20 and
 * ashamed I can't read". Honesty rule: no promise of fluency timelines; the
 * value claimed is a patient one-to-one teacher who hears and corrects.
 */
export const learnQuranAsRevert: Omit<KeywordLandingPageProps, "canonicalPath"> & { keywords: string[]; metaTitle: string; metaDescription: string } = {
  metaTitle: "Learn Quran as a Revert — Private 1-on-1 Lessons From the Alphabet | NoorPath",
  metaDescription:
    "New Muslim and can't read Quran yet? Learn privately from the Arabic alphabet with a patient English-speaking tutor, one-to-one, at a time that suits you. No Muslim family needed, no judgement. Free 30-minute trial, no credit card.",
  keywords: [
    "learn quran as a revert",
    "revert learn to read quran",
    "new muslim learn quran online",
    "convert to islam learn quran",
    "learn quran from scratch adult",
    "how to learn quran as a new muslim",
    "quran classes for reverts",
    "quran lessons for converts online",
    "learn arabic alphabet to read quran",
    "learn quran quietly online private",
  ],
  serviceName: "Quran Reading Lessons for Reverts and New Muslims",
  serviceDescription:
    "Private one-to-one online lessons for new Muslims starting from zero: Arabic alphabet, vowel marks, joining letters, then Surah Al-Fatiha and short surahs for prayer — taught in English by a patient tutor, scheduled in the learner's timezone.",
  audience: "Reverts and new Muslims of any age who cannot yet read Arabic",
  areaServed: [
    "United Kingdom", "United States", "Canada", "Australia", "New Zealand", "Ireland",
    "Germany", "France", "Netherlands", "Sweden", "Norway", "Denmark", "Finland", "Singapore", "South Africa",
  ],
  whoThisIsFor: [
    "You took your shahada recently — or years ago — and still cannot read the Arabic script",
    "Nobody in your family is Muslim, so there is no one at home to ask or practise with",
    "You want to pray with correct recitation of Al-Fatiha and a few short surahs first",
    "You need lessons that are private and quiet — perhaps not everyone knows about your faith yet",
    "You tried YouTube and apps and realised you cannot correct your own pronunciation",
    "You would rather learn one-to-one than sit in a children's class at the masjid",
  ],
  h1: "Learn Quran as a Revert — From the First Letter, Privately",
  eyebrow: "For new Muslims · start from zero",
  heroText:
    `You do not need a Muslim family, an Arabic background, or a masjid nearby. A patient tutor teaches you the <strong style="color:var(--gold-lt)">Arabic letters, the sounds, and Surah Al-Fatiha</strong> in private one-to-one lessons, in English, at a time you choose. <strong style="color:var(--gold-lt)">Free ${TRIAL.durationMinutes}-minute trial — no credit card, no judgement.</strong>`,
  sectionTitle: <>Why Reverts Struggle Alone — and What a <em className="accent">Live Teacher</em> Changes</>,
  sectionSubtitle:
    "The hardest part of learning Quran alone is that you cannot hear your own mistakes. Arabic has sounds that do not exist in English, and a recording cannot tell you that your ‘ح’ is coming from the wrong place. A tutor can, in the first minute.",
  quickAnswer:
    `A <strong>revert can learn to read Quran</strong> starting from zero with live <strong>one-to-one online lessons</strong>: first the Arabic alphabet and vowel marks (Noorani Qaida), then joining letters, then Surah Al-Fatiha and the short surahs used in prayer. The tutor listens and corrects pronunciation in real time — the part apps and videos cannot do. NoorPath teaches in English, privately, in your timezone, with a free ${TRIAL.durationMinutes}-minute trial and no credit card. <a href="/free-quran-classes-online" style="color:var(--emerald);font-weight:700;">Book the free trial →</a>`,
  seoIntro:
    'Most guidance for new Muslims assumes a Muslim household or a nearby community. Many reverts have neither. Some are the only Muslim in their family; some have not yet told anyone; some are university students who cannot recite aloud in a shared flat. What they share is the same honest problem one convert put plainly: <strong>"you don\'t know what you don\'t know."</strong> You cannot check your own Makharij (where each letter is pronounced from) because you have never heard the correct sound from your own mouth. <strong>Live one-to-one lessons</strong> solve exactly that — a teacher hears you, corrects gently, and moves at your pace. NoorPath Academy is online-only, so lessons are private by default: no classroom, no children\'s group, no one watching except the tutor you chose in the free trial.',
  phases: [
    { phase: "Stage 1", title: "Letters & Sounds", duration: "Own pace", desc: "The 28 Arabic letters, their shapes, and where each sound is made in the mouth — with the tutor listening to every attempt." },
    { phase: "Stage 2", title: "Vowels & Joining", duration: "Own pace", desc: "Fatha, Kasra, Damma, sukoon and joining letters into words — the point where reading starts to feel possible." },
    { phase: "Stage 3", title: "Al-Fatiha & Prayer Surahs", duration: "Ongoing", desc: "Reading Surah Al-Fatiha, then Al-Ikhlas, Al-Falaq, An-Nas and others you need for salah, with meaning explained in English." },
  ],
  steps: [
    { title: "Tell us where you are starting", desc: "Complete beginner is the normal answer. Share your timezone, the hours that are genuinely private for you, and whether you prefer a male or female tutor." },
    { title: "Meet a tutor in a free lesson", desc: `A ${TRIAL.durationMinutes}-minute one-to-one video lesson. You will read your first letters and hear a correction — and decide whether the tutor's manner suits you. No credit card.` },
    { title: "Keep a quiet weekly slot", desc: "One or two short lessons a week beat a long one. If you cannot recite loudly at home, tell the tutor — lessons work at a normal speaking volume." },
    { title: "Practise five minutes a day", desc: "Between lessons, repeat the letters or line you covered. The interactive Noorani Qaida pages on this site are free and need no account." },
  ],
  compareRows: [
    { method: "Live 1-on-1 online tutor (NoorPath)", verdict: "Hears and corrects", note: "Private, English-language, your timezone; the only format that catches pronunciation you cannot hear yourself" },
    { method: "Masjid beginners' class", verdict: "In person, community", note: "Valuable for belonging; often runs at fixed times, sometimes mixed with children, and not available everywhere" },
    { method: "YouTube Qaida playlists", verdict: "Free, one-way", note: "Good for exposure to the sounds; nothing listens back, so mistakes settle in unnoticed" },
    { method: "Apps with letter tracing", verdict: "Practice aid", note: "Useful between lessons for recognition; cannot judge whether your throat letters are right" },
  ],
  features: [
    { icon: <UserCheck size={22} />, title: "No Judgement, No Assumptions", desc: "Tutors who teach reverts expect a complete beginner. Nobody assumes you grew up with this; nobody is surprised you are starting at 20, 35 or 60." },
    { icon: <Shield size={22} />, title: "Private by Default", desc: "One learner, one tutor, one video call. No classroom, no group, no recordings shared. If your faith is not yet known to everyone around you, tell us and we schedule accordingly." },
    { icon: <BookOpen size={22} />, title: "From the Alphabet", desc: "Lessons begin at Noorani Qaida — letters, sounds, vowel marks — not at Surah reading. You will not be handed a page you cannot decode." },
    { icon: <Users size={22} />, title: "Taught in English", desc: "Explanations, meanings and corrections in English. You learn to read the Arabic script of the Quran, not conversational Arabic — those are different skills." },
    { icon: <Clock size={22} />, title: "Your Hours, Your Timezone", desc: "Early morning before flatmates wake, late evening after work, weekends — a recurring slot is confirmed after tutor matching and can move when life changes." },
    { icon: <Award size={22} />, title: "Prayer First", desc: "If your immediate goal is to pray with confidence, say so. The tutor prioritises Al-Fatiha and the short surahs, with their meanings, before anything else." },
  ],
  faqs: [
    { q: "I am a revert and cannot read a single Arabic letter. Is that too early to start?", a: "No — it is the normal starting point. Lessons begin with the alphabet and the sounds, using Noorani Qaida, exactly as a young child's first lesson would, but paced for an adult. No prior exposure is assumed." },
    { q: "Can I really not learn this on my own from videos?", a: "You can learn the letter shapes alone. What you cannot do alone is hear whether your pronunciation is right — several Arabic letters are made in places English never uses, and a recording cannot correct you. That is the specific gap a live tutor fills; many reverts who started with videos add a tutor for this reason." },
    { q: "I have not told my family or flatmates about my faith. Can lessons still work?", a: "Yes. Lessons are one-to-one video calls at a normal speaking volume, with headphones if you prefer. Tell us which hours are genuinely private for you and we schedule within them. Nothing is posted, shared or recorded publicly." },
    { q: "How long until I can read Quran?", a: "It is individual and depends on lesson frequency and daily practice, so NoorPath does not promise a date. After the free trial, the tutor can describe an illustrative path for your starting point — most learners aim first at reading Al-Fatiha and a few short surahs for prayer." },
    { q: "Will the tutor explain what the words mean, or just the sounds?", a: "Both, in English. Reading (the sounds) and meaning are taught together where it helps — especially for Al-Fatiha and the surahs you use in salah — so the words are not empty. Tajweed rules come later, once reading is steady." },
    { q: "Can I request a female or male tutor?", a: "Yes. State your preference when booking; it is confirmed at matching, subject to availability. Relevant credentials for the proposed tutor are confirmed before enrolment." },
    { q: "I am a student on a tight budget. What does it cost?", a: `Published plans start at $${PRICING_PLANS[0].monthlyPriceUsd} per month for ${PRICING_PLANS[0].sessionsPerMonth} ${PRICING_PLANS[0].sessionMinutes}-minute one-to-one sessions, cancellable with ${CANCELLATION_NOTICE_DAYS} days' notice. The ${TRIAL.durationMinutes}-minute trial costs $${TRIAL.price} and needs no credit card. The interactive Noorani Qaida pages on this site are free without an account for practice between lessons.` },
    { q: "Is there a local masjid class near me instead?", a: "Possibly, and if there is a good one within reach, use it — community matters. Many reverts do both: the masjid for belonging, a weekly online lesson for the private, individual correction a group cannot give. NoorPath has no premises; it is online only." },
  ],
  locations: [
    { href: "/locations/online-quran-classes-uk", label: "🇬🇧 United Kingdom", note: "GMT/BST — evening & weekend slots" },
    { href: "/locations/online-quran-classes-usa", label: "🇺🇸 United States", note: "EST to PST — early morning or evening" },
    { href: "/locations/online-quran-classes-canada", label: "🇨🇦 Canada", note: "Provincial timezones" },
    { href: "/locations/online-quran-classes-australia", label: "🇦🇺 Australia", note: "AEST/AWST" },
    { href: "/locations/online-quran-classes-germany", label: "🇩🇪 Germany", note: "CET — evening windows" },
    { href: "/locations/online-quran-classes-ireland", label: "🇮🇪 Ireland", note: "GMT/IST" },
    { href: "/locations/online-quran-classes-new-zealand", label: "🇳🇿 New Zealand", note: "NZST" },
    { href: "/locations", label: "🌍 All countries", note: "Europe, Gulf, Asia, Africa & more" },
  ],
  breadcrumbs: [...BASE_CRUMB, { label: "Learn Quran as a Revert" }],
  ctaHeadline: <>Start With One Letter, <em style={{ color: "var(--gold-lt)" }}>Privately</em></>,
  ctaSubtext: "Book a free one-to-one trial. You will read your first Arabic letters, hear a gentle correction, and meet the tutor — before deciding anything.",
  ctaBullets: [
    `✓ Free ${TRIAL.durationMinutes}-minute live trial — no credit card`,
    "✓ Complete beginners expected — from the alphabet",
    "✓ Private one-to-one, taught in English",
    "✓ Male or female tutor on request, your timezone",
  ],
  relatedLinks: [
    { href: "/online-quran-for-beginners", label: "Quran for Complete Beginners" },
    { href: "/online-quran-classes-for-adults", label: "Quran Classes for Adults" },
    { href: "/blog/adult-embarrassed-to-learn-quran-beginner", label: "Embarrassed to Learn as an Adult? Read This" },
    { href: "/blog/learn-quran-as-an-adult-never-too-late", label: "Learning Quran as an Adult — Never Too Late" },
    { href: "/courses/noorani-qaida-online", label: "Noorani Qaida Course" },
    { href: "/noorani-qaida", label: "Free Interactive Noorani Qaida" },
    { href: "/female-quran-teacher-online", label: "Request a Female Tutor" },
    { href: "/quran-classes-near-me", label: "No Class Near You? Online Alternative" },
  ],
};
