import React from 'react'
import styles from "./DealManagementVisiability.module.css"
import Image from 'next/image'

export const DealManagementVisiability = () => {

    const dealmanagementvisibilitydata = [
        {
            htxt:"Manage incentives",
            stxt:"Use Multiple Sales Pipelines to set an incentive structre for your different sales teams,based on the process they follow and the deals they close.",
            icon:"https://d3op2l77j7wnti.cloudfront.net/Images/Deal management/icons/ha/money-management 1.webp",
        },

        {
            htxt:"Achieve Greater productivity",
            stxt:"Send emails,add tasks directly from your pipeline views and seamlessly collaborate with different teams to win high-value deals.",
            icon:"https://d3op2l77j7wnti.cloudfront.net/Images/Deal management/icons/ha/achievement 1.webp",
        },
        

        {
            htxt:"Identify rotten deals",
            stxt:"Stakeholders from different teams like Finance and Legal can view  documents on Freshsales to ensure that the latest updates are captured.",
            icon:"https://d3op2l77j7wnti.cloudfront.net/Images/Deal management/icons/ha/approve 1.webp",
        },
        

        {
            htxt:"Focus on the right deals",
            stxt:"Use AI-powered insights to determine how a deal is faring,get notified about the next best action and identify the ones that need attention",
            icon:"https://d3op2l77j7wnti.cloudfront.net/Images/Deal management/icons/ha/Vector.webp",
        },
        

        {
            htxt:"Predict revenue",
            stxt:"Set up weighted pipelines that determine your deal's success rate and project revenue from different sales teams by month/quarter/year with sales forecast reports.",
            icon:"https://d3op2l77j7wnti.cloudfront.net/Images/Deal management/icons/ha/revenue 1.webp",
        },
        

    ]

  return (
    <div className={styles.dealmanagementvisiabilitymainboxes}>{dealmanagementvisibilitydata.map((e)=>{
        return (
            <div>
            <div className={styles.dealmanagementvisiabilityiconbox}>
            
            <Image
          src={e.icon}
          alt={"images"}
          width={"0"}
          height={"0"}
          sizes={"100vw"}
          style={{ width: "100%", height: "100%", objectFit:"contain" }}
        />

            
            
            </div>
            <h4>{e.htxt}</h4>
            <p>{e.stxt}</p>
            
            </div>
        )
    })}
    
    
    </div>
  )
}
