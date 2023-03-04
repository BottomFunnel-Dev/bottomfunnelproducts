import React from 'react'
import styles from "./HealthcareSalesBanner.module.css";


export const HealthcareSalesBanner = () => {
  return (
    <div>
               <div className={styles.HealthcareSalesBannermaindiv}>
   <div className={styles.HealthcareSalesBannermaindivinner}>
    <h1 >Healthcare CRM </h1>
    <p>Manage appointments, keep track of patient records, get visibility into the status of every bill, and retain patients by building trust with a modern healthcare CRM.</p>
   <button className={styles.HealthcareSalesBannermaindivbutton}>Try for Free</button>
   </div>
    </div>
    </div>
  )
}
