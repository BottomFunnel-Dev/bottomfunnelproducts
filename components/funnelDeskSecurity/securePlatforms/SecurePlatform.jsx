import Image from "next/image";
import React from "react";
import styles from "./SecurePlatform.module.css";

export const SecurePlatform = () => {
  return (
    <div className={styles.securePlatformContainer}>
      <span>
        <Image
          src={"https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/funneldeskSecurity/securePlatform.webp"}
          alt="funneldeskSecurity/securePlatform.webp"
          width={"0"}
          height={"0"}
          sizes={"100vw"}
          style={{ width: "100%", height: "100%" }}
        />
      </span>
      <div>
        <h2>Stay secure across all Platforms</h2>
        <p>
          Access all your Freshworks accounts with a single password or
          associated Goggle account with Fresh ID.
        </p>
        <ul>
          <li>Simplified authentication process</li>
          <li>
            Hassly-free Security accross Freshchat, FreshMarketer, FreshConnect,
            FreshSales, FreshDesk Contact Center.
          </li>
          <li>Easy access retrieval in case login credentials have lapsed</li>
        </ul>
      </div>
    </div>
  );
};
