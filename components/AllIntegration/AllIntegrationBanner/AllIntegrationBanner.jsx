import React from "react";
import styles from "./AllIntegrationBanner.module.css";
import Image from "next/image";

export const AllIntegrationBanner = () => {
    return (
        <div className={styles.allIntegrationBannerparent}>
            <div className={styles.allIntegrationBannerparentimage}>
                <Image
                    src={"/Images/AllIntegration/banner.webp"}
                    alt={"image"}
                    width={"0"}
                    height={"0"}
                    sizes={"100vw"}
                    style={{ width: "100%", height: "100%" }}
                />
            </div>
            <div className={styles.allIntegrationBannerparentContent}>
                <h1  className={styles.allIntegrationBannerparentContentheading}>Bottom Funnel chat Integration</h1>
                <hr className={styles.allIntegrationBannerparentContentline} />
                <h4  className={styles.allIntegrationBannerparentContentpara}>Connect with the rools you use run your business</h4>
                <button  className={styles.allIntegrationBannerparentContentbutton}>
                    Explore now
                </button>
            </div>
        </div>
    )
}