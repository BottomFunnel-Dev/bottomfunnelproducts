import Image from 'next/image'
import React from 'react'
import styles from "./Messagincommunication.module.css"


export const Messagincommunication = () => {

    const messagingcommunicationdata = [
        {
            htxt:"Connect across apps",
            stxt:"Seamlessly Connect and Interact Across Multiple Apps with Our AI Chatbot. Enhance User Experience and Streamline Operations by Integrating Chatbot Functionality into Your Existing Applications and Platforms. Improve Efficiency, Communication, and Customer Satisfaction.",
            icon:"https://d3op2l77j7wnti.cloudfront.net/Images/Messaging channels/components/image 46.webp",
        },

        {
            htxt:"Be Available",
            stxt:"Be Available 24/7 with Our AI Chatbot. Ensure Round-the-Clock Support and Instant Responses to Customer Queries. Never Miss an Opportunity to Engage with Your Audience, Even Outside Business Hours. Provide Timely Assistance, Build Trust, and Deliver Exceptional Customer Service with our Always-On Chatbot Solution.",
            icon:"https://d3op2l77j7wnti.cloudfront.net/Images/Messaging channels/components/image 47.webp",
        },

        {
            htxt:"Build customer trust",
            stxt:"Build Customer Trust with Our AI Chatbot. Deliver Personalized Interactions, Provide Accurate Information, and Resolve Customer Issues Promptly. Create a Seamless Customer Experience that Builds Confidence and Loyalty. Gain Customer Trust through Reliable and Consistent Support, Enhancing Your Brand Reputation and Driving Long-term Relationships.",
            icon:"https://d3op2l77j7wnti.cloudfront.net/Images/Messaging channels/components/image 48.webp",
        },
    ]

  return (
    <div className={styles.messaigingcommunicationmainboxes}>
    <h1>Unlock Efficiency and Customer Satisfaction with Our AI Chatbot Solution</h1>
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
<h2>Seamless Conversational Experiences</h2>
<p> Enhance Customer Engagement and Satisfaction with Our AI Chatbot</p>
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
