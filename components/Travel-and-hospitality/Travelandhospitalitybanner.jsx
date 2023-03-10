import Image from 'next/image'
import React from 'react'
import styles from "./Travelandhospitalitybanner.module.css"


export const Travelandhospitalitybanner = () => {
  return (
    <div className={styles.travelandhospitalitybannermainboxes}>
    <div className={styles.travelandhospitalitybennerleftbox}>
    <h1>Shoppers want more than a transaction</h1>
    <p>Your customers don't want a product.They want a delightful shopping experience.
    WOW your customers with omnichannel customer service using the Freshworks
    Customer Service Platform.</p>
    <button className={styles.travelandhospbanbutton}>SIGN UP FOR FREE</button>
    
    </div>

    <div className={styles.travelandhospitalitybennerrightbox}>
    
    <Image
          src={"/Images/Travel & hospitality/Bannersbackgrounds/Group770588.webp"}
          alt={"image"}
          width={"0"}
          height={"0"}
          sizes={"100vw"}
          style={{ width: "100%", height: "100%", objectFit:"contain" }}
        />

    
    
    </div>
    
    </div>
  )
}
