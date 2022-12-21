import styles from "./Button.module.scss";

interface Props {
  className?: string;
  label: string;
  icon?: any;
  work?: boolean;
  onClick?(): void;
}

export function Button({
  className,
  label,
  icon,
  work = false,
  onClick,
}: Props) {
  const classes = `${styles.Button} ${className} ${
    work ? styles.WorkButton : null
  }`;

  return (
    <a className={classes} onClick={onClick}>
      <span>{icon}</span>
      {label}
    </a>
  );
}
