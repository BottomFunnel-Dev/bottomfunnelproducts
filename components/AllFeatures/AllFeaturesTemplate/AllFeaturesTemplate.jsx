import React from "react";
import styles from "./AllFeaturesTemplate.module.css";
import Image from "next/image";

export const AllFeaturesTemplate = () => {
  return (
    <div className={styles.allFeaturesTemplateMainDiv}>
        <div className={styles.allFeaturesTemplateHeading}>
           <h1>Template the right people at the right time</h1>
           <p>Gain a deeper understanding of your customers with all their datapoints in one place</p>
        </div>
        <div className={styles.allFeaturesTemplateContainer}>
            <div className={styles.allFeaturesTemplateContainerBoxes}>
                <div className={styles.allFeatureContainerDiv}>
                    <div className={styles.allFeatureDataContainers}>
                        <div className={styles.allFeaturesTemplateBoxes}>
                           <div className={styles.allFeaturesTemplateIconsHeading}>
                                <h3>Marketing Segments</h3>
                                <div className={styles.allFeaturesTemplateImage1}>
                                    <Image
                                        src={"/Images/allFeatures/Rectangle11.webp"}
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
                                    Group Your customers into segments based on demography, geography, or behaviour to
                                    engage in personalized ways with relevant campaigns.
                                </p>
                            </div>
                        </div>
                        <div className={styles.allFeaturesTemplateBoxes}>
                           <div className={styles.allFeaturesTemplateIconsHeading}>
                                <h3>Shopify-based Segments</h3>
                                <div className={styles.allFeaturesTemplateImage2}>
                                    <Image
                                        src={"/Images/allFeatures/Rectangle2.webp"}
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
                                    Connect to Shopify and get started with pre-built segments based on orders placed,
                                    added to cart, abandoned cart, and more, and set up personalized campaigns. 
                                </p>
                            </div>
                        </div>
                        <div className={styles.allFeaturesTemplateBoxes}>
                           <div className={styles.allFeaturesTemplateIconsHeading}>
                                <h3>Anonymous Website Visitors</h3>
                                <div className={styles.allFeaturesTemplateImage3}>
                                    <Image
                                        src={"/Images/allFeatures/Rectangle3.webp"}
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
                                    Use segments to identify fist-time website visitors and catch their attention
                                    with timely offers, customized discounts, and personalized promotions.
                                </p>
                            </div>
                        </div>
                    </div>
                    
                </div>

            </div>
        </div>
    </div>
  );
};
