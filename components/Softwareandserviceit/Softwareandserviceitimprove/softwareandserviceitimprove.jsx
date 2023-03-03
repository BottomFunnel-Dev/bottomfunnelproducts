import React from "react";
import styles from "./softwareandserviceitimprove.module.css"
import Image from "next/image";
export const Softwareandserviceitimprove = () => {
    return (

        <div className={styles.softwareandserviceitimproveParent}>


            <div className={styles.softwareandserviceitimproveone}>
                <Image
                    src={"/Images/softwareandserviceit/5.png"}
                    alt={"img"}
                    width={"0"}
                    height={"0"}
                    sizes={"100vw"}
                    style={{ width: "70%", height: "70%" }}

                />
            </div>


            <div className={styles.softwareandserviceitimprovetwo}>
                <h1>Improve performance with
                    actionable insights</h1>

                <p>Change how your team operates by analyzing ticket data, trends
                    and agent performance. Access detailed reporting on agent
                    productivity, CSAT scores, SLAs and more. Drive higher performance
                    with data-driven decisions.
                </p>
                <ul>
                    <li> Forecast ticket volumes and staff your team effectivel
                    </li>
                    <li>Understand ticket trends and categories to deliver feedback to
                        product teamÃ
                    </li>
                    <li> Use real-time team dashboards to stay on top of your daily
                        operationÃ </li>
                    <li> Measure SLAs and CSAT scores to enhance the client experience
                    </li>

                </ul>
            </div>

        </div>

    );
}