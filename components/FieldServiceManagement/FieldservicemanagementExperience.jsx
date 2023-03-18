import Image from 'next/image'
import React from 'react'
import styles from "./FieldservicemanagementExperience.module.css"


export const FieldservicemanagementExperience = () => {
    const stellerfielddata = [
        {
            htxt:"Omnichannel customer engagement",
            stxt:"Engage with customers via their prefrered channels, set up appointments, and build bettre customer relationship with an omnichannel brand presence.",
            icon:"https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/Feild Service Management/Icons/Rectangle 4.webp",

        },

        {
            htxt:"save time and resources",
            stxt:"Expand your service coverage area, improve field team response time, and provide the tools your team needs to resolve queries efficiently.",
            icon:"https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/Feild Service Management/Icons/Rectangle 4-2.webp",

        },

        {
            htxt:"Empower your field teams",
            stxt:"Expand your service coverage area, improve field team response time, and provide the tools your team needs to resolve queries efficiently.",
            icon:"https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/Feild Service Management/Icons/Rectangle 4-1.webp",
        },

    ]
  return (
    <div className={styles.fieldserviceExperiencemainboxes}>
    <h3>Deliver consistently excellent field service experiences</h3>
    <p>Build customer trust and loyalty by improving the speed, consistency, and efficiency of your field service operations.</p>
    <div className={styles.fieldserviceExperiencedatamaping}>{stellerfielddata.map((e)=>{
        return (
            <div className={styles.fieldserviceExperienceindi}>
            <h4>{e.htxt}</h4>
            <div className={styles.fieldserviceExperienceindiicon}>
            <Image
          src={e.icon}
          alt={"icon"}
          width={"0"}
          height={"0"}
          sizes={"100vw"}
          style={{ width: "100%", height: "100%" , objectFit:"contain"}}
        />

            
            
            </div>
            <p>{e.stxt}</p>
            
        
            </div>
        )
    })}</div>
    

    <h3>Go the extra mile for your customers.Literally.</h3>
    <button className={styles.stellerservicebutton}>TRY FIELD SERVICE MANAGEMENT FOR FREE</button>


    </div>
  )
}
