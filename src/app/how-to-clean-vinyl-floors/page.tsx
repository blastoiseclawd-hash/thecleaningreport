import { Metadata } from "next";
import { authors } from "@/data/authors";
import { howToCleanVinylFloorsContent } from "@/data/content/how-to-clean-vinyl-floors";
import { generatePageMetadata } from "@/lib/metadata";
import { SupportPage } from "@/components/pages/support-page";

const author = authors.find((a) => a.slug === howToCleanVinylFloorsContent.authorSlug)!;

export const metadata: Metadata = generatePageMetadata({
  title: howToCleanVinylFloorsContent.title,
  description: howToCleanVinylFloorsContent.description,
  slug: howToCleanVinylFloorsContent.slug,
});

export default function Page() {
  return (
    <SupportPage
      title={howToCleanVinylFloorsContent.title}
      description={howToCleanVinylFloorsContent.description}
      slug={howToCleanVinylFloorsContent.slug}
      publishedDate={howToCleanVinylFloorsContent.publishedDate}
      modifiedDate={howToCleanVinylFloorsContent.modifiedDate}
      intro={howToCleanVinylFloorsContent.intro}
      heroImage={howToCleanVinylFloorsContent.heroImage}
      editorialLabel={howToCleanVinylFloorsContent.editorialLabel}
      author={author}
      sections={howToCleanVinylFloorsContent.sections}
      faqs={howToCleanVinylFloorsContent.faqs}
      relatedLinks={howToCleanVinylFloorsContent.relatedLinks}
      breadcrumbLabel={howToCleanVinylFloorsContent.breadcrumbLabel}
      estimatedTime={howToCleanVinylFloorsContent.estimatedTime}
      sourcesFooter={howToCleanVinylFloorsContent.sourcesFooter}
    />
  );
}
