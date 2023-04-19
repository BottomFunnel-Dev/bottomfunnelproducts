import React from 'react';
import styles from "./SalesfooterMobileAppBanner.module.css";
import Image from "next/image";

export const SalesfooterMobileAppBanner=()=>{
    return(
        <div className={styles.SalesfooterMobileAppBannerdiv}>
             <div className={styles.SalesfooterMobileAppBannerMain}>
            <Image
                    src={"/Images/SalesfooterMobileApp/banner.png"}
                    alt={"image"}
                    width={"0"}
                    height={"0"}
                    sizes={"100vw"}
                    style={{ width: "100%", height: "100%" }}
                    />
        </div>
        <div className={styles.SalesfooterMobileAppBannerheading}>
            <h1><b>Manage your business on the go</b></h1>
            <p> 
            Connect with your prospects, record and access their 
information, make data-driven decisions, and close more details
while on the move. 
            </p>
            <button className={styles.SalesfooterMobileAppBannerdemo}>Start a free demo</button>
           
        </div>

        </div>
       

        
    )
}