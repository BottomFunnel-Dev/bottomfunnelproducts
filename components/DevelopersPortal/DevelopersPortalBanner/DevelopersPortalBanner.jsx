import React from 'react'
import styles from "./DevelopersPortalBanner.module.css"
import Image from "next/image";

export const DevelopersPortalBanner = () => {
  return (
     
    <div className={styles.developerPortalBannerContainer}>
    <div className={styles.developerPortalBannerContainer}>
    <div className={styles.developerPortalBannerText}>
        <h1>Build more and with our vigilant developers
</h1>
        <p>Welcome to our developer hiring portal for companies! Our platform offers a comprehensive solution for all your hiring needs in the tech industry. With a large pool of talented developers, we provide access to top candidates from around the world. Whether you're a startup or a large corporation, our portal can help you find the right talent to drive your business forward. Join us today and build your dream team!</p>
        <button>Sign up</button>
    </div>
    <div className={styles.developerPortalBannerImage}>
        <Image
            src={"https://d3op2l77j7wnti.cloudfront.net/Images/developerPortal/Group8.png"}
            alt={"image"}
            width={"0"}
            height={"0"}
            sizes={"100vw"}
            style={{ width: "100%", height: "100%" }}
            />
    </div>
    </div>
</div>
  )
}
