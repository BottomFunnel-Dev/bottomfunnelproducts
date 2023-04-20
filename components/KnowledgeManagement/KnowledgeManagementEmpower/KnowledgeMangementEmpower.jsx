import React from "react";
import styles from "./KnowledgeManagementEmpower.module.css";
import Image from "next/image";

export const KnowledgeManagementEmpower = () => {
  return (
    <div className={styles.KnowledgeManagementEmpowermaindiv}>
      <h2><span>Empower </span>
         your users</h2>
      <div className={styles.KnowledgeManagementEmpowerfirstDiv}>
        <div className={styles.KnowledgeManagementEmpowerone}>
          <h3>Empower users with information</h3>
         <div className={styles.KnowledgeManagementEmpowerImage1}>
         <Image
            src={"/Images/KnowledgeManagement/2.1.png"}
            alt={"image"}
            width={"0"}
            height={"0"}
            sizes={"100vw"}
            style={{ width: "100%", height: "100%" }}
          />
         </div>
          <p>
            Build a comprehensive knowledge base with solutions to incidents and
            problems that can be used by both technicians and employees alike.
            Employees can find answers to their issues on their own from the
            self-service portal with a simple search without having to wait for
            a technician to get back to them.
          </p>
        </div>
        <div className={styles.KnowledgeManagementEmpowertwo}>
          <h3>Reduce tickets with smart suggestions</h3>
          <Image
            src={"/Images/KnowledgeManagement/2.2.png"}
            alt={"image"}
            width={"0"}
            height={"0"}
            sizes={"100vw"}
            style={{ width: "100%", height: "100%" }}
          />
          <p>
            Deflect tickets altogether by leveraging auto-suggest in the portal
            that proactively suggests solutions to issues even before the
            employee raises a ticket. Smart-suggest also allows technicians to
            easily find solutions that can be attached to ticket responses at
            the click of a button.
          </p>
        </div>
      </div>
      <div className={styles.KnowledgeManagementEmpowersecondDiv}>
        <div className={styles.KnowledgeManagementEmpowerContent}>
          <h3>Reduce tickets with smart suggestions</h3>

          <p>
            Deflect tickets altogether by leveraging auto-suggest in the portal
            that proactively suggests solutions to issues even before the
            employee raises a ticket. Smart-suggest also allows technicians to
            easily find solutions that can be attached to ticket responses at
            the click of a button.
          </p>
        </div>
        <div className={styles.KnowledgeManagementEmpowerImage}>
          <Image
            src={"/Images/KnowledgeManagement/2.3.png"}
            alt={"image"}
            width={"0"}
            height={"0"}
            sizes={"100vw"}
            style={{ width: "100%", height: "100%" }}
          />
        </div>
      </div>
    </div>
  );
};
