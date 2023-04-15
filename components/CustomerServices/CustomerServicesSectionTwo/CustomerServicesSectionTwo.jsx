import React from 'react'
import Image from 'next/image'
import styles from './CustomerServicesSectionTwo.module.css'
export default function CustomerServicesSectionTwo() {
  return (
    <div className={styles.CustomerServicesSectionTwoMainDiv}>
      <div className={styles.CustomerServicesSectionTwoImageDiv}>
      <Image
          src={"/Images/CustomerServices/screen2.png"}
          alt={"image"}
          width={"0"}
          height={"0"}
          sizes={"100vw"}
          style={{ width: "100%", height: "100%" }}
        />
      </div>
      <div className={styles.CustomerServicesSectionTwoContentDiv}>
        <h2>So effortless, you won't notice 
what makes Bottom Funnel desk great</h2>
         <p>Deliver a seamless experience across digital and 
traditional channels with Bottom Funnel desk Omnichannel.</p>
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
    </div>
  )
}
