import { Metadata } from "next";
import { authors } from "@/data/authors";
import { howToCleanHardwoodFloorsContent } from "@/data/content/how-to-clean-hardwood-floors";
import { generatePageMetadata } from "@/lib/metadata";
import { SupportPage } from "@/components/pages/support-page";

const author = authors.find((a) => a.slug === howToCleanHardwoodFloorsContent.authorSlug)!;

export const metadata: Metadata = generatePageMetadata({
  title: howToCleanHardwoodFloorsContent.title,
  description: howToCleanHardwoodFloorsContent.description,
  slug: howToCleanHardwoodFloorsContent.slug,
});

export default function Page() {
  return (
    <SupportPage
      title={howToCleanHardwoodFloorsContent.title}
      description={howToCleanHardwoodFloorsContent.description}
      slug={howToCleanHardwoodFloorsContent.slug}
      publishedDate={howToCleanHardwoodFloorsContent.publishedDate}
      modifiedDate={howToCleanHardwoodFloorsContent.modifiedDate}
      intro={howToCleanHardwoodFloorsContent.intro}
      heroImage={howToCleanHardwoodFloorsContent.heroImage}
      editorialLabel={howToCleanHardwoodFloorsContent.editorialLabel}
      author={author}
      sections={howToCleanHardwoodFloorsContent.sections}
      faqs={howToCleanHardwoodFloorsContent.faqs}
      relatedLinks={howToCleanHardwoodFloorsContent.relatedLinks}
      relatedLinksHeading={howToCleanHardwoodFloorsContent.relatedLinksHeading}
      relatedLinksBlurb={howToCleanHardwoodFloorsContent.relatedLinksBlurb}
      breadcrumbLabel={howToCleanHardwoodFloorsContent.breadcrumbLabel}
      estimatedTime={howToCleanHardwoodFloorsContent.estimatedTime}
      sourcesFooter={howToCleanHardwoodFloorsContent.sourcesFooter}
    />
  );
}
