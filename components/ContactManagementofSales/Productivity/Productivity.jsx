import React from 'react'
import styles from "./Productivity.module.css";

export const Productivity = () => {
  const data = [{hd:"Surface your hottest leads",
                 p:"Intelligently rank your prospects based on their profile and engagement level using Contact Scoring."},
                 
                 {hd:"Surface your hottest leads",
                 p:"Intelligently rank your prospects based on their profile and engagement level using Contact Scoring."},
               
                 {hd:"Surface your hottest leads",
                 p:"Intelligently rank your prospects based on their profile and engagement level using Contact Scoring."},
         ]
  return (
    <div>
    <div className={styles.Productivitymaindiv}>
        <h2>
           Improve sales productivity and win deals faster
        </h2>
        <div className= {styles.Productivityinnercards}>
          {data.map((e) => {
            return(
              <div className={styles.Productivitymaindivcards}>
              <h4>{e.hd}</h4>
              <p>{e.p}</p>
            </div>
            );
          })}
        
          
        </div>
    </div>
    </div>
  )
}
