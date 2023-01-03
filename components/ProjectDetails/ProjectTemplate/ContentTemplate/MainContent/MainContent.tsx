import React from "react";
import styles from "./MainContent.module.scss";

interface MainContentProps {
  projectBrief: string;
  problem: string;
  goal: string;
  children: React.ReactNode;
}

export function MainContent({
  projectBrief,
  problem,
  goal,
  children,
}: MainContentProps) {
  return (
    <section className={styles.MainContent}>
      <div className={styles.ContentSection}>
        <h2>Project Brief</h2>
        <p>{projectBrief}</p>
        <h4>Problem</h4>
        <p>{problem}</p>
        <h4>Goal</h4>
        <p>{goal}</p>
      </div>
      {children}
    </section>
  );
}
