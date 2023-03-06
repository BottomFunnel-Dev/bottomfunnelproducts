import React from 'react'
import styles from "./InstagramDMCustomers.module.css"
import Image from 'next/image'

export default function InstagramDMCustomers () {
  return (
  
    <div className={styles.instagramDmCustomersContainer}>
        <h1>Enable round-the-clock support with bots and automation</h1>
      <div className={styles.instagramDmCustomersDiv}>
      <div className={styles.instagramDmCustomerLeft}>
            <h4>Manage all your Instagram business accounts from Bottom Funnel </h4>
            <p>Connect multiple Instagram Business accounts to your Freshchat account in a jiffy! With this native integration (supported by our Neo platform), your agents can:</p>
            <ul>
                <li>
                    Converse with Bots through Instagram DMs
                </li>
                <li>
                    Promptly respond to customer comments with all the context 
                </li>
                <li>
                    Get notified and initiate engaging conversations from story mentions and comments on poststags.
                </li>
                <li>
                   React to Bots’ messages  
                </li>
            </ul>
        </div>
        <div className={styles.instagramDmCustomerRight}>
            <Image
                src={"/Images/InstagramDm/Group2.webp"}
                alt={"img"}
                width={"0"}
                height={"0"}
                sizes={"100vw"}
                style={{ width: "100%", height: "100%", objectFit: "contain" }}
            />
        </div>
      </div>
    </div>

  )
}
