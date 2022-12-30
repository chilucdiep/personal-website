import Image from "next/image";
import GithubIcon from "../../../../../assets/images/ProjectDetails/Icons/GithubIcon.png";
import OpenLinkIcon from "../../../../../assets/images/ProjectDetails/Icons/OpenLinkIcon.svg";
import styles from "./SidePanel.module.scss";

interface SidePanelProps {
  projectLink: string;
  githubLink: string;
  roles: string[];
  team: string[];
  techStack: string[];
  date: string;
}

export function SidePanel({
  projectLink,
  githubLink,
  roles,
  team,
  techStack,
  date,
}: SidePanelProps) {
  const linksMarkup = (
    <ul>
      <li className={styles.LinkItem}>
        <a
          href={projectLink}
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
          href={githubLink}
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

  const rolesMarkup = (
    <div>
      <h4>Role</h4>
      {roles?.map((role) => (
        <p key={role}>{role}</p>
      ))}
    </div>
  );

  const teamMarkup = (
    <div>
      <h4>Team</h4>
      {team?.map((teamRole) => (
        <p key={teamRole}>{teamRole}</p>
      ))}
    </div>
  );

  const techStackMarkup = (
    <div>
      <h4>Tech Stack</h4>
      {techStack?.map((tech) => (
        <p key={tech}>{tech}</p>
      ))}
    </div>
  );

  const timelineMarkup = (
    <div>
      <h4>Timeline</h4>
      <p>{date}</p>
    </div>
  );

  return (
    <section className={styles.SidePanel}>
      {linksMarkup}
      {rolesMarkup}
      {teamMarkup}
      {techStackMarkup}
      {timelineMarkup}
    </section>
  );
}
