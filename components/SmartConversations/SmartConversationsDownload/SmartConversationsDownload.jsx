import React from 'react';
import styles from "./SmartConversationsDownload.module.css";
import Image from 'next/image';

export default function SmartConversationsDownload () {
  return (
    <div className={styles.smartConversationsDownloadMain}>
        <div className={styles.smartConversationsDownloadimg}>
        <Image
          src={"/Images/smartConversations/Group1.png"}
          alt={"img"}
          width={"0"}
          height={"0"}
          sizes={"100vw"}
          style={{ width: "100%", height: "100%", objectFit: "contain" }}
        />
        </div>
        <div className={styles.smartConversationsDownloadtext}>
            <h2>Download your free e-guide</h2>
            <p>21 days,No credit card required. No strings attached.</p>
            <input type="text" placeholder='Enter your Email-id' className={styles.smartConversationInput}/>
            <button>Download Now</button>
        </div>
    </div>
  )
}
