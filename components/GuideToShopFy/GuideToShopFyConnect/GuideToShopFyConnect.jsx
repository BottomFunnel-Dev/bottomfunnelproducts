import styles from "./GuideToShopFyConnect.module.css"
import Image from "next/image"
export const GuideToShopFyConnect = () => {
    return (
        <div className={styles.GuideToShopFyConnectParent}>
            <div className={styles.GuideToShopFyConnectHeading} >
            <h3>Connect your store</h3>
            <p>There are two ways to started with bottom funnel marketer for shopify: Shopify marketplace (new user ) and bottom funnel marketplace (current user).</p>
            </div>
           
            <div className={styles.GuideToShopFyConnectOnlyChild}>
                <div className={styles.GuideToShopFyConnectOnlyChilddivone}>
                    <div>
                       
                        
                        <Image
                            src={"https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/GuideToShopFy/icon1.png"}
                            alt={"img"}
                            width={"0"}
                            height={"0"}
                            sizes={"100vw"}
                            style={{ width: "20%", height: "20%"}}

                        />
                        <h5>If you're an existing CRM user </h5>
                       
                    </div>

                    <p>IF you have an existing CRM account ,you can connect it with shopify from the freshwork marketplace .you can also set up integration from shopify app store</p>
                </div>
                <div className={styles.GuideToShopFyConnectOnlyChilddivtwo}>
                    <div>
                       
                      
                        <Image
                            src={"https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/GuideToShopFy/icon2.png"}
                            alt={"img"}
                            width={"0"}
                            height={"0"}
                            sizes={"100vw"}
                            style={{  width: "20%", height: "20%" }}

                        />
                          <h5>If you're an existing CRM user </h5>
                    </div>

                    <p>IF you have an existing CRM account ,you can connect it with shopify from the freshwork marketplace .you can also set up integration from shopify app store</p>
                </div>
                <div className={styles.GuideToShopFyConnectOnlyChilddivthree} >
                    <div>
                       
                        
                        <Image
                            src={"https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/GuideToShopFy/icon3.png"}
                            alt={"img"}
                            width={"0"}
                            height={"0"}
                            sizes={"100vw"}
                            style={{ width: "20%", height: "20%"}}

                        />
                        <h5>If you're an existing CRM user </h5>
                    </div>

                    <p>IF you have an existing CRM account ,you can connect it with shopify from the freshwork marketplace .you can also set up integration from shopify app store</p>
                </div>
            </div>

        </div>
    )
}