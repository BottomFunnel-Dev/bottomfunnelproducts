import React from "react";
import styles from "./funnelSupport.module.css";

export const FunnelSupport = () => {
  return (
    <div className={styles.supportDesk}>
      <h2>
        Explore why Bottom Funnel Support Desk ominichannel Suite is the most
        complete support solution with the fastest time-to-value
      </h2>
      <p>
        Reimagine more meaningful conversations and turn service agents into
        customer champions Launch customer and employee delight in under 3
        months!
      </p>

      <div className={styles.deskImage}>
        <img
          src="https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/BottomFunnelDeskPhotos/point-1.png"
          alt="BottomFunnelDeskPhotos/point-1.png"
        />
        <img
          src="https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/BottomFunnelDeskPhotos/point-2.png"
          alt="BottomFunnelDeskPhotos/point-2.png"
        />
        <img
          src="https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/BottomFunnelDeskPhotos/point-3.png"
          alt="BottomFunnelDeskPhotos/point-3.png"
        />
      </div>
    </div>
  );
};
