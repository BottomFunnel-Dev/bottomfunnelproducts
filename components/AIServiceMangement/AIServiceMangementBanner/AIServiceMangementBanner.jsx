import React from 'react'
import styles from "./AIServiceMangementBanner.module.css"
import Image from 'next/image'

export const AIServiceMangementBanner = () => {
  return (
    <div>
         <div className={styles.AIServiceMangementBannermaindiv}>
            <div className={styles.AIServiceMangementBannermaindivcontent}>
             <h1>AI for IT Service Management</h1>
             <p>  Empower your support agents with intelligent recommendations to free up their time to focus on high value strategic work</p>
            
             <button  className={styles.AIServiceMangementBannermaindivcontentbutton}>Explore Now</button>
            </div>
            <div className={styles.AIServiceMangementBannermaindivimage}>
            <Image
                  src={"/Images/AIservicemanagement/banner.webp"}
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
