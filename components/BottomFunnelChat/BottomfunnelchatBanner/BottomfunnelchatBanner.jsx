import React from 'react'
import styles from "./BottomfunnelchatBanner.module.css"
import Image from 'next/image'

export const BottomfunnelchatBanner = () => {
  return (
    <div>
        <div className={styles.BottomfunnelchatBannermaindiv}>
            
                <div className={styles.BottomfunnelchatBannerinnercontentdiv}>
                 
                    <h1>Transform Customer Support with our AI Chat Bot: Streamline Operations, Enhance Satisfaction</h1>
                    <p>Experience the power of our AI Chat Bot developed by Bottom Funnel. Revolutionize your customer support operations with advanced automation, instant responses, and personalized assistance, leading to increased efficiency and customer satisfaction.</p>
                    <button className={styles.BottomfunnelchatBannerbutton}>Start A Free Demo</button>
                    
                </div>
                <div className={styles.BottomfunnelchatBannerimagemaindiv}>
                    <div className={styles.BottomfunnelchatBannerimageinnerdiv}>
                    <Image
          src={"https://d3op2l77j7wnti.cloudfront.net/Images/BottomFunnelChatphotos/banner.webp"}
          alt={""}
          width={"0"}
          height={"0"}
          sizes={"100vw"}
          style={{ width: "100%", height: "100%" }}
        />  
                    </div>
                </div>
            </div>
        
   </div>
  )
}
