import { siteConfig } from "@/config/site";
import { generatePageMetadata } from "@/lib/metadata";
import { breadcrumbSchema, JsonLd, webPageSchema } from "@/lib/schema";

export const metadata = generatePageMetadata({
  title: "Privacy Policy",
  description: "Starter privacy policy page for TheCleaningReport. Replace with your real privacy policy before launch.",
  slug: "privacy",
  type: "website",
});

export default function PrivacyPage() {
  const pageUrl = `${siteConfig.url}/privacy`;

  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", url: siteConfig.url },
            { name: "Privacy Policy", url: pageUrl },
          ]),
          webPageSchema({
            title: "Privacy Policy",
            description: "Starter privacy policy page for TheCleaningReport.",
            url: pageUrl,
          }),
        ]}
      />

      <section className="section-space-sm">
        <div className="site-shell max-w-4xl">
          <span className="editorial-rule">Privacy</span>
          <h1 className="mt-6 font-[family-name:var(--font-heading-family)] text-[3rem] font-semibold leading-[0.98] text-[#23150f] sm:text-[3.8rem]">
            Privacy Policy
          </h1>
          <div className="mt-8 space-y-5 text-[1.02rem] leading-8 text-[#46525b]">
            <p>Replace this page with your real privacy policy before launch.</p>
            <p>At a minimum, explain what analytics, affiliate networks, email collection, and cookies you use.</p>
          </div>
        </div>
      </section>
    </>
  );
}
