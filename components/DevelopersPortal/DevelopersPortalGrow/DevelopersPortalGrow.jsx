import React from 'react'
import styles from "./DevelopersPortalGrow.module.css"
import Image from "next/image";

export const DevelopersPortalGrow = () => {
  return (
     
    <div className={styles.developerPortalGrowConatiner}>
    
    <div className={styles.developerPortalGrowImage}>
        <Image
            src={"/Images/developerPortal/Frame1.webp"}
            alt={"image"}
            width={"0"}
            height={"0"}
            sizes={"100vw"}
            style={{ width: "100%", height: "100%" }}
            />
    </div>

    <div className={styles.developerPortalGrowText}>
        <h1>Grow with us!</h1>
        <p>Build innovative solutions to deliver customer delight with a secure, serverless, and self-serve platform
          powered by rich APIs, a robust developer toolkit, and Crayons UI design library.
        </p>
        <button>Visit Our Marketplace</button>
    </div>

    </div>

  )
}
