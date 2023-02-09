import { SocialIcon } from "react-social-icons";
import Link from "next/link";
import styles from "./Footer.module.scss";
import { SOCIAL_LINKS } from "../../assets/constants/socialLinks";
import Image from "next/image";
import Logo from "../../public/favicon.svg";

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
      <div className={styles.ok}>
        <Image src={Logo} alt="Logo" />
        <p>
          <strong>Chi-Luc Diep &copy; 2023</strong> &mdash;{" "}
          <Link
            href="https://github.com/chilucdiep/personal-website"
            target="_blank"
          >
            Design and development by me!
          </Link>
        </p>
      </div>
    </footer>
  );
}
