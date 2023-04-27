import React from 'react'
import styles from "./AppleBusinessChatBanner.module.css"
import Image from 'next/image'

export const AppleBusinessChatBanner = () => {
  return (
    <div>
        
        <div className={styles.AppleBusinessChatBannermaindiv}>
            <div className={styles.AppleBusinessChatBannermaindivcontent}>
             <h1>Deliver smarter conversations with Apple Business Chat and Bottom-Funnelchat</h1>
             <p>Provide instant, seamless, and effortless service for your customers by integrating Apple Messages for Business with Bottom Funnel</p>
             <ul>
              <li>Official Apple Messaging Service provider</li>
              <li>Set up Messages for Business in 5 days</li>
              <li>Reduce spends by 60%</li>
             </ul>
             <button  className={styles.AppleBusinessChatBannermaindivcontentbutton}>Explore Now</button>
            </div>
            <div className={styles.AppleBusinessChatBannermaindivimage}>
            <Image
                  src={"/Images/Applebusinesschat/bannerbg.webp"}
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
