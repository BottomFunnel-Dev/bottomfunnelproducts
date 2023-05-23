
import styles from "./PricingStarted.module.css";
import Image from "next/image";

export const PricingStarted = () => {
    return (
        <div className={styles.PricingStartedParent}>

            <div className={styles.PricingStartedParentfirstchild}>

                <h1>Get Bottom Funnel Services For ios and android</h1>
                <p>
                    Bottom Funnel services mobile apps have been thoughtfull designed to help your
                    team stay in touch with user , even when they re not at thier desks.With the ios and
                    android apps,your team can stay on top od incoming tickets,collaborate with other
                    agent,and respond to issues on the go.
                </p>

                <button>
                    Get Startes For Free
                </button>
            </div>
            <div  className={styles.PricingStartedParentSecchild}>
                <Image
                    src={"https://d3op2l77j7wnti.cloudfront.net/Images/Pricing/Starter.webp"}
                    alt={"img"}
                    width={"0"}
                    height={"0"}
                    sizes={"100vw"}
                    style={{ width: "100%", height: "100%" }}
                />
            </div>

        </div>
    )
}