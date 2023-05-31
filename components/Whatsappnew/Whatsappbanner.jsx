import Image from 'next/image'
import React from 'react'
import styles from "./Whatsappbanner.module.css"


export const Whatsappbanner = () => {
  return (
    <div className={styles.whatsappbannermainboxes}>
    <div className={styles.whatsappbannerleftbox}>
    
    <Image
          src={"https://d3op2l77j7wnti.cloudfront.net/Images/whatsapp/components/Group 1000006276.webp"}
          alt={"img"}
          width={"0"}
          height={"0"}
          sizes={"100vw"}
          style={{ width: "100%", height: "100%" , objectFit:"contain"}}
        />

    
    </div>
    <div className={styles.whatsappbannerrightboxes}>
    <h1>Seamless Customer Service on WhatsApp</h1>
    <p>Experience seamless customer service and support on WhatsApp with our AI chatbot. Engage customers in real-time, provide instant assistance, and enhance their experience with personalized interactions, all within the popular messaging platform.</p>

    <button className={styles.whatsappbutton}>Start Free Trail</button>
    </div>
    
    </div>
  )
}
