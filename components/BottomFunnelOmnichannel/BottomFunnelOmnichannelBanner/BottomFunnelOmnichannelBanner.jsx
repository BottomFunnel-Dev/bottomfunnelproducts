import React from 'react'
import styles from "./BottomFunnelOmnichannelBanner.module.css"
import Image from 'next/image'
export const BottomFunnelOmnichannelBanner = () => {
  return (
    <div className={styles.BottomFunnelOmnichannelBannermaindiv}>
     <div className={styles.BottomFunnelOmnichannelBannerinnerdiv}>
     <div className={styles.BottomFunnelOmnichannelBannerimage}>
        <Image
          src={"https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/Bottomfunnelomnichannelphotos/banner.webp"}
          alt={""}
          width={"0"}
          height={"0"}
          sizes={"100vw"}
          style={{ width: "100%", height: "100%" }}
        /> 
     </div>
     <div className={styles.BottomFunnelOmnichannelBannercontent}>
        <h1>Delight your customers with effortless customer service</h1>
        <p>Engage in more meaningful conversations every day, across every channel, with every customer.</p>
        <button className={styles.BottomFunnelOmnichannelBannerbutton}> Start Free Trial</button>
     </div>
     </div>
    </div>
  )
}
