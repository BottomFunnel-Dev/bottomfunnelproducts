import React from 'react'
import styles from "./HospitalitySalesBanner.module.css";

export const HospitalitySalesBanner = () => {
  return (
    <div>
           <div className={styles.HospitalitySalesBannermaindiv}>
   <div className={styles.HospitalitySalesBannermaindivinner}>
    <h1 >CRM for Hotels and Hospitality</h1>
    <p>Foster guest relationships and build brand loyalty with a hotel CRM</p>
   <button className={styles.HospitalitySalesBannermaindivbutton}>Start your Free Trial</button>
   </div>
   <div className={styles.HospitalitySalesBannerannimation}>
     <lottie-player
                  src={"/Animation/salesindustriesanimation/Hotels & Hospitality.json"}
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
