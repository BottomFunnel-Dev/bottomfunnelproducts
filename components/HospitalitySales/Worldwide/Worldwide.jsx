import React from 'react'
import styles from "./Worldwide.module.css";
import Image from 'next/image'

export const Worldwide = () => {
  return (
    <div className={styles.Worldwidemaindivtopdiv}>
       <h2> Trusted by businesses worldwide</h2>
        <div className={styles.Worldwidemaindiv}>
            <div className={styles.Worldwidemaindivimage}>
            <Image
                        src={"https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/hospitalitysalesphotos/logos.webp"}
                        alt={"img"}
                        width={"0"}
                        height={"0"}
                        sizes={"100vw"}
                        style={{ width: "100%", height: "100%" }}

                    />
            </div>
            <p>“Overall, with Freshsales (formerly Bottom Funnel CRM), we now have a repository of all our customers and prospects. We can access data on every single person who has ever done business with us and generate reports on our overall business performance.”</p>
              <hr/>
              
              <h6>Phil Shelton</h6>
              <h2>CEO</h2>
              <p>Shelton Development Services</p>

        </div>
    </div>
  )
}
