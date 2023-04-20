import React from "react";
import styles from "./KnowledgeManagementFreeTrial.module.css";

export const KnowledgeManagementFreeTrial = () => {
  return (
    <div>
      <div className={styles.KnowledgeManagementFreeTrialMaindiv}>
       <div className = {styles.KnowledgeManagementFreeTrialDiv1}>
       <h2>Sign up for Freshservice today</h2>
        <p>
          Start your 21-day free trial. No credit card required. No strings
          attached.
        </p>
        <div>
        <button className={styles.KnowledgeManagementdemo}>
          Start a free demo
        </button>
        <button className={styles.KnowledgeManagementsignup}>Sign up</button>
        </div>
      </div>
       </div>
    </div>
  );
};
