import React from 'react'
import styles from "./AllFeaturesBanner.module.css"
import Image from 'next/image'

export const AllFeaturesBanner = () => {
  return (
    <div className={styles.AllFeaturesBannermaindiv}>
       <div className={styles.AllFeaturesBannermaindivinner}>
   <h1> Transform the sales experience with a fully-featured CRM </h1>
   <p>Having customer information such as past purchases and interaction history easily accessible can help customer support representatives provide better and faster customer service.</p>
   <button className={styles.AllFeaturesBannermaindivinnerbutton}>Start Free Demo </button>
      </div>
      <div  className={styles.AllFeaturesBannermaindivinnerimage}>
      <Image
          src={"/Images/allfeaturessales/banner.webp"}
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
