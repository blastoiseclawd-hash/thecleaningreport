import { siteConfig } from "@/config/site";
import { generatePageMetadata } from "@/lib/metadata";
import { breadcrumbSchema, JsonLd, webPageSchema } from "@/lib/schema";

export const metadata = generatePageMetadata({
  title: "Terms of Service",
  description: "Starter terms page for TheCleaningReport. Replace with your real terms before launch.",
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
            description: "Starter terms page for TheCleaningReport.",
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
          <div className="mt-8 space-y-5 text-[1.02rem] leading-8 text-[#46525b]">
            <p>Replace this page with your legal terms before launch.</p>
            <p>Use it to cover acceptable use, disclaimers, limits of liability, and contact details.</p>
          </div>
        </div>
      </section>
    </>
  );
}
