import React from "react";
import styles from "./AllFeaturesConnect.module.css";
import Image from "next/image";

export const AllFeaturesConnect = () => {
  return (

    <div className={styles.allFeaturesConnectMainDiv}>
        <div className={styles.allFeaturesConnectHeading}>
           <h1>Connect with your favourite tools and get work done faster</h1>
           <p>Bottom Funnel is built to operate alongside other popular business tolls seamlessly.</p>
        </div>
            <div className={styles.allFeaturesConnectContainerBoxes}>
                 
                    <div className={styles.allFeatureDataContainers}>
                      
                        <div className={styles.allFeaturesConnectBoxes}>
                           <div className={styles.allFeaturesConnectIconsHeading}>
                                <h3>API Access</h3>
                                <div className={styles.allFeaturesConnectImage1}>
                                    <Image
                                        src={"https://d3op2l77j7wnti.cloudfront.net/Images/allFeatures/Rectangle15.webp"}
                                        alt={"image"}
                                        width={"0"}
                                        height={"0"}
                                        sizes={"100vw"}
                                        style={{ width: "100%", height: "100%" }}
                                        />
                                </div>
                            </div>
                            <div className={styles.allFeaturesConnectText}>
                                <p>
                                    Integrate your account with third party applications and connect to multiple data sources.
                                </p>
                            </div>
                        </div>
                        <div className={styles.allFeaturesConnectBoxes}>
                           <div className={styles.allFeaturesConnectIconsHeading}>
                                <h3>Marketplace</h3>
                                <div className={styles.allFeaturesConnectImage1}>
                                    <Image
                                        src={"https://d3op2l77j7wnti.cloudfront.net/Images/allFeatures/Rectangle14.webp"}
                                        alt={"image"}
                                        width={"0"}
                                        height={"0"}
                                        sizes={"100vw"}
                                        style={{ width: "100%", height: "100%" }}
                                        />
                                </div>
                            </div>
                            <div className={styles.allFeaturesConnectText}>
                                <p>
                                    Scale with the Bottom Funnel platform.Extend your experience by installing trusted applications with a single click.
                                </p>
                            </div>
                        </div>
                        <div className={styles.allFeaturesConnectBoxes}>
                           <div className={styles.allFeaturesConnectIconsHeading}>
                                <h3>Shopify</h3>
                                <div className={styles.allFeaturesConnectImage2}>
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
                            <div className={styles.allFeaturesConnectText}>
                                <p>
                                    Connect your shopify storefront to engage and support your
                                    customers across channels from one solution.
                                </p>
                            </div>
                        </div>
                        <div className={styles.allFeaturesConnectBoxes}>
                           <div className={styles.allFeaturesConnectIconsHeading}>
                                <h3>Zapier</h3>
                                <div className={styles.allFeaturesConnectImage3}>
                                    <Image
                                        src={"https://d3op2l77j7wnti.cloudfront.net/Images/allFeatures/Rectangle17.webp"}
                                        alt={"image"}
                                        width={"0"}
                                        height={"0"}
                                        sizes={"100vw"}
                                        style={{ width: "100%", height: "100%" }}
                                        />
                                </div>
                            </div>
                            <div className={styles.allFeaturesConnectText}>
                                <p>
                                    Acess the most popular apps on Zapier,create zaps, and equip
                                    yourself with more automation.
                                </p>
                            </div>
                        </div>

                    </div>

            </div>
    </div>

  );
};
