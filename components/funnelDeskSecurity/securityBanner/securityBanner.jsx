import Image from "next/image";
import React from "react";
import styles from "./securityBanner.module.css";

export const SecurityBanner = () => {
  return (
    <div className={styles.securityBannerContainer}>
      <span>
        <lottie-player
            src={"/Animation/Security/banner.json"}
            background="transparent"
            speed="1"
            loop
            autoplay
            >
        </lottie-player>
      </span>
      <div>
        <h1>Safeguard your helpdesk data with Supportdesk</h1>
        <hr />
        <p>
          Scale across the globe without worrying about cross-border security
          checks. Freskdesk is a globally secure platform
        </p>
        <button>Get Started</button>
        <button className={styles.securityBannerButton}>Request Demo</button>
      </div>
    </div>
  );
};
