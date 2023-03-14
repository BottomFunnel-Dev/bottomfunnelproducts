import Image from 'next/image'
import React from 'react'
import styles from "./Servicemanagementscreens.module.css"


export const Servicemanagementscreens = () => {
    const servicemanagementscreensdata = [
        {
            htxt:"Reduce downtime with efficient scheduling",
            stxt:"A powerful scheduling Dashboard makes managing appointments, balancing workloads, and responding to emergencies easy - saving time and improving efficiency.",
            img:"/Images/Feild Service Management/Screens/Reduce downtime.webp",
        },

        {
            htxt:"Intelligently engage with customers using bots",
            stxt:"Use Freddy AI to interact with customers, respond to queries and set up appointments automatically-saving you from repetitive tasks while reducing cost and time.",
            img:"/Images/Feild Service Management/Screens/Intelligently engage.webp",
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
    
            <div className={styles.servicemanaindiflexbox}>
            <div className={styles.servicemainindileftboxes}>
            <h1>Stay connected with iOS and Android apps</h1>
            <p>Enable field employees to access customer information even when offline and deliver customer service anywhere.</p>
            
            </div>

            <div className={styles.servicemainindirightboxes}>
            <Image
                src={"/Images/Feild Service Management/Screens/Stay connected with iOS.webp"}
                alt={"image"}
                width={"0"}
                height={"0"}
                sizes={"100vw"}
                style={{ width: "100%", height: "100%" ,objectFit:"contain"}}
                />
           <Image
                src={"/Images/Feild Service Management/Screens/model-1.png"}
                alt={"image"}
                width={"0"}
                height={"0"}
                sizes={"100vw"}
                style={{ width: "100%", height: "100%" ,objectFit:"contain"}}
                />
            
            </div>
            
            </div>
    
    </div>
  )
}
