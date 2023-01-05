import styles from "./SpacestagramProject.module.scss";
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
      subtitle="Spacestagram is a web app where space enthousiasts can browse through NASA’s astronomy pictures of the day and save their favorites."
    >
      <div className={styles.Mockups}>
        <Image
          className={styles.DayleeDashboardImg}
          src={SpacestagramMockup}
          alt="Spacestagram App"
        />
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
