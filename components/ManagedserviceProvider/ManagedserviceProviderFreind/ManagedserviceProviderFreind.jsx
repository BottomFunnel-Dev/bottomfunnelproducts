import styles from "./ManagedserviceProviderFreind.module.css";
import Image from "next/image";
export const ManagedserviceProviderFreind = () => {
    return (
        <div className={styles.ManagedserviceProviderFreindParent}>
            <h4>
                Let s keep it simple: we want to be your friend.

            </h4>
            <p>
                At Bottom Funnel, we do things differently. We know that transactions are short-lived, but the relationships we build are for life.

                We will help you find and create customers for life, and we d like you to be our customer for life.
            </p>
            <div className={styles.ManagedserviceProviderFreindParentOnlyChild}>



                <div>
                    <h4>Unrivaled time to value

                    </h4>
                    <div>
                        <Image
                            src={"https://d3op2l77j7wnti.cloudfront.net/Images/ManagedServiceProvider/Freind1.webp"}
                            alt={"image"}
                            width={"0"}
                            height={"0"}
                            sizes={"100vw"}
                            style={{ width: "100%", height: "100%" }}
                        />
                    </div>
                    <p>
                        Our products are easy to configure
                        and just work! You don t need an army
                        of developers to maintain our
                        platform. Innovative software that s
                        actually simple

                    </p>

                </div>
                <div>
                    <h4>Enterprise grade
                    </h4>
                    <div>
                        <Image
                            src={"https://d3op2l77j7wnti.cloudfront.net/Images/ManagedServiceProvider/Freind2.webp"}
                            alt={"image"}
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
                    <h4>You can count on us

                    </h4>
                    <div>
                        <Image
                            src={"https://d3op2l77j7wnti.cloudfront.net/Images/ManagedServiceProvider/Freind3.webp"}
                            alt={"image"}
                            width={"0"}
                            height={"0"}
                            sizes={"100vw"}
                            style={{ width: "100%", height: "100%" }}
                        />
                    </div>
                    <p>
                        Were not just another vendor. From
                        transparent pricing to partnership at
                        every step of your journey, we are
                        invested in making your business
                        successful
                    </p>

                </div>














            </div>

        </div>
    );
}