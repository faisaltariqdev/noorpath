import { countryGuidesCanadaAustralia } from "@/data/countryGuidesCanadaAustralia";
import { countryGuidesFranceNetherlandsSweden } from "@/data/countryGuidesFranceNetherlandsSweden";
import { countryGuidesGermanyQatar } from "@/data/countryGuidesGermanyQatar";
import { countryGuidesKuwaitSaudi } from "@/data/countryGuidesKuwaitSaudi";
import { countryGuidesUsaUae } from "@/data/countryGuidesUsaUae";
import type { CountryGuideContent } from "@/data/countryGuideTypes";

const COUNTRY_GUIDES: Record<string, CountryGuideContent> = {
  ...countryGuidesUsaUae,
  ...countryGuidesCanadaAustralia,
  ...countryGuidesGermanyQatar,
  ...countryGuidesKuwaitSaudi,
  ...countryGuidesFranceNetherlandsSweden,
};

export function getCountryGuide(slug: string): CountryGuideContent | undefined {
  return COUNTRY_GUIDES[slug];
}
