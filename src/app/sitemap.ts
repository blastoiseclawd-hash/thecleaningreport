import type { MetadataRoute } from "next";

import { buildPublicSitemapEntries } from "@/lib/public-routes";

export default function sitemap(): MetadataRoute.Sitemap {
  return buildPublicSitemapEntries();
}
