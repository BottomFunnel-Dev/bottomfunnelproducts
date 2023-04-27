import React from 'react'
import styles from "./DoMore.module.css"
import Image from 'next/image'

export const DoMore = () => {
  const Domored = [{img:"/Images/WhatsApp-Chat/Rectangle 4-1.webp",hd:"Plug-in and use",p:"Use the Marketplace to connect with tools like Bottom Funnel desk, Stripe, Calendly, etc"},
  {img:"/Images/WhatsApp-Chat/Rectangle 4-5.webp",hd:"Route automatically",p:"Route incoming messages to the right teams instantly and increase CSAT."},
  {img:"/Images/WhatsApp-Chat/Rectangle 4-4.webp",hd:"Analyze and Optimize",p:"Derive insights from customer touchpoints and make business-critical decisions"},
  {img:"/Images/WhatsApp-Chat/Rectangle 4-6.webp",hd:"Take service to customers",p:"Use Bottom Funnel chat with other digital channels like Messenger, LINE, Telegram, Messages, etc"},
  {img:"/Images/WhatsApp-Chat/Rectangle 4-8.webp",hd:"Break the language barrier",p:"Personalize your agent and customer experiences in 20+ languages. Automatically translate incoming messages"},
  {img:"/Images/WhatsApp-Chat/Rectangle 4-7.webp",hd:"Secure your data",p:"Use a robust and secure software that’s GDPR compliant"}
]
  return (
    <div>
      <div className={styles.DoMoremaindivheading}>
        <h2>Do more with Bottom Funnel Chat!</h2>
       </div>
       <div className={styles.DoMoremaindivInnerDiv}>
      {Domored.map((item) => {
        return(
          <div className={styles.DoMoremaindivinner}>
          <h5>{item.hd}</h5>
          <div className={styles.DoMoremaindivimage}>
               <Image
                src={item.img}
                alt={"Image"}
                width={"0"}
                height={"0"}
                sizes={"100vw"}
                style={{ width: "100%", height: "100%" }}
              />
              </div>
              <p>{item.p}</p>
      </div>

        );
      })}
      </div>

    </div>
  )
}
