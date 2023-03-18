import React from "react";
import styles from "./SocialMediaCampaignAwareness.module.css";
import Image from "next/image";

export const SocialMediaCampaignAwareness = () => {
  return (
    <div className={styles.socialMediaAwarenessMainDiv}>
      <h1>Engage with customers and increase brand awareness on social media</h1>
      <div className={styles.socialMediaAwarenessContainer}>
        <div className={styles.socialMediaAwarenessBoxes}>
            <h5>Plan and publish Social media content with ease</h5>
        </div>
        <div className={styles.socialMediaAwarenessBoxes}>
            <h5>Plan and publish Social media content with ease</h5>
        </div>
        <div className={styles.socialMediaAwarenessBoxes}>
            <h5>Plan and publish Social media content with ease</h5>
        </div>
        <div className={styles.socialMediaAwarenessBoxes}>
            <h5>Plan and publish Social media content with ease</h5>
        </div>
        
      </div>
      <div className={styles.socialmediaAwarenessImage}>
        <Image
                src={"https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/SocialMediaCampaign/Group2.webp"}
                alt={"image"}
                width={"0"}
                height={"0"}
                sizes={"100vw"}
                style={{ width: "100%", height: "100%" }}
                />
        </div>
    </div>
  );
};
