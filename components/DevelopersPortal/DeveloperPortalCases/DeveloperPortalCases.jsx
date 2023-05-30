import React from 'react'
import styles from "./DeveloperPortalCases.module.css"
import Image from "next/image";

export const DeveloperPortalCases = () => {
  return (
     
    <div className={styles.developerPortalCasesMainDiv}>
        <h3>Case Studies</h3>
        <h2>Learn how business solve complex problems with apps</h2>
        <div className={styles.developerPortalCaseContainer}>
            <div className={styles.developerPortalCaseBox}>
                <div className={styles.developerPortalCaseImage1}>
                   <Image
                        src={"https://d3op2l77j7wnti.cloudfront.net/Images/developerPortal/NT.png"}
                        alt={"image"}
                        width={"0"}
                        height={"0"}
                        sizes={"100vw"}
                        style={{ width: "100%", height: "100%" }}
                    />
                </div>
                <h3>Case Study</h3>
                <p>Happy uses custom app to improve SLAs</p>
                <h4>Read full case study</h4>
            </div>
            <div className={styles.developerPortalCaseBox}>
                <div className={styles.developerPortalCaseImage2}>
                   <Image
                        src={"https://d3op2l77j7wnti.cloudfront.net/Images/developerPortal/SPJ.png"}
                        alt={"image"}
                        width={"0"}
                        height={"0"}
                        sizes={"100vw"}
                        style={{ width: "100%", height: "100%" }}
                    />
                </div>
                <h3>Case Study</h3>
                <p>Delivery hero uses public app to automate tasks.</p>
                <h4>Read full case study</h4>
            </div>
            <div className={styles.developerPortalCaseBox}>
                <div className={styles.developerPortalCaseImage}>
                   <Image
                        src={"https://d3op2l77j7wnti.cloudfront.net/Images/developerPortal/BBG.png"}
                        alt={"image"}
                        width={"0"}
                        height={"0"}
                        sizes={"100vw"}
                        style={{ width: "100%", height: "100%" }}
                    />
                </div>
                <h3>Case Study</h3>
                <p>MTN Cameroon delivers EPICCX with Us</p>
                <h4>Read full case study</h4>
            </div>
        </div>
    </div>

  )
}
