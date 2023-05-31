import React from 'react'
import styles from "./ProductTourBanner.module.css"
import Image from "next/image";

export const ProductTourBanner = () => {
  return (
    <div className={styles.productTourBannerConatiner}>
      <div className={styles.productTourBannerText}>
        <h1>Product Tour</h1>

        <p>
          Our product tours showcase best practices and tips on how to use Bottom Funnel Marketer's features to help you work
          on reelvant leads and convert them faster
        </p>
        
        <button>Start a Free Demo</button>
      </div>

      <div className={styles.productTourBannerImage}>
        <Image
          src={"/Images/productTour/banner.png"}
          alt={"image"}
          width={"0"}
          height={"0"}
          sizes={"100vw"}
          style={{ width: "100%", height: "100%" }}
        />
      </div>
    </div>
  );
};
