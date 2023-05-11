import Image from 'next/image'
import React from 'react'
import styles from "./Stellerfieldservice.module.css"


export const Stellerfieldservice = () => {
    const stellerfielddata = [
        {
            htxt:"Chat Support",
            stxt:"Included on all plans, our support team is available anytime to solve your issues and help your team get back on track supporting customers.",
            icon:"https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/Feild Service Management/Icons/Rectangle 14.webp",

        },

        {
            htxt:"Connecting tools",
            stxt:"with over 600 apps for Bottom funnel desk, connect your CRM, OMS, billing or invoicing solutions, and handle all service trasactions from one place.",
            icon:"https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/Feild Service Management/Icons/Rectangle 14-1.webp",

        },

        {
            htxt:"Transparent pricing",
            stxt:"With over 600 apps for Bottom funnel desk, connect your CRM,OMS,Billing or invoicing solutions, and handle all service transactions from one place.",
            icon:"https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/Feild Service Management/Icons/Rectangle 14-2.webp",

        },

    ]
  return (
    <div className={styles.stellerfieldservicemainboxes}>
    <h3>Everything you need to deliver stellar field service</h3>
    <div className={styles.stellerfieldservicedatamaping}>{stellerfielddata.map((e)=>{
        return (
            <div className={styles.stellerfieldserviceindi}>
            <h4>{e.htxt}</h4>
            <div className={styles.stellerfieldserviceindiicon}>
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
