import React from "react";
import styles from "./WhatsNewBanner.module.css";
import Image from "next/image";
export default function WhatsNewBanner() {
  return (
    <div className={styles.WhatsNewBannerMain}>
      <div>
        <h1>What's New with Bottom Funnel Marketer</h1>
        <p>See highlights from our monthly product updates</p>
        <button></button>
      </div>
      <div>
        <Image
          src={img}
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
