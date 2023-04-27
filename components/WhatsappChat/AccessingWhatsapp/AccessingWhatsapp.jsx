import React from 'react'
import styles from "./AccessingWhatsapp.module.css"
import Image from 'next/image'

export const AccessingWhatsapp = () => {
  const Accessd = [{img:"/Images/WhatsApp-Chat/Rectangle 4.webp",p:"Sign up for Bottom Funnel chat to receive an email with the next steps"},
  {img:"/Images/WhatsApp-Chat/Rectangle 4-1.webp",p:"Sign up for Bottom Funnel chat to receive an email with the next steps"},
  {img:"/Images/WhatsApp-Chat/Rectangle 4-2.webp",p:"Sign up for Bottom Funnel chat to receive an email with the next steps"},
  ]
  return (
    <div>
        <div className={styles.AccessingWhatsappheading}>
            <h2>Accessing the Bottom Funnel chat - WhatsApp integration</h2>
            <p>The WhatsApp Business integration is available on the Pro and Enterprise plans.</p>
        </div>
        <div className={styles.AccessingWhatsappcards}>
        {Accessd.map((item) => {
          return(
            <div className={styles.AccessingWhatsappcardsinnerdiv}>
                <div className={styles.AccessingWhatsappcardscontent}>
                    <p>{item.p}</p>
                </div>
                <div  className={styles.AccessingWhatsappcardsinnerdivimage}>
                <Image
                  src={item.img}
                  alt={"Image"}
                  width={"0"}
                  height={"0"}
                  sizes={"100vw"}
                  style={{ width: "100%", height: "100%" }}
                />
                </div>
            </div>);
          })}

          
        </div>
    </div>
  )
}
