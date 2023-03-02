import React from "react";
import styles from "./softwareandserviceitcommunication.module.css"
import Image from "next/image";
export const Softwareandserviceitcommunication = () => {
    return (

        <div className={styles.softwareandserviceitcommunicationParent}>

<div className={styles.softwareandserviceitcommunicationtwo}>
                <h1>Engineer wow moments. </h1>

                <p>Your technology is mission-critical to your customer’s
                    business. You need to back it up with responsive, proactive
                    customer service. Deliver outstanding experiences with the
                    Freshworks Customer Service Platform.
                </p>
                <ul>
                    <li> Deliver service via phone, email, social, live-chat and mor</li>
                    <li>Use live-chat to support customers right within your SaaS apv</li>
                    <li> Respond to queries faster with omnichannel queue
                        management</li>

                </ul>
            </div>

            <div className={styles.softwareandserviceitcommunicationone}>
                <Image
                    src={"/Images/softwareandserviceit/1.png"}
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