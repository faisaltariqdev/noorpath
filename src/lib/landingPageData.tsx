import { Award, BookOpen, CheckCircle, Clock, Music, Brain, Users, Video, Shield } from "lucide-react";
import type { KeywordLandingPageProps } from "@/components/KeywordLandingPage";

const BASE_CRUMB = [
  { label: "Home", href: "/" },
  { label: "Online Quran Classes", href: "/online-quran-classes" },
];

const DEFAULT_COMPARE = [
  { method: "1-on-1 Live Tutor (NoorPath)", verdict: "✅ Best", note: "Real-time correction, structured plan, weekly progress reports" },
  { method: "YouTube / Apps alone", verdict: "❌ Limited", note: "No one hears your pronunciation — mistakes become permanent" },
  { method: "Group online class", verdict: "⚠️ Slow", note: "Teacher cannot correct every student's Tajweed individually" },
  { method: "Local madrassa", verdict: "⚠️ Inflexible", note: "Fixed schedule, mixed ages, travel — hard for working parents" },
];

export const learnQuranOnline: Omit<KeywordLandingPageProps, "canonicalPath"> & { keywords: string[]; metaTitle: string; metaDescription: string } = {
  metaTitle: "Learn Quran Online — 1-on-1 Live Classes | Free Trial 2026",
  metaDescription:
    "Learn Quran online from zero with certified tutors. Noorani Qaida, Tajweed, Hifz & Arabic — live 1-on-1 Zoom classes for kids and adults. Free 30-min trial, no credit card.",
  keywords: [
    "learn quran online", "learning quran online", "learn the quran online", "quran learning online",
    "how to learn quran online", "learn quran online free trial", "learn quran online for beginners",
    "learn quran online for kids", "learn quran online for adults", "best way to learn quran online",
  ],
  serviceName: "Learn Quran Online — Live 1-on-1 Classes",
  serviceDescription: "Live online Quran learning for beginners to advanced — Noorani Qaida, Tajweed, Hifz, and Arabic with certified tutors.",
  audience: "Muslim learners of all ages worldwide",
  h1: "Learn Quran Online",
  heroText:
    'Start from zero or pick up where you left off. Live <strong style="color:var(--gold-lt)">1-on-1 Quran classes</strong> with Ijazah-certified tutors — Noorani Qaida, Tajweed, Hifz & Arabic. <strong style="color:var(--gold-lt)">Free 30-minute trial — no credit card.</strong>',
  sectionTitle: <>Learn Quran Online with <em className="accent">Certified Tutors</em></>,
  sectionSubtitle:
    "Join 12,000+ students who learn Quran online from home — flexible scheduling, real-time pronunciation correction, and structured curriculum from Qaida to Hifz.",
  quickAnswer:
    'The best way to <strong>learn Quran online</strong> is through live <strong>1-on-1 classes</strong> with a certified tutor — starting with Noorani Qaida, then Quran reading, then Tajweed. NoorPath offers a free 30-minute trial with no credit card. <a href="/online-quran-classes#cta" style="color:var(--emerald);font-weight:700;">Book your free class →</a>',
  seoIntro:
    'Whether you are a parent searching for your child, an adult returning to Quran after years, or a complete beginner — <strong>learning Quran online</strong> has never been more accessible. NoorPath Academy connects you with Ijazah-certified tutors via live Zoom classes across the UK, USA, Canada, Australia, and 40+ countries. Unlike apps or YouTube videos, a live tutor corrects your Makharij (pronunciation) in real time — the only way to learn Quran correctly from the start.',
  phases: [
    { phase: "Phase 1", title: "Noorani Qaida", duration: "8–14 weeks", desc: "Arabic alphabet, harakat, letter joining, and basic word reading. Foundation for everything." },
    { phase: "Phase 2", title: "Quran Reading", duration: "3–6 months", desc: "Start from Juz Amma. Build fluency reading short surahs with teacher correction every session." },
    { phase: "Phase 3", title: "Tajweed & Hifz", duration: "Ongoing", desc: "Polish recitation with Tajweed rules or begin structured Hifz memorization with revision system." },
  ],
  compareRows: DEFAULT_COMPARE,
  features: [
    { icon: <BookOpen size={22} />, title: "Start from Zero", desc: "Complete beginners welcome — we begin with Noorani Qaida and Arabic letters at your pace." },
    { icon: <Users size={22} />, title: "1-on-1 Live Classes", desc: "Private sessions via Zoom — your tutor corrects every mistake in real time." },
    { icon: <Award size={22} />, title: "Ijazah-Certified Tutors", desc: "Every teacher holds Ijazah or Al-Azhar qualification with verified experience." },
    { icon: <Clock size={22} />, title: "Flexible Schedule", desc: "Morning, evening, or weekend slots across UK, US, Canada, Australia & 40+ countries." },
    { icon: <Video size={22} />, title: "Kids & Adults", desc: "Specialist tutors for children ages 4+ and adult beginners returning after years." },
    { icon: <CheckCircle size={22} />, title: "Structured Path", desc: "Qaida → Quran reading → Tajweed → optional Hifz — clear milestones every month." },
  ],
  faqs: [
    { q: "Can I learn Quran online as a complete beginner?", a: "Yes. NoorPath starts every beginner with Noorani Qaida — Arabic letters, vowels, and pronunciation. No prior Arabic knowledge is required for children or adults." },
    { q: "How long does it take to learn Quran online?", a: "With 2–3 weekly 30-minute lessons, most beginners read short surahs within 4–6 months. Tajweed and Hifz take longer depending on your goals and practice time." },
    { q: "Is learning Quran online effective?", a: "Yes — 1-on-1 online classes are often more effective than group madrassa classes because the tutor focuses entirely on your pronunciation and pace." },
    { q: "Do you offer learn Quran online for kids?", a: "Yes. We have child-specialist tutors for ages 4–12 with shorter sessions, games, and weekly parent progress reports." },
    { q: "Is the first class really free?", a: "Yes — one live 30-minute trial with a certified tutor. No credit card, no automatic charges." },
    { q: "What is the best age to learn Quran online?", a: "Children can start from age 4 with adapted sessions. Adults can begin at any age — many of our most motivated students are 30–50 years old returning to Quran." },
    { q: "Do I need to know Arabic to learn Quran online?", a: "No. You learn to read the Arabic script of the Quran — not conversational Arabic. Your tutor teaches pronunciation from the very first letter." },
  ],
  breadcrumbs: [...BASE_CRUMB, { label: "Learn Quran Online" }],
  ctaHeadline: <>Start Learning Quran <em style={{ color: "var(--gold-lt)" }}>Online Today</em></>,
  ctaSubtext: "Book your free trial — meet your tutor, get a level assessment, and receive a personalised learning plan.",
  relatedLinks: [
    { href: "/online-quran-classes-for-kids", label: "Quran Classes for Kids" },
    { href: "/online-quran-classes-for-adults", label: "Quran Classes for Adults" },
    { href: "/online-quran-for-beginners", label: "Quran for Beginners" },
    { href: "/courses/noorani-qaida-online", label: "Noorani Qaida Online" },
    { href: "/blog/learn-quran-online-adult-beginner-guide", label: "Adult Beginner Guide" },
  ],
};

