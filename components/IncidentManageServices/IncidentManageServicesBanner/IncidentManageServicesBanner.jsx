
import React from "react";
import styles from "./IncidentManageServicesBanner.module.css"
import Image from "next/image";
export const IncidentManageServicesBanner = () => {
    return (
        <>
            <div className={styles.incidentManageServicesBannerParent}>


                <div className={styles.incidentManageServicesBannerimage}>
                    <Image
                        src={"/Images/incidentmanagementservice/banner.webp"}
                        alt={"img"}
                        width={"0"}
                        height={"0"}
                        sizes={"100vw"}
                        style={{ width: "100%", height: "100%" }}

                    />
                </div>
                <div className={styles.incidentManageServicesBannercontent}>
                    <h1>All you need for efficient incident management</h1>
                    <h5>track, prioirize, and assign tickets effirtlessly , and automate resolution processes to drive efficiency.</h5>
                    <button>Strat Demo </button>
                </div>


            </div>
            <div>
                <h4 className={styles.blowheading}> All Feature &rarr; IT Service Desk &rarr; Incidence Management</h4>
            </div>
        </>
    );
}