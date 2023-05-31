import React from 'react'
import styles from "./WhatsappChatBanner.module.css"
import Image from 'next/image'

export const WhatsappChatBanner = () => {
  return (
    <div>
         <div className={styles.WhatsappChatBannermaindiv}>
            <div className={styles.WhatsappChatBannermaindivcontent}>
             <h1>Seamless Customer Service on WhatsApp</h1>
             <p>Experience seamless customer service and support on WhatsApp with our AI chatbot. Engage customers in real-time, provide instant assistance, and enhance their experience with personalized interactions, all within the popular messaging platform.</p>
            
             <button  className={styles.WhatsappChatBannermaindivcontentbutton}>Explore Now</button>
            </div>
            <div className={styles.WhatsappChatBannermaindivimage}>
            <Image
                  src={"/Images/WhatsApp-Chat/Group 1000006472 1.webp"}
                  alt={"Image"}
                  width={"0"}
                  height={"0"}
                  sizes={"100vw"}
                  style={{ width: "100%", height: "100%" }}
                />
            </div>
        </div>
    </div>
  )
}
