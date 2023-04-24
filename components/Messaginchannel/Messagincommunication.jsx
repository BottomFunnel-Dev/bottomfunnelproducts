import Image from 'next/image'
import React from 'react'
import styles from "./Messagincommunication.module.css"


export const Messagincommunication = () => {

    const messagingcommunicationdata = [
        {
            htxt:"Connect across apps",
            stxt:"Simplify communication across Google's Business Messages. Apple Messages for Business, WhatApp and more.",
            icon:"https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/Messaging channels/components/image 46.webp",
        },

        {
            htxt:"Be Available",
            stxt:"Engage with your customers on their preferred messaging channels and build meaningful relationships wherever they are.",
            icon:"https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/Messaging channels/components/image 47.webp",
        },

        {
            htxt:"Build customer trust",
            stxt:"Stay dependable and help your customers when they need you using our secure and reliable Messaging API.",
            icon:"https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/Messaging channels/components/image 48.webp",
        },
    ]

  return (
    <div className={styles.messaigingcommunicationmainboxes}>
    <h1>Redefine your customer communication</h1>
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
<h2>Provide seamless conversational experiences</h2>
<p>Increase your agent productivity and improve your customer experience with contextual conversations across popular messaging applications.</p>
<div className={styles.messagingexperienceimagebox}>
        <Image
          src={"https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/Messaging channels/components/messaging channels.webp"}
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
