import React from 'react'
import styles from "./SMBMore.module.css";
import Image from 'next/image';
export const SMBMore = () => {
    return (
        <div className={styles.sMBMoreParent}>
            <h1>What's More</h1>
            <div className={styles.sMBMoreParentChild}>



                <div className={styles.sMBMoreParentChildchild}>
                    <div className={styles.sMBMoreParentChildchildfirstchild}>
                        <div>
                            <div>
                                <Image
                                    src={"/Images/sbm/iconone.webp"}
                                    alt={"img"}
                                    width={"0"}
                                    height={"0"}
                                    sizes={"100vw"}
                                    style={{ width: "100%", height: "100%" }}
                                />
                            </div>
                            <h4>Route aytomatically</h4>
                            <p>
                                Traige incoming messages to right teams with Freshchats patent -pending assignment features.
                            </p>
                        </div>

                        <div>
                            <div>
                                <Image
                                    src={"/Images/sbm/icontwo.webp"}
                                    alt={"img"}
                                    width={"0"}
                                    height={"0"}
                                    sizes={"100vw"}
                                    style={{ width: "100%", height: "100%" }}
                                />
                            </div>
                            <h4>Plug in and use</h4>
                            <p>
                                Use the markteplace to connect with tools loke Bottom funnel desk, stripe,calender, and more!                        </p>
                        </div>


                        <div>
                            <div>
                                <Image
                                    src={"/Images/sbm/iconthree.webp"}
                                    alt={"img"}
                                    width={"0"}
                                    height={"0"}
                                    sizes={"100vw"}
                                    style={{ width: "100%", height: "100%" }}
                                />
                            </div>
                            <h4>Measure and optomize</h4>
                            <p>
                                Derive insights from user touchpoints and make business -critical decision
                            </p>
                        </div>


                    </div>


                    <div className={styles.sMBMoreParentChildchilsecchild}>
                        <div>
                            <div>
                                <Image
                                    src={"/Images/sbm/iconfour.webp"}
                                    alt={"img"}
                                    width={"0"}
                                    height={"0"}
                                    sizes={"100vw"}
                                    style={{ width: "100%", height: "100%" }}
                                />
                            </div>
                            <h4>Expands beyond borders</h4>
                            <p>
                                Break beyond language barrier, Personalize your agent and customer experience in 20+ language
                            </p>
                        </div>

                        <div>
                            <div>
                                <Image
                                    src={"/Images/sbm/iconone.webp"}
                                    alt={"img"}
                                    width={"0"}
                                    height={"0"}
                                    sizes={"100vw"}
                                    style={{ width: "100%", height: "100%" }}
                                />
                            </div>
                            <h4>Secure Your data</h4>
                            <p>
                                Use a robust and secure software thats GDPR complaints                        </p>
                        </div>
                    </div>
                </div>
                <div className={styles.sMBMoreImage} >
                    <Image
                        src={"/Images/sbm/imagefive.webp"}
                        alt={"img"}
                        width={"0"}
                        height={"0"}
                        sizes={"100vw"}
                        style={{ width: "100%", height: "100%" }}
                    />
                </div>
            </div>
        </div>
    )
}