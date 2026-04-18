import { siteConfig } from "@/config/site";
import { howWeReviewContent } from "@/data/content/trust-pages";
import { generatePageMetadata } from "@/lib/metadata";
import { breadcrumbSchema, JsonLd, webPageSchema } from "@/lib/schema";

export const metadata = generatePageMetadata({
  title: howWeReviewContent.title,
  description: howWeReviewContent.description,
  slug: howWeReviewContent.slug,
  type: "website",
});

export default function HowWeReviewPage() {
  const pageUrl = `${siteConfig.url}/how-we-review`;

  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", url: siteConfig.url },
            { name: "How We Review", url: pageUrl },
          ]),
          webPageSchema({
            title: howWeReviewContent.title,
            description: howWeReviewContent.description,
            url: pageUrl,
          }),
        ]}
      />

      <section className="section-space-sm">
        <div className="site-shell max-w-5xl">
          <span className="editorial-rule">Methodology</span>
          <h1 className="mt-6 font-[family-name:var(--font-heading-family)] text-[3rem] font-semibold leading-[0.98] text-[#23150f] sm:text-[3.8rem]">
            {howWeReviewContent.title}
          </h1>
          <p className="mt-6 text-[1.1rem] leading-9 text-[#4d5862]">{howWeReviewContent.intro}</p>
        </div>
      </section>

      <section className="section-space-sm bg-[#fffdf9]">
        <div className="site-shell max-w-5xl space-y-8">
          {howWeReviewContent.sections.map((section, index) => (
            <article key={section.id} className="grid gap-5 border-t border-[#ded9cf] pt-6 first:border-t-0 first:pt-0 sm:grid-cols-[72px_1fr]">
              <div className="number-chip">{`0${index + 1}`}</div>
              <div>
                <h2 className="font-[family-name:var(--font-heading-family)] text-[2rem] font-semibold text-[#23150f]">
                  {section.heading}
                </h2>
                <p className="mt-4 text-[1.02rem] leading-8 text-[#46525b]">{section.body}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section-space-sm bg-[#eef0ea]">
        <div className="site-shell max-w-4xl">
          <h2 className="font-[family-name:var(--font-heading-family)] text-[2.4rem] font-semibold text-[#23150f]">
            {howWeReviewContent.independenceSection.heading}
          </h2>
          <p className="mt-5 text-[1.02rem] leading-8 text-[#46525b]">
            {howWeReviewContent.independenceSection.body}
          </p>
        </div>
      </section>
    </>
  );
}
