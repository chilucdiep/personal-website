import Image from "next/image";
import { HeroTemplate } from "../ProjectTemplate";
import VroomMockup from "../../../assets/images/ProjectDetails/Vroom/VroomMockup.svg";
import { ContentTemplate } from "../ProjectTemplate/ContentTemplate";
import { SidePanel } from "../ProjectTemplate/ContentTemplate/SidePanel";
import { VroomMainContent } from "./VroomMainContent";

export function VroomProject() {
  const heroMarkup = (
    <HeroTemplate
      title="Vroom 2"
      subtitle="Spacestagram allows users to discover the wonders of space by browsing through NASA’s astronomy pictures of the day and saving their favorites."
    >
      <div>
        <Image src={VroomMockup} alt="Spacestagram App" />
      </div>
    </HeroTemplate>
  );

  const projectContentMarkup = (
    <ContentTemplate>
      <SidePanel
        githubLink="https://github.com/chilucdiep/vroom2"
        projectLink="https://www.vroom2.ca/"
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
      <VroomMainContent />
    </ContentTemplate>
  );

  return (
    <>
      {heroMarkup}
      {projectContentMarkup}
    </>
  );
}
