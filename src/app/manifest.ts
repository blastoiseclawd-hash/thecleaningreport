import type { MetadataRoute } from "next";

import { siteConfig } from "@/config/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteConfig.name,
    short_name: siteConfig.name,
    description: siteConfig.description,
    start_url: "/",
    display: "standalone",
    background_color: siteConfig.colors.light,
    theme_color: siteConfig.colors.light,
    icons: [
      {
        src: siteConfig.brandAssets.favicon,
        sizes: "any",
        type: "image/svg+xml",
      },
      {
        src: siteConfig.brandAssets.appleTouchIcon,
        sizes: "180x180",
        type: "image/svg+xml",
      },
    ],
  };
}
