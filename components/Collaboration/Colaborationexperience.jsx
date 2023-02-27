import Image from 'next/image'
import React from 'react'
import styles from "./Colaborationexperience.module.css"


export const Colaborationexperience = () => {
  return (
    <div className={styles.colaborationexpmainboxes}>
    <h1>Provide seamless conversational experiences</h1>
    <p>Increase your agent productivity and improve your customer experience with contextual conversations across popular messaging applications.</p>
    <div className={styles.colaborationexperienceimagebox}>
    
    <Image
          src={"/Images/Collaboration/components/Group 1000006029.webp"}
          alt={"images"}
          width={"0"}
          height={"0"}
          sizes={"100vw"}
          style={{ width: "100%", height: "100%",objectFit:"contain" }}
        />

    
    </div>
    
    </div>
  )
}
