import React from 'react'
import styles from "./Productivity.module.css";

export const Productivity = () => {
  return (
    <div>
    <div className={styles.Productivitymaindiv}>
        <h2>
           Improve sales productivity and win deals faster
        </h2>
        <div className= {styles.Productivityinnercards}>
          <div className={styles.Productivitymaindivcards}>
            <h4>Surface your hottest leads</h4>
            <p>Intelligently rank your prospects based on their profile and engagement level using Contact Scoring. </p>
          </div>
          <div className={styles.Productivitymaindivcards}>
            <h4>Surface your hottest leads</h4>
            <p>Intelligently rank your prospects based on their profile and engagement level using Contact Scoring. </p>
          </div>
          <div className={styles.Productivitymaindivcards}>
            <h4>Surface your hottest leads</h4>
            <p>Intelligently rank your prospects based on their profile and engagement level using Contact Scoring. </p>
          </div>
        </div>
    </div>
    </div>
  )
}
