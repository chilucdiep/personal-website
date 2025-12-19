import { motion } from "framer-motion";
import { SocialIcon } from "react-social-icons";
import { ARROW_ICON } from "../../../../assets/constants/icons";
import { Button } from "../../../Button";
import Typewriter from "typewriter-effect";
import styles from "./WorkCard.module.scss";

interface WorkCardProps {
  side: "left" | "right";
  subtitle: string;
  title: string;
  date: string;
  description: string;
  tech: string;
  projectUrl: string;
  figmaUrl?: string;
  githubUrl?: string;
  isDone?: boolean;
  children: React.ReactNode;
}

export function WorkCard({
  side,
  subtitle,
  title,
  date,
  description,
  tech,
  projectUrl,
  figmaUrl,
  githubUrl,
  isDone = true,
  children,
}: WorkCardProps) {
  const workVariant = {
    hidden: { y: 30 },
    visible: {
      y: 0,
      transition: {
        duration: 0.4,
      },
    },
  };

  const typewriterMarkup = (
    <Typewriter
      options={{
        strings: subtitle,
        autoStart: true,
        delay: 40,
        cursor: "",
      }}
    />
  );

  const workInfoMarkup = (
    <>
      <h3>{typewriterMarkup}</h3>
      <h2>{title}</h2>
      <p className={styles.LaunchedText}>Launched on {date}</p>
      <p>
        {description} {!isDone ? <strong>**Under Construction**</strong> : null}
      </p>
    </>
  );

  const techMarkup = (
    <p>
      <strong>{tech}</strong>
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

  const figmaOverlayMarkup = figmaUrl ? (
    <SocialIcon
      bgColor="transparent"
      fgColor="white"
      url={figmaUrl}
      target="_blank"
      className={styles.SocialItem}
    />
  ) : null;

  const githubOverlayMarkup = githubUrl ? (
    <SocialIcon
      bgColor="transparent"
      fgColor="white"
      url={githubUrl}
      target="_blank"
      className={styles.SocialItem}
    />
  ) : null;

  const overlayMarkup =
    githubUrl || figmaUrl ? (
      <div className={styles.Overlay}>
        {figmaOverlayMarkup}
        {githubOverlayMarkup}
      </div>
    ) : null;

  const thumbnailMarkup = (
    <div className={styles.WorkImg}>
      {overlayMarkup}
      <a href={projectUrl} className={styles.Thumbnail}>
        {children}
      </a>
    </div>
  );

  return (
    <motion.div
      variants={workVariant}
      initial="hidden"
      animate="visible"
      className={side === "left" ? styles.Left : styles.Right}
    >
      <div className={styles.WorkText}>
        {workInfoMarkup}
        {techMarkup}
        <Button icon={ARROW_ICON} label="View Project" work url={projectUrl} />
      </div>
      {thumbnailMarkup}
    </motion.div>
  );
}
