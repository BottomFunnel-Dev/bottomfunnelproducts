import React from 'react'
import styles from "./ContactManagementBanner.module.css";
import Image from 'next/image';


export const ContactManagementBanner = () => {
  return (
    <div>
         <div className={styles.ContactManagementBannermaindiv}>
      <div className={styles.ContactManagementBannerimage}>
      <Image
          src={"https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/contactmanagementofsalesphotos/bgbanner.webp"}
          alt={"image"}
          width={"0"}
          height={"0"}
          sizes={"100vw"}
          style={{ width: "100%", height: "100%" }}
        /> 
      </div>

      <div className={styles.ContactManagementBannerimagecontent}>
        <div>
            <h1>Manage Contacts with <span>Ease</span></h1>
            <hr/>

            <p>Build on top of customers data by seamlessly streaming events in real-time from bottom funnel products to third-party apps and AWS.   </p>
            <button  className={styles.ContactManagementBannerbutton}>Explore Now</button>
        </div>
      </div>
    </div>
    </div>
  )
}
