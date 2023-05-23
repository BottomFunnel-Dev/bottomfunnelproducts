import Image from 'next/image'
import React from 'react'
import styles from "./Messagincommunication.module.css"


export const Messagincommunication = () => {

    const messagingcommunicationdata = [
        {
            htxt:"Connect across apps",
            stxt:"Reduce the complexity of communication across Google, Apple, WhatsApp, and other business-related messaging services.",
            icon:"https://d3op2l77j7wnti.cloudfront.net/Images/Messaging channels/components/image 46.webp",
        },

        {
            htxt:"Be Available",
            stxt:"Connect with your customers on their preferred messaging channels and build meaningful relationships wherever they are.",
            icon:"https://d3op2l77j7wnti.cloudfront.net/Images/Messaging channels/components/image 47.webp",
        },

        {
            htxt:"Build customer trust",
            stxt:"Stay dependable and help your customers when they need you using our secure and reliable messaging API.",
            icon:"https://d3op2l77j7wnti.cloudfront.net/Images/Messaging channels/components/image 48.webp",
        },
    ]

  return (
    <div className={styles.messaigingcommunicationmainboxes}>
    <h1>Revise your customer communication strategy</h1>
    <div className={styles.messagingcommunicationdatamappingbox}>
        {messagingcommunicationdata.map((e)=>{
        return (
            <div className={styles.messagingcommunicationindidata}>
           <div className={styles.messagingchannelimagebox}>
            <Image
          src={e.icon}
          alt={"icon"}
          width={"0"}
          height={"0"}
          sizes={"100vw"}
          style={{ width: "100%", height: "100%",objectFit:"contain" }}
        />
        </div>
        <h4>{e.htxt}</h4>
        <p>{e.stxt}</p>
            
            </div>
        )
    })}</div>

<div className={styles.messagingexperience}>
<h2>Ensure seamless conversational experiences</h2>
<p>By increasing your agent productivity and enhancing your customer experience, you can achieve a higher level of contextual conversations across popular messaging applications.</p>
<div className={styles.messagingexperienceimagebox}>
        <Image
          src={"https://d3op2l77j7wnti.cloudfront.net/Images/Messaging channels/components/messaging channels.webp"}
          alt={"images"}
          width={"0"}
          height={"0"}
          sizes={"100vw"}
          style={{ width: "50%", height: "70%" ,objectFit:"contain"}}
        />
</div>

</div>
    </div>
  )
}
