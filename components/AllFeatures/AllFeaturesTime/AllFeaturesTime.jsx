import React from "react";
import styles from "./AllFeaturesTime.module.css";
import Image from "next/image";

export const AllFeaturesTime = () => {
  return (
    <div className={styles.allFeaturesTimeMainDiv}>
        <div className={styles.allFeaturesHeading}>
           <h1>Automate and save time</h1>
           <p>Deliver a seamless experience with automationfeatures</p>
        </div>
  
            <div className={styles.allFeaturesTimeContainerBoxes}>
                <div className={styles.allFeatureTimeContainerDiv}>
                    <div className={styles.allFeatureDataContainers}>
                        <div className={styles.allFeaturesBoxes}>
                           <div className={styles.allFeaturesIconsHeading}>
                                <h3>Email Campaigns</h3>
                                <div className={styles.allFeaturesImage1}>
                                    <Image
                                        src={"https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/allFeatures/Rectangle25.webp"}
                                        alt={"image"}
                                        width={"0"}
                                        height={"0"}
                                        sizes={"100vw"}
                                        style={{ width: "100%", height: "100%" }}
                                        />
                                </div>
                            </div>
                            <div className={styles.allFeaturesText}>
                                <p>
                                    Create email campaigns from scratch with images, videos, and other visuals and Send
                                    them to the right audience using lists and segments. 
                                </p>
                            </div>
                        </div>
                        <div className={styles.allFeaturesBoxes}>
                           <div className={styles.allFeaturesIconsHeading}>
                                <h3>SMS Campaigns</h3>
                                <div className={styles.allFeaturesImage2}>
                                    <Image
                                        src={"https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/allFeatures/Rectangle27.webp"}
                                        alt={"image"}
                                        width={"0"}
                                        height={"0"}
                                        sizes={"100vw"}
                                        style={{ width: "100%", height: "100%" }}
                                        />
                                </div>
                            </div>
                            <div className={styles.allFeaturesText}>
                                <p>
                                    Send updates through SMS to inform customers about new offers,
                                    order updates,reminders, and more. 
                                </p>
                            </div>
                        </div>
                        <div className={styles.allFeaturesBoxes}>
                           <div className={styles.allFeaturesIconsHeading}>
                                <h3>WhatsApp Campaigns</h3>
                                <div className={styles.allFeaturesImage3}>
                                    <Image
                                        src={"https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/allFeatures/Rectangle26.webp"}
                                        alt={"image"}
                                        width={"0"}
                                        height={"0"}
                                        sizes={"100vw"}
                                        style={{ width: "100%", height: "100%" }}
                                        />
                                </div>
                            </div>
                            <div className={styles.allFeaturesText}>
                                <p>
                                    Engage with customers on WhatsApp using one-on-one messages and 
                                    chatbots to share messages and offer support.
                                </p>
                            </div>
                        </div>
                        <div className={styles.allFeaturesBoxes}>
                           <div className={styles.allFeaturesIconsHeading}>
                                <h3>Transactional Emails</h3>
                                <div className={styles.allFeaturesImage4}>
                                    <Image
                                        src={"https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/allFeatures/Rectangle28.webp"}
                                        alt={"image"}
                                        width={"0"}
                                        height={"0"}
                                        sizes={"100vw"}
                                        style={{ width: "100%", height: "100%" }}
                                        />
                                </div>
                            </div>
                            <div className={styles.allFeaturesText}>
                                <p>
                                    Configure business-critical non-marketing emails that are triggered by user actions such as activation 
                                    and purchase completion using transactional emails.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className={styles.allFeatureDataContainers3}>
                        <div className={styles.allFeaturesBoxes1}>
                            <div className={styles.allFeaturesIconsHeading}>
                                <h3>Chatbots</h3>
                                <div className={styles.allFeaturesImage9}>
                                    <Image
                                        src={"https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/allFeatures/Rectangle29.webp"}
                                        alt={"image"}
                                        width={"0"}
                                        height={"0"}
                                        sizes={"100vw"}
                                        style={{ width: "100%", height: "100%" }}
                                        />
                                </div>
                            </div>
                            <div className={styles.allFeaturesText}>
                                <p>
                                    Give instant,precise answers to commonly askd customner questions,
                                    improving resolution times and freeing up your team's workload.
                                </p>
                            </div>
                        </div>

                        <div className={styles.allFeaturesBoxes1}>
                            <div className={styles.allFeaturesIconsHeading}>
                                <h3>Chat Campaigns</h3>
                                <div className={styles.allFeaturesImage10}>
                                    <Image
                                        src={"https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/allFeatures/Rectangle30.webp"}
                                        alt={"image"}
                                        width={"0"}
                                        height={"0"}
                                        sizes={"100vw"}
                                        style={{ width: "100%", height: "100%" }}
                                        />
                                </div>
                            </div>
                            <div className={styles.allFeaturesText}>
                                <p>
                                   Trigger chat messages based on the visitors website journey to 
                                   nudge them to conversion.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        
    </div>
  );
};
