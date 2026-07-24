/**
 * Tutor credential standards used in matching.
 * Only include claims that reflect NoorPath's actual process —
 * do not invent named tutors or unverified degrees.
 */
export type TutorCredential = {
  id: string;
  title: string;
  summary: string;
  /** What NoorPath confirms for a proposed tutor before enrolment */
  checks: string[];
};

export const tutorCredentialStandards: TutorCredential[] = [
  {
    id: "subject-fit",
    title: "Subject & teaching focus",
    summary:
      "Matching starts with the requested subject — Qaida, reading, Tajweed, Hifz, Arabic, or Islamic studies — and the learner's age and level.",
    checks: [
      "Relevant subject experience for the proposed course",
      "Child-focused or adult-focused teaching approach when requested",
      "Language of instruction preferences where available",
    ],
  },
  {
    id: "certification",
    title: "Certification & training",
    summary:
      "Where a tutor holds Quranic certification (such as Ijazah in a stated riwayah) or formal Islamic studies training, NoorPath confirms the details that apply to that proposed tutor before enrolment. Families may ask for the specific credentials of the tutor being proposed — NoorPath does not advertise a single university for every tutor.",
    checks: [
      "Ijazah or equivalent Quran teaching certification when claimed for that tutor",
      "Formal Islamic studies or Arabic training when relevant to the course",
      "Credentials shared for the proposed match, not a generic academy-wide claim",
    ],
  },
  {
    id: "experience",
    title: "Teaching experience",
    summary:
      "Relevant online or classroom teaching experience is confirmed for the proposed tutor, especially for children, beginners, or Hifz tracks.",
    checks: [
      "Prior experience teaching the requested age group when applicable",
      "Comfort with live 1-to-1 online lesson format",
      "Ability to set lesson goals after assessing the learner",
    ],
  },
  {
    id: "preference",
    title: "Gender & schedule preferences",
    summary:
      "Families may request a male or female tutor and preferred lesson windows. Availability is confirmed after the request — not guaranteed for every timezone.",
    checks: [
      "Male or female tutor preference recorded at booking",
      "Timezone and preferred class time considered in matching",
      "Proposed schedule confirmed before paid enrolment",
    ],
  },
];

export const tutorMatchingRoles = [
  {
    id: "reading",
    name: "Quran Reading Tutor",
    focus: "Noorani Qaida, pronunciation, beginner reading",
  },
  {
    id: "tajweed",
    name: "Tajweed Tutor",
    focus: "Makharij, rule application, recitation correction",
  },
  {
    id: "hifz",
    name: "Hifz Tutor",
    focus: "New lesson, recent revision, long-term review",
  },
  {
    id: "kids",
    name: "Children’s Quran Tutor",
    focus: "Age-aware pacing, parent-aware planning",
  },
  {
    id: "adults",
    name: "Adult Quran Tutor",
    focus: "Private lessons for beginners and returning adults",
  },
  {
    id: "female",
    name: "Female Tutor Request",
    focus: "Sisters and daughters — subject to availability",
  },
] as const;
