import React from 'react'
import styles from "./DealManagementLowerbanner.module.css"
import Image from 'next/image'

export const DealManagementLowerbanner = () => {
  return (
    <div className={styles.dealmanagementlowerbannermainbox}>
    <div className={styles.dealmanagementlowerbannertxtbox}>
    <h1>Looking for an all-in-one sales and marketing solution? Try Freshsales Suite</h1>

    <p>Freshsales Suite combines the power of sales,marketing,chat and telephony in one AI-powered solution.</p>
    <div className={styles.lowerbannerflecxbox}>

    <div className={styles.lowerbannerlefttbox}>
    <ul>
    <li>Attract the best leads with personalized messages</li>
    <li>Engage across channels - Phone, Email,WhatsApp, Chat</li>
    <li>Close deals faster with AI-powered insights</li>
    <li>Deliver personalized experiences with 360° customer context</li>
    </ul>
     </div>

<div className={styles.lowerbannerrightbox}>
<Image
          src={"/Images/Deal management/banners & background/ha/sales vector 1.webp"}
          alt={"images"}
          width={"0"}
          height={"0"}
          sizes={"100vw"}
          style={{ width: "100%", height: "100%", objectFit:"contain" }}
        />



</div>


    </div>
    </div>
    
    </div>
  )
}
