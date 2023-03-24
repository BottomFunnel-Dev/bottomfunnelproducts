
import React from "react";
import styles from "./EmailCampaignBanner.module.css";
import Image from "next/image";
export const EmailCampaignBanner = () => {
    return (
        <div>
            <div className={styles.emailCampaignBannerparent}>
                <div className={styles.emailCampaignBannerimage}>
                    <Image
                        src={"/Images/EmailCampaign/Banner.webp"}
                        alt={"img"}
                        width={"0"}
                        height={"0"}
                        sizes={"100vw"}
                        style={{ width: "100%", height: "100%" }}

                    />
                </div>

                <div className={styles.emailCampaignBannercontent}>
                    <h1 className={styles.emailCampaignBannercontentone}>Drive revenue with Email and SMS marketing</h1>
                    <h5 className={styles.emailCampaignBannercontenthfive}>
                        Send personized emails and SMS at scale, bring customers to your store, an increase e-commmerce sales.
                    </h5 >
                    <button className={styles.emailCampaignBannercontentbutton}>Start Free Trail</button>
                </div>


            </div>
            <hr className={styles.line}/>
        </div>
    );
}