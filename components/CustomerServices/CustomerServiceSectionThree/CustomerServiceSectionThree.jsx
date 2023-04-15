import React from 'react'
import Image from 'next/image'
import styles from './CustomerServiceSectionThree.module.css'
export default function CustomerServicesSectionThree() {
  return (
    <div className={styles.CustomerServicesSectionThreeMainDiv}>
      <div className={styles.CustomerServicesSectionThreeInnerDiv}>
      <div className={styles.CustomerServicesSectionThreeContentDiv}>
        <h2>Change the conversation with 
Bottom funnel chat</h2>
         <p>Delight customers across modern messaging channels with 
AI-driven conversational engagement.</p>
<button className={styles.CustomerServicesSectionButton1}>
              Learn More 
              <div className={styles.CustomerServicesSectionArrowImage}>
            <Image
          src={"/Images/services_resources/Arrow.png"}
          alt={"img"}
          width={"0"}
          height={"0"}
          sizes={"100vw"}
          style={{ width: "100%", height: "100%" }}
        /></div>
            </button>

        </div> 
        <div className={styles.CustomerServicesSectionThreeImageDiv}>
      <Image
          src={"/Images/CustomerServices/screen3.png"}
          alt={"image"}
          width={"0"}
          height={"0"}
          sizes={"100vw"}
          style={{ width: "100%", height: "100%" }}
        />
      </div></div>
    </div>
  )
}
