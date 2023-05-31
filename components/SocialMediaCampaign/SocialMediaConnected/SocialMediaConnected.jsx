import React from "react";
import styles from "./SocialMediaConnected.module.css";
import Image from "next/image";

export const SocialMediaConnected = () => {
  return (
     <div className={styles.socialmediaConnectedMainDiv}>
        <h1>Stay connected with your customers</h1>
        <div className={styles.socialmediaConnectedContainer}>
            <div className={styles.socialmediaBoxes}>
                <h1>Drive business results</h1>
                <div className={styles.socialmediaConnectedImage}>
                   <Image
                        src={"https://d3op2l77j7wnti.cloudfront.net/Images/SocialMediaCampaign/vector1.webp"}
                        alt={"image"}
                        width={"0"}
                        height={"0"}
                        sizes={"100vw"}
                        style={{ width: "100%", height: "100%" }}
                        />
                </div>
                <p>
                    Build Your Brand on social media, engage better, earn customers trust and grow your business
                </p>
            </div>
            <div className={styles.socialmediaBoxes}>
                <h1>Drive business results</h1>
                <div className={styles.socialmediaConnectedImage}>
                   <Image
                        src={"https://d3op2l77j7wnti.cloudfront.net/Images/SocialMediaCampaign/vector1.webp"}
                        alt={"image"}
                        width={"0"}
                        height={"0"}
                        sizes={"100vw"}
                        style={{ width: "100%", height: "100%" }}
                        />
                </div>
                <p>
                    Build Your Brand on social media, engage better, earn customers trust and grow your business
                </p>
            </div>
            <div className={styles.socialmediaBoxes}>
                <h1>Drive business results</h1>
                <div className={styles.socialmediaConnectedImage}>
                   <Image
                        src={"https://d3op2l77j7wnti.cloudfront.net/Images/SocialMediaCampaign/vector1.webp"}
                        alt={"image"}
                        width={"0"}
                        height={"0"}
                        sizes={"100vw"}
                        style={{ width: "100%", height: "100%" }}
                        />
                </div>
                <p>
                    Build Your Brand on social media, engage better, earn customers trust and grow your business
                </p>
            </div>
        </div>
     </div>
  );
};
