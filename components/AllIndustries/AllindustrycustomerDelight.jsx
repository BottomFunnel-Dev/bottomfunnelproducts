import React, { useState } from 'react'
import styles from "./AllindustrycustomerDelight.module.css"


export const AllindustrycustomerDelight = () => {

    // const [linkchanges, setLinkchanges] = useState("/")
    // const handleLinkChange = (linkchange) => {
    //     setLinkchanges(() => linkchange)
    // }

    const customerdelightdata= [
        {
            icon:"Images/Allindustries/Icons/Group 770899.webp",
            htxt:"RETAIL & E-COMMERCE",
            stxt:"Create delightful shopping experiences that WOW your customers.",
            link:"/retailandecommerce",
        },

        {
            icon:"Images/Allindustries/Icons/Group 770900.webp",
            htxt:"SMALL BUSINESSES",
            stxt:"Deliver personalized interactions with an easy-to-use helpdesk tool.",
            link:"/",
        },

        {
            icon:"Images/Allindustries/Icons/Group 770901.webp",
            htxt:"TRAVEL & HOSPITALITY",
            stxt:"Empower travel agents to map delightful journeys for avoid travelers.",
            link:"/funneldesk/solutions/travel-and-hospitality"
        },

        {
            icon:"Images/Allindustries/Icons/Group 770902.webp",
            htxt:"SOFTWARE & IT",
            stxt:"Secure mission-critical technology with omnichannel support.",
            link:"",
        },

        {
            icon:"Images/Allindustries/Icons/Group 770903.webp",
            htxt:"BANKING & FINANCE",
            stxt:"Offer reliable customer service with a secure helpdesk system.",
            link:"",
        },

        {
            icon:"Images/Allindustries/Icons/Group 770904.webp",
            htxt:"NGOs & NON-PROFITS",
            stxt:"A reliable helpdesk software to meet people's needs and fulfill your cause.",
            link:"",
        },

        {
            icon:"Images/Allindustries/Icons/Group 770905.webp",
            htxt:"EDUCATION",
            stxt:"Intutive support made possible for schools and universities.",
            link:"",
        },

        {
            icon:"Images/Allindustries/Icons/Group 770906.webp",
            htxt:"REAL ESTATE",
            stxt:"Construct seamless customer experiences with Bottom Funnel Omnichannel.",
            link:"",
        },

        {
            icon:"Images/Allindustries/Icons/Group 770907.webp",
            htxt:"HEALTH CARE",
            stxt:"Give top-notch patient care with a unified helpdesk system.",
            link:"",
        },

        {
            icon:"Images/Allindustries/Icons/Group 770908.webp",
            htxt:"INSURANCE",
            stxt:"Extend personalized support and build lasting customer relationships.",
            link:"",
        },

        {
            icon:"Images/Allindustries/Icons/Group 770909.webp",
            htxt:"LOGISTICS",
            stxt:"Collaborate easily with multiple stakeholders and deliver shipments on time.",
            link:"",
        },

        {
            icon:"Images/Allindustries/Icons/Group 1000005977.webp",
            htxt:"MEDIA & ENTERTAINMENT",
            stxt:"Thrill your customers with delightful assistance on multiple channels.",
            link:"",
        },

        {
            icon:"Images/Allindustries/Icons/Group 770910.webp",
            htxt:"MANUFACTURING",
            stxt:"Build solid relations among your customers,suppliers and distributors.",
            link:"",
        },
        
        {
            icon:"Images/Allindustries/Icons/Group 770911.webp",
            htxt:"MANAGED SERVICE PROVIDERS",
            stxt:"Use Bottom funnel desk to provide knowledgeable help to multiple clients.",
            link:""
        },

    ]

  return (
    <div className={styles.allindistriescustomerdelightmainboxes}>
    <h1>Industries that rely on Bottom Funnel for lasting customer delight</h1>
    <div className={styles.allindiacustomerdelightmappingbox}>{customerdelightdata.map((e)=>{
        return (
            
            <div className={styles.customerdelightdatamapingindi} 
            // key={e.htxt} onClick={() => {
            //     handleLinkChange(e.link)
            //     console.log(e.link)
            //   }}
            
            >

           <div className={styles.customerdelightdatamappingimg}> <img src={e.icon} alt="image" /></div>
            <div className={styles.customerdelightdatamappingtxt}><h4>{e.htxt}</h4>
            <p>{e.stxt}</p>
            <p>Learn more <i class="bi bi-arrow-right"></i></p>
            </div>
            </div>
        )
    })}</div>
    
    </div>
  )
}
