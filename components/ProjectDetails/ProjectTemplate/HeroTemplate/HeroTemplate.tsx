import styles from "./HeroTemplate.module.scss";

interface HeroTemplateProps {
  title: string;
  subtitle: string;
  children: React.ReactNode;
}

export function HeroTemplate({ title, subtitle, children }: HeroTemplateProps) {
  return (
    <section className={styles.Hero}>
      <h1 className="Title">{title}</h1>
      <p className={styles.Caption}>{subtitle}</p>
      {children}
    </section>
  );
}