export const onlineQuranAcademy: Omit<KeywordLandingPageProps, "canonicalPath"> & { keywords: string[]; metaTitle: string; metaDescription: string } = {
  metaTitle: "Online Quran Academy — Certified 1-on-1 Tutors | Free Trial 2026",
  metaDescription:
    "NoorPath Online Quran Academy — live 1-on-1 classes for kids & adults. Noorani Qaida, Tajweed, Hifz, Arabic. 12,000+ students, Ijazah tutors. Free trial.",
  keywords: [
    "online quran academy", "quran academy online", "online quran learning academy",
    "learn online quran academy", "best online quran academy", "quran academies online",
    "online islamic academy", "quran school online", "online quran institute",
  ],
  serviceName: "NoorPath Online Quran Academy",
  serviceDescription: "Certified online Quran academy offering 1-on-1 live classes — Qaida, Tajweed, Hifz, Arabic and Islamic studies for families worldwide.",
  audience: "Muslim families seeking structured online Quran education",
  h1: "Online Quran Academy",
  heroText:
    'NoorPath Academy is a certified <strong style="color:var(--gold-lt)">online Quran academy</strong> trusted by 12,000+ families. Live 1-on-1 tutoring — not pre-recorded videos. <strong style="color:var(--gold-lt)">Free 30-minute trial class.</strong>',
  sectionTitle: <>Why Choose Our <em className="accent">Online Quran Academy</em></>,
  sectionSubtitle:
    "Unlike generic tutoring platforms, we are a dedicated Quran academy with structured curriculum, certified scholars, and weekly progress tracking for every student.",
  quickAnswer:
    'An <strong>online Quran academy</strong> is a structured institution offering live 1-on-1 Quran classes with certified tutors, curriculum, and progress tracking. NoorPath Academy serves 12,000+ families worldwide with a free trial — no credit card required. <a href="#cta" style="color:var(--emerald);font-weight:700;">Book free trial →</a>',
  seoIntro:
    'Choosing the right <strong>online Quran academy</strong> is one of the most important decisions for your family\'s Islamic education. NoorPath Academy is not a tutor marketplace — we are a full academy with Ijazah-certified scholars, structured Noorani Qaida-to-Hifz curriculum, weekly parent reports, and family plans. Trusted by Muslim families in the UK, USA, Canada, Pakistan, UAE, and Australia since 2018.',
  phases: [
    { phase: "Program 1", title: "Noorani Qaida", duration: "Ages 4+", desc: "Arabic foundation for complete beginners — the first step in every academy student's journey." },
    { phase: "Program 2", title: "Quran & Tajweed", duration: "All ages", desc: "Fluent Quran reading with proper Tajweed rules — the core of academy education." },
    { phase: "Program 3", title: "Hifz & Advanced", duration: "Ages 7+", desc: "Full Quran memorization with Sabaq-Sabqi-Manzil revision and optional Sanad track." },
  ],
  compareRows: [
    { method: "NoorPath Academy (structured)", verdict: "✅ Best", note: "Certified tutors, curriculum, reports, family support, backup teachers" },
    { method: "Tutor marketplace (Qutor etc.)", verdict: "⚠️ Variable", note: "Quality varies — you evaluate each tutor yourself" },
    { method: "Pre-recorded courses", verdict: "❌ No correction", note: "Cannot hear or fix your pronunciation mistakes" },
    { method: "Local madrassa", verdict: "⚠️ Limited", note: "May lack qualified teachers; inflexible for working families" },
  ],
  features: [
    { icon: <Award size={22} />, title: "Academy-Grade Tutors", desc: "Ijazah and Al-Azhar certified — not freelance tutors without verification." },
    { icon: <BookOpen size={22} />, title: "Full Curriculum", desc: "Noorani Qaida, Tajweed, Hifz, Arabic, Islamic studies — all under one academy." },
    { icon: <Users size={22} />, title: "Family Plans", desc: "Enroll multiple children at sibling discounts — one academy for the whole family." },
    { icon: <Shield size={22} />, title: "Safe for Kids", desc: "Zoom-only classes, parent monitoring encouraged, background-verified tutors." },
    { icon: <Clock size={22} />, title: "Global Scheduling", desc: "UK, US, Canada, Australia, UAE, Pakistan — timezone-friendly slots." },
    { icon: <CheckCircle size={22} />, title: "Weekly Reports", desc: "Parents receive written progress updates — what was learned and what's next." },
  ],
  faqs: [
    { q: "What is an online Quran academy?", a: "An online Quran academy is a structured institution that provides live Quran education via video calls — with certified tutors, curriculum, progress tracking, and enrollment support. NoorPath is a full academy, not a tutor marketplace." },
    { q: "How is NoorPath different from tutor marketplaces?", a: "Marketplaces list independent tutors with varying quality. NoorPath assigns certified academy tutors, provides structured curriculum, weekly reports, backup coverage, and family support — like a traditional madrassa, online." },
    { q: "What courses does your online Quran academy offer?", a: "Noorani Qaida, Quran reading, Tajweed, Hifz memorization, Arabic language, Islamic studies, and daily duas for kids — all with live 1-on-1 instruction." },
    { q: "How much does online Quran academy cost?", a: "Plans start from $29/month. Your first class is a free 30-minute trial with no credit card required." },
    { q: "Do you have an online Quran academy for kids?", a: "Yes — ages 4–12 with child-specialist tutors. See our dedicated kids program page." },
    { q: "Where is NoorPath Academy located?", a: "We are an online academy serving families worldwide — with timezone-friendly slots for UK, USA, Canada, Australia, UAE, and Pakistan." },
    { q: "How do I enroll in the online Quran academy?", a: "Book a free 30-minute trial via the form below. After your trial, choose a monthly plan. No payment until you decide to continue." },
  ],
  breadcrumbs: [...BASE_CRUMB, { label: "Online Quran Academy" }],
  ctaHeadline: <>Join Our <em style={{ color: "var(--gold-lt)" }}>Online Quran Academy</em></>,
  ctaSubtext: "Enroll in a real academy — structured learning, certified tutors, and a free trial to experience the difference.",
  relatedLinks: [
    { href: "/blog/best-online-quran-academy-guide", label: "How to Choose an Academy" },
    { href: "/online-quran-classes-for-kids", label: "Kids Classes" },
    { href: "/our-tutors", label: "Our Certified Tutors" },
    { href: "/pricing", label: "Academy Pricing" },
    { href: "/locations", label: "Classes by Country" },
  ],
};

