import Image from "next/image";
import { HeroTemplate } from "../ProjectTemplate";
import VroomMockup from "../../../assets/images/ProjectDetails/Vroom/VroomMockup.svg";
import { ContentTemplate } from "../ProjectTemplate/ContentTemplate";
import { SidePanel } from "../ProjectTemplate/ContentTemplate/SidePanel";
import { VroomMainContent } from "./VroomMainContent";
import { motion } from "framer-motion";

export function VroomProject() {
  const mockupsVariant = {
    hidden: { y: 35, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        delay: 0.1,
        duration: 0.4,
      },
    },
  };

  const heroMarkup = (
    <HeroTemplate
      title="Vroom 2"
      subtitle="Vroom2 is a Slingshot vehicle rental company that provides unique and exhilarating experiences to customers through its website and rental services."
    >
      <motion.div variants={mockupsVariant} initial="hidden" animate="visible">
        <Image src={VroomMockup} alt="Vroom2 Website Mockups" />
      </motion.div>
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
