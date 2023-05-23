import React from 'react'
import styles from "./DealManagementHandle.module.css"
import Image from 'next/image'

export const DealManagementHandle = () => {
  return (
    <div className={styles.dealmanagementhandlemainboxes}>
    <div className={styles.dealmanagementhanleleftbox}>
    <h2>Handle deal management like a pro !</h2>
    <p>Create deals automatically while converting qualified leads.Add different
    products to deal and easily move deals into any stage.Enable better collaboration by allowing multiple salespersons to work
    on the same deal and do more.</p>
    </div>

    <div className={styles.dealmanagementhanlelerightbox}>
    
    <Image
          src={"https://d3op2l77j7wnti.cloudfront.net/Images/Deal management/Screens/ha/handle deal.webp"}
          alt={"handle"}
          width={"0"}
          height={"0"}
          sizes={"100vw"}
          style={{ width: "100%", height: "100%", objectFit:"contain", padding:"20px" }}
        />

    
    </div>
    
    
    </div>
  )
}
