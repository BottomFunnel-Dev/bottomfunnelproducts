import React from 'react';
import styles from "./ResourcesCasestudiesBanner.module.css";
import Image from "next/image";

export const ResourcesCasestudiesBanner=()=>{
    return(
        <div className={styles.ResourcesCasestudiesBannerHeader}>
        <div className={styles.ResourcesCasestudiesBannerdiv}>
             <div className={styles.ResourcesCasestudiesBannerMain}>
            <Image
                    src={"/Images/ResourcesCasestudies/banner.png"}
                    alt={"image"}
                    width={"0"}
                    height={"0"}
                    sizes={"100vw"}
                    style={{ width: "100%", height: "100%" }}
                    />
        </div>
        <div className={styles.ResourcesCasestudiesBannerheading}>
            <h1><b>Delightful customer experience are the norm at <span>Bottom Funnel</span> </b></h1>
            <p> 
           We'll let our 60,000+ customers tell you why.
            </p>
            <button className={styles.ResourcesCasestudiesBannerdemo}>VIEW CUSTOMER STORIES</button>
        </div>

        </div>
       

    </div>
    )
}