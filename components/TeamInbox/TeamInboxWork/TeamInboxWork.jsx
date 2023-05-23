import React from 'react'
import styles from "./TeamInboxWork.module.css"
import Image from 'next/image'

export default function TeamInboxWork () {
  return (
    <div className={styles.TeamInboxWorkmain}>
        <h3> Your team's gonna love this</h3>
        <p> An agent’s workspace is a big part of their workday. So we’ve built Team Inbox keeping them in mind, packed with features that seem small but make a big difference to their efficiency and productivity.</p>
        <div className={styles.TeamInboxWorkimg}>
        <Image
          src={"https://d3op2l77j7wnti.cloudfront.net/Images/MarketerTeamInbox/components/Layer_1.webp"}
          alt={"img"}
          width={"0"}
          height={"0"}
          sizes={"100vw"}
          style={{ width: "100%", height: "100%", objectFit: "contain" }}
        />
        </div>
    </div>
  )
}
