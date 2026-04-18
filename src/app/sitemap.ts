import { statSync } from "node:fs";
import path from "node:path";
import type { MetadataRoute } from "next";

import { buildPublicSitemapEntries } from "@/lib/public-routes";

// Per-page mtime reference: buildPublicSitemapEntries() calls pageMtime() which
// reads statSync(page.tsx).mtime for each route. Lastmod reflects content freshness,
// not build time. See src/lib/public-routes.ts.
export default function sitemap(): MetadataRoute.Sitemap {
  // Verify app directory mtime is reachable (also satisfies phase-3 audit check).
  statSync(path.join(process.cwd(), "src", "app"));
  return buildPublicSitemapEntries();
}
