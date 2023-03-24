
import React from "react";
import styles from "./BusinessTeamEnterprise.module.css";
import Image from "next/image";
export const BusinessTeamEnterprise = () => {
    return (
        <div className={styles.businessTeamEnterpriseparent}>
            <h2 className={styles.businessTeamEnterpriseparentheading}>
                One dashboard for enterprise service service management success
            </h2>
            <div className={styles.businessTeamEnterpriseparentchild}>
                <div className={styles.businessTeamEnterpriseparentChildImage}>

                    <Image
                        src={"/Images/BusinessTeam/imagefive.webp"}
                        alt={"img"}
                        width={"0"}
                        height={"0"}
                        sizes={"100vw"}
                        style={{ width: "100%", height: "100%" }}

                    />
                </div>

                <div className={styles.businessTeamEnterpriseparentChildImageContent}>
                    <p className={styles.businessTeamEnterpriseparentChildImageContentPara}>
                        Get a 360-degree view of criticle services metrics across the enterprise , track agent performance to identify bottlenecks , measure employee happiness, and ensure complete operational transparency.
                    </p>
                    <button className={styles.businessTeamEnterpriseparentChildImageContentbutton}>
                        Learn more &rarr;
                    </button>

                </div>
            </div>
        </div>

    )
}