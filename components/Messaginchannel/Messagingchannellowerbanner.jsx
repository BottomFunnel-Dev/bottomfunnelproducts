import React from 'react'
import styles from "./Messagingchannellowerbanner.module.css"


export const Messagingchannellowerbanner = () => {
  return (
    <div className={styles.messaginglowerbannermainboxes}>
    <div className={styles.messaginlowerbannertxt}>
    <h1>Start today, and enjoy our free trial</h1>
    <p>start your 21-day free trial.No credit card required.No Strings attached</p>
    <div className={styles.lowerbannerbutton}>
    
    <button className={styles.massaginglowerbannerbuttonone}>Start Free Trail</button>
    <button className={styles.massaginglowerbannerbuttonone}>Request Demo</button>
    </div>
    </div>
    </div>
  )
}
