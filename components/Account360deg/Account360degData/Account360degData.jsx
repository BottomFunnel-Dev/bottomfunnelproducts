import React from 'react';
import styles from "./Account360degData.module.css";
import Image from "next/image";

export const Account360degData=()=>{
    return(
        <div className={styles.Account360degDataheading}>
        <div className={styles.Account360degDataMain}>
            <h2>Bring your customer data together</h2>
            <p>Automatically cature user behavior within your product, and sync customer information from your<br/> 
                other business applications. You can also input information, upload CSV files, or use our powerful 
                REST <br/> API for even more flexibility.
            </p>
        </div>

        <div className={styles.Account360degDatasectionone} id={styles.Account360degDatasectiononesec}>
    <div className={styles.Account360degDataone}>
          <h2>Review account in seconds, not hours</h2>        
<ul>
  <li>Stop switching between apps, spreadsheet and emails to find customer information</li>
<li>See customer emails, chats,mmeting tickets, and product usage in one place. Customize your account view
    around the information that matters to you  </li>
</ul>

        </div>
        <div className={styles.Account360degDataoneimg}>
            <Image
              src={"/Images/Account360deg/screenone.png"}
              alt={"image"}
              width={"0"}
              height={"0"}
              sizes={"100vw"}
              style={{ width: "100%", height: "100%" }}
            />
          </div>
        </div>

        <div className={styles.Account360degDatasectionone}>
    <div className={styles.Account360degDataone}>
          <h2>Measure product adoption</h2>        
<ul>
  <li>See how customer use your product or service.</li>
<li> Understand where customers spend their time and what features they use the most.
    Create reports, alerts and automated emails based on user activity. </li>
</ul>

        </div>
        <div className={styles.Account360degDataoneimg}>
            <Image
              src={"/Images/Account360deg/screenthree.png"}
              alt={"image"}
              width={"0"}
              height={"0"}
              sizes={"100vw"}
              style={{ width: "100%", height: "100%" }}
            />
          </div>
        </div>

        <div className={styles.Account360degDatasectionone}>
    <div className={styles.Account360degDataone}>
          <h2>Track account hierarchy</h2>        
<ul>
  <li>Manage large accounts with multiple departments or sub-companies</li>
<li>Use account hierarchy to reflect parent & child relationships. Quickly see aggregated 
    health, product usage, and revenue for a family of nested accounts.  </li>
</ul>

        </div>
        <div className={styles.Account360degDataoneimg}>
            <Image
              src={"/Images/Account360deg/screenone.png"}
              alt={"image"}
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