import React from "react";
import styles from "./AllFeaturesTime.module.css";
import Image from "next/image";

export const AllFeaturesTime = () => {
  return (
    <div className={styles.allFeaturesTimeMainDiv}>
        <div className={styles.allFeaturesHeading}>
           <h1>Automate and save time</h1>
           <p>Deliver an optimized experience with the power of artificial intelligence </p>
        </div>
  
            <div className={styles.allFeaturesTimeContainerBoxes}>
                <div className={styles.allFeatureTimeContainerDiv}>
                    <div className={styles.allFeatureDataContainers}>
                        <div className={styles.allFeaturesBoxes}>
                           <div className={styles.allFeaturesIconsHeading}>
                                <h3>Personalized Email Campaigns</h3>
                                <div className={styles.allFeaturesImage1}>
                                    <Image
                                        src={"https://d3op2l77j7wnti.cloudfront.net/Images/allFeatures/Rectangle25.webp"}
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
                                Leverage the Expertise of the Bottom Funnel Chatbot to Create Engaging and Conversion-Driven Email Campaigns That Resonate with Your Audience and Drive Results.
                                </p>
                            </div>
                        </div>
                        <div className={styles.allFeaturesBoxes}>
                           <div className={styles.allFeaturesIconsHeading}>
                                <h3>SMS Campaigns</h3>
                                <div className={styles.allFeaturesImage2}>
                                    <Image
                                        src={"https://d3op2l77j7wnti.cloudfront.net/Images/allFeatures/Rectangle27.webp"}
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
                                Leverage the Power of Personalized and Targeted SMS Messages to Connect with Your Audience in Real-Time, Drive Engagement, and Maximize Conversions for Your Business.
                                </p>
                            </div>
                        </div>
                        <div className={styles.allFeaturesBoxes}>
                           <div className={styles.allFeaturesIconsHeading}>
                                <h3>WhatsApp Campaigns</h3>
                                <div className={styles.allFeaturesImage3}>
                                    <Image
                                        src={"https://d3op2l77j7wnti.cloudfront.net/Images/allFeatures/Rectangle26.webp"}
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
                                Seamlessly Engage and Interact with Your Customers on WhatsApp, Delivering Personalized Messages, Promotions, and Updates to Drive Engagement, Foster Customer Loyalty, and Boost Your Business Growth.
                                </p>
                            </div>
                        </div>
                        <div className={styles.allFeaturesBoxes}>
                           <div className={styles.allFeaturesIconsHeading}>
                                <h3>Transactional Emails</h3>
                                <div className={styles.allFeaturesImage4}>
                                    <Image
                                        src={"https://d3op2l77j7wnti.cloudfront.net/Images/allFeatures/Rectangle28.webp"}
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
                                Streamline and Automate Transactional Messaging, Delivering Real-Time Updates, Order Confirmations, Shipping Notifications, and More to Enhance Customer Experience, Build Trust, and Drive Repeat Business for Your Brand.
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
                                        src={"https://d3op2l77j7wnti.cloudfront.net/Images/allFeatures/Rectangle29.webp"}
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
                                Engage Customers in Real-Time Conversations, Personalize Interactions, Deliver Targeted Offers, and Drive Conversions. Seamlessly Integrate Chatbot Capabilities Across Multiple Channels for Enhanced Customer Engagement and Exceptional ROI on Your Marketing Efforts.
                                </p>
                            </div>
                        </div>

                        <div className={styles.allFeaturesBoxes1}>
                            <div className={styles.allFeaturesIconsHeading}>
                                <h3>Chat Campaigns</h3>
                                <div className={styles.allFeaturesImage10}>
                                    <Image
                                        src={"https://d3op2l77j7wnti.cloudfront.net/Images/allFeatures/Rectangle30.webp"}
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
                                Connect with Your Audience through Interactive Chat Experiences, Deliver Personalized Messages, Capture Leads, and Nurture Relationships. Leverage the Power of AI Chatbots to Drive Engagement, Increase Conversions, and Achieve Remarkable Results for Your Business.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        
    </div>
  );
};
