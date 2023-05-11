import React from 'react';
import styles from "./NeoMainpageCTEtwo.module.css";
import Image from 'next/image';

export const NeoMainpageCTEtwo=()=>{
    return(
        <div className={styles.NeoMainpageCTEtwoHeader}>
            <div className={styles.NeoMainpageCTEtwoMain}>
                <h2>Explore Bottom Funnel Neo platform services</h2>
                <p>The platform services enable you to unify and customize your experience across the 
Bottom Funnel product suite as your business scales.</p>
<button className={styles.NeoMainpageCTEtwodemo}>Explore Now</button>

           
            </div>
        </div>
    )
}