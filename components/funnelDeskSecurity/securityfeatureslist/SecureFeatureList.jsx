import Image from "next/image";
import React from "react";
import styles from "./SecureFeatureList.module.css";

export const SecureFeatureList = () => {
  return (
    <div className={styles.secureFeatureListContainer}>
      <div>
        <h2>Get the complete Supportdesk feature list</h2>
        <p>
          The complete feature list includes all features available in
          Supportdesk, a brief description of each feature, and its plan
          information`
        </p>
        <button>Get It Now</button>
      </div>
      <span>
        <Image
          src={"https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/funneldeskSecurity/secureFeatureList.webp"}
          alt={"funneldeskSecurity/secureFeatureList.webp"}
          width={"0"}
          height={"0"}
          sizes={"100vw"}
          style={{ width: "100%", height: "100%" }}
        />
      </span>
    </div>
  );
};
