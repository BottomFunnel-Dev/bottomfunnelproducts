import React from 'react'
import styles from "./ConnectWithCustomer.module.css"
import Image from 'next/image'

export const ConnectWithCustomer = () => {
  return (
    <div>
        <div className={styles.ConnectWithCustomermaindiv}>
        <div className={styles.ConnectWithCustomerinnerdiv}>
            <h2>Connect with your customers on WhatsApp using Bottom Funnel Chat</h2>
            <p>  Get access to an official WhatsApp Business account with Bottom Funnel chat in 5 days</p>
            <button  className={styles.ConnectWithCustomermaindivbutton}>Sign Up For Free</button>
        </div>
        </div>
    </div>
  )
}
