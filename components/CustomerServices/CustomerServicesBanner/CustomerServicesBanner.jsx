import React from "react";
import Image from "next/image";
import styles from "./CustomerServicesBanner.module.css";
export default function CustomerServicesBanner() {
  return (
    <div className={styles.CustomerservicesBannerMaindiv}>
      <div className={styles.CustomerservicesBannerImagediv}>
        <Image
          src={"/Images/CustomerServices/image1.png"}
          alt={"image"}
          width={"0"}
          height={"0"}
          sizes={"100vw"}
          style={{ width: "100%", height: "100%" }}
        />
      </div>
      <div className={styles.CustomerservicesBannerinnercontentdiv}>
        <h1>Your Customer service that breaks the CSAT scale, our platform</h1>
        <p>
          Have customers seeing stars with a unified and intelligent support
          platform.{" "}
        </p>
        <button className={styles.CustomerservicesBannerButton}>
          Get the report
        </button>
      </div>
    </div>
  );
}
