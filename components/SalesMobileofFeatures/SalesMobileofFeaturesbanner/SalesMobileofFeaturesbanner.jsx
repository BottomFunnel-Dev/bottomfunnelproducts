import React from 'react'
import styles from "./SalesMobileofFeaturesbanner.module.css"
import Image from 'next/image'

export const SalesMobileofFeaturesbanner = () => {
  return (
    <div>
     <div className={styles.SalesMobileofFeaturesbannermaindiv}>
        <div className={styles.SalesMobileofFeaturesbannercontent}>
          <h1>Unify administration across  freshworks products </h1>
          <p>
            Power admins to secure data, enable users, and manage subscription billing, from one console, no matter what the scale!
          </p>
          <button className={styles.SalesMobileofFeaturesbannerbutton}>Start Free trial</button>
        </div>
        <div className={styles.SalesMobileofFeaturesbannerimage}>
          <div className={styles.SalesMobileofFeaturesbannerinnerimage}>
          <Image
          src={"https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/Mobilesalesoffeaturesphotos/banner.webp"}
          alt={""}
          width={"0"}
          height={"0"}
          sizes={"100vw"}
          style={{ width: "100%", height: "100%" }}
        />  
          </div>
        </div>
     </div>

     <div className={styles.SalesMobileofFeaturesbannermaindiv1}>
        <div className={styles.SalesMobileofFeaturesbannercontenttwo}>
          <h2 >Everything you need to know about your prospects is just a tap away</h2>
          <p>
          With the Freshsales mobile app, manage contacts, deals, and accounts on the move, and stay connected with your prospects and team. Deliver exceptional customer experiences from anywhere with all the data at your fingertips. Customize your CRM mobile app, collaborate with your team, and stay on top of your game.
          </p>
          {/* <button className={styles.SalesMobileofFeaturesbannerbutton}>Start Free trial</button> */}
        </div>
        <div className={styles.SalesMobileofFeaturesbannerimagetwo}>
          <div className={styles.SalesMobileofFeaturesbannerinnerimage}>
          <Image
          src={"https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/Mobilesalesoffeaturesphotos/secondbanner.webp"}
          alt={""}
          width={"0"}
          height={"0"}
          sizes={"100vw"}
          style={{ width: "100%", height: "100%" }}
        />  
          </div>
        </div>
     </div>

    </div>
  )
}
