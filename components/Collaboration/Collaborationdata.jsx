import Image from 'next/image'
import React from 'react'
import styles from "./Collaborationdata.module.css"


export const Collaborationdata = () => {

const collaborationdatad = [
    {
        htxt:"Quick and seamless collaboration for support teams",
        stxt:"With just a few steps, you can have the Bottom Funnel MS Teams integration configured and enabled for your support teams to manage support tickets, automate workflows, share context, and stay on top of customer queries.",
        image:"https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/Collaboration/components/Group 1000006021.webp",

    },

    {
        htxt:"Reduce the complexity of your IT service management",
        stxt:"ServiceBot manages incidents and service requests through Slack and MS Teams, utilizing the services provided by Slack and MS Teams. With the assistance of your team, resolve tickets quickly and efficiently. Gain access to real-time updates and a quick response through the tools that suit your collaborative style.",
        image:"https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/Collaboration/components/Group 1000006030.webp",

    },

    {
        htxt:"Speed up the closing of deals",
        stxt:"By integrating with Slack, salespeople can gain all the assistance they need from their CRM, eliminating the need for them to search for resources elsewhere. This allows them to focus on their core competency: closing deals.",
        image:"https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/Collaboration/components/Group 1000006031.webp",

    },

    {
        htxt:"Effortlessly collaborate to delight customers",
        stxt:"Utilize Slack to create threads for the purpose of sharing customer context and collaborating with cross-functional teams to deliver customer delight.",
        image:"https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/Collaboration/components/Group 1000006032.webp",

    },

]


return (
    <div className={styles.messagingplatformsmainboxes}>
    <div className={styles.messagingplatformsdataboxes}>
        {collaborationdatad.map((e)=>{
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