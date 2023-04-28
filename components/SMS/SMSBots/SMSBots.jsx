
import React from 'react'
import styles from "./SMSBots.module.css";
import Image from 'next/image';
export const SMSBots = () => {
    return (
        <div className={styles.botsrParent}>
            <h2>Enable 27x4 support with bots and automation </h2>
            <div className={styles.smscustomerParentfirstchild}>

               
                <div className={styles.botsrParentParentfirstchildImage}>
                    <Image
                        src={"/Images/sms/imagethree.webp"}
                        alt={"img"}
                        width={"0"}
                        height={"0"}
                        sizes={"100vw"}
                        style={{ width: "100%", height: "100%" }}
                    />
                </div>
                <div className={styles.botsrParentParentfirstchildContent}>

<p>
    Leverage AI-powered bots and automation to streamline your support tasks . Combine this with SMS to offer world - class customer service .With Bottom funnel chat:
    Leverage AI-powered bots and automation to streamline your support tasks .

    Leverage AI-powered bots and automation to streamline your support tasks . Combine this with SMS to offer world - class customer service .With Bottom funnel chat:
    Leverage AI-powered bots and automation to streamline your support tasks .
</p>


<li  className={styles.botsrParentParentfirstchildContentlist}>
    Empower your teams and bots to work together and provide round-the-clock service via SMS .
</li>
<li className={styles.botsrParentParentfirstchildContentlist}>
    Deflect repeitative question and free up your agents time to solve complex queries.                      
    
  </li>


</div>

            </div>
        </div>
    )
}