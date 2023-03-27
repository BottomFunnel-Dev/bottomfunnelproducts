import React from "react";
import styles from "./EmailCampaignExplore.module.css";
import Image from "next/image";
export const EmailCampaignExplore = () => {
    return (
        <div className={styles.emailCampaignExploreParent}>
            <h2 className={styles.emailCampaignExploreParentHeading}>Explore a multichannel engagement strategy for your brand</h2>
            <div className={styles.emailCampaignExploreParentfirstchild}>
                <div className={styles.emailCampaignExploreParentfirstchildccards}>
                    <div className={styles.emailCampaignExplorelogo}><Image
                        src={"/Images/EmailCampaign/whatsapp.webp"}
                        alt={"img"}
                        width={"0"}
                        height={"0"}
                        sizes={"100vw"}
                        style={{ width: "100%", height: "100%" }}

                    /></div>
                    <div className={styles.emailCampaignExplorecontent}>
                        <h5>whatsApp</h5>
                        <p>
                            Build  strong relationship with customers by sending them order updates and handling queries.
                        </p>
                    </div>

                </div>



                <div className={styles.emailCampaignExploreParentfirstchildccards}>
                    <div className={styles.emailCampaignExplorelogo}><Image
                        src={"/Images/EmailCampaign/email.webp"}
                        alt={"img"}
                        width={"0"}
                        height={"0"}
                        sizes={"100vw"}
                        style={{ width: "100%", height: "100%" }}

                    /></div>
                    <div className={styles.emailCampaignExplorecontent}>
                        <h5>Email</h5>
                        <p>
                            Send trigger-bases messages about purchases and account activity at the best time, every time
                        </p>
                    </div>

                </div>
            </div>




            <div className={styles.emailCampaignExploreParentsecchild}>
                <div className={styles.emailCampaignExploreParentfirstchildccards}>
                    <div className={styles.emailCampaignExplorelogo}><Image
                        src={"/Images/EmailCampaign/instagram.webp"}
                        alt={"img"}
                        width={"0"}
                        height={"0"}
                        sizes={"100vw"}
                        style={{ width: "100%", height: "100%" }}

                    /></div>
                    <div className={styles.emailCampaignExplorecontent}>
                        <h5>Instagram</h5>
                        <p>
                            Drive discovery and sales by engagging with customers, reinforcing brand messageing and create lifelong value.
                        </p>
                    </div>

                </div>



                <div className={styles.emailCampaignExploreParentfirstchildccards}>
                    <div className={styles.emailCampaignExplorelogo}><Image
                        src={"/Images/EmailCampaign/SMS.webp"}
                        alt={"img"}
                        width={"0"}
                        height={"0"}
                        sizes={"100vw"}
                        style={{ width: "100%", height: "100%" }}

                    /></div>
                    <div className={styles.emailCampaignExplorecontent}>
                        <h5>SMS</h5>
                        <p>
                            send promotional campaings or multimedia SMS with images and products links                        </p>
                    </div>

                </div>
            </div>

            <div className={styles.emailCampaignExploreButtondiv}>
                <button className={styles.emailCampaignExploreButton}>
                    More Channels
                </button>
            </div>
        </div>
    )
}