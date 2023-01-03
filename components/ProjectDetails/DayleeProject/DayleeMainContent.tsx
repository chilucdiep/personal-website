import { MainContent } from "../ProjectTemplate/ContentTemplate/MainContent";
import styles from "../ProjectTemplate/ContentTemplate/MainContent/MainContent.module.scss";

export function DayleeMainContent() {
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
      <div className={styles.ContentSection}>
        <h2>Design system</h2>
        <p>
          For better consistency throughout the app and a better developer
          experience, I created and implemented the Daylee’s design system and
          component library. This design system lay down the rules to follow
          when it comes to typography, color, buttons, input, branding, and
          more.
        </p>
      </div>
    </MainContent>
  );
}
