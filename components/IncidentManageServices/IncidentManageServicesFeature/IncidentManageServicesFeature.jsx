
import React from "react";
import styles from "./IncidentManageServicesFeature.module.css"
import Image from "next/image";
export const IncidentManageServicesFeature = () => {
    return (
        <div className={styles.incidentManageServicesFeatureParent}>

            <h2 className={styles.incidentManageServicesFeaturewieght}>Additional features</h2>
            <div className={styles.incidentManageServicesFeatureParentchild}>
                <div className={styles.incidentManageServicesFeatureParentchildchild} >
                    <h5 className={styles.incidentManageServicesFeaturewieght}>SLA management</h5>
                    <div className={styles.imagediv}>
                        <Image
                            src={"/Images/incidentmanagementservice/iconone.webp"}
                            alt={"img"}
                            width={"0"}
                            height={"0"}
                            sizes={"100vw"}
                            style={{ width: "100%", height: "100%" }}

                        />
                    </div>
                    <p>
                        Ensure on-time resolution by setting
                        multiple SLA policies for task deadlines and
                        automate escalation rules – based on
                        different business hours or various types of
                        tickets and ticket groups.
                    </p>
                </div>



                <div className={styles.incidentManageServicesFeatureParentchildchild} >
                    <h5 className={styles.incidentManageServicesFeaturewieght}>Satisfaction survey</h5>
                    <div className={styles.imagediv}>
                        <Image
                            src={"/Images/incidentmanagementservice/icontwo.webp"}
                            alt={"img"}
                            width={"0"}
                            height={"0"}
                            sizes={"100vw"}
                            style={{ width: "100%", height: "100%" }}

                        />
                    </div>
                    <p>
                        Drive service improvement with built-in
                        satisfaction survey that can be
                        automatically sent to employees upon
                        ticket resolution, and measure your
                        efficiency based on the CSAT reports.
                    </p>
                </div>



                <div className={styles.incidentManageServicesFeatureParentchildchild} >
                    <h5 className={styles.incidentManageServicesFeaturewieght}>Task management
                    </h5>
                    <div className={styles.imagediv}>
                        <Image
                            src={"/Images/incidentmanagementservice/iconthree.webp"}
                            alt={"img"}
                            width={"0"}
                            height={"0"}
                            sizes={"100vw"}
                            style={{ width: "100%", height: "100%" }}

                        />
                    </div>
                    <p>
                        Stay on top of your daily tasks by viewing
                        them from the service desk dashboard’s
                        calendar view. Easily manage all that’s
                        time-bound with automated notifications.
                    </p>
                </div>
            </div>




            <div className={styles.incidentManageServicesFeatureParentchild}>
                <div className={styles.incidentManageServicesFeatureParentchildchild} >
                    <h5 className={styles.incidentManageServicesFeaturewieght}>Priority matrix</h5>
                    <div className={styles.imagediv}>
                        <Image
                            src={"/Images/incidentmanagementservice/iconfour.webp"}
                            alt={"img"}
                            width={"0"}
                            height={"0"}
                            sizes={"100vw"}
                            style={{ width: "100%", height: "100%" }}

                        />
                    </div>
                    <p>
                        Standardize prioritization of tickets to focus
                        on the right tickets and quickly resolve
                        major incidents. Specify the priority of
                        tickets based on their impact and urgency,
                        and automate incident prioritization.
                    </p>
                </div>



                <div className={styles.incidentManageServicesFeatureParentchildchild} >
                    <h5 className={styles.incidentManageServicesFeaturewieght}>Knowledge base</h5>
                    <div className={styles.imagediv}>
                        <Image
                            src={"/Images/incidentmanagementservice/iconfive.webp"}
                            alt={"img"}
                            width={"0"}
                            height={"0"}
                            sizes={"100vw"}
                            style={{ width: "100%", height: "100%" }}

                        />
                    </div>
                    <p>
                        Improve productivity by responding to
                        similar requests with canned responses or
                        knowledge base articles at the click of a
                        button. Create solutions for your incidents
                        and automatically convert it to articles.
                    </p>
                </div>



                <div className={styles.incidentManageServicesFeatureParentchildchild} >
                    <h5 className={styles.incidentManageServicesFeaturewieght}>Reportingt</h5>
                    <div className={styles.imagediv}>
                        <Image
                            src={"/Images/incidentmanagementservice/iconsix.webp"}
                            alt={"img"}
                            width={"0"}
                            height={"0"}
                            sizes={"100vw"}
                            style={{ width: "100%", height: "100%" }}

                        />
                    </div>
                    <p>
                        Measure the performance of your incident
                        management process with predefined and
                        custom reports. Identify bottlenecks, make
                        informed decisions, and monitor agent or
                        team performance.
                    </p>
                </div>
            </div>
        </div>
    )
}