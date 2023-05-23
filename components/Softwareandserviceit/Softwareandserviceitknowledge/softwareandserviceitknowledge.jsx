import React from "react";
import styles from "./softwareandserviceitknowledge.module.css"
import Image from "next/image";
export const Softwareandserviceitknowledge = () => {
    return (

        <div className={styles.softwareandserviceitknowledgeParent}>
            <div className={styles.softwareandserviceitknowledgeone}>
                <Image
                    src={"https://d3op2l77j7wnti.cloudfront.net/Images/softwareandserviceit/Group1.webp"}
                    alt={"img"}
                    width={"0"}
                    height={"0"}
                    sizes={"100vw"}
                    style={{ width: "70%", height: "70%" }}
                />
            </div>

            <div className={styles.softwareandserviceitknowledgetwo}>
                <h1>Enrich client experiences
                    with contextual knowledge </h1>

                <p>When your industry clients see an error message on a busy
                    workday, the last thing they want is to relay every detail to your
                    support team. Show them that you know them. Equip your
                    agents with the information they need, right from order
                    information to product logs so that you can solve queries with
                    speed.
                </p>
                <ul>
                    <li> Integrate with business applications like Jira, Salesforce,
                        Stripe and more</li>
                    <li>Automatically route your premium clients to priority queue</li>
                    <li>  Use product events to predict issues and proactively service
                        customer</li>
                    <li> Resolve issues faster and better with the right information on
                        hand</li>
                </ul>
            </div>

        </div>

    );
}