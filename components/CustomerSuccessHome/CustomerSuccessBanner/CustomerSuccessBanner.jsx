import React from 'react'
import styles from "./CustomerSuccessBanner.module.css";


export const CustomerSuccessBanner = () => {
  return (
    <div>
<div className={styles.CustomerSuccesshomepageBannermaindiv}>
    <div className={styles.CustomerSuccesshomepageBannermaindivcontain}>
        <h1>Ignite Your Customer's journey to delight</h1>
        <p>Help customers reach goals faster, prevent churn, and strengthen your value. </p>
        <div>
            <button  className={styles.CustomerSuccesshomepageBannermaindivbutton}>Start A Free Demo</button>
        </div>
    </div>
    <div className={styles.CustomerSuccesshomepageBannermaindivimage} >
        <img src="/Images/customersuccesshomepagephotos/banner.png" alt="banner" />
    </div>
</div>

    </div>
  )
}
