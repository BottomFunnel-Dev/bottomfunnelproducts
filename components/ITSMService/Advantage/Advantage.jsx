import React from 'react'
import styles from "./Advantage.module.css"
import Image from 'next/image'

export const Advantage = () => {
  return (
    <div>
        <div className={styles.Advantagemaindivheading}>
        <h2>The Bottom Funnel Service Advantage</h2>
     </div>
     <div className={styles.Advantagemaindiv}>
        <div className={styles.Advantagemaindivinner}>
            <div className={styles.Advantagemaindivimage}>
            <Image
                  src={"/Images/ITSMService/Group 7164.webp"}
                  alt={"Image"}
                  width={"0"}
                  height={"0"}
                  sizes={"100vw"}
                  style={{ width: "100%", height: "100%" }}
                />
            </div>
            <h5>Robust Automations</h5>
            <p>Eliminate repetitive tasks and manual
processes that lead to productivity
hurdles for your IT team and drive
service efficiency using no-code
workflows and powerful automations.</p>
        </div>

        <div className={styles.Advantagemaindivinner}>
            <div className={styles.Advantagemaindivimage}>
            <Image
                  src={"/Images/ITSMService/Group 7165.webp"}
                  alt={"Image"}
                  width={"0"}
                  height={"0"}
                  sizes={"100vw"}
                  style={{ width: "100%", height: "100%" }}
                />
            </div>
            <h5>Intelligent Service Management</h5>
            <p>Leverage the power of our enterprisegrade AI engine Freddy by making
smarter service desk decisions,
increasing agent productivity, and
elevating employee experiences.</p>
        </div>

        <div className={styles.Advantagemaindivinner}>
            <div className={styles.Advantagemaindivimage}>
            <Image
                  src={"/Images/ITSMService/Group 7166.webp"}
                  alt={"Image"}
                  width={"0"}
                  height={"0"}
                  sizes={"100vw"}
                  style={{ width: "100%", height: "100%" }}
                />
            </div>
            <h5>Extensible Platform</h5>
            <p>Create out-of-the-box-connectors,
SDKs, and API configurations to scale
without dependency on our
integrated Marketplace and Neo
Platform.</p>
        </div>
     </div>
    </div>
  )
}
