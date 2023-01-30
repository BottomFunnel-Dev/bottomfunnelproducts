import React from "react";
import styles from "./webdevBanner.module.css";
export const WebdevBanner = ({ paraColor, bannerContent }) => {
  return (
    <div
      className={styles.webDevBanner}
      style={{
        background: `url(${bannerContent.background})`,
        backgroundPosition: "right",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className={styles.webDebText}>
        <h1 style={{ color: paraColor ? paraColor : null }}>
          <span className={styles.orange}>{bannerContent.title.orange}</span>{" "}
          {bannerContent.title.normal}
        </h1>
        <p style={{ color: paraColor ? paraColor : null }}>
          {bannerContent.description}
        </p>

        <button className={styles.webDevButton}>Request A Quote</button>
      </div>
    </div>
  );
};
