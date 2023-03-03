import React from "react";
import styles from "./TeamInboxFeatures.module.css";
import Image from "next/image";

export default function TeamInboxFeatures() {
    const inboxdata=[
  
        {
            img:"/Images/MarketerTeamInbox/components/feature1.webp",
            title:"Multiple channels. One inbox.",
            desc:"Manage and reply to conversations from one workspace,regardless of the channel - WhatsApp, Apple Business Chat,Facebook, LINE, website, mobile app, and more."
        },
        {
            img:"/Images/MarketerTeamInbox/components/feature2.webp",
            title:"No alt-tabbing. Just dabbing.",
            desc:"Stop switching between screens to get information about the customer. Team Inbox empowers agents with all the context they need in one place using native and third-party app integrations."
        },
    ]
  return (
    <div className={styles.TeamInboxFeatureMain}>
      <h2>A workspace that makes your agents want to come to work</h2>
      <p>Customer service can be stressful, whether from home or office. Freshchat's Team Inbox makes an agent's workday easier with an intuitive interface loaded with well-thought-out features.</p>
      {inboxdata.map((e)=>{
        return(
            <div className={styles.TeamInboxFeaturediv}>
        <div className={styles.TeamInboxFeatureimg}>
          <Image
            src={e.img}
            alt={"img"}
            width={"0"}
            height={"0"}
            sizes={"100vw"}
            style={{ width: "100%", height: "100%", objectFit: "contain" }}
          />
        </div>
        <div className={styles.TeamInboxFeaturetext}>
          <h2>{e.title}</h2>
          <p>{e.desc}</p>
        </div>
      </div>
        )
      })}
      
    </div>
  );
}
