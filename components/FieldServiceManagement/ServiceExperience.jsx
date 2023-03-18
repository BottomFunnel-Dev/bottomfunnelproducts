import Image from 'next/image'
import React from 'react'
import styles from "./ServiceExperience.module.css"


export const ServiceExperience = () => {

const serviceexperiencedata = [
    {
        htxt:"Omnichannel customer engagement",
        stxt:"Engage with customers via their preferred channels, set up appointments and build better customer relationships with an omnichannel brand pressence.",
        icon:"https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/Feild Service Management/Icons/Rectangle 4.webp",
    },

    {
        htxt:"Save time and resources",
        stxt:"Expand your service coverage area, improve field team response time and provide the tools your team needs to resolve queries efficiently.",
        icon:"https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/Feild Service Management/Icons/Rectangle 4-2.webp",
    },


    {
        htxt:"Empower your field teams",
        stxt:"Expand your service coverage area, improve field team responsetime and provide the tools your team needs to resolve queries efficiently.",
        icon:"https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/Feild Service Management/Icons/Rectangle 4-1.webp",
    },

]

  return (
    <div className={styles.serviceexperiencemainboxes}>
    <h1>Deliver consistently excellent field service experiences</h1>
    <p>Build customer trust and loyalty by improving the speed, consistency and efficiency of your field service operations.</p>
<div className={styles.serviceexperienceflexbox}>{serviceexperiencedata.map((e)=>{
    return (
        <div className={styles.serviceexperiencedataindi}>
        <h4>{e.htxt}</h4>
        <div className={styles.serviceexperiencedataindiimg}>
        <Image
          src={e.icon}
          alt={"icon"}
          width={"0"}
          height={"0"}
          sizes={"100vw"}
          style={{ width: "100%", height: "100%" ,objectFit:"Contain"}}
        />        
        </div>
        <p>{e.stxt}</p>
        </div>
    )
})}



</div>
    
    </div>
  )
}
