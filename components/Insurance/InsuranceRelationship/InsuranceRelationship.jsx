import React from "react";
import styles from "./InsuranceRelationship.module.css"
import Image from "next/image";
export const InsuranceRelationship = () => {
    return (
        <div className={styles.InsuranceRelationshipParent}>

            <h3>At Bottom Funnel, we do things differently. We know that transactions are short-lived, but the
                relationships we build are for life
            </h3>
            <h3>
                We will help you find and create customers for life, and we’d like you to be our customer for life
            </h3>
            <div className={styles.InsuranceRelationshipParentOnlychild}>
                <div>
                    <h4>
                        Unrivaled time to value
                    </h4>
                    <div>
                        <Image
                            src={"https://d3op2l77j7wnti.cloudfront.net/Images/Insurance/Logo1.webp"}
                            alt={"img"}
                            width={"0"}
                            height={"0"}
                            sizes={"100vw"}
                            style={{ width: "100%", height: "100%" }}

                        />
                    </div>
                    <p>
                        Our products are easy to configure
                        and just work! You don’t need an army
                        of developers to maintain our
                        platform. Innovative software that’s
                        actually simple.
                    </p>
                </div>




                <div>
                    <h4>
                        Enterprise-grade

                    </h4>
                    <div>
                        <Image
                            src={"https://d3op2l77j7wnti.cloudfront.net/Images/Insurance/Logo2.webp"}
                            alt={"img"}
                            width={"0"}
                            height={"0"}
                            sizes={"100vw"}
                            style={{ width: "100%", height: "100%" }}

                        />
                    </div>
                    <p>
                        Our secure, cloud-hosted platform
                        scales with you and is customizable to
                        match your unique needs with 640+
                        integrations and open APIs.
                    </p>
                </div>



                <div>
                    <h4>
                        You can count on us

                    </h4>
                    <div>
                        <Image
                            src={"https://d3op2l77j7wnti.cloudfront.net/Images/Insurance/Logo3.webp"}
                            alt={"img"}
                            width={"0"}
                            height={"0"}
                            sizes={"100vw"}
                            style={{ width: "100%", height: "100%" }}

                        />
                    </div>
                    <p>
                        We're not just another vendor. From
                        transparent pricing to partnership at
                        every step of your journey, we are
                        invested in making your business
                        successful.
                    </p>
                </div>



            </div>



        </div>
    )
}