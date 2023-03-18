
import styles from "./EventsScale.module.css"
import Image from "next/image";
export const EventsScale = () => {
    return (
        <>
            <div className={styles.eventsScaleParent}>
                <div className={styles.eventsScaleParentfirstchild}>


                    <div className={styles.eventsScaleimage}>
                        <Image
                            src={"https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/Event/imageone.webp"}
                            alt={"img"}
                            width={"0"}
                            height={"0"}
                            sizes={"100vw"}
                            style={{ width: "100%", height: "100%" }}

                        />
                    </div>
                    <div div className={styles.eventsScalecontent}>
                        <h2>Auto-scale with Serverless</h2>
                        <p>Serverless isthe tol of coice for to achieve complex
                            worjflowssand scale on-demand .be it scheduled events to periodically push datato
                            dwanstream sytem ,or product events to execute event-drivenoperation bases on requesters and tickets ,we have it all covered.
                        </p>
                    </div>
                </div>
                <div className={styles.eventsScaleParentsecchild}>
                    <div div className={styles.eventsScalecontenttwo}>
                        <h2>Improve customer Insights</h2>
                        <p>
                            Simply reporting and analytics an end-to-end view of customers.Stream your support ticket data into AWS in real-time to leverage customer information for BI and Analytics
                        </p>
                    </div>

                    <div className={styles.eventsScaleimage}>
                        <Image
                            src={"https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/Event/imagetwo.webp"}
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
                            src={"https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/Event/imagethree.webp"}
                            alt={"img"}
                            width={"0"}
                            height={"0"}
                            sizes={"100vw"}
                            style={{ width: "100%", height: "100%" }}

                        />
                    </div>
                    <div div className={styles.eventsScalecontentthree}>
                        <h2>Make Better Decision With Sentiments Analysis and ML</h2>
                        <p>
                            AI can better understand customer intent and elevate your customer experience and increase employee productivity .No apply ML to support events to provide sentiments analysis that can be leveraged for automated self -service.
                        </p>
                    </div>
                </div>
            </div>






        </>
    )
}