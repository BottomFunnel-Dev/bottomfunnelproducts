import Image from 'next/image'
import React from 'react'
import styles from "./Smbbanner.module.css"

export const Smbbanner = () => {
  return (
    <div className={styles.smbbannermainboxes}>
    <div className={styles.smbbannerheading}>
    <h1>Customer Support Software for SMBs</h1>
    <p>SMALL BUSINESS CUSTOMER SERVICE</p>
    </div>

    <div className={styles.smbbannerflexbox}> 
    <div className={styles.smbbannerleftbox}>
    <p>Bottom Funnel takes the chaos out of your support process so you can focus on growing your business instead.Take control of your customer support and start delivering excellent customer service!</p>
    <button className={styles.smbbannerbutton}>SIGN UP FOR FREE</button>
    </div>
    <div className={styles.smbbannerrightbox}>
    <Image
          src={"/Images/SMB/Rectangle 2.webp"}
          alt={"images"}
          width={"0"}
          height={"0"}
          sizes={"100vw"}
          style={{ width: "100%", height: "100%" }}
        />

    
    </div>
    </div>
    
    </div>
  )
}
