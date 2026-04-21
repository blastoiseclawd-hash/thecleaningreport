import { Metadata } from "next";
import { authors } from "@/data/authors";
import { isRoombaTheBestRobotVacuumContent } from "@/data/content/is-roomba-the-best-robot-vacuum";
import { generatePageMetadata } from "@/lib/metadata";
import { SupportPage } from "@/components/pages/support-page";

const author = authors.find((a) => a.slug === isRoombaTheBestRobotVacuumContent.authorSlug)!;

export const metadata: Metadata = generatePageMetadata({
  title: isRoombaTheBestRobotVacuumContent.title,
  description: isRoombaTheBestRobotVacuumContent.description,
  slug: isRoombaTheBestRobotVacuumContent.slug,
});

export default function Page() {
  return (
    <SupportPage
      title={isRoombaTheBestRobotVacuumContent.title}
      description={isRoombaTheBestRobotVacuumContent.description}
      slug={isRoombaTheBestRobotVacuumContent.slug}
      publishedDate={isRoombaTheBestRobotVacuumContent.publishedDate}
      modifiedDate={isRoombaTheBestRobotVacuumContent.modifiedDate}
      intro={isRoombaTheBestRobotVacuumContent.intro}
      heroImage={isRoombaTheBestRobotVacuumContent.heroImage}
      editorialLabel={isRoombaTheBestRobotVacuumContent.editorialLabel}
      author={author}
      sections={isRoombaTheBestRobotVacuumContent.sections}
      faqs={isRoombaTheBestRobotVacuumContent.faqs}
      relatedLinks={isRoombaTheBestRobotVacuumContent.relatedLinks}
      breadcrumbLabel={isRoombaTheBestRobotVacuumContent.breadcrumbLabel}
      estimatedTime={isRoombaTheBestRobotVacuumContent.estimatedTime}
      sourcesFooter={isRoombaTheBestRobotVacuumContent.sourcesFooter}
    />
  );
}
