import Image from "next/image";
import Link from "next/link";

import { type Author } from "@/data/authors";
import { editor } from "@/data/publisher";
import { articleSchema, breadcrumbSchema, faqSchema, howToSchema, JsonLd } from "@/lib/schema";
import { siteConfig } from "@/config/site";
import { RichText, RichInline } from "@/lib/rich-text";

interface SupportImage {
  src: string;
  alt: string;
  caption?: string;
}

interface SupportStep {
  name: string;
  description: string;
  image?: SupportImage;
}

interface SupportSection {
  id: string;
  heading: string;
  body: string;
  image?: SupportImage;
  steps?: SupportStep[];
}

interface SupportFaq {
  question: string;
  answer: string;
}

interface SupportSourceEntry {
  label: string;
  body: string;
}

interface SupportPageProps {
  title: string;
  description: string;
  slug: string;
  publishedDate: string;
  modifiedDate?: string;
  intro: string;
  heroImage?: SupportImage;
  editorialLabel?: string;
  author: Author;
  sections: SupportSection[];
  faqs?: SupportFaq[];
  relatedLinks?: { href: string; title: string }[];
  relatedLinksHeading?: string;
  relatedLinksBlurb?: string;
  breadcrumbLabel: string;
  howToSteps?: { name: string; description: string }[];
  estimatedTime?: string;
  sourcesFooter?: SupportSourceEntry[];
}

function SectionImage({ image }: { image: SupportImage }) {
  return (
    <figure className="my-8 overflow-hidden rounded-md border border-[#d8d2c8] shadow-[0_18px_45px_rgba(24,32,40,0.06)]">
      <div className="relative aspect-video bg-[#f5f3ee]">
        <Image
          src={image.src}
          alt={image.alt}
          fill
          className="object-contain"
          sizes="(min-width: 768px) 56rem, 100vw"
        />
      </div>
      {image.caption && (
        <figcaption className="border-t border-[#e4dfd6] bg-[#fcfaf6] px-5 py-3 text-[0.88rem] leading-6 text-[#65716f]">
          {image.caption}
        </figcaption>
      )}
    </figure>
  );
}

function StepCard({ step, index }: { step: SupportStep; index: number }) {
  return (
    <div className="relative border-l-2 border-[#c8c3b8] pl-8 pb-10 last:pb-0">
      <div className="absolute -left-5 top-0 flex h-10 w-10 items-center justify-center rounded-full border-2 border-[#c8c3b8] bg-[#fffdf9] font-[family-name:var(--font-heading-family)] text-[1.1rem] font-semibold text-[#46525b]">
        {index + 1}
      </div>

      <h3 className="font-[family-name:var(--font-heading-family)] text-[1.45rem] font-semibold leading-snug text-[#23150f]">
        {step.name}
      </h3>
      <div className="mt-3 text-[1.02rem] leading-8 text-[#35231a]">
        <RichText text={step.description} />
      </div>
      {step.image && <SectionImage image={step.image} />}
    </div>
  );
}

function FaqSection({ faqs }: { faqs: SupportFaq[] }) {
  return (
    <div className="space-y-0 divide-y divide-[#e4dfd6]">
      {faqs.map((faq, i) => (
        <details key={i} className="group">
          <summary className="flex cursor-pointer items-start gap-4 py-6 text-left [&::-webkit-details-marker]:hidden">
            <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-[#c8c3b8] text-[0.72rem] font-semibold text-[#697560] transition-colors group-open:border-[#8ea087] group-open:bg-[#8ea087] group-open:text-white">
              {i + 1}
            </span>
            <span className="font-[family-name:var(--font-heading-family)] text-[1.25rem] font-semibold text-[#23150f] group-open:text-[#2f6842]">
              {faq.question}
            </span>
          </summary>
          <div className="pb-6 pl-10 text-[1.02rem] leading-8 text-[#35231a]">
            <RichText text={faq.answer} />
          </div>
        </details>
      ))}
    </div>
  );
}

function RelatedLinksGrid({ links }: { links: { href: string; title: string }[] }) {
  return (
    <div className="grid gap-3 sm:grid-cols-2">
      {links.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className="group sand-panel flex items-center gap-4 px-5 py-4 transition-colors hover:border-[#97a28f]"
        >
          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#f1f2eb] text-[0.7rem] font-bold text-[#697560] transition-colors group-hover:bg-[#8ea087] group-hover:text-white">
            →
          </span>
          <span className="text-[0.98rem] font-semibold text-[#23150f] group-hover:text-[#2f6842]">
            {link.title}
          </span>
        </Link>
      ))}
    </div>
  );
}

