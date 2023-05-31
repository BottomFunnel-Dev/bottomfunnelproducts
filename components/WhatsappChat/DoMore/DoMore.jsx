import React from 'react'
import styles from "./DoMore.module.css"
import Image from 'next/image'

export const DoMore = () => {
  const Domored = [{img:"/Images/WhatsApp-Chat/Rectangle 4-1.webp",hd:"Plug-in and use",p:"Easily integrate Bottom Funnel Chat into your existing systems and start providing seamless customer service instantly."},
  {img:"/Images/WhatsApp-Chat/Rectangle 4-5.webp",hd:"Route automatically",p:"Automatically route customer inquiries to the right department or agent, ensuring efficient and timely resolution."},
  {img:"/Images/WhatsApp-Chat/Rectangle 4-4.webp",hd:"Analyze and Optimize",p:"Gain valuable insights from data analytics to optimize your customer support strategies and improve overall performance."},
  {img:"/Images/WhatsApp-Chat/Rectangle 4-6.webp",hd:"Take service to customers",p:"Extend your customer service reach by engaging with customers on their preferred communication channels."},
  {img:"/Images/WhatsApp-Chat/Rectangle 4-8.webp",hd:"Break the language barrier",p:"Overcome language barriers with multilingual support, enabling effective communication with customers from diverse backgrounds."},
  {img:"/Images/WhatsApp-Chat/Rectangle 4-7.webp",hd:"Secure your data",p:"Protect sensitive customer information with robust security measures and data encryption to ensure privacy and compliance.  "}
]
  return (
    <div>
      <div className={styles.DoMoremaindivheading}>
        <h2>Unlock the Power of Bottom Funnel Chat: Do More, Achieve More</h2>
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
