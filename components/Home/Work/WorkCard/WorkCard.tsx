import styles from "./WorkCard.module.scss";

interface WorkCardProps {
  side: "left" | "right";
  subtitle: string;
  title: string;
  description: string;
  tech: string;
  figmaUrl?: string;
  isDone?: boolean;
}

export function WorkCard({
  side,
  subtitle,
  title,
  description,
  tech,
  figmaUrl,
  isDone = true,
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

  return (
    <div>
      <div className={styles.WorkText}>
        {workInfoMarkup}
        {techMarkup}
      </div>
    </div>
  );
}
