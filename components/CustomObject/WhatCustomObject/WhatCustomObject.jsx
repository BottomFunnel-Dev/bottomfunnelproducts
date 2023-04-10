
import React from "react";
import styles from "./WhatCustomObject.module.css";
import Image from "next/image";

export const WhatCustomObject = () => {
    return (
        <div className={styles.JourneyPersonalizedParent}>
            <div className={styles.headingdiv}>
            <h1 className={styles.JourneyPersonalizedmainheading}>What are custom objects?</h1>
            <hr className={styles.line} />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel exercitationem nemo, provident quibusdam quod sed ea, excepturi quis quam, in dolor ex unde voluptatum a aperiam illo voluptatibus commodi minus. Custom object are a set of custom records you can create natively inside freshworks products to store information sprcific to your business .Go beyond your regular employee, customer data, and bring in all the context you need at scale .</p>
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
                    <h2>Create</h2>
                    <p>Create the business objects that define your business processes best.</p>
                </div>
            </div>

            <div className={styles.whatCustomDataContainer1}>
                <div className={styles.whatCustomDataBox2}>
                    <h2>Contextualize</h2>
                    <p>Create the business objects that define your business and its processes best.</p>
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
                    <h2>Analyze</h2>
                    <p>Get unique insights through these business-specific objects using analytics</p>
                </div>
            </div>

        </div>
    )
}