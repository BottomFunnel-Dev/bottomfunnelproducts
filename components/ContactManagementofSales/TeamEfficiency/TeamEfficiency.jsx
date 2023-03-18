import React from 'react'
import styles from "./TeamEfficiency.module.css";
import Image from 'next/image'

export const TeamEfficiency = () => {
  return (
    <div>
        <div  className={styles.TeamEfficiencymaindiv}>
            <h2>Maximize your sales teams' efficiency</h2>
            <div className={styles.TeamEfficiencyinnerdiv}>
             
             <div className={styles.TeamEfficiencyinnerdivimage}>
                <div>
                <Image
          src={"https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/contactmanagementofsalesphotos/Frame.webp"}
          alt={"image"}
          width={"0"}
          height={"0"}
          sizes={"100vw"}
          style={{ width: "100%", height: "100%" }}
        /> 
                </div>
             </div>
             <div className={styles.TeamEfficiencyinnerdivcontent}>
                <ul>
                    <li><h4>Convert emails to contacts</h4></li>
                    <p>Forward sales emails from your inbox by sending them to your CRM's custom email address</p>
                    <li><h4>Prioritize prospects</h4></li>
                   
                    <p>Forward sales emails from your inbox by sending them to your CRM's custom email address</p>
                    <li><h4>Run successful campaigns</h4></li>
                    <p>Forward sales emails from your inbox by sending them to your CRM's custom email address</p>
                </ul>
             </div>
            </div>
        </div>
    </div>
  )
}
