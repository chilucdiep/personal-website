import Image from "next/image";
import { MainContent } from "../ProjectTemplate/ContentTemplate/MainContent";
import styles from "../ProjectTemplate/ContentTemplate/MainContent/MainContent.module.scss";
import DesignSystem from "../../../assets/images/ProjectDetails/Daylee/DesignSystem.svg";
import TypoReturn from "../../../assets/images/ProjectDetails/Daylee/TypoReturn.svg";
import TypoProps from "../../../assets/images/ProjectDetails/Daylee/TypoProps.svg";
import TypoElement from "../../../assets/images/ProjectDetails/Daylee/TypoElement.svg";
import TypoVariants from "../../../assets/images/ProjectDetails/Daylee/TypoVariants.svg";
import PomodoroCode from "../../../assets/images/ProjectDetails/Daylee/PomodoroCode.svg";
import Pomodoro from "../../../assets/images/ProjectDetails/Daylee/Pomodoro.svg";
import TodoCode from "../../../assets/images/ProjectDetails/Daylee/TodoCode.svg";
import Todo from "../../../assets/images/ProjectDetails/Daylee/Todo.svg";

export function DayleeMainContent() {
  const designSystemMarkup = (
    <div className={styles.ContentSection}>
      <h2>Design system</h2>
      <p>
        To improve consistency throughout the app and streamline the development
        process, I developed and implemented a design system and component
        library for Daylee. The design system includes guidelines for
        typography, color, buttons, input forms, branding, and more.
      </p>
      <Image src={DesignSystem} alt="Design System" className={styles.Full} />
      <p>
        Here is a simple example of a flexible, re-usable, easy to use component
        of the design system I implemented.
      </p>
      <h4>Typography Component</h4>
      <Image
        src={TypoReturn}
        alt="Typo Return"
        className={`${styles.NoMargin} ${styles.Full}`}
      />
      <div className={styles.ThreeColumnGrid}>
        <div>
          <p>Takes in props</p>
          <Image src={TypoProps} alt="Typo Props" className={styles.Full} />
        </div>
        <div>
          <p>To define element type</p>
          <Image src={TypoElement} alt="Typo Element" className={styles.Full} />
        </div>
        <div>
          <p>And the variants & styling</p>
          <Image
            src={TypoVariants}
            alt="Typo Variants"
            className={styles.Full}
          />
        </div>
      </div>
    </div>
  );

  const featuresMarkup = (
    <div className={styles.ContentSection}>
      <h2>Some cool features</h2>
      <h4>Pomodoro timer</h4>
      <p>
        The pomodoro timer is a powerful time management tool that helps users
        stay focused and productive. With 25-minute work intervals followed by
        5-minute breaks, the timer promotes a healthy work-life balance and
        helps users stay on track.
      </p>
      <p>
        In addition to starting and pausing the timer, the feature also tracks
        the number of cycles/rounds completed and allows users to set goals for
        their progress. As a result, the pomodoro timer has had a significant
        impact on the efficiency and effectiveness of our users, helping them to
        better manage their time and achieve their goals.
      </p>
      <div className={styles.TwoColumnGrid}>
        <Image src={PomodoroCode} alt="Pomodoro Code" />
        <Image src={Pomodoro} alt="Pomodoro" />
      </div>
      <h4>To-do list</h4>
      <p>
        The to-do list is a powerful tool for helping users plan and prioritize
        their daily tasks. It's a simple and effective way to stay on top of
        everything that needs to be done.
      </p>
      <p>
        To add additional value to the to-do list, the app includes the option
        for users to reflect on the day for gratitude practice or introspection.
        This helps users take a well-rounded and mindful approach to
        productivity, and can make a big difference in their overall happiness
        and well-being.
      </p>
      <p>
        To ensure a seamless user experience, we've implemented the to-do list
        with the useRef hook. This allows users to add a to-do by pressing the
        "Enter" key, making it easy and intuitive to use.
      </p>
      <p>
        Overall, the to-do list has a significant impact on the efficiency and
        productivity of our users. It's a simple but powerful tool that helps
        them better manage their time and achieve their goals.
      </p>
      <div className={styles.TwoColumnGrid}>
        <Image src={TodoCode} alt="Todo Code" />
        <Image src={Todo} alt="Todo" />
      </div>
    </div>
  );

  const lessonsMarkup = (
    <div className={styles.ContentSection}>
      <h2>Lessons learned</h2>
      <p>
        Through building the Daylee app, I learned the importance of creating
        highly reusable and flexible components, as demonstrated by the custom
        design system I implemented. I also gained valuable experience working
        with time manipulation in JavaScript. As the project continues, I look
        forward to learning more and improving the app even further
      </p>
    </div>
  );

  return (
    <MainContent
      projectBrief="As the lead designer and developer for the Daylee project, I used React to create a comprehensive website and web app that helps students and professionals organize their lives and schedules in one central location. My responsibilities included establishing a design system that ensured a cohesive and consistent look and feel throughout the app, as well as building a landing page and dashboard with a range of productivity tools including a customizable pomodoro timer, habit tracker, and to-do lists. I also implemented various features such as goal setting, gratitude practice and progress updates to help users manage their work, projects, social life, and personal growth in an intuitive and efficient way."
      problem="Organizing life and schedules can be difficult with the limited options available, including analog methods, scattered productivity tools, or complex software like Notion."
      goal="Daylee aims to provide users with a simple and intuitive platform that helps them balance their work, projects, social life, and personal growth in one central location. The app offers a comprehensive, all-in-one solution that includes a range of productivity tools and features to support organization and time management"
    >
      {designSystemMarkup}
      {featuresMarkup}
      {lessonsMarkup}
    </MainContent>
  );
}
