import { SocialIcon } from "react-social-icons";
import Link from "next/link";
import styles from "./Footer.module.scss";
import { SOCIAL_LINKS } from "../../assets/constants/socialLinks";

export function Footer() {
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
    <footer className={styles.Footer}>
      {socialLinksMarkup}
      <p>Designed and built by me!</p>
    </footer>
  );
}
