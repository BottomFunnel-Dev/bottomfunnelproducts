import React from "react";
import styles from "./NeoAdminAdministration.module.css";
import Image from "next/image";

export const NeoAdminAdministration = () => {
  return (
     
    <div className={styles.neoAdminAdministrationMainDiv}>
        <h1 className={styles.neoAdminAdministrationHeading}>
            Seamless multi-product Administration capabilities
        </h1>
        <div className={styles.neoAdminAdministrationPassword1}>
            <div className={styles.neoAdminAdministrationText1}>
                <h1>
                    Unified Organization
                </h1>
                <p className={styles.neoAdminAdministrationContent}>
                    Access all your accounts within one Organization from <br/>
                    the Neo Admin Center. You can view all your Freshworks <br/>
                    accounts at a glance or create accounts for new<br/>
                    products directly from your organization dashboard.
                </p>
                <p className={styles.neoAdminLink}>Learn More</p>
            </div>
            <div className={styles.neoAdminAdministrationImage4}>
                <Image
                    src={"/Images/neoAdmin/Frame4.webp"}
                    alt={"image"}
                    width={"0"}
                    height={"0"}
                    sizes={"100vw"}
                    style={{ width: "100%", height: "100%" }}
                    />
            </div>
        </div>
        <div className={styles.neoAdminAdministrationPassword}>
            <div className={styles.neoAdminAdministrationImage}>
                <Image
                    src={"/Images/neoAdmin/Group5.webp"}
                    alt={"image"}
                    width={"0"}
                    height={"0"}
                    sizes={"100vw"}
                    style={{ width: "100%", height: "100%" }}
                    />
            </div>
            <div className={styles.neoAdminAdministrationText}>
                <h1>
                    User account management
                </h1>
                <p className={styles.neoAdminAdministrationContent}>
                    Ensure that your teams have the right levels of access<br/>
                    to the right resources,with a central repository.<br/>
                    Streamline onboarding and offboarding and manage<br/>
                    all users from one dashboard.
                </p>
                <p className={styles.neoAdminLink}>Learn More</p>
            </div>
        </div>
        <div className={styles.neoAdminAdministrationPassword1}>
            <div className={styles.neoAdminAdministrationText1}>
                <h1>
                    User profile management
                </h1>
                <p className={styles.neoAdminAdministrationContent}>
                    Manage details of all user profiles, including security<br/>
                    controls mandated at individuals levels. Make quick<br/>
                    changes to user profiles,across products without<br/>
                    having to switch between different screens.
                </p>
                <p className={styles.neoAdminLink}>Learn More</p>
            </div>
            <div className={styles.neoAdminAdministrationImage1}>
                <Image
                    src={"/Images/neoAdmin/Group6.webp"}
                    alt={"image"}
                    width={"0"}
                    height={"0"}
                    sizes={"100vw"}
                    style={{ width: "100%", height: "100%" }}
                    />
            </div>
        </div>
    </div>

  );
};
