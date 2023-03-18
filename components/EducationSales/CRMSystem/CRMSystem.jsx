import React from 'react'
import styles from "./CRMSystem.module.css";
import Image from "next/image"

export const CRMSystem = () => {
  return (
    <div>
        <div className={styles.CRMSystemmaindiv}>
            <div className={styles.CRMSystemmaindivcontent}>
            <h3>Bottom-Funnel is an intuitive, modern CRM system with a simple and clean interface that lets you get work done without having to wander around the tool. </h3>
            </div>
            
            <div className={styles.CRMSystemmaindivimage}>
            <Image
                        src={"https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/Educationsales/banner (10).webp"}
                        alt={"img"}
                        width={"0"}
                        height={"0"}
                        sizes={"100vw"}
                        style={{ width: "100%", height: "100%" }}

                    />
            </div>
        </div>
    </div>
  )
}
