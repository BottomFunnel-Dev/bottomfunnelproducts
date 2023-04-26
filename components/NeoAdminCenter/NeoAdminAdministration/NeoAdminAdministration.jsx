import React from "react";
import styles from "./NeoAdminAdministration.module.css";
import Image from "next/image";

export const NeoAdminAdministration = () => {
  return (
     
    <div className={styles.neoAdminAdministrationMainDiv}>
        <h1 className={styles.neoAdminAdministrationHeading}>
        Capabilities for seamless multi-product administration.
        </h1>
        <div className={styles.neoAdminAdministrationPassword1}>
            <div className={styles.neoAdminAdministrationText1}>
                <h1>
                An organization with a singular focus and objective.
                </h1>
                <p className={styles.neoAdminAdministrationContent}>
                With the Neo Admin Center, you can access all of your accounts within one organization from one convenient location. You can quickly view and manage all of your Bottom Funnel accounts through this app.
                </p>
                <p className={styles.neoAdminLink}>Learn More</p>
            </div>
            <div className={styles.neoAdminAdministrationImage4}>
                <Image
                    src={"https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/neoAdmin/Frame4.webp"}
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
                    src={"https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/neoAdmin/Group5.webp"}
                    alt={"image"}
                    width={"0"}
                    height={"0"}
                    sizes={"100vw"}
                    style={{ width: "100%", height: "100%" }}
                    />
            </div>
            <div className={styles.neoAdminAdministrationText}>
                <h1>
                Managing user accounts
                </h1>
                <p className={styles.neoAdminAdministrationContent}>
                Maintain a central repository that ensures your teams have the right levels of access to the right resources, for their access needs. Develop a single dashboard to manage all users, including onboarding and offloading processes.
                </p>
                <p className={styles.neoAdminLink}>Learn More</p>
            </div>
        </div>
        <div className={styles.neoAdminAdministrationPassword1}>
            <div className={styles.neoAdminAdministrationText1}>
                <h1>
                Managing user profiles
                </h1>
                <p className={styles.neoAdminAdministrationContent}>
                Control the details of all user profiles, including security controls mandated at individual levels. Quickly modify user profiles across products without having to switch between multiple screens.
                </p>
                <p className={styles.neoAdminLink}>Learn More</p>
            </div>
            <div className={styles.neoAdminAdministrationImage1}>
                <Image
                    src={"https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/neoAdmin/Group6.webp"}
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
