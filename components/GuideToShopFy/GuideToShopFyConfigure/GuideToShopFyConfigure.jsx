import styles from "./GuideToShopFyConfigure.module.css"
import Image from "next/image"
export const GuideToShopFyConfigure = () => {
    return (
        <div className={styles.GuideToShopFyConfigureaPrent}>
            <h1>Configure your account</h1>
            <p>Set up your CRM the way you prefer. Invite your teammates and set up roles and permissions.
                Customize data you want to see, lifecycle stages, lead scoring, chat widget, and more.</p>
            <div className={styles.GuideToShopFyConfigureOnlyChild}>
                <div className={styles.GuideToShopFyConfigureOnlyChilddivone}>
                    <div>

                        <h1>Invite Teammates </h1>
                        <Image
                            src={"/Images/GuideToShopFy/icon1.png"}
                            alt={"img"}
                            width={"0"}
                            height={"0"}
                            sizes={"100vw"}
                            style={{ width: "15%", height: "15%" }}

                        />

                    </div>

                    <p>IF you have an existing CRM account ,you can connect it with shopify from the freshwork marketplace .you can also set up integration from shopify app store</p>

                </div>
                <div className={styles.GuideToShopFyConfigureOnlyChilddivtwo}>
                    <div>

                        <h1>Verify your email and domain </h1>
                        <Image
                            src={"/Images/GuideToShopFy/icon2.png"}
                            alt={"img"}
                            width={"0"}
                            height={"0"}
                            sizes={"100vw"}
                            style={{ width: "15%", height: "15%" }}

                        />
                    </div>

                    <p>IF you have an existing CRM account ,you can connect it with shopify from the freshwork marketplace .you can also set up integration from shopify app store</p>
                </div>
                <div className={styles.GuideToShopFyConfigureOnlyChilddivthree} >
                    <div>

                        <h1>Manage Customers</h1>
                        <Image
                            src={"/Images/GuideToShopFy/icon3.png"}
                            alt={"img"}
                            width={"0"}
                            height={"0"}
                            sizes={"100vw"}
                            style={{ width: "15%", height: "15%" }}

                        />
                    </div>

                    <p>IF you have an existing CRM account ,you can connect it with shopify from the freshwork marketplace .you can also set up integration from shopify app store</p>
                </div>
                <div className={styles.GuideToShopFyConfigureOnlyChilddivfour} >
                    <div>

                        <h1>Create shopify lists and segments </h1>
                        <Image
                            src={"/Images/GuideToShopFy/icon3.png"}
                            alt={"img"}
                            width={"0"}
                            height={"0"}
                            sizes={"100vw"}
                            style={{ width: "15%", height: "15%" }}

                        />
                    </div>

                    <p>IF you have an existing CRM account ,you can connect it with shopify from the freshwork marketplace .you can also set up integration from shopify app store</p>
                </div>
            </div>

        </div>
    )
}