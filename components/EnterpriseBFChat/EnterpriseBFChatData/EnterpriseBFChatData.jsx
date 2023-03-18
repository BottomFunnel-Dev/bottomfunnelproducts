import React from 'react'
import styles from "./EnterpriseBFChatData.module.css"
import Image from 'next/image'

export default function EnterpriseBFChatData () {
  return (
        <div className={styles.enterpriseBFChatDataMainDiv}>
            <h2>Secure your business data and customer data</h2>
            <p>GDPR IP and domain whitelisting JWT Authentication Data encryption Cyber Essentials</p>
            <div className={styles.enterpriseBFChatConatiner}>
                <div className={styles.enterpriseBFChatConatinerText}>
                    <p>Our robust data security and privacy prcatices form an integral part of our product engineering and services delivery principles.</p>
                    <ul>
                        <li>A multi-tier data security model</li>
                        <li>End-to-End security in the product stack</li>
                        <li>Highly resilient architecture</li>
                    </ul>
                </div>
                <div className={styles.enterpriseBFChatConatinerImage}>
                    <Image
                        src={"/Images/enterpriseBFChat/Group4.png"}
                        alt={"img"}
                        width={"0"}
                        height={"0"}
                        sizes={"100vw"}
                        style={{ width: "100%", height: "100%"}}
                        />
                </div>
            </div>
        </div>
  )
}
