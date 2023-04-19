import React from 'react'
import Image from 'next/image'
import styles from './FormulaFieldsBanner.module.css'

export default function FormulaFieldsBanner() {
  return (
    <div className={styles.FormulaFieldsBannerMainDiv}>
        <div className={styles.FormulaFieldsBannerImage}>
        <Image
        src={"/Images/FormulaFields/banner.png"}
        alt={"image"}
        width={"0"}
        height={"0"}
        sizes={"100vw"}
        style={{ width: "100%", height: "100%" }}
      />
        </div>
        <div className={styles.FormulaFieldsBannerText}>
               <h1>Automate complex calculations on your CRM</h1>
               <p>
            Personalize engagement, shorten your sales cycle, and grow your
            business with Bottom Funnel sales.
          </p>
         
            <button className={styles.FormulaFieldsBannerbutton}>SIGN UP FOR FREE </button>
           
         
        </div>
      
    </div>
  )
}
