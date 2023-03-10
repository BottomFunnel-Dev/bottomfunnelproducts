import React from 'react'
import styles from "./Unifiedsystem.module.css"


export const Unifiedsystem = () => {

    const unifiedsystemdata = [
        {
            htxt:"Single source of truth",
            stxt:"UCR ingests,enriches and presents data from multiple touchpoints across Freshworks products,web and social media.",
        },

        {
            htxt:"No data silos ",
            stxt:"Have access to consistent,accurate,real-time information about the customers and break data silos across departments.",
        },

        {
            htxt:"Persinalized engagement",
            stxt:"Createand manage detailed customer segments and execute targeted multi-channel,capaigns that delight customers.",
        },

    ]
  return (
    <div className={styles.unifiedsystemmainboxes}>
    <h2>UCR: The unified system of intelligence for customer delight</h2>
    <div className={styles.unifiedsystemdatamappingboxes}>{unifiedsystemdata.map((e)=>{
        return (
            <div className={styles.unifiedsystemdataindi}>
            <h4>{e.htxt}</h4>
            <p>{e.stxt}</p>
            </div>
        )
    })}
    
    
    </div>
    
    </div>
  )
}
