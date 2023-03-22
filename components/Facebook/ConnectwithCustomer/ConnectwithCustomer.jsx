import React from 'react'
import styles from "./ConnectwithCustomer.module.css"
import Image from 'next/image'

export const ConnectwithCustomer = () => {
  return (
    <div>
        <div className={styles.ConnectwithCustomermaindivheading}>
            <h2>Connect with Your Customers on Facebook Messenger</h2>
        </div>
        <div className={styles.ConnectwithCustomermaindiv}>
            <div className={styles.ConnectwithCustomermaindivcontent}>
               <h4>Get start at a moment's notice </h4> 
               <li>Connecting your Facebook page with your Bottomfunnel account is simple, instant, and safe </li>
               <li>Route all messages from your Facebook pages to one bottomfunnel inbox </li>
               <li>Read, respond, and manage your customer service from one place.</li>
            </div>
            <div className={styles.ConnectwithCustomermaindivcontentimage}>
            <Image
                  src={"/Images/facebookphotos/screen1.webp"}
                  alt={"Image"}
                  width={"0"}
                  height={"0"}
                  sizes={"100vw"}
                  style={{ width: "100%", height: "100%" }}
                />
            </div>
        </div>

        <div className={styles.ConnectwithCustomermaindivone}>
            <div className={styles.ConnectwithCustomermaindivcontent}>
               <h4>One Bottom funnel chat account for all your Facebook messages </h4>
               <li>Make life easier by connecting all your Facebook pages to your bottomfunnel account.</li>
               <li>if you ever need to stop, you can quickly disconnect a page.Simply toggle it off </li> 
            </div>
            <div className={styles.ConnectwithCustomermaindivcontentimage}>
            <Image
                  src={"/Images/facebookphotos/screen3.webp"}
                  alt={"Image"}
                  width={"0"}
                  height={"0"}
                  sizes={"100vw"}
                  style={{ width: "100%", height: "100%" }}
                />
            </div>
        </div>

        <div className={styles.ConnectwithCustomermaindiv}>
            <div className={styles.ConnectwithCustomermaindivcontent}>
               <h4>Make the most of experts and bots on your team  </h4> 
               <li>Route your facebook messages from facebook to specific bottomfunnel chats groups </li>
               <li>Improve deflection by deploying bots on your Facebook channel  </li>
               <li>Assign chats to agents or to bots based on the choice of the Facebook page </li>
            </div>
            <div className={styles.ConnectwithCustomermaindivcontentimage}>
            <Image
                  src={"/Images/facebookphotos/screen3.webp"}
                  alt={"Image"}
                  width={"0"}
                  height={"0"}
                  sizes={"100vw"}
                  style={{ width: "100%", height: "100%" }}
                />
            </div>
        </div>
    </div>
  )
}
