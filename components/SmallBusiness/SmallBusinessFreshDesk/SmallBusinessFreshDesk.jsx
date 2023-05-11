import styles from "./SmallBusinessFreshDesk.module.css";
import Image from "next/image";
export const SmallBusinessFreshDesk = () => {
    return (
        <div className={styles.SmallBusinessFreshDeskParent}>
            <h1>More reason why SMPs (And enterprises) love Bottom funnel desk</h1>
            <div className={styles.SmallBusinessFreshDeskParentfirstChild}>
                <div>
                    <div>
                        <div>
                            <Image
                                src={"https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/Small-Business/Icon5.png"}
                                alt={"img"}
                                width={"0"}
                                height={"0"}
                                sizes={"100vw"}
                                style={{ width: "70%", height: "90%" }}
                            />
                        </div>

                        <h5>Transparent pricing</h5>
                    </div>
                    <p>What you see is what you get. No
                        hidden charges or unexpected
                        add-ons</p>
                </div>


                <div>
                    <div>
                        <div>
                            <Image
                                src={"https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/Small-Business/Icon6.png"}
                                alt={"img"}
                                width={"0"}
                                height={"0"}
                                sizes={"100vw"}
                                style={{ width: "70%", height: "90%" }}
                            />
                        </div>

                        <h5>Robust integrations
                        </h5>
                    </div>
                    <p>Extend your capabilities with
                        flexible APIs and 650+ one-click
                        integrations from our
                        marketplace. </p>
                </div>


                <div>
                    <div>
                        <div>
                            <Image
                                src={"https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/Small-Business/Icon7.png"}
                                alt={"img"}
                                width={"0"}
                                height={"0"}
                                sizes={"100vw"}
                                style={{ width: "70%", height: "90%" }}
                            />
                        </div>

                        <h5>Intuitive UI
                        </h5>
                    </div>
                    <p>Go live in no time with the intuitive
                        in-built onboarding process
                    </p>
                </div>
            </div>



            <div className={styles.SmallBusinessFreshDeskParentSecChild}>

                <div>
                    <div>
                        <div>
                            <Image
                                src={"https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/Small-Business/Icon8.png"}
                                alt={"img"}
                                width={"0"}
                                height={"0"}
                                sizes={"100vw"}
                                style={{ width: "70%", height: "90%" }}
                            />
                        </div>

                        <h5>Support at every

                            step</h5>
                    </div>
                    <p>Our team of experts is available to
                        help you around the clock</p>
                </div>


                <div>
                    <div>
                        <div>
                            <Image
                                src={"https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/Small-Business/Icon9.png"}
                                alt={"img"}
                                width={"0"}
                                height={"0"}
                                sizes={"100vw"}
                                style={{ width: "70%", height: "90%" }}
                            />
                        </div>

                        <h5>Perfect for flexible
                            workforces</h5>
                    </div>
                    <p>Bottom funnel desk can be scaled up or down
                        based on your business needs. </p>
                </div>
            </div>
        </div>
    );
}