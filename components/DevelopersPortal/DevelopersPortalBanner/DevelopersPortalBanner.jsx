import React from 'react'
import styles from "./DevelopersPortalBanner.module.css"
import Image from "next/image";

export const DevelopersPortalBanner = () => {
  return (
     
    <div className={styles.developerPortalBannerConatiner}>
    <div className={styles.developerPortalBannerText}>
        <h1>Build More, Be More</h1>
        <p>Build innovative solutions to deliver customer delight with a secure, serverless, and self-serve platform
          powered by rich APIs, a robust developer toolkit, and Crayons UI design library.
        </p>
        <button>Sign up and built an app</button>
    </div>
    <div className={styles.developerPortalBannerImage}>
        <Image
            src={"https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/developerPortal/Group8.png"}
            alt={"image"}
            width={"0"}
            height={"0"}
            sizes={"100vw"}
            style={{ width: "100%", height: "100%" }}
            />
    </div>
    </div>

  )
}
