import styles from "./SmallBusinessSupport.module.css"
import Image from "next/image";
export const SmallBusinessSupport = () => {
    return (
        <div className={styles.SmallBusinessSupportParent} >
            <h1> why do small business need a help desk software to manage customer support?</h1>
            <p>When running a small business, every decision you make shapes your customers' experience and affects their loyalty to your brand.
                You have to do absolutely everything you can to earn their trust - answer questions, take special requests, and sometimes be there for
                them round the clock to show them that you care.</p>
            <p>When operating on a shoestring budget and a lean support team, you might think answering customer questions out of a shared
                inbox is the most viable option to provide customer support. However, the limitations of using a shared inbox are only discoverable
                when your business starts to grow</p>
            <p> When operating on a shoestring budget and a lean support team, you might think answering customer questions out of a shared
                inbox is the most viable option to provide customer support. However, the limitations of using a shared inbox are only discoverable
                when your business starts to grow</p>
            <div className={styles.SmallBusinessSupportParentonlydiv}>
                <div className={styles.SmallBusinessSupportParentonlydivfirstchild}>
                    <div>
                        <div>
                            <div>
                                <Image
                                    src={"/Images/Small-Business/Icon1.png"}
                                    alt={"img"}
                                    width={"0"}
                                    height={"0"}
                                    sizes={"100vw"}
                                    style={{ width: "70%", height: "90%" }}
                                />
                            </div>

                            <h5>Delayed response</h5>
                        </div>
                        <p>When operating on a shoestring budget and a lean support team, you might think answering customer questions out of a shared
                            inbox is the most viable option to provide customer support. However, the limitations of using a shared inbox are only discoverable
                            when your business starts to grow</p>
                    </div>
                    <div>
                        <div>
                            <div>
                                <Image
                                    src={"/Images/Small-Business/Icon2.png"}
                                    alt={"img"}
                                    width={"0"}
                                    height={"0"}
                                    sizes={"100vw"}
                                    style={{ width: "70%", height: "90%" }}
                                />
                            </div>

                            <h5>Duplicate agent effort
                            </h5>
                        </div>
                        <p>Shared inboxes do not offer an easy way to keep track of new
                            customer conversations, t he ones t hat are open, and t he ones
                            t hat have been resolved. Due to lack of visibility, two agents
                            might end up responding to t he same customer conversation and
                            t his can lead to a duplication of effort.
                        </p>
                    </div>
                </div>
                <div className={styles.SmallBusinessSupportParentonlydivsecchild}>
                    <div>
                        <div>
                            <div>
                                <Image
                                    src={"/Images/Small-Business/Icon3.png"}
                                    alt={"img"}
                                    width={"0"}
                                    height={"0"}
                                    sizes={"100vw"}
                                    style={{ width: "70%", height: "90%" }}
                                />
                            </div>

                            <h5>Restrained collaboration
                            </h5>
                        </div>
                        <p>To resolve some customer conversations, you might require
                            additional help from ot her teams, such as t he product or billing
                            team. A shared inbox s limited capabilities such as simply
                            for warding a conversation to t he concerned person might not be
                            t he most efficient way to collaborate across teams seamlessly.</p>
                    </div>
                    <div>
                        <div>
                            <div>
                                <Image
                                    src={"/Images/Small-Business/Icon4.png"}
                                    alt={"img"}
                                    width={"0"}
                                    height={"0"}
                                    sizes={"100vw"}
                                    style={{ width: "70%", height: "90%" }}
                                />
                            </div>

                            <h5>Reduced agent productivity
                            </h5>
                        </div>
                        <p>Some customer conversations might include repetitive questions
                            or basic how to doubts. If your team doesn t have an effor t less
                            way of tackling t hese basic questions, typing out t he same
                            message over and over again will eat into t heir time
                        </p>
                    </div>
                </div>
            </div>
            <p>Some customer conversations might include repetitive questions
                or basic how to doubts. If your team doesn t have an effor t less
                way of tackling t hese basic questions, typing out t he same
                message over and over again will eat into t heir time</p>
            <p>Once you have identified your team s goals, challenges, and expectations, it s time to compare help desk options on a feature level.
                The ideal help desk software solution for your small business should have the relevant features that make it easier for your support
                team to offer faster, personalized, and seamless customer experiences</p>
        </div>
    );
}