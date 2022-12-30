import styles from "./ContentTemplate.module.scss";
import { SidePanel } from "./SidePanel";

export function ContentTemplate() {
  return (
    <section className={styles.ContentTemplate}>
      <SidePanel />
    </section>
  );
}
