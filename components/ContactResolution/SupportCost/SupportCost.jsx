import React from 'react'
import styles from "./SupportCost.module.css"
import Image from 'next/image'

export const SupportCost = () => {
  return (
    <div>
        <div className={styles.SupportCostmaindiv}>
        <div className={styles.SupportCostmaindivcontent}>
            <h2>Learn how Dunzo resolves 48% of customer queries without human intervention enabling them to save 30% in support costs.</h2>
        </div>
        <div className={styles.SupportCostmaindivinner}>
            <div className={styles.SupportCostmaindivinnerimage}>
            <Image
                        src={"/Images/contactresolutionphotos/screens.webp"}
                        alt={"img"}
                        width={"0"}
                        height={"0"}
                        sizes={"100vw"}
                        style={{ width: "100%", height: "100%" }}

                    />
            </div>
            <div className={styles.SupportCostmaindivinnercard}>
                <h2>DUNZO</h2>
                <hr />
                
                
                <p>“We needed a platform that was sophisticated to handle high volume and support our load. We also needed structured team performance reports if we were going to improve our customer experience”</p>
           <hr/>
            <div className={styles.SupportCostmaindivinnercardone}>
              <h6>Arvind Prashanth </h6>
              <p>Program Manager</p>
              <p>Dunzo</p>
            </div>
            </div>
        </div>


        </div>

    </div>
  )
}
