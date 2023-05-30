import React from "react";
import styles from "./ChatBotsSupport.module.css";
import Image from "next/image";
export const ChatBotsSupport = () => {
    return (
        <div className={styles.chatbotssuppportparent}>
            <h2 className={styles.fontwiegth}>
            Human-AI Support: Unleashing Synergy
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
                    Streamline your customer support process and save time by automating the resolution of common queries and providing instant answers.
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
                    Say goodbye to traditional IVRs. Digitize your customer interactions with AI-powered chatbots, offering personalized and efficient self-service options.
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
                    Scale your customer support effortlessly with AI chatbots, capable of handling increasing volumes of customer queries without compromising quality or response time.
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
                    AI chatbots reduce handle times by instantly addressing customer queries, providing quick and accurate responses, and minimizing the need for manual intervention.
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
                    Optimized support through AI chatbots ensures efficient handling of customer inquiries, personalized interactions, and streamlined resolution processes for enhanced customer satisfaction.
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
                    Improved customer satisfaction (CSAT) with AI chatbots by providing quick and accurate responses, personalized assistance, and proactive problem-solving.
                    </p>
                </div>
            </div>
        </div>
    )
}