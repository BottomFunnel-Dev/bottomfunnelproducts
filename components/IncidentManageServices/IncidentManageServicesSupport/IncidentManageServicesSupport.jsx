
import React from "react";
import styles from "./IncidentManageServicesSupport.module.css"
import Image from "next/image";
export const IncidentManageServicesSupport = () => {
    return (
        <div className={styles.incidentManageServicesSupportParent}>
            <h2>Multi-channel support from a single platform
            </h2>

            <div className={styles.incidentManageServicesSupportimage}>
                <Image
                    src={"/Images/incidentmanagementservice/imageone.webp"}
                    alt={"img"}
                    width={"0"}
                    height={"0"}
                    sizes={"100vw"}
                    style={{ width: "100%", height: "100%" }}

                />
            </div>
            <ul>
                <li className={styles.line}>
                    Enable end-users to reach support via multiple channels such as email, self-service
                    portal, mobile app, phone, Freddy chatbot, feedback sidets, or salk-ups.
                </li>
                <li className={styles.line}>Automatically log all emails as tickets</li>
            </ul>



        </div>

    )
}