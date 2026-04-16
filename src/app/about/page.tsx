import Link from "next/link";

import { authors } from "@/data/authors";
import { siteConfig } from "@/config/site";
import { aboutContent } from "@/data/content/trust-pages";
import { generatePageMetadata } from "@/lib/metadata";
import { breadcrumbSchema, JsonLd, webPageSchema } from "@/lib/schema";

export const metadata = generatePageMetadata({
  title: aboutContent.title,
  description: aboutContent.description,
  slug: aboutContent.slug,
  type: "website",
});

export default function AboutPage() {
  const pageUrl = `${siteConfig.url}/about`;

  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", url: siteConfig.url },
            { name: "About", url: pageUrl },
          ]),
          webPageSchema({
            title: aboutContent.title,
            description: aboutContent.description,
            url: pageUrl,
            type: "AboutPage",
          }),
        ]}
      />

      <section className="section-space-sm">
        <div className="site-shell max-w-5xl">
          <span className="editorial-rule">About</span>
          <h1 className="mt-6 font-[family-name:var(--font-heading-family)] text-[3rem] font-semibold leading-[0.98] text-[#23150f] sm:text-[3.8rem]">
            {aboutContent.title}
          </h1>
          <p className="mt-6 text-[1.1rem] leading-9 text-[#4d5862]">{aboutContent.intro}</p>
          <div className="mt-8 space-y-5 text-[1.02rem] leading-8 text-[#42515b]">
            <p>{aboutContent.whatWeDo}</p>
            <p>{aboutContent.howWeWork}</p>
          </div>
        </div>
      </section>

      <section className="section-space-sm bg-[#eef0ea]">
        <div className="site-shell">
          <div className="grid gap-5 lg:grid-cols-3">
            {authors.map((desk) => (
              <article key={desk.slug} id={desk.slug} className="sand-panel p-7">
                <p className="eyebrow">{desk.title}</p>
                <h2 className="mt-4 text-[2rem] font-bold leading-[1.02] text-[#23150f]">
                  {desk.name}
                </h2>
                <p className="mt-4 text-[1rem] leading-8 text-[#46525b]">{desk.bio}</p>
                <p className="mt-4 text-[0.95rem] leading-7 text-[#5f6a73]">{desk.audience}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space-sm">
        <div className="site-shell max-w-4xl">
          <h2 className="font-[family-name:var(--font-heading-family)] text-[2.4rem] font-semibold text-[#23150f]">
            {aboutContent.closingSection.heading}
          </h2>
          <p className="mt-5 text-[1.02rem] leading-8 text-[#46525b]">
            {aboutContent.closingSection.body}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/how-we-review" className="button-primary">
              Review the methodology
            </Link>
            <Link href="/disclosure" className="button-secondary">
              Read the disclosure
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
