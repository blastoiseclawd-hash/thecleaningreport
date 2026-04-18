import type { Metadata } from "next";

import { siteConfig } from "@/config/site";
import { generatePageMetadata } from "@/lib/metadata";

export const metadata: Metadata = generatePageMetadata({
  title: siteConfig.defaultTitle,
  description:
    "Practical buying guides for robot vacuums, cordless vacuums, steam mops, and pet-mess cleanup that help real homes stay cleaner with less daily friction.",
  slug: "",
  type: "website",
});

export default function HomePage() {
  return (
    <section className="section-space">
      <div className="site-shell">
        <div className="max-w-3xl">
          <h1 className="display-title text-[#182028]">{siteConfig.name}</h1>
          <p className="mt-6 text-[1.18rem] leading-9 text-[#42515b]">
            {siteConfig.tagline}
          </p>
          <p className="mt-8 text-[0.92rem] leading-7 text-[#6e7a72]">
            Homepage content is being rebuilt.
          </p>
        </div>
      </div>
    </section>
  );
}
