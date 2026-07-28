import { countryGuidesCanadaAustralia } from "@/data/countryGuidesCanadaAustralia";
import { countryGuidesFranceNetherlandsSweden } from "@/data/countryGuidesFranceNetherlandsSweden";
import { countryGuidesGermanyQatar } from "@/data/countryGuidesGermanyQatar";
import { countryGuidesKuwaitSaudi } from "@/data/countryGuidesKuwaitSaudi";
import { countryGuidesNordic } from "@/data/countryGuidesNordic";
import { countryGuidesAsiaAfrica } from "@/data/countryGuidesAsiaAfrica";
import { countryGuidesIrelandNz } from "@/data/countryGuidesIrelandNz";
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
};

export function getCountryGuide(slug: string): CountryGuideContent | undefined {
  return COUNTRY_GUIDES[slug];
}
