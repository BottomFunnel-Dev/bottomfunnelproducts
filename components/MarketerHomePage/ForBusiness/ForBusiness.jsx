import React from 'react'
import styles from "./ForBusiness.module.css"

export const ForBusiness = () => {
  return (
    <div className={styles.ForBusinessdivmain}>
        <div className={styles.ForBusinessdiv}>
            <h2>The only multichannel, conversational CRM for your business</h2>
        </div>
        <div className={styles.ForBusinessdivcard}>
            <div className={styles.ForBusinessdivcardinnerdiv}>
                <div className={styles.ForBusinessdivcardimage}>
                    <img src="/Images/MarketerHomePagephotos/Frame.png" alt="logo" />
                </div>
                <div className={styles.ForBusinessdivcardimagecontain}>
                    <h5>Conversational marketing and support</h5>
                    <p>Create delightful experience by truly understanding your customers and having conversations context</p>
                </div>
            </div>
            <div className={styles.ForBusinessdivcardinnerdiv}>
                <div className={styles.ForBusinessdivcardimage}>
                    <img src="/Images/MarketerHomePagephotos/Frame1.png" alt="logo" />
                </div>
                <div className={styles.ForBusinessdivcardimagecontain}>
                    <h5>Conversational marketing and support</h5>
                    <p>Create delightful experience by truly understanding your customers and having conversations context</p>
                </div>
            </div>
            <div className={styles.ForBusinessdivcardinnerdiv}>
                <div className={styles.ForBusinessdivcardimage}>
                    <img src="/Images/MarketerHomePagephotos/Frame2.png" alt="logo" />
                </div>
                <div className={styles.ForBusinessdivcardimagecontain}>
                    <h5>Conversational marketing and support</h5>
                    <p>Create delightful experience by truly understanding your customers and having conversations context</p>
                </div>
            </div>
            

        </div>

    </div>
  )
}
