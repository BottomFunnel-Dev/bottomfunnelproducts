import React from 'react'
import styles from "./SeeingResult.module.css"
import Image from 'next/image'


export const SeeingResult = () => {
    const data = [{img:"/Images/facebookphotos/image 72.webp",hd:"All in one inbox",p:"Brings conversations from web, mobile, and social messengers under one inbox"},
    {img:"/Images/facebookphotos/image 73.webp",hd:"Integrate with your familiar apps",p:"Connects with payments, order management, or CRM tools for real-time conversations on order updates, refunds and more"},
    {img:"/Images/facebookphotos/image 77.webp",hd:"Privacy and Security",p:"Secure with OTP authentication, privacy modes, hipaa and GDPR compliance"},
    {img:"/Images/facebookphotos/image 74.webp",hd:"Manage multiple business hours",p:"Brings conversations from web, mobile, and social messengers under one inbox"},
    {img:"/Images/facebookphotos/image 75.webp",hd:"Support customers world wide",p:"Brings conversations from web, mobile, and social messengers under one inbox"},
    {img:"/Images/facebookphotos/image 76.webp",hd:"Control agent access",p:"Brings conversations from web, mobile, and social messengers under one inbox"},
]
  return (
    <div>
       <div className={styles.SeeingResultcomponnent}>
        <h3>Start seeing results in real-time</h3>
        <p>Read, respond, and manage message from your Customers in one place make use of canned responses and FAQs to offer effortless digital customer service get insights into your facebook conversations without leaving your Bottomfunnel-chat account.</p>
        <div className={styles.SeeingResultcomponnentimage}>
        <Image
                  src={"/Images/facebookphotos/banner bg1.webp"}
                  alt={"Image"}
                  width={"0"}
                  height={"0"}
                  sizes={"100vw"}
                  style={{ width: "100%", height: "100%" }}
                />
                </div>
       </div>
       <div className={styles.SeeingResultcomponnentheading}>
       <h3>Content Categories</h3>
       </div>
       <div className={styles.SeeingResultmaindiv}>
        {data.map((item) => {
            return(
                <div className={styles.SeeingResultmaindivrows}>
                <div className={styles.SeeingResultmaindivrowsimage}>
                <Image
                    src={item.img}
                    alt={"Image"}
                    width={"0"}
                    height={"0"}
                    sizes={"100vw"}
                    style={{ width: "100%", height: "100%" }}
                />
                </div>
                <h5>{item.hd}</h5>
                <p>{item.p}</p>
            </div>
            );
        })}
       
       </div>
       
       
    </div>
  )
}
