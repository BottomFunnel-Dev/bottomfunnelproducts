import React from "react";
import styles from "./ReportAndAnalysisBanner.module.css";
import Image from "next/image";

export const ReportAndAnalysisBanner = () => {
  return (
    <div className={styles.reportAndAnalysisBannerContainer}>
      <div>
        <h1>Delight Made Easy with Bottom Funnel Analytics</h1>
        <p>
          Analyze, Action and Augment your business with insightful data.
          Capture your customer support data to craft experience that 'delight'
          your customers.
        </p>
        <button>Start A Free Demo</button>
      </div>
      <span></span>
    </div>
  );
};
