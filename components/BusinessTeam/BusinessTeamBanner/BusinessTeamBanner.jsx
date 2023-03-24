

import React from "react";
import styles from "./BusinessTeamBanner.module.css";
import Image from "next/image";
export const BusinessTeamBanner = () => {
    return (
        <div className={styles.businessTeamBannerparent}>
            <div className={styles.businessTeamBannerparentImage} >
                <Image
                    src={"/Images/BusinessTeam/banner.webp"}
                    alt={"img"}
                    width={"0"}
                    height={"0"}
                    sizes={"100vw"}
                    style={{ width: "100%", height: "100%" }}

                />
            </div>
            <div className={styles.cbusinessTeamBannerparentContent} >
                <h1 className={styles.cbusinessTeamBannerparentContentHeading}>
                    Freshservice for bussiness teams
                </h1>
                <h5 className={styles.cbusinessTeamBannerparentContentsubheading}>
                    Unify IT and business teams with a single service management solution for fast , easy and seamless employee service.
                </h5>
                <div className={styles.businessTeamBannerparentButtonDiv}>
                    <button className={styles.businessTeamBannerparentButtonDivButton}>GET STARTED FOR FREE</button>
                    <button className={styles.businessTeamBannerparentButtonDivButton}>REQUEST DEMO</button>
                </div>
            </div>
        </div>
    )
}