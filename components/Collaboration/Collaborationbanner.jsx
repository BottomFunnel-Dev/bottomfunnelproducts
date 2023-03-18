import Image from 'next/image'
import React from 'react'
import styles from "./Collaborationbanner.module.css"


export const Collaborationbanner = () => {
  return (
    <div className={styles.collaborationbannermainboxes}>
    <div className={styles.collaborationbannerleftbox}>
    
    <Image
          src={"https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/Collaboration/components/Group 1000006028.webp"}
          alt={"images"}
          width={"0"}
          height={"0"}
          sizes={"100vw"}
          style={{ width: "100%", height: "95%" , objectFit:"contain"}}
            />

    </div>

    <div className={styles.collaborationbannerrightbox}>
    <h1>Foster team collaboration for better productivity</h1>
    <p>Empower teams to collaborate contextually, from anywhere, and seamlessly within the workflow</p>

    <button className={styles.collaborationbannerbutton}>Explore Now</button>
    
    </div>
    
    </div>
  )
}
