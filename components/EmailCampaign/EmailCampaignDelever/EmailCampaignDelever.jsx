
import React from "react";
import styles from "./EmailCampaignDelever.module.css";
import Image from "next/image";
export const EmailCampaignDelever = () => {
    return (
        <div className={styles.emailCampaignDeleverParent}>

            <h2 className={[styles.emailCampaignDeleverheading, styles.emailCampaignDeleverheadingwidth].join(" ")}>Delever mazing customer experiences through email and text messaging with one solution</h2>
            <div className={styles.emailCampaignDeleverParentchild}>
                <div className={styles.emailCampaignDeleverParentchildimage}>
                    <Image
                        src={"/Images/EmailCampaign/imageone.webp"}
                        alt={"img"}
                        width={"0"}
                        height={"0"}
                        sizes={"100vw"}
                        style={{ width: "100%", height: "100%" }}

                    />
                </div>
                <div className={styles.emailCampaignDeleverParentchildContent}>
                    <h5 className={styles.emailCampaignDeleverheading}>
                        Send personized, automated email campaigns
                    </h5>
                    <p>
                        Nudge customers to complete thier purchase, remind them of products that they've viewd, and reach customers with the right emails with segments . Drod-and -Drop content blocks to design your email or choose from wide range of email templetes for e-commerce stores.
                    </p>
                </div>

            </div>
            <hr className={styles.lineone} />



            <div className={styles.emailCampaignDeleverParentchild}>

                <div className={styles.emailCampaignDeleverParentchildContent}>
                    <h5 className={styles.emailCampaignDeleverheading}>
                        Schedule emails for better performance
                    </h5>
                    <p>
                        Delever emails at your recipents time zone to improve engagement and increase conversions for your online store. Time zone is enriched bases on IP addresses, websites form , and events like card abanddonment ,newsletter signups .
                    </p>
                </div>
                <div className={styles.emailCampaignDeleverParentchildimage}>
                    <Image
                        src={"/Images/EmailCampaign/imagetwo.webp"}
                        alt={"img"}
                        width={"0"}
                        height={"0"}
                        sizes={"100vw"}
                        style={{ width: "100%", height: "100%" }}

                    />
                </div>

            </div>
            <hr className={styles.linetwo} />







            <div className={styles.emailCampaignDeleverParentchild}>
                <div className={styles.emailCampaignDeleverParentchildimage}>
                    <Image
                        src={"/Images/EmailCampaign/imagethree.webp"}
                        alt={"img"}
                        width={"0"}
                        height={"0"}
                        sizes={"100vw"}
                        style={{ width: "100%", height: "100%" }}

                    />
                </div>
                <div className={styles.emailCampaignDeleverParentchildContent}>
                    <h5 className={styles.emailCampaignDeleverheading}>
                        Optimize for different  devices
                    </h5>
                    <p>
                        Test your emails on different devices before you send them out to your audience. Priview your campaigns on desktops , mobile , or tablets modes to delever beutiful and resposive emails.
                    </p>
                </div>

            </div>
            <hr className={styles.lineone} />



            <div className={styles.emailCampaignDeleverParentchild}>

                <div className={styles.emailCampaignDeleverParentchildContent}>
                    <h5 className={styles.emailCampaignDeleverheading}>
                        Understand performance with analytics
                    </h5>
                    <p>
                        Go beyond the conventional metrics like open rates, click , rates etc and get down to ninth-gritty details of how your emails and SMS campaign perform with analytics .Vasuals how your campaign fare and create powerful custom reports to identify thier ROI.
                    </p>
                </div>
                <div className={styles.emailCampaignDeleverParentchildimage}>
                    <Image
                        src={"/Images/EmailCampaign/imagefour.webp"}
                        alt={"img"}
                        width={"0"}
                        height={"0"}
                        sizes={"100vw"}
                        style={{ width: "100%", height: "100%" }}

                    />
                </div>

            </div>
            <hr className={styles.linetwo} />












            <div className={styles.emailCampaignDeleverParentchild}>
                <div className={styles.emailCampaignDeleverParentchildimage}>
                    <Image
                        src={"/Images/EmailCampaign/imagefive.webp"}
                        alt={"img"}
                        width={"0"}
                        height={"0"}
                        sizes={"100vw"}
                        style={{ width: "100%", height: "100%" }}

                    />
                </div>
                <div className={styles.emailCampaignDeleverParentchildContent}>
                    <h5 className={styles.emailCampaignDeleverheading}>
                        Reach customer at the time with personized SMS campaigns
                    </h5>
                    <p>
                        Recover abandoned carts , communicate discount , and delever conversational enaggemnet with twillio and Gupshup(coming soon to reach your customers via SMS )
                    </p>
                </div>

            </div>
            <hr className={styles.lineone} />

            <div className={styles.emailCampaignDeleverParentchild}>

                <div className={styles.emailCampaignDeleverParentchildContent}>
                    <h5 className={styles.emailCampaignDeleverheading}>
                        Email and SMS journeys to drive engagement in real-time
                    </h5>
                    <p>
                        Engage and convert your your audience from subscribe into paying customer with pre-built emails and sms customers journey journey. You can also  create any behaviour-based journey builder to personize your customer enaggement based on thier interest and action.
                    </p>
                </div>
                <div className={styles.emailCampaignDeleverParentchildimage}>
                    <Image
                        src={"/Images/EmailCampaign/imagesix.webp"}
                        alt={"img"}
                        width={"0"}
                        height={"0"}
                        sizes={"100vw"}
                        style={{ width: "100%", height: "100%" }}

                    />
                </div>
            </div>

        </div>
    )
}