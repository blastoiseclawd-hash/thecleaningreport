import Link from "next/link";
import type { Metadata } from "next";

import { siteConfig } from "@/config/site";
import { authors } from "@/data/authors";
import { generatePageMetadata } from "@/lib/metadata";

export const metadata: Metadata = generatePageMetadata({
  title: siteConfig.defaultTitle,
  description:
    "Practical buying guides for robot vacuums, cordless vacuums, steam mops, and pet-mess cleanup that help real homes stay cleaner with less daily friction.",
  slug: "",
  type: "website",
});

const topicalDeskOrder = ["labor-math-desk", "everyday-cleaning-desk", "safe-surface-desk"] as const;

const deskHomeSummary: Record<string, string> = {
  "labor-math-desk":
    "Premium robot vacuums and labor-removal picks for buyers willing to spend $500 to $1,500 to reclaim weekly floor-care hours, when the maintenance math actually works.",
  "everyday-cleaning-desk":
    "Mid-priced cordless vacuums, handhelds, and basic non-steam mops for renters and apartment dwellers who want a sensible winner without a research project.",
  "safe-surface-desk":
    "Steam mops, carpet cleaners, and chemical picks for homeowners protecting engineered hardwood, laminate, stone, grout, and stainless. Flooring compatibility runs the ranking.",
};

const decisionTracks = [
  {
    eyebrow: "Labor math",
    title: "You want a robot vacuum that will still run right at month six.",
    summary:
      "The flagship guide ranks picks by weekly time saved, dock reliability, firmware cadence, and the failure modes labs never test for. Start here if you want the decision made in one visit.",
    href: "/best-robot-vacuum",
    cta: "See the robot vacuum guide",
    available: true,
  },
  {
    eyebrow: "Cordless everyday",
    title: "You want one cordless that handles weekly floor care without a research project.",
    summary:
      "Mid-priced picks for renters and apartment dwellers who care about suction on pet hair, battery life at year two, and how much the replacement filter actually costs.",
    href: "/best-cordless-vacuum",
    cta: "Coming soon",
    available: false,
  },
  {
    eyebrow: "Safe surface",
    title: "You want a steam mop that will not void the floor warranty.",
    summary:
      "Steam picks scored against manufacturer care guides for engineered hardwood, laminate, and stone. Where the steam does not belong, the page says so.",
    href: "/best-steam-mop",
    cta: "Coming soon",
    available: false,
  },
  {
    eyebrow: "Event cleanup",
    title: "You just moved in, the dog had an accident, or you are prepping to list.",
    summary:
      "Carpet cleaner machines, steam mops, and chemical picks for one-shot restoration jobs where a rental feels wasteful and the wrong tool makes the stain worse.",
    href: "/best-carpet-cleaner-machine",
    cta: "Coming soon",
    available: false,
  },
] as const;

