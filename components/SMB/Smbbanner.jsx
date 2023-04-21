import Image from 'next/image';
import React from 'react';
import styles from "./Smbbanner.module.css";

export const Smbbanner = () => {
  return (
    <div className={styles.smbbannermainboxes}>
      <div className={styles.smbBannerImage}>
      <Image
          src={"/Images/SMB/Rectangle 2.webp"}
          alt={"icon"}
          width={"0"}
          height={"0"}
          sizes={"100vw"}
          style={{ width: "100%", height: "100%" }}
        />
      </div>
      <div className={styles.smbBannerHeadings}>
        <h2>Customer support software for SMBs</h2>
        <p>Bottom Funnel takes the chaos out of your support process so you can focus on growing your business instead. Take control of your customer support and start delivering excellent customer service!</p>
        <button>Sign up for free</button>
      </div>
    </div>
  )
}
