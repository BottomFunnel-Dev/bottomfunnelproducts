import React from "react";
import styles from "./SocialMediaCampaignSolution.module.css";
import Image from "next/image";

export const SocialMediaCampaignSolution = () => {
  return (
    <div className={styles.socialMediaSolutionMainDiv}>
      <h1>Single Solution for all your marketing needs</h1>
      <p>
        Plan and publish social media posts easily on Facebook and Instagram with BottomFunnel.
        Create engaging posts with Images and videos,increase your e-commerce brand awareness, and drive interaction
        with prospects and customers, leading them to your website.
      </p>
      <div className={styles.socialmediaSolutionImage}>
        <Image
                src={"https://d3op2l77j7wnti.cloudfront.net/Images/SocialMediaCampaign/Group1.webp"}
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
