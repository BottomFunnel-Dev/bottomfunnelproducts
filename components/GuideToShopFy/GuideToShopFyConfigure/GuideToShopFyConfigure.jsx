import styles from "./GuideToShopFyConfigure.module.css"
import Image from "next/image"
export const GuideToShopFyConfigure = () => {
    return (
        <div className={styles.GuideToShopFyConfigureaPrent}>
            <div className={styles.GuideToShopFyConfigureHeading}>
                <h3>Configure your account</h3>
            <p>Set up your CRM the way you prefer. Invite your teammates and set up roles and permissions.
                Customize data you want to see, lifecycle stages, lead scoring, chat widget, and more.</p></div>
            
            <div className={styles.GuideToShopFyConfigureOnlyChild}>
           
                <div className={styles.GuideToShopFyConfigureOnlyChildinsidefirstdiv}>
                    <div className={styles.GuideToShopFyConfigureOnlyChilddivone}>
                        <div>

                            
                            <Image
                                src={"https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/GuideToShopFy/icon1.png"}
                                alt={"img"}
                                width={"0"}
                                height={"0"}
                                sizes={"100vw"}
                                style={{ width: "20%", height: "20%" }}

                            />
                            <h5>Invite Teammates </h5>

                        </div>

                        <p>IF you have an existing CRM account ,you can connect it with shopify from the freshwork marketplace .you can also set up integration from shopify app store</p>

                    </div>
                    <div className={styles.GuideToShopFyConfigureOnlyChilddivtwo}>
                        <div>

                           
                            <Image
                                src={"https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/GuideToShopFy/icon2.png"}
                                alt={"img"}
                                width={"0"}
                                height={"0"}
                                sizes={"100vw"}
                                style={{ width: "15%", height: "15%" }}

                            />
                             <h5>Verify your email and domain </h5>
                        </div>

                        <p>IF you have an existing CRM account ,you can connect it with shopify from the freshwork marketplace .you can also set up integration from shopify app store</p>
                    </div>
                    <div className={styles.GuideToShopFyConfigureOnlyChilddivthree} >
                        <div>

                          
                            <Image
                                src={"https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/GuideToShopFy/icon3.png"}
                                alt={"img"}
                                width={"0"}
                                height={"0"}
                                sizes={"100vw"}
                                style={{ width: "15%", height: "15%" }}

                            />
                              <h5>Manage Customers</h5>
                        </div>

                        <p>IF you have an existing CRM account ,you can connect it with shopify from the freshwork marketplace .you can also set up integration from shopify app store</p>
                    </div>
                </div>
                <div className={styles.GuideToShopFyConfigureOnlyChildinsidesecdiv}>
                    <div className={styles.GuideToShopFyConfigureOnlyChilddivfour} >
                        <div>

                            
                            <Image
                                src={"https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/GuideToShopFy/icon3.png"}
                                alt={"img"}
                                width={"0"}
                                height={"0"}
                                sizes={"100vw"}
                                style={{ width: "15%", height: "15%" }}

                            />
                            <h5>Create shopify lists and segments </h5>
                        </div>

                        <p>IF you have an existing CRM account ,you can connect it with shopify from the freshwork marketplace .you can also set up integration from shopify app store</p>
                    </div>
                </div>
                
            
            </div>

        </div>
    )
}