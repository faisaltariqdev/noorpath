export interface CountryTimingsSlot {
  slot: string;
  time: string;
  description: string;
}

export interface CountryPricingTier {
  planName: string;
  monthlyPrice: string;
  perClassPrice: string;
  sessions: string;
  duration: string;
}

export interface CountryTestimonial {
  name: string;
  location: string;
  text: string;
  stars: number;
  date?: string;
  isReal: boolean;
}

export interface CountryFaq {
  q: string;
  a: string;
}

export interface CountryCityLink {
  name: string;
  url: string;
}

export interface CountryLandingPageData {
  slug: string;
  countryName: string;
  flag: string;
  timezone: string;
  currencyCode: string;
  currencySymbol: string;
  h1: string;
  metaTitle: string;
  metaDescription: string;
  answerBox: string;
  timingsSlots: CountryTimingsSlot[];
  weekendSchedule: string;
  pricingTiers: CountryPricingTier[];
  pricingNote: string;
  testimonials: CountryTestimonial[];
  hasRealTestimonials: boolean;
  whyChooseBullets: {
    title: string;
    description: string;
  }[];
  faqs: CountryFaq[];
  cityLinks: CountryCityLink[];
}

export const REBUILT_COUNTRY_SLUGS = [
  "online-quran-classes-pakistan",
  "online-quran-classes-uk",
  "online-quran-classes-usa",
  "online-quran-classes-uae",
  "online-quran-classes-saudi-arabia",
  "online-quran-classes-nigeria",
  "online-quran-classes-qatar",
  "online-quran-classes-canada",
] as const;

export type RebuiltCountrySlug = (typeof REBUILT_COUNTRY_SLUGS)[number];

