import React from 'react'
import styles from "./WhatsNewMonth.module.css"

export default function WhatsNewMonth () {
  return (
    <div className={styles.WhatsNewMonthMain}>
        <div className={styles.WhatsNewMonthtext}>
            <div><h2>Month/Year</h2></div>
            <p>2023 </p>
            <p>|</p>
            <span>2022</span>
            <p>|</p>
            <p> 2021 </p>
            <p>|</p>
            <p> 2020 </p>
            <p>|</p>
            <p> 2019 </p>
            
        </div>
    </div>
  )
}
