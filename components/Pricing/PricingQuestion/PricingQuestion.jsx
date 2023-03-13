import styles from "./PricingQuestion.module.css";
import Image from "next/image";

export const PricingQuestion = () => {
    return (
        <div className={styles.PricingQuestionParent}>
            <h2>Frequently Asked questions</h2>
            <div className={styles.PricingQuestionParentonlychild}>


                <div className={styles.PricingQuestionParentonlychildfirst}>

                    <h3>Have Pricing questions?</h3>
                    <h3>We have answers.</h3>
                </div>


                <div className={styles.PricingQuestionParentonlychildsec}>
                    <div className={styles.PricingQuestionParentonlychildsecfirst}>
                        <hr />
                        <div>
                            <div>
                                <Image
                                    src={"/Images/Pricing/Plus.png"}
                                    alt={"img"}
                                    width={"0"}
                                    height={"0"}
                                    sizes={"100vw"}
                                    style={{ width: "100%", height: "100%" }}
                                />
                            </div>
                            <p>What are managed assests ?</p>
                        </div>



                        <hr />
                        <div>
                            <div>
                                <Image
                                    src={"/Images/Pricing/Plus.png"}
                                    alt={"img"}
                                    width={"0"}
                                    height={"0"}
                                    sizes={"100vw"}
                                    style={{ width: "100%", height: "100%" }}
                                />
                            </div>
                            <p>How does the 21 day free trial work?</p>
                        </div>


                        <hr />
                        <div>
                            <div>
                                <Image
                                    src={"/Images/Pricing/Plus.png"}
                                    alt={"img"}
                                    width={"0"}
                                    height={"0"}
                                    sizes={"100vw"}
                                    style={{ width: "100%", height: "100%" }}
                                />
                            </div>
                            <p>Is my data safe?</p>
                        </div>



                        <hr />
                        <div>
                            <div>
                                <Image
                                    src={"/Images/Pricing/Plus.png"}
                                    alt={"img"}
                                    width={"0"}
                                    height={"0"}
                                    sizes={"100vw"}
                                    style={{ width: "100%", height: "100%" }}
                                />
                            </div>
                            <p>What types of payment do
                                you accept?</p>
                        </div>


                        <hr />
                        <div>
                            <div>
                                <Image
                                    src={"/Images/Pricing/Plus.png"}
                                    alt={"img"}
                                    width={"0"}
                                    height={"0"}
                                    sizes={"100vw"}
                                    style={{ width: "100%", height: "100%" }}
                                />
                            </div>
                            <p>Can I upgrade or downgrade my
                                subscription?</p>
                        </div>


                        <hr />
                        <div>
                            <div>
                                <Image
                                    src={"/Images/Pricing/Plus.png"}
                                    alt={"img"}
                                    width={"0"}
                                    height={"0"}
                                    sizes={"100vw"}
                                    style={{ width: "100%", height: "100%" }}
                                />
                            </div>
                            <p>What is Orchestration?</p>
                        </div>

                        <hr />

                    </div>




                    <div className={styles.PricingQuestionParentonlychildsecsec}>
                        <hr />
                        <div>
                            <div>
                                <Image
                                    src={"/Images/Pricing/Plus.png"}
                                    alt={"img"}
                                    width={"0"}
                                    height={"0"}
                                    sizes={"100vw"}
                                    style={{ width: "100%", height: "100%" }}
                                />
                            </div>
                            <p>What is an orchestration transaction?</p>
                        </div>



                        <hr />
                        <div>
                            <div>
                                <Image
                                    src={"/Images/Pricing/Plus.png"}
                                    alt={"img"}
                                    width={"0"}
                                    height={"0"}
                                    sizes={"100vw"}
                                    style={{ width: "100%", height: "100%" }}
                                />
                            </div>
                            <p>Do you offer any discounts?</p>
                        </div>


                        <hr />
                        <div>
                            <div>
                                <Image
                                    src={"/Images/Pricing/Plus.png"}
                                    alt={"img"}
                                    width={"0"}
                                    height={"0"}
                                    sizes={"100vw"}
                                    style={{ width: "100%", height: "100%" }}
                                />
                            </div>
                            <p>Who is an agent? Can I add an agent
                                on short term basis?
                            </p>
                        </div>



                        <hr />
                        <div>
                            <div>
                                <Image
                                    src={"/Images/Pricing/Plus.png"}
                                    alt={"img"}
                                    width={"0"}
                                    height={"0"}
                                    sizes={"100vw"}
                                    style={{ width: "100%", height: "100%" }}
                                />
                            </div>
                            <p>What is Freddy?</p>
                        </div>


                        <hr />
                        <div>
                            <div>
                                <Image
                                    src={"/Images/Pricing/Plus.png"}
                                    alt={"img"}
                                    width={"0"}
                                    height={"0"}
                                    sizes={"100vw"}
                                    style={{ width: "100%", height: "100%" }}
                                />
                            </div>
                            <p>Who is an agent? Can I add an agent
                                on short term basis?</p>
                        </div>


                        <hr />
                        <div>
                            <div>
                                <Image
                                    src={"/Images/Pricing/Plus.png"}
                                    alt={"img"}
                                    width={"0"}
                                    height={"0"}
                                    sizes={"100vw"}
                                    style={{ width: "100%", height: "100%" }}
                                />
                            </div>
                            <p>What is a Freddy Suggestion?</p>
                        </div>

                        <hr />

                    </div>
                </div>



            </div>


        </div>
    );
}