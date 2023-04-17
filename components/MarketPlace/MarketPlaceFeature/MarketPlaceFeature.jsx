import styles from "./MarketPlaceFeature.module.css";
import Image from "next/image";

export const MarketPlaceFeature = () => {
    return (
        <div className={styles.MarketPlaceFeatureParent}>
            <h2>Featured apps</h2>
            <div className={styles.line}></div>

            <div className={styles.MarketPlaceFeatureChild}>
                <div>
                    <div className={styles.MarketPlaceFeatureimg}>
                        <Image className="marketplaceSectionImage"
                            src={"https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/MarketPlace/feature1.png"}
                            alt={"img"}
                            width={"0"}
                            height={"0"}
                            sizes={"100vw"}
                            style={{ width: "100%", height: "100%" }}
                        />
                    </div>

                    <h3> Atlassian Jira Plus </h3>
                    <p> Link Freshdesk and JIRA accounts to associate JIRA issues with Freshdesk tickets. </p>
                </div>

                <div>
                    <div className={styles.MarketPlaceFeatureimg}>
                        <Image
                            src={"https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/MarketPlace/feature2.png"}
                            alt={"img"}
                            width={"0"}
                            height={"0"}
                            sizes={"100vw"}
                            style={{ width: "75%", height: "90%" }}
                        />
                    </div>

                    <h3> Advanced Automations </h3>
                    <p> Automate your daily chat workflows in Freshdesk Messaging </p>
                </div>

                <div>
                    <div className={styles.MarketPlaceFeatureimg}>
                        <Image
                            src={"https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/MarketPlace/feature3.png"}
                            alt={"img"}
                            width={"0"}
                            height={"0"}
                            sizes={"100vw"}
                            style={{ width: "100%", height: "100%" }}
                        />
                    </div>

                    <h3> Device42 for Freshservice </h3>
                    <p> Easily populate your Freshservice CMDB with CIs from Device42’s comprehensive IT inventory </p>
                </div>

                <div>
                    <div className={styles.MarketPlaceFeatureimg}>                        <Image
                            src={"https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/MarketPlace/feature4.png"}
                            alt={"img"}
                            width={"0"}
                            height={"0"}
                            sizes={"100vw"}
                            style={{ width: "100%", height: "100%" }}
                        />
                    </div>

                    <h3> GoodData for Freshdesk </h3>
                    <p> Easily analyze support ticket workflow directly in Freshdesk with GoodData analytics </p>
                </div>
            </div>
        </div>
    );
};