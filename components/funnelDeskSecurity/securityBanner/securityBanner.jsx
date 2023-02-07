import Image from "next/image";
import React from "react";
import styles from "./securityBanner.module.css";

export const SecurityBanner = () => {
  return (
    <div className={styles.securityBannerContainer}>
      <span>
        <Image
          src={"/Images/funneldeskSecurity/banner.webp"}
          alt="funneldeskSecurity/banner.webp"
          width={"0"}
          height={"0"}
          sizes={"100vw"}
          style={{ width: "100%", height: "100%" }}
        />
      </span>
      <div>
        <h1>Safeguard your helpdesk data with Supportdesk</h1>
        <hr />
        <p>
          Scale across the globe without worrying about cross-border security
          checks. Freskdesk is a globally secure platform
        </p>
        <button>Get Started</button>
      </div>
    </div>
  );
};
