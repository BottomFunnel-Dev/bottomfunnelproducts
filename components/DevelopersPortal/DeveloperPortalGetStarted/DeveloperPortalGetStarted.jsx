import React from 'react'
import styles from "./DeveloperPortalGetStarted.module.css"
import Image from "next/image";

export const DeveloperPortalGetStarted = () => {
  return (
     
    <div className={styles.developerportalGetStartedDiv}>
        <div className={styles.developerPortalLeftSection}>
            <Image
                src={"https://d3op2l77j7wnti.cloudfront.net/Images/developerPortal/Group2.png"}
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
                src={"https://d3op2l77j7wnti.cloudfront.net/Images/developerPortal/Group20.png"}
                alt={"image"}
                width={"0"}
                height={"0"}
                sizes={"100vw"}
                style={{ width: "100%", height: "100%" }}
                />
                <div className={styles.developerPortalData1}>
                    <div className={styles.developerPortalLogo}>
                    <Image
                        src={"https://d3op2l77j7wnti.cloudfront.net/Images/developerPortal/Rectangle1.png"}
                        alt={"image"}
                        width={"0"}
                        height={"0"}
                        sizes={"100vw"}
                        style={{ width: "100%", height: "100%" }}
                        />
                    </div>
                    <div className={styles.developerPortalLogoText}>
                        <h3>Build</h3>
                        <p>Companies can build robust technology solutions with our expert developers, leveraging their skills and experience to create high-quality, scalable products.
</p>
                        <p className={styles.developerPortalLearnMore}>Learn more &rarr;</p>
                    </div>
                </div>

                <div className={styles.developerPortalData2}>
                    <div className={styles.developerPortalLogo}>
                    <Image
                        src={"https://d3op2l77j7wnti.cloudfront.net/Images/developerPortal/Rectangle2.png"}
                        alt={"image"}
                        width={"0"}
                        height={"0"}
                        sizes={"100vw"}
                        style={{ width: "100%", height: "100%" }}
                        />
                    </div>
                    <div className={styles.developerPortalLogoText}>
                        <h3>Partner</h3>
                        <p>Companies can form strategic partnerships with our developers, working together to develop and deliver cutting-edge technology solutions and services.

</p>
                        <p className={styles.developerPortalLearnMore}>Learn more &rarr;</p>
                    </div>
                </div>

                <div className={styles.developerPortalData3}>
                    <div className={styles.developerPortalLogo}>
                    <Image
                        src={"https://d3op2l77j7wnti.cloudfront.net/Images/developerPortal/Rectangle3.png"}
                        alt={"image"}
                        width={"0"}
                        height={"0"}
                        sizes={"100vw"}
                        style={{ width: "100%", height: "100%" }}
                        />
                    </div>
                    <div className={styles.developerPortalLogoText}>
                        <h3>Grow</h3>
                        <p> Companies can scale and grow with our talented developers by leveraging their expertise to build innovative technology solutions and products that meet market demands.
</p>
                        <p className={styles.developerPortalLearnMore}>Learn more &rarr;</p>
                    </div>
                </div>
                <div className={styles.developerPortalData4}>
                    <div className={styles.developerPortalLogo}>
                    <Image
                        src={"https://d3op2l77j7wnti.cloudfront.net/Images/developerPortal/Rectangle4.png"}
                        alt={"image"}
                        width={"0"}
                        height={"0"}
                        sizes={"100vw"}
                        style={{ width: "100%", height: "100%" }}
                        />
                    </div>
                    <div className={styles.developerPortalLogoText}>
                        <h3>Play</h3>
                        <p>Companies can partner with our skilled developers to collaborate on technology projects, driving innovation and achieving business goals.
</p>
                        <p className={styles.developerPortalLearnMore}>Learn more &rarr;</p>
                    </div>
                </div>
            </div>
        </div>
    </div>

  )
}
