import React from "react";
import styles from "./softwareandserviceitcommunication.module.css"
import Image from "next/image";
export const Softwareandserviceitcommunication = () => {
    return (

        <div className={styles.softwareandserviceitcommunicationParent}>

        <div className={styles.softwareandserviceitcommunicationtwo}>
                <h1>Unify your customer service communications </h1>

                <p>
                   Deliver customer service to your clients on channels of their choice. 
                   While urgent queries require a phone call, live-chat is ideal for 
                   routine queries and email for long resolutions. Manage all your 
                   customer communications from a single platform
                </p>
                <ul>
                    <li>Deliver service via phone, email, social, live-chat and more</li>
                    <li>Use live-chat to support customers right within your SaaS apv</li>
                    <li> Respond to queries faster with omnichannel queue management</li>
                </ul>
        </div>

            <div className={styles.softwareandserviceitcommunicationone}>
                <Image
                    src={"https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/softwareandserviceit/Frame1.webp"}
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