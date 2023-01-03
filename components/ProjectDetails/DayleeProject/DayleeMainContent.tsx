import Image from "next/image";
import { MainContent } from "../ProjectTemplate/ContentTemplate/MainContent";
import styles from "../ProjectTemplate/ContentTemplate/MainContent/MainContent.module.scss";
import DesignSystem from "../../../assets/images/ProjectDetails/Daylee/DesignSystem.svg";
import TypoReturn from "../../../assets/images/ProjectDetails/Daylee/TypoReturn.svg";
import TypoProps from "../../../assets/images/ProjectDetails/Daylee/TypoProps.svg";
import TypoElement from "../../../assets/images/ProjectDetails/Daylee/TypoElement.svg";
import TypoVariants from "../../../assets/images/ProjectDetails/Daylee/TypoVariants.svg";

export function DayleeMainContent() {
  const designSystemMarkup = (
    <div className={styles.ContentSection}>
      <h2>Design system</h2>
      <p>
        For better consistency throughout the app and a better developer
        experience, I created and implemented the Daylee’s design system and
        component library. This design system lay down the rules to follow when
        it comes to typography, color, buttons, input, branding, and more.
      </p>
      <Image src={DesignSystem} alt="Design System" />
      <p>
        Here is a simple example of a flexible, re-usable, easy to use component
        of the design system I implemented.
      </p>
      <h4>Typography Component</h4>
      <Image src={TypoReturn} alt="Typo Return" className={styles.NoMargin} />
      <div className={styles.ThreeColumnGrid}>
        <div>
          <p>Takes in props</p>
          <Image src={TypoProps} alt="Typo Props" />
        </div>
        <div>
          <p>To define element type</p>
          <Image src={TypoElement} alt="Typo Element" />
        </div>
        <div>
          <p>And the variants & styling</p>
          <Image src={TypoVariants} alt="Typo Variants" />
        </div>
      </div>
    </div>
  );

  return (
    <MainContent
      projectBrief="I was responsible for designing and building the Daylee website and
  web app using React. This includes creating & implementing a design
  system and building a landing page & dashboard with multiple
  productivity tools such as a pomodoro timer, habit tracker, to-do
  lists, and more."
      problem="Students & professionals can only organize their life and schedules
  using either analog methods, a multitude of productivity tools that
  scatter important information, or a software with a big learning curve
  like Notion."
      goal="Provide an easy and intuitive way to balance work, projects, social
  life and personal growth in a all-in-one solution."
    >
      {designSystemMarkup}
    </MainContent>
  );
}
