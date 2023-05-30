import Image from 'next/image'
import React from 'react'
import styles from "./Fieldservicemanagementbanner.module.css"


export const Fieldservicemanagementbanner = () => {

  return (
    <div className={styles.fieldServiceBannerMainDiv}>
      <div className={styles.fieldServiceBannerImage}>
        <Image
          src={"https://d3op2l77j7wnti.cloudfront.net/Images/Feild Service Management/Screens/banner.png"}
          alt={"icon"}
          width={"0"}
          height={"0"}
          sizes={"100vw"}
          style={{ width: "100%", height: "100%" }}
        />
      </div>

      <div className={styles.fieldServiceBannerHeadings}>
        <h2>Build and grow a profitable field service organization</h2>
        <p>A seamless end-to-end solution with all the capabilities you need to help your customers.</p>

        <button>Get started for free</button>
        
        <button className={styles.fieldserviceBannerButton}>Request Demo</button>

      </div>
    </div>
  )
}
