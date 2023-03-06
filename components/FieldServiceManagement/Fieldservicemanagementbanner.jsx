import Image from 'next/image'
import React from 'react'
import styles from "./Fieldservicemanagementbanner.module.css"


export const Fieldservicemanagementbanner = () => {

  return (
    <div className={styles.fieldservicemanagementbannermain}>
    <div className={styles.fieldservicemanagementbannerflexbox}>
    <div className={styles.fieldservicemanagementrightbox}>
    
    <Image
          src={"/Images/Feild Service Management/Background/Group 340360.webp"}
          alt={"image"}
          width={"0"}
          height={"0"}
          sizes={"100vw"}
          style={{ width: "100%", height: "100%", objectFit:"contain" }}
        />

    
    
    </div>
    <div className={styles.fieldservicemanagementleftbox}>
    <h1>Field Service Management</h1>
    <h3>Go The Extra Miles For Customer Support.</h3>
    <p>Invite Your Field Workforce For On Site Customer Support.
    Create Groups And Easily Track The Performance Of The Field Teams.See
    Trends Analysis And Get Insights On Field Service Data.</p>
    
    
    </div>
    
    </div>



    <div className={styles.fieldservicemanagementbannerflexbox}>
    <div className={styles.fieldservicemanagementleftbox}>
    <h1>Build and grow a profitable field service organization</h1>
    <p>A seamless end-to-end solution with all the capabilities you need to help your customers.</p>
    <button className={styles.filedbannerbutton}>Get started for free</button>
    
    </div>
    <div className={styles.fieldservicemanagementrightbox}>
    
    <Image
          src={"/Images/Feild Service Management/Background/Frame.webp"}
          alt={"image"}
          width={"0"}
          height={"0"}
          sizes={"100vw"}
          style={{ width: "100%", height: "100%", objectFit:"contain" }}
        />

   
    
    </div>
    
    </div>
    
    </div>
  )
}
