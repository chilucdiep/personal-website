import { SocialIcon } from "react-social-icons";
import Image from "next/image";
import Link from "next/link";
import Logo from "../../assets/images/Logo.svg";
import styles from "./Navbar.module.scss";
import { SOCIAL_LINKS } from "../../assets/constants/socialLinks";

export function Navbar() {
  const navLinksMarkup = (
    <div className={styles.Links}>
      <Link href="/">Work</Link>
      <Link href="/about">About</Link>
      <Link href="/">Blog</Link>
    </div>
  );

  const socialLinksMarkup = (
    <div className={styles.SocialLinks}>
      <SocialIcon
        bgColor="transparent"
        fgColor="black"
        url={SOCIAL_LINKS.LINKEDIN}
        target="_blank"
        className={styles.SocialItem}
      />
      <SocialIcon
        bgColor="transparent"
        fgColor="black"
        url={SOCIAL_LINKS.GITHUB}
        target="_blank"
        className={styles.SocialItem}
      />
      <SocialIcon
        bgColor="transparent"
        fgColor="black"
        url={SOCIAL_LINKS.EMAIL}
        className={styles.SocialItem}
      />
    </div>
  );

  return (
    <nav className={styles.Navbar}>
      <Link href="/">
        <Image src={Logo} width={60} alt="Logo of the website" />
      </Link>
      {navLinksMarkup}
      {socialLinksMarkup}
    </nav>
  );
}
