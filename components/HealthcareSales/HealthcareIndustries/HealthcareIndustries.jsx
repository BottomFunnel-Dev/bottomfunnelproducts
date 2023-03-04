import React from 'react'
import styles from "./HealthcareIndustries.module.css";
import Image from 'next/image';

export const HealthcareIndustries = () => {
  return (
    <div>

<div className={styles.HealthcareIndustriesmaindiv}>
           <h2>Why Freshsales is ideal for the Healthcare Industry</h2>
           <div className={styles.HealthcareIndustriesmaindivinnerdiv}>
             <div className={styles.HealthcareIndustriesmaindivinnerdivcell}>
                <div className={styles.HealthcareIndustriesmaindivimage}>
                <Image
                        src={"/Images/healthcaresales/collection1.webp"}
                        alt={"img"}
                        width={"0"}
                        height={"0"}
                        sizes={"100vw"}
                        style={{ width: "100%", height: "100%" }}

                    />
                </div>
                <h6>Providing a quick view of patient and doctor data the way you want in one place</h6>
             </div>
             <div className={styles.HealthcareIndustriesmaindivinnerdivcell}>
                <div className={styles.HealthcareIndustriesmaindivimage}>
                <Image
                        src={"/Images/healthcaresales/collection2.webp"}
                        alt={"img"}
                        width={"0"}
                        height={"0"}
                        sizes={"100vw"}
                        style={{ width: "100%", height: "100%" }}

                    />
                </div>
                <h6>Giving a 360° view of a patient’s basic information and their entire medical record </h6>
             </div>

             <div className={styles.HealthcareIndustriesmaindivinnerdivcell}>
                <div className={styles.HealthcareIndustriesmaindivimage}>
                <Image
                        src={"/Images/healthcaresales/collection3.webp"}
                        alt={"img"}
                        width={"0"}
                        height={"0"}
                        sizes={"100vw"}
                        style={{ width: "100%", height: "100%" }}

                    />
                </div>
                <h6>Automating daily billing activities with ease, without having to switch apps or tabs </h6>
             </div>

           </div>
    </div>
    </div>
  )
}
