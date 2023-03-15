import React from 'react'
import styles from "./EducationSalesBanner.module.css";
import Image from "next/image"

export const EducationSalesBanner = () => {
  return (
    <div className={styles.EducationSalesBannermaindiv}>
   <div className={styles.EducationSalesBannermaindivinner}>
    <h1 >CRM for Education</h1>
    <p>Attract prospective students, get a 360° view into their lifecycle, match students with the right courses, and boost enrollment rate with a modern CRM built for the education industry.</p>
   <button className={styles.EducationSalesBannermaindivbutton}>Start Your Free Trial</button>
   </div>
   <div className={styles.EducationSalesBannerannimation}>
     <lottie-player
                  src={"/Animation/salesindustriesanimation/Education.json"}
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