export const learnTajweedOnline: Omit<KeywordLandingPageProps, "canonicalPath"> & { keywords: string[]; metaTitle: string; metaDescription: string } = {
  metaTitle: "Learn Tajweed Online — Certified Tutors | Free Trial 2026",
  metaDescription:
    "Learn Tajweed online with Ijazah-certified tutors. Master Quran recitation rules — Makharij, Madd, Ghunna, Qalqalah. Live 1-on-1 classes. Free trial.",
  keywords: [
    "learn tajweed online", "tajweed classes online", "online tajweed course",
    "learn tajweed online free trial", "tajweed lessons online", "quran tajweed online",
    "tajweed for beginners online", "online tajweed teacher", "study tajweed online",
  ],
  serviceName: "Learn Tajweed Online — Live 1-on-1",
  serviceDescription: "Online Tajweed classes with certified tutors — all major recitation rules with live correction via Zoom.",
  h1: "Learn Tajweed Online",
  heroText:
    'Recite the Quran as the Prophet ﷺ recited it. Live <strong style="color:var(--gold-lt)">Tajweed classes online</strong> with Ijazah tutors who correct every rule in real time. <strong style="color:var(--gold-lt)">Free trial lesson.</strong>',
  sectionTitle: <>Master Tajweed <em className="accent">Online</em></>,
  sectionSubtitle: "Tajweed is the science of beautiful Quran recitation. Our tutors teach Noon Sakinah, Madd, Ghunna, Qalqalah, and all major rules using actual Quran verses.",
  quickAnswer:
    'To <strong>learn Tajweed online</strong>, you need a certified tutor who corrects your recitation live via video call. NoorPath offers Ijazah-qualified Tajweed tutors for all levels — free 30-minute trial available. <a href="#cta" style="color:var(--emerald);font-weight:700;">Book free Tajweed lesson →</a>',
  seoIntro:
    '<strong>Learning Tajweed online</strong> is the most effective way to beautify your Quran recitation when you cannot access a local Qari daily. Our tutors teach every major Tajweed rule — Makharij, Noon Sakinah, Madd, Qalqalah, Ghunna — using verses from the Quran itself, with live correction on Zoom. Suitable for beginners who can already read basic Quran, and advanced students pursuing Ijazah.',
  phases: [
    { phase: "Level 1", title: "Basic Tajweed", duration: "3–6 months", desc: "Makharij, Noon/Meem Sakinah, basic Madd and Qalqalah — applied to Juz Amma." },
    { phase: "Level 2", title: "Intermediate Rules", duration: "6–12 months", desc: "Idgham, Ikhfa, Iqlab, advanced Madd, characteristics of letters (Sifat)." },
    { phase: "Level 3", title: "Advanced / Ijazah", duration: "1–2 years", desc: "Perfect recitation refinement and preparation for Ijazah certification with Sanad." },
  ],
  compareRows: DEFAULT_COMPARE,
  features: [
    { icon: <Music size={22} />, title: "All Major Rules", desc: "Noon/Meem Sakinah, Madd, Idgham, Ikhfa, Qalqalah, Ghunna — complete Tajweed syllabus." },
    { icon: <Award size={22} />, title: "Ijazah Tutors", desc: "Learn from scholars who hold chain of transmission (Sanad) in Quran recitation." },
    { icon: <Users size={22} />, title: "Live Correction", desc: "Your tutor watches your mouth position on video — impossible with apps or recordings." },
    { icon: <BookOpen size={22} />, title: "Beginner to Ijazah", desc: "Start after basic reading or pursue advanced Tajweed and Ijazah certification." },
    { icon: <Clock size={22} />, title: "Flexible Times", desc: "Schedule around Salah and work — all timezones supported." },
    { icon: <CheckCircle size={22} />, title: "Practice with Quran", desc: "Every rule applied to actual ayahs — not abstract exercises alone." },
  ],
  faqs: [
    { q: "Can I learn Tajweed online without knowing Arabic?", a: "You should be able to read Quran at a basic level first. If you cannot read yet, start with our Noorani Qaida program, then move to Tajweed." },
    { q: "How long does it take to learn Tajweed online?", a: "Basic Tajweed rules take 6–12 months with 2–3 weekly lessons. Advanced mastery and Ijazah preparation can take 1–2 years." },
    { q: "What Tajweed rules will I learn?", a: "Makharij (articulation points), Noon Sakinah & Tanween rules, Meem Sakinah, Madd (elongation), Qalqalah, Ghunna, and characteristics of letters." },
    { q: "Do you offer Tajweed classes for kids?", a: "Yes — simplified Tajweed for children ages 7+ who can already read basic Quran." },
    { q: "Is there a free Tajweed trial?", a: "Yes — book a free 30-minute lesson. Your tutor assesses your level and demonstrates Tajweed correction live." },
    { q: "What is the difference between reading Quran and Tajweed?", a: "Reading means sounding out Arabic letters correctly. Tajweed is the set of rules that make recitation beautiful and accurate to how the Prophet ﷺ recited — both are essential." },
  ],
  breadcrumbs: [...BASE_CRUMB, { label: "Learn Tajweed Online" }],
  ctaHeadline: <>Start Tajweed <em style={{ color: "var(--gold-lt)" }}>Online Today</em></>,
  ctaSubtext: "Beautiful recitation starts with one lesson. Book your free Tajweed trial with a certified tutor.",
  relatedLinks: [
    { href: "/courses/tajweed-classes-online", label: "Tajweed Course Details" },
    { href: "/blog/tajweed-rules-complete-guide", label: "Tajweed Rules Guide" },
    { href: "/quran-teacher-online", label: "Online Quran Teacher" },
    { href: "/learn-quran-online", label: "Learn Quran Online" },
  ],
};

