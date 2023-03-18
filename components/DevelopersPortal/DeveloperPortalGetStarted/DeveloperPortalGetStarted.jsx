import React from 'react'
import styles from "./DeveloperPortalGetStarted.module.css"
import Image from "next/image";

export const DeveloperPortalGetStarted = () => {
  return (
     
    <div className={styles.developerportalGetStartedDiv}>
        <div className={styles.developerPortalLeftSection}>
            <Image
                src={"https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/developerPortal/Group2.png"}
                alt={"image"}
                width={"0"}
                height={"0"}
                sizes={"100vw"}
                style={{ width: "100%", height: "100%" }}
                />
        </div>
        <div className={styles.developerPortalRightSection}>
            <h3>Get Started</h3>
            <h2>Begin your journey today!!</h2>
            <div className={styles.developerPortalBgImage}>
             <Image
                src={"https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/developerPortal/Group20.png"}
                alt={"image"}
                width={"0"}
                height={"0"}
                sizes={"100vw"}
                style={{ width: "100%", height: "100%" }}
                />
                <div className={styles.developerPortalData1}>
                    <div className={styles.developerPortalLogo}>
                    <Image
                        src={"https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/developerPortal/Rectangle1.png"}
                        alt={"image"}
                        width={"0"}
                        height={"0"}
                        sizes={"100vw"}
                        style={{ width: "100%", height: "100%" }}
                        />
                    </div>
                    <div className={styles.developerPortalLogoText}>
                        <h3>Build</h3>
                        <p>Develop apps to integrate BottomFunnel into your own systems</p>
                        <p>Learn more</p>
                    </div>
                </div>

                <div className={styles.developerPortalData2}>
                    <div className={styles.developerPortalLogo}>
                    <Image
                        src={"https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/developerPortal/Rectangle2.png"}
                        alt={"image"}
                        width={"0"}
                        height={"0"}
                        sizes={"100vw"}
                        style={{ width: "100%", height: "100%" }}
                        />
                    </div>
                    <div className={styles.developerPortalLogoText}>
                        <h3>Partner</h3>
                        <p>Expand your business by solving custom client requirements.</p>
                        <p>Learn more</p>
                    </div>
                </div>

                <div className={styles.developerPortalData3}>
                    <div className={styles.developerPortalLogo}>
                    <Image
                        src={"https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/developerPortal/Rectangle3.png"}
                        alt={"image"}
                        width={"0"}
                        height={"0"}
                        sizes={"100vw"}
                        style={{ width: "100%", height: "100%" }}
                        />
                    </div>
                    <div className={styles.developerPortalLogoText}>
                        <h3>Grow</h3>
                        <p>Build apps with no upfront cost and publish them on Marketplace</p>
                        <p>Learn more</p>
                    </div>
                </div>
                <div className={styles.developerPortalData4}>
                    <div className={styles.developerPortalLogo}>
                    <Image
                        src={"https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/developerPortal/Rectangle4.png"}
                        alt={"image"}
                        width={"0"}
                        height={"0"}
                        sizes={"100vw"}
                        style={{ width: "100%", height: "100%" }}
                        />
                    </div>
                    <div className={styles.developerPortalLogoText}>
                        <h3>Play</h3>
                        <p>Build apps quickly and easily with low code platform</p>
                        <p>Learn more</p>
                    </div>
                </div>
            </div>
        </div>
    </div>

  )
}
