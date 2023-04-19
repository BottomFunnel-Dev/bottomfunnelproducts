import React from 'react'
import styles from "./DeveloperPortalDiscover.module.css"
import Image from "next/image";

export const DeveloperPortalDiscover = () => {
  return (
     
    <div className={styles.developerPortalDiscoverMainDiv}>
        <div className={styles.developerPortalDiscoverBox}>
            <h2>
                Discover
            </h2>
            <h4>
                Learn,Engage,Contribute!
            </h4>
            <div className={styles.developerDiscoverContainer}>
                 <div className={styles.developerDiscoverDataDiv}>
                    <div className={styles.developerDiscoverDataImage1}>
                       <Image
                            src={"https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/developerPortal/Group3.png"}
                            alt={"image"}
                            width={"0"}
                            height={"0"}
                            sizes={"100vw"}
                            style={{ width: "100%", height: "100%" }}
                        />
                        <div className={styles.developerPortalImagetext}>
                            <h2>Meetups</h2>
                            <p>Meet local BottomFunnel Developers, system integration, administrators and partners.</p>
                            <span>Learn more &rarr;</span>
                        </div>
                    </div>

                    <div className={styles.developerDiscoverDataImage2}>
                       <Image
                            src={"https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/developerPortal/Group6.png"}
                            alt={"image"}
                            width={"0"}
                            height={"0"}
                            sizes={"100vw"}
                            style={{ width: "100%", height: "100%" }}
                        />
                        <div className={styles.developerPortalImagetext}>
                            <h2>Tutorials</h2>
                            <p>Bottom Funnel Developer Platform Tutorials</p>
                            <span>Learn more &rarr;</span>
                        </div>
                    </div>
                 </div>

                 <div className={styles.developerDiscoverDataDiv}>
                    <div className={styles.developerDiscoverDataImage1}>
                       <Image
                            src={"https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/developerPortal/Group5.png"}
                            alt={"image"}
                            width={"0"}
                            height={"0"}
                            sizes={"100vw"}
                            style={{ width: "100%", height: "100%" }}
                        />
                        <div className={styles.developerPortalImagetext}>
                            <h2>Events</h2>
                            <p>Low Code on Bottom Funnel Developer PlatForm.</p>
                            <span>Learn more &rarr;</span>
                        </div>
                    </div>

                    <div className={styles.developerDiscoverDataImage2}>
                       <Image
                            src={"https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/developerPortal/Group4.png"}
                            alt={"image"}
                            width={"0"}
                            height={"0"}
                            sizes={"100vw"}
                            style={{ width: "100%", height: "100%" }}
                        />
                        <div className={styles.developerPortalImagetext}>
                            <h2>Discuss</h2>
                            <p>End-to-End apps for Bottom Funnel Developers</p>
                            <span>Learn more &rarr;</span>
                        </div>
                    </div>
                 </div>
            </div>
        </div>

    </div>

  )
}
