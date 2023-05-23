import React from "react";
import styles from "./softwareandserviceitbanner.module.css"
import Image from "next/image";

export const Softwareandserviceitbanner = () => {
    return (

        <div className={styles.softwareandserviceitbannerParent}>
            <div className={styles.softwareandserviceitbannertwo}>
                <h2>Engineer wow moments. </h2>

                <p>Your technology is mission-critical to your customer’s
                    business. You need to back it up with responsive, proactive
                    customer service. Deliver outstanding experiences with the
                    Bottom Funnel Customer Service Platform.
                </p>
                <button>Request For Demo</button>
            </div>


            <div className={styles.softwareandserviceitbannerone}>
                <Image
                    src={"https://d3op2l77j7wnti.cloudfront.net/Images/softwareandserviceit/banner.webp"}
                    alt={"img"}
                    width={"0"}
                    height={"0"}
                    sizes={"100vw"}
                    style={{ width: "100%", height: "100%" }}

                />
            </div>


        </div>

    );
}