"use client";

import styles from "./Hero.module.scss";
import { Button } from "../../Button";
import { MAIL_ICON } from "../../../assets/constants/icons";
import { CHECK_ICON } from "../../../assets/constants/icons";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export function EmailButton() {
  const [isCopied, setIsCopied] = useState(false);

  const copiedVariant = {
    hidden: {
      y: 10,
      opacity: 0,
      transition: {
        duration: 0.4,
      },
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.4,
      },
    },
  };

  const copiedMarkup = (
    <AnimatePresence>
      {isCopied ? (
        <motion.div
          className={styles.Copied}
          variants={copiedVariant}
          initial="hidden"
          animate="visible"
          exit="hidden"
        >
          {CHECK_ICON}
          copied!
        </motion.div>
      ) : null}
    </AnimatePresence>
  );

  return (
    <div className={styles.Button}>
      {copiedMarkup}
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
      setIsCopied(true);

      setTimeout(() => {
        setIsCopied(false);
      }, 1200);
      console.log("Page URL copied to clipboard");
    } catch (err) {
      console.error("Failed to copy", err);
    }
  }
}
