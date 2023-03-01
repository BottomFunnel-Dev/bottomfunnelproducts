import styles from "./GuideToShopFyConfigure.module.css"
import Image from "next/image"
export const GuideToShopFyConfigure = () => {
    return (
        <div className={styles.GuideToShopFyConfigureaPrent}>
            <h1>Connect your store</h1>
            <p>There are two ways to started with bottom funnel marketer for shopify: Shopify marketplace (new user ) and bottom funnel marketplace (current user).</p>
            <div className={styles.GuideToShopFyConfigureOnlyChild}>
                <div className={styles.GuideToShopFyConfigureOnlyChilddivone}>
                    <div>
                       
                        <h1>If you're an existing CRM user </h1>
                        <Image
                            src={"/Images/GuideToShopFy/icon1.png"}
                            alt={"img"}
                            width={"0"}
                            height={"0"}
                            sizes={"100vw"}
                            style={{ width: "30%", height: "30%" }}

                        />
                        <hr />
                    </div>

                    <p>IF you have an existing CRM account ,you can connect it with shopify from the freshwork marketplace .you can also set up integration from shopify app store</p>
                </div>
                <div className={styles.GuideToShopFyConfigureOnlyChilddivtwo}>
                    <div>
                       
                        <h1>If you're an existing CRM user </h1>
                        <Image
                            src={"/Images/GuideToShopFy/icon2.png"}
                            alt={"img"}
                            width={"0"}
                            height={"0"}
                            sizes={"100vw"}
                            style={{  width: "30%", height: "30%" }}

                        />
                    </div>

                    <p>IF you have an existing CRM account ,you can connect it with shopify from the freshwork marketplace .you can also set up integration from shopify app store</p>
                </div>
                <div className={styles.GuideToShopFyConfigureOnlyChilddivthree} >
                    <div>
                       
                        <h1>If you're an existing CRM user </h1>
                        <Image
                            src={"/Images/GuideToShopFy/icon3.png"}
                            alt={"img"}
                            width={"0"}
                            height={"0"}
                            sizes={"100vw"}
                            style={{  width: "30%", height: "30%"}}

                        />
                    </div>

                    <p>IF you have an existing CRM account ,you can connect it with shopify from the freshwork marketplace .you can also set up integration from shopify app store</p>
                </div>
                <div className={styles.GuideToShopFyConfigureOnlyChilddivfour} >
                    <div>
                       
                        <h1>If you're an existing CRM user </h1>
                        <Image
                            src={"/Images/GuideToShopFy/icon3.png"}
                            alt={"img"}
                            width={"0"}
                            height={"0"}
                            sizes={"100vw"}
                            style={{  width: "30%", height: "30%"}}

                        />
                    </div>

                    <p>IF you have an existing CRM account ,you can connect it with shopify from the freshwork marketplace .you can also set up integration from shopify app store</p>
                </div>
            </div>

        </div>
    )
}