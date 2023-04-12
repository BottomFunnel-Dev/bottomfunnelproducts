import React from 'react';
import styles from "./Account360degBanner.module.css";
import Image from "next/image";

export const Account360degBanner=()=>{
    return(
        <div className={styles.Account360degBannerdiv}>  
        <div className={styles.Account360degBannerheading}>
        <button className={styles.Account360degBannerdeg}>Account 360°</button>
            <h1><b>Gain more visibility into your customers</b></h1>
            <p> 
                See user activity, support tickets, communications, billing information, and more - all in one place.
            </p>
            <button className={styles.Account360degBannerdemo}>REQUEST A DEMO</button>
        </div>
        </div> 

       
       

        
    )
}