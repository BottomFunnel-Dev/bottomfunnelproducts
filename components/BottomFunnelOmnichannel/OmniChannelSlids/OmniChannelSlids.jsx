import React from 'react'
import styles from "./OmniChannelSlids.module.css"
import Image from 'next/image'

export const OmniChannelSlids = () => {
  const data = [
    {
    img:"https://d3op2l77j7wnti.cloudfront.net/Animation/Supportdesk/supportdesk.json",
    hd:"Customer & Agent Delight Made Easy",
    p1:"Provide the most intutive support across all channels. Producively understand customer needs to serve excellence, the first time",
    p2:"Save time and reduce repetitive tasks. Help agents rapidly resolve customer inquiries with workforce automation and knowledge from one unified platform",
    bt:"Bottom Funnel Support Desk",
    },
    {
    img:"https://d3op2l77j7wnti.cloudfront.net/Animation/Supportdesk/feildservice.json",
    hd:"Deliver field service that remote agents trust",
    p1:"Now more than ever, field teams need to serve customers safely and effectively while working remotely. offer field service that remote agents can trust to easily resolve issues while on the road.",
    p2:"Route service teams efficiently based on availability proximity and skillset. Offer customers real-time updates via conversational bots and simplified appointment scheduling",
    bt:"Field Service Management",
    },
    {
    img:"https://d3op2l77j7wnti.cloudfront.net/Animation/Supportdesk/contactcentre.json",
    hd:"Answer support calls Effortlessly",
    p1:"Have more effective phone conversations and connect customers to the right expert, from the begining.",
    p2:"Prompt agents with a 360-degree customer view and guided resolutions to improve call productivity. Take advantage of the powerful routing engines that drastically reduce call wait times and achieve smarter escalations",
    bt:"Bottom Funnel  Contact Centre",
    },
    {
      img:"https://d3op2l77j7wnti.cloudfront.net/Animation/Supportdesk/chat.json",
      hd:"Connect on the channels that customers love",
      p1:"Impress customers with availability in their channel of choice, and seamless transitions at any point in their journey. Integrate a blend of conversational experiences including live-chat, web, mobile and contact center support.",
      p2:"Help customers find answers fast. Launch Al-powered chatbots to easily guide customers in solving their questions.",
      bt:"Bottom Funnel Chat",
      },
    
    ]
    
  return (

    <div className={styles.OmniChannelSlidsmainpage}>
      
     

      {data.map((e) => {
return (
  <div className={styles.funnelEliteService}>
  <div className={styles.contentSide}>
    <button>{e.bt}</button>
    <h2>{e.hd}</h2>
    <p>
      {e.p1}
    </p>
    <p>
      {e.p2}
    </p>

    <h5>Explore now &rarr;</h5>
  </div>
  <div className={styles.gifSideOmnichannel}>
      <lottie-player
            src={e.img}
            background="transparent"
            speed="1"
            loop
            autoplay
            >
      </lottie-player>
  </div>
</div>
)
})}

    </div>
  )
}
