import Link from "next/link";
import Image from "next/image";
import { SocialIcon } from "react-social-icons";
import styles from "./Navbar.module.scss";
import Logo from "../../assets/images/Logo.svg";

export function Navbar() {
  return (
    <nav className={styles.Navbar}>
      <Link href="/">
        <Image src={Logo} width={60} alt="Logo of the website" />
      </Link>
      <div className={styles.Links}>
        <Link href="/">Work</Link>
        <Link href="/">About</Link>
        <Link href="/">Blog</Link>
      </div>
      <div className={styles.SocialLinks}>
        <SocialIcon
          bgColor="transparent"
          fgColor="black"
          url="https://www.linkedin.com/in/chi-luc-diep/"
          href="_target"
          className={styles.SocialItem}
        />
        <SocialIcon
          bgColor="transparent"
          fgColor="black"
          url="https://github.com/chilucdiep"
          href="_target"
          className={styles.SocialItem}
        />
        <SocialIcon
          bgColor="transparent"
          fgColor="black"
          url="mailto:chilucdiep@hotmail.com"
          href="_target"
          className={styles.SocialItem}
        />
      </div>
    </nav>
  );
}
