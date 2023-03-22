import React from 'react'
import styles from "./FacebookBanner.module.css"
import Image from 'next/image'

export const FacebookBanner = () => {
  return (
    <div>
        <div className={styles.FacebookBannermaindiv}>
            <div className={styles.FacebookBannermaindivcontent}>
             <h1>Deliver digital-first customer service to your customers on facebook </h1>
             <p>Be there for your customers whenever and wherever they need you. Engage your customers and offer personal, proactive, and timely support on Facebook Messenger. </p>
             <button  className={styles.FacebookBannermaindivcontentbutton}>Explore Now</button>
            </div>
            <div className={styles.FacebookBannermaindivimage}>
            <Image
                  src={"/Images/facebookphotos/bannerbg.webp"}
                  alt={"Image"}
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