export const hifzQuranOnline: Omit<KeywordLandingPageProps, "canonicalPath"> & { keywords: string[]; metaTitle: string; metaDescription: string } = {
  metaTitle: "Hifz Quran Online — Memorization Program | Free Trial 2026",
  metaDescription:
    "Hifz Quran online with certified Huffaz tutors. Structured Juz-by-Juz memorization, Sabaq-Sabqi-Manzil revision. Kids & adults. Free trial class.",
  keywords: [
    "hifz quran online", "hifz online", "quran memorization online", "online hifz program",
    "memorize quran online", "hifz classes online", "online hifz course", "hifz tutor online",
    "quran hifz online for kids", "hifz e quran online",
  ],
  serviceName: "Hifz Quran Online — Memorization Program",
  serviceDescription: "Structured online Quran memorization with certified Hafiz tutors — Sabaq, Sabqi, Manzil revision system.",
  h1: "Hifz Quran Online",
  heroText:
    'Memorize the Quran from home with a certified <strong style="color:var(--gold-lt)">Hafiz tutor online</strong>. Structured Juz-by-Juz program with daily revision. Kids and adults welcome. <strong style="color:var(--gold-lt)">Free trial.</strong>',
  sectionTitle: <>Online Hifz Program with <em className="accent">Expert Huffaz</em></>,
  sectionSubtitle: "Our Hifz program uses the proven Sabaq–Sabqi–Manzil system — new memorization plus structured revision so you never forget what you've learned.",
  quickAnswer:
    '<strong>Hifz Quran online</strong> is possible with a certified Hafiz tutor guiding daily memorization and revision via live Zoom sessions. NoorPath uses the Sabaq-Sabqi-Manzil system for kids and adults. <a href="#cta" style="color:var(--emerald);font-weight:700;">Book free Hifz trial →</a>',
  seoIntro:
    'Completing <strong>Hifz Quran online</strong> requires daily consistency, a qualified Hafiz teacher, and a structured revision system — not willpower alone. NoorPath\'s online Hifz program pairs you with certified Huffaz who guide Juz-by-Juz memorization using the proven Sabaq (new), Sabqi (recent revision), and Manzil (old revision) methodology used in madrassas worldwide — from the comfort of your home.',
  phases: [
    { phase: "Stage 1", title: "Foundation", duration: "Month 1–3", desc: "Tajweed assessment, memorization rhythm, and building daily Hifz habit with short surahs." },
    { phase: "Stage 2", title: "Juz by Juz", duration: "1–3 years", desc: "Structured new Hifz daily with Sabqi and Manzil revision — typically 1 page per day." },
    { phase: "Stage 3", title: "Completion & Sanad", duration: "Final year", desc: "Full Quran revision, fluency testing, and optional Ijazah/Sanad certification preparation." },
  ],
  compareRows: DEFAULT_COMPARE,
  features: [
    { icon: <Brain size={22} />, title: "Structured Hifz Plan", desc: "Custom Juz-by-Juz roadmap based on your pace, age, and daily availability." },
    { icon: <Award size={22} />, title: "Certified Huffaz", desc: "Tutors who have completed Hifz themselves and hold Ijazah in memorization." },
    { icon: <CheckCircle size={22} />, title: "Revision System", desc: "Sabaq (new), Sabqi (recent), Manzil (old) — prevents forgetting memorized portions." },
    { icon: <Users size={22} />, title: "Kids & Adults", desc: "Children from age 7 and adults in their 20s–60s successfully memorizing online." },
    { icon: <Clock size={22} />, title: "Daily Sessions", desc: "Hifz requires consistency — we recommend 5–6 sessions per week for best results." },
    { icon: <BookOpen size={22} />, title: "Sanad Track", desc: "Advanced students can pursue Ijazah and chain of transmission certification." },
  ],
  faqs: [
    { q: "Can I do Hifz Quran online?", a: "Yes. Thousands of students memorize Quran online with live Hafiz tutors. You need daily consistency, a quiet space, and 45–60 minute sessions for serious Hifz progress." },
    { q: "How long does it take to complete Hifz online?", a: "Typically 2–5 years depending on age, sessions per week, and revision discipline. Children often progress faster due to memory capacity." },
    { q: "Can adults memorize Quran online?", a: "Absolutely. We have adult Hifz students in their 30s, 40s, and beyond. Age is not a barrier with the right tutor and revision system." },
    { q: "What is the Sabaq Sabqi Manzil system?", a: "Sabaq is new memorization, Sabqi revises recent portions (last 10 days), and Manzil revises older completed Juz weekly — the standard Hifz methodology worldwide." },
    { q: "Do you offer Hifz for kids online?", a: "Yes — ages 7+ with child-friendly Hafiz tutors and shorter initial sessions that grow with progress." },
    { q: "How many hours per day should I study Hifz online?", a: "Most students need 45–60 minutes daily with their tutor plus 30 minutes self-revision. Consistency matters more than long sessions." },
  ],
  breadcrumbs: [...BASE_CRUMB, { label: "Hifz Quran Online" }],
  ctaHeadline: <>Begin Your <em style={{ color: "var(--gold-lt)" }}>Hifz Journey Online</em></>,
  ctaSubtext: "Meet a certified Hafiz tutor, get your memorization plan, and start with a free trial lesson.",
  relatedLinks: [
    { href: "/courses/hifz-program-online", label: "Hifz Program Details" },
    { href: "/blog/how-to-memorize-quran-faster", label: "Memorization Tips" },
    { href: "/online-quran-classes-for-kids", label: "Kids Quran Classes" },
    { href: "/learn-quran-online", label: "Learn Quran Online" },
  ],
};