export const countryLandingPages: Record<RebuiltCountrySlug, CountryLandingPageData> = {
  "online-quran-classes-pakistan": {
    slug: "online-quran-classes-pakistan",
    countryName: "Pakistan",
    flag: "🇵🇰",
    timezone: "PKT (UTC+5)",
    currencyCode: "PKR",
    currencySymbol: "PKR ",
    h1: "Online Quran Classes in Pakistan — 1-on-1 Noorani Qaida, Hifz & Tajweed",
    metaTitle: "Online Quran Classes in Pakistan | 1-on-1 Noorani Qaida & Hifz — NoorPath",
    metaDescription:
      "Join 1-on-1 online Quran classes in Pakistan in PKT (UTC+5). Learn Noorani Qaida, Tajweed & Hifz from PKR 8,100/mo. Book 3 free trial sessions today.",
    answerBox:
      "NoorPath provides live one-on-one online Quran classes for children, adults, and sisters across Pakistan. Lessons focus on Noorani Qaida, Tajweed, and Hifz with flexible scheduling in PKT (UTC+5) across morning, afternoon, and evening slots. Every student begins with 3 free trial sessions, requiring no upfront fees or credit card.",
    timingsSlots: [
      {
        slot: "Morning / Pre-school slot",
        time: "Mon–Fri 7:00 AM – 11:00 AM PKT",
        description: "Ideal for home-schooled students and early morning Qaida recitation before daily activities.",
      },
      {
        slot: "After-school & evening slot",
        time: "Mon–Fri 3:00 PM – 9:00 PM PKT",
        description: "Our most popular window for school-going children and teenagers returning home.",
      },
      {
        slot: "Weekend morning recitation",
        time: "Sat–Sun 8:00 AM – 2:00 PM PKT",
        description: "Dedicated weekend slots for undisturbed Hifz memorisation and Makharaj drills.",
      },
      {
        slot: "Weekend evening revision",
        time: "Sat–Sun 4:00 PM – 10:00 PM PKT",
        description: "Flexible evening sessions for adult learners, working professionals, and family review.",
      },
    ],
    weekendSchedule:
      "In Pakistan, regular class scheduling operates on a Saturday–Sunday weekend model. Weekday evening slots run seamlessly after school and college hours. Flexible rescheduling is available during Ramadan, Eid-ul-Fitr, Eid-ul-Adha, and national holidays. Families can select weekday-only, weekend-only, or blended schedules.",
    pricingTiers: [
      {
        planName: "Starter Plan",
        monthlyPrice: "PKR 8,100 / month",
        perClassPrice: "approx. PKR 2,025 / class",
        sessions: "4 sessions / month (1x per week)",
        duration: "30 minutes per class",
      },
      {
        planName: "Standard Plan",
        monthlyPrice: "PKR 13,700 / month",
        perClassPrice: "approx. PKR 1,713 / class",
        sessions: "8 sessions / month (2x per week)",
        duration: "45 minutes per class",
      },
      {
        planName: "Intensive Plan",
        monthlyPrice: "PKR 22,000 / month",
        perClassPrice: "approx. PKR 1,375 / class",
        sessions: "16 sessions / month (4x per week)",
        duration: "60 minutes per class",
      },
    ],
    pricingNote:
      "Public pricing converted from standard USD fees ($29, $49, $79/mo). Sibling discounts apply: 15% for 2 siblings, 20% for 3 siblings, and 25% for 4+ siblings. Includes 3 free 30-minute trial sessions.",
    testimonials: [
      {
        name: "Hamza Iqbal",
        location: "Pakistan",
        text: "Impressive platform, good and supportive staff, recommended.",
        stars: 5,
        date: "June 2026",
        isReal: true,
      },
    ],
    hasRealTestimonials: true,
    whyChooseBullets: [
      {
        title: "Female Quran Teachers Available",
        description:
          "Certified female Quran teachers are available for daughters and sisters, providing private, comfortable 1-on-1 lessons.",
      },
      {
        title: "Timezone-Friendly PKT Scheduling",
        description:
          "Convenient morning, after-school, and weekend slots in Pakistan Standard Time (PKT, UTC+5) scheduled around local family routines.",
      },
      {
        title: "Native Urdu & Bilingual Teachers",
        description:
          "Teachers fluent in Urdu and English explain intricate Tajweed rules and Arabic grammar clearly to students of all ages.",
      },
      {
        title: "Parent Portal Progress Updates",
        description:
          "Parents get regular progress updates through the Parent Portal (attendance, homework and teacher reports) to follow student Qaida fluency and Hifz retention.",
      },
    ],
    faqs: [
      {
        q: "Can I get a female Quran teacher in Pakistan?",
        a: "Yes. NoorPath provides qualified, experienced female Quran teachers for young girls, adult sisters, and female students throughout Pakistan. Lessons are conducted 1-on-1 in a comfortable, private online classroom.",
      },
      {
        q: "What are the class timings for Pakistan?",
        a: "Classes run 7 days a week from 7:00 AM to 11:00 PM PKT (UTC+5). Families can choose recurring morning, afternoon, after-school, or evening slots that fit their household routines.",
      },
      {
        q: "How much do online Quran classes cost in Pakistan?",
        a: "Monthly tuition starts from PKR 8,100/month (approximately PKR 2,025 per 1-on-1 class). Our Standard plan is PKR 13,700/month (8 lessons), and the Intensive plan is PKR 22,000/month (16 lessons). Generous family sibling discounts are also available.",
      },
      {
        q: "Do you teach in Urdu or English?",
        a: "Our instructors are fluent in both Urdu and English. They explain Tajweed rules, Arabic phonetics, and Islamic studies in your preferred language while teaching authentic classical Arabic recitation.",
      },
      {
        q: "Is there a free trial?",
        a: "Yes. NoorPath offers 3 free 30-minute trial sessions with no credit card required. You can evaluate the tutor's rapport, check video/audio quality, and receive an initial student assessment before paying anything.",
      },
    ],
    cityLinks: [
      { name: "Karachi Online Quran Classes", url: "/online-quran-classes/karachi" },
      { name: "Lahore Online Quran Classes", url: "/online-quran-classes/lahore" },
      { name: "Hyderabad Online Quran Classes", url: "/online-quran-classes/hyderabad" },
    ],
  },

  "online-quran-classes-uk": {
    slug: "online-quran-classes-uk",
    countryName: "United Kingdom",
    flag: "🇬🇧",
    timezone: "GMT / BST",
    currencyCode: "GBP",
    currencySymbol: "£",
    h1: "Online Quran Classes in United Kingdom — 1-on-1 Noorani Qaida, Hifz & Tajweed",
    metaTitle: "Online Quran Classes in United Kingdom | 1-on-1 Noorani Qaida & Hifz — NoorPath",
    metaDescription:
      "Live 1-on-1 online Quran classes in the UK in GMT/BST. From £23/mo with certified tutors. After-school slots & 3 free trial sessions available.",
    answerBox:
      "NoorPath provides live one-to-one online Quran classes for Muslim children and adults across the United Kingdom. Covering Noorani Qaida, Tajweed, and Hifz, lessons are scheduled in local GMT/BST after school and on weekends. Families can choose certified male or female tutors and start with 3 free trial sessions.",
    timingsSlots: [
      {
        slot: "After-school & evening slots",
        time: "Mon–Fri 4:00 PM – 9:00 PM GMT / BST",
        description: "Scheduled specifically after British school finish times (primary and secondary).",
      },
      {
        slot: "Weekend morning classes",
        time: "Sat–Sun 8:30 AM – 2:00 PM GMT / BST",
        description: "Popular weekend morning time slots for focused recitation before family activities.",
      },
      {
        slot: "Weekend afternoon & evening",
        time: "Sat–Sun 3:00 PM – 8:00 PM GMT / BST",
        description: "Flexible weekend revision and Hifz memorisation slots for children and working adults.",
      },
      {
        slot: "Daytime adult & sisters slot",
        time: "Mon–Fri 9:00 AM – 1:00 PM GMT / BST",
        description: "Quiet weekday daytime hours for adult learners, revert Muslims, and home educators.",
      },
    ],
    weekendSchedule:
      "In the UK, lessons follow a Saturday–Sunday weekend structure. Most school-age students take after-school lessons between 4:00 PM and 8:00 PM on weekdays, or weekend morning slots that do not clash with family activities. Timetables automatically adjust for UK daylight saving (GMT to BST) transitions.",
    pricingTiers: [
      {
        planName: "Starter Plan",
        monthlyPrice: "approx. £23 / month",
        perClassPrice: "approx. £5.75 / class",
        sessions: "4 sessions / month (1x per week)",
        duration: "30 minutes per class",
      },
      {
        planName: "Standard Plan",
        monthlyPrice: "approx. £39 / month",
        perClassPrice: "approx. £4.88 / class",
        sessions: "8 sessions / month (2x per week)",
        duration: "45 minutes per class",
      },
      {
        planName: "Intensive Plan",
        monthlyPrice: "approx. £63 / month",
        perClassPrice: "approx. £3.94 / class",
        sessions: "16 sessions / month (4x per week)",
        duration: "60 minutes per class",
      },
    ],
    pricingNote:
      "Converted from public USD pricing ($29, $49, $79/mo). Sibling discounts: 15% for 2 siblings, 20% for 3, 25% for 4+. 3 free 30-minute trial sessions with no credit card required.",
    testimonials: [
      {
        name: "Ahmed",
        location: "United Kingdom",
        text: "Reciting Quran Pak is one of the greatest acts of worship. Teachers have good knowledge, understanding and patience. Professional online Quran Pak learning with compassionate teaching, regular revision and real confidence building. Mash'Allah fantastic teachers, calm atmosphere. Highly recommended.",
        stars: 5,
        date: "July 2026",
        isReal: true,
      },
    ],
    hasRealTestimonials: true,
    whyChooseBullets: [
      {
        title: "Female Quran Teachers Available",
        description:
          "Safeguarding-aware female Quran teachers are available for daughters and sisters, ensuring a secure and supportive private environment.",
      },
      {
        title: "Timezone-Friendly GMT / BST Matching",
        description:
          "Schedules align precisely with British school days and daylight saving time changes, avoiding late-night fatigue. Learn how we structure lessons in our guide to timezone-friendly Quran classes in the UK & Europe: /blog/timezone-friendly-quran-classes-uk-europe.",
      },
      {
        title: "UK Curriculum & School Alignment",
        description:
          "Teaching pace adjusts around UK academic terms, half-term breaks, and GCSE/A-level exam periods.",
      },
      {
        title: "Parent Portal Progress Updates",
        description:
          "Practice Tajweed exercises at home and track Surah completion through our dedicated Parent Portal.",
      },
    ],
    faqs: [
      {
        q: "Can I get a female Quran teacher in the UK?",
        a: "Yes. We have certified female Quran tutors available for young daughters, sisters, and female adult learners across the UK. Sessions are private and 1-on-1 via live video or audio.",
      },
      {
        q: "What are the class timings for the UK?",
        a: "UK classes are available Monday through Sunday. Most British families prefer after-school slots between 4:00 PM and 8:30 PM GMT/BST, or Saturday and Sunday morning slots between 9:00 AM and 1:00 PM.",
      },
      {
        q: "How much do online Quran classes cost in the UK?",
        a: "Pricing starts from approximately £23/month for weekly 1-on-1 lessons (around £5.75 per class). Our most popular Standard plan (twice a week) is approximately £39/month, and intensive 4-day plans are £63/month.",
      },
      {
        q: "Do you follow a UK curriculum schedule?",
        a: "Yes. Our lesson schedules adapt around British primary and secondary school terms, half-term breaks, GCSE/A-Level revision seasons, and British Summer Time clock shifts.",
      },
      {
        q: "Is there a free trial?",
        a: "Yes. UK families can book 3 free 30-minute trial sessions with zero obligation and no credit card required to experience our teaching quality firsthand.",
      },
    ],
    cityLinks: [
      { name: "London Online Quran Classes", url: "/online-quran-classes/london" },
      { name: "Birmingham Online Quran Classes", url: "/online-quran-classes/birmingham" },
    ],
  },

  "online-quran-classes-usa": {
    slug: "online-quran-classes-usa",
    countryName: "United States",
    flag: "🇺🇸",
    timezone: "ET / CT / PT",
    currencyCode: "USD",
    currencySymbol: "$",
    h1: "Online Quran Classes in United States — 1-on-1 Noorani Qaida, Hifz & Tajweed",
    metaTitle: "Online Quran Classes in United States | 1-on-1 Noorani Qaida & Hifz — NoorPath",
    metaDescription:
      "Live 1-on-1 online Quran classes in the USA across ET/CT/PT timezones. From $29/mo with certified tutors. Noorani Qaida, Tajweed & free trial.",
    answerBox:
      "NoorPath delivers live 1-on-1 online Quran classes for Muslim children, adults, and reverts throughout the United States. Spanning Noorani Qaida, Tajweed, and Hifz memorization, sessions are matched to your local timezone across ET, CT, MT, and PT. Start with 3 free 30-minute trial sessions without entering credit card details.",
    timingsSlots: [
      {
        slot: "After-school weekday slots",
        time: "Mon–Fri 4:00 PM – 9:00 PM ET / CT / PT",
        description: "Scheduled to fit after American public and Islamic school dismissals across all US timezones.",
      },
      {
        slot: "Weekend morning intensive",
        time: "Sat–Sun 9:00 AM – 2:00 PM ET / CT / PT",
        description: "Calm morning sessions ideal for Noorani Qaida basics and Surah memorization.",
      },
      {
        slot: "Weekend evening revision",
        time: "Sat–Sun 3:00 PM – 8:00 PM ET / CT / PT",
        description: "Convenient evening slots for working parents and older students.",
      },
      {
        slot: "Daytime homeschool & adult slot",
        time: "Mon–Fri 9:00 AM – 1:00 PM ET / CT / PT",
        description: "Flexible daytime slots for homeschoolers, adult professionals, and revert Muslims.",
      },
    ],
    weekendSchedule:
      "United States schedules run on a Saturday–Sunday weekend pattern. Weekday lessons start after 4:00 PM local time across Eastern, Central, Mountain, and Pacific zones so children have time to return from public or private schools. Holiday schedules accommodate Thanksgiving, winter break, and Ramadan.",
    pricingTiers: [
      {
        planName: "Starter Plan",
        monthlyPrice: "$29 / month",
        perClassPrice: "$7.25 / class",
        sessions: "4 sessions / month (1x per week)",
        duration: "30 minutes per class",
      },
      {
        planName: "Standard Plan",
        monthlyPrice: "$49 / month",
        perClassPrice: "$6.13 / class",
        sessions: "8 sessions / month (2x per week)",
        duration: "45 minutes per class",
      },
      {
        planName: "Intensive Plan",
        monthlyPrice: "$79 / month",
        perClassPrice: "$4.94 / class",
        sessions: "16 sessions / month (4x per week)",
        duration: "60 minutes per class",
      },
    ],
    pricingNote:
      "Public pricing published on /pricing in USD. Sibling discounts: 15% for 2 siblings, 20% for 3, 25% for 4+. 3 free 30-minute trial sessions with no credit card required.",
    testimonials: [],
    hasRealTestimonials: false,
    whyChooseBullets: [
      {
        title: "Female Quran Teachers Available",
        description:
          "Verified female Quran tutors are available for daughters and adult sisters, ensuring privacy and personal comfort.",
      },
      {
        title: "Multi-Timezone US Coverage",
        description:
          "Flexible scheduling tailored for Eastern, Central, Mountain, and Pacific time zones to fit your state's schedule.",
      },
      {
        title: "US Curriculum & School Alignment",
        description:
          "Syllabus designed for American Muslim youth balancing public school demands with Islamic education.",
      },
      {
        title: "Parent Portal Progress Updates",
        description:
          "Full transparency with regular progress updates through the Parent Portal (attendance, homework and teacher reports).",
      },
    ],
    faqs: [
      {
        q: "Can I get a female Quran teacher in the USA?",
        a: "Yes. NoorPath has certified female Quran tutors available for sisters and daughters across the US. All classes are 1-on-1 and conducted in a private, respectful learning environment.",
      },
      {
        q: "What are the class timings for the United States?",
        a: "We offer class slots across ET, CT, MT, and PT time zones from 8:00 AM to 10:00 PM daily. Most US parents choose after-school slots between 4:00 PM and 8:30 PM local time.",
      },
      {
        q: "How much do online Quran classes cost in the USA?",
        a: "Plans start at $29/month for 4 weekly sessions ($7.25 per class). Our most popular plan is $49/month for 8 sessions ($6.13 per class), and our intensive plan is $79/month for 16 sessions ($4.94 per class).",
      },
      {
        q: "Do you follow a US curriculum and schedule?",
        a: "Yes. Classes accommodate US elementary, middle, and high school schedules, semester finals, and national holiday recesses with easy rescheduling.",
      },
      {
        q: "Is there a free trial?",
        a: "Yes. NoorPath provides 3 free 30-minute 1-on-1 trial sessions with no credit card required so your family can test tutor compatibility and technology.",
      },
    ],
    cityLinks: [
      { name: "New York Online Quran Classes", url: "/online-quran-classes/new-york" },
      { name: "Houston Online Quran Classes", url: "/online-quran-classes/houston" },
      { name: "Los Angeles Online Quran Classes", url: "/online-quran-classes/los-angeles" },
      { name: "Chicago Online Quran Classes", url: "/online-quran-classes/chicago" },
      { name: "Dallas Online Quran Classes", url: "/online-quran-classes/dallas" },
    ],
  },

  "online-quran-classes-uae": {
    slug: "online-quran-classes-uae",
    countryName: "United Arab Emirates",
    flag: "🇦🇪",
    timezone: "GST (UTC+4)",
    currencyCode: "AED",
    currencySymbol: "AED ",
    h1: "Online Quran Classes in United Arab Emirates — 1-on-1 Noorani Qaida, Hifz & Tajweed",
    metaTitle: "Online Quran Classes in United Arab Emirates | 1-on-1 Noorani Qaida & Hifz — NoorPath",
    metaDescription:
      "Live 1-on-1 online Quran classes in the UAE in GST (UTC+4). From AED 107/mo for expat and local families. Tajweed, Hifz & free trial.",
    answerBox:
      "NoorPath provides live 1-on-1 online Quran classes for expat and resident families across Dubai, Abu Dhabi, and Sharjah. Offering Noorani Qaida, Tajweed, and Hifz in GST (UTC+4), classes fit seamlessly around international school timetables. Choose qualified male or female tutors and reserve 3 free trial sessions today.",
    timingsSlots: [
      {
        slot: "After-school weekday slots",
        time: "Mon–Fri 3:30 PM – 9:00 PM GST",
        description: "Ideal for expat students arriving home from international schools in Dubai and Abu Dhabi.",
      },
      {
        slot: "Weekend morning Quran session",
        time: "Sat–Sun 8:30 AM – 1:30 PM GST",
        description: "Focused Saturday and Sunday morning slots during the UAE public weekend.",
      },
      {
        slot: "Weekend afternoon & evening",
        time: "Sat–Sun 3:30 PM – 8:30 PM GST",
        description: "Convenient evening sessions for Tajweed practice, Hifz revision, and adult learners.",
      },
      {
        slot: "Daytime sisters & adults",
        time: "Mon–Fri 8:30 AM – 12:30 PM GST",
        description: "Quiet morning slots for mothers, adult sisters, and daytime learners.",
      },
    ],
    weekendSchedule:
      "In the UAE, official working hours and schools follow the Saturday–Sunday weekend. Friday afternoons and Saturday/Sunday mornings are popular for Quran studies. Our scheduling adapts around British, American, and IB curriculum school dismissals across all Emirates.",
    pricingTiers: [
      {
        planName: "Starter Plan",
        monthlyPrice: "approx. AED 107 / month",
        perClassPrice: "approx. AED 26.75 / class",
        sessions: "4 sessions / month (1x per week)",
        duration: "30 minutes per class",
      },
      {
        planName: "Standard Plan",
        monthlyPrice: "approx. AED 180 / month",
        perClassPrice: "approx. AED 22.50 / class",
        sessions: "8 sessions / month (2x per week)",
        duration: "45 minutes per class",
      },
      {
        planName: "Intensive Plan",
        monthlyPrice: "approx. AED 290 / month",
        perClassPrice: "approx. AED 18.13 / class",
        sessions: "16 sessions / month (4x per week)",
        duration: "60 minutes per class",
      },
    ],
    pricingNote:
      "Converted from public USD pricing ($29, $49, $79/mo). Sibling discounts: 15% for 2 siblings, 20% for 3, 25% for 4+. 3 free 30-minute trial sessions with no credit card required.",
    testimonials: [
      {
        name: "Mohammed Omer Al Amoodi",
        location: "United Arab Emirates",
        text: "May Allah bless who ever has created this app and may Allah help reach this app to all Muslims. Very helpful and easy to understand and access.",
        stars: 5,
        date: "July 2026",
        isReal: true,
      },
      {
        name: "Hassan Tariq",
        location: "United Arab Emirates",
        text: "I had a great experience with this online Quran teaching website. The teachers are knowledgeable, patient, and professional. Classes are well-organized, and the learning environment is very comfortable for both children and adults. The instructors focus on proper Tajweed. I highly recommend this platform to anyone looking for quality online Quran education.",
        stars: 5,
        date: "June 2026",
        isReal: true,
      },
    ],
    hasRealTestimonials: true,
    whyChooseBullets: [
      {
        title: "Female Quran Teachers Available",
        description:
          "Certified female Quran teachers are available for daughters and sisters, ensuring a modest and comfortable learning environment.",
      },
      {
        title: "Timezone-Friendly GST (UTC+4) Slots",
        description:
          "Schedules match UAE school traffic and family routines, including Saturday–Sunday weekend slots.",
      },
      {
        title: "International School Compatibility",
        description:
          "Teaching approaches match the learning pace of students enrolled in British, American, IB, and Indian curriculum schools.",
      },
      {
        title: "Parent Portal Progress Updates",
        description:
          "Expat families get regular progress updates through the Parent Portal (attendance, homework and teacher reports) and can follow milestone assessments.",
      },
    ],
    faqs: [
      {
        q: "Can I get a female Quran teacher in the UAE?",
        a: "Yes. NoorPath has qualified female Quran teachers available for sisters and young girls in Dubai, Abu Dhabi, Sharjah, and across the UAE. Lessons are conducted 1-on-1 in a comfortable home environment.",
      },
      {
        q: "What are the class timings for the UAE?",
        a: "Classes run in Gulf Standard Time (GST, UTC+4) from 8:00 AM to 10:00 PM daily. Popular times include 4:00 PM to 8:00 PM on weekdays and morning slots on the Saturday–Sunday weekend.",
      },
      {
        q: "How much do online Quran classes cost in the UAE?",
        a: "Monthly plans start at approximately AED 107/month for weekly classes (~AED 26.75 per lesson). Standard plans with 8 classes per month are approximately AED 180/month, and intensive 16-class plans are AED 290/month.",
      },
      {
        q: "Are classes suitable for expat children in international schools?",
        a: "Yes. Our tutors speak fluent English and adapt teaching styles to suit children attending British, American, CBSE, or IB curriculum schools across the UAE.",
      },
      {
        q: "Is there a free trial?",
        a: "Yes. You can book 3 free 30-minute trial sessions with no credit card required to assess the tutor's teaching methodology and student interaction.",
      },
    ],
    cityLinks: [
      { name: "Dubai Online Quran Classes", url: "/online-quran-classes/dubai" },
      { name: "Abu Dhabi Online Quran Classes", url: "/online-quran-classes/abu-dhabi" },
    ],
  },

  "online-quran-classes-saudi-arabia": {
    slug: "online-quran-classes-saudi-arabia",
    countryName: "Saudi Arabia",
    flag: "🇸🇦",
    timezone: "AST (UTC+3)",
    currencyCode: "SAR",
    currencySymbol: "SAR ",
    h1: "Online Quran Classes in Saudi Arabia — 1-on-1 Noorani Qaida, Hifz & Tajweed",
    metaTitle: "Online Quran Classes in Saudi Arabia | 1-on-1 Noorani Qaida & Hifz — NoorPath",
    metaDescription:
      "1-on-1 online Quran classes in Saudi Arabia in AST (UTC+3). From SAR 109/mo with certified Ijazah tutors. Friday/Saturday weekend & free trial.",
    answerBox:
      "NoorPath provides live 1-on-1 online Quran tuition for children and adults across the Kingdom of Saudi Arabia. Specializing in Noorani Qaida, Tajweed, and Hifz memorization in AST (UTC+3), our classes fit around local prayer times and family life. Book 3 free trial sessions with no credit card required.",
    timingsSlots: [
      {
        slot: "After-school & post-Asr slots",
        time: "Sun–Thu 4:00 PM – 9:30 PM AST",
        description: "Scheduled outside Salah times for Saudi primary and international school students.",
      },
      {
        slot: "Weekend morning recitation & Hifz",
        time: "Fri–Sat 8:00 AM – 1:00 PM AST",
        description: "Quiet Friday and Saturday morning hours for disciplined Hifz and Tajweed rules.",
      },
      {
        slot: "Weekend evening revision",
        time: "Fri–Sat 4:00 PM – 9:00 PM AST",
        description: "Weekend evening slots for expat families and working adults.",
      },
      {
        slot: "Daytime sisters & adults",
        time: "Sun–Thu 8:30 AM – 12:30 PM AST",
        description: "Morning classes for stay-at-home mothers, reverts, and adult Quran readers.",
      },
    ],
    weekendSchedule:
      "In Saudi Arabia, the official weekend is Friday and Saturday, with Sunday being the start of the academic and business week. Class schedules are tailored specifically around Friday prayers, evening family gatherings, and local school calendars across Riyadh, Jeddah, Dammam, and Makkah.",
    pricingTiers: [
      {
        planName: "Starter Plan",
        monthlyPrice: "approx. SAR 109 / month",
        perClassPrice: "approx. SAR 27.25 / class",
        sessions: "4 sessions / month (1x per week)",
        duration: "30 minutes per class",
      },
      {
        planName: "Standard Plan",
        monthlyPrice: "approx. SAR 184 / month",
        perClassPrice: "approx. SAR 23.00 / class",
        sessions: "8 sessions / month (2x per week)",
        duration: "45 minutes per class",
      },
      {
        planName: "Intensive Plan",
        monthlyPrice: "approx. SAR 296 / month",
        perClassPrice: "approx. SAR 18.50 / class",
        sessions: "16 sessions / month (4x per week)",
        duration: "60 minutes per class",
      },
    ],
    pricingNote:
      "Converted from public USD pricing ($29, $49, $79/mo). Sibling discounts: 15% for 2 siblings, 20% for 3, 25% for 4+. 3 free 30-minute trial sessions with no credit card required.",
    testimonials: [],
    hasRealTestimonials: false,
    whyChooseBullets: [
      {
        title: "Female Quran Teachers Available",
        description:
          "Qualified female Quran tutors with Ijazah certificates are available for sisters and daughters across Saudi Arabia.",
      },
      {
        title: "Timezone-Friendly AST (UTC+3) Slots",
        description:
          "Schedules in Arabia Standard Time specifically coordinated to pause during local Salah timings.",
      },
      {
        title: "Arabic-Speaking & Bilingual Tutors",
        description:
          "Native Arabic and bilingual English-Arabic instructors supporting both local Saudi citizens and international expat families.",
      },
      {
        title: "Parent Portal Progress Updates",
        description:
          "Get regular progress updates through the Parent Portal (attendance, homework and teacher reports) and transparent milestone progress tracking via our secure Parent Portal.",
      },
    ],
    faqs: [
      {
        q: "Can I get a female Quran teacher in Saudi Arabia?",
        a: "Yes. Qualified female Quran tutors are available for daughters and adult sisters in Saudi Arabia. Classes are 1-on-1, private, and conducted with complete adherence to Islamic guidelines.",
      },
      {
        q: "What are the class timings for Saudi Arabia?",
        a: "Classes run in Arabia Standard Time (AST, UTC+3) Sunday through Saturday. Lesson slots are scheduled outside of Salah times, typically after Asr and Maghrib on weekdays, and during Friday/Saturday morning windows.",
      },
      {
        q: "How much do online Quran classes cost in Saudi Arabia?",
        a: "Pricing starts from approximately SAR 109/month for weekly lessons (~SAR 27.25 per class). Our twice-a-week Standard plan is approximately SAR 184/month, and our intensive 4-day plan is SAR 296/month.",
      },
      {
        q: "Do you have Arabic-speaking tutors available?",
        a: "Yes. We offer both native Arabic-speaking tutors and fluent bilingual English-Arabic instructors to serve Saudi citizens and expatriate communities.",
      },
      {
        q: "Is there a free trial?",
        a: "Yes. Every family in Saudi Arabia can book 3 free 30-minute trial sessions with no credit card required to experience our teachers' recitation and pedagogy.",
      },
    ],
    cityLinks: [
      { name: "Riyadh Online Quran Classes", url: "/online-quran-classes/riyadh" },
      { name: "Jeddah Online Quran Classes", url: "/online-quran-classes/jeddah" },
    ],
  },

  "online-quran-classes-nigeria": {
    slug: "online-quran-classes-nigeria",
    countryName: "Nigeria",
    flag: "🇳🇬",
    timezone: "WAT (UTC+1)",
    currencyCode: "NGN",
    currencySymbol: "₦",
    h1: "Online Quran Classes in Nigeria — 1-on-1 Noorani Qaida, Hifz & Tajweed",
    metaTitle: "Online Quran Classes in Nigeria | 1-on-1 Noorani Qaida & Hifz — NoorPath",
    metaDescription:
      "Live 1-on-1 online Quran classes in Nigeria in WAT (UTC+1). From ₦44,000/mo. Certified tutors, Noorani Qaida, Tajweed & 3 free trial sessions.",
    answerBox:
      "NoorPath provides live one-on-one online Quran classes for Muslim children, adults, and sisters across Nigeria. Covering Noorani Qaida, Tajweed rules, and Hifz memorization in West Africa Time (WAT, UTC+1), our classes fit around Nigerian school hours. Enroll your child today with 3 free trial sessions.",
    timingsSlots: [
      {
        slot: "After-school weekday slots",
        time: "Mon–Fri 4:00 PM – 8:30 PM WAT",
        description: "Convenient after-school times for children in Lagos, Abuja, Kano, and Port Harcourt.",
      },
      {
        slot: "Weekend morning intensive",
        time: "Sat–Sun 8:00 AM – 1:00 PM WAT",
        description: "Optimal weekend morning slots providing clear internet bandwidth and undisturbed learning.",
      },
      {
        slot: "Weekend evening revision",
        time: "Sat–Sun 3:00 PM – 7:30 PM WAT",
        description: "Dedicated evening sessions for Tajweed practice, Surah memorization, and family review.",
      },
      {
        slot: "Daytime adult & flexible",
        time: "Mon–Fri 9:00 AM – 1:00 PM WAT",
        description: "Quiet morning hours for university students, adult learners, and stay-at-home sisters.",
      },
    ],
    weekendSchedule:
      "In Nigeria, lessons follow the Saturday–Sunday weekend. We provide convenient after-school slots between 4:00 PM and 8:30 PM WAT across Lagos, Abuja, Kano, and Port Harcourt, along with flexible weekend morning times designed to avoid power and internet peak disruptions.",
    pricingTiers: [
      {
        planName: "Starter Plan",
        monthlyPrice: "approx. ₦44,000 / month",
        perClassPrice: "approx. ₦11,000 / class",
        sessions: "4 sessions / month (1x per week)",
        duration: "30 minutes per class",
      },
      {
        planName: "Standard Plan",
        monthlyPrice: "approx. ₦75,000 / month",
        perClassPrice: "approx. ₦9,375 / class",
        sessions: "8 sessions / month (2x per week)",
        duration: "45 minutes per class",
      },
      {
        planName: "Intensive Plan",
        monthlyPrice: "approx. ₦120,000 / month",
        perClassPrice: "approx. ₦7,500 / class",
        sessions: "16 sessions / month (4x per week)",
        duration: "60 minutes per class",
      },
    ],
    pricingNote:
      "Converted from public USD pricing ($29, $49, $79/mo). Sibling discounts: 15% for 2 siblings, 20% for 3, 25% for 4+. 3 free 30-minute trial sessions with no credit card required.",
    testimonials: [],
    hasRealTestimonials: false,
    whyChooseBullets: [
      {
        title: "Female Quran Teachers Available",
        description:
          "Dedicated female Quran teachers available for daughters and adult sisters, ensuring privacy and personal mentorship.",
      },
      {
        title: "Timezone-Friendly WAT (UTC+1) Slots",
        description:
          "Schedules tuned to West Africa Time, fitting seamlessly after Nigerian school dismissals and work hours.",
      },
      {
        title: "English-Medium Curriculum Alignment",
        description:
          "Fluent English instruction ensures children grasp Arabic phonetics, Makharaj, and Tajweed terminology with ease.",
      },
      {
        title: "Parent Portal Progress Updates",
        description:
          "Follow homework and progress updates directly in the Parent Portal between live lessons.",
      },
    ],
    faqs: [
      {
        q: "Can I get a female Quran teacher in Nigeria?",
        a: "Yes. NoorPath has certified female Quran tutors available for daughters and adult sisters across Nigeria. Classes are 1-on-1, interactive, and held in complete privacy.",
      },
      {
        q: "What are the class timings for Nigeria?",
        a: "Classes run daily in West Africa Time (WAT, UTC+1). The most popular slots are weekday after-school hours (4:00 PM – 8:30 PM WAT) and Saturday/Sunday mornings (8:00 AM – 1:00 PM WAT).",
      },
      {
        q: "How much do online Quran classes cost in Nigeria?",
        a: "Monthly tuition starts from approximately ₦44,000/month for 4 weekly 1-on-1 classes (~₦11,000/class). The Standard 8-class plan is approximately ₦75,000/month, and the intensive 16-class plan is ₦120,000/month.",
      },
      {
        q: "Are lessons conducted in English?",
        a: "Yes. All instruction is delivered in clear, fluent English, with step-by-step guidance on Arabic pronunciation, Makharaj, and Tajweed principles.",
      },
      {
        q: "Is there a free trial?",
        a: "Yes. We offer 3 free 30-minute trial sessions with no credit card required so Nigerian parents can assess tutor quality, connection stability, and teaching style.",
      },
    ],
    cityLinks: [
      { name: "Lagos Online Quran Classes", url: "/online-quran-classes/lagos" },
      { name: "Abuja Online Quran Classes", url: "/online-quran-classes/abuja" },
    ],
  },

  "online-quran-classes-qatar": {
    slug: "online-quran-classes-qatar",
    countryName: "Qatar",
    flag: "🇶🇦",
    timezone: "AST (UTC+3)",
    currencyCode: "QAR",
    currencySymbol: "QAR ",
    h1: "Online Quran Classes in Qatar — 1-on-1 Noorani Qaida, Hifz & Tajweed",
    metaTitle: "Online Quran Classes in Qatar | 1-on-1 Noorani Qaida & Hifz — NoorPath",
    metaDescription:
      "1-on-1 online Quran classes in Qatar in AST (UTC+3). From QAR 106/mo with certified tutors. Friday-Saturday weekend timings & free trial.",
    answerBox:
      "NoorPath provides live one-to-one online Quran classes for Muslim children and adults residing in Qatar. Offering Noorani Qaida, Tajweed, and Hifz memorization in AST (UTC+3), lessons fit around international school hours and the Friday–Saturday weekend. Book 3 free trial sessions without credit card details.",
    timingsSlots: [
      {
        slot: "After-school weekday sessions",
        time: "Sun–Thu 3:30 PM – 9:00 PM AST",
        description: "Scheduled to fit after international and private school hours across Doha and Al Rayyan.",
      },
      {
        slot: "Weekend morning Quran slot",
        time: "Fri–Sat 8:30 AM – 1:30 PM AST",
        description: "Convenient Friday and Saturday morning hours during the Qatar public weekend.",
      },
      {
        slot: "Weekend afternoon & evening",
        time: "Fri–Sat 3:30 PM – 8:30 PM AST",
        description: "Dedicated weekend slots for Hifz revision, adult recitation, and Tajweed practice.",
      },
      {
        slot: "Morning adult & homeschool slot",
        time: "Sun–Thu 8:30 AM – 12:30 PM AST",
        description: "Quiet daytime hours for sisters, adult learners, and preschool children.",
      },
    ],
    weekendSchedule:
      "In Qatar, schools and offices observe a Friday–Saturday weekend, with Sunday being the first day of the school week. Our class timetables are organized around Friday Jumu'ah prayers, extracurricular activities in Doha, and term breaks at British, American, and Qatar Foundation schools.",
    pricingTiers: [
      {
        planName: "Starter Plan",
        monthlyPrice: "approx. QAR 106 / month",
        perClassPrice: "approx. QAR 26.50 / class",
        sessions: "4 sessions / month (1x per week)",
        duration: "30 minutes per class",
      },
      {
        planName: "Standard Plan",
        monthlyPrice: "approx. QAR 178 / month",
        perClassPrice: "approx. QAR 22.25 / class",
        sessions: "8 sessions / month (2x per week)",
        duration: "45 minutes per class",
      },
      {
        planName: "Intensive Plan",
        monthlyPrice: "approx. QAR 288 / month",
        perClassPrice: "approx. QAR 18.00 / class",
        sessions: "16 sessions / month (4x per week)",
        duration: "60 minutes per class",
      },
    ],
    pricingNote:
      "Converted from public USD pricing ($29, $49, $79/mo). Sibling discounts: 15% for 2 siblings, 20% for 3, 25% for 4+. 3 free 30-minute trial sessions with no credit card required.",
    testimonials: [],
    hasRealTestimonials: false,
    whyChooseBullets: [
      {
        title: "Female Quran Teachers Available",
        description:
          "Certified female Quran teachers are available for daughters and adult sisters in Doha, providing modest 1-on-1 guidance.",
      },
      {
        title: "Timezone-Friendly AST (UTC+3) Slots",
        description:
          "Schedules tuned to Qatar local time, aligning with private school dismissal times and Salah schedules.",
      },
      {
        title: "International School Curriculum Alignment",
        description:
          "Classes complement the busy schedules of students attending British, American, IB, and bilingual schools in Qatar.",
      },
      {
        title: "Parent Portal Progress Updates",
        description:
          "Parents can review past classes, supervise recitation drills, and check tutor feedback via our dedicated portal.",
      },
    ],
    faqs: [
      {
        q: "Can I get a female Quran teacher in Qatar?",
        a: "Yes. NoorPath provides qualified female Quran teachers for sisters and young daughters across Qatar. All lessons are conducted 1-on-1 in a safe, interactive online classroom.",
      },
      {
        q: "What are the class timings for Qatar?",
        a: "Classes run throughout the week in Arabia Standard Time (AST, UTC+3). Popular slots include Sunday through Thursday after school (3:30 PM – 8:30 PM) and Friday/Saturday mornings.",
      },
      {
        q: "How much do online Quran classes cost in Qatar?",
        a: "Monthly plans start at approximately QAR 106/month for weekly lessons (~QAR 26.50 per class). Standard plans with 8 classes per month are QAR 178/month, and intensive 16-class packages are QAR 288/month.",
      },
      {
        q: "Do class schedules accommodate the Friday-Saturday weekend?",
        a: "Yes. Our schedules fully respect Qatar's Friday–Saturday weekend, allowing families to take classes on non-working days or focus entirely on weekday evenings.",
      },
      {
        q: "Is there a free trial?",
        a: "Yes. Families in Qatar can attend 3 free 30-minute trial sessions with no credit card required to experience the lesson format and meet their matched tutor.",
      },
    ],
    cityLinks: [
      { name: "Doha Online Quran Classes", url: "/online-quran-classes/doha" },
      { name: "Qatar Online Quran Classes Hub", url: "/locations/online-quran-classes-qatar" },
    ],
  },

  "online-quran-classes-canada": {
    slug: "online-quran-classes-canada",
    countryName: "Canada",
    flag: "🇨🇦",
    timezone: "EST / PST",
    currencyCode: "CAD",
    currencySymbol: "CA$",
    h1: "Online Quran Classes in Canada — 1-on-1 Noorani Qaida, Hifz & Tajweed",
    metaTitle: "Online Quran Classes in Canada | 1-on-1 Noorani Qaida & Hifz — NoorPath",
    metaDescription:
      "Live 1-on-1 online Quran classes in Canada in EST/PST. From CA$40/mo with certified tutors. Winter-friendly after-school slots & free trial.",
    answerBox:
      "NoorPath offers live 1-on-1 online Quran classes for Muslim children, adults, and families across Canada. Covering Noorani Qaida, Tajweed, and Hifz across Eastern and Pacific time zones, our lessons eliminate winter driving to weekend madrasas. Book 3 free 30-minute trial sessions with no credit card required.",
    timingsSlots: [
      {
        slot: "After-school evening slots",
        time: "Mon–Fri 4:00 PM – 9:00 PM EST / PST",
        description: "Scheduled to fit after Canadian school hours across Ontario, Quebec, Alberta, and British Columbia.",
      },
      {
        slot: "Weekend morning sessions",
        time: "Sat–Sun 9:00 AM – 2:00 PM EST / PST",
        description: "Quiet weekend morning times ideal for Noorani Qaida beginners and memorisation focus.",
      },
      {
        slot: "Weekend afternoon & evening",
        time: "Sat–Sun 3:00 PM – 8:00 PM EST / PST",
        description: "Flexible weekend hours for Tajweed revision and older students with extracurriculars.",
      },
      {
        slot: "Daytime homeschool & adult slot",
        time: "Mon–Fri 9:00 AM – 1:00 PM EST / PST",
        description: "Convenient daytime hours for adult learners, reverts, and home educators.",
      },
    ],
    weekendSchedule:
      "In Canada, classes observe the standard Saturday–Sunday weekend. Weekday slots run after school hours in Eastern and Pacific time zones. Remote online learning eliminates snowy winter commutes while maintaining a consistent Quran routine throughout the Canadian academic year.",
    pricingTiers: [
      {
        planName: "Starter Plan",
        monthlyPrice: "approx. CA$40 / month",
        perClassPrice: "approx. CA$10.00 / class",
        sessions: "4 sessions / month (1x per week)",
        duration: "30 minutes per class",
      },
      {
        planName: "Standard Plan",
        monthlyPrice: "approx. CA$67 / month",
        perClassPrice: "approx. CA$8.38 / class",
        sessions: "8 sessions / month (2x per week)",
        duration: "45 minutes per class",
      },
      {
        planName: "Intensive Plan",
        monthlyPrice: "approx. CA$109 / month",
        perClassPrice: "approx. CA$6.81 / class",
        sessions: "16 sessions / month (4x per week)",
        duration: "60 minutes per class",
      },
    ],
    pricingNote:
      "Converted from public USD pricing ($29, $49, $79/mo). Sibling discounts: 15% for 2 siblings, 20% for 3, 25% for 4+. 3 free 30-minute trial sessions with no credit card required.",
    testimonials: [],
    hasRealTestimonials: false,
    whyChooseBullets: [
      {
        title: "Female Quran Teachers Available",
        description:
          "Certified female Quran teachers are available for sisters and daughters across Canadian provinces, ensuring privacy and rapport.",
      },
      {
        title: "Multi-Timezone Canadian Scheduling",
        description:
          "Schedules accommodate Eastern (ET), Central (CT), Mountain (MT), and Pacific (PT) time zones with no winter travel needed.",
      },
      {
        title: "Canadian School Calendar Alignment",
        description:
          "Lesson timetables adapt around provincial school terms, march break, exam periods, and daylight saving shifts.",
      },
      {
        title: "Parent Portal Progress Updates",
        description:
          "Practice Makharaj exercises, get regular progress updates through the Parent Portal (attendance, homework and teacher reports), and track your child's Noorani Qaida and Hifz milestones from home.",
      },
    ],
    faqs: [
      {
        q: "Can I get a female Quran teacher in Canada?",
        a: "Yes. NoorPath has certified female Quran teachers available for sisters and young girls across Ontario, British Columbia, Alberta, and Quebec. All classes are private 1-on-1 sessions.",
      },
      {
        q: "What are the class timings for Canada?",
        a: "Classes are available across Canadian time zones (ET, CT, MT, PT). Most families choose weekday slots between 4:00 PM and 8:30 PM local time, or weekend morning slots between 9:00 AM and 1:00 PM.",
      },
      {
        q: "How much do online Quran classes cost in Canada?",
        a: "Plans start at approximately CA$40/month for weekly classes (~CA$10.00 per class). The Standard plan (twice a week) is approximately CA$67/month, and the intensive 4-day plan is CA$109/month.",
      },
      {
        q: "Do you accommodate different Canadian timezones like ET and PT?",
        a: "Yes. Whether you reside in Toronto (ET), Calgary (MT), or Vancouver (PT), our tutor matching accounts for your provincial timezone and daylight saving changes.",
      },
      {
        q: "Is there a free trial?",
        a: "Yes. Canadian families can book 3 free 30-minute trial sessions with no credit card required to evaluate tutor rapport, audio quality, and learning plans.",
      },
    ],
    cityLinks: [
      { name: "Toronto Online Quran Classes", url: "/online-quran-classes/toronto" },
      { name: "Canada Online Quran Classes Hub", url: "/locations/online-quran-classes-canada" },
    ],
  },
};

export function isRebuiltCountry(slug: string): slug is RebuiltCountrySlug {
  return (REBUILT_COUNTRY_SLUGS as readonly string[]).includes(slug);
}

export function getCountryLandingPageData(slug: string): CountryLandingPageData | undefined {
  if (isRebuiltCountry(slug)) {
    return countryLandingPages[slug];
  }
  return undefined;
}
