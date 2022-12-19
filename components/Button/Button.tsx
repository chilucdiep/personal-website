import styles from "./Button.module.scss";

interface Props {
  className?: string;
  label: string;
  icon?: any;
  onClick?(): void;
}

export function Button({ className, label, icon, onClick }: Props) {
  return (
    <a className={`${styles.Button} ${className}`} onClick={onClick}>
      <span>{icon}</span>
      {label}
    </a>
  );
}
