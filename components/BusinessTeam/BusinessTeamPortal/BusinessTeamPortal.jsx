import React from "react";
import styles from "./BusinessTeamPortal.module.css";
import Image from "next/image";
export const BusinessTeamPortal = () => {
    return (
        <div className={styles.businessTeamPortalParent}>

            <div className={styles.businessTeamPortalParentchild}>
                <div className={styles.businessTeamPortalParentchildFirstDiv}>
                    <h4 className={styles.businessTeamPortalParentchildFirstDivheading}>
                        One-stop-shop employee Portal
                    </h4>
                    <div className={styles.businessTeamPortalParentchildFirstDivImage}>
                        <Image
                            src={"/Images/BusinessTeam/imageone.webp"}
                            alt={"img"}
                            width={"0"}
                            height={"0"}
                            sizes={"100vw"}
                            style={{ width: "100%", height: "100%" }}

                        />
                    </div>
                    <p className={styles.businessTeamPortalParentchildFirstDivpara}>
                        Offer consumer-grade with auniversal service catalog that allows employee to request for services in acentralized place for any function ranging from It, HR to finance , Facilities , and ither line of business.
                    </p>
                    <button className={styles.businessTeamPortalParentchildFirstDivButton}>
                        Learn more &rarr;
                    </button>
                </div>



                <div className={styles.businessTeamPortalParentchildFirstDiv}>
                    <h4 className={styles.businessTeamPortalParentchildFirstDivheading}>
                        Make work easy with automation
                    </h4>
                    <div className={styles.businessTeamPortalParentchildFirstDivImage}>
                        <Image
                            src={"/Images/BusinessTeam/imagetwo.webp"}
                            alt={"img"}
                            width={"0"}
                            height={"0"}
                            sizes={"100vw"}
                            style={{ width: "100%", height: "100%" }}

                        />
                    </div>
                    <p className={styles.businessTeamPortalParentchildFirstDivpara}>
                        Allow process to flow seamlessly with simply drag and drop workflow automator . collaborate effiecient with cross-function teams, and effortless scale your services for speedy resolution scale your services for speedy resolution of employee request.
                    </p>
                    <button className={styles.businessTeamPortalParentchildFirstDivButton}>
                        Learn more &rarr;
                    </button>
                </div>
            </div>









            <div className={styles.businessTeamPortalParentchild}>
                <div className={styles.businessTeamPortalParentchildFirstDiv}>
                    <h4 className={styles.businessTeamPortalParentchildFirstDivheading}>
                        share the platform but not the data
                    </h4>
                    <div className={styles.businessTeamPortalParentchildFirstDivImage}>
                        <Image
                            src={"/Images/BusinessTeam/imagethree.webp"}
                            alt={"img"}
                            width={"0"}
                            height={"0"}
                            sizes={"100vw"}
                            style={{ width: "100%", height: "100%" }}

                        />
                    </div>
                    <p className={styles.businessTeamPortalParentchildFirstDivpara}>
                        ensure ownership and enchanced data security with multiple teams co-existing in asingle platform by laying tight access control and restricting information to protect sensitive data.
                    </p>
                    <button className={styles.businessTeamPortalParentchildFirstDivButton}>
                        Learn more &rarr;
                    </button>
                </div>



                <div className={styles.businessTeamPortalParentchildFirstDiv}>
                    <h4 className={styles.businessTeamPortalParentchildFirstDivheading}>
                        A chat away from instant resolution
                    </h4>
                    <div className={styles.businessTeamPortalParentchildFirstDivImage}>
                        <Image
                            src={"/Images/BusinessTeam/imageone.webp"}
                            alt={"img"}
                            width={"0"}
                            height={"0"}
                            sizes={"100vw"}
                            style={{ width: "100%", height: "100%" }}

                        />
                    </div>
                    <p className={styles.businessTeamPortalParentchildFirstDivpara}>
                        Promote self-service with Fqs, knowledge article , and company policies for quick access improving employee agility. Enable virtual agent on collabration platforms like slak and MS teams to fofer instant support to employee queries.                    </p>
                    <button className={styles.businessTeamPortalParentchildFirstDivButton}>
                        Learn more &rarr;
                    </button>
                </div>
            </div>

        </div>
    )
}