export default function HomePage() {
  const topicalDesks = topicalDeskOrder
    .map((slug) => authors.find((a) => a.slug === slug))
    .filter((desk): desk is NonNullable<typeof desk> => Boolean(desk));

  // House-voice (role: "house-voice") owns this page. Site-level pages do not
  // borrow a topical desk byline — see write-as-house-voice skill.
  const houseVoice = authors.find((a) => a.role === "house-voice");

  return (
    <>
      <section className="relative overflow-hidden bg-[#102027] text-[#f2f6f3]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(45,107,115,0.35),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(196,138,73,0.12),transparent_28%)]" />
        <div className="site-shell relative py-12 sm:py-16 lg:py-20">
          <div className="grid gap-10 lg:grid-cols-[1.02fr_0.98fr] lg:items-start">
            <div className="max-w-4xl">
              <span className="editorial-rule text-[#b8c7b2] before:bg-[#8ea087]">
                Independent indoor-cleaning buying guides
              </span>
              <h1 className="display-title mt-6 max-w-5xl text-[#f7fbf8]">
                Cleaning tools that still make sense at month six, not just at unboxing.
              </h1>
              <p className="mt-7 max-w-3xl text-[1.18rem] leading-9 text-[#dbe4de] sm:text-[1.28rem]">
                Most buying guides rank on suction spec and a clean-lab test. This one ranks on the stuff
                that decides how much time your household spends on floor care across a full year: dock
                reliability, firmware cadence, replacement-pad cost, and the failure modes that only
                surface once the new-purchase feeling wears off.
              </p>
              <p className="mt-4 max-w-3xl text-[1.02rem] leading-8 text-[#b9c6c0]">
                Buying guides across robot vacuums, cordless vacuums, steam mops, carpet cleaners,
                handhelds, and pet-mess cleanup. Three editorial desks with distinct reader jobs. One
                named editor signing off on the rankings.
              </p>

              <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <Link href="/best-robot-vacuum" className="button-primary">
                  Start with the Best Robot Vacuums
                </Link>
                <Link
                  href="/how-we-review"
                  className="button-secondary border-[#819375] bg-transparent text-[#f2f6f3] hover:border-[#a3b39b] hover:bg-[#24313a] hover:text-white"
                >
                  How we review
                </Link>
              </div>

              <p className="mt-7 max-w-2xl text-[0.92rem] leading-7 text-[#b7c4bf]">
                {siteConfig.ftcDisclosure ?? siteConfig.affiliatePrograms.amazon.disclaimer} Commission rate is never the tiebreaker.
              </p>
            </div>

            <aside className="sand-panel p-7 sm:p-8">
              <p className="eyebrow">Flagship guide</p>
              <h2 className="mt-4 text-[2.65rem] font-bold leading-[0.96] text-[#182028]">
                The 6 Best Robot Vacuums of 2026
              </h2>
              <p className="mt-4 text-[1rem] leading-8 text-[#46525b]">
                Ranked by labor math, not lab percentages. The top pick reclaims roughly 40 minutes a week
                of floor-care time for pet plus mixed-floor homes, and holds past month one instead of
                collapsing after the first dock clog.
              </p>

              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                <div className="rounded-sm border border-[#d8d5cb] bg-[#fffefb] px-4 py-4">
                  <p className="text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-[#6b7664]">
                    Primary reader
                  </p>
                  <p className="mt-2 text-[1.02rem] font-semibold text-[#182028]">Labor Traders</p>
                </div>
                <div className="rounded-sm border border-[#d8d5cb] bg-[#fffefb] px-4 py-4">
                  <p className="text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-[#6b7664]">
                    What it answers
                  </p>
                  <p className="mt-2 text-[1.02rem] font-semibold text-[#182028]">Which robot to buy now</p>
                </div>
              </div>

              <ul className="mt-6 space-y-3 text-[0.98rem] leading-7 text-[#42515b]">
                <li className="flex items-start gap-3">
                  <span className="mt-3 h-1.5 w-1.5 shrink-0 bg-[#7f8f79]" />
                  <span>Best overall, best for threshold-heavy homes, best for pet hair, best bagless dock, and more.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-3 h-1.5 w-1.5 shrink-0 bg-[#7f8f79]" />
                  <span>Weekly time saved + maintenance cadence called out per pick.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-3 h-1.5 w-1.5 shrink-0 bg-[#7f8f79]" />
                  <span>Where each pick collapses for specific households, not just where it wins.</span>
                </li>
              </ul>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <Link href="/best-robot-vacuum" className="button-primary">
                  Open the guide
                </Link>
                <Link href="/how-we-review" className="button-quiet">
                  How we review
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="section-space-sm bg-[#eef0ea]">
        <div className="site-shell">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <span className="editorial-rule">Start with your decision</span>
              <h2 className="mt-5 text-[2.8rem] font-bold leading-[0.98] text-[#23150f] sm:text-[3.4rem]">
                Route by the cleaning decision you are actually trying to make.
              </h2>
            </div>
            <p className="max-w-xl text-[1.02rem] leading-8 text-[#4d5862]">
              A good buying guide should tell you which pick fits your household, not show you every tool
              on the market. Pick the track closest to your decision and skip the rest.
            </p>
          </div>

          <div className="mt-10 grid gap-5 lg:grid-cols-2">
            {decisionTracks.map((track) => (
              <article key={track.href} className="sand-panel p-7">
                <p className="eyebrow">{track.eyebrow}</p>
                <h3 className="mt-4 text-[1.9rem] font-bold leading-[1.05] text-[#182028]">
                  {track.title}
                </h3>
                <p className="mt-4 text-[1rem] leading-8 text-[#4d5862]">{track.summary}</p>
                {track.available ? (
                  <Link
                    href={track.href}
                    className="mt-6 inline-flex text-[0.98rem] font-semibold text-[#51635a] underline decoration-[#90a087]/45 underline-offset-4 hover:text-[#182028]"
                  >
                    {track.cta}
                  </Link>
                ) : (
                  <span className="mt-6 inline-flex text-[0.95rem] font-semibold text-[#8d9c91]">
                    {track.cta}
                  </span>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space-sm">
        <div className="site-shell">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
            <div className="max-w-3xl">
              <span className="editorial-rule">Three desks</span>
              <h2 className="mt-5 text-[2.8rem] font-bold leading-[0.98] text-[#23150f] sm:text-[3.4rem]">
                Three ways into a cleaner home. Pick the one that matches your decision.
              </h2>
            </div>
            <p className="max-w-xl text-[1.02rem] leading-8 text-[#4d5862]">
              Each desk handles a different reader job with a different analytical lens. Two guides from
              different desks read like two different editors, because they are.
            </p>
          </div>

          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {topicalDesks.map((desk) => (
              <article key={desk.slug} className="sand-panel p-7">
                <p className="eyebrow">{desk.title}</p>
                <h3 className="mt-4 text-[1.85rem] font-bold leading-[1.05] text-[#23150f]">
                  {desk.name}
                </h3>
                <p className="mt-4 text-[1rem] leading-8 text-[#46525b]">
                  {deskHomeSummary[desk.slug] ?? desk.bio}
                </p>
                <p className="mt-4 text-[0.95rem] leading-7 text-[#5f6a73]">{desk.audience}</p>
                <Link
                  href={`/about#${desk.slug}`}
                  className="mt-6 inline-flex text-[0.98rem] font-semibold text-[#51635a] underline decoration-[#90a087]/45 underline-offset-4 hover:text-[#182028]"
                >
                  How this desk works
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space-sm bg-[#fffdf9]">
        <div className="site-shell max-w-5xl">
          <span className="editorial-rule">Why this site</span>
          <h2 className="mt-5 text-[2.6rem] font-bold leading-[1.02] text-[#23150f] sm:text-[3rem]">
            Premium picks that survive real life, not just a lab window.
          </h2>
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {siteConfig.trustPillars.map((pillar) => (
              <div key={pillar.title} className="border-l-2 border-[#c6b89b] pl-5">
                <h3 className="text-[1.4rem] font-semibold leading-[1.15] text-[#23150f]">
                  {pillar.title}
                </h3>
                <p className="mt-3 text-[1rem] leading-8 text-[#46525b]">{pillar.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space-sm bg-[#eef0ea]">
        <div className="site-shell max-w-4xl text-center">
          <span className="editorial-rule">Start here</span>
          <h2 className="mt-5 text-[2.6rem] font-bold leading-[1.02] text-[#23150f] sm:text-[3rem]">
            The fastest path is the robot vacuum guide.
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-[1.05rem] leading-8 text-[#46525b]">
            Labor math front and center, dock reliability and firmware cadence explained, and the
            failure modes that flip the ranking for specific households laid out in plain language.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link href="/best-robot-vacuum" className="button-primary">
              Open the flagship guide
            </Link>
            <Link href="/about" className="button-secondary">
              About the publication
            </Link>
          </div>
          {houseVoice ? (
            <p className="mx-auto mt-10 max-w-2xl text-[0.88rem] leading-7 text-[#7a8680]">
              Published by {houseVoice.name}. {houseVoice.bio}
            </p>
          ) : null}
        </div>
      </section>
    </>
  );
}
