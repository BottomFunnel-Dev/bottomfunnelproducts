
import React from "react";
import styles from "./IncidentManageServicesIncident.module.css"
import Image from "next/image";
export const IncidentManageServicesIncident = () => {
    return (
        <div className={styles.incidentManageServicesIncidentParent}>
            <div className={styles.incidentManageServicesIncidentchild}>
                <h2>Integrated Incident
                    Management With</h2>
                <div className={styles.incidentManageServicesbuttondiv}>
                    <button>Change Management
                    </button>
                    <button>
                        Asset Management

                    </button>
                    <button>
                        Configuration Management

                    </button>
                </div>
            </div>

            <div className={styles.incidentManageServicesimage}>
            <Image
                        src={"/Images/incidentmanagementservice/imagetwo.webp"}
                        alt={"img"}
                        width={"0"}
                        height={"0"}
                        sizes={"100vw"}
                        style={{ width: "100%", height: "100%" }}

                    />
            </div>
        </div>
    )
}
