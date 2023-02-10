import React from 'react'
import styles from "./RequestDemo.module.css";

export const RequestDemo = () => {
  return (
    <div>
        <div className={styles.requestdemomaindiv}>
            <h2>Ready to see a demo?</h2>
            <p>Let us show you how customer success accelerates growth</p>
            <button className={styles.requestdemomaindivbutton}>Request A Demo</button>
        </div>
    </div>
  )
}
