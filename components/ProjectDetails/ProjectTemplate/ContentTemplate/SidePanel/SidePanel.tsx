import Image from "next/image";
import GithubIcon from "../../../../../assets/images/ProjectDetails/Icons/GithubIcon.png";
import OpenLinkIcon from "../../../../../assets/images/ProjectDetails/Icons/OpenLinkIcon.svg";
import styles from "./SidePanel.module.scss";

export function SidePanel() {
  const linksMarkup = (
    <ul>
      <li className={styles.LinkItem}>
        <a
          href="https://daylee-web.herokuapp.com/"
          rel="noreferrer"
          target="_blank"
          className={styles.Link}
        >
          <Image
            src={OpenLinkIcon}
            alt="OpenLinkIcon"
            className={styles.Icon}
          />
          View live
        </a>
      </li>
      <li className={styles.LinkItem}>
        <a
          href="https://github.com/Daylee-Digital-Journal/daylee"
          rel="noreferrer"
          target="_blank"
          className={styles.Link}
        >
          {" "}
          <Image src={GithubIcon} alt="GithubIcon" className={styles.Icon} />
          View github
        </a>
      </li>
    </ul>
  );

  return <section className={styles.SidePanel}>{linksMarkup}</section>;
}
