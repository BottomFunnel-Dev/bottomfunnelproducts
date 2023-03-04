import React from 'react'
import styles from "./DeveloperPortalGetStarted.module.css"
import Image from "next/image";

export const DeveloperPortalGetStarted = () => {
  return (
     
    <div className={styles.developerportalGetStartedDiv}>
        <div className={styles.developerPortalLeftSection}>
            <Image
                src={"/Images/developerPortal/Group2.webp"}
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
                src={"/Images/developerPortal/Group20.webp"}
                alt={"image"}
                width={"0"}
                height={"0"}
                sizes={"100vw"}
                style={{ width: "100%", height: "100%" }}
                />
                <div className={styles.developerPortalData1}>
                    <div className={styles.developerPortalLogo}>
                    <Image
                        src={"/Images/developerPortal/Rectangle.webp"}
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
                        src={"/Images/developerPortal/Rectangle.webp"}
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

                <div className={styles.developerPortalData3}>
                    <div className={styles.developerPortalLogo}>
                    <Image
                        src={"/Images/developerPortal/Rectangle.webp"}
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
                <div className={styles.developerPortalData4}>
                    <div className={styles.developerPortalLogo}>
                    <Image
                        src={"/Images/developerPortal/Rectangle.webp"}
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
            </div>
        </div>
    </div>

  )
}
