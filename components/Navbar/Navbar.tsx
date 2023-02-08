"use client";

import { SocialIcon } from "react-social-icons";
import Link from "next/link";
import styles from "./Navbar.module.scss";
import { SOCIAL_LINKS } from "../../assets/constants/socialLinks";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

export function Navbar() {
  const path = usePathname();

  const textVariant = {
    hidden: {
      y: 8,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.15,
      },
    },
  };

  const navLinksMarkup = (
    <motion.div
      className={styles.Links}
      variants={textVariant}
      initial="hidden"
      animate="visible"
    >
      <a href="/#work-section" className={path === "/" ? styles.Bold : ""}>
        Work
      </a>
      <Link href="/about" className={path === "/about" ? styles.Bold : ""}>
        About
      </Link>
      <Link href="/blog" className={path === "/blog" ? styles.Bold : ""}>
        Blog
      </Link>
    </motion.div>
  );

  const socialLinksMarkup = (
    <motion.div
      className={styles.SocialLinks}
      variants={textVariant}
      initial="hidden"
      animate="visible"
    >
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
    </motion.div>
  );

  const svgVariant = {
    hover: { opacity: 0 },
    hidden: { rotate: -180, scale: 1.2, opacity: 0 },
    visible: {
      rotate: 0,
      scale: 1,
      opacity: 1,
      transition: {
        delay: 0.8,
        duration: 1.2,
        type: "spring",
        delayChildren: 1.5,
      },
    },
  };

  const pathVariant = {
    hidden: { rotate: 100 },
    visible: {
      rotate: 0,
      transition: {
        duration: 0.7,
        type: "spring",
      },
    },
    hover: {
      rotate: 360,
      opacity: 0,
      transition: {
        duration: 0.7,
        type: "spring",
      },
    },
  };

  return (
    <motion.div className={styles.Sticky}>
      <nav className={styles.Navbar}>
        <motion.div
          whileHover={{
            scale: 1.01,
            transition: {
              duration: 0.4,
              type: "spring",
              damping: 12,
              stiffness: 500,
              restDelta: 0.000001,
              velocity: 3,
            },
          }}
        >
          <Link href="/">
            <motion.svg
              width="60"
              height="60.68"
              viewBox="0 0 88 89"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              variants={svgVariant}
              initial="hidden"
              animate="visible"
            >
              <motion.path
                d="M1.584 36.104C1.584 32.776 2.304 29.816 3.744 27.224C5.184 24.6 7.184 22.568 9.744 21.128C12.336 19.656 15.264 18.92 18.528 18.92C22.528 18.92 25.952 19.976 28.8 22.088C31.648 24.2 33.552 27.08 34.512 30.728H25.488C24.816 29.32 23.856 28.248 22.608 27.512C21.392 26.776 20 26.408 18.432 26.408C15.904 26.408 13.856 27.288 12.288 29.048C10.72 30.808 9.936 33.16 9.936 36.104C9.936 39.048 10.72 41.4 12.288 43.16C13.856 44.92 15.904 45.8 18.432 45.8C20 45.8 21.392 45.432 22.608 44.696C23.856 43.96 24.816 42.888 25.488 41.48H34.512C33.552 45.128 31.648 48.008 28.8 50.12C25.952 52.2 22.528 53.24 18.528 53.24C15.264 53.24 12.336 52.52 9.744 51.08C7.184 49.608 5.184 47.576 3.744 44.984C2.304 42.392 1.584 39.432 1.584 36.104Z"
                fill="black"
                variants={pathVariant}
              />
              <motion.path
                d="M68.6 19.304C72.152 19.304 75.256 20.008 77.912 21.416C80.568 22.824 82.616 24.808 84.056 27.368C85.528 29.896 86.264 32.824 86.264 36.152C86.264 39.448 85.528 42.376 84.056 44.936C82.616 47.496 80.552 49.48 77.864 50.888C75.208 52.296 72.12 53 68.6 53H55.976V19.304H68.6ZM68.072 45.896C71.176 45.896 73.592 45.048 75.32 43.352C77.048 41.656 77.912 39.256 77.912 36.152C77.912 33.048 77.048 30.632 75.32 28.904C73.592 27.176 71.176 26.312 68.072 26.312H64.184V45.896H68.072Z"
                fill="black"
              />
              <motion.path
                d="M46.184 63.664H56.936V70H37.976V36.304H46.184V63.664Z"
                fill="black"
              />
            </motion.svg>
          </Link>
        </motion.div>
        {navLinksMarkup}
        {socialLinksMarkup}
      </nav>
    </motion.div>
  );
}
