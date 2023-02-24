import React from 'react'
import styles from "./Shopifybanner.module.css"


export const Shopifybanner = () => {
  return (
    <div className={styles.shopifybannermainboxes}>
    <div className={styles.shopifybannertxtboxes}>
    <h1>The only multichannel, conversational marketing CRM for shopify storefronts</h1>
    <p>Attract engage and nature your customers using WhatsApp, SMS, Email & Chat</p>
    <button className={styles.shopifybannerbutton}>Get Started</button>
    </div>
    </div>
  )
}
