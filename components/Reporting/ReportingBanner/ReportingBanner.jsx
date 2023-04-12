import React from 'react';
import styles from "./ReportingBanner.module.css";
import Image from "next/image";

export const ReportingBanner=()=>{
    return(
        <div className={styles.reportingBannerdiv}>
             <div className={styles.reportingBannerMain}>
            <Image
                    src={"/Images/Reporting/banner.png"}
                    alt={"image"}
                    width={"0"}
                    height={"0"}
                    sizes={"100vw"}
                    style={{ width: "100%", height: "100%" }}
                    />
        </div>
        <div className={styles.reportingBannerheading}>
            <h1><b>Advanced analytics for greater visibility and service improvement</b></h1>
            <p> 
                Monitor service desk performance, make informed decisions and improve service delivery 
                with predefined custom reporting capabilities across the service desk. 
            </p>
            <button className={styles.reportingBannerdemo}>Start a free demo</button>
            <button className={styles.reportingBannersignup}>Sign up</button>

        </div>

        </div>
       

        
    )
}