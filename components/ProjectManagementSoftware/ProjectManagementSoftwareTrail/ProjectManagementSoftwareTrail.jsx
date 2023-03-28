

import styles from "./ProjectManagementSoftwareTrail.module.css";
import Image from "next/image";
export const ProjectManagementSoftwareTrail = () => {
    return (
        <div className={styles.projectManagementSoftwareTrailParent}>
            <h2 className={styles.projectManagementSoftwareTrailParentHading}>Sign up for Freshservice today
            </h2>
            <p className={styles.projectManagementSoftwareTrailParentPara}> Start your 21-day free trial. No credit card required. No strings attached.
            </p>
            <button className={styles.projectManagementSoftwareTrailParentbuttone}>GET STARTED FOR FREE
            </button>
            <button className={styles.projectManagementSoftwareTrailParentbuttontwo}>Request Demo
            </button>

        </div>
    )
}