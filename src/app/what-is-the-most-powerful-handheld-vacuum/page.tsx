import { Metadata } from "next";
import { authors } from "@/data/authors";
import { whatIsTheMostPowerfulHandheldVacuumContent } from "@/data/content/what-is-the-most-powerful-handheld-vacuum";
import { generatePageMetadata } from "@/lib/metadata";
import { SupportPage } from "@/components/pages/support-page";

const author = authors.find((a) => a.slug === whatIsTheMostPowerfulHandheldVacuumContent.authorSlug)!;

export const metadata: Metadata = generatePageMetadata({
  title: whatIsTheMostPowerfulHandheldVacuumContent.title,
  description: whatIsTheMostPowerfulHandheldVacuumContent.description,
  slug: whatIsTheMostPowerfulHandheldVacuumContent.slug,
});

export default function Page() {
  return (
    <SupportPage
      title={whatIsTheMostPowerfulHandheldVacuumContent.title}
      description={whatIsTheMostPowerfulHandheldVacuumContent.description}
      slug={whatIsTheMostPowerfulHandheldVacuumContent.slug}
      publishedDate={whatIsTheMostPowerfulHandheldVacuumContent.publishedDate}
      modifiedDate={whatIsTheMostPowerfulHandheldVacuumContent.modifiedDate}
      intro={whatIsTheMostPowerfulHandheldVacuumContent.intro}
      heroImage={whatIsTheMostPowerfulHandheldVacuumContent.heroImage}
      editorialLabel={whatIsTheMostPowerfulHandheldVacuumContent.editorialLabel}
      author={author}
      sections={whatIsTheMostPowerfulHandheldVacuumContent.sections}
      faqs={whatIsTheMostPowerfulHandheldVacuumContent.faqs}
      relatedLinks={whatIsTheMostPowerfulHandheldVacuumContent.relatedLinks}
      breadcrumbLabel={whatIsTheMostPowerfulHandheldVacuumContent.breadcrumbLabel}
      estimatedTime={whatIsTheMostPowerfulHandheldVacuumContent.estimatedTime}
      sourcesFooter={whatIsTheMostPowerfulHandheldVacuumContent.sourcesFooter}
    />
  );
}
