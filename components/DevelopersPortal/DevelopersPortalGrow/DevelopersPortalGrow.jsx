import React from 'react'
import styles from "./DevelopersPortalGrow.module.css"
import Image from "next/image";

export const DevelopersPortalGrow = () => {
  return (
     
    <div className={styles.developerPortalGrowConatiner}>
    
    <div className={styles.developerPortalGrowImage}>
        <Image
            src={"/Images/developerPortal/Frame1.png"}
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
           Publish Your app on Bottom Funnel Marketplace to gain access to a fast growing customer base of 40,000+ Bottom Funnel customers.
        </p>
        <button>Visit Our Marketplace</button>
    </div>

    </div>

  )
}
