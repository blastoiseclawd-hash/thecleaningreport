import Link from "next/link";

import { siteConfig } from "@/config/site";

const coverageHighlights = siteConfig.categories.map((category) => ({
  slug: category.slug,
  name: category.name,
  summary: category.description,
}));

export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden bg-[#16212a] text-[#f2f6f3]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(94,111,120,0.3),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(129,147,117,0.14),transparent_28%)]" />
        <div className="site-shell relative py-12 sm:py-16 lg:py-20">
          <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
            <div className="max-w-4xl">
              <span className="editorial-rule text-[#b8c7b2] before:bg-[#8ea087]">
                Indoor cleaning guides
              </span>
              <h1 className="display-title mt-6 max-w-5xl text-[#f7fbf8]">{siteConfig.name}</h1>
              <p className="mt-7 max-w-3xl text-[1.18rem] leading-9 text-[#dbe4de] sm:text-[1.28rem]">
                {siteConfig.tagline}
              </p>
              <p className="mt-4 max-w-3xl text-[1.02rem] leading-8 text-[#b9c6c0]">
                The launch strategy is broad-brand, narrow-execution: frame the site as an indoor
                cleaning publication from day one, but build the first wave around the strongest
                floor-care opportunities first.
              </p>

              <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <Link href="/how-we-review" className="button-primary">
                  Review the methodology
                </Link>
                <Link
                  href="/about"
                  className="button-secondary border-[#819375] bg-transparent text-[#f2f6f3] hover:border-[#a3b39b] hover:bg-[#24313a] hover:text-white"
                >
                  Read the mission and scope
                </Link>
              </div>

              <p className="mt-7 max-w-2xl text-[0.92rem] leading-7 text-[#b7c4bf]">
                {siteConfig.ftcDisclosure}
              </p>
            </div>

            <aside className="sand-panel p-7 sm:p-8">
              <p className="eyebrow">Validated launch spine</p>
              <h2 className="mt-4 text-[2.65rem] font-bold leading-[0.96] text-[#182028]">
                Floor care leads the first wave.
              </h2>
              <ul className="mt-6 space-y-3 text-[0.98rem] leading-7 text-[#42515b]">
                <li className="flex items-start gap-3">
                  <span className="mt-3 h-1.5 w-1.5 shrink-0 bg-[#7f8f79]" />
                  <span>Robot vacuums are the clearest launch anchor.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-3 h-1.5 w-1.5 shrink-0 bg-[#7f8f79]" />
                  <span>Cordless vacuums give the site broad household demand quickly.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-3 h-1.5 w-1.5 shrink-0 bg-[#7f8f79]" />
                  <span>Pet-hair cleanup adds a strong real-home problem lane early.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-3 h-1.5 w-1.5 shrink-0 bg-[#7f8f79]" />
                  <span>Steam mops are the first surface-cleaning expansion once the vacuum core is live.</span>
                </li>
              </ul>
            </aside>
          </div>
        </div>
      </section>

      <section className="section-space-sm">
        <div className="site-shell">
          <div id="launch-guides" className="rounded-[28px] border border-[#d8d3ca] bg-[#fffaf2] p-7 sm:p-9">
            <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-3xl">
                <span className="editorial-rule">Launch guides</span>
                <h2 className="mt-5 text-[2.6rem] font-bold leading-[0.98] text-[#23150f] sm:text-[3.2rem]">
                  Start with the pages built for the launch spine.
                </h2>
              </div>
              <p className="max-w-xl text-[1rem] leading-8 text-[#4d5862]">
                These first guides are the site&apos;s public baseline: automation, everyday cordless cleanup,
                and the pet-hair messes that expose weak recommendations fast.
              </p>
            </div>

            <div className="mt-9 grid gap-5 lg:grid-cols-3">
              {siteConfig.launchGuides.map((guide) => (
                <article key={guide.href} className="rounded-[22px] border border-[#ddd5c8] bg-white p-6 shadow-[0_18px_36px_rgba(35,21,15,0.06)]">
                  <p className="eyebrow">{guide.eyebrow}</p>
                  <h3 className="mt-3 text-[2rem] font-bold leading-[1.02] text-[#23150f]">
                    {guide.title}
                  </h3>
                  <p className="mt-4 text-[1rem] leading-8 text-[#46525b]">{guide.description}</p>
                  {guide.available ? (
                    <Link href={guide.href} className="mt-6 inline-flex text-[0.98rem] font-semibold text-[#2a5a8a] hover:text-[#1a3d5c]">
                      Open guide
                    </Link>
                  ) : (
                    <span className="mt-6 inline-flex text-[0.98rem] font-semibold text-[#8d8578]">
                      Coming soon
                    </span>
                  )}
                </article>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
            <div className="max-w-3xl">
              <span className="editorial-rule">Coverage lanes</span>
              <h2 className="mt-5 text-[2.8rem] font-bold leading-[0.98] text-[#23150f] sm:text-[3.4rem]">
                Broad indoor-cleaning brand. Narrow, deliberate launch.
              </h2>
            </div>
            <p className="max-w-xl text-[1.02rem] leading-8 text-[#4d5862]">
              The category framing stays broad from day one, but the early page pipeline should only
              promote the clusters that can win faster and support the rest of the brand later.
            </p>
          </div>

          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {coverageHighlights.map((lane) => (
              <article key={lane.slug} className="sand-panel p-7">
                <p className="eyebrow">Category</p>
                <h3 className="mt-3 text-[2rem] font-bold leading-[1.02] text-[#23150f]">
                  {lane.name}
                </h3>
                <p className="mt-5 text-[1rem] leading-8 text-[#46525b]">{lane.summary}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space-sm bg-[#eef0ea]">
        <div className="site-shell">
          <div className="grid gap-5 md:grid-cols-3">
            {siteConfig.trustPillars.map((pillar) => (
              <article key={pillar.title} className="rounded-md border border-[#d9d6ce] bg-[#fffefb] p-7">
                <p className="eyebrow">{pillar.title}</p>
                <p className="mt-4 text-[1rem] leading-8 text-[#46525b]">{pillar.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
