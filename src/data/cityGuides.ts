import { cityGuidesUkPrimary } from "@/data/cityGuidesUkPrimary";
import { cityGuidesUkSecondary } from "@/data/cityGuidesUkSecondary";
import { cityGuidesUsPrimary } from "@/data/cityGuidesUsPrimary";
import { cityGuidesUsSecondary } from "@/data/cityGuidesUsSecondary";
import { cityGuidesDiasporaPrimary } from "@/data/cityGuidesDiasporaPrimary";
import { cityGuidesNigeria } from "@/data/cityGuidesNigeria";
import type { CityGuideContent } from "@/data/countryGuideTypes";

const CITY_GUIDES: Record<string, CityGuideContent> = {
  ...cityGuidesUkPrimary,
  ...cityGuidesUkSecondary,
  ...cityGuidesUsPrimary,
  ...cityGuidesUsSecondary,
  ...cityGuidesDiasporaPrimary,
  ...cityGuidesNigeria,
};

export function getCityGuide(slug: string): CityGuideContent | undefined {
  return CITY_GUIDES[slug];
}
