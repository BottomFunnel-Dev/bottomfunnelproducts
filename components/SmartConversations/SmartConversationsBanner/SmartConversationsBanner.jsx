import React from 'react'
import styles from "./SmartConversationsBanner.module.css"
import Image from 'next/image'

export default function SmartConversationsBanner () {
  return (
    <div className={styles.smartConversationsBannerMain}>
        <div className={styles.smartConversationsBannerimg}>
        <Image
          src={"/Images/smartConversations/Isolation_Mode.png"}
          alt={"img"}
          width={"0"}
          height={"0"}
          sizes={"100vw"}
          style={{ width: "100%", height: "100%", objectFit: "contain" }}
        />
        </div>
        <div className={styles.smartConversationsBannertext}>
        <h1>Boost customer engagement with smarter conversations</h1>
            <hr></hr>
            <p>Rethink customer engagement by harnessing AI, automation, and conversational support to deliver delightful experiences on their terms, and their favourite channels.</p>
            <button>Explore Now</button>
        </div>
    </div>
  )
}
