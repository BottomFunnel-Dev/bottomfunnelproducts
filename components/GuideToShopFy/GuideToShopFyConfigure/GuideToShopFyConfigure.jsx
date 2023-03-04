import styles from "./GuideToShopFyConfigure.module.css"
import Image from "next/image"
export const GuideToShopFyConfigure = () => {
    return (
        <div className={styles.GuideToShopFyConfigureaPrent}>
            <div className={styles.GuideToShopFyConfigureHeading}>
                <h1>Configure your account</h1>
            <p>Set up your CRM the way you prefer. Invite your teammates and set up roles and permissions.
                Customize data you want to see, lifecycle stages, lead scoring, chat widget, and more.</p></div>
            
            <div className={styles.GuideToShopFyConfigureOnlyChild}>
            <div className={styles.lineone}></div>
                <div className={styles.GuideToShopFyConfigureOnlyChildinsidefirstdiv}>
                    <div className={styles.GuideToShopFyConfigureOnlyChilddivone}>
                        <div>

                            <h3>Invite Teammates </h3>
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

                            <h3>Verify your email and domain </h3>
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

                            <h3>Manage Customers</h3>
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
                <div className={styles.GuideToShopFyConfigureOnlyChildinsidesecdiv}>
                    <div className={styles.GuideToShopFyConfigureOnlyChilddivfour} >
                        <div>

                            <h3>Create shopify lists and segments </h3>
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
                
            <div className={styles.line}></div>
            </div>

        </div>
    )
}