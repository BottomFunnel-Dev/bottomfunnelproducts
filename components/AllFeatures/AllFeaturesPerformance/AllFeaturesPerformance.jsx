import React from "react";
import styles from "./AllFeaturesPerformance.module.css";
import Image from "next/image";

export const AllFeaturesPerformance = () => {
  return (
    <div className={styles.allFeaturesPerformanceMainDiv}>
        <div className={styles.allFeaturesPerformanceHeading}>
           <h1>Keep track of marketing campaigns </h1>
           <p>Improve performance with in-depth insights from campaigns</p>
        </div>
            <div className={styles.allFeaturesPerformanceContainerBoxes}>
                 
                    <div className={styles.allFeatureDataContainers}>
                        <div className={styles.allFeaturesPerformanceBoxes}>
                           <div className={styles.allFeaturesPerformanceIconsHeading}>
                                <h3>E-commerce Dashboard</h3>
                                <div className={styles.allFeaturesPerformanceImage1}>
                                    <Image
                                        src={"https://d3op2l77j7wnti.cloudfront.net/Images/allFeatures/Rectangle21.webp"}
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
                                Gain Real-time Insights, Monitor Sales Performance, Track Customer Behavior, Optimize Marketing Strategies, and Drive Business Growth. Make Data-driven Decisions and Maximize Your E-commerce Potential with our User-friendly and Comprehensive Dashboard Solution.
                                </p>
                            </div>
                        </div>
                        <div className={styles.allFeaturesPerformanceBoxes}>
                           <div className={styles.allFeaturesPerformanceIconsHeading}>
                                <h3>Email & SMS performance dashboard</h3>
                                <div className={styles.allFeaturesPerformanceImage2}>
                                    <Image
                                        src={"https://d3op2l77j7wnti.cloudfront.net/Images/allFeatures/Rectangle22.webp"}
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
                                Track Open Rates, Click-through Rates, and Conversion Rates Analyze Engagement Metrics, Identify Trends, and Fine-tune Your Messaging. Gain Actionable Insights to Enhance Campaign Effectiveness and Drive Higher ROI for Your Email and SMS Marketing Efforts.
                                </p>
                            </div>
                        </div>
                        <div className={styles.allFeaturesPerformanceBoxes}>
                           <div className={styles.allFeaturesPerformanceIconsHeading}>
                                <h3>Revenue attribution</h3>
                                <div className={styles.allFeaturesPerformanceImage3}>
                                    <Image
                                        src={"https://d3op2l77j7wnti.cloudfront.net/Images/allFeatures/Rectangle23.webp"}
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
                                Accurately Measure the Impact of Your Marketing Efforts on Sales. Track Revenue Generated from Email, SMS, Chat, and Other Channels, Identify High-Performing Campaigns, Optimize Your Marketing Strategy, and Drive Revenue Growth with Data-Driven Insights. 
                                </p>
                            </div>
                        </div>
                        <div className={styles.allFeaturesPerformanceBoxes}>
                           <div className={styles.allFeaturesPerformanceIconsHeading}>
                                <h3>Conversion Rate Optimization</h3>
                                <div className={styles.allFeaturesPerformanceImage4}>
                                    <Image
                                        src={"https://d3op2l77j7wnti.cloudfront.net/Images/allFeatures/Rectangle24.webp"}
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
                                Analyze User Behavior, Identify Bottlenecks, and Implement Data-Driven Strategies to Increase Conversion Rates. Optimize Landing Pages, Forms, and User Flows, Personalize User Experiences, and Maximize ROI for Your E-commerce Business.
                                </p>
                            </div>
                        </div>
                    </div>

            </div>
    </div>
  );
};
