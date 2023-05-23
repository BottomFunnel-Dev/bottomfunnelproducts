import React from 'react'
import styles from "./EdtechIndustries.module.css";
import Image from "next/image"

export const EdtechIndustries = () => {
  return (
    <div>
        <div className={styles.EdtechIndustriesmaindiv}>
           <h2>Why Bottom Funnel Sales is ideal for the Edtech industry</h2>
           <div className={styles.EdtechIndustriesmaindivinnerdiv}>
             <div className={styles.EdtechIndustriesmaindivinnerdivcell}>
                <div className={styles.EdtechIndustriesmaindivimage}>
                <Image
                        src={"https://d3op2l77j7wnti.cloudfront.net/Images/Educationsales/banner (8).webp"}
                        alt={"img"}
                        width={"0"}
                        height={"0"}
                        sizes={"100vw"}
                        style={{ width: "100%", height: "100%" }}

                    />
                </div>
                <h4>Ramp up student engagement</h4>
             </div>
             <div className={styles.EdtechIndustriesmaindivinnerdivcell}>
                <div className={styles.EdtechIndustriesmaindivimage}>
                <Image
                        src={"https://d3op2l77j7wnti.cloudfront.net/Images/Educationsales/banner (12).webp"}
                        alt={"img"}
                        width={"0"}
                        height={"0"}
                        sizes={"100vw"}
                        style={{ width: "100%", height: "100%" }}

                    />
                </div>
                <h4>Collaborate across deffrent teams with ease </h4>
             </div>

           </div>

           
           <div className={styles.EdtechIndustriesmaindivinnerdiv}>
             <div className={styles.EdtechIndustriesmaindivinnerdivcell}>
                <div className={styles.EdtechIndustriesmaindivimage}>
                <Image
                        src={"https://d3op2l77j7wnti.cloudfront.net/Images/Educationsales/banner (9).webp"}
                        alt={"img"}
                        width={"0"}
                        height={"0"}
                        sizes={"100vw"}
                        style={{ width: "100%", height: "100%" }}

                    />
                </div>
                <h4>Track deal progress synamically </h4>
             </div>
             <div className={styles.EdtechIndustriesmaindivinnerdivcell}>
                <div className={styles.EdtechIndustriesmaindivimage}>
                <Image
                        src={"https://d3op2l77j7wnti.cloudfront.net/Images/Educationsales/banner (13).webp"}
                        alt={"img"}
                        width={"0"}
                        height={"0"}
                        sizes={"100vw"}
                        style={{ width: "100%", height: "100%" }}

                    />
                </div>
                <h4>Boost enrolment rate </h4>
             </div>

           </div>


        </div>
    </div>
  )
}
