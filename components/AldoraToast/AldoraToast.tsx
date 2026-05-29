"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { LogoMorph } from "./LogoMorph";
import styles from "./AldoraToast.module.scss";

const PIXEL_O = [[0,1,1,1,0],[1,0,0,0,1],[1,0,0,0,1],[1,0,0,0,1],[0,1,1,1,0]] as number[][];

function TextLogo() {
  return (
    <div className={styles.TextLogo}>
      <span className={styles.TextLogoWord}>ALD</span>
      <svg width={11} height={11} viewBox="0 0 5 5" style={{ display: "block", flexShrink: 0, imageRendering: "pixelated" }}>
        {PIXEL_O.flatMap((row, r) =>
          row.map((on, c) => on ? <rect key={`${r}${c}`} x={c} y={r} width={1} height={1} fill="white" /> : null)
        )}
      </svg>
      <span className={styles.TextLogoWord}>RA</span>
    </div>
  );
}

function DismissButton({ onClick, cardHovered }: { onClick: () => void; cardHovered: boolean }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.button
      className={styles.Dismiss}
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      animate={{
        opacity: cardHovered ? 1 : 0,
        y: hovered ? -2 : 0,
        scale: hovered ? 1.07 : 1,
        backgroundColor: hovered ? "rgba(255,255,255,0.1)" : "rgba(255,255,255,0.06)",
      }}
      whileTap={{ scale: 0.82, y: 0 }}
      transition={{
        opacity: { duration: 0.18 },
        y: { type: "spring", stiffness: 400, damping: 18 },
        scale: { type: "spring", stiffness: 400, damping: 18 },
        backgroundColor: { duration: 0.15 },
      }}
      aria-label="Dismiss"
    >
      <motion.svg
        width="10"
        height="10"
        viewBox="0 0 10 10"
        fill="none"
        animate={{
          scale: hovered ? 1.1 : 1,
          color: hovered ? "rgba(255,255,255,0.72)" : "rgba(255,255,255,0.35)",
        }}
        transition={{ scale: { type: "spring", stiffness: 400, damping: 18 } }}
        aria-hidden="true"
      >
        <path d="M1 1L9 9M9 1L1 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </motion.svg>
    </motion.button>
  );
}

export function AldoraToast() {
  const [visible, setVisible] = useState(false);
  const [cardHovered, setCardHovered] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 1400);
    return () => clearTimeout(t);
  }, []);

  const dismiss = () => setVisible(false);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="aldora-toast"
          className={styles.ToastWrapper}
          style={{ transformOrigin: "top right" }}
          onMouseEnter={() => setCardHovered(true)}
          onMouseLeave={() => setCardHovered(false)}
          initial={{ scale: 0.25, opacity: 0, rotate: 8, filter: "blur(10px)" }}
          animate={{ scale: 1, opacity: 1, rotate: 0, filter: "blur(0px)" }}
          exit={{
            scale: [1, 1.07, 0.72, 0.4],
            opacity: [1, 1, 0.85, 0],
            rotate: [0, 3, -7, -14],
            filter: ["blur(0px)", "blur(0px)", "blur(3px)", "blur(14px)"],
            transition: { duration: 0.46, times: [0, 0.18, 0.62, 1] },
          }}
          transition={{
            scale: { type: "spring", stiffness: 340, damping: 16, mass: 0.75 },
            rotate: { type: "spring", stiffness: 260, damping: 14, mass: 0.8 },
            opacity: { duration: 0.18 },
            filter: { duration: 0.35, ease: "easeOut" },
          }}
        >
          <div className={styles.Toast}>
            <DismissButton onClick={dismiss} cardHovered={cardHovered} />
            <div className={styles.Header}>
              <LogoMorph size={40} />
              <TextLogo />
            </div>
          <p className={styles.Description}>
            High-craft design engineering studio — motion-forward interfaces, built right.
          </p>
          <a
            href="https://www.byaldora.com"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.Cta}
          >
            Visit byaldora.com
            <span className={styles.CtaArrow}>→</span>
          </a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
