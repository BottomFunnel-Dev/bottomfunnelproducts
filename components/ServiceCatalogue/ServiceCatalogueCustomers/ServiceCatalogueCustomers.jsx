import React from "react";
import styles from "./ServiceCatalogueCustomers.module.css";
import Image from "next/image";
export const ServiceCatalogueCustomers = () => {
    return (
        <div className={styles.servicecatatoguecustomersparent}>

            <div className={styles.servicecatatoguecustomersparentfirstchild}>
                <div className={styles.servicecatatoguecustoemrscontent}>
                    <h2 className={styles.hfontwiegth}>Shop on the portal for IT needs

                    </h2>
                    <li  className={styles.servicecatatoguecustoemrline}>Z Provide a consumer app like shopping experience to your
                        end-users with a catalog of service items published on the
                        end-user portal.Z Provide a consumer app like shopping experience to your
                        end-users with a catalog of service items published on the
                        end-user porta</li>
                    <li className={styles.servicecatatoguecustoemrline}>
                        Offer end-users the choice to self-serve and simplify the
                        search process with a simple to navigate, searchable end. user portal that is also available on mobile. Offer end-users the choice to self-serve and simplify the
                        search process with a simple to navigate, searchable end. user portal that is also available on mobile
                    </li>
                </div>
                <div className={styles.servicecatatoguecustoemrsimage}>
                    <Image
                        src={"/Images/ServiceCatalogue/imageone.webp"}
                        alt={"img"}
                        width={"0"}
                        height={"0"}
                        sizes={"100vw"}
                        style={{ width: "100%", height: "100%" }}

                    />
                </div>
            </div>



            <div className={styles.servicecatatoguecustomersparentfirstchild}>
                <div className={styles.servicecatatoguecustoemrsimage}>
                    <Image
                        src={"/Images/ServiceCatalogue/imagetwo.webp"}
                        alt={"img"}
                        width={"0"}
                        height={"0"}
                        sizes={"100vw"}
                        style={{ width: "100%", height: "100%" }}

                    />
                </div>
                <div className={styles.servicecatatoguecustoemrscontent}>
                    <h2 className={styles.hfontwiegth}>Use Automation workflows to speed up
                        service request fulfillment

                    </h2>
                    <li className={styles.servicecatatoguecustoemrline}>Create business rules and set up workflow automations -
                        agent assignment, multistage approval workflows, unique
                        to a service item </li>
                    <li className={styles.servicecatatoguecustoemrline}> 
                        Keep all stakeholders fully informed with timely
                        notifications that are automatically triggered based on
                        rules
                    </li>
                    <li className={styles.servicecatatoguecustoemrline}>
                        Prioritize requests and improve service delivery with SLAs
                        that can be customized at a service item level
                    </li>
                </div>

            </div>


            <div className={styles.servicecatatoguecustomersparentfirstchild}>
                <div className={styles.servicecatatoguecustoemrscontent}>
                    <h2 className={styles.hfontwiegth}>Insights into service availability

                    </h2>
                    <li className={styles.servicecatatoguecustoemrline}>Z Provide a consumer app like shopping experience to your end-users with a catalog of service items published on the end-user portal.Z Provide a consumer app like shopping experience to your end-users with a catalog of service items published on the end-user porta</li>
                    <li className={styles.servicecatatoguecustoemrline}>
                        Offer end-users the choice to self-serve and simplify the search process with a simple to navigate, searchable end. user portal that is also available on mobile. Offer end-users the choice to self-serve and simplify the search process with a simple to navigate, searchable end. user portal that is also available on mobile
                    </li>
                </div>
                <div className={styles.servicecatatoguecustoemrsimage}>
                    <Image
                        src={"/Images/ServiceCatalogue/imagethree.webp"}
                        alt={"img"}
                        width={"0"}
                        height={"0"}
                        sizes={"100vw"}
                        style={{ width: "100%", height: "100%" }}

                    />
                </div>
            </div>


            <div className={styles.servicecatatoguecustomersparentfirstchild}>
                <div className={styles.servicecatatoguecustoemrsimage}>
                    <Image
                        src={"/Images/ServiceCatalogue/imagefour.webp"}
                        alt={"img"}
                        width={"0"}
                        height={"0"}
                        sizes={"100vw"}
                        style={{ width: "100%", height: "100%" }}

                    />
                </div>
                <div className={styles.servicecatatoguecustoemrscontent}>
                    <h2 className={styles.hfontwiegth}>Rebranding with the service catalog


                    </h2>
                    <li className={styles.servicecatatoguecustoemrline}>Customize the service catalog to suit your branding
                        policies, and easily configure fields based on the needs of
                        departments or teams
                    </li>
                    <li className={styles.servicecatatoguecustoemrline}>
                        Customize the service catalog to suit your branding
                        policies, and easily configure fields based on the needs of
                        departments or teams
                    </li>

                </div>

            </div>

        </div>
    )
}