import Image from 'next/image'
import React from 'react'
import styles from "./Collaborationdata.module.css"


export const Collaborationdata = () => {

const collaborationdatad = [
    {
        htxt:"Effortless collaboration for support teams",
        stxt:"configure the Freshdesk-MS Teams integration with ease & enable your support teams to manage support tickets, automate workflows, share conrext, and stay on top of customer queries.",
        image:"https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/Collaboration/components/Group 1000006021.webp",

    },

    {
        htxt:"Simplify your IT service management",
        stxt:"ServiceBot helps manage incidents and service requests through Slack and MS Teams.Resolve tickets with your team's help,get instant updates and respond quickly, all within your favorite collaboration tools.",
        image:"https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/Collaboration/components/Group 1000006030.webp",

    },

    {
        htxt:"Effortless collaboration for support teams",
        stxt:"configure the Freshdesk-MS Teams integration with ease & enable your support teams to manage support tickets, automate workflows, share conrext, and stay on top of customer queries.",
        image:"https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/Collaboration/components/Group 1000006031.webp",

    },

    {
        htxt:"Collaborate effortlessly to delight customers",
        stxt:"Create Slack threads within Freshdesk Customer Sucess,share customer context, and work with cross-functional teams to deliver customer delight.",
        image:"https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/Collaboration/components/Group 1000006032.webp",

    },

]


return (
    <div className={styles.messagingplatformsmainboxes}>
    <div className={styles.messagingplatformsdataboxes}>{collaborationdatad.map((e)=>{
        return (
            <div className={styles.messagingplatformsindidata}>
            <div className={styles.messagingplatformsindileftbox}>
            
            <Image
            src={e.image}
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