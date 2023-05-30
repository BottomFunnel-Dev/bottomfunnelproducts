import Image from 'next/image'
import React from 'react'
import styles from "./Messagingplatforms.module.css"

export const Messagingplatforms = () => {

    const messagingplatformsdata = [
        {
            htxt:"Chatbot is now on WhatsApp for you! ",
            stxt:"Experience the convenience of interacting with our chatbot directly on WhatsApp. Get instant answers, personalized assistance, and quick solutions to your queries, all within the familiar WhatsApp interface.",
            icon:"https://d3op2l77j7wnti.cloudfront.net/Images/Messaging channels/components/Group 1000006013.webp",

        },

        {
            htxt:"Get instant assistance via SMS",
            stxt:"Reach out for quick help and support through SMS, anytime, anywhere. Our chatbot is just a text message away, providing you with seamless and convenient communication to address your queries and concerns.",
            icon:"https://d3op2l77j7wnti.cloudfront.net/Images/Messaging channels/components/Group 1000006014.webp",

        },

        {
            htxt:"Conversational Assistance on LINE",
            stxt:"Connect with our AI Chatbot on LINE for instant assistance. Get quick answers to your queries, personalized recommendations, and seamless support right within your LINE messaging app. Start chatting today!",
            icon:"https://d3op2l77j7wnti.cloudfront.net/Images/Messaging channels/components/Group 1000006015.webp",

        },

        {
            htxt:"Streamline Customer Engagement with Google Business Messaging ",
            stxt:"Enhance customer communication and support with our AI chatbot integrated with Google Business Messaging. Seamlessly interact with customers, provide real-time assistance, and build stronger relationships through this convenient and accessible platform.",
            icon:"https://d3op2l77j7wnti.cloudfront.net/Images/Messaging channels/components/Group 1000006016.webp",

        },

    ]


  return (
    <div className={styles.messagingplatformsmainboxes}>
    <h1>Our chatbot services on various platforms</h1>
    <div className={styles.messagingplatformsdataboxes}>{messagingplatformsdata.map((e)=>{
        return (
            <div className={styles.messagingplatformsindidata}>
            <div className={styles.messagingplatformsindileftbox}>
            
            <Image
            
            src={e.icon}
            alt={"images"}
            width={"0"}
            height={"0"}
            sizes={"100vw"}
            style={{ width: "100%", height: "100%",objectFit:"contain"}}
          />
            </div>

            <div className={styles.messagingplatformsindirightbox}>
            <h3>{e.htxt}</h3>
            <p>{e.stxt}</p>
            </div>
            
            </div>
        )
    })}</div>


    
    </div>
  )
}
