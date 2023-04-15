import React from 'react'
import styles from "./BulkEmailSuiteBox.module.css";

const BulkEmailSuiteBox = () => {
  return (
    <div className={styles.bulkEmailSuiteBoxMainDiv}>
      <div className={styles.bulkEmailSuiteBoxLogoDiv}>
        <img src="/Images/BulkEmail/Icon.png" alt="logo" />
        <h5>Bottom Funnel Suite</h5>
      </div>

      <div className={styles.bulkEmailSuiteBoxContentDiv}>
        <h2>Grow Your Business With a 360° CRM</h2>
        <button>Explore Bottom Funnel Suite</button>
      </div>
    </div>
  )
}

export default BulkEmailSuiteBox
