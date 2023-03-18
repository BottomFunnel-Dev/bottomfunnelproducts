
import styles from "./JourneysEnagement.module.css"
import Image from "next/image"

export const JourneysEnagement = () => {
    return (
        <div className={styles.journeysEnagementParent}>
            <div className={styles.journeysEnagementParentfirstchild}>
                <h2>
                    Target , Trigger, and delever high-context engagement
                </h2>
                <div className={styles.journeysEnagementParentfirstchilddiv}>
                    <div className={styles.journeysEnagementParentfirstchilddivImage}>
                        <Image
                            src={"/Images/Journeys/imagethree.webp"}
                            alt={"img"}
                            width={"0"}
                            height={"0"}
                            sizes={"100vw"}
                            style={{ width: "100%", height: "100%" }}

                        />
                    </div>
                    <div className={styles.journeysEnagementParentfirstchilddivcontent}>
                        <p>
                            Design intricate flows and segments your customers and visitors with ease . Trigger contextual messages at the rigth time or basedd on intent non your websites, products , or app.
                            Design intricate flows and segments your customers and visitors with ease . Trigger contextual messages at the rigth time or basedd on intent non your websites, products , or app.

                        </p>
                    </div>
                </div>
            </div>

            <div className={styles.journeysEnagementParentsecchild}>
                <h2>
                    Use data without the data scientists
                </h2>
                <div className={styles.journeysEnagementParentsecchilddiv}>

                    <div className={styles.journeysEnagementParentsecchilddivcontent}>
                        <p>
                            Measure and alalyze key metrics from your ongoing compaign with dashboards that works out of the box . Review and tweak your journeys based on thier performance.

                            Measure and alalyze key metrics from your ongoing compaign with dashboards that works out of the box . Review and tweak your journeys based on thier performance.
                        </p>
                    </div>
                    <div className={styles.journeysEnagementParentsecchilddivImage}>
                        <Image
                            src={"/Images/Journeys/imagefour.webp"}
                            alt={"img"}
                            width={"0"}
                            height={"0"}
                            sizes={"100vw"}
                            style={{ width: "100%", height: "100%" }}

                        />
                    </div>
                </div>
            </div>
        </div>
    )
}