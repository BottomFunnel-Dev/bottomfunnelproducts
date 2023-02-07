import React from "react";
import styles from "./SecurityMidBanner.module.css";

export const SecurityMidBanner = () => {
  return (
    <div className={styles.securityMidBannerContainer}>
      <h1>Start today, and enjoy our free trial</h1>
      <p>
        Start your 21-day free trial. No credit card required. No strings
        attached
      </p>
      <span>
        <button>Start Free Trail</button>
        <button>Request Demo</button>
      </span>
    </div>
  );
};
