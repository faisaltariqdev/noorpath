import { countryGuidesCanadaAustralia } from "@/data/countryGuidesCanadaAustralia";
import { countryGuidesFranceNetherlandsSweden } from "@/data/countryGuidesFranceNetherlandsSweden";
import { countryGuidesGermanyQatar } from "@/data/countryGuidesGermanyQatar";
import { countryGuidesKuwaitSaudi } from "@/data/countryGuidesKuwaitSaudi";
import { countryGuidesNordic } from "@/data/countryGuidesNordic";
import { countryGuidesAsiaAfrica } from "@/data/countryGuidesAsiaAfrica";
import { countryGuidesIrelandNz } from "@/data/countryGuidesIrelandNz";
import { countryGuidesSpainHongKong } from "@/data/countryGuidesSpainHongKong";
import { countryGuidesEuropeOman } from "@/data/countryGuidesEuropeOman";
import { countryGuidesOmanPakistanNigeria } from "@/data/countryGuidesOmanPakistanNigeria";
import { countryGuidesHongKong } from "@/data/countryGuidesHongKong";
import { countryGuidesRewrite2026 } from "@/data/countryGuidesRewrite2026";
import { countryGuidesUsaUae } from "@/data/countryGuidesUsaUae";
import type { CountryGuideContent } from "@/data/countryGuideTypes";

const COUNTRY_GUIDES: Record<string, CountryGuideContent> = {
  ...countryGuidesUsaUae,
  ...countryGuidesCanadaAustralia,
  ...countryGuidesGermanyQatar,
  ...countryGuidesKuwaitSaudi,
  ...countryGuidesFranceNetherlandsSweden,
  ...countryGuidesNordic,
  ...countryGuidesAsiaAfrica,
  ...countryGuidesIrelandNz,
  ...countryGuidesSpainHongKong,
  ...countryGuidesEuropeOman,
  // Rewritten guides (Nov 2026); listed last so they supersede the older entries.
  ...countryGuidesOmanPakistanNigeria,
  ...countryGuidesHongKong,
  ...countryGuidesRewrite2026,
};

export function getCountryGuide(slug: string): CountryGuideContent | undefined {
  return COUNTRY_GUIDES[slug];
}
