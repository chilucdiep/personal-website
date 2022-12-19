"use client";

import styles from "./Hero.module.scss";
import { Button } from "../../Button";
import { MAIL_ICON } from "../../../assets/constants/icons";

export function EmailButton() {
  return (
    <div className={styles.Button}>
      <Button
        className={styles.HeroButton}
        icon={MAIL_ICON}
        label="chilucdiep@hotmail.com"
        onClick={copyEmail}
      />
    </div>
  );

  async function copyEmail() {
    const email = "chilucdiep@hotmail.com";

    try {
      await navigator.clipboard.writeText(email);
      alert(`You copied '${email}' to your clipboard!`);
      console.log("Page URL copied to clipboard");
    } catch (err) {
      console.error("Failed to copy", err);
    }
  }
}
