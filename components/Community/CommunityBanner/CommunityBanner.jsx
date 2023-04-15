import React from "react";
import styles from "./CommunityBanner.module.css";
import Image from "next/image";

export default function CommunityBanner() {
  return (
    <div className={styles.communityBanner}>
      <Image
        src={"/Images/community/banner.png"}
        alt={"img"}
        width={"0"}
        height={"0"}
        sizes={"100vw"}
        style={{ width: "100%", height: "100%", objectFit: "contain" }}
      />
      <div className={styles.communityHeading}>
        <h1>Welcome to the Bottom Funnel Community</h1>
        <i class="bi bi-search"></i>
        <input type="text" placeholder="Hit magic in every search" />
      </div>
    </div>
  );
}
