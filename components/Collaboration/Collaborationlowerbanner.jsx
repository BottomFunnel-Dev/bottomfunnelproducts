import React from 'react'
import styles from "./Collaborationlowerbanner.module.css"


export const Collaborationlowerbanner = () => {
    return (
        <div className={styles.messaginglowerbannermainboxes}>
        <div className={styles.messaginlowerbannertxt}>
        <h2>Start today, and enjoy our free trial</h2>
        <p>Start your 21-day free trial. No credit card required. No Strings attached.</p>
        <div className={styles.lowerbannerbutton}>
        
        <button className={styles.massaginglowerbannerbuttonone}>Start Free Trail</button>
        <button className={styles.massaginglowerbannerbuttonone}>Request Demo</button>
        </div>
        </div>
        </div>
      )
    }
    