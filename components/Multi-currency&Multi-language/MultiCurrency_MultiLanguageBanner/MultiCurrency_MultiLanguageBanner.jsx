import React from 'react'
import styles from "./MultiCurrency_MultiLanguageBanner.module.css"
const MultiCurrency_MultiLanguageBanner = () => {
  return (
    <div className={styles.MultiCurrency_MultiLanguageBannerMainDiv}>
      <div className={styles.MultiCurrency_MultiLanguageBannerImgDiv}>
        <div className={styles.MultiCurrency_MultiLanguageBannerImgContentDiv}>
          <h2>Sell globally with a multi-currency and multi-language CRM</h2>
          <p>
          Customize your CRM to speak your business language and choose from multiple currencies based on where your opportunities lie.
          </p>
          <button>Sign-up for free</button>
        </div>
      </div>

      <div></div>
    </div>
  )
}

export default MultiCurrency_MultiLanguageBanner
