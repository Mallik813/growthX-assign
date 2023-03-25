import React from "react";
import styles from "./styles.module.css";

const ProgressBar = ({ step, totalSteps }) => {
  const progressPercentage = Math.floor((step / totalSteps) * 100);

  return (
    <div className={styles.progressBar}>
      <div
        className={styles.progressBarFill}
        style={{ width: `${progressPercentage}%` }}
      ></div>
    </div>
  );
};

export default ProgressBar;
