
import React from "react";
import styles from "./EmailCampaignLearn.module.css";
import Image from "next/image";
export const EmailCampaignLearn = () => {
    return (
        <div className={styles.emailCampaignLearnParent}>
            <div className={styles.emailCampaignLearnParentchiledimage}>
                <Image
                    src={"/Images/EmailCampaign/imageseven.webp"}
                    alt={"img"}
                    width={"0"}
                    height={"0"}
                    sizes={"100vw"}
                    style={{ width: "100%", height: "100%" }}

                />
            </div>
            <div className={styles.emailCampaignLearnParentchiledcontent}>
                <h3>Looking for an all-in-one sales and marketing solution ? Try Freshsales Suite</h3>
                <p>
                    Freshsales Suite combines the power of sales , marketing, chat and telephone in one AI-powered solution.
                </p>
                <ul>
                    <li>
                        Attract the best leads with personalized message .
                    </li>
                    <li>
                        Engage across channels -phone , email, WhatsApp, chat
                    </li>
                    <li>
                        Close deals faster with AI_powered insights
                    </li>
                    <li>
                        Delever personized experiences with 360 degre customer context
                    </li>
                </ul>
                <button className={styles.Learnbutton}>
                    LEARN MORE
                </button>
            </div>
        </div>
    )
}