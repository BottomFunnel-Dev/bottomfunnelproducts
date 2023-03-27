
import React from "react";
import styles from "./IncidentManageServicesCatarories.module.css"
import Image from "next/image";
export const IncidentManageServicesCatarories = () => {
    return (
        <div className={styles.incidentManageServicesCataroriesParent}>
            <div className={styles.incidentManageServicesCataroriesParentchild}>
                <div className={styles.incidentManageServicesCataroriesParentchildcontent}>
                    <h2 className={styles.incidentManageServicesCataroriesParentchildcontentheading}>
                        Categorize and Prioritize tickets
                        with intelligent automation
                    </h2>
                    <ul>
                        <li>
                            Automatically categorize tickets based on historical ticket
                            data with Freddy, the Freshservice AI engine
                        </li>
                        <li>
                            Automate ticket prioritization with powerful workflow
                            automation based on impact and urgency

                        </li>
                        <li>
                            Auto-assign tickets to the right agents or groups, and ensure
                            no ticket falls through the cracks with round-robin or load
                            balancing auto-assignment
                        </li>
                    </ul>
                </div>
                <div className={styles.incidentManageServicesCataroriesParentchildimage}>
                    <Image
                        src={"/Images/incidentmanagementservice/imagethree.webp"}
                        alt={"img"}
                        width={"0"}
                        height={"0"}
                        sizes={"100vw"}
                        style={{ width: "100%", height: "100%" }}

                    />
                </div>
            </div>




            <div className={`${styles.incidentManageServicesCataroriesParentchild} ${styles.secdiv}`}>
                <div className={styles.incidentManageServicesCataroriesParentchildcontent}>
                    <h2 className={styles.incidentManageServicesCataroriesParentchildcontentheading}>
                        Get a bird s eye view of your
                        service desk performance
                    </h2>
                    <ul>
                        <li>
                            Get visibility into all your tickets and track their progress with
                            a quick glance at the dashboard.
                        </li>
                        <li>
                            Collaborate with your team from a single screen and know
                            who’s working on a ticket, its priority, and status.
                        </li>

                    </ul>
                    <button className={styles.buttons}>
                        <span className={styles.buttonsline}>Read more about reporting</span> <span className={styles.arrow}>&rarr; </span>
                    </button>
                </div>
                <div className={styles.incidentManageServicesCataroriesParentchildimage}>
                    <Image
                        src={"/Images/incidentmanagementservice/imagefour.webp"}
                        alt={"img"}
                        width={"0"}
                        height={"0"}
                        sizes={"100vw"}
                        style={{ width: "100%", height: "100%" }}

                    />
                </div>
            </div>




            <div className={styles.incidentManageServicesCataroriesParentchild}>
                <div className={styles.incidentManageServicesCataroriesParentchildcontent}>
                    <h2 className={styles.incidentManageServicesCataroriesParentchildcontentheading}>
                        Speed up resolution time &
                        improve service quality with
                        Knowledge Base
                    </h2>
                    <ul>
                        <li>
                            Integrate service desk with a comprehensive knowledge
                            base that has solutions to incidents and problems that can
                            be used by both support agents and end-users alikò
                        </li>
                        <li>
                            ¯ Empower end-users to resolve their IT issues on their own
                            from the self-service portal with a simple search without
                            having to wait for a technician to get back to them.


                        </li>

                    </ul>
                    <button className={styles.buttons}>
                        <span className={styles.buttonsline}>Read more about knowledge base </span> <span className={styles.arrow}>&rarr; </span>

                    </button>
                </div>
                <div className={styles.incidentManageServicesCataroriesParentchildimage}>
                    <Image
                        src={"/Images/incidentmanagementservice/imagefive.webp"}
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