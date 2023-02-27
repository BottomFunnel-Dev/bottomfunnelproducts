import React from 'react'
import styles from "./Trial.module.css"

export const Trial = () => {
  return (
    <div className={styles.Trialmaindiv}>
        <h2>Start today, and enjoy our free trial </h2>
        <p>Start your 21-days free trial. No credit card requireed. No string attached.</p>
       
            <button className={styles.Trialmaindivbutton}>Start Free Trial</button>
            <button className={styles.Trialmaindivbutton1}>Request Demo </button>
        
    </div>
  )
}
