import React from 'react'
import styles from "./SuiteBanner.module.css"
import Image from 'next/image'
export default function SuiteBanner () {
  return (
    <div className={styles.SuiteBannerMain}>
        
        <div className={styles.SuiteBannertext}>
            <h1> 
              Unite Sales and Marketing around<br/> the customer with an all-in-one CRM
            </h1>
            <p>Know customer intent to help sales convert faster with a 360° view</p>
            <div className={styles.SuiteBannerbutton}>
              <button className={styles.button}>SIGN UP</button>
              <button className={styles.button2}>VIEW PRICING</button>
            </div>

            
        </div>
        <div className={styles.SuiteBannerimg}>
        <Image
        src={"/Images/SuitePage/Banners & Backgrounds/Group 1000003852.webp"}
        alt={"/Images/SuitePage/Banners & Backgrounds/"}
          width={"0"}
          height={"0"}
          sizes={"100vw"}
          style={{ width: "100%", height: "100%" }}
        />
        </div>
    </div>
  )
}
