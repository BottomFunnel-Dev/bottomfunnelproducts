import React from "react";
import styles from "./AllFeaturesBanner.module.css";
import Image from "next/image";

export const AllFeaturesBanner = () => {
  return (
    <div className={styles.allFeaturesBannerMaindiv}>
      <div className={styles.allFeaturesBannerImage}>
        <Image
            src={"https://d3op2l77j7wnti.cloudfront.net/Images/allFeatures/banner.webp"}
            alt={"image"}
            width={"0"}
            height={"0"}
            sizes={"100vw"}
            style={{ width: "100%", height: "100%" }}
            />
      </div>
      <div className={styles.allFeaturesBannerText}>
        <h1>
            Grow Your e-commerce store<br/>
            with personlized engagement<br/>
            and powerful automation
        </h1>
        <button>Start A Free Demo</button>
      </div>
    </div>
  );
};
