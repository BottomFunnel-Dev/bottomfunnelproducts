import React from 'react'
import styles from "./Leadingcrm.module.css";
import Image from 'next/image';


export const Leadingcrm = () => {
  return (
    <div>
           <div className={styles.Leadingcrmmaindiv}>
   <div className={styles.Leadingcrmmaindivinner}>
    <h2 >A leading CRM for law firms</h2>
    <p>Build and nurture strong relationships with your prospects and clients with Freshsales, a leading modern CRM for law firms.</p>
  <ul>
    <li>Streamline your activities</li>
    <li>Understand your cases inside-out</li>
    <li>Organize all your files in one secure system, and</li>
    <li>Maximize your revenue</li>
  </ul>
   </div>
   <div className={styles.Leadingcrmimage}>
   <Image
                        src={"https://d3op2l77j7wnti.cloudfront.net/Images/lawfrimphotos/Law firm 1.png"}
                        alt={"img"}
                        width={"0"}
                        height={"0"}
                        sizes={"100vw"}
                        style={{ width: "100%", height: "100%" }}

                    />
  </div>
    </div>
    </div>
  )
}
