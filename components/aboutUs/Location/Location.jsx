import React from 'react'
import styles from "./Location.module.css";

export const Location = () => {
  return (
    <div>
        <div className={styles.Locationmaindiv}>
            <div className={styles.Locationmaindivbox}>
                <h5>Office Location </h5>
                <h5>5</h5>
            </div>
            <div className={styles.Locationmaindivbox}>
                <h5>Team Members </h5>
                <h5>500+</h5>
            </div>
            <div className={styles.Locationmaindivbox}>
                <h5>Year in business </h5>
                <h5>5+</h5>
            </div>
            <div className={styles.Locationmaindivbox}>
                <h5>Clients </h5>
                <h5>100+</h5>
            </div>
            <div className={styles.Locationmaindivbox1}>
                <h5>Apps Delivered  </h5>
                <h5>100+</h5>
            </div>
        </div>

        <div className={styles.Locationmaindivinner}>
            <div className= {styles.Locationmaindivinnerbox}>
                <ul>
                    <li>Custom app development</li>
                    <li>Technical Expertise</li>
                    <li>Cost-effectiveness </li>
                    <li>Maintenance & support </li>
                    <li>Third-party Integration</li>
                </ul>
            </div>


            <div className= {styles.Locationmaindivinnerbox1}>
                <ul>
                    <li>Quality Assurance</li>
                    <li>Timely Delivery</li>
                    <li>Technical Expertise</li>
                    <li>Cost-effectiveness </li>
                    <li>Communication Skills</li>
                </ul>
            </div>


            <div className= {styles.Locationmaindivinnerbox}>
                <ul>
                    <li>UI/UX Design</li>
                    <li>Agile Development</li>
                    <li>Quality Assurance</li>
                    <li>Maintenance Support </li>
                    <li>Project Management</li>
                </ul>
            </div>
        </div>
    </div>
  )
}
