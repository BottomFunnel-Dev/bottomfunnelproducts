import React from 'react'
import styles from "./MultipleSalesBanner.module.css"
const MultipleSalesBanner = () => {
  return (
    <div className={styles.multipleSalesMainDiv}>
      <div className={styles.multipleSalesImgDiv}>
        <div className={styles.multipleSalesImgContentDiv}>
          <h2>Visualize and manage deals with Multiple Sales Pipelines</h2>
          <p>
          Gain insights on deals with Multiple Sales Pipelines and optimize your sales process.
          </p>
          <button>Sign-up for free</button>
        </div>
      </div>
    </div>
  )
}

export default MultipleSalesBanner;