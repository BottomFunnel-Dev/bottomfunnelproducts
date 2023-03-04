import React from 'react'
import styles from "./HospitalitySalesBanner.module.css";

export const HospitalitySalesBanner = () => {
  return (
    <div>
           <div className={styles.HospitalitySalesBannermaindiv}>
   <div className={styles.HospitalitySalesBannermaindivinner}>
    <h1 >CRM for Hotels and Hospitality</h1>
    <p>Foster guest relationships and build brand loyalty with a hotel CRM</p>
   <button className={styles.HospitalitySalesBannermaindivbutton}>Try for Free</button>
   </div>
    </div>
    </div>
  )
}
