import React from 'react'
import Image from 'next/image'
import styles from './FormulaFieldsExplain.module.css'

export default function FormulaFieldsExplain() {
  return (
    <div className={styles.FormulaFieldsExplainMainDiv}>

      <div className={styles.FormulaFieldsExplainImage}>
        <Image
        src={"/Images/FormulaFields/screen.png"}
        alt={"image"}
        width={"0"}
        height={"0"}
        sizes={"100vw"}
        style={{ width: "100%", height: "100%" }}
      />
        </div>
        <div className={styles.FormulaFieldsExplainText}>
               <h2>What are Formula Fields?</h2>
               <p>
               Formula Fields automate manual calculations that you use in your business processes. They are auto-calculated fields that derive their value from an expression based on the data that already exists in your CRM account. Formula Fields in Freshsales support values — both numeric (such as Max, Min, Square root, Exponential, etc.), and string operations (such as compareTo, CONCAT, equals, indexOf, etc.) to calculate even the most complex of calculations that sales teams work with on a daily basis.
          </p>
         
            
           
         
        </div>
    </div>
  )
}
