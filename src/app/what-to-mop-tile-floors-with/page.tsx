import { Metadata } from "next";
import { authors } from "@/data/authors";
import { whatToMopTileFloorsWithContent } from "@/data/content/what-to-mop-tile-floors-with";
import { generatePageMetadata } from "@/lib/metadata";
import { SupportPage } from "@/components/pages/support-page";

const author = authors.find((a) => a.slug === whatToMopTileFloorsWithContent.authorSlug)!;

export const metadata: Metadata = generatePageMetadata({
  title: whatToMopTileFloorsWithContent.title,
  description: whatToMopTileFloorsWithContent.description,
  slug: whatToMopTileFloorsWithContent.slug,
});

export default function Page() {
  return (
    <SupportPage
      title={whatToMopTileFloorsWithContent.title}
      description={whatToMopTileFloorsWithContent.description}
      slug={whatToMopTileFloorsWithContent.slug}
      publishedDate={whatToMopTileFloorsWithContent.publishedDate}
      modifiedDate={whatToMopTileFloorsWithContent.modifiedDate}
      intro={whatToMopTileFloorsWithContent.intro}
      heroImage={whatToMopTileFloorsWithContent.heroImage}
      editorialLabel={whatToMopTileFloorsWithContent.editorialLabel}
      author={author}
      sections={whatToMopTileFloorsWithContent.sections}
      faqs={whatToMopTileFloorsWithContent.faqs}
      relatedLinks={whatToMopTileFloorsWithContent.relatedLinks}
      breadcrumbLabel={whatToMopTileFloorsWithContent.breadcrumbLabel}
      estimatedTime={whatToMopTileFloorsWithContent.estimatedTime}
      sourcesFooter={whatToMopTileFloorsWithContent.sourcesFooter}
    />
  );
}
