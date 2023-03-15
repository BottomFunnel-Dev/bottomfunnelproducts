import Image from 'next/image';
import React from 'react';
import styles from "./Smbbanner.module.css";

export const Smbbanner = () => {
  return (
    <div className={styles.smbbannermainboxes}>
      <div className={styles.smbBannerImage}>
      <Image
          src={"/Images/SMB/banner.png"}
          alt={"icon"}
          width={"0"}
          height={"0"}
          sizes={"100vw"}
          style={{ width: "100%", height: "100%" }}
        />
      </div>
      <div className={styles.smbBannerHeadings}>
        
      </div>
    </div>
  )
}
