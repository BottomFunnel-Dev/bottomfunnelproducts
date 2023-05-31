import React from "react";
import styles from "./AllFeaturesReach.module.css";
import Image from "next/image";

export const AllFeaturesReach = () => {
  return (
    <div className={styles.allFeaturesReachMainDiv}>
        <div className={styles.allFeaturesReachHeading}>
           <h1>Targeted Messaging: Reaching the Right Audience, Right on Time</h1>
           <p>Engage with your audience at the perfect moment, delivering tailored messages that resonate and drive action</p>
        </div>
            <div className={styles.allFeaturesReachContainerBoxes}>
                 
                    <div className={styles.allFeatureDataContainers}>
                        <div className={styles.allFeaturesReachBoxes}>
                           <div className={styles.allFeaturesReachIconsHeading}>
                                <h3>Segmented Engagement</h3>
                                <div className={styles.allFeaturesReachImage1}>
                                    <Image
                                        src={"https://d3op2l77j7wnti.cloudfront.net/Images/allFeatures/Rectangle11.webp"}
                                        alt={"image"}
                                        width={"0"}
                                        height={"0"}
                                        sizes={"100vw"}
                                        style={{ width: "100%", height: "100%" }}
                                        />
                                </div>
                            </div>
                            <div className={styles.allFeaturesReachText}>
                                <p>
                                Leverage AI chat support to target specific marketing segments, delivering personalized messages, offers, and recommendations that cater to their unique needs and preferences. Maximize engagement and conversion rates with targeted communication.
                                </p>
                            </div>
                        </div>
                        <div className={styles.allFeaturesReachBoxes}>
                           <div className={styles.allFeaturesReachIconsHeading}>
                                <h3>Shopify Integration</h3>
                                <div className={styles.allFeaturesReachImage2}>
                                    <Image
                                        src={"https://d3op2l77j7wnti.cloudfront.net/Images/allFeatures/Rectangle12.webp"}
                                        alt={"image"}
                                        width={"0"}
                                        height={"0"}
                                        sizes={"100vw"}
                                        style={{ width: "100%", height: "100%" }}
                                        />
                                </div>
                            </div>
                            <div className={styles.allFeaturesReachText}>
                                <p>
                                Enhance your Shopify-based segments with AI chat support. Engage customers seamlessly within their shopping journey, provide personalized product recommendations, answer queries, and drive conversions. Increase customer satisfaction and loyalty by delivering a seamless and tailored shopping experience. 
                                </p>
                            </div>
                        </div>
                        <div className={styles.allFeaturesReachBoxes}>
                           <div className={styles.allFeaturesReachIconsHeading}>
                                <h3>Engage Anonymous Visitors</h3>
                                <div className={styles.allFeaturesReachImage3}>
                                    <Image
                                        src={"https://d3op2l77j7wnti.cloudfront.net/Images/allFeatures/Rectangle13.webp"}
                                        alt={"image"}
                                        width={"0"}
                                        height={"0"}
                                        sizes={"100vw"}
                                        style={{ width: "100%", height: "100%" }}
                                        />
                                </div>
                            </div>
                            <div className={styles.allFeaturesReachText}>
                                <p>
                                Leverage AI chat support to engage and convert anonymous website visitors. Offer personalized assistance, recommend relevant content or products, and capture lead information. By providing real-time support, you can turn anonymous visitors into potential customers and drive higher conversion rates on your website.
                                </p>
                            </div>
                        </div>
                    </div>

            </div>
    </div>
  );
};
