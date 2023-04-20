import React from 'react';
import styles from "./RemoteSupportBanner.module.css";
import Image from "next/image";


export const RemoteSupportBanner=()=>{
return(
    <div className={styles.RemoteSupportBannerHeader}>
        <div className={styles.RemoteSupportBannerdiv}>
             <div className={styles.RemoteSupportBannerMain}>n
            <Image
                    src={"/Images/RemoteSupport/banner.png"}
                    alt={"image"}
                    width={"0"}
                    height={"0"}
                    sizes={"100vw"}
                    style={{ width: "100%", height: "100%" }}
                    />
        </div>
        <div className={styles.RemoteSupportBannerheading}>
            <h1><b>Embrace the Future: Remote Support</b></h1>
            <p> 
            A collection of useful resources that will help your team make the transition to remote customer
            support without any hassles.
            </p>
            <button className={styles.NeoMainpageCTEtwodemo}>Start a free demo</button>
        </div>

        </div>
       

    </div>
)
}