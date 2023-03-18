import React from 'react'
import styles from "./EnterpriseBFChatTools.module.css"
import Image from 'next/image'

export default function EnterpriseBFChatTools () {
  return (
        <div className={styles.enterpriseBFChatToolsMainDiv}>
            <div className={styles.enterpriseBFChatToolsheading}>
                <h2>Connect with tools you allready Use</h2>
            </div>
            <div className={styles.enterpriseBFChatToolsImage}>
            <Image
                src={"/Images/enterpriseBFChat/Group3.png"}
                alt={"img"}
                width={"0"}
                height={"0"}
                sizes={"100vw"}
                style={{ width: "100%", height: "100%"}}
                />
            
            <div className={styles.enterpriseBFChatToolsdata}>
              <h3>Do more with less using chatbots</h3>
              <p>our AI-powered chatbots represent your best agents 24/7.Deploy using our no-code bot builder.</p>
              <h5>See how <i class="bi bi-arrow-right"></i></h5>
            </div>
            <div className={styles.enterpriseBFChatToolsdata1}>
              <h3>Build custom apps for endless possibilities</h3>
              <p>Build cutomized apps with ease directly on top of Neo our enterprise platform using our flexible developer framework.</p>
              <h5>See how <i class="bi bi-arrow-right"></i></h5>
            </div>
            </div>
        </div>
  )
}
