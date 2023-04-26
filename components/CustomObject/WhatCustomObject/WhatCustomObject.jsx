
import React from "react";
import styles from "./WhatCustomObject.module.css";
import Image from "next/image";

export const WhatCustomObject = () => {
    return (
        <div className={styles.JourneyPersonalizedParent}>
            <div className={styles.headingdiv}>
            <h1 className={styles.JourneyPersonalizedmainheading}>Consolidated Custom objects</h1>
            <hr className={styles.line} />
            <p>Custom records are a built-in feature of Bottom Funnel products that allows you to create your own customized records natively, which can be used to store information specific to your business.</p>
            </div>

            <div className={styles.whatCustomDataContainer}>
                <div className={styles.whatCustomDataBox1}>
                        <Image
                            src={"https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/customObject/whatCustomObjectone.png"}
                            alt={"img"}
                            width={"0"}
                            height={"0"}
                            sizes={"100vw"}
                            style={{ width: "100%", height: "100%" }}
                        />
                </div>
                <div className={styles.whatCustomDataBox2}>
                    <h2>Build</h2>
                    <p> Build the business objects that perfectly define your business and its processes.These objects should include information about the business such as its mission statement, organizational structure, and core values. Additionally, the objects should include information about the processes that are used to carry out the business’s operations such as customer service, marketing, finance, and human resources.</p>
                </div>
            </div>

            <div className={styles.whatCustomDataContainer1}>
                <div className={styles.whatCustomDataBox2}>
                    <h2>Review</h2>
                    <p>Link them with native objects or other custom objects to obtain complete context.  By linking native objects or other custom objects, you can add additional details that wouldn't be available in a single object. This can be especially useful when working with large datasets, as it allows you to better understand the context of each object and make more informed decisions. </p>
                </div>
                <div className={styles.whatCustomDataBox1}>
                        <Image
                            src={"https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/customObject/whatCustomObjectsec.png"}
                            alt={"img"}
                            width={"0"}
                            height={"0"}
                            sizes={"100vw"}
                            style={{ width: "100%", height: "100%" }}
                        />
                </div>
            </div>

            <div className={styles.whatCustomDataContainer}>
                <div className={styles.whatCustomDataBox1}>
                        <Image
                            src={"https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/customObject/whatCustomObjectthird.png"}
                            alt={"img"}
                            width={"0"}
                            height={"0"}
                            sizes={"100vw"}
                            style={{ width: "100%", height: "100%" }}
                        />
                </div>
                <div className={styles.whatCustomDataBox2}>
                    <h2>Examine</h2>
                    <p>Obtain exclusive insights through these business-specific objects using Analytics. With the right analytics software, businesses can access data on everything from customer behaviour to marketing trends. This data can then be used to drive decisions and inform strategies. </p>
                </div>
            </div>

        </div>
    )
}