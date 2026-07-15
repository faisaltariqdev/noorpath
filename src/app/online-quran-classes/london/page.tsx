import UkCityQuranPage, {
  createUkCityMetadata,
  type UkCityPageConfig,
} from "@/components/UkCityQuranPage";

export const revalidate = false;

const config: UkCityPageConfig = {
  city: "London",
  slug: "london",
  description:
    "Live one-to-one online Quran classes in London for kids and adults. Request Qaida, Tajweed, Hifz or a female tutor in GMT/BST. Free trial.",
  heroCopy:
    "Live one-to-one online Quran lessons for children and adults across London. Request a tutor for Noorani Qaida, Quran reading, Tajweed, Hifz or Islamic studies around your GMT/BST routine.",
  localHeading: "Plan Quran lessons around London family schedules",
  localParagraphs: [
    "London households often balance school, work, childcare and travel across a large city. A remote lesson removes another journey while preserving live recitation, correction and direct tutor attention.",
    "Share realistic weekday or weekend windows rather than choosing from advertised slots that may no longer be available. NoorPath checks each request against the proposed tutor before confirming a trial and recurring time.",
  ],
  scheduleNotes: [
    "Request an after-school window that leaves enough time for the learner to settle at home before class.",
    "Adult learners can request evening or weekend windows around work and family responsibilities.",
    "When the UK changes between GMT and BST, reconfirm the recurring time so both learner and tutor follow the same clock.",
  ],
  relatedCities: [
    {
      city: "Birmingham",
      href: "/online-quran-classes/birmingham",
    },
    {
      city: "Manchester",
      href: "/online-quran-classes/manchester",
    },
  ],
  relatedCourse: {
    href: "/courses/noorani-qaida-online",
    label: "Noorani Qaida Online for Beginners",
  },
  imageAlt:
    "A family in London preparing for a remote online Quran lesson at home",
  localQuestion: "Does NoorPath have a physical Quran centre in London?",
  localAnswer:
    "No. NoorPath provides remote online lessons and does not claim a physical branch, classroom or local teaching centre in London.",
  keywords: [
    "online quran classes london",
    "quran classes online london",
    "quran tutor online london",
    "online quran teacher london",
    "online quran classes for kids london",
    "female quran teacher london online",
    "noorani qaida online london",
    "tajweed classes online london",
    "online hifz classes london",
    "private quran lessons london online",
  ],
};

export const metadata = createUkCityMetadata(config);

export default function OnlineQuranClassesLondonPage() {
  return <UkCityQuranPage config={config} />;
}
