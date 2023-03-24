import React from "react";
import styles from "./ChatBotsSupport.module.css";
import Image from "next/image";
export const ChatBotsSupport = () => {
    return (
        <div className={styles.chatbotssuppportparent}>
            <h2 className={styles.fontwiegth}>
                Artificial + Human Intelligence = Exceptional
                Support!
            </h2>
            <div className={styles.chatbotssuppportparentonediv}>
                <div>
                    <div className={styles.chatbotssuppportparenticon}>
                        <Image
                            src={"/Images/ChatBots/iconone.webp"}
                            alt={"img"}
                            width={"0"}
                            height={"0"}
                            sizes={"100vw"}
                            style={{ width: "100%", height: "100%" }}

                        />
                    </div>
                    <h5 className={styles.fontwiegth}>
                        Automate resolutions
                    </h5>
                    <p>
                        Save time for your customers and agents by
                        having your bot automate resolutions.
                    </p>
                </div>

                <div>
                    <div className={styles.chatbotssuppportparenticon}>
                        <Image
                            src={"/Images/ChatBots/icontwo.webp"}
                            alt={"img"}
                            width={"0"}
                            height={"0"}
                            sizes={"100vw"}
                            style={{ width: "100%", height: "100%" }}

                        />
                    </div>
                    <h5 className={styles.fontwiegth}>
                        Digitize IVRs
                    </h5>
                    <p>
                        Collect all the required context and triage your
                        conversations to the relevant agent groups.

                    </p>
                </div>

                <div>
                    <div className={styles.chatbotssuppportparenticon}>
                        <Image
                            src={"/Images/ChatBots/iconthree.webp"}
                            alt={"img"}
                            width={"0"}
                            height={"0"}
                            sizes={"100vw"}
                            style={{ width: "100%", height: "100%" }}

                        />
                    </div>
                    <h5 className={styles.fontwiegth}>
                        Scalability
                    </h5>
                    <p>
                        Deliver scalable, intelligent support across all
                        channels and make your agents more productive.
                    </p>
                </div>
            </div>


            <div className={styles.chatbotssuppportparenttwodiv}>
                <div>
                    <div className={styles.chatbotssuppportparenticon}>
                        <Image
                            src={"/Images/ChatBots/iconfour.webp"}
                            alt={"img"}
                            width={"0"}
                            height={"0"}
                            sizes={"100vw"}
                            style={{ width: "100%", height: "100%" }}

                        />
                    </div>
                    <h5 className={styles.fontwiegth}>
                        Reduced handle times
                    </h5>
                    <p>
                        With real-time resolutions, intelligent automation,
                        and contextual agent handovers, you can
                        significantly reduce your Average Handle Time.
                    </p>
                </div>


                <div>
                    <div className={styles.chatbotssuppportparenticon}>
                        <Image
                            src={"/Images/ChatBots/iconfive.webp"}
                            alt={"img"}
                            width={"0"}
                            height={"0"}
                            sizes={"100vw"}
                            style={{ width: "100%", height: "100%" }}

                        />
                    </div>
                    <h5 className={styles.fontwiegth}>
                        Optimized support
                    </h5>
                    <p>
                        Save money and reduce support staffing
                        costs by front-lining your bots to take care of
                        most of your customers repetitive questions.
                    </p>
                </div>


                <div>
                    <div className={styles.chatbotssuppportparenticon}>
                        <Image
                            src={"/Images/ChatBots/iconsix.webp"}
                            alt={"img"}
                            width={"0"}
                            height={"0"}
                            sizes={"100vw"}
                            style={{ width: "100%", height: "100%" }}

                        />
                    </div>
                    <h5 className={styles.fontwiegth}>
                        Improved CSAT
                    </h5>
                    <p>
                        Provide instant resolutions through intelligent
                        self-service automation and create happy
                        customer advocates for your brand.
                    </p>
                </div>
            </div>
        </div>
    )
}