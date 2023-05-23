import React from 'react'
import styles from "./HealthcareSalesBanner.module.css";


export const HealthcareSalesBanner = () => {
  return (
    <div>
               <div className={styles.HealthcareSalesBannermaindiv}>
   <div className={styles.HealthcareSalesBannermaindivinner}>
    <h1 >Healthcare CRM </h1>
    <p>Manage appointments, keep track of patient records, get visibility into the status of every bill, and retain patients by building trust with a modern healthcare CRM.</p>
   <button className={styles.HealthcareSalesBannermaindivbutton}>Start your Free Trial</button>
   </div>
   <div className={styles.HealthcareSalesBannerannimation}>
     <lottie-player
                  src={"https://d3op2l77j7wnti.cloudfront.net/Animation/salesindustriesanimation/Health care.json"}
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
