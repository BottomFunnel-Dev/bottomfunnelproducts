import React from 'react';
import styles from "./SmartConversationsChanges.module.css";
import Image from 'next/image';

export default function SmartConversationsChanges () {
  return (
    <div className={styles.smartConversationsChangesMain}>
       
       <div className={styles.smartConversationsChangestext}>
            <h2>Bottom Funnel Changes the Conversation</h2>
            <p>Unify messaging across digital channels. Deflect intuitively with native AI. Empower your agents with complete context. Bottom Funnel Chat by Bottom Funnel does it all. Learn more about our game-changing conversational engagement solution.</p>
            <button>Explore Now</button>
        </div>

        <div className={styles.smartConversationsChangesimg}>
        <Image
          src={"https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/smartConversations/five.png"}
          alt={"img"}
          width={"0"}
          height={"0"}
          sizes={"100vw"}
          style={{ width: "100%", height: "100%", objectFit: "contain" }}
        />
        </div>
    </div>
  )
}
