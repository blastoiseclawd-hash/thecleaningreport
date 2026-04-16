import Link from "next/link";

import { authors } from "@/data/authors";
import { siteConfig } from "@/config/site";

const deskHighlights = authors.map((desk) => ({
  slug: desk.slug,
  name: desk.name,
  title: desk.title,
  summary: desk.bio,
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
                Affiliate site starter
              </span>
              <h1 className="display-title mt-6 max-w-5xl text-[#f7fbf8]">
                TheCleaningReport
              </h1>
              <p className="mt-7 max-w-3xl text-[1.18rem] leading-9 text-[#dbe4de] sm:text-[1.28rem]">
                Practical indoor-cleaning buying guides for cleaner, lower-friction homes.
              </p>
              <p className="mt-4 max-w-3xl text-[1.02rem] leading-8 text-[#b9c6c0]">
                This starter gives you the shared publishing infrastructure first: desks, trust pages,
                metadata, schema, sitemap plumbing, and reusable guide components.
              </p>

              <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <Link href="/how-we-review" className="button-primary">
                  Review the methodology page
                </Link>
                <Link
                  href="/about"
                  className="button-secondary border-[#819375] bg-transparent text-[#f2f6f3] hover:border-[#a3b39b] hover:bg-[#24313a] hover:text-white"
                >
                  Meet the editorial desks
                </Link>
              </div>

              <p className="mt-7 max-w-2xl text-[0.92rem] leading-7 text-[#b7c4bf]">
                {siteConfig.ftcDisclosure}
              </p>
            </div>

            <aside className="sand-panel p-7 sm:p-8">
              <p className="eyebrow">Before launch</p>
              <h2 className="mt-4 text-[2.65rem] font-bold leading-[0.96] text-[#182028]">
                Replace the starter copy with your real niche strategy.
              </h2>
              <ul className="mt-6 space-y-3 text-[0.98rem] leading-7 text-[#42515b]">
                <li className="flex items-start gap-3">
                  <span className="mt-3 h-1.5 w-1.5 shrink-0 bg-[#7f8f79]" />
                  <span>Update the desk voices, categories, and featured coverage.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-3 h-1.5 w-1.5 shrink-0 bg-[#7f8f79]" />
                  <span>Fill `data/guide-opportunities.md` before you add live routes.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-3 h-1.5 w-1.5 shrink-0 bg-[#7f8f79]" />
                  <span>Add your first hub or spoke page under `src/data/content` and `src/app`.</span>
                </li>
              </ul>
            </aside>
          </div>
        </div>
      </section>

      <section className="section-space-sm">
        <div className="site-shell">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
            <div className="max-w-3xl">
              <span className="editorial-rule">Editorial desks</span>
              <h2 className="mt-5 text-[2.8rem] font-bold leading-[0.98] text-[#23150f] sm:text-[3.4rem]">
                Pick the desk that matches the reader problem.
              </h2>
            </div>
            <p className="max-w-xl text-[1.02rem] leading-8 text-[#4d5862]">
              The desk model keeps the site from sounding flat. Each desk should own a different kind of buyer and a different recommendation style.
            </p>
          </div>

          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {deskHighlights.map((desk) => (
              <article key={desk.slug} className="sand-panel p-7">
                <p className="eyebrow">{desk.title}</p>
                <h3 className="mt-3 text-[2rem] font-bold leading-[1.02] text-[#23150f]">
                  {desk.name}
                </h3>
                <p className="mt-5 text-[1rem] leading-8 text-[#46525b]">{desk.summary}</p>
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
