import Image from "next/image";
import { HeroTemplate } from "../ProjectTemplate";
import SpacestagramMockup from "../../../assets/images/ProjectDetails/Spacestagram/SpacestagramMockup.svg";
import { ContentTemplate } from "../ProjectTemplate/ContentTemplate";
import { SidePanel } from "../ProjectTemplate/ContentTemplate/SidePanel";
import { SpacestagramMainContent } from "./SpacestagramMainContent";

export function SpacestagramProject() {
  const heroMarkup = (
    <HeroTemplate
      title="Spacestagram"
      subtitle="Spacestagram allows users to discover the wonders of space by browsing through NASA’s astronomy pictures of the day and saving their favorites."
    >
      <div>
        <Image src={SpacestagramMockup} alt="Spacestagram App" />
      </div>
    </HeroTemplate>
  );

  const projectContentMarkup = (
    <ContentTemplate>
      <SidePanel
        githubLink="https://github.com/chilucdiep/Spacestagram"
        projectLink="https://chilucdiep.github.io/Spacestagram/"
        roles={["Front-End Developer", "Product Designer"]}
        team={["-"]}
        techStack={[
          "HTML",
          "Scss",
          "TypeScript",
          "React",
          "NASA’s API",
          "Figma",
        ]}
        date="1 week"
      />
      <SpacestagramMainContent />
    </ContentTemplate>
  );

  return (
    <>
      {heroMarkup}
      {projectContentMarkup}
    </>
  );
}
