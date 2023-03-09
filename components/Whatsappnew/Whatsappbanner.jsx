import Image from 'next/image'
import React from 'react'
import styles from "./Whatsappbanner.module.css"


export const Whatsappbanner = () => {
  return (
    <div className={styles.whatsappbannermainboxes}>
    <div className={styles.whatsappbannerleftbox}>
    
    <Image
          src={"/Images/whatsapp/components/Group 1000006276.webp"}
          alt={"img"}
          width={"0"}
          height={"0"}
          sizes={"100vw"}
          style={{ width: "100%", height: "100%" , objectFit:"contain"}}
        />

    
    </div>
    <div className={styles.whatsappbannerrightboxes}>
    <h1>Grow your business with WhatsApp Campaigns</h1>
    <p>Use WhatsApp to engage with prospects, sell fater and provide real-time support.</p>

    <button className={styles.whatsappbutton}>Start Free Trail</button>
    </div>
    
    </div>
  )
}
