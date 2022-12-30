import styles from "./ContentTemplate.module.scss";

interface ContentTemplateProps {
  children: React.ReactNode;
}

export function ContentTemplate({ children }: ContentTemplateProps) {
  return <section className={styles.ContentTemplate}>{children}</section>;
}
