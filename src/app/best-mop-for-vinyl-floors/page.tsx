import { Metadata } from "next";
import { authors } from "@/data/authors";
import { bestMopForVinylFloorsContent } from "@/data/content/best-mop-for-vinyl-floors";
import { generatePageMetadata } from "@/lib/metadata";
import { SupportPage } from "@/components/pages/support-page";

const author = authors.find((a) => a.slug === bestMopForVinylFloorsContent.authorSlug)!;

export const metadata: Metadata = generatePageMetadata({
  title: bestMopForVinylFloorsContent.title,
  description: bestMopForVinylFloorsContent.description,
  slug: bestMopForVinylFloorsContent.slug,
});

export default function Page() {
  return (
    <SupportPage
      title={bestMopForVinylFloorsContent.title}
      description={bestMopForVinylFloorsContent.description}
      slug={bestMopForVinylFloorsContent.slug}
      publishedDate={bestMopForVinylFloorsContent.publishedDate}
      modifiedDate={bestMopForVinylFloorsContent.modifiedDate}
      intro={bestMopForVinylFloorsContent.intro}
      heroImage={bestMopForVinylFloorsContent.heroImage}
      editorialLabel={bestMopForVinylFloorsContent.editorialLabel}
      quickPicks={bestMopForVinylFloorsContent.quickPicks}
      author={author}
      sections={bestMopForVinylFloorsContent.sections}
      faqs={bestMopForVinylFloorsContent.faqs}
      relatedLinks={bestMopForVinylFloorsContent.relatedLinks}
      relatedLinksHeading={bestMopForVinylFloorsContent.relatedLinksHeading}
      relatedLinksBlurb={bestMopForVinylFloorsContent.relatedLinksBlurb}
      breadcrumbLabel={bestMopForVinylFloorsContent.breadcrumbLabel}
      estimatedTime={bestMopForVinylFloorsContent.estimatedTime}
      sourcesFooter={bestMopForVinylFloorsContent.sourcesFooter}
      evidenceSummary={bestMopForVinylFloorsContent.evidenceSummary}
    />
  );
}
