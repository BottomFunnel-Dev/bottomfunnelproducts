import React from 'react'
import styles from "./AppBuilderSolutionBanner.module.css"

export const AppBuilderSolutionBanner = () => {
  return (
    <div className={styles.appbuildersolutionbannermainboxes}>
      <div className={styles.appbuildersolutionboxfortextenter}>
        <h1>Bottom Funnel: a multi-purpose platform for low-code app development</h1>
        <p>
          Discover the platform that gives you the freedom to create,design,manage and develop your web presence the way you want.
        </p>

        <button className={styles.appbuildersolutionbannerbutton}> Get Started</button>
      </div>
    </div>
  );
};