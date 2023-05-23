import React from 'react'
import styles from "./DoallThis.module.css";
import Image from "next/image"

export const DoallThis = () => {
  return (
    
        <div className={styles.DoallThismaindiv}>
           <h2>Do all this and more</h2>
           <div className={styles.DoallThismaindivinnerdiv}>
             <div className={styles.DoallThismaindivinnerdivcell}>
                <div className={styles.DoallThismaindivimage}>
                <Image
                        src={"https://d3op2l77j7wnti.cloudfront.net/Images/Travelagencysales/logo1.webp"}
                        alt={"img"}
                        width={"0"}
                        height={"0"}
                        sizes={"100vw"}
                        style={{ width: "100%", height: "100%" }}

                    />
                </div>
                <h6>Auto-assign every potential customer to the expert agents of the destination using territories</h6>
             </div>
             <div className={styles.DoallThismaindivinnerdivcell}>
                <div className={styles.DoallThismaindivimage}>
                <Image
                        src={"https://d3op2l77j7wnti.cloudfront.net/Images/Travelagencysales/logo2.webp"}
                        alt={"img"}
                        width={"0"}
                        height={"0"}
                        sizes={"100vw"}
                        style={{ width: "100%", height: "100%" }}

                    />
                </div>
                <h6>Identify and talk to the most interested travelers with lead scoring </h6>
             </div>

             <div className={styles.DoallThismaindivinnerdivcell}>
                <div className={styles.DoallThismaindivimage}>
                <Image
                        src={"https://d3op2l77j7wnti.cloudfront.net/Images/Travelagencysales/logo3.webp"}
                        alt={"img"}
                        width={"0"}
                        height={"0"}
                        sizes={"100vw"}
                        style={{ width: "100%", height: "100%" }}

                    />
                </div>
                <h6>Filter and sort travel package deals based on pricing, probability of closing, last activity date, and more. </h6>
             </div>

           </div>
    </div>
  )
}
