import React from "react";
import styles from "./ReportAndAnalysisBanner.module.css";
import Image from "next/image";

export const ReportAndAnalysisBanner = () => {
  return (
    <div className={styles.reportAndAnalysisBannerMain}>
      <div className={styles.reportAndAnalysisBannertext}>
        <h1>Delight Made Easy with Bottom Funnel Analytics</h1>
        <p>
          Analyze, Action and Augment your business with insightful data.
          Capture your customer support data to craft experience that 'delight'
          your customers.
        </p>
        <button>Sign Up for Free</button>
      </div>
      <div className={styles.reportAndAnalysisBannerimg}>
        <Image
          src={"/Images/funnelReportanalysis/Vectors/Group 770703.webp"}
          alt={"report analysis"}
          width={"0"}
          height={"0"}
          sizes={"100vw"}
          style={{ width: "100%", height: "100%" }}
        />
      </div>
    </div>
  );
};
