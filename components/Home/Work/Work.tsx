"use client";

import { useState } from "react";
import styles from "./Work.module.scss";

export function Work() {
  const [isFeaturesSelected, setIsFeaturesSelected] = useState(true);

  const FeaturedSelectedClasses = isFeaturesSelected
    ? `${styles.Selected} ${styles.FilterButton}`
    : styles.FilterButton;

  const OthersSelectedClasses = !isFeaturesSelected
    ? `${styles.Selected} ${styles.FilterButton}`
    : styles.FilterButton;

  const filtersMarkup = (
    <div className={styles.Filters}>
      <button
        className={FeaturedSelectedClasses}
        onClick={() => setIsFeaturesSelected(true)}
      >
        Featured
      </button>
      <button
        className={OthersSelectedClasses}
        onClick={() => setIsFeaturesSelected(false)}
      >
        Other
      </button>
      <p>{isFeaturesSelected ? "ok" : "no"}</p>
    </div>
  );

  return (
    <div className={styles.WorkContainer} id="work-section">
      <h1>Cool things I created</h1>
      {filtersMarkup}
    </div>
  );
}
