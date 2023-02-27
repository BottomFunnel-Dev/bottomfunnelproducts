import React from 'react'
import styles from "./Unifiedcustomerbanner.module.css"


export const Unifiedcustomerbanner = () => {
  return (
    <div className={styles.unifiedcustomerbannermainboxes}>
    <div className={styles.unifiedcustomerbennerleftbox}>
    
    <lottie-player
    src="/Animation/unifiedbanneranimation/Banner animation JSon file for Developers.json"
    background="transparent"
    speed="1"
    style={{ width: "100%", height: "100%",  }}
    loop
    autoplay
  ></lottie-player>

    </div>
    <div className={styles.unifiedcustomerbannerrightbox}>
    <h1>Complete <span>Customer view</span> in one unified record.</h1>
    <hr></hr>
    <p>Unified Customer Record in the native customer data platform that captured customer data from all touchpoints and powers your business to deliver delightful customer experiences.</p>
    
    <button className={styles.unifiedcustomerbannerbutton}>Get Started</button>
    </div>
    
    </div>
  )
}
