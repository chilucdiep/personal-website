import Link from "next/link";
import { ARROW_ICON } from "../../../../assets/constants/icons";
import { Button } from "../../../Button";
import styles from "./WorkCard.module.scss";

interface WorkCardProps {
  side: "left" | "right";
  subtitle: string;
  title: string;
  description: string;
  tech: string;
  figmaUrl?: string;
  isDone?: boolean;
  children: any;
}

export function WorkCard({
  side,
  subtitle,
  title,
  description,
  tech,
  figmaUrl,
  isDone = true,
  children,
}: WorkCardProps) {
  const workInfoMarkup = (
    <>
      <h3>{subtitle}</h3>
      <h2>{title}</h2>
      <p>
        {description} {!isDone ? <strong>**Under Construction**</strong> : null}
      </p>
    </>
  );

  const techMarkup = (
    <p>
      {tech}
      {figmaUrl ? (
        <>
          {", "}
          <a
            href={figmaUrl}
            target="_blank"
            style={{ color: "#6773FF" }}
            rel="noreferrer"
          >
            <strong>Figma</strong>
          </a>
        </>
      ) : null}
    </p>
  );

  const thumbnailMarkup = (
    <div className={styles.WorkImg}>
      {/* <div className={styles.Overlay}>
        <a
          href="https://www.figma.com/file/BH6GRyC4CYVTOO4zrqESCs/Productivity-Board?node-id=0%3A1"
          target="_blank"
          className={styles.OverlayLinks}
          rel="noreferrer"
        >
          <img src={FigmaIcon} alt="Figma Icon" />
        </a>
        <a
          href="https://github.com/Daylee-Digital-Journal/daylee"
          className={styles.OverlayLinks}
        >
          <img src={GreyGithubIcon} alt="Github Icon" />
        </a>
      </div> */}
      <a href="/about">{children}</a>
    </div>
  );

  return (
    <div className={side === "left" ? styles.Left : styles.Right}>
      <div className={styles.WorkText}>
        {workInfoMarkup}
        {techMarkup}
        <Link href="/about" target="_blank">
          <Button icon={ARROW_ICON} label="View Project" work />
        </Link>
      </div>
      {thumbnailMarkup}
    </div>
  );
}
