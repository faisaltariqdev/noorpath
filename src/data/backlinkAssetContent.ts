import { backlinkContentComparisons } from "@/data/backlinkContentComparisons";
import { backlinkContentGuides } from "@/data/backlinkContentGuides";
import { backlinkContentInfographics } from "@/data/backlinkContentInfographics";
import { backlinkContentResearch } from "@/data/backlinkContentResearch";
import { backlinkContentStatistics } from "@/data/backlinkContentStatistics";

export const backlinkAssetContent: Record<
  string,
  { style: string; content: string }
> = {
  ...backlinkContentInfographics,
  ...backlinkContentStatistics,
  ...backlinkContentGuides,
  ...backlinkContentResearch,
  ...backlinkContentComparisons,
};
