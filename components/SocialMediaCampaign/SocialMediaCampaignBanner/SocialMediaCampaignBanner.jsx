import React from "react";
import styles from "./SocialMediaCampaignBanner.module.css";
import Image from "next/image";

export const SocialMediaCampaignBanner = () => {
  return (
    <div className={styles.socialMediaBannerMaindiv}>
      <div className={styles.socialMediaBannerImage}>
        <Image
            src={"https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/SocialMediaCampaign/banner.webp"}
            alt={"image"}
            width={"0"}
            height={"0"}
            sizes={"100vw"}
            style={{ width: "100%", height: "100%" }}
            />
      </div>
      <div className={styles.socialMediaBannerText}>
        <h1>
            Amplify Your reach and <br/>
            grow your business on <br/>
            social media
        </h1>
        <p>
            Run campaihns, engage with your customers, and <br/>
            build brand awareness on Facebook and instagram
        </p>
        <button>Start A Free Demo</button>
      </div>
    </div>
  );
};