function SourcesFooter({ entries }: { entries: SupportSourceEntry[] }) {
  return (
    <section className="border-t border-[#d9d4cb] bg-[#f3f2ec]">
      <div className="site-shell-narrow py-10">
        <span className="editorial-rule">Sources</span>
        <h2 className="mt-4 font-[family-name:var(--font-heading-family)] text-[1.6rem] font-semibold text-[#23150f]">
          Referenced in this guide
        </h2>
        <ol className="mt-5 space-y-3 text-[0.9rem] leading-7 text-[#5a6560]">
          {entries.map((entry, i) => (
            <li key={i} id={`source-${i + 1}`} className="flex gap-3">
              <span className="shrink-0 font-semibold text-[#46525b]">[{i + 1}]</span>
              <span>
                <strong className="font-semibold text-[#35231a]">{entry.label}.</strong>{" "}
                <RichText text={entry.body} />
              </span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export function SupportPage({
  title,
  description,
  slug,
  publishedDate,
  modifiedDate,
  intro,
  heroImage,
  editorialLabel = "Guide",
  author,
  sections,
  faqs,
  relatedLinks,
  relatedLinksHeading,
  relatedLinksBlurb,
  breadcrumbLabel,
  howToSteps,
  estimatedTime,
  sourcesFooter,
}: SupportPageProps) {
  const pageUrl = `${siteConfig.url}/${slug}`;
  const resolvedModifiedDate = modifiedDate || publishedDate;

  const schemaSteps = howToSteps || sections.flatMap(
    (s) => s.steps?.map((step) => ({ name: step.name, description: step.description })) || []
  );

  return (
    <>
      <JsonLd
        data={articleSchema({
          title,
          description,
          url: pageUrl,
          datePublished: publishedDate,
          dateModified: resolvedModifiedDate,
          authorName: editor.name,
          authorUrl: `${siteConfig.url}/about`,
          imageUrl: heroImage?.src ? `${siteConfig.url}${heroImage.src}` : undefined,
        })}
      />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: siteConfig.url },
          { name: breadcrumbLabel, url: pageUrl },
        ])}
      />
      {faqs && faqs.length > 0 && <JsonLd data={faqSchema(faqs)} />}
      {schemaSteps.length > 0 && (
        <JsonLd
          data={howToSchema({
            title,
            description,
            url: pageUrl,
            steps: schemaSteps,
            estimatedTime,
          })}
        />
      )}

      <section className="relative overflow-hidden bg-[#16212a] text-[#f2f6f3]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(94,111,120,0.32),transparent_36%),radial-gradient(circle_at_bottom_right,rgba(129,147,117,0.14),transparent_28%)]" />

        <div className="site-shell relative py-8 text-sm text-[#b9c6c0]">
          <nav aria-label="Breadcrumb">
            <ol className="flex flex-wrap items-center gap-2">
              <li>
                <Link href="/" className="hover:text-white">
                  Home
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li className="text-white">{breadcrumbLabel}</li>
            </ol>
          </nav>
        </div>

        <div className="site-shell relative pb-14 sm:pb-18 lg:pb-24">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
            <div className="max-w-3xl">
              <span className="editorial-rule text-[#b8c7b2] before:bg-[#8ea087]">
                {editorialLabel}
              </span>
              <h1 className="display-title mt-6 text-[#f6fbf8]">{title}</h1>
              <p className="mt-7 max-w-2xl text-[1.2rem] leading-9 text-[#dae4de] sm:text-[1.28rem]">
                <RichInline text={intro} />
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-2 text-[0.96rem] text-[#c3d0cb]">
                <span>
                  By{" "}
                  <Link
                    href="/about"
                    className="font-semibold text-[#cbd8c5] hover:text-white"
                  >
                    {editor.name}
                  </Link>
                  <span className="ml-1 text-[#a8b5b0]">({editor.jobTitle})</span>
                </span>
                <span>Published {publishedDate}</span>
              </div>

              {estimatedTime && (
                <div className="mt-10 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-sm border border-white/10 bg-white/5 px-5 py-5 backdrop-blur-sm">
                    <p className="text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-[#b8c7b2]">
                      Time to read
                    </p>
                    <p className="mt-3 font-[family-name:var(--font-heading-family)] text-[2rem] font-semibold text-white">
                      {Math.ceil(sections.reduce((acc, s) => acc + s.body.length, 0) / 1200)} min
                    </p>
                  </div>
                  <div className="rounded-sm border border-white/10 bg-white/5 px-5 py-5 backdrop-blur-sm">
                    <p className="text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-[#b8c7b2]">
                      Sections
                    </p>
                    <p className="mt-3 font-[family-name:var(--font-heading-family)] text-[2rem] font-semibold text-white">
                      {sections.length} + FAQ
                    </p>
                  </div>
                </div>
              )}
            </div>

            {heroImage && (
              <aside className="sand-panel overflow-hidden bg-[#fbf4ea]">
                <div className="relative aspect-[4/3] bg-[radial-gradient(circle_at_center,#edf0ea_0%,#dce2da_58%,#bcc6bc_100%)]">
                  <Image
                    src={heroImage.src}
                    alt={heroImage.alt}
                    fill
                    className="object-contain p-4"
                    sizes="(min-width: 1024px) 460px, 100vw"
                    priority
                  />
                </div>
              </aside>
            )}
          </div>
        </div>
      </section>

      <section className="border-b border-[#d9d4cb] bg-[#f3f2ec]">
        <div className="site-shell py-5">
          <div className="flex flex-wrap gap-2.5">
            {sections.map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                className="rounded-sm border border-[#d0d1c8] bg-[#fffefb] px-4 py-2 text-sm font-medium text-[#42515b] hover:border-[#97a28f] hover:text-[#182028]"
              >
                {section.heading}
              </a>
            ))}
            {faqs && faqs.length > 0 && (
              <a
                href="#faq"
                className="rounded-sm border border-[#d0d1c8] bg-[#fffefb] px-4 py-2 text-sm font-medium text-[#42515b] hover:border-[#97a28f] hover:text-[#182028]"
              >
                FAQ
              </a>
            )}
          </div>
        </div>
      </section>

      {sections.map((section, sectionIndex) => {
        const isEven = sectionIndex % 2 === 0;
        const bgClass = isEven ? "bg-[#fffdf9]" : "bg-[#f8f7f2]";
        const borderClass = sectionIndex === 0 ? "" : "border-t border-[#e4dfd6]";

        return (
          <section
            key={section.id}
            id={section.id}
            className={`scroll-mt-24 ${borderClass} ${bgClass}`}
          >
            <div className="site-shell-narrow py-12 sm:py-16">
              {section.steps && (
                <span className="editorial-rule">Step by step</span>
              )}
              <h2 className={`${section.steps ? "mt-4" : ""} font-[family-name:var(--font-heading-family)] text-[2.2rem] font-semibold leading-[1.05] text-[#23150f] sm:text-[2.6rem]`}>
                {section.heading}
              </h2>

              <div className="mt-6 space-y-5 text-[1.05rem] leading-8 text-[#35231a]">
                <RichText text={section.body} />
              </div>

              {section.image && !section.steps && (
                <SectionImage image={section.image} />
              )}

              {section.steps && section.steps.length > 0 && (
                <div className="mt-10 ml-5">
                  {section.steps.map((step, i) => (
                    <StepCard key={i} step={step} index={i} />
                  ))}
                </div>
              )}

              {section.image && section.steps && (
                <SectionImage image={section.image} />
              )}
            </div>
          </section>
        );
      })}

      {faqs && faqs.length > 0 && (
        <section id="faq" className="scroll-mt-24 border-t border-[#d9d4cb] bg-[#f8f7f2]">
          <div className="site-shell-narrow section-space-sm">
            <span className="editorial-rule">Common questions</span>
            <h2 className="mt-4 font-[family-name:var(--font-heading-family)] text-[2.6rem] font-semibold leading-[1.02] text-[#23150f] sm:text-[3rem]">
              FAQ
            </h2>
            <div className="mt-8">
              <FaqSection faqs={faqs} />
            </div>
          </div>
        </section>
      )}

      {relatedLinks && relatedLinks.length > 0 && (
        <section className="border-t border-[#d9d4cb] bg-[#fffdf9]">
          <div className="site-shell-narrow section-space-sm">
            <span className="editorial-rule">Related guides</span>
            <h2 className="mt-4 font-[family-name:var(--font-heading-family)] text-[2.2rem] font-semibold text-[#23150f]">
              {relatedLinksHeading || "Pair this guide with the right tools"}
            </h2>
            {relatedLinksBlurb && (
              <p className="mt-4 text-[1.05rem] leading-8 text-[#4f5b64]">
                {relatedLinksBlurb}
              </p>
            )}
            <div className="mt-8">
              <RelatedLinksGrid links={relatedLinks} />
            </div>
          </div>
        </section>
      )}

      {sourcesFooter && sourcesFooter.length > 0 && (
        <SourcesFooter entries={sourcesFooter} />
      )}

      <section className="border-t border-[#d9d4cb] bg-[#f3f2ec]">
        <div className="site-shell-narrow section-space-sm">
          <aside
            aria-label={`About ${editor.name}`}
            className="editorial-card-soft flex flex-col gap-4 p-6 sm:flex-row sm:items-start sm:gap-5 sm:p-7"
          >
            <div className="shrink-0">
              <Image
                src={editor.headshot}
                alt={editor.name}
                width={64}
                height={64}
                className="h-16 w-16 rounded-full object-cover"
              />
            </div>
            <div className="flex min-w-0 flex-1 flex-col gap-2">
              <div>
                <p className="font-[family-name:var(--font-heading-family)] text-xl font-semibold text-[#2C1810]">
                  {editor.name}
                </p>
                <p className="text-sm text-[#4F7B62]">{editor.jobTitle}</p>
              </div>
              <p className="text-sm leading-7 text-[#4e3b31]">{editor.visibleBio || editor.bio}</p>
              <Link href="/about" className="button-quiet mt-1 text-sm">
                More about {editor.displayName}
              </Link>
            </div>
          </aside>
          {/* author prop retained internally for editorial desk voice tooling */}
          {author.slug && <span className="sr-only" data-editorial-desk={author.slug} />}
        </div>
      </section>
    </>
  );
}
