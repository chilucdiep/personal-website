import Link from "next/link";
import Image from "next/image";
import styles from "../MainContent/MainContent.module.scss";
import { ILink } from "./Links.constant";
import { motion } from "framer-motion";

export function LinkTemplate({ links }: any) {
  return (
    <div className={styles.ContentSection}>
      <h4>Also check out</h4>
      <div className={styles.TwoColumnGrid}>
        {links.map((link: ILink) => (
          <motion.div
            key={link.href}
            whileHover={{
              opacity: 0.95,
              scale: 0.99,
              type: "spring",
              transition: { duration: 0.12 },
            }}
          >
            <Link href={link.href} target="_blank">
              <Image src={link.src} alt={`${link.src}`} />
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
