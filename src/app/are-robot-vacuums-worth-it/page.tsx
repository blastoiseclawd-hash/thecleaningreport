import { Metadata } from "next";
import { authors } from "@/data/authors";
import { areRobotVacuumsWorthItContent } from "@/data/content/are-robot-vacuums-worth-it";
import { generatePageMetadata } from "@/lib/metadata";
import { SupportPage } from "@/components/pages/support-page";

const author = authors.find((a) => a.slug === areRobotVacuumsWorthItContent.authorSlug)!;

export const metadata: Metadata = generatePageMetadata({
  title: areRobotVacuumsWorthItContent.title,
  description: areRobotVacuumsWorthItContent.description,
  slug: areRobotVacuumsWorthItContent.slug,
});

export default function Page() {
  return (
    <SupportPage
      title={areRobotVacuumsWorthItContent.title}
      description={areRobotVacuumsWorthItContent.description}
      slug={areRobotVacuumsWorthItContent.slug}
      publishedDate={areRobotVacuumsWorthItContent.publishedDate}
      modifiedDate={areRobotVacuumsWorthItContent.modifiedDate}
      intro={areRobotVacuumsWorthItContent.intro}
      heroImage={areRobotVacuumsWorthItContent.heroImage}
      editorialLabel={areRobotVacuumsWorthItContent.editorialLabel}
      author={author}
      sections={areRobotVacuumsWorthItContent.sections}
      faqs={areRobotVacuumsWorthItContent.faqs}
      relatedLinks={areRobotVacuumsWorthItContent.relatedLinks}
      relatedLinksHeading={areRobotVacuumsWorthItContent.relatedLinksHeading}
      relatedLinksBlurb={areRobotVacuumsWorthItContent.relatedLinksBlurb}
      breadcrumbLabel={areRobotVacuumsWorthItContent.breadcrumbLabel}
      estimatedTime={areRobotVacuumsWorthItContent.estimatedTime}
      sourcesFooter={areRobotVacuumsWorthItContent.sourcesFooter}
    />
  );
}
