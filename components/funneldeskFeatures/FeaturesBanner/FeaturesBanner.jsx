import Image from "next/image";
import React from "react";
import styles from "./FeaturesBanner.module.css";

export const FeaturesBanner = ({ data }) => {
  return (
    <div className={styles.featuresBannerContainer}>
      <div>
        <h1>{data.title}</h1>
        <p>{data.para}</p>
        <button>Start A Free Demo</button>
      </div>
      <span>
        <Image
          src={`https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/${data.image}`}
          alt={data.image}
          width={"0"}
          height={"0"}
          sizes={"100vw"}
          style={{ width: "100%", height: "100%" }}
        />
      </span>
    </div>
  );
};
