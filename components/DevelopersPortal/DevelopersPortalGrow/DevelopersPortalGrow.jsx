import React from 'react'
import styles from "./DevelopersPortalGrow.module.css"
import Image from "next/image";

export const DevelopersPortalGrow = () => {
  return (
     
    <div className={styles.developerPortalGrowConatiner}>
    
    <div className={styles.developerPortalGrowImage}>
        <Image
            src={"https://d3op2l77j7wnti.cloudfront.net/Images/developerPortal/Frame1.png"}
            alt={"image"}
            width={"0"}
            height={"0"}
            sizes={"100vw"}
            style={{ width: "100%", height: "100%" }}
            />
    </div>

    <div className={styles.developerPortalGrowText}>
        <h2>MarketPlace</h2>
        <h3>Grow with us!</h3>
        <p>
        Our marketplaces can help developers by providing a platform to showcase and monetize their software products, reaching a wider audience and generating revenue from their work.

        </p>
        <button>Visit Our Marketplace</button>
    </div>

    </div>

  )
}
