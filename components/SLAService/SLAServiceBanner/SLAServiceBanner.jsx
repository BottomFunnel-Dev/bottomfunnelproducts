import React from 'react'
import styles from "./SLAServiceBanner.module.css"
import Image from 'next/image'

export const SLAServiceBanner = () => {
  return (
    <div>
         <div className={styles.ITSMServiceBannermaindiv}>
            <div className={styles.ITSMServiceBannermaindivcontent}>
             <h1>Define service level targets to deliver exceptional service</h1>
             <p>Set service level agreement (SLA) policies that suit your service desk needs and increase SLA compliance</p>
            
             <button  className={styles.ITSMServiceBannermaindivcontentbutton}>Explore Now</button> 
            </div>
            <div className={styles.ITSMServiceBannermaindivimage}>
            <Image
                  src={"/Images/SLAServicephotos/banner.webp"}
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
