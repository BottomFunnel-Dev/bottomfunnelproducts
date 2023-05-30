
import React from "react";
import styles from "./ChatBotsBanner.module.css";
import Image from "next/image";
export const ChatBotsBanner = () => {
    return (
        <div className={styles.chatbotsbannerparent}>
            <div className={styles.chatbotsbannerparentImage} >
                <Image
                    src={"/Images/ChatBots/banner.webp"}
                    alt={"img"}
                    width={"0"}
                    height={"0"}
                    sizes={"100vw"}
                    style={{ width: "100%", height: "100%" }}

                />
            </div>
            <div className={styles.chatbotsbannerparentContent} >
                <h1>AI Chatbot Solutions: Empower Your Business</h1>
                <h5>
                Experience the power of AI chatbots with Bottom Funnel's cutting-edge solutions. Streamline customer interactions, automate processes, and enhance customer satisfaction. Unlock new possibilities for your business with Bottom Funnel's AI chatbot technology.
                </h5>
                <div className={styles.chatbotsbannerparentButtonDiv}>
                    <button>TRY FOR FREE</button>
                    <button>REQUEST DEMO</button>
                </div>
            </div>
        </div>
    )
}