import React from "react";
import styles from "./AllFeaturesTemplate.module.css";
import Image from "next/image";

export const AllFeaturesTemplate = () => {
  return (
    <div className={styles.allFeaturesTemplateMainDiv}>
        <div className={styles.allFeaturesTemplateHeading}>
           <h1>Get Started Strong with the Right Template for Your AI Chat Support</h1>
           <p>Set Yourself Up for Success: Start Strong by reducing set up time from Day One.</p>
        </div>
            <div className={styles.allFeaturesTemplateContainerBoxes}>
                 
                    <div className={styles.allFeatureDataContainers}>
                        <div className={styles.allFeaturesTemplateBoxes}>
                           <div className={styles.allFeaturesTemplateIconsHeading}>
                                <h3>Enhance Email Engagement</h3>
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
                                Utilize AI chat support in your email campaigns with Bottom Funnel's custom-designed chatbot templates. Embed interactive chat elements in your emails to provide real-time assistance, capture feedback, and drive higher engagement. Deliver personalized experiences and boost email performance with AI-powered chat support from Bottom Funnel.
                                </p>
                            </div>
                        </div>
                        <div className={styles.allFeaturesTemplateBoxes}>
                           <div className={styles.allFeaturesTemplateIconsHeading}>
                                <h3>Seamless Bot Integration</h3>
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
                                Accelerate your customer support with AI chat support using Bottom Funnel's expertly designed-bot templates. Customize and deploy chatbots across various channels to automate customer interactions, provide instant responses, and streamline customer service. Maximize efficiency and deliver exceptional user experiences with AI-powered chat support from Bottom Funnel.
                                </p>
                            </div>
                        </div>
                        <div className={styles.allFeaturesTemplateBoxes}>
                           <div className={styles.allFeaturesTemplateIconsHeading}>
                                <h3>Optimized Customer Journeys</h3>
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
                                Enhance customer experiences with AI chat support using Bottom Funnel's journey templates. Create personalized customer journeys based on specific touchpoints and automate interactions at each stage, from onboarding to post-purchase support. Streamline customer engagement, build lasting relationships, and drive customer satisfaction with AI-powered journey templates from Bottom Funnel.
                                </p>
                            </div>
                        </div>
                    </div>

            </div>
    </div>
  );
};
