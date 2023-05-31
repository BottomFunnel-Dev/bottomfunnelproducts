import React from 'react'
import styles from "./ITSMServiceBanner.module.css"
import Image from 'next/image'

export const ITSMServiceBanner = () => {
  return (
    <div>
      <div className={styles.ITSMServiceBannermaindiv}>
        <div className={styles.ITSMServiceBannermaindivcontent}>
          <h1>
            Simplify Modern IT Service Management
          </h1>

          <p>
            Freshservice uncomplicates ITSM with its intuitive, intelligent,
            and right-sized service management solution
          </p>

          <button className={styles.ITSMServiceBannermaindivcontentbutton}>Explore Now</button>
          
          <button className={styles.ITSMServiceBannermaindivcontentbutton1}>Request Demo </button>
        
        </div>

        <div className={styles.ITSMServiceBannermaindivimage}>
          <Image
            src={"/Images/ITSMService/Banner.webp"}
            alt={"Image"}
            width={"0"}
            height={"0"}
            sizes={"100vw"}
            style={{ width: "100%", height: "100%" }}
          />
        </div>
      </div>
    </div>
  );
};
