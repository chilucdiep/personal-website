import styles from "./DayleeProject.module.scss";
import Image from "next/image";
import { HeroTemplate } from "../ProjectTemplate";
import DayleeDashboard from "../../../assets/images/ProjectDetails/Daylee/DayleeDashboard.svg";
import DayleeLanding from "../../../assets/images/ProjectDetails/Daylee/DayleeLanding.svg";

export function DayleeProject() {
  return (
    <div>
      <HeroTemplate
        title="Daylee"
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
          <Image src={DayleeLanding} alt="Daylee DayleeLanding" />
        </div>
      </HeroTemplate>
    </div>
  );
}
