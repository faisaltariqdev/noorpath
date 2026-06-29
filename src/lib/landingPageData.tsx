import { Award, BookOpen, CheckCircle, Clock, Music, Brain, Users, Video, Shield } from "lucide-react";
import type { KeywordLandingPageProps } from "@/components/KeywordLandingPage";

const BASE_CRUMB = [
  { label: "Home", href: "/" },
  { label: "Online Quran Classes", href: "/online-quran-classes" },
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
