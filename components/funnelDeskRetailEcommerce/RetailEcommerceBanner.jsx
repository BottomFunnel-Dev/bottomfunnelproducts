import React from "react";
import styles from "./RetailEcommerceBanner.module.css";

export const RetailEcommerceBanner = () => {
  return (
    <div className={styles.retailecommercebannermainboxes}>
      <div className={styles.retailecommercebannerleftbox}>
        <h1>Shoppers want more than a transaction</h1>
        <p>
          Your customers dont want a product.They want a delightful shopping
          experience.Wow your customers with omnichannel customer service using
          the Bottom Funnel customer Service Platform.
        </p>
        <button className={styles.retailsecommercebannerbutton}>
          Sign up for free
        </button>
      </div>
      <div className={styles.retailecommercebannerrightbox}>
        <img
          src="https://d3op2l77j7wnti.cloudfront.net/Images/Retail&ecommerce/banner/banner.webp"
          alt="Retail&ecommerce/banner/Frame.png"
        />
      </div>
    </div>
  );
};
