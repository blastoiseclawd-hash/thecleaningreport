import type { MetadataRoute } from "next";

import { botRules, defaultDisallow } from "@/config/bot-policy";
import { siteConfig } from "@/config/site";

export default function robots(): MetadataRoute.Robots {
  const botSpecificRules: MetadataRoute.Robots["rules"] = botRules.map((rule) =>
    rule.allow
      ? { userAgent: rule.userAgent, allow: "/", disallow: defaultDisallow }
      : { userAgent: rule.userAgent, disallow: "/" },
  );

  return {
    rules: [
      { userAgent: "*", allow: "/", disallow: defaultDisallow },
      ...botSpecificRules,
    ],
    sitemap: `${siteConfig.url}/sitemap.xml`,
  };
}
