import styles from "./GuideToShopFyQueries.module.css";
import Image from "next/image";
export const GuideToShopFyQueries = () => {
    return (
        <div className={styles.GuideToShopFyQueriesparent}>
            <div className={styles.GuideToShopFyQueriesparentchild}>
                <div className={styles.GuideToShopFyQueriesparentchildfirstdiv}>
                    <h1>Analyze your campaigns</h1>
                    <p>Monitor your Shopify store performance
                        with the e commerce dashboard</p>
                </div>
                <div className={styles.GuideToShopFyQueriesparentchildsecdiv}>
                    <div>
                        <div>

                            <h1>Monitor Shopify store
                                performance in Bottom
                                Funnel Marketer </h1>
                            <Image
                                src={"/Images/GuideToShopFy/icon24.png"}
                                alt={"img"}
                                width={"0"}
                                height={"0"}
                                sizes={"100vw"}
                                style={{ width: "15%", height: "15%" }}

                            />
                        </div>

                        <p>Monitor Shopify store
                            performance in Bottom
                            Funnel Marketer</p>

                    </div>
                    <div>
                        <div>

                            <h1>Monitor Shopify store
                                performance in Bottom
                                Funnel Marketer</h1>
                            <Image
                                src={"/Images/GuideToShopFy/icon25.png"}
                                alt={"img"}
                                width={"0"}
                                height={"0"}
                                sizes={"100vw"}
                                style={{ width: "15%", height: "15%" }}

                            />
                        </div>

                        <p>Know how your emails/SMSes are performing.
                            Use these insights to improve campaign
                            messages and send better follow ups</p>

                    </div>

                </div>



            </div>
        </div>
    )
}