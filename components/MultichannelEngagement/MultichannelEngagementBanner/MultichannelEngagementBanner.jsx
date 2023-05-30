
import React from "react";
import styles from "./MultichannelEngagementBanner.module.css";
import Image from "next/image";
export const MultichannelEngagementBanner = () => {
    return (
        <div className={styles.MultichannelEngagementBannerParent}>
            <div className={styles.MultichannelEngagementBannerImage}>
                <Image
                    src={"https://d3op2l77j7wnti.cloudfront.net/Images/MultichanelEngagement/Banner.webp"}
                    alt={"img"}
                    width={"0"}
                    height={"0"}
                    sizes={"100vw"}
                    style={{ width: "100%", height: "100%" }}
                />
            </div>
            <div className={styles.MultichannelEngagementBannerParentOnlydiv}>
                <h1>Engage with customers across all channels</h1>
                <h6>
                    Reach customers on whatsapp, live chat,SMS,ABC,Facebook messenger, and email using one solution
                </h6>
                <button>Start Free Trail</button>
            </div>

        </div>
    )
}