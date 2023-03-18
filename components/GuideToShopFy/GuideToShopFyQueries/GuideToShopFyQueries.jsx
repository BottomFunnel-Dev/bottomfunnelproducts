import styles from "./GuideToShopFyQueries.module.css";
import Image from "next/image";
export const GuideToShopFyQueries = () => {
    return (
        <div className={styles.GuideToShopFyQueriesparent}>
            <div className={styles.GuideToShopFyQueriesparentchild}>
                <div className={styles.GuideToShopFyQueriesparentchildfirstdiv}>
                    <h3>Analyze your campaigns</h3>
                    <p className={styles.para}>Monitor your Shopify store performance
                        with the e commerce dashboard</p>
                </div>
                <div className={styles.GuideToShopFyQueriesparentchildsecdiv}>
                    <div>
                        <div>

                            
                            <Image
                                src={"https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/GuideToShopFy/icon24.png"}
                                alt={"img"}
                                width={"0"}
                                height={"0"}
                                sizes={"100vw"}
                                style={{ width: "20%", height: "20%" }}

                            />
                            <h5>Monitor Shopify store
                                performance in Bottom
                                Funnel Marketer </h5>
                        </div>

                        <p className={styles.para}>Monitor Shopify store
                            performance in Bottom
                            Funnel Marketer</p>

                    </div>
                    <div>
                        <div>

                           
                            <Image
                                src={"https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/GuideToShopFy/icon25.png"}
                                alt={"img"}
                                width={"0"}
                                height={"0"}
                                sizes={"100vw"}
                                style={{ width: "20%", height: "20%" }}

                            />
                             <h5>Monitor Shopify store
                                performance in Bottom
                                Funnel Marketer</h5>
                        </div>

                        <p className={styles.para}>Know how your emails/SMSes are performing.
                            Use these insights to improve campaign
                            messages and send better follow ups</p>

                    </div>

                </div>



            </div>
        </div>
    )
}