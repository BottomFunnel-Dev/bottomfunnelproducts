import React from 'react'
import styles from "./DeveloperResource.module.css"
import Image from "next/image";

export const DeveloperResource = () => {
  return (
     
    <div className={styles.developerPortalResourceMainDiv}>
        <h2>Resource</h2>
        <h3>Explore Tools and Guide</h3>
        <div className={styles.developerResourceContainer}>

          <div className={styles.developerResourceMainDiv}>
            <div className={styles.developerResourceBox}>
              <div className={styles.developerPortalResourceImage}>
                <Image
                  src={"https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/developerPortal/Group9.png"}
                  alt={"image"}
                  width={"0"}
                  height={"0"}
                  sizes={"100vw"}
                  style={{ width: "100%", height: "100%" }}
                  />
              </div>
              <div className={styles.developerPortalResourceText}>
                  <h3>
                    Explore the Documentation
                  </h3>
                  <p>
                    Technical Documentation to help you build apps and integration with Bottom Funnel products.
                  </p>
                  <h4>Explore Now</h4>
              </div>
            </div>
          </div>

          <div className={styles.developerResourceMainDiv}>
            <div className={styles.developerResourceBox}>
              <div className={styles.developerPortalResourceImage}>
                <Image
                  src={"https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/developerPortal/Group1.png"}
                  alt={"image"}
                  width={"0"}
                  height={"0"}
                  sizes={"100vw"}
                  style={{ width: "100%", height: "100%" }}
                  />
              </div>
              <div className={styles.developerPortalResourceText}>
                  <h3>
                    BottomFunnel Developer Blogs
                  </h3>
                  <p>
                    Bottom Funnel official channel to get platform updates. announcements,developer.
                  </p>
                  <h4>Explore Now</h4>
              </div>
            </div>
          </div>

          <div className={styles.developerResourceMainDiv}>
            <div className={styles.developerResourceBox}>
              <div className={styles.developerPortalResourceImage}>
                <Image
                  src={"https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/developerPortal/Group10.png"}
                  alt={"image"}
                  width={"0"}
                  height={"0"}
                  sizes={"100vw"}
                  style={{ width: "100%", height: "100%" }}
                  />
              </div>
              <div className={styles.developerPortalResourceText}>
                  <h3>
                    Explore the Documentation
                  </h3>
                  <p>
                    Technical Documentation to help you build apps and integration with Bottom Funnel products.
                  </p>
                  <h4>Explore Now</h4>
              </div>
            </div>
          </div>
          
        </div>
    </div>
  )
}
