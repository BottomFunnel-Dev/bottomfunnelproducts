import React from 'react'
import styles from "./EmailIntegrationBanner.module.css";
import Image from 'next/image';

export const EmailIntegrationBanner = () => {
  return (
    <div>
      <div className={styles.EmailIntegrationBannermaindiv}>
        <div className={styles.EmailIntegrationBannerimagediv}>
        <Image
          src={"/Images/EmailIntegrationphotos/bannerrbg.webp"}
          alt={"image"}
          width={"0"}
          height={"0"}
          sizes={"100vw"}
          style={{ width: "100%", height: "100%" }}
        /> 
        </div>
        <div className={styles.EmailIntegrationBannercontentdiv}>
            <h1>
                Send, manage, and track and sales email right from your CRM
            </h1>
            <hr/>
            
            <p>Use Bottom funnel to manage your sales teams' email conversation, sand effective outbond campaigns, and accelerate sales performance.</p>
        <button className={styles.EmailIntegrationBannerbutton}>Explore Now</button>
        </div>
      </div>
    </div>
  )
}
