import React from "react";
import styles from "./softwareandserviceitchatbots.module.css"
import Image from "next/image";
export const Softwareandserviceitchatbots = () => {
    return (

        <div className={styles.softwareandserviceitchatbotsParent}>
            <div className={styles.softwareandserviceitchatbotstwo}>
                <h1>Deploy chatbots with ease</h1>

                <p>Your product might be complex, but your customer service can be
                    simple. Leverage AI and chatbots to answer routine queries on
                    product configurations, billing and more. Free up your time to deal
                    with real issues.
                </p>
                <ul>
                    <li> Reduce ticket volumes and deliver 24/7 support with chatbotÃ
                    </li>
                    <li>Escalate complex queries from bots to live-agents seamlessl
                    </li>
                    <li>  Identify intent and convert service inquiries into upsell
                    </li>

                </ul>
            </div>
            <div className={styles.softwareandserviceitchatbotsone}>
                <Image
                    src={"/Images/softwareandserviceit/Group3.webp"}
                    alt={"img"}
                    width={"0"}
                    height={"0"}
                    sizes={"100vw"}
                    style={{ width: "70%", height: "70%" }}
                />
            </div>
        </div>

    );
}