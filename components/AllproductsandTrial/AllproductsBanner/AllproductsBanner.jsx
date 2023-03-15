import React from 'react'
import styles from "./AllproductsBanner.module.css"

export const AllproductsBanner = () => {
  return (
    <div>
     <div className={styles.AllproductsBannermaindiv}>
      <div className={styles.AllproductsBannermaindivinner}>
        <h1>All Products and Solutions</h1>
        <p>Business software to delight your customers and employees </p>
        <button className={styles.AllproductsBannermaindivbutton}>Sign Up for Free</button>
      </div>
     </div>
    </div>
  )
}
