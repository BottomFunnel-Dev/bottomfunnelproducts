import React from 'react'
import styles from "./FavoriteApp.module.css"
import Image from 'next/image'

export const FavoriteApp = () => {
  return (
    <div>
     <div className={styles.FavoriteAppmaindivheading}>
     <h2>Get a 360-degree view of customer's information</h2>
            <p>Empower sales teams with a single view of the customer to deliver stellar experience</p>

     </div>

      <div className={styles.FavoriteAppmaindiv}>
        <div className={styles.FavoriteAppmaindivinner}>
            <div className={styles.FavoriteAppmaindivinnerbox}>
             <div className={styles.FavoriteAppmaindivinnerboxlogo}>
                <h4>Table and kanban view</h4>
                <div className={styles.FavoriteAppmaindivimage}>
                <Image
          src={"https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/allfeaturessales/c.webp"}
          alt={"image"}
          width={"0"}
          height={"0"}
          sizes={"100vw"}
          style={{ width: "100%", height: "100%" }}
        /> 
                </div>
             </div>
             <div>
             <p>Visualize data as a table, list or kanban board, or get a summary and access quick actions to perform tasks at scale.</p>
             </div>
            </div>
            <div className={styles.FavoriteAppmaindivinnerbox}>
             <div className={styles.FavoriteAppmaindivinnerboxlogo}>
                <h4>Table and kanban view</h4>
                <div className={styles.FavoriteAppmaindivimage}>
                <Image
          src={"https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/allfeaturessales/d.webp"}
          alt={"image"}
          width={"0"}
          height={"0"}
          sizes={"100vw"}
          style={{ width: "100%", height: "100%" }}
        /> 
                </div>
             </div>
             <div>
             <p>Visualize data as a table, list or kanban board, or get a summary and access quick actions to perform tasks at scale.</p>
             </div>
            </div>
        </div>
        
      </div>
      
    </div>
  )
}
