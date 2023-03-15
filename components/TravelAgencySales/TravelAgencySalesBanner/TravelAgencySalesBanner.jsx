import React from 'react'
import styles from "./TravelAgencySalesBanner.module.css";
import Image from "next/image"

export const TravelAgencySalesBanner = () => {
  return (
   
     <div className={styles.TravelAgencySalesBannermaindiv}>
   <div className={styles.TravelAgencySalesBannermaindivinner}>
    <h1 >Travel Agency CRM</h1>
    <p>Understand your customers, engage in meaningful conversations, curate personalized trips, and keep them coming back for more with the leading CRM for travel.</p>
   <button className={styles.TravelAgencySalesBannermaindivbutton}>Start Your Free Trial</button>
   </div>

   <div className={styles.TravelAgencySalesBannerannimation}>
     <lottie-player
                  src={"/Animation/salesindustriesanimation/Travel Agency.json"}
                  background="transparent"
                  speed="1"
                  loop
                  autoplay
                  >
            </lottie-player>
  </div>
    </div>
    
  )
}

