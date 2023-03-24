
import styles from "./LineChatMore.module.css"
import Image from "next/image"

export const LineChatMore = () => {
    return (
        <div className={styles.lineChatMorePerent}>
            <h1> There' s More</h1>
            <div className={styles.lineChatMoreOnlyChild}>
                <div className={styles.lineChatMoreOnlyChildfirstChild}>
                    <div>
                        <div>
                            <Image
                                src={"/Images/LineChat/iconsix.webp"}
                                alt={"img"}
                                width={"0"}
                                height={"0"}
                                sizes={"100vw"}
                                style={{ width: "100%", height: "100%" }}

                            />
                        </div>
                        <h3>Manage multiple business hours</h3>
                        <p>For your support teams working across different regions and timezones</p>
                    </div>
                    <div>
                        <div>
                            <Image
                                src={"/Images/LineChat/iconsix.webp"}
                                alt={"img"}
                                width={"0"}
                                height={"0"}
                                sizes={"100vw"}
                                style={{ width: "100%", height: "100%" }}

                            />
                        </div>
                        <h3>Take services to customers </h3>
                        <p>Bring conversations from web, mobile, and social messenegers under one inbox </p>
                    </div>
                    <div>
                        <div>
                            <Image
                                src={"/Images/LineChat/iconsix.webp"}
                                alt={"img"}
                                width={"0"}
                                height={"0"}
                                sizes={"100vw"}
                                style={{ width: "100%", height: "100%" }}

                            />
                        </div>
                        <h3>Support customers worldwide</h3>
                        <p>with our Line Translate feature .Our  Agent platform and messenger supports over 32 language .</p>
                    </div>




                </div>



                <div className={styles.lineChatMoreOnlyChildfirstChild}>
                    <div>
                        <div>
                            <Image
                                src={"/Images/LineChat/iconsix.webp"}
                                alt={"img"}
                                width={"0"}
                                height={"0"}
                                sizes={"100vw"}
                                style={{ width: "100%", height: "100%" }}

                            />
                        </div>
                        <h3>Plug-in and use</h3>
                        <p>
                            connect with all your third party apps and tools for real-time conversatiion on order related issues and more 
                        </p>
                    </div>
                    <div>
                        <div>
                            <Image
                                src={"/Images/LineChat/iconsix.webp"}
                                alt={"img"}
                                width={"0"}
                                height={"0"}
                                sizes={"100vw"}
                                style={{ width: "100%", height: "100%" }}

                            />
                        </div>
                        <h3>Secure your data </h3>
                        <p>Secure with OPT authencation, Privacy modes, HIPAA, and GDPR conplaince</p>
                    </div>
                    <div>
                        <div>
                            <Image
                                src={"/Images/LineChat/iconsix.webp"}
                                alt={"img"}
                                width={"0"}
                                height={"0"}
                                sizes={"100vw"}
                                style={{ width: "100%", height: "100%" }}

                            />
                        </div>
                        <h3>Control Agent access</h3>
                        <p>With advanced roles and permisiions.Customize permissions. Customers to profile to specify What an agent can see and do.</p>
                    </div>




                </div>
            </div>
        </div>
    )
}