export const quranLessonOnline: Omit<KeywordLandingPageProps, "canonicalPath"> & { keywords: string[]; metaTitle: string; metaDescription: string } = {
  metaTitle: "Quran Lesson Online — Live 1-on-1 Classes | Free Trial 2026",
  metaDescription:
    "Book live Quran lessons online with certified tutors. 1-on-1 private sessions — Qaida, reading, Tajweed, Hifz. Kids & adults. Free 30-min trial lesson.",
  keywords: [
    "quran lesson online", "quran lessons online", "online quran lesson",
    "quran class online", "private quran lesson online", "live quran lesson",
    "quran tutoring online", "one on one quran lesson", "quran lesson for kids online",
  ],
  serviceName: "Quran Lesson Online — Live 1-on-1",
  serviceDescription: "Private live Quran lessons online via Zoom with certified tutors — personalised to your level and goals.",
  h1: "Quran Lesson Online",
  heroText:
    'Private <strong style="color:var(--gold-lt)">Quran lessons online</strong> — not group classes, not recordings. One tutor, one student, live on Zoom. <strong style="color:var(--gold-lt)">Book a free trial lesson today.</strong>',
  sectionTitle: <>Live Quran Lessons <em className="accent">Tailored to You</em></>,
  sectionSubtitle: "Every lesson is built around your level — whether you're learning your first Arabic letter or perfecting advanced Tajweed.",
  quickAnswer:
    'A <strong>Quran lesson online</strong> is a live 30–45 minute 1-on-1 video session with a certified tutor who teaches, listens to your recitation, and corrects mistakes in real time — not a recording. First lesson free at NoorPath. <a href="#cta" style="color:var(--emerald);font-weight:700;">Book free lesson →</a>',
  seoIntro:
    'Private <strong>Quran lessons online</strong> give you what group classes and apps cannot — a qualified teacher\'s full attention on your recitation, pace, and goals. Each NoorPath lesson includes homework review, new material, live Tajweed correction, and clear practice tasks. Available for children ages 4+, teens, and adults at any level from complete beginner to advanced Hifz.',
  phases: [
    { phase: "Beginner", title: "Qaida Lessons", duration: "20–30 min", desc: "Arabic letters, vowels, and joining — building blocks of every Quran lesson." },
    { phase: "Intermediate", title: "Reading Lessons", duration: "30–40 min", desc: "Surah-by-surah reading with live pronunciation and fluency building." },
    { phase: "Advanced", title: "Tajweed & Hifz", duration: "45–60 min", desc: "Rule-based Tajweed refinement or structured daily Hifz memorization." },
  ],
  compareRows: DEFAULT_COMPARE,
  features: [
    { icon: <Video size={22} />, title: "Live on Zoom", desc: "Real-time video lessons with screen sharing and digital Qaida — not pre-recorded." },
    { icon: <Users size={22} />, title: "1-on-1 Private", desc: "Your tutor's full attention — every pronunciation mistake corrected instantly." },
    { icon: <BookOpen size={22} />, title: "Any Level", desc: "Complete beginner, intermediate reader, Tajweed student, or Hifz memorizer." },
    { icon: <Clock size={22} />, title: "30–45 Min Sessions", desc: "Optimal length for focus — adjusted for children and adults." },
    { icon: <Award size={22} />, title: "Certified Tutors", desc: "Ijazah and Al-Azhar qualified teachers assigned to match your goals." },
    { icon: <CheckCircle size={22} />, title: "Homework & Review", desc: "Each lesson ends with clear practice tasks before your next session." },
  ],
  faqs: [
    { q: "What happens in an online Quran lesson?", a: "Your tutor reviews homework, teaches new material (letters, reading, or Tajweed rules), listens to your recitation, corrects mistakes live, and assigns practice for the next session." },
    { q: "How long is each Quran lesson online?", a: "Typically 30 minutes for beginners and children, 45 minutes for intermediate and Hifz students. Length is adjusted to your attention span and goals." },
    { q: "Can I book a single trial Quran lesson?", a: "Yes — your first 30-minute lesson is completely free. No credit card required." },
    { q: "How many Quran lessons per week do I need?", a: "2–3 lessons per week is ideal for beginners. Hifz students typically need 5–6 sessions weekly for steady progress." },
    { q: "Are Quran lessons online suitable for children?", a: "Yes — our child-specialist tutors use engaging methods for ages 4–12 with shorter, fun sessions." },
    { q: "What is included in each Quran lesson?", a: "Homework review, new teaching, live recitation with correction, and assigned practice until the next lesson. Parents receive a summary for children's lessons." },
  ],
  breadcrumbs: [...BASE_CRUMB, { label: "Quran Lesson Online" }],
  ctaHeadline: <>Book Your First <em style={{ color: "var(--gold-lt)" }}>Quran Lesson Free</em></>,
  ctaSubtext: "One live lesson with a certified tutor — see why 12,000+ students choose NoorPath.",
  relatedLinks: [
    { href: "/free-quran-classes-online", label: "Free Quran Trial Class" },
    { href: "/quran-teacher-online", label: "Find a Quran Teacher" },
    { href: "/online-quran-classes-for-kids", label: "Kids Lessons" },
    { href: "/pricing", label: "Lesson Pricing" },
  ],
};

