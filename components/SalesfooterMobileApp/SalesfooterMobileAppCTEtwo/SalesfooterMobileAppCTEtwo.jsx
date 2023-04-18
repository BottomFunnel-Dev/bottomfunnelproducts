import React from 'react';
import styles from "./SalesfooterMobileAppCTEtwo.module.css";
import Image from "next/image";

export const SalesfooterMobileAppCTEtwo=()=>{
    return(
        <div className={styles.SalesfooterMobileAppCTEtwodiv}>
             <div className={styles.SalesfooterMobileAppCTEtwoMain}>
            <Image
                    src={"/Images/SalesfooterMobileApp/cte2.png"}
                    alt={"image"}
                    width={"0"}
                    height={"0"}
                    sizes={"100vw"}
                    style={{ width: "100%", height: "100%" }}
                    />
        </div>
        <div className={styles.SalesfooterMobileAppCTEtwoheading}>
            <h2><b>Grow your business with a 360° CRM</b></h2>
            <button className={styles.SalesfooterMobileAppCTEtwodemo}>Explore Bottom Funnel suite</button>
           
        </div>

        </div>
       

        
    )
}