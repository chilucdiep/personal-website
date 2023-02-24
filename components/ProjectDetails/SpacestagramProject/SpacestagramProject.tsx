import Image from "next/image";
import { HeroTemplate } from "../ProjectTemplate";
import SpacestagramMockup from "../../../assets/images/ProjectDetails/Spacestagram/SpacestagramMockup.svg";
import { ContentTemplate } from "../ProjectTemplate/ContentTemplate";
import { SidePanel } from "../ProjectTemplate/ContentTemplate/SidePanel";
import { SpacestagramMainContent } from "./SpacestagramMainContent";
import { motion } from "framer-motion";

export function SpacestagramProject() {
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
      title="Spacestagram"
      subtitle="Spacestagram allows users to discover the wonders of space by browsing through NASA’s astronomy pictures of the day and saving their favorites."
    >
      <motion.div variants={mockupsVariant} initial="hidden" animate="visible">
        <Image src={SpacestagramMockup} alt="Spacestagram App" />
      </motion.div>
    </HeroTemplate>
  );

  const projectContentMarkup = (
    <ContentTemplate>
      <SidePanel
        githubLink="https://github.com/chilucdiep/Spacestagram"
        projectLink="https://spacestagram-ten-sigma.vercel.app/"
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
