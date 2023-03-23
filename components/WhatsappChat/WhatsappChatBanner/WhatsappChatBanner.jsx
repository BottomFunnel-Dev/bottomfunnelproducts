import React from 'react'
import styles from "./WhatsappChatBanner.module.css"
import Image from 'next/image'

export const WhatsappChatBanner = () => {
  return (
    <div>
         <div className={styles.WhatsappChatBannermaindiv}>
            <div className={styles.WhatsappChatBannermaindivcontent}>
             <h1>Serve your customers on WhatsApp</h1>
             <p> Redefine your customer service strategy by leveraging Freshchat official WhatsApp Business integration to serve your customers, wherever they are.</p>
            
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
