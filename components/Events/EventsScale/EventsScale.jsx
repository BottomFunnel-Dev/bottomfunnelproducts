
import styles from "./EventsScale.module.css"
import Image from "next/image";
export const EventsScale = () => {
    return (
        <>
            <div className={styles.eventsScaleParent}>
                <div className={styles.eventsScaleParentfirstchild}>


                    <div className={styles.eventsScaleimage}>
                        <Image
                            src={"https://d3op2l77j7wnti.cloudfront.net/Images/Event/imageone.webp"}
                            alt={"img"}
                            width={"0"}
                            height={"0"}
                            sizes={"100vw"}
                            style={{ width: "100%", height: "100%" }}

                        />
                    </div>
                    <div div className={styles.eventsScalecontent}>
                        <h2>Auto-scale with serverless for easy, on-demand scaling</h2>
                        <p>Serverless is the ideal tool for executing complex workflows and scaling on-demand, as it enables you to do both with ease. Regardless of the frequency with which you request data from us, we have you covered with event-driven operations.
                        </p>
                    </div>
                </div>
                <div className={styles.eventsScaleParentsecchild}>
                    <div div className={styles.eventsScalecontent}>
                        <h2>Amplify customer insight</h2>
                        <p>
                        Analyze and report on customers in a comprehensive manner, all the way from ticket data to real-time streaming of support ticket data into AWS.
                        </p>
                    </div>

                    <div className={styles.eventsScaleimage}>
                        <Image
                            src={"https://d3op2l77j7wnti.cloudfront.net/Images/Event/imagetwo.webp"}
                            alt={"img"}
                            width={"0"}
                            height={"0"}
                            sizes={"100vw"}
                            style={{ width: "100%", height: "100%" }}

                        />
                    </div>

                </div>
                <div className={styles.eventsScaleParentfirstchild}>


                    <div className={`${styles.eventsScaleimage} ${styles.eventsScalethirdimage}`}>
                        <Image
                            src={"https://d3op2l77j7wnti.cloudfront.net/Images/Event/imagethree.webp"}
                            alt={"img"}
                            width={"0"}
                            height={"0"}
                            sizes={"100vw"}
                            style={{ width: "100%", height: "100%" }}

                        />
                    </div>
                    <div div className={styles.eventsScalecontent}>
                        <h2>Analyze and optimize decision-making through sentiment analysis and machine learning</h2>
                        <p>
                        By utilizing AI, your customer experience can be elevated, customer intent can be better understood, and employee productivity can be increased. Utilize machine learning to support events in order to perform sentiment analysis, which can be leveraged for automated self-service.
                        </p>
                    </div>
                </div>
            </div>






        </>
    )
}