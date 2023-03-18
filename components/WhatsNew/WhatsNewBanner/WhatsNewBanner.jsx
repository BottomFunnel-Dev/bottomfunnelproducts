import React from "react";
import styles from "./WhatsNewBanner.module.css";
import Image from "next/image";

export default function WhatsNewBanner() {
  return (
    <div className={styles.WhatsNewBannerMain}>
      <div className={styles.WhatsNewBannertext}>
        <h1>What's New with Bottom Funnel Marketer</h1>
        <p>See highlights from our monthly product updates</p>
        <button>Start a Free Demo</button>
      </div>
      <div className={styles.WhatsNewBannerimg}>
        <Image
          src={"/Images/WhatsNew/banner.png"}
          alt={"img"}
          width={"0"}
          height={"0"}
          sizes={"100vw"}
          style={{ width: "100%", height: "100%", objectFit: "contain" }}
        />
      </div>
    </div>
  );
}
