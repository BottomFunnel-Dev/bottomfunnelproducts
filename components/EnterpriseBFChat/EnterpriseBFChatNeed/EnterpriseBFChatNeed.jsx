import React from 'react'
import styles from "./EnterpriseBFChatNeed.module.css"
import Image from 'next/image'

export default function EnterpriseBFChatNeed () {
  return (
    <div className={styles.enterpriseBFChatNeedMainDiv}>
        <div className={styles.enterpriseBFChatNeedHeading}>
            <h3>Granular level controls to fine-tune for the needs of enterprise</h3>
        </div>
        <div className={styles.enterpriseBFChatNeedContainer}>
            <div className={styles.enterpriseBFChatNeedContainerBox}>
                <div className={styles.enterpriseBFChatNeedImage}>
                <Image
                    src={"/Images/enterpriseBFChat/image1.png"}
                    alt={"img"}
                    width={"0"}
                    height={"0"}
                    sizes={"100vw"}
                    style={{ width: "100%", height: "100%"}}
                    />
                </div>
                <h3>Manage multiple business hours</h3>
                <p>For Your support teams working across different regions,times or time zones.</p>
            </div>
            <div className={styles.enterpriseBFChatNeedContainerBox}>
                <div className={styles.enterpriseBFChatNeedImage}>
                <Image
                    src={"/Images/enterpriseBFChat/image2.png"}
                    alt={"img"}
                    width={"0"}
                    height={"0"}
                    sizes={"100vw"}
                    style={{ width: "100%", height: "100%"}}
                    />
                </div>
                <h3>Control agent access</h3>
                <p>With advanced roles and permissions.Create special privileges</p>
            </div>
            <div className={styles.enterpriseBFChatNeedContainerBox}>
                <div className={styles.enterpriseBFChatNeedImage}>
                <Image
                    src={"/Images/enterpriseBFChat/image3.png"}
                    alt={"img"}
                    width={"0"}
                    height={"0"}
                    sizes={"100vw"}
                    style={{ width: "100%", height: "100%"}}
                    />
                </div>
                <h3>Support customers worldwide</h3>
                <p>With our live translate feature.Also, our agent platform and customer messenger supports over 32 languages.</p>
            </div>
        </div>
    </div>
  )
}
