import styles from "./GuideToShopFyConnect.module.css"
import Image from "next/image"
export const GuideToShopFyConnect = () => {
    return (
        <div className={styles.GuideToShopFyConnectParent}>
            <h1>Connect your store</h1>
            <p>There are two ways to started with bottom funnel marketer for shopify: Shopify marketplace (new user ) and bottom funnel marketplace (current user).</p>
            <div className={styles.GuideToShopFyConnectOnlyChild}>
                <div className={styles.GuideToShopFyConnectOnlyChilddivone}>
                    <div>
                       
                        <h1>If you're an existing CRM user </h1>
                        <Image
                            src={"/Images/GuideToShopFy/icon1.png"}
                            alt={"img"}
                            width={"0"}
                            height={"0"}
                            sizes={"100vw"}
                            style={{ width: "15%", height: "15%" }}

                        />
                        <hr />
                    </div>

                    <p>IF you have an existing CRM account ,you can connect it with shopify from the freshwork marketplace .you can also set up integration from shopify app store</p>
                </div>
                <div className={styles.GuideToShopFyConnectOnlyChilddivtwo}>
                    <div>
                       
                        <h1>If you're an existing CRM user </h1>
                        <Image
                            src={"/Images/GuideToShopFy/icon2.png"}
                            alt={"img"}
                            width={"0"}
                            height={"0"}
                            sizes={"100vw"}
                            style={{  width: "15%", height: "15%" }}

                        />
                    </div>

                    <p>IF you have an existing CRM account ,you can connect it with shopify from the freshwork marketplace .you can also set up integration from shopify app store</p>
                </div>
                <div className={styles.GuideToShopFyConnectOnlyChilddivthree} >
                    <div>
                       
                        <h1>If you're an existing CRM user </h1>
                        <Image
                            src={"/Images/GuideToShopFy/icon3.png"}
                            alt={"img"}
                            width={"0"}
                            height={"0"}
                            sizes={"100vw"}
                            style={{  width: "15%", height: "15%"}}

                        />
                    </div>

                    <p>IF you have an existing CRM account ,you can connect it with shopify from the freshwork marketplace .you can also set up integration from shopify app store</p>
                </div>
            </div>

        </div>
    )
}