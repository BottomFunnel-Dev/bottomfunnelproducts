import React from 'react'
import styles from "./NgoNonProfitsBanner.module.css"
import Image from 'next/image'

export default function NgoNonProfitsBanner () {
  return (
    <div className={styles.ngoBannerMain}>
        <div className={styles.ngoBannerimg}>
        <Image
          src={"/Images/ngoandnonProfits/banner.webp"}
          alt={"img"}
          width={"0"}
          height={"0"}
          sizes={"100vw"}
          style={{ width: "100%", height: "100%", objectFit: "contain" }}
        />
        </div>
        <div className={styles.ngoBannertext}>
            <h1>Effortless help desk software for Non-Profit Organizations</h1>
            <p>Streamline shipping, improve supply chain visibility, and handle vendors from one place.Deliver effortless logistics customer service with freshdesk omnichannel.</p>
            <button>Sign up for free</button>
        </div>
    </div>
  )
}
