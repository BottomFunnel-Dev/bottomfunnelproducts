import React from 'react'
import styles from "./InstagramDmDelighfull.module.css"
import Image from 'next/image'

export default function InstagramDmDelighfull () {
  return (
  
    <div className={styles.instagramDmDelightfullContainer}>
     <h1>Enable customers on instagram to reach you right from where they are</h1>
      <div className={styles.instagramDmDelightfullDiv}>
        <div className={styles.instagramDmCustomerRight}>
            <Image
                src={"https://d3op2l77j7wnti.cloudfront.net/Images/InstagramDm/Group4.webp"}
                alt={"img"}
                width={"0"}
                height={"0"}
                sizes={"100vw"}
                style={{ width: "100%", height: "100%", objectFit: "contain" }}
            />
        </div>
        <div className={styles.instagramDmCustomerLeft}>
            <ul>
                <li>
                   <h4>Get insights into journey performance</h4>
                   <p>Understand how your campaigns are performing and how customers are engaging to optimize journeys for better results.</p>
                </li>
                <li>
                    <h4>Create nurture campaigns</h4>
                    <p>Nurture your customers based on their web page visits, downloads, etc., and send targeted emails that improve conversions.</p>
                </li>
                <li>
                     <h4>Schedule at the right time</h4>
                     <p>Plan your customer journeys to go at the right time, for instance, anniversary campaigns, launches, etc.</p>
                </li>
               
            </ul>
        </div>
      </div>
    </div>

  )
}
