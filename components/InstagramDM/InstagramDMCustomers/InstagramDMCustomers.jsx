import React from 'react'
import styles from "./InstagramDMCustomers.module.css"
import Image from 'next/image'

export default function InstagramDMCustomers () {
  return (
  
    <div className={styles.instagramDmCustomersContainer}>
        <h1>24/7 Support Made Easy</h1>
        <p>Empower Your Business with Automated Bots and Intelligent Automation for Round-the-Clock Customer Assistance</p>
      <div className={styles.instagramDmCustomersDiv}>
      <div className={styles.instagramDmCustomerLeft}>
            <h4>Round-the-clock support is crucial for businesses to deliver exceptional customer service.</h4>
            <p>It ensures availability, prompt responses, global reach, increased efficiency, and improved customer satisfaction. Discover the benefits of round-the-clock support below.</p>
            <ul>
                <li>
                Round-the-clock support ensures that customers can reach out for assistance at any time, regardless of the day or time zone.
                </li>
                <li>
                With round-the-clock support, customers receive prompt responses to their queries and concerns, enhancing their overall experience and satisfaction. 
                </li>
                <li>
                Round-the-clock support enables businesses to cater to customers from different regions and time zones, expanding their reach and providing a seamless experience to a diverse customer base.
                </li>
                
            </ul>
        </div>
        <div className={styles.instagramDmCustomerRight}>
            <Image
                src={"https://d3op2l77j7wnti.cloudfront.net/Images/InstagramDm/Group2.webp"}
                alt={"img"}
                width={"0"}
                height={"0"}
                sizes={"100vw"}
                style={{ width: "100%", height: "100%", objectFit: "contain" }}
            />
        </div>
      </div>
    </div>

  )
}
