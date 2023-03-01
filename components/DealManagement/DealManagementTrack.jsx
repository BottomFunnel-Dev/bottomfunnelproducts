import React from 'react'
import styles from "./DealManagementTrack.module.css"
import Image from 'next/image'


export const DealManagementTrack = () => {

    return (
        <div className={styles.dealmanagementhandlemainboxes}>
        <div className={styles.dealmanagementhanleleftbox}>
        <h2>Track deals on the go !</h2>
        <p>Access your important deals while on the go.Filter, sort and search
        for deals on the same screen. With the mobile app, quickly scan through each
        deal ir top on it for the details. Stay up-to-date on your deals before you
        step into the meeting.</p>
        </div>
    
        <div className={styles.dealmanagementhanlelerightbox}>
        
        <Image
              src={"/Images/Deal management/Screens/ha/Track deals on the go.webp"}
              alt={"handle"}
              width={"0"}
              height={"0"}
              sizes={"100vw"}
              style={{ width: "100%", height: "100%", objectFit:"contain", padding:"20px" }}
            />
    
        
        </div>
        
        
        </div>
      )
    }