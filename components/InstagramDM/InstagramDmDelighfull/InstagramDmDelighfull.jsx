import React from 'react'
import styles from "./InstagramDmDelighfull.module.css"
import Image from 'next/image'

export default function InstagramDmDelighfull () {
  return (
  
    <div className={styles.instagramDmDelightfullContainer}>
     <h1>Providing Flexibility and Convenience with AI Chatbots on Instagram</h1>
      <div className={styles.instagramDmDelightfullDiv}>
        <div className={styles.instagramDmCustomerRight}>
            <Image
                src={"https://d3op2l77j7wnti.cloudfront.net/Images/InstagramDm/Group4.webp"}
                alt={"img"}
                width={"0"}
                height={"0"}
                sizes={"100vw"}
                style={{ width: "100%", height: "100%", objectFit: "contain" }}
            />
        </div>
        <div className={styles.instagramDmCustomerLeft}>
            <ul>
                <li>
                AI chatbots on Instagram provide clients with instant accessibility, allowing them to reach out and seek assistance at any time, eliminating the limitations of traditional business hours.
                </li>
                <li>
                AI chatbots offer flexibility by enabling clients to engage with businesses through various channels, including direct messages, comments, and even Instagram Stories, accommodating their preferred method of communication.
                </li>
                <li>
                With AI chatbots, businesses can deliver prompt responses to client queries, ensuring a seamless and efficient communication experience, even during peak times.
                </li>
                <li>
                AI chatbots on Instagram can gather information about clients' preferences and previous interactions, enabling personalized engagement and tailored recommendations.
                </li>
                <li>AI chatbots can provide self-service options for clients, allowing them to find answers to common questions or access relevant information without the need for human intervention, enhancing convenience and efficiency.</li>
               
            </ul>
        </div>
      </div>
    </div>

  )
}
