import { siteConfig } from "@/config/site";
import { generatePageMetadata } from "@/lib/metadata";
import { breadcrumbSchema, JsonLd, webPageSchema } from "@/lib/schema";

export const metadata = generatePageMetadata({
  title: "Terms of Service",
  description: "Terms governing the use of TheCleaningReport, including editorial disclaimers, affiliate relationships, and acceptable use.",
  slug: "terms",
  type: "website",
});

export default function TermsPage() {
  const pageUrl = `${siteConfig.url}/terms`;

  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", url: siteConfig.url },
            { name: "Terms of Service", url: pageUrl },
          ]),
          webPageSchema({
            title: "Terms of Service",
            description: "Terms governing the use of TheCleaningReport.",
            url: pageUrl,
          }),
        ]}
      />

      <section className="section-space-sm">
        <div className="site-shell max-w-4xl">
          <span className="editorial-rule">Terms</span>
          <h1 className="mt-6 font-[family-name:var(--font-heading-family)] text-[3rem] font-semibold leading-[0.98] text-[#23150f] sm:text-[3.8rem]">
            Terms of Service
          </h1>
          <div className="mt-8 space-y-8 text-[1.02rem] leading-8 text-[#46525b]">
            <p>
              By using TheCleaningReport, you agree to use the site for lawful personal or business
              research purposes only and to respect the content, links, and third-party services made
              available through the publication.
            </p>

            <section>
              <h2 className="font-[family-name:var(--font-heading-family)] text-[2rem] font-semibold text-[#23150f]">
                Editorial and affiliate disclaimer
              </h2>
              <p className="mt-4">
                TheCleaningReport publishes informational buying guides and editorial opinions. We do
                not guarantee that a product, retailer, or price will remain available after publication.
                Some outbound links are affiliate links, which means the site may earn a commission if a
                qualifying purchase is made. That does not create a warranty or a direct sales contract
                between TheCleaningReport and the buyer.
              </p>
            </section>

            <section>
              <h2 className="font-[family-name:var(--font-heading-family)] text-[2rem] font-semibold text-[#23150f]">
                Acceptable use
              </h2>
              <p className="mt-4">
                You may not use the site to interfere with normal operation, scrape or republish
                substantial portions of the content without permission, or misrepresent TheCleaningReport
                editorial material as your own. Retailers, manufacturers, and platforms linked from this
                site have their own terms that apply once you leave our pages.
              </p>
            </section>

            <section>
              <h2 className="font-[family-name:var(--font-heading-family)] text-[2rem] font-semibold text-[#23150f]">
                Liability and external services
              </h2>
              <p className="mt-4">
                The site is provided on an as-is basis. To the fullest extent allowed by applicable law,
                TheCleaningReport disclaims liability for indirect, incidental, or consequential damages
                resulting from the use of the site, reliance on a guide, or a purchase made through a
                third-party retailer or brand program. Product performance, shipping, returns, warranty
                handling, and billing are controlled by the seller you choose.
              </p>
            </section>

            <section>
              <h2 className="font-[family-name:var(--font-heading-family)] text-[2rem] font-semibold text-[#23150f]">
                Contact
              </h2>
              <p className="mt-4">
                Questions about these terms can be sent to{" "}
                <a
                  href={`mailto:${siteConfig.publication.contactEmail}`}
                  className="text-[#2a5a8a] underline decoration-[#2a5a8a]/30 underline-offset-2"
                >
                  {siteConfig.publication.contactEmail}
                </a>
                . The site currently operates under {siteConfig.publication.operatingEntity}.
              </p>
            </section>
          </div>
        </div>
      </section>
    </>
  );
}
