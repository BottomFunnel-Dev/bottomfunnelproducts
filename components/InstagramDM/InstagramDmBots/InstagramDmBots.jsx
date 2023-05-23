import React from 'react'
import styles from "./InstagramDmBots.module.css"
import Image from 'next/image'

export default function InstagramDmBots () {
  return (
  
    <div className={styles.instagramDmBotsContainer}>
      <div className={styles.instagramDmBotsDiv}>
        <div className={styles.instagramDmCustomerRight}>
            <Image
                src={"https://d3op2l77j7wnti.cloudfront.net/Images/InstagramDm/Group3.webp"}
                alt={"img"}
                width={"0"}
                height={"0"}
                sizes={"100vw"}
                style={{ width: "100%", height: "100%", objectFit: "contain" }}
            />
        </div>
        <div className={styles.instagramDmCustomerLeft}>
            <h4>Handle rush hours with ease using AI-powered bots and automation.</h4>
            <p>With the Bottom Funnel - Instagram integration:</p>
            <ul>
                <li>
                    Empower your team and bots to work together and provide round-the-clock service on Instagram.
                </li>
                <li>
                    Deflect repetitive questions and free-up your agent’s time to solve complex queries. 
                </li>
                <li>
                    Capture customer information, and transfer them to your agents whenever needed.
                </li>
            </ul>
        </div>
      </div>
    </div>

  )
}
