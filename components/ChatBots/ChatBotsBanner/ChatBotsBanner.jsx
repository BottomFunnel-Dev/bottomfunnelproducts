
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
                <h1>Future-proof your customer
                    service with chatbots</h1>
                <h5>
                    Win customers for life with intelligent messaging bots that focus
                    on delighting your customers. Freshchat is your customer support
                    team's perfect ally
                </h5>
                <div className={styles.chatbotsbannerparentButtonDiv}>
                    <button>TRY FOR FREE</button>
                    <button>REQUEST DEMO</button>
                </div>
            </div>
        </div>
    )
}