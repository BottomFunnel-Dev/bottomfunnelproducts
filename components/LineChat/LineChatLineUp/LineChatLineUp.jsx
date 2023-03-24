import React from 'react'
import styles from "./LineChatLineUp.module.css";
import Image from 'next/image';
export const LineChatLineUp = () => {
    return (
        <div className={styles.lineupcustomerParent}>
            <h1>Messaging is the new way to interact with your customers</h1>
            <div className={styles.lineupcustomerParentfirstchild}>
                <div className={styles.lineupcustomerParentfirstchildImage}>
                    <Image
                        src={"/Images/LineChat/imageone.webp"}
                        alt={"img"}
                        width={"0"}
                        height={"0"}
                        sizes={"100vw"}
                        style={{ width: "100%", height: "100%" }}
                    />
                </div>
                <div className={styles.lineupcustomerParentfirstchildContent}>
                    <h2>Automate with bots</h2>
                    <p>
                        Deploye your chatbots on LINE so tour customers can get instant responses to thier question 20*7. Engage and delight your customers by automateing resolution .With seamliss and contextual agent handovers,you can save time for both customers and agent .
                    </p>

                </div>
            </div>


            <div className={styles.lineupcustomerParentsecchild}>

                <div className={styles.lineupcustomerParentsecchildContent}>
                    <h2>Provide efoortless experiences</h2>
                    <p>
                        Connect your LINE accounts and bring all your LINE conversation , including images and hyperlinks, into your Fresschat.Handle all your conversions from one place with 'Team inbox' View and prioritize conversation that neend immediate attention -let you customers know you're there for them
                    </p>

                </div>
                <div className={styles.lineupcustomerParentsecchildImage}>
                    <Image
                        src={"/Images/LineChat/imagetwo.webp"}
                        alt={"img"}
                        width={"0"}
                        height={"0"}
                        sizes={"100vw"}
                        style={{ width: "100%", height: "100%" }}
                    />
                </div>
            </div>



            <div className={styles.lineupcustomerParentthirdchild}>
                <div className={styles.lineupcustomerParentthirdchildImage}>
                    <Image
                        src={"/Images/LineChat/imagethree.webp"}
                        alt={"img"}
                        width={"0"}
                        height={"0"}
                        sizes={"100vw"}
                        style={{ width: "100%", height: "100%" }}
                    />
                </div>
                <div className={styles.lineupcustomerParentthirdchildContent}>
                    <h2>Keep it contextual</h2>
                    <p>
                        map every LINE account to the relevant Topic and Group inside Bottom Funnel chat so the conversations are routed to the right agents agents in your team. This way customers reaches your suppot for billing-related issues are  utomating routed to the Bitting group.

                    </p>

                </div>
            </div>



        </div>
    )
}