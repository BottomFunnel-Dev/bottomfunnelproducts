import React from "react";
import styles from "./AllFeaturesTemplate.module.css";
import Image from "next/image";

export const AllFeaturesTemplate = () => {
  return (
    <div className={styles.allFeaturesTemplateMainDiv}>
        <div className={styles.allFeaturesTemplateHeading}>
           <h1>Get started from Day 1 with templates</h1>
           <p>Reduce time spent setting up campaigns with ready-made templates</p>
        </div>
            <div className={styles.allFeaturesTemplateContainerBoxes}>
                 
                    <div className={styles.allFeatureDataContainers}>
                        <div className={styles.allFeaturesTemplateBoxes}>
                           <div className={styles.allFeaturesTemplateIconsHeading}>
                                <h3>Email Templates</h3>
                                <div className={styles.allFeaturesTemplateImage1}>
                                    <Image
                                        src={"https://d3op2l77j7wnti.cloudfront.net/Images/allFeatures/Rectangle18.webp"}
                                        alt={"image"}
                                        width={"0"}
                                        height={"0"}
                                        sizes={"100vw"}
                                        style={{ width: "100%", height: "100%" }}
                                        />
                                </div>
                            </div>
                            <div className={styles.allFeaturesTemplateText}>
                                <p>
                                   Choose from 150+ email templates to create your 
                                   campaigns customize emails using the drag-and-drag editor.
                                </p>
                            </div>
                        </div>
                        <div className={styles.allFeaturesTemplateBoxes}>
                           <div className={styles.allFeaturesTemplateIconsHeading}>
                                <h3>Bot Templates</h3>
                                <div className={styles.allFeaturesTemplateImage2}>
                                    <Image
                                        src={"https://d3op2l77j7wnti.cloudfront.net/Images/allFeatures/Rectangle19.webp"}
                                        alt={"image"}
                                        width={"0"}
                                        height={"0"}
                                        sizes={"100vw"}
                                        style={{ width: "100%", height: "100%" }}
                                        />
                                </div>
                            </div>
                            <div className={styles.allFeaturesTemplateText}>
                                <p>
                                    Get Started with pre-built D2C bot templates modify the bot to meet
                                    your needs, preview the changes, and deploy it across channels easily. 
                                </p>
                            </div>
                        </div>
                        <div className={styles.allFeaturesTemplateBoxes}>
                           <div className={styles.allFeaturesTemplateIconsHeading}>
                                <h3>Journey Templates</h3>
                                <div className={styles.allFeaturesTemplateImage3}>
                                    <Image
                                        src={"https://d3op2l77j7wnti.cloudfront.net/Images/allFeatures/Rectangle20.webp"}
                                        alt={"image"}
                                        width={"0"}
                                        height={"0"}
                                        sizes={"100vw"}
                                        style={{ width: "100%", height: "100%" }}
                                        />
                                </div>
                            </div>
                            <div className={styles.allFeaturesTemplateText}>
                                <p>
                                    Set up journeys in minute with pre-built playbooks and run 
                                    campaigns with follow-up actions for common use cases like order confirmations,cart 
                                    abandonment, post-purchase feedback, and more.
                                </p>
                            </div>
                        </div>
                    </div>

            </div>
    </div>
  );
};
