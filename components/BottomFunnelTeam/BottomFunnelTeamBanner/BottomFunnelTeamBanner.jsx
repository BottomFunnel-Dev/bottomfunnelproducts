import React from 'react'
import Image from 'next/image'
import styles from "./BottomFunnelTeamBanner.module.css";

export const BottomFunnelTeamBanner = () => {
  return (
    <div className={styles.BottomFunnelTeamBannermaindiv}>
        <div className={styles.BottomFunnelTeamBannercontent}>
            <h1>Opens HRMS- to attain the growth that you sought</h1>
            <p>From employee data management to payroll, recruitment, benefits, training talent management, employee engagement, and employee attendance, HRMS software helps HR professionals manage the modern workforce.  </p>
            <button className={styles.BottomFunnelTeamBannerbutton}>Start Your Free Trial</button>
        </div>
        <div className={styles.BottomFunnelTeamBannerimage}>
        <Image
  src={"https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/bottomfunnelteamsphotos/bgbanner.webp"}
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
