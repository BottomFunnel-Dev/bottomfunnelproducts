import React from 'react'
import styles from "./DoMore.module.css"
import Image from 'next/image'

export const DoMore = () => {
  return (
    <div>
      <div className={styles.DoMoremaindivheading}>
        <h2>Do more with Bottom Funnel Chat!</h2>
       </div>

       <div className={styles.DoMoremaindiv}>
        <div className={styles.DoMoremaindivinner}>
            <h5>plug-in and use </h5>
            <div className={styles.DoMoremaindivimage}>
                 <Image
                  src={"/Images/WhatsApp-Chat/Rectangle 4-1.webp"}
                  alt={"Image"}
                  width={"0"}
                  height={"0"}
                  sizes={"100vw"}
                  style={{ width: "100%", height: "100%" }}
                />
                </div>
                <p>Use the Marketplace to connect with tools like Freshdesk, Stripe, Calendly, etc</p>
        </div>

        <div className={styles.DoMoremaindivinner}>
            <h5>Route automatically </h5>
            <div className={styles.DoMoremaindivimage}>
                 <Image
                  src={"/Images/WhatsApp-Chat/Rectangle 4-5.webp"}
                  alt={"Image"}
                  width={"0"}
                  height={"0"}
                  sizes={"100vw"}
                  style={{ width: "100%", height: "100%" }}
                />
                </div>
                <p>Route incoming messages to the right teams instantly and increase CSAT.</p>
        </div>

        <div className={styles.DoMoremaindivinner}>
            <h5>Analyze and Optimize </h5>
            <div className={styles.DoMoremaindivimage}>
                 <Image
                  src={"/Images/WhatsApp-Chat/Rectangle 4-4.webp"}
                  alt={"Image"}
                  width={"0"}
                  height={"0"}
                  sizes={"100vw"}
                  style={{ width: "100%", height: "100%" }}
                />
                </div>
                <p>Derive insights from customer touchpoints and make business-critical decisions</p>
        </div>
       </div>

       <div className={styles.DoMoremaindiv}>
        <div className={styles.DoMoremaindivinner}>
            <h5>Take service to customers </h5>
            <div className={styles.DoMoremaindivimage}>
                 <Image
                  src={"/Images/WhatsApp-Chat/Rectangle 4-6.webp"}
                  alt={"Image"}
                  width={"0"}
                  height={"0"}
                  sizes={"100vw"}
                  style={{ width: "100%", height: "100%" }}
                />
                </div>
                <p>Use Freshchat with other digital channels like Messenger, LINE, Telegram, Messages, etc</p>
        </div>

        <div className={styles.DoMoremaindivinner}>
            <h5>Break the language barrier </h5>
            <div className={styles.DoMoremaindivimage}>
                 <Image
                  src={"/Images/WhatsApp-Chat/Rectangle 4-8.webp"}
                  alt={"Image"}
                  width={"0"}
                  height={"0"}
                  sizes={"100vw"}
                  style={{ width: "100%", height: "100%" }}
                />
                </div>
                <p>Personalize your agent and customer experiences in 20+ languages. Automatically translate incoming messages</p>
        </div>

        <div className={styles.DoMoremaindivinner}>
            <h5>Secure your data</h5>
            <div className={styles.DoMoremaindivimage}>
                 <Image
                  src={"/Images/WhatsApp-Chat/Rectangle 4-7.webp"}
                  alt={"Image"}
                  width={"0"}
                  height={"0"}
                  sizes={"100vw"}
                  style={{ width: "100%", height: "100%" }}
                />
                </div>
                <p>Use a robust and secure software that’s GDPR compliant</p>
        </div>
       </div>
    </div>
  )
}
