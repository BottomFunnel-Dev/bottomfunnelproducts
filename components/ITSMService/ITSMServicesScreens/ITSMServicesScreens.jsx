import React from 'react'
import styles from "./ITSMServicesScreens.module.css"
import Image from 'next/image'

export const ITSMServicesScreens = () => {
  return (
    <div>
     <div className={styles.ITSMServicesScreensmaindiv}>
            <div className={styles.ITSMServicesScreensmaindivcontent}>
             <h3>Empower end-users with

consumer-grade experiences</h3>
<p>Meet employees in the channel of their choice, enabled with an 

enriched knowledge base and enhanced self-service experience to

access all IT services through a unified service catalog.</p>
            </div>
            <div className={styles.ITSMServicesScreensmaindivimage}>
            <Image
                  src={"/Images/ITSMService/screen1.webp"}
                  alt={"Image"}
                  width={"0"}
                  height={"0"}
                  sizes={"100vw"}
                  style={{ width: "100%", height: "100%" }}
                />
            </div>
        </div>

        <div className={styles.ITSMServicesScreensmaindivone}>
            <div className={styles.ITSMServicesScreensmaindivcontent}>
             <h3>Align your IT infrastructure 

to ITIL processes</h3>
<p>Equip your service management platform with ITIL-aligned

capabilities to respond to changes faster, improve reliability, and

proactively predict and prevent issues</p>
            </div>
            <div className={styles.ITSMServicesScreensmaindivimage}>
            <Image
                  src={"/Images/ITSMService/screen2.webp"}
                  alt={"Image"}
                  width={"0"}
                  height={"0"}
                  sizes={"100vw"}
                  style={{ width: "100%", height: "100%" }}
                />
            </div>
        </div>

        <div className={styles.ITSMServicesScreensmaindiv}>
            <div className={styles.ITSMServicesScreensmaindivcontent}>
             <h3>Make informed decisions with

powerful analytics</h3>
<p>Track and assess agent performance and service desk metrics 

holistically with analytics, build reports from scratch, and get quick

insights using curated reports.</p>
            </div>
            <div className={styles.ITSMServicesScreensmaindivimage}>
            <Image
                  src={"/Images/ITSMService/screen3.webp"}
                  alt={"Image"}
                  width={"0"}
                  height={"0"}
                  sizes={"100vw"}
                  style={{ width: "100%", height: "100%" }}
                />
            </div>
        </div>

        <div className={styles.ITSMServicesScreensmaindivone}>
            <div className={styles.ITSMServicesScreensmaindivcontent}>
             <h3>Increase agent efficiency </h3>
             <p>Create contextual and intelligent experiences through AI to improve

process efficiency and service agility. Enable agents with ML-

powered suggestions and responses, and put time back into their

day so they can focus on more strategic IT initiatives.</p>
            </div>
            <div className={styles.ITSMServicesScreensmaindivimage}>
            <Image
                  src={"/Images/ITSMService/screen4.webp"}
                  alt={"Image"}
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
