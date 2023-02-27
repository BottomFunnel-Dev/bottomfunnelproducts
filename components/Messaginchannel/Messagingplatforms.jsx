import Image from 'next/image'
import React from 'react'
import styles from "./Messagingplatforms.module.css"

export const Messagingplatforms = () => {

    const messagingplatformsdata = [
        {
            htxt:"WOW your customers on WhatsApp!",
            stxt:"The Bottomfunnel chat, Bottom funnel desk Omnichannel and Bottom funnel sales Suit - WhatsApp integration powered by the Bottom funnel NEO platform helps you automate replies and enable self-service for your customers.",
            icon:"/Images/Messaging channels/components/Group 1000006013.webp",

        },

        {
            htxt:"Deliver customer delight on SMS",
            stxt:"Engage with your customers on the most popular messaging channel - SMS, straight from within the Bottom funnel interface.",
            icon:"/Images/Messaging channels/components/Group 1000006014.webp",

        },

        {
            htxt:"Level up with LINE !",
            stxt:"Provide instant, contextual and personalized responses to your customers on LINE with the Bottom Funnel chat - LINE integration.",
            icon:"/Images/Messaging channels/components/Group 1000006015.webp",

        },

        {
            htxt:"Stay connected with Google's Business Messages",
            stxt:"The Freshchat - Google's Business Messages integration* will help your customers and prospects get in touch with you directly from Google Search or Google Maps.Engage woth your end-users seamlessly on this popular ,essaging channel now.",
            icon:"/Images/Messaging channels/components/Group 1000006016.webp",

        },

    ]


  return (
    <div className={styles.messagingplatformsmainboxes}>
    <h1>Our various Services across platform</h1>
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
            style={{ width: "100%", height: "100%" , objectFit:"contain",}}
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
