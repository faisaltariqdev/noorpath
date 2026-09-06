import type { MetadataRoute } from "next";
import { toolsSitemapEntries } from "@/data/tools";

export default function sitemap(): MetadataRoute.Sitemap {
  return toolsSitemapEntries();
}
