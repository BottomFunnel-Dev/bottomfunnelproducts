import React from 'react'
import styles from "./AccessingWhatsapp.module.css"
import Image from 'next/image'

export const AccessingWhatsapp = () => {
  return (
    <div>
        <div className={styles.AccessingWhatsappheading}>
            <h2>Accessing the Freshchat - WhatsApp integration</h2>
            <p>The WhatsApp Business integration is available on the Pro and Enterprise plans.</p>
        </div>
        <div className={styles.AccessingWhatsappcards}>
            <div className={styles.AccessingWhatsappcardsinnerdiv}>
                <div className={styles.AccessingWhatsappcardscontent}>
                    <p> Sign up for Freshchat to receive an email with the next steps</p>
                </div>
                <div  className={styles.AccessingWhatsappcardsinnerdivimage}>
                <Image
                  src={"/Images/WhatsApp-Chat/Rectangle 4.webp"}
                  alt={"Image"}
                  width={"0"}
                  height={"0"}
                  sizes={"100vw"}
                  style={{ width: "100%", height: "100%" }}
                />
                </div>
            </div>

            <div className={styles.AccessingWhatsappcardsinnerdiv}>
                <div className={styles.AccessingWhatsappcardscontent}>
                    <p> Sign up for Freshchat to receive an email with the next steps</p>
                </div>
                <div  className={styles.AccessingWhatsappcardsinnerdivimage}>
                <Image
                  src={"/Images/WhatsApp-Chat/Rectangle 4-1.webp"}
                  alt={"Image"}
                  width={"0"}
                  height={"0"}
                  sizes={"100vw"}
                  style={{ width: "100%", height: "100%" }}
                />
                </div>
            </div>

            <div className={styles.AccessingWhatsappcardsinnerdiv}>
                <div className={styles.AccessingWhatsappcardscontent}>
                    <p> Sign up for Freshchat to receive an email with the next steps</p>
                </div>
                <div  className={styles.AccessingWhatsappcardsinnerdivimage}>
                <Image
                  src={"/Images/WhatsApp-Chat/Rectangle 4-2.webp"}
                  alt={"Image"}
                  width={"0"}
                  height={"0"}
                  sizes={"100vw"}
                  style={{ width: "100%", height: "100%" }}
                />
                </div>
            </div>
        </div>
    </div>
  )
}
