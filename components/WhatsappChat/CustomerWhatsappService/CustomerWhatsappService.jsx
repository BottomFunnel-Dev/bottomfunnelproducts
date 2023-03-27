import React from 'react'
import styles from "./CustomerWhatsappService.module.css"
import Image from 'next/image'

export const CustomerWhatsappService = () => {
  return (
    <div>
         <div className={styles.CustomerWhatsappServicemaindivheading}>
            <h2>
            Ace customer service on WhatsApp with Bottom Funnel Chat
            </h2>
            <p>Your customers have adapted to the new normal. Freshchat's
best-in-class AI-powered messaging software helps your team do the same.</p>
         </div>

         <div className={styles.CustomerWhatsappServicemaindiv}>
            <div className={styles.CustomerWhatsappServicemaindivcontent}>
                <h4>Manage multiple WhatsApp messages in one, single workspace.</h4>
                <ul>
                    <li>Prioritize messages from multiple WhatsApp numbers. Serve your customers better by connecting with your favorite 3rd party tools to get full customer context, collaborate with your teammates remotely and more.</li>
                    <li>Empower your team with a simple, yet powerful Inbox.</li>
                </ul>
            </div>
            <div className={styles.CustomerWhatsappServicemaindivimage}> 
                <Image
                  src={"/Images/WhatsApp-Chat/screen1.webp"}
                  alt={"Image"}
                  width={"0"}
                  height={"0"}
                  sizes={"100vw"}
                  style={{ width: "100%", height: "100%" }}
                /></div>
         </div>


         <div className={styles.CustomerWhatsappServicemaindivone}>
            <div className={styles.CustomerWhatsappServicemaindivcontent}>
                <h4>Take intelligent self-service to your customers</h4>
                <ul>
                    <li>  Build and deploy complex decision trees on WhatsApp using our no-code bot builder. Let your team focus on meaningful work, while the bots resolve repetitive questions by providing precise answers instantly.</li>
                    <li>Automate resolution at scale.</li>
                </ul>
            </div>
            <div className={styles.CustomerWhatsappServicemaindivimageone}> 
                <Image
                  src={"/Images/WhatsApp-Chat/screen3.webp"}
                  alt={"Image"}
                  width={"0"}
                  height={"0"}
                  sizes={"100vw"}
                  style={{ width: "50%", height: "100%" }}
                /></div>
         </div>

         <div className={styles.CustomerWhatsappServicemaindiv}>
            <div className={styles.CustomerWhatsappServicemaindivcontent}>
                <h4>Provide the right information at the right time</h4>
                <ul>
                    <li>Automatically send notifications at the right moment using Template messages. Attach images, videos and documents to these messages to add more context.</li>
                </ul>
            </div>
            <div className={styles.CustomerWhatsappServicemaindivimage}> 
                <Image
                  src={"/Images/WhatsApp-Chat/screen2.webp"}
                  alt={"Image"}
                  width={"0"}
                  height={"0"}
                  sizes={"100vw"}
                  style={{ width: "80%", height: "100%" }}
                /></div>
         </div>
    </div>
  )
}
