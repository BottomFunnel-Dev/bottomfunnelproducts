import React from 'react'
import styles from "./ServiceTools.module.css"
import Image from 'next/image'

export const ServiceTools = () => {
  return (
    <div className={styles.ServiceToolsmaindiv}>
        <h2>The Service Tools You Need to Put Customers First</h2>
      <div className={styles.ServiceToolsmaindivinner}>
       <div className={styles.ServiceToolsbox}>
        <div className={styles.ServiceToolsimagebox}>
            <div className={styles.ServiceToolsimageboxinner}>
            <Image
          src={"/Images/bottomfunnelservicephotos/screen1.webp"}
          alt={"image"}
          width={"0"}
          height={"0"}
          sizes={"100vw"}
          style={{ width: "100%", height: "100%" }}
        />
            </div>
        </div>
        <div className={styles.ServiceToolsboxcontent}>
            <div className={styles.ServiceToolsboxcontentinnerdiv}>
                <h3>Deepen Customer Relationships</h3>
                <p>identify opportunities to deliver service with authenticity.</p>
            </div>
        </div>


       </div>
      </div>
      <div className={styles.ServiceToolsmaindivinner1}>
       <div className={styles.ServiceToolsbox1}>
        <div className={styles.ServiceToolsimagebox}>
            <div className={styles.ServiceToolsimageboxinner}>
            <Image
          src={"/Images/bottomfunnelservicephotos/screens2.webp"}
          alt={"image"}
          width={"0"}
          height={"0"}
          sizes={"100vw"}
          style={{ width: "100%", height: "100%" }}
        />
            </div>
        </div>
        <div className={styles.ServiceToolsboxcontent}>
            <div className={styles.ServiceToolsboxcontentinnerdiv}>
                <h3>Deepen Customer Relationships</h3>
                <p>identify opportunities to deliver service with authenticity.</p>
            </div>
        </div>


       </div>
      </div>


      <div className={styles.ServiceToolsmaindivinner}>
       <div className={styles.ServiceToolsbox}>
        <div className={styles.ServiceToolsimagebox}>
            <div className={styles.ServiceToolsimageboxinner}>
            <Image
          src={"/Images/bottomfunnelservicephotos/screens3.webp"}
          alt={"image"}
          width={"0"}
          height={"0"}
          sizes={"100vw"}
          style={{ width: "100%", height: "100%" }}
        />
            </div>
        </div>
        <div className={styles.ServiceToolsboxcontent}>
            <div className={styles.ServiceToolsboxcontentinnerdiv}>
                <h3>Deepen Customer Relationships</h3>
                <p>identify opportunities to deliver service with authenticity.</p>
            </div>
        </div>


       </div>
      </div>




    </div>
  )
}
