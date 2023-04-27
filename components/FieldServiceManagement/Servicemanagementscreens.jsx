import Image from 'next/image'
import React from 'react'
import styles from "./Servicemanagementscreens.module.css"


export const Servicemanagementscreens = () => {
    const servicemanagementscreensdata = [
        {
            htxt:"Reduce downtime with efficient scheduling",
            stxt:"A powerful scheduling Dashboard makes managing appointments, balancing workloads, and responding to emergencies easy - saving time and improving efficiency.",
            img:"https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/Feild Service Management/Screens/Reduce downtime.webp",
        },

        {
            htxt:"Intelligently engage with customers using bots",
            stxt:"Use Freddy AI to interact with customers, respond to queries and set up appointments automatically-saving you from repetitive tasks while reducing cost and time.",
            img:"https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/Feild Service Management/Screens/Frame4.png",
        },

        {
            htxt:"Stay connected with iOS and Android apps",
            stxt:"Enable field employees to access customer information even when offline and deliver customer service anywhere.",
            img:"https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/Feild Service Management/Screens/andriodIos.png",
        },

    ]
  return (
    <div className={styles.servicemanagementscreensmainbox}>{servicemanagementscreensdata.map((e)=>{
        return (
            <div className={styles.servicemanaindiflexbox}>
            <div className={styles.servicemainindileftboxes}>
            <h1>{e.htxt}</h1>
            <p>{e.stxt}</p>
            
            </div>

            <div className={styles.servicemainindirightboxes}>
            <Image
          src={e.img}
          alt={"image"}
          width={"0"}
          height={"0"}
          sizes={"100vw"}
          style={{ width: "100%", height: "100%" ,objectFit:"contain"}}
        /> 
            </div>
            
            
            </div>
        )
    })}
    
        
    
    </div>
  )
}
