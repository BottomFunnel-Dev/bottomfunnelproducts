import React from 'react';
import styles from "./NgoWhyUs.module.css";
import Image from 'next/image';

export default function NgoWhyUs () {
  return (
    <div className={styles.ngoWhyUsMainDiv}>
      <div className={styles.ngoWhyUsImageDiv}>
        <Image
          src={"https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/ngoandnonProfits/Group11.webp"}
          alt={"img"}
          width={"0"}
          height={"0"}
          sizes={"100vw"}
          style={{ width: "100%", height: "100%", objectFit: "contain" }}
        />
        <div className={styles.ngoWhyusContainerbox}>
            <h1>Why do Non-profits and NGOs Prefer Bottom Funnel ?</h1>
            <div className={styles.ngoWhyusContainer}>
               <div className={styles.ngoWhyusDataBox}>
                   <div className={styles.ngoWhyusData}>
                      <div className={styles.ngoWhyDataImage}>
                         <Image
                            src={"https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/ngoandnonProfits/Group1.webp"}
                            alt={"img"}
                            width={"0"}
                            height={"0"}
                            sizes={"100vw"}
                            style={{ width: "100%", height: "100%"}}
                          />
                      </div>
                      <h2>Easy to Use</h2>
                      <p>A clean and user-friendly interface makes it easy for your staff to use Bottom Funnel, without any elaborate product training</p>
                   </div>
                   <div className={styles.ngoWhyusData}>
                      <div className={styles.ngoWhyDataImage}>
                         <Image
                            src={"https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/ngoandnonProfits/Group2.webp"}
                            alt={"img"}
                            width={"0"}
                            height={"0"}
                            sizes={"100vw"}
                            style={{ width: "100%", height: "100%"}}
                          />
                      </div>
                      <h2>Easy to Use</h2>
                      <p>A clean and user-friendly interface makes it easy for your staff to use Bottom Funnel, without any elaborate product training</p>
                   </div>
                   <div className={styles.ngoWhyusData}>
                      <div className={styles.ngoWhyDataImage}>
                         <Image
                            src={"https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/ngoandnonProfits/Group3.webp"}
                            alt={"img"}
                            width={"0"}
                            height={"0"}
                            sizes={"100vw"}
                            style={{ width: "100%", height: "100%"}}
                          />
                      </div>
                      <h2>Easy to Use</h2>
                      <p>A clean and user-friendly interface makes it easy for your staff to use Bottom Funnel, without any elaborate product training</p>
                   </div>
               </div>

               <div className={styles.ngoWhyusDataBox1}>
                   <div className={styles.ngoWhyusData1}>
                      <div className={styles.ngoWhyDataImage}>
                         <Image
                            src={"https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/ngoandnonProfits/Group4.webp"}
                            alt={"img"}
                            width={"0"}
                            height={"0"}
                            sizes={"100vw"}
                            style={{ width: "100%", height: "100%"}}
                          />
                      </div>
                      <h2>Easy to Use</h2>
                      <p>A clean and user-friendly interface makes it easy for your staff to use Bottom Funnel, without any elaborate product training</p>
                   </div>
                   <div className={styles.ngoWhyusData1}>
                      <div className={styles.ngoWhyDataImage}>
                         <Image
                            src={"https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/ngoandnonProfits/Group5.webp"}
                            alt={"img"}
                            width={"0"}
                            height={"0"}
                            sizes={"100vw"}
                            style={{ width: "100%", height: "100%"}}
                          />
                      </div>
                      <h2>Easy to Use</h2>
                      <p>A clean and user-friendly interface makes it easy for your staff to use Bottom Funnel, without any elaborate product training</p>
                   </div>

               </div>
            </div>
        </div>
      </div>
    </div>
  )
}
