import React from 'react'
import styles from "./AccessingWhatsapp.module.css"
import Image from 'next/image'

export const AccessingWhatsapp = () => {
  const Accessd = [{img:"/Images/WhatsApp-Chat/Rectangle 4.webp",hd:"Streamlined Communication:",p:"Efficient and quick communication for businesses and customers."},
  {img:"/Images/WhatsApp-Chat/Rectangle 4-1.webp",hd:"Enhanced Customer Engagement:",p:"Personalized conversations and stronger connections."},
  {img:"/Images/WhatsApp-Chat/Rectangle 4-2.webp",hd:"Convenience and Accessibility:",p:"Accessible support through a familiar platform."},
  ]
  return (
    <div>
        <div className={styles.AccessingWhatsappheading}>
            <h2>Unlock the Power of WhatsApp Integration with Bottom Funnel Chat</h2>
            <p>Seamlessly Connect with Customers: Experience the Power of Bottom Funnel Chat - WhatsApp Integration for Enhanced Customer Engagement.</p>
        </div>
        <div className={styles.AccessingWhatsappcards}>
        {Accessd.map((item) => {
          return(
            <div className={styles.AccessingWhatsappcardsinnerdiv}>
                <div className={styles.AccessingWhatsappcardscontent}>
                  <h5>{item.hd}</h5>
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
