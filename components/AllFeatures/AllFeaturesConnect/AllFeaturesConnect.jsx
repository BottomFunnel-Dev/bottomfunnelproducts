import React from "react";
import styles from "./AllFeaturesConnect.module.css";
import Image from "next/image";

export const AllFeaturesConnect = () => {
  return (

    <div className={styles.allFeaturesConnectMainDiv}>
        <div className={styles.allFeaturesConnectHeading}>
           <h1>Connect with your favorite tools and platforms</h1>
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
                                Seamlessly Connect Your E-commerce Systems, CRM, Analytics Tools, and More. Retrieve and Sync Data in Real-Time, Automate Processes, and Enhance Efficiency. Harness the Full Potential of Your Business with Custom Integrations and Extend the Functionality of Your E-commerce Platform.
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
                                Seamlessly List and Sell Your Products on Leading Marketplaces. Streamline Order Management, Inventory Sync, and Pricing Across Multiple Channels. Maximize Sales Opportunities, Reach New Customers, and Simplify Multi-channel Selling with our Marketplace Integration Solution.
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
                                Seamlessly Sync Inventory, Orders, and Customer Data between Your Shopify Store and Other Platforms. Automate Workflows, Personalize Customer Experiences, and Boost Operational Efficiency with our Optimized Shopify Integration Solution. Drive Growth and Success with a Unified E-commerce Experience.
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
                                Seamlessly Connect and Sync Your Favorite Apps, Streamline Workflows, and Automate Repetitive Tasks. Unlock the Power of Zapier's Extensive App Ecosystem and Achieve Greater Efficiency and Productivity in Your Business Processes with Bottom Funnel's Zapier Integration.
                                </p>
                            </div>
                        </div>

                    </div>

            </div>
    </div>

  );
};
