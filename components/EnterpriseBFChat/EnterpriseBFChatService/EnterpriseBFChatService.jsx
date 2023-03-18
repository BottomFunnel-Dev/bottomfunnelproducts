import React from 'react'
import styles from "./EnterpriseBFChatService.module.css"
import Image from 'next/image'

export default function EnterpriseBFChatService () {
  return (
    <div className={styles.enterpriseBFChatService}>

        <div className={styles.enterpriseBFChatHeading}>
            <h3>Everything you need to win at enterprise-level customer service</h3>
            <p>
                Customer service can be stressful, whether from home or office.
                Bottom Funnel's Team Inbox makes an agent's workday easier with an
                intuitive interface loaded with well-thought-out features.
            </p>
            <ul>
                <li>AI powered bots and Automation</li>
                <li>Marketplace and Open APIs</li>
                <li>Data Encryption,GDPR, and more</li>
            </ul>
        </div>
        <div className={styles.enterpriseBFChatServiceImage}>
        <Image
          src={"/Images/enterpriseBFChat/Group1.png"}
          alt={"img"}
          width={"0"}
          height={"0"}
          sizes={"100vw"}
          style={{ width: "100%", height: "100%"}}
        />
        </div>

    </div>
  )
}
