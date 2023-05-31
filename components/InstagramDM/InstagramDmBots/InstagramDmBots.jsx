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
            <h4>Handle rush hours like a pro</h4>
            <p>During rush hours, it's crucial for businesses to handle client inquiries promptly and efficiently. With the help of AI chatbots on Instagram, businesses can ensure round-the-clock support, personalized assistance, and instant responses to deliver a delightful customer experience.</p>
            <ul>
                <li>
                An AI chatbot on Instagram can handle a surge in client queries during rush hours, providing instant responses to their inquiries and ensuring no delays or waiting times.
                </li>
                <li>
                With AI chatbots, businesses can easily scale up their support capabilities during peak hours, efficiently managing a large volume of client interactions without compromising on response time or quality. 
                </li>
                <li>
                AI chatbots can be programmed to understand client preferences and provide personalized recommendations or solutions, enhancing the overall customer experience even during busy periods.
                </li>
               
            </ul>
        </div>
      </div>
    </div>

  )
}