export const studyingQuranOnline: Omit<KeywordLandingPageProps, "canonicalPath"> & { keywords: string[]; metaTitle: string; metaDescription: string } = {
  metaTitle: "Studying Quran Online — Live Classes for Kids & Adults | Free Trial",
  metaDescription:
    "Studying Quran online with certified tutors — structured 1-on-1 classes for Qaida, reading, Tajweed & Hifz. Flexible schedule worldwide. Free trial.",
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
  sectionTitle: <>The Smart Way to <em className="accent">Study Quran Online</em></>,
  sectionSubtitle: "Studying Quran online works best with a live teacher who guides your recitation, tracks your revision, and keeps you accountable week after week.",
  quickAnswer:
    '<strong>Studying Quran online</strong> works best with 2–3 live weekly sessions plus 15–20 minutes daily self-practice. A certified tutor keeps you accountable and corrects pronunciation — far more effective than apps alone. <a href="#cta" style="color:var(--emerald);font-weight:700;">Start free trial →</a>',
  seoIntro:
    '<strong>Studying the Quran online</strong> has become the preferred method for Muslim families who cannot access quality local teachers. Whether you are in the UK, USA, Germany, Pakistan, or Australia — NoorPath connects you with certified tutors for structured Quran study via live Zoom. Our students study Noorani Qaida, Quran reading, Tajweed, and Hifz with weekly goals, progress reports, and a tutor who knows their name.',
  phases: [
    { phase: "Week 1–4", title: "Assessment & Setup", duration: "First month", desc: "Free trial, level assessment, tutor matching, and daily study routine established." },
    { phase: "Month 2–6", title: "Core Study", duration: "Foundation", desc: "Daily lessons and practice — Qaida or Quran reading with measurable weekly milestones." },
    { phase: "Month 6+", title: "Advanced Study", duration: "Ongoing", desc: "Tajweed mastery, Hifz track, or Arabic language — based on your goals." },
  ],
  compareRows: DEFAULT_COMPARE,
  features: [
    { icon: <BookOpen size={22} />, title: "Structured Study Plan", desc: "Clear weekly goals — not random YouTube videos without progression." },
    { icon: <Users size={22} />, title: "Accountability", desc: "A tutor who expects your homework — consistency is the secret to Quran study." },
    { icon: <Award size={22} />, title: "Expert Guidance", desc: "Certified scholars explain not just what to recite, but why Tajweed rules matter." },
    { icon: <Clock size={22} />, title: "Study Any Time", desc: "Early morning after Fajr, lunch break, or evening after work — your schedule." },
    { icon: <Shield size={22} />, title: "Safe Environment", desc: "Parent-monitored Zoom sessions for children; private comfortable learning for adults." },
    { icon: <CheckCircle size={22} />, title: "Measurable Progress", desc: "Monthly assessments show exactly how far you've come in your Quran study." },
  ],
  faqs: [
    { q: "Is studying Quran online as good as a local madrassa?", a: "For 1-on-1 learning, online is often better — you get the tutor's full attention, flexible timing, and access to certified teachers worldwide that may not exist locally." },
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
    { href: "/online-quran-academy", label: "Online Quran Academy" },
    { href: "/online-quran-for-beginners", label: "Quran for Beginners" },
    { href: "/blog/benefits-of-online-quran-classes", label: "Benefits of Online Classes" },
  ],
};
