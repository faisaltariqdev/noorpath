import {
  QAIDA_GUIDES,
  QAIDA_LESSONS,
  QAIDA_LETTERS,
  QAIDA_TAJWEED_TOPICS,
} from "./index";

function assertUnique(values: string[], label: string) {
  const duplicates = values.filter((value, index) => values.indexOf(value) !== index);
  if (duplicates.length) {
    throw new Error(`Duplicate ${label}: ${[...new Set(duplicates)].join(", ")}`);
  }
}

export function validateQaidaContent(): true {
  if (QAIDA_LETTERS.length !== 28) {
    throw new Error(`Expected 28 Arabic letters, received ${QAIDA_LETTERS.length}`);
  }

  const allEntries = [...QAIDA_LESSONS, ...QAIDA_TAJWEED_TOPICS, ...QAIDA_GUIDES];
  assertUnique(QAIDA_LETTERS.map((entry) => entry.slug), "letter slugs");
  assertUnique(allEntries.map((entry) => entry.slug), "topic and guide slugs");
  // Include Arabic glyph so shared English names (Taa for ت/ط, Haa for ح/ه) stay valid.
  assertUnique(
    [
      ...QAIDA_LETTERS.map((entry) => `${entry.name} (${entry.arabic}) Arabic Letter`),
      ...allEntries.map((entry) => entry.title),
    ],
    "page titles",
  );

  for (const letter of QAIDA_LETTERS) {
    if (
      !letter.arabic ||
      letter.forms.length !== 4 ||
      !letter.makhraj ||
      !letter.commonConfusion ||
      !letter.parentTip ||
      !letter.teacherTip ||
      letter.keywords.length < 3
    ) {
      throw new Error(`Letter page ${letter.slug} is missing required educational content`);
    }
  }

  for (const topic of [...QAIDA_LESSONS, ...QAIDA_TAJWEED_TOPICS]) {
    if (
      topic.explanation.length < 120 ||
      topic.practiceSteps.length < 4 ||
      topic.examples.length < 2 ||
      topic.faqs.length < 2 ||
      !topic.commonMistake ||
      !topic.parentTip ||
      !topic.teacherTip
    ) {
      throw new Error(`Topic page ${topic.slug} does not meet the content-depth contract`);
    }
  }

  /** Long-form SEO concept / expanded guides — buyer-education depth contract. */
  const LONG_FORM_GUIDE_SLUGS = new Set([
    "with-animation",
    "gamified-learning",
    "arabic-alphabet-practice",
    "with-audio",
    "digital-quran-learning-platform",
    "pronunciation",
    "pdf-vs-interactive",
  ]);

  for (const guide of QAIDA_GUIDES) {
    const isLongForm = LONG_FORM_GUIDE_SLUGS.has(guide.slug);
    const minIntro = isLongForm ? 600 : 120;
    const minSections = isLongForm ? 6 : 3;
    const minFaqs = isLongForm ? 2 : 2;
    if (
      guide.introduction.length < minIntro ||
      guide.sections.length < minSections ||
      guide.checklist.length < 5 ||
      guide.faqs.length < minFaqs
    ) {
      throw new Error(
        `Guide page ${guide.slug} does not meet the content-depth contract` +
          (isLongForm ? " (long-form SEO minimum)" : ""),
      );
    }
    if (isLongForm && guide.description.length < 140) {
      throw new Error(`Guide page ${guide.slug} meta description is too short for long-form SEO`);
    }
  }

  return true;
}
