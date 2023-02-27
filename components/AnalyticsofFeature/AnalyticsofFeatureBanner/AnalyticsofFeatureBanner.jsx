import React from 'react'
import styles from "./AnalyticsofFeatureBanner.module.css"
import Image from 'next/image'

export const AnalyticsofFeatureBanner = () => {
  return (
    <div>
    <div className={styles.AnalyticsofFeatureBannermaindiv}>
      <div className={styles.AnalyticsofFeatureBannerimage}>
      <Image
          src={"/Images/Analyticsoffeatureimage/bgbanner.webp"}
          alt={"image"}
          width={"0"}
          height={"0"}
          sizes={"100vw"}
          style={{ width: "100%", height: "100%" }}
        /> 
      </div>

      <div className={styles.AnalyticsofFeatureBannerimagecontent}>
        <div>
            <h1>Unlock Critical Business Insights with No-code <span>Analytics</span></h1>
            <hr/>

            <p>Build on top of customers data by seamlessly streaming events in real-time from bottom funnel products to third-party apps and AWS.   </p>
            <button  className={styles.AnalyticsofFeatureBannerbutton}>Explore Now</button>
        </div>
      </div>
    </div>
    </div>
  )
}
