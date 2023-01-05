import styles from "./SpacestagramProject.module.scss";
import Image from "next/image";
import { HeroTemplate } from "../ProjectTemplate";
import DayleeDashboard from "../../../assets/images/ProjectDetails/Daylee/DayleeDashboard.svg";
import DayleeLanding from "../../../assets/images/ProjectDetails/Daylee/DayleeLanding.svg";
import { ContentTemplate } from "../ProjectTemplate/ContentTemplate";
import { SidePanel } from "../ProjectTemplate/ContentTemplate/SidePanel";
import { DayleeMainContent } from "./DayleeMainContent";

export function SpacestagramProject() {
  const heroMarkup = (
    <HeroTemplate
      title="Spacestagram"
      subtitle="The productivity web app where users can utilize various tools and
        widgets such as habit trackers and bullet journaling to organize their
        schedule and life."
    >
      <div className={styles.Mockups}>
        <Image
          className={styles.DayleeDashboardImg}
          src={DayleeDashboard}
          alt="Daylee Dashboard"
        />
        <Image
          src={DayleeLanding}
          alt="Daylee DayleeLanding"
          width={480}
          height={830}
        />
      </div>
    </HeroTemplate>
  );

  const projectContentMarkup = (
    <ContentTemplate>
      <SidePanel
        githubLink="https://github.com/Daylee-Digital-Journal/daylee"
        projectLink="https://daylee-web.herokuapp.com/"
        roles={["Front-End Developer", "Product Designer"]}
        team={["Back-End Developer"]}
        techStack={[
          "HTML",
          "Scss",
          "TypeScript",
          "React",
          "Next.js",
          "GraphQL",
          "Figma",
        ]}
        date="On going"
      />
      <DayleeMainContent />
    </ContentTemplate>
  );

  return (
    <>
      {heroMarkup}
      {projectContentMarkup}
    </>
  );
}
