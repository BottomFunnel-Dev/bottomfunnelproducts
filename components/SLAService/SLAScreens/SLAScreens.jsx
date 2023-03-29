import React from 'react'
import styles from "./SLAScreens.module.css"
import Image from 'next/image'

export const SLAScreens = () => {
  return (
    <div>
        <div className={styles.ITSMServicesScreensmaindiv}>
            <div className={styles.ITSMServicesScreensmaindivcontent}>
             <h3>Multiple service level targets</h3>
<p>Create multiple SLA policies to align to your team’s needs, and set expectations about your service delivery to employees.</p>
<p>Define task deadlines based on different criteria be it source, type, group, or ticket priority and ensure timely resolution of issues.</p>
            </div>
            <div className={styles.ITSMServicesScreensmaindivimage}>
            <Image
                  src={"/Images/SLAServicephotos/screen1.webp"}
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
             <h3>Manage SLA violations with automation</h3>
<p>Escalate tickets automatically or send notifications about SLA breaches by pre-defining automation rules to suit your ticket priorities.</p>
<p>Gain visibility into your service delivery by keeping track of your performance against SLAs.</p>
            </div>
            <div className={styles.ITSMServicesScreensmaindivimage}>
            <Image
                  src={"/Images/SLAServicephotos/screen2.webp"}
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
             <h3>Set SLAs for global teams
</h3>
<p>Support teams that work in different time zones or business hours by setting service level targets according to their business centers.</p>
<p>Easily assign different hours to the right groups and even tweak their calendars according to the global holiday list for seamless service desk operations.</p>
            </div>
            <div className={styles.ITSMServicesScreensmaindivimage}>
            <Image
                  src={"/Images/SLAServicephotos/screen3.webp"}
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
