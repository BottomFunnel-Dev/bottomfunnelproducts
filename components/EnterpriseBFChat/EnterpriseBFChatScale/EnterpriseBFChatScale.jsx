import React from 'react'
import styles from "./EnterpriseBFChatScale.module.css"
import Image from 'next/image'

export default function EnterpriseBFChatScale () {
  return (
    <div className={styles.enterpriseBFChatScale}>

        <div className={styles.enterpriseBFChatScaleImage}>
          <Image
            src={"/Images/enterpriseBFChat/Group2.png"}
            alt={"img"}
            width={"0"}
            height={"0"}
            sizes={"100vw"}
            style={{ width: "100%", height: "100%"}}
          />
        </div>

        <div className={styles.enterpriseBFChatHeading}>
            <div className={styles.enterpriseBFChatHeadingDiv}>
              <h3>Do more with less using chatbots</h3>
              <p>our AI-powered chatbots represent your best agents 24/7.Deploy using our no-code bot builder.</p>
              <h5>See how <i class="bi bi-arrow-right"></i></h5>
            </div>
            <div className={styles.enterpriseBFChatHeadingDiv}>
              <h3>Route messages without breaking a sweat</h3>
              <p>Set up bots to triage queries or use advanced assignment rules to route messages to the right agents.</p>
              <h5>See how <i class="bi bi-arrow-right"></i></h5>
            </div>
            <div className={styles.enterpriseBFChatHeadingDiv}>
              <h3>Take better customer service decisions using data</h3>
              <p>Monitor,measure and optimize using real-time dashboards,automated reports, or bespoke reports using APIs.</p>
              <h5>See how <i class="bi bi-arrow-right"></i></h5>
            </div>
        </div>

    </div>
  )
}
