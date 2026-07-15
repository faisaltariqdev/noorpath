import UkCityQuranPage, {
  createUkCityMetadata,
  type UkCityPageConfig,
} from "@/components/UkCityQuranPage";

export const revalidate = false;

const config: UkCityPageConfig = {
  city: "Birmingham",
  slug: "birmingham",
  description:
    "Live one-to-one online Quran classes in Birmingham for kids and adults. Request Qaida, Tajweed, Hifz or a female tutor in GMT/BST. Free trial.",
  heroCopy:
    "Live one-to-one online Quran lessons for Birmingham children and adults. Request Noorani Qaida, reading, Tajweed, Hifz or Islamic studies with GMT/BST tutor matching.",
  localHeading: "Build a consistent Quran routine from home in Birmingham",
  localParagraphs: [
    "Birmingham families may already balance school, mosque activities, work and weekend commitments. Remote one-to-one lessons can add focused recitation time without requiring another regular journey.",
    "A useful schedule is one the learner can maintain. Share several suitable windows and NoorPath will check the request against tutor subject and timezone availability before confirming the trial.",
  ],
  scheduleNotes: [
    "Request a weekday after-school or early-evening window that fits the learner’s existing routine.",
    "Weekend preferences can be considered for families whose weekdays are already full.",
    "Reconfirm recurring times when the UK moves between GMT and BST to avoid missed lessons.",
  ],
  relatedCities: [
    {
      city: "London",
      href: "/online-quran-classes/london",
    },
    {
      city: "Bradford",
      href: "/online-quran-classes/bradford",
    },
  ],
  relatedCourse: {
    href: "/hifz-quran-online",
    label: "Structured Online Hifz Programme",
  },
  imageAlt:
    "A Birmingham family preparing for a live online Quran lesson from home",
  localQuestion: "Does NoorPath operate a physical madrasa in Birmingham?",
  localAnswer:
    "No. NoorPath provides remote online Quran lessons and does not claim a physical madrasa, branch or teaching centre in Birmingham.",
  keywords: [
    "online quran classes birmingham",
    "quran classes online birmingham",
    "quran tutor online birmingham",
    "online quran teacher birmingham",
    "online quran classes for kids birmingham",
    "female quran teacher birmingham online",
    "noorani qaida online birmingham",
    "tajweed classes online birmingham",
    "online hifz classes birmingham",
    "private quran lessons birmingham online",
  ],
};

export const metadata = createUkCityMetadata(config);

export default function OnlineQuranClassesBirminghamPage() {
  return <UkCityQuranPage config={config} />;
}
