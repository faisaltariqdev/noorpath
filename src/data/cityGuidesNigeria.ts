import type { CityGuideContent } from "@/data/countryGuideTypes";

/** Unique, people-first city guides for Nigeria. Online-only — no campus or visit claims. */
export const cityGuidesNigeria: Record<string, CityGuideContent> = {
  lagos: {
    city: "Lagos",
    country: "Nigeria",
    title: "Online Quran Classes in Lagos: Lekki, VI, Ikoyi & Ikeja Family Guide",
    description:
      "Live 1-to-1 online Quran classes for Lagos families — WAT after-school planning for Lekki, Victoria Island, Ikoyi and Ikeja GRA, power and traffic reality, female tutor requests, USD/NGN pricing, and a free trial. Online only — no Lagos campus.",
    reviewedDate: "30 August 2026",
    sections: [
      {
        id: "lagos-how-online-works",
        heading: "How do online Quran classes work for a Lagos household?",
        directAnswer:
          "Lessons are live video from your home at agreed WAT times. NoorPath is an online academy only: it has no Lagos branch, classroom, or home-visit service. Naming Lekki, Victoria Island, Ikoyi or Ikeja describes where your family lives for planning — not a local campus.",
        paragraphs: [
          "Lagos school runs, Third Mainland or Lekki–Epe traffic, and shared devices often make a second commute for Quran class hard to keep. A fixed weekly video lesson can protect recitation time without claiming a neighbourhood centre.",
          "Before you book, write who will learn, their current reading level (letters, fluent reading, Tajweed, or Hifz), and a WAT window that survives a late school pickup. Share generator or network notes honestly so matching does not pick an hour that routinely fails.",
        ],
        bullets: [
          "Remote video lessons only — no Lagos office or home visits",
          "WAT preferences confirmed after tutor matching",
          "Name your area (Lekki, VI, Ikoyi, Ikeja GRA, Magodo, and others) so timing notes are clearer",
          "Free 30-minute trial with no credit card before ongoing payment",
        ],
      },
      {
        id: "lagos-areas",
        heading: "Which Lagos areas is this guide written for?",
        directAnswer:
          "Households across the Lagos metro can request the same remote service. Island and GRA families often have stronger evening connectivity; mainland and high-traffic corridors often need a later or weekend WAT slot.",
        paragraphs: [
          "Families in Lekki Phase 1, Oniru, Victoria Island, Ikoyi, Banana Island, Ikeja GRA, Magodo and VGC typically plan around after-school clubs, office returns and estate generators. The lesson still happens online — these names help you describe a realistic clock time, not a pickup point.",
          "If you live farther along the Lekki corridor or on the mainland with heavier traffic, a Saturday morning WAT window is often more reliable than a 4:00 pm weekday slot.",
        ],
        table: {
          headers: ["Lagos planning context", "What to share when booking"],
          rows: [
            ["Lekki / VI / Ikoyi", "After-school WAT evening and typical generator hours"],
            ["Ikeja GRA / Magodo", "School-finish time and whether one device is shared"],
            ["Long commute days", "Prefer a later evening or weekend morning"],
            ["Unstable evening power", "Ask matching to favour a more reliable hour"],
          ],
        },
      },
      {
        id: "lagos-schedule",
        heading: "Which WAT times work after school in Lagos?",
        directAnswer:
          "Lagos uses WAT (UTC+1) with no daylight-saving change. Many families request weekday evenings or weekend mornings. Exact recurring times are confirmed after tutor matching — not a fixed Lagos timetable.",
        paragraphs: [
          "Add a buffer after school for traffic, iftar in Ramadan, and setting up audio. Confirm the written local clock time so calendar invites match Lagos, not the tutor’s country.",
        ],
        relatedLinks: [
          { href: "/locations/online-quran-classes-nigeria", label: "Nigeria online Quran classes hub" },
        ],
      },
      {
        id: "lagos-course",
        heading: "Which course should a Lagos learner choose?",
        directAnswer:
          "Place by skill — Noorani Qaida, Quran reading, Tajweed or Hifz — not by age or estate name.",
        paragraphs: [
          "Describe prior madrasah or school Quran honestly. Beginners usually start with Qaida. Hifz needs fluent reading plus a revision plan — not speed alone.",
        ],
        relatedLinks: [
          { href: "/online-quran-classes-for-kids", label: "Online Quran classes for kids" },
          { href: "/hifz-quran-online", label: "Hifz Quran online" },
          { href: "/learn-tajweed-online", label: "Learn Tajweed online" },
        ],
      },
      {
        id: "lagos-tutor",
        heading: "Can Lagos families request a female Quran teacher?",
        directAnswer:
          "Yes. Request a female tutor for daughters and sisters. Do not assume the tutor lives in Lagos — matching is remote. Female-tutor and WAT availability are confirmed after matching.",
        paragraphs: [
          "Use the trial to check audio, punctuality and whether the learner participates. Parents may observe young children’s sessions.",
        ],
        relatedLinks: [{ href: "/female-quran-teacher-online", label: "Female Quran teacher online" }],
      },
      {
        id: "lagos-pricing",
        heading: "How should Lagos families read USD prices in naira?",
        directAnswer:
          "Plans are published and charged in USD. Convert to NGN with your bank or card rate. NoorPath does not publish a fixed naira price list.",
        paragraphs: [
          "Compare session length and classes per month on the pricing page. Card foreign-transaction fees can change the naira amount on your statement. Budget a frequency you can keep through exam season and power cuts — not only the lowest headline.",
        ],
        relatedLinks: [{ href: "/pricing", label: "Published USD pricing" }],
      },
      {
        id: "lagos-start",
        heading: "How should a Lagos family start this week?",
        directAnswer:
          "Note your area, preferred WAT windows, connectivity constraints and course goal, then request a free trial.",
        paragraphs: [
          "Write “Lagos — Lekki / VI / Ikeja” (or your area), learner age and level, and female-tutor preference if needed. After matching, protect a short daily home echo between live lessons.",
        ],
        relatedLinks: [
          { href: "/free-quran-classes-online", label: "Free trial details" },
          { href: "/online-quran-classes/abuja", label: "Online Quran classes in Abuja" },
          { href: "/online-quran-classes/port-harcourt", label: "Online Quran classes in Port Harcourt" },
        ],
      },
    ],
  },

  abuja: {
    city: "Abuja",
    country: "Nigeria",
    title: "Online Quran Classes in Abuja: Maitama, Asokoro & Wuse Family Guide",
    description:
      "Live 1-to-1 online Quran classes for Abuja families — WAT scheduling for Maitama, Asokoro, Wuse 2 and Gwarinpa, school-week routines, female tutor requests, USD/NGN pricing, and a free trial. Online only — no Abuja campus.",
    reviewedDate: "30 August 2026",
    sections: [
      {
        id: "abuja-how-online-works",
        heading: "How do online Quran classes work for an Abuja household?",
        directAnswer:
          "Lessons take place by video from your home. NoorPath operates online only: no Abuja branch, classroom, or home-visit service. District names help planning — they are not pickup points.",
        paragraphs: [
          "The capital’s spread (Maitama, Asokoro, Wuse, Jabi, Guzape, Gwarinpa) can mean long school and office days. A recurring WAT video slot can keep Quran listening without another cross-city journey.",
          "Government and embassy-area households often have more predictable evening power than some other cities — still confirm the hour that is actually reliable in your home, not the hour that looks convenient on paper.",
        ],
        bullets: [
          "Remote video lessons only",
          "No Abuja office or home visits",
          "WAT preferences subject to matching",
          "Free trial before ongoing payment",
        ],
      },
      {
        id: "abuja-areas",
        heading: "Which Abuja districts is this guide written for?",
        directAnswer:
          "Families across the FCT can request the same remote service. Maitama, Asokoro and Wuse 2 households often book weekday evenings; Gwarinpa and growing districts often need later or weekend WAT windows.",
        paragraphs: [
          "Share your district so after-school timing is clearer. Online delivery does not place a tutor in your estate.",
        ],
        table: {
          headers: ["Abuja planning context", "What to confirm"],
          rows: [
            ["Maitama / Asokoro", "Weekday WAT evening vs official work hours"],
            ["Wuse 2 / Jabi", "School-finish buffer and device sharing"],
            ["Gwarinpa / Guzape", "Whether weekend morning is more reliable"],
            ["Power / internet", "The hour that actually stays online in your home"],
          ],
        },
      },
      {
        id: "abuja-schedule",
        heading: "Which WAT scheduling checks matter in Abuja?",
        directAnswer:
          "Confirm the written WAT clock time and whether after-school or weekend windows fit more reliably than a rushed weekday slot.",
        paragraphs: [
          "Abuja does not use daylight saving. Still reconfirm calendar invites if anyone travels. Exact availability is confirmed after tutor matching.",
        ],
      },
      {
        id: "abuja-course",
        heading: "Which course should an Abuja learner choose?",
        directAnswer:
          "Choose from present skill — Qaida, reading, Tajweed or Hifz — after assessment, not from a district label.",
        paragraphs: [
          "Between live lessons, families may use free Qaida practice tools as soft support. Live teachers remain the path for uncertain sounds.",
        ],
        relatedLinks: [
          { href: "/online-quran-classes-for-kids", label: "Kids Quran classes" },
          { href: "/learn-tajweed-online", label: "Tajweed online" },
        ],
      },
      {
        id: "abuja-tutor",
        heading: "How should Abuja families evaluate tutor matching?",
        directAnswer:
          "State learner level, language preference and female-tutor preference if needed. Do not assume the tutor lives in Abuja.",
        paragraphs: [
          "Use early sessions to observe punctuality, audio clarity and the learner’s willingness to participate. Request a female tutor for daughters when that is your household preference.",
        ],
        relatedLinks: [{ href: "/female-quran-teacher-online", label: "Female Quran teacher online" }],
      },
      {
        id: "abuja-pricing",
        heading: "How should Abuja families budget USD fees in NGN?",
        directAnswer:
          "Plans are charged in USD. Convert with your bank rate. There is no official naira price list.",
        paragraphs: [
          "Compare published plans on the pricing page. Choose a weekly frequency you can keep when work and school calendars get busy.",
        ],
        relatedLinks: [{ href: "/pricing", label: "Published USD pricing" }],
      },
      {
        id: "abuja-start",
        heading: "How should an Abuja family start this week?",
        directAnswer:
          "Note district, preferred WAT windows and course goal, then request a free trial with no credit card.",
        paragraphs: [
          "Country-level Nigeria guidance remains on the Nigeria location hub.",
        ],
        relatedLinks: [
          { href: "/locations/online-quran-classes-nigeria", label: "Nigeria online Quran classes hub" },
          { href: "/online-quran-classes/lagos", label: "Online Quran classes in Lagos" },
          { href: "/free-quran-classes-online", label: "Free trial details" },
        ],
      },
    ],
  },

  "port-harcourt": {
    city: "Port Harcourt",
    country: "Nigeria",
    title: "Online Quran Classes in Port Harcourt: GRA & Family WAT Guide",
    description:
      "Live 1-to-1 online Quran classes for Port Harcourt families — WAT after-school planning for Old GRA and New GRA, oil-industry work hours, female tutor requests, USD/NGN pricing, and a free trial. Online only — no Port Harcourt campus.",
    reviewedDate: "30 August 2026",
    sections: [
      {
        id: "ph-how-online-works",
        heading: "How do online Quran classes work for a Port Harcourt household?",
        directAnswer:
          "Lessons are live video from home at agreed WAT times. NoorPath teaches online only — no Port Harcourt branch, classroom, or home-visit service.",
        paragraphs: [
          "Port Harcourt families — including Old GRA, New GRA and Peter Odili Road households — often balance school with shift or office hours in the oil-and-gas economy. A recurring remote lesson can keep Quran recitation without another city journey.",
          "Name your area when booking so evening vs weekend WAT preferences are realistic. Area names describe your home routine, not a local pickup point.",
        ],
        bullets: [
          "Remote video lessons only",
          "No Port Harcourt campus or home visits",
          "WAT matching after your request",
          "Free 30-minute trial — no credit card",
        ],
      },
      {
        id: "ph-areas",
        heading: "Which Port Harcourt areas is this guide written for?",
        directAnswer:
          "Families across Rivers State’s capital region can request the same remote service. GRA households often prefer weekday evenings; households with rotating work hours often need weekend WAT slots.",
        paragraphs: [
          "Old GRA and New GRA are planning labels for traffic, school finish and generator hours — not evidence of a NoorPath office.",
        ],
        table: {
          headers: ["Planning context", "What to share"],
          rows: [
            ["Old GRA / New GRA", "Weekday WAT evening and power reliability"],
            ["Shift or field work", "Weekend morning may be more stable"],
            ["Shared device", "Separate sibling slots if two learners"],
            ["Connectivity", "The hour that actually stays online"],
          ],
        },
      },
      {
        id: "ph-schedule",
        heading: "Which WAT times work in Port Harcourt?",
        directAnswer:
          "Many families request after-school WAT evenings or Saturday mornings. Exact times are confirmed after tutor matching — not a fixed city timetable.",
        paragraphs: [
          "WAT has no daylight-saving change. Still write the local clock time on the booking so invites match Port Harcourt.",
        ],
      },
      {
        id: "ph-course",
        heading: "Which course path fits Port Harcourt learners?",
        directAnswer:
          "Beginners start with Noorani Qaida. Readers continue fluency, Tajweed or Hifz after assessment.",
        paragraphs: [
          "Adult beginners who already know the alphabet but cannot yet read continuously usually need Qaida joining work before Tajweed rules.",
        ],
        relatedLinks: [
          { href: "/online-quran-classes-for-kids", label: "Kids Quran classes" },
          { href: "/hifz-quran-online", label: "Hifz online" },
        ],
      },
      {
        id: "ph-tutor",
        heading: "Can we request a female Quran teacher in Port Harcourt?",
        directAnswer:
          "Yes. State a female-tutor preference when you book. Matching is remote — the tutor does not need to live in Rivers State.",
        paragraphs: [
          "Use the trial to confirm audio, rapport and a realistic WAT slot before ongoing payment.",
        ],
        relatedLinks: [{ href: "/female-quran-teacher-online", label: "Female Quran teacher online" }],
      },
      {
        id: "ph-pricing",
        heading: "How should Port Harcourt families budget USD in NGN?",
        directAnswer:
          "Plans are published in USD. Convert with your bank or card rate. There is no fixed naira list.",
        paragraphs: [
          "Oil-industry households sometimes prefer Standard (more weekly minutes). Choose a plan you can keep through travel weeks — skip frequency you cannot protect.",
        ],
        relatedLinks: [{ href: "/pricing", label: "Published USD pricing" }],
      },
      {
        id: "ph-start",
        heading: "How should a Port Harcourt family start this week?",
        directAnswer:
          "Share city/area, WAT window, learner level and tutor preference, then book a free trial.",
        paragraphs: [
          "After matching, keep the first month focused on habit and placement — not an overloaded Hifz promise.",
        ],
        relatedLinks: [
          { href: "/locations/online-quran-classes-nigeria", label: "Nigeria online Quran classes hub" },
          { href: "/online-quran-classes/lagos", label: "Lagos online Quran classes" },
          { href: "/free-quran-classes-online", label: "Free trial" },
        ],
      },
    ],
  },

  kano: {
    city: "Kano",
    country: "Nigeria",
    title: "Online Quran Classes in Kano: Live 1-to-1 Family Guide",
    description:
      "Live 1-to-1 online Quran classes for Kano families — WAT after-school planning, Qaida to Hifz, female tutor requests, USD/NGN pricing, and a free trial. Online only — no Kano campus.",
    reviewedDate: "30 August 2026",
    sections: [
      {
        id: "kano-how-online-works",
        heading: "How do online Quran classes work for a Kano household?",
        directAnswer:
          "Lessons are live video from home. NoorPath is online only — no Kano branch, classroom, or home-visit service.",
        paragraphs: [
          "Kano has a deep Quran-learning culture. Families still request one-to-one online tutoring when they want a private female tutor, a fixed WAT slot, or extra correction alongside local study. A city page is not a campus claim.",
        ],
        bullets: [
          "Remote video lessons only",
          "No Kano office or home visits",
          "WAT preferences confirmed after matching",
          "Free trial before ongoing payment",
        ],
      },
      {
        id: "kano-schedule",
        heading: "Which WAT times work after school in Kano?",
        directAnswer:
          "Many families request weekday evenings or weekend mornings in WAT. Exact times depend on tutor matching.",
        paragraphs: [
          "Share school finish times, Tarawih in Ramadan, and power/internet constraints so the proposed hour is realistic.",
        ],
      },
      {
        id: "kano-course",
        heading: "Which course should a Kano learner choose?",
        directAnswer:
          "Place by current skill. Prior madrasah exposure does not always mean fluent Tajweed — an honest trial assessment prevents repeating or skipping the wrong stage.",
        paragraphs: [
          "Qaida for unstable letters; reading fluency next; Tajweed when continuous reading exists; Hifz only with a revision plan.",
        ],
        relatedLinks: [
          { href: "/learn-tajweed-online", label: "Tajweed online" },
          { href: "/hifz-quran-online", label: "Hifz online" },
        ],
      },
      {
        id: "kano-tutor",
        heading: "Can Kano families request a female Quran teacher?",
        directAnswer:
          "Yes. Request a female tutor for sisters and daughters. Availability is confirmed after matching.",
        paragraphs: [
          "Do not assume the tutor lives in Kano. Evaluate early lessons for correction quality and the learner’s comfort.",
        ],
        relatedLinks: [{ href: "/female-quran-teacher-online", label: "Female Quran teacher online" }],
      },
      {
        id: "kano-pricing",
        heading: "How should Kano families read USD prices in NGN?",
        directAnswer:
          "Charges are in USD. Convert with your bank rate. NoorPath does not publish a fixed naira price list.",
        paragraphs: [
          "Starter frequency suits many households. Choose a plan you can keep through exam season.",
        ],
        relatedLinks: [{ href: "/pricing", label: "Published USD pricing" }],
      },
      {
        id: "kano-start",
        heading: "How should a Kano family start this week?",
        directAnswer:
          "Note preferred WAT windows, learner level and female-tutor preference, then request a free trial.",
        paragraphs: [
          "Country-level Nigeria guidance remains on the Nigeria location hub.",
        ],
        relatedLinks: [
          { href: "/locations/online-quran-classes-nigeria", label: "Nigeria online Quran classes hub" },
          { href: "/online-quran-classes/lagos", label: "Lagos online Quran classes" },
          { href: "/free-quran-classes-online", label: "Free trial" },
        ],
      },
    ],
  },
};
