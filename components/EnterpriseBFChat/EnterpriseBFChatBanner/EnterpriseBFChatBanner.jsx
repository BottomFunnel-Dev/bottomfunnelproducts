import React from 'react'
import styles from "./EnterpriseBFChatBanner.module.css"
import Image from 'next/image'

export default function EnterpriseBFChatBanner () {
  return (
    <div className={styles.enterpriseBFChatBanner}>

      <div className={styles.enterpriseBFChatBannerImage}>
        <Image
          src={"/Images/enterpriseBFChat/banner.png"}
          alt={"img"}
          width={"0"}
          height={"0"}
          sizes={"100vw"}
          style={{ width: "100%", height: "100%"}}
        />
      </div>

    <div className={styles.enterpriseBFChatHeading}>
        <h2>Customer Messaging and bots needs scale</h2>
        <hr/>
        <p>Bottom Funnel is Secure, flexible, and enables you to scale your customer service to fit your business needs.</p>
        <ul>
            <li>Dedicated account manager</li>
            <li>Tailored onboarding</li>
            <li>Guaranteeduptime SLA</li>
        </ul>
        <button>Explore Now</button>
    </div>
    </div>
  )
}
