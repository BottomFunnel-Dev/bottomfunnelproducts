import React from 'react'
import styles from "./AppleBusinessChatBanner.module.css"
import Image from 'next/image'

export const AppleBusinessChatBanner = () => {
  return (
    <div>
        
        <div className={styles.AppleBusinessChatBannermaindiv}>
            <div className={styles.AppleBusinessChatBannermaindivcontent}>
             <h1>Enhance Customer Conversations with Apple Business Chat and Bottom-Funnelchat</h1>
             <p>Unlock the power of intelligent conversations with the seamless integration of Apple Business Chat and Bottom-Funnelchat, delivering personalized and efficient customer experiences.</p>
             <ul>
              <li>Leverage the capabilities of Apple Business Chat and Bottom-Funnelchat to provide tailored and contextually relevant conversations, ensuring a personalized customer experience.</li>
              <li>Automatically route conversations to the right agents or departments, streamlining the support process and reducing customer wait times.</li>
              <li>Analyze chat interactions and customer feedback to optimize responses, identify improvement areas, and enhance overall conversation quality.</li>
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
