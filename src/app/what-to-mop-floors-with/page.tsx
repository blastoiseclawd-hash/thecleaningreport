import { Metadata } from "next";
import { authors } from "@/data/authors";
import { whatToMopFloorsWithContent } from "@/data/content/what-to-mop-floors-with";
import { generatePageMetadata } from "@/lib/metadata";
import { SupportPage } from "@/components/pages/support-page";

const author = authors.find((a) => a.slug === whatToMopFloorsWithContent.authorSlug)!;

export const metadata: Metadata = generatePageMetadata({
  title: whatToMopFloorsWithContent.title,
  description: whatToMopFloorsWithContent.description,
  slug: whatToMopFloorsWithContent.slug,
});

export default function Page() {
  return (
    <SupportPage
      title={whatToMopFloorsWithContent.title}
      description={whatToMopFloorsWithContent.description}
      slug={whatToMopFloorsWithContent.slug}
      publishedDate={whatToMopFloorsWithContent.publishedDate}
      modifiedDate={whatToMopFloorsWithContent.modifiedDate}
      intro={whatToMopFloorsWithContent.intro}
      heroImage={whatToMopFloorsWithContent.heroImage}
      editorialLabel={whatToMopFloorsWithContent.editorialLabel}
      author={author}
      sections={whatToMopFloorsWithContent.sections}
      faqs={whatToMopFloorsWithContent.faqs}
      relatedLinks={whatToMopFloorsWithContent.relatedLinks}
      relatedLinksHeading={whatToMopFloorsWithContent.relatedLinksHeading}
      relatedLinksBlurb={whatToMopFloorsWithContent.relatedLinksBlurb}
      breadcrumbLabel={whatToMopFloorsWithContent.breadcrumbLabel}
      estimatedTime={whatToMopFloorsWithContent.estimatedTime}
      sourcesFooter={whatToMopFloorsWithContent.sourcesFooter}
    />
  );
}
