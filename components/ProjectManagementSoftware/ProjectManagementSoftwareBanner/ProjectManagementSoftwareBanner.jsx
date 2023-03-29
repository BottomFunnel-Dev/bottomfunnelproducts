

import styles from "./ProjectManagementSoftwareBanner.module.css";
import Image from "next/image";
export const ProjectManagementSoftwareBanner = () => {
    return (
        <div className={styles.projectManagementSoftwareBannerParent}>
            <div className={styles.projectManagementSoftwareBannerParentImage}>
                <Image
                    src={"/Images/ProjectManagementSoftware/banner.webp"}
                    alt={"img"}
                    width={"0"}
                    height={"0"}
                    sizes={"100vw"}
                    style={{ width: "100%", height: "100%" }}
                />
            </div>
            <div className={styles.projectManagementSoftwareBannerParentContent}>
                <h1 className={styles.projectManagementSoftwareBannerParentContentHeading}>
                    New-gen project management for modern IT teams
                </h1>
                <h6 className={styles.projectManagementSoftwareBannerParentContentSubHeading}>
                    Bring IT service and project management together to delever consistentbusiness results
                </h6>
                <button className={styles.projectManagementSoftwareBannerParentContentbuttonone}>GET STARTED FOR FREE</button>
                <button className={styles.projectManagementSoftwareBannerParentContentbuttontwo}>REQUEST DEMO</button>
            </div>

        </div>
    )
}