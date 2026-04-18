import { siteConfig } from "@/config/site";
import { generatePageMetadata } from "@/lib/metadata";
import { breadcrumbSchema, JsonLd, webPageSchema } from "@/lib/schema";

export const metadata = generatePageMetadata({
  title: "Privacy Policy",
  description: "Privacy practices for TheCleaningReport, including analytics, affiliate links, cookies, and reader communication.",
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
            description: "Privacy practices for TheCleaningReport.",
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
          <div className="mt-8 space-y-8 text-[1.02rem] leading-8 text-[#46525b]">
            <p>
              TheCleaningReport collects only the information needed to run an editorial shopping site,
              understand how the site is used, and maintain affiliate relationships responsibly. We do
              not sell reader data, and we do not publish buyer details.
            </p>

            <section>
              <h2 className="font-[family-name:var(--font-heading-family)] text-[2rem] font-semibold text-[#23150f]">
                What we collect
              </h2>
              <p className="mt-4">
                The site may collect standard analytics and server-log data such as page views, device
                type, browser information, referral source, and approximate location derived from IP
                address. If a contact form, newsletter, or reader email workflow is added later, any
                information you choose to submit will be used only for that specific communication.
              </p>
            </section>

            <section>
              <h2 className="font-[family-name:var(--font-heading-family)] text-[2rem] font-semibold text-[#23150f]">
                Cookies, analytics, and affiliate links
              </h2>
              <p className="mt-4">
                TheCleaningReport may use cookies or similar technologies for site analytics, basic
                performance monitoring, and affiliate-link attribution. Affiliate retailers such as
                Amazon or approved brand partners may set their own cookies once you leave this site.
                Their privacy practices are controlled by their own policies, not by TheCleaningReport.
              </p>
            </section>

            <section>
              <h2 className="font-[family-name:var(--font-heading-family)] text-[2rem] font-semibold text-[#23150f]">
                How information is used
              </h2>
              <p className="mt-4">
                Information is used to understand which guides are useful, improve site performance,
                troubleshoot problems, evaluate affiliate-program compliance, and respond to reader or
                business inquiries. We do not use reader data to make hidden ranking decisions or to
                personalize recommendations based on sensitive personal traits.
              </p>
            </section>

            <section>
              <h2 className="font-[family-name:var(--font-heading-family)] text-[2rem] font-semibold text-[#23150f]">
                Contact
              </h2>
              <p className="mt-4">
                Privacy questions can be sent to{" "}
                <a
                  href={`mailto:${siteConfig.publication.contactEmail}`}
                  className="text-[#2a5a8a] underline decoration-[#2a5a8a]/30 underline-offset-2"
                >
                  {siteConfig.publication.contactEmail}
                </a>
                . The site currently operates under {siteConfig.publication.operatingEntity} in{" "}
                {siteConfig.publication.country}.
              </p>
            </section>
          </div>
        </div>
      </section>
    </>
  );
}
