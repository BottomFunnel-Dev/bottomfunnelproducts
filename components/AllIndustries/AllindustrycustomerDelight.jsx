import React from 'react'
import styles from "./AllindustrycustomerDelight.module.css"


export const AllindustrycustomerDelight = () => {


    const customerdelightdata= [
        {
            icon:"Images/Allindustries/Icons/Group 770899.webp",
            htxt:"RETAIL & E-COMMERCE",
            stxt:"Create delightful shopping experiences that WOW your customers.",
        },

        {
            icon:"Images/Allindustries/Icons/Group 770900.webp",
            htxt:"SMALL BUSINESSES",
            stxt:"Deliver personalized interactions with an easy-to-use helpdesk tool.",
        },

        {
            icon:"Images/Allindustries/Icons/Group 770901.webp",
            htxt:"TRAVEL & HOSPITALITY",
            stxt:"Empower travel agents to map delightful journeys for avoid travelers.",
        },

        {
            icon:"Images/Allindustries/Icons/Group 770902.webp",
            htxt:"SOFTWARE & IT",
            stxt:"Secure mission-critical technology with omnichannel support.",
        },

        {
            icon:"Images/Allindustries/Icons/Group 770903.webp",
            htxt:"BANKING & FINANCE",
            stxt:"Offer reliable customer service with a secure helpdesk system.",
        },

        {
            icon:"Images/Allindustries/Icons/Group 770904.webp",
            htxt:"NGOs & NON-PROFITS",
            stxt:"A reliable helpdesk software to meet people's needs and fulfill your cause.",
        },

        {
            icon:"Images/Allindustries/Icons/Group 770905.webp",
            htxt:"EDUCATION",
            stxt:"Intutive support made possible for schools and universities.",
        },

        {
            icon:"Images/Allindustries/Icons/Group 770906.webp",
            htxt:"REAL ESTATE",
            stxt:"Construct seamless customer experiences with Bottom Funnel Omnichannel.",
        },

        {
            icon:"Images/Allindustries/Icons/Group 770907.webp",
            htxt:"HEALTH CARE",
            stxt:"Give top-notch patient care with a unified helpdesk system.",
        },

        {
            icon:"Images/Allindustries/Icons/Group 770908.webp",
            htxt:"INSURANCE",
            stxt:"Extend personalized support and build lasting customer relationships.",
        },

        {
            icon:"Images/Allindustries/Icons/Group 770909.webp",
            htxt:"LOGISTICS",
            stxt:"Collaborate easily with multiple stakeholders and deliver shipments on time.",
        },

        {
            icon:"Images/Allindustries/Icons/Group 1000005977.webp",
            htxt:"MEDIA & ENTERTAINMENT",
            stxt:"Thrill your customers with delightful assistance on multiple channels.",
        },

        {
            icon:"Images/Allindustries/Icons/Group 770910.webp",
            htxt:"MANUFACTURING",
            stxt:"Build solid relations among your customers,suppliers and distributors.",
        },
        
        {
            icon:"Images/Allindustries/Icons/Group 770911.webp",
            htxt:"MANAGED SERVICE PROVIDERS",
            stxt:"Use Freshdesk to provide knowledgeable help to multiple clients.",
        },

    ]

  return (
    <div className={styles.allindistriescustomerdelightmainboxes}>
    <h1>Industries that rely on Bottom Funnel for lasting customer delight</h1>
    <div className={styles.allindiacustomerdelightmappingbox}>{customerdelightdata.map((e)=>{
        return (
            <div className={styles.customerdelightdatamapingindi} key={e.htxt}>
           <div className={styles.customerdelightdatamappingimg}> <img src={e.icon} alt="image" /></div>
            <div className={styles.customerdelightdatamappingtxt}><h4>{e.htxt}</h4>
            <p>{e.stxt}</p>
            </div>
            </div>
        )
    })}</div>
    
    </div>
  )
}
