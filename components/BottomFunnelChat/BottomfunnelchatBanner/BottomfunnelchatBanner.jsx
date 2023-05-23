import React from 'react'
import styles from "./BottomfunnelchatBanner.module.css"
import Image from 'next/image'

export const BottomfunnelchatBanner = () => {
  return (
    <div>
        <div className={styles.BottomfunnelchatBannermaindiv}>
            
                <div className={styles.BottomfunnelchatBannerinnercontentdiv}>
                 
                    <h1>Grow Customer Love with Smarter Conversations</h1>
                    <p>Today's reletionships are digital, and always on. Power your business with intuitive and intelligent conversations. </p>
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
