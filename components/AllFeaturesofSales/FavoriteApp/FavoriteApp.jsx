import React from 'react'
import styles from "./FavoriteApp.module.css"
import Image from 'next/image'

export const FavoriteApp = () => {
  return (
    <div>
      <div className={styles.FavoriteAppmaindivheading}>
        <h2>Connect the CRM with your favorite apps</h2>
        <p>Bottom-funnel is built to integrate with applications that you use every day</p>

      </div>

      <div className={styles.FavoriteAppmaindiv}>
        <div className={styles.FavoriteAppmaindivinner}>
          <div className={styles.FavoriteAppmaindivinnerbox}>
            <div className={styles.FavoriteAppmaindivinnerboxlogo}>
              <h4>API Access</h4>
              <div className={styles.FavoriteAppmaindivimage}>
                <Image
                  src={"/Images/allfeaturessales/connect1.png"}
                  alt={"image"}
                  width={"0"}
                  height={"0"}
                  sizes={"100vw"}
                  style={{ width: "100%", height: "100%" }}
                />
              </div>
            </div>

            <div>
              <p>Integrate your account with third-party applications and connect to multiple data sources.</p>
            </div>
          </div>
          
          <div className={styles.FavoriteAppmaindivinnerbox}>
            <div className={styles.FavoriteAppmaindivinnerboxlogo}>
              <h4>Marketplace</h4>
              <div className={styles.FavoriteAppmaindivimage}>
                <Image
                  src={"/Images/allfeaturessales/connect2.png"}
                  alt={"image"}
                  width={"0"}
                  height={"0"}
                  sizes={"100vw"}
                  style={{ width: "100%", height: "100%" }}
                />
              </div>
            </div>
            <div>
              <p>Scale with the Bottom Funnel platform. Bring in Slack, Gong, G Suite, Xero, Outlook, and other apps into your CRM.</p>
            </div>
          </div>
        </div>

      </div>

    </div>
  )
}
