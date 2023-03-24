
import React from 'react'
import styles from "./SMSBots.module.css";
import Image from 'next/image';
export const SMSBots = () => {
    return (
        <div className={styles.botsrParent}>
            <h2>Enable 27x4 support with bots and automation </h2>
            <div className={styles.smscustomerParentfirstchild}>

                <div className={styles.botsrParentParentfirstchildContent}>

                    <p>
                        Leverage AI-powered bots and automation to streamline your suoort taska . combile this with SMS to offer world - class customer seervice .With Freshchat:
                        Leverage AI-powered bots and automation to streamline your suoort taska .
                    </p>
                    <p>
                        Leverage AI-powered bots and automation to streamline your suoort taska . combile this with SMS to offer world - class customer seervice .With Freshchat:
                        Leverage AI-powered bots and automation to streamline your suoort taska .
                    </p>

                    <li  className={styles.botsrParentParentfirstchildContentlist}>
                        Empowered your teams and bots to work together and provide round -the -clock service via SMS .
                    </li>
                    <li>
                        Deflect repititive question and free up your agents time to solve complex queries.                        </li>


                </div>
                <div className={styles.botsrParentParentfirstchildImage}>
                    <Image
                        src={"/Images/sms/imagethree.webp"}
                        alt={"img"}
                        width={"0"}
                        height={"0"}
                        sizes={"100vw"}
                        style={{ width: "100%", height: "100%" }}
                    />
                </div>

            </div>
        </div>
    )
}