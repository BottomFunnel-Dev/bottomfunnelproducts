import React from 'react'
import styles from "./MarketerHomePageBanner.module.css"

export const MarketerHomePageBanner = () => {
  return (
    <div>
      <div className={styles.MarketerHomePageBannermaindiv}>
        <div  className={styles.MarketerHomePageBannermaindivcontain}>
          <h1>
            Grow Your Online Store With a Unified Marketing, Sales and Support CRM
          </h1>
          <p> Attract, engage and nurture your customers using WhatsApp,SMS,Email, $ Chat </p>
          <div>
            <button className={styles.MarketerHomePageBannermaindivbutton}>START FREE TRAIL </button>
            <button className={styles.MarketerHomePageBannermaindivbutton1}>VIEW PRICING </button>
          </div>
        </div>
        <div className={styles.MarketerHomePageBannermaindivimage}>
          <img src="/Images/MarketerHomePagephotos/bannerimage.png" alt="bannerimage" />
        </div>
      </div>
    </div>
  )
}
