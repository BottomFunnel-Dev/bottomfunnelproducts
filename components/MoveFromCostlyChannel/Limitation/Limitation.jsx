import React from 'react'
import styles from "./Limitation.module.css"
import Image from 'next/image'

export const Limitation = () => {
  return (
    <div>
        <div className={styles.Limitationmaundivheading}>
            <h2>Overcome the limitations of live chat with messaging</h2>
        </div>
    <div className={styles.Limitationmaundiv}>
        <div className={styles.Limitationmaundivinner} style={{border:"none" }}>
            <h6> CRITERIA </h6>
            <p>Channels</p>
            <p>Conversation history</p>
            <p>Cross-device continuity</p>
            <p>Availability</p>
            <p>Deflection through self-service</p>
        </div>

        <div className={styles.Limitationmaundivinner}>
            <h6>Live chat </h6>
            <p>Limited to web and in-app</p>
            <p>Not preserved</p>
            <p>No</p>
            <p>Synchronous</p>
            <p>Not possible</p>
        </div>


        <div className={styles.Limitationmaundivinner}>
            <h6>Messaging </h6>
            <p>Also supports messaging apps</p>
            <p>Preserved</p>
            <p>Yes</p>
            <p>Asynchronous</p>
            <p>Possible</p>
        </div>

    </div>
    </div>
  )
}
