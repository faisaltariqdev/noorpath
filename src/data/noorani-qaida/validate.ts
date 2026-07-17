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

  for (const guide of QAIDA_GUIDES) {
    if (
      guide.introduction.length < 120 ||
      guide.sections.length < 3 ||
      guide.checklist.length < 5 ||
      guide.faqs.length < 2
    ) {
      throw new Error(`Guide page ${guide.slug} does not meet the content-depth contract`);
    }
  }

  return true;
}
