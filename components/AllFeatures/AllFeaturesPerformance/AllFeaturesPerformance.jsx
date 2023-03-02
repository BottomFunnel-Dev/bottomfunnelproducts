import React from "react";
import styles from "./AllFeaturesPerformance.module.css";
import Image from "next/image";

export const AllFeaturesPerformance = () => {
  return (
    <div className={styles.allFeaturesPerformanceMainDiv}>
        <div className={styles.allFeaturesPerformanceHeading}>
           <h1>Keep track of marketting performance</h1>
           <p>Improve performance with actionable insights from campaigns</p>
        </div>
            <div className={styles.allFeaturesPerformanceContainerBoxes}>
                 
                    <div className={styles.allFeatureDataContainers}>
                        <div className={styles.allFeaturesPerformanceBoxes}>
                           <div className={styles.allFeaturesPerformanceIconsHeading}>
                                <h3>E-commerce Dashboard</h3>
                                <div className={styles.allFeaturesPerformanceImage1}>
                                    <Image
                                        src={"/Images/allFeatures/Rectangle21.webp"}
                                        alt={"image"}
                                        width={"0"}
                                        height={"0"}
                                        sizes={"100vw"}
                                        style={{ width: "100%", height: "100%" }}
                                        />
                                </div>
                            </div>
                            <div className={styles.allFeaturesPerformanceText}>
                                <p>
                                    Track store performance with the out-of-the-box dashboard.
                                    The data is synced in real-time so you can view key metrics like total
                                    sales this month, total orders this month, and more right from Bottom Funnel Marketer.
                                </p>
                            </div>
                        </div>
                        <div className={styles.allFeaturesPerformanceBoxes}>
                           <div className={styles.allFeaturesPerformanceIconsHeading}>
                                <h3>Email & SMS performance dashboard</h3>
                                <div className={styles.allFeaturesPerformanceImage2}>
                                    <Image
                                        src={"/Images/allFeatures/Rectangle22.webp"}
                                        alt={"image"}
                                        width={"0"}
                                        height={"0"}
                                        sizes={"100vw"}
                                        style={{ width: "100%", height: "100%" }}
                                        />
                                </div>
                            </div>
                            <div className={styles.allFeaturesPerformanceText}>
                                <p>
                                   Analyze Campaign performance with key metrics to understand
                                   open rates, click rates, and more.
                                </p>
                            </div>
                        </div>
                        <div className={styles.allFeaturesPerformanceBoxes}>
                           <div className={styles.allFeaturesPerformanceIconsHeading}>
                                <h3>Revenue attribution</h3>
                                <div className={styles.allFeaturesPerformanceImage3}>
                                    <Image
                                        src={"/Images/allFeatures/Rectangle23.webp"}
                                        alt={"image"}
                                        width={"0"}
                                        height={"0"}
                                        sizes={"100vw"}
                                        style={{ width: "100%", height: "100%" }}
                                        />
                                </div>
                            </div>
                            <div className={styles.allFeaturesPerformanceText}>
                                <p>
                                    Track which campaigns are leading to higher conversions with
                                    attribution reports.Get insights into best-performing email,SMS,WhatsApp, and journey campaigns. 
                                </p>
                            </div>
                        </div>
                        <div className={styles.allFeaturesPerformanceBoxes}>
                           <div className={styles.allFeaturesPerformanceIconsHeading}>
                                <h3>Conversion Rate Optimization</h3>
                                <div className={styles.allFeaturesPerformanceImage4}>
                                    <Image
                                        src={"/Images/allFeatures/Rectangle24.webp"}
                                        alt={"image"}
                                        width={"0"}
                                        height={"0"}
                                        sizes={"100vw"}
                                        style={{ width: "100%", height: "100%" }}
                                        />
                                </div>
                            </div>
                            <div className={styles.allFeaturesPerformanceText}>
                                <p>
                                   Improve website conversions with real-time data A/B Testing, Haetmaps, Session Replay, and more.
                                </p>
                            </div>
                        </div>
                    </div>

            </div>
    </div>
  );
};
