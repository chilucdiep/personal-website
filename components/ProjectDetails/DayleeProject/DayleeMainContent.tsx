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
        For better consistency throughout the app and a better developer
        experience, I created and implemented the Daylee’s design system and
        component library. This design system lay down the rules to follow when
        it comes to typography, color, buttons, input, branding, and more.
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
        The pomodoro timer is a time manaagement method that promotes focus time
        with its 25 minutes work interval followed by a 5 minutes break. In
        addition of starting and pausing the timer, this feature also keeps
        track of the number of cycles/rounds completed paired with a goal of
        rounds to achieve.
      </p>
      <div className={styles.TwoColumnGrid}>
        <Image src={PomodoroCode} alt="Pomodoro Code" />
        <Image src={Pomodoro} alt="Pomodoro" />
      </div>
      <h4>To-do list</h4>
      <p>
        The to-do list allows the user to plan their daily tasks with the option
        to reflect on the day for gratitude practice or introspection. This
        feature was implemented with the useRef hook to allow the user the
        option to add a to-do by pressing the “Enter” key. This gives the
        component a seemless user experience.
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
        • Build highly re-usable and flexible components (Custom design system)
      </p>
      <p>• Get more familiar with manipulating time in JavaScript</p>
      <p>• More to come.. Project still on going</p>
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
      {featuresMarkup}
      {lessonsMarkup}
    </MainContent>
  );
}
