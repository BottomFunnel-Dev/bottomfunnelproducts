import React from 'react';
import styles from "./NeoMainpageBanner.module.css";
import Image from "next/image";


export const NeoMainpageBanner=()=>{
return(
    <div className={styles.NeoMainpageBannerHeader}>
        <div className={styles.NeoMainpageBannerdiv}>
             <div className={styles.NeoMainpageBannerMain}>
            <Image
                    src={"/Images/NeoMainpage/banner.png"}
                    alt={"image"}
                    width={"0"}
                    height={"0"}
                    sizes={"100vw"}
                    style={{ width: "100%", height: "100%" }}
                    />
        </div>
        <div className={styles.NeoMainpageBannerheading}>
            <h1><b>Your vision, our platform</b></h1>
            <p> 
            Customize, extend, and unify experiences for your
growing business with the Bottom Funnel Neo platform.
            </p>
            <button className={styles.NeoMainpageBannerdemo}>LET'S TALK</button>
            <button className={styles.NeoMainpageBannerVideo}>WATCH VIDEO</button>
        </div>

        </div>
       

    </div>
)
}