import type { CountryGuideContent } from "@/data/countryGuideTypes";

/**
 * Country guides for Italy, Belgium, Switzerland, and Oman.
 * Remote 1-on-1 Quran classes — structured direct answers for parents & LLM citation.
 */
export const countryGuidesEuropeOman: Record<string, CountryGuideContent> = {
  "online-quran-classes-italy": {
    country: "Italy",
    title: "Online Quran Classes in Italy: Muslim Family & Parent Guide",
    description:
      "Guide for Muslim families in Italy seeking live online Quran classes — CET/CEST local timings (Rome, Milan, Turin), certified tutors, female teacher requests, and a free trial path.",
    reviewedDate: "28 September 2026",
    sections: [
      {
        id: "italy-fit",
        heading: "Are online Quran classes suitable for Muslim families in Italy?",
        directAnswer:
          "Yes, particularly for families seeking live 1-on-1 lessons tailored to Italian school schedules across Rome, Milan, Turin, and regional towns where local madrasah access may be limited.",
        paragraphs: [
          "Muslim families in Italy — including Pakistani, Moroccan, Egyptian, Bangladeshi, and Arab diaspora communities — often face significant commuting times to attend local Islamic cultural centres or weekend madrasahs in metropolitan areas like Milan, Rome, Brescia, or Turin. In smaller towns, structured Islamic educational options are frequently unavailable.",
          "NoorPath provides live remote 1-on-1 tuition directly from home, eliminating transport barriers while offering personalised Tajweed and Noorani Qaida instruction under certified native and fluent tutors.",
        ],
        bullets: [
          "1-on-1 live lessons on the Italian clock (CET in winter, CEST in summer).",
          "Dedicated female tutor requests available for young girls and adult sisters.",
          "Personalised pace covering Noorani Qaida, Tajweed, Hifz, and daily Islamic duas.",
          "Free 30-minute trial class with no credit card requirement.",
        ],
      },
      {
        id: "italy-schedule",
        heading: "How do class timings work for families in Italy?",
        directAnswer:
          "Lessons are booked in CET (UTC+1) / CEST (UTC+2). Families typically select weekday slots between 17:00 and 20:30 or weekend morning sessions.",
        paragraphs: [
          "Italian primary and secondary schools often dismiss students between 14:00 and 16:30. An after-school window from 17:00 onwards provides ample time for students to finish Italian homework and rest before starting Quran class.",
          "Weekend slots on Saturday and Sunday mornings are also widely requested by families managing sports or extracurricular activities during weekdays.",
        ],
        table: {
          headers: ["Family schedule need", "Recommended lesson window"],
          rows: [
            ["Weekday after-school", "17:00 – 20:30 CET / CEST"],
            ["Weekend morning", "09:00 – 13:00 CET / CEST"],
            ["Adults / working professionals", "20:00 – 22:00 CET / CEST"],
          ],
        },
      },
      {
        id: "italy-courses",
        heading: "Which courses are most popular among Italian families?",
        directAnswer:
          "Noorani Qaida for young beginners, followed by Tajweed-focused Quran reading and Hifz programs.",
        paragraphs: [
          "For children growing up in Italy whose primary languages are Italian and their heritage mother tongue, mastering Arabic pronunciation (Makharij) requires patient, one-on-one articulation practice. Noorani Qaida establishes this foundational fluency before advancing to the Mushaf.",
        ],
        relatedLinks: [
          { href: "/courses/noorani-qaida-online", label: "Online Noorani Qaida Course" },
          { href: "/learn-tajweed-online", label: "Tajweed Classes Online" },
          { href: "/female-quran-teacher-online", label: "Female Quran Teacher Requests" },
        ],
      },
    ],
  },

  "online-quran-classes-belgium": {
    country: "Belgium",
    title: "Online Quran Classes in Belgium: Parent & Expat Guide",
    description:
      "Comprehensive guide for Muslim families in Belgium (Brussels, Antwerp, Ghent, Liège) choosing live online Quran tuition — CET/CEST scheduling, multilingual support, and a free trial.",
    reviewedDate: "28 September 2026",
    sections: [
      {
        id: "belgium-fit",
        heading: "Why do families in Belgium choose online Quran classes?",
        directAnswer:
          "Families choose online Quran classes to secure high-quality 1-on-1 tutoring that fits around demanding Belgian school hours in Brussels, Antwerp, Ghent, and Wallonia without weekend travel stress.",
        paragraphs: [
          "With substantial Muslim communities across Brussels, Flanders, and Wallonia, demand for quality Quran teachers often exceeds weekend madrasah capacity. Large class sizes in community centres can mean a child recites for only 3–5 minutes per session.",
          "With NoorPath’s 1-on-1 live format, the student has 100% of the certified teacher’s attention for the entire 30 or 45-minute lesson, accelerating pronunciation correction and memorisation.",
        ],
        bullets: [
          "100% individual attention throughout every session.",
          "Scheduling aligned with Belgian school timetables (CET/CEST).",
          "English, Arabic, and Urdu-speaking certified tutors.",
          "Female Quran tutors available for sisters and children.",
        ],
      },
      {
        id: "belgium-schedule",
        heading: "When are classes scheduled in Belgium?",
        directAnswer:
          "Slots are coordinated in CET / CEST. Belgian families typically prefer 17:30 to 20:30 CET on weekdays or Saturday/Sunday mornings.",
        paragraphs: [
          "Because Wednesday afternoons are typically half-days in Belgian primary schools, Wednesday afternoon slots between 14:00 and 17:00 CET are especially popular and convenient for families with younger learners.",
        ],
        relatedLinks: [
          { href: "/courses/noorani-qaida-online", label: "Noorani Qaida for Kids" },
          { href: "/online-quran-classes-for-kids", label: "Quran Classes for Children" },
          { href: "/pricing", label: "Affordable Monthly Tuition Plans" },
        ],
      },
    ],
  },

  "online-quran-classes-switzerland": {
    country: "Switzerland",
    title: "Online Quran Classes in Switzerland: Family Guide (Zurich, Geneva, Basel)",
    description:
      "Live 1-on-1 online Quran classes for Muslim families in Switzerland — Zurich, Geneva, Basel, Lausanne, Bern. CET/CEST flexible scheduling, certified teachers, and free 30-min trial.",
    reviewedDate: "28 September 2026",
    sections: [
      {
        id: "switzerland-fit",
        heading: "Are online Quran classes available across Swiss cantons?",
        directAnswer:
          "Yes, NoorPath serves families across German, French, and Italian cantons including Zurich, Geneva, Basel, Lausanne, Bern, and Lucerne with certified 1-on-1 online tutors.",
        paragraphs: [
          "Muslim families and international expats living in Switzerland often find few English- or bilingual-friendly Quran schools near their cantons. Online one-to-one tutoring brings qualified, vetted teachers directly into the home via Zoom or Google Meet.",
          "Lessons are conducted in English, Arabic, or Urdu, ensuring children understand Tajweed terminology clearly while learning.",
        ],
        bullets: [
          "Individual lessons from the comfort of home in Switzerland.",
          "Tutors verified for safeguarding, character, and Tajweed Ijazah.",
          "Flexible rescheduling options for busy Swiss academic calendars.",
          "No credit card required for the 30-minute evaluation session.",
        ],
      },
      {
        id: "switzerland-schedule",
        heading: "What are the recommended Swiss class times?",
        directAnswer:
          "Classes run on Swiss local time (CET / CEST). Weekday late afternoons (16:30–20:00) and weekend mornings (09:00–12:30) are prime slots.",
        paragraphs: [
          "Working parents appreciate the punctuality and reliability of remote tutoring, as lessons start promptly without commuting delays or parking challenges in Swiss cities.",
        ],
        relatedLinks: [
          { href: "/courses", label: "Complete Course Catalog" },
          { href: "/our-tutors", label: "Meet Our Certified Quran Tutors" },
          { href: "/safeguarding", label: "Child Safeguarding Standards" },
        ],
      },
    ],
  },

  "online-quran-classes-oman": {
    country: "Oman",
    title: "Online Quran Classes in Oman: Muscat, Salalah & Expat Guide",
    description:
      "Live 1-on-1 online Quran classes in the Sultanate of Oman (Muscat, Salalah, Sohar). Gulf Standard Time (GST UTC+4) scheduling, certified native & English-speaking tutors, free trial.",
    reviewedDate: "28 September 2026",
    sections: [
      {
        id: "oman-fit",
        heading: "How do online Quran classes work for families in Oman?",
        directAnswer:
          "Classes operate on Gulf Standard Time (GST, UTC+4) with live 1-on-1 instruction for children, adults, and expat families across Muscat, Salalah, Sohar, and Nizwa.",
        paragraphs: [
          "Both Omani residents and expatriate families (attending Indian, British, or American international schools in Muscat) frequently seek structured 1-on-1 Quran tuition that fits around evening family routines and school commitments.",
          "Because Oman does not observe daylight saving time, your lesson slot remains steady year-round on Gulf Standard Time.",
        ],
        bullets: [
          "Year-round GST (UTC+4) fixed class schedule — no seasonal clock changes.",
          "1-on-1 attention for Noorani Qaida, Tajweed rules, and Quran memorisation.",
          "Female Quran tutors available upon request.",
          "Free 30-minute live assessment lesson.",
        ],
      },
      {
        id: "oman-schedule",
        heading: "What times work best for students in Oman?",
        directAnswer:
          "Weekday late afternoons and evenings (16:00 to 21:00 GST) and weekend slots (Friday/Saturday) are most requested.",
        paragraphs: [
          "With the standard Omani weekend on Friday and Saturday, families can schedule lessons on weekday evenings or during weekend mornings before family gatherings.",
        ],
        relatedLinks: [
          { href: "/courses/noorani-qaida-online", label: "Noorani Qaida for Kids" },
          { href: "/hifz-quran-online", label: "Hifz Program Online" },
          { href: "/locations/online-quran-classes-uae", label: "UAE Hub (Same GST Timezone)" },
        ],
      },
    ],
  },
};
