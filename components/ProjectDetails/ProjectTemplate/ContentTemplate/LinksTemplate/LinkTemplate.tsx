import Link from "next/link";
import Image from "next/image";
import styles from "../MainContent/MainContent.module.scss";
import { ILink } from "./Links.constant";

export function LinkTemplate({ links }: any) {
  return (
    <div className={styles.ContentSection}>
      <h4>Also check out</h4>
      <div className={styles.TwoColumnGrid}>
        {links.map((link: ILink) => (
          <Link href={link.href} target="_blank" key={link.href}>
            <Image src={link.src} alt={`${link.src}`} />
          </Link>
        ))}
      </div>
    </div>
  );
}
