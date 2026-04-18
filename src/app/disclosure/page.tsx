import { siteConfig } from "@/config/site";
import { disclosureContent } from "@/data/content/trust-pages";
import { generatePageMetadata } from "@/lib/metadata";
import { breadcrumbSchema, JsonLd, webPageSchema } from "@/lib/schema";

export const metadata = generatePageMetadata({
  title: disclosureContent.title,
  description: disclosureContent.description,
  slug: disclosureContent.slug,
  type: "website",
});

export default function DisclosurePage() {
  const pageUrl = `${siteConfig.url}/disclosure`;

  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", url: siteConfig.url },
            { name: "Disclosure", url: pageUrl },
          ]),
          webPageSchema({
            title: disclosureContent.title,
            description: disclosureContent.description,
            url: pageUrl,
          }),
        ]}
      />

      <section className="section-space-sm">
        <div className="site-shell max-w-4xl">
          <span className="editorial-rule">Disclosure</span>
          <h1 className="mt-6 font-[family-name:var(--font-heading-family)] text-[3rem] font-semibold leading-[0.98] text-[#23150f] sm:text-[3.8rem]">
            {disclosureContent.title}
          </h1>
          <div className="mt-8 space-y-5 text-[1.02rem] leading-8 text-[#46525b]">
            <p>{disclosureContent.body}</p>
            <p>{disclosureContent.aiTransparency}</p>
            <p>{disclosureContent.closing}</p>
          </div>
          <div className="mt-8 rounded-md border border-[#d9d4cb] bg-[#fffaf3] p-6">
            <p className="eyebrow">Publication contact</p>
            <p className="mt-4 text-[1rem] leading-8 text-[#46525b]">
              Disclosure, partnership, or correction requests can be sent to{" "}
              <a
                href={`mailto:${siteConfig.publication.contactEmail}`}
                className="text-[#2a5a8a] underline decoration-[#2a5a8a]/30 underline-offset-2"
              >
                {siteConfig.publication.contactEmail}
              </a>
              . The site currently operates under {siteConfig.publication.operatingEntity}.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
