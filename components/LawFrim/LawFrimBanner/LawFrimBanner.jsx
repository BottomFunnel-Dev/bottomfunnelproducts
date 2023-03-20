import React from 'react'
import styles from "./LawFrimBanner.module.css";



export const LawFrimBanner = () => {
  return (
    <div>
        <div className={styles.LawFrimBannermaindiv}>
   <div className={styles.LawFrimBannermaindivinner}>
    <h1 >CRM FOR LAW-FRIM</h1>
    <p>Build and nurture strong relationships with your prospects and clients with Freshsales, a leading modern CRM for law firms.</p>
   <button className={styles.LawFrimBannermaindivbutton}>Start Your Free Trial</button>
   </div>
   <div className={styles.LawFrimBannerannimation}>
     <lottie-player
                  src={"https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Animation/salesindustriesanimation/Law Firm.json"}
                  background="transparent"
                  speed="1"
                  loop
                  autoplay
                  >
            </lottie-player>
  </div>
    </div>
    </div>
  )
}
