import Link from "next/link";
import styles from "./Button.module.scss";

interface Props {
  className?: string;
  label: string;
  icon?: any;
  work?: boolean;
  onClick?(): void;
  url?: string;
}

export function Button({
  className,
  label,
  icon,
  work = false,
  onClick,
  url,
}: Props) {
  const classes = `${styles.Button} ${className} ${
    work ? styles.WorkButton : null
  }`;

  const buttonMarkup = url ? (
    <Link className={classes} onClick={onClick} href={url} target="_blank">
      <span>{icon}</span>
      {label}
    </Link>
  ) : (
    <div className={classes} onClick={onClick}>
      <span>{icon}</span>
      {label}
    </div>
  );

  return buttonMarkup;
}
