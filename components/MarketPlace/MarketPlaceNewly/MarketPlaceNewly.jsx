import styles from "./MarketPlaceNewly.module.css";
import Image from "next/image";

export const MarketPlaceNewly = () => {
    return (
        <div className={styles.parentss}>
            <div className={styles.MarketPlaceFeatureParent}>
                <h1> Newly added apps </h1>

                <div className={styles.line}></div>
                
                <div className={styles.MarketPlaceFeatureChild}>
                    <div>
                        <div className={styles.MarketPlaceFeatureimg}>
                            <Image
                                src={"/Images/MarketPlace/Newly1.png"}
                                alt={"img"}
                                width={"0"}
                                height={"0"}
                                sizes={"100vw"}
                                style={{ width: "100%", height: "100%" }}
                            />
                        </div>

                        <h3> Help Desk Migration | Import to Freshdesk </h3>
                        <p>Help Desk Migration is an automated SaaS that imports tickets and other related data to Freshdesk </p>
                    </div>

                    <div>
                        <div className={styles.MarketPlaceFeatureimg}>
                            <Image
                                src={"/Images/MarketPlace/Newly2.png"}
                                alt={"img"}
                                width={"0"}
                                height={"0"}
                                sizes={"100vw"}
                                style={{ width: "100%", height: "100%" }}
                            />
                        </div>

                        <h3> Open Ticket On Reply </h3>
                        <p> Ever wished your reply would open a ticket on autopilot? </p>
                    </div>

                    <div>
                        <div className={styles.MarketPlaceFeatureimg}>
                            <Image
                                src={"/Images/MarketPlace/Newly2.png"}
                                alt={"img"}
                                width={"0"}
                                height={"0"}
                                sizes={"100vw"}
                                style={{ width: "100%", height: "100%" }}
                            />
                        </div>

                        <h3> Open Ticket On Reply </h3>
                        <p> Ever wished your reply would open a ticket on autopilot? </p>
                    </div>

                    <div>
                        <div className={styles.MarketPlaceFeatureimg}>
                            <Image
                                src={"/Images/MarketPlace/Newly4.png"}
                                alt={"img"}
                                width={"0"}
                                height={"0"}
                                sizes={"100vw"}
                                style={{ width: "100%", height: "100%" }}
                            />
                        </div>

                        <h3> CSS Softphone </h3>
                        <p> CSS Softphone </p>
                    </div>
                </div>
            </div>

            <div className={styles.MarketPlaceFeatureParent}>
                <div className={styles.MarketPlaceFeatureChild}>
                    <div>
                        <div className={styles.MarketPlaceFeatureimg}>
                            <Image
                                src={"/Images/MarketPlace/Newly1.png"}
                                alt={"img"}
                                width={"0"}
                                height={"0"}
                                sizes={"100vw"}
                                style={{ width: "100%", height: "100%" }}
                            />
                        </div>

                        <h3> Help Desk Migration | Import to Freshdesk </h3>
                        <p> Help Desk Migration is an automated SaaS that imports tickets and other related data to Freshdesk </p>
                    </div>

                    <div>
                        <div className={styles.MarketPlaceFeatureimg}>
                            <Image
                                src={"/Images/MarketPlace/Newly6.png"}
                                alt={"img"}
                                width={"0"}
                                height={"0"}
                                sizes={"100vw"}
                                style={{ width: "100%", height: "100%" }}
                            />
                        </div>

                        <h3> Textline - Business Texting </h3>
                        <p> Use Textline to send and respond to text messages directly from your customer support desk </p>
                    </div>

                    <div>
                        <div className={styles.MarketPlaceFeatureimg}>
                            <Image
                                src={"/Images/MarketPlace/Newly7.png"}
                                alt={"img"}
                                width={"0"}
                                height={"0"}
                                sizes={"100vw"}
                                style={{ width: "100%", height: "100%" }}
                            />
                        </div>

                        <h3> Spetify Plus </h3>
                        <p> Use Textline to send and respond to text messages directly from your customer support desk </p>
                    </div>

                    <div>
                        <div className={styles.MarketPlaceFeatureimg}>
                            <Image
                                src={"/Images/MarketPlace/Newly8.png"}
                                alt={"img"}
                                width={"0"}
                                height={"0"}
                                sizes={"100vw"}
                                style={{ width: "100%", height: "100%" }}
                            />
                        </div>

                        <h3> Freshdesk on PowerBI </h3>
                        <p> Analytical PowerBI add-on to Freshdesk Application </p>
                    </div>
                </div>
            </div>
        </div>
    );
};