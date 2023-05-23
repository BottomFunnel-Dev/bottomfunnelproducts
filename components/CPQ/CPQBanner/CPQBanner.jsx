import React from 'react'
import Image from 'next/image'
import styles from "./CPQBanner.module.css";

export const CPQBanner = () => {
  return (
    <div>
      <div className={styles.CPQBannermaindiv}>
        <div  className={styles.CPQBannerimagediv}>
        <Image
          src={"https://d3op2l77j7wnti.cloudfront.net/Images/cpqimage/BANNER IMG.webp"}
          alt={"image"}
          width={"0"}
          height={"0"}
          sizes={"100vw"}
          style={{ width: "100%", height: "100%" }}
        />
        </div>

        <div className={styles.CPQBannercontent}>
         <h1>Generate branded quotes in minutes with CPQ</h1> 
         <p>
          With Bottom-Funnel, track contacts' communication, unify data, improve customer engagement, and develop long-lasting relationships.
         </p>
         <button className={styles.CPQBannerbuttonone} > Sign Up </button> <button className={styles.CPQBannerbuttontwo}> Request Demo</button>
        </div>
      </div>

    </div>
  )
}
