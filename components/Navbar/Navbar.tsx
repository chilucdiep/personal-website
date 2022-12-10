import Link from "next/link";
import { SocialIcon } from "react-social-icons";
import styles from "./Navbar.module.scss";

export function Navbar() {
  return (
    <nav className={styles.Navbar}>
      <div>Logo</div>
      <div className={styles.Links}>
        <Link href="/">Work</Link>
        <Link href="/">About</Link>
        <Link href="/">Blog</Link>
      </div>
      <div className={styles.SocialLinks}>
        <SocialIcon
          bgColor="transparent"
          fgColor="grey"
          url="https://www.linkedin.com/in/chi-luc-diep/"
          href="_target"
        />
        <SocialIcon
          bgColor="transparent"
          fgColor="grey"
          url="https://github.com/chilucdiep"
          href="_target"
        />
        <SocialIcon
          bgColor="transparent"
          fgColor="grey"
          url="mailto:chilucdiep@hotmail.com"
          href="_target"
        />
      </div>
    </nav>
  );
}
