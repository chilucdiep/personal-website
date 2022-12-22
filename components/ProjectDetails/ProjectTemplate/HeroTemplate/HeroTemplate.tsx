import styles from "./HeroTemplate.module.scss";

export function HeroTemplate() {
  return (
    <section className={styles.Hero}>
      <h1 className="Title">Daylee</h1>
      <p className={styles.Caption}>
        The productivity web app where users can utilize various tools and
        widgets such as habit trackers and bullet journaling to organize their
        schedule and life.
      </p>
      <div className={styles.Mockups}>
        {/* <img
      className={styles.DayleeDashboardImg}
      src={DayleeDashboard}
      alt="Daylee Dashboard"
    />
    <img src={DayleeLanding} alt="Daylee DayleeLanding" /> */}
      </div>
    </section>
  );
}
