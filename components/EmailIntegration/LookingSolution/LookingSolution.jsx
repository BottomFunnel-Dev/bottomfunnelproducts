import React from 'react'
import styles from "./LookingSolution.module.css";
import Image from 'next/image';

export const LookingSolution = () => {
  return (
    <div className={styles.LookingSolutionmaindiv}>
     <div className={styles.LookingSolutionmaindivcontent}>
      <h2>Looking for an all-in-one sales and marketing solution? Try Bottom-Funnel Suite</h2>
      <p>Bottom-Funnel Suite combines the power of sales, marketing, chat, and telephony in one AI-powered solution.</p>
      <ul>
        <li>Attract the best leads with personalized messages</li>
        <li>Engage across channels - Phone, Email, WhatsApp, Chat</li>
        <li>Close deals faster with AI-powered insights</li>
        <li>Deliver personalized experiences with 360° customer context</li>
      </ul>
     </div>
     <div className={styles.LookingSolutionmaindivimage}>
     <Image
          src={"https://d3op2l77j7wnti.cloudfront.net/Images/EmailIntegrationphotos/bannerr (12).webp"}
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
