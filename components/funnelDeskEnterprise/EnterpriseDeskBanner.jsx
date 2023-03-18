import React from "react";
import styles from "./enterpriseDeskBanner.module.css";
export const EnterpriseDeskBanner = () => {
  return (
    <div className={styles.enterpriseBanner}>
      <div className={styles.enterBannerText}>
        <div>
          <h1>Provide Enterprise Support without the Enterprise Hassle</h1>
          <p>
            Don't sattle for blotted software. take a fresh apporach that works
            for you and not the other way around
          </p>

          <button>Get Started</button>
        </div>
      </div>
      <div className={styles.enterBanner}>
        <img
          src="https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/Enterprise/banner/Banner.png"
          alt="banner/Banner.png"
        />
      </div>
    </div>
  );
};
