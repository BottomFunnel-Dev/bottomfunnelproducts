import React from 'react'
import styles from "./ReportAndAnalysisLower.module.css"

export default function ReportAndAnalysisLower () {
  return (
    <div className={styles.LowerMain}>
        <hr style={{border:"2px solid #14944C", width:"40%",backgroundColor:"#14944C",marginLeft:"60%" }}></hr>

        <div className={styles.Lowertext}>
            <h2>Sign up for funneldesk today</h2>
            <p>Start your 21 days free trial. No credit card required</p>
            <button>Start free trail</button>
        </div>
    </div>
  )
}
