import React from "react";
import styles from "./TickettingInbox.module.css";
import Image from 'next/image';

export const TickettingInbox = () => {
  return (
    <div className={styles.tickettingInboxContainer}>
      <div className={styles.ticketInboxHeading}>
        <h2>Team Inbox</h2>
        <p>
          Unlike Email Our Ticketing system is designed for team collaboration
          and agent productivity.This means that you can do so much more than
          just sending replies. prioritize every ticket based on the keywords.
          Assign every ticket to a specific agent and group so there is no
          confusion about who should be working on which ticket.
        </p>
      </div>
      <div className={styles.tickettingInboxDataDiv}>
          <div className={styles.tickettingInboxData}>
              <div className={styles.tickettingInboxDataDiv1}>
                 Collision detection
              </div>
              <div className={styles.tickettingInboxDataDiv2}>
                  See who else is viewing or replying to the ticket.
              </div>
              <div className={styles.tickettingInboxDataDivarrow}>
              <Image
                src={"https://d3op2l77j7wnti.cloudfront.net/Images/ticketingPhotos/Arrow1.png"}
                alt={"icon"}
                width={"0"}
                height={"0"}
                sizes={"100vw"}
                style={{ width: "100%", height: "100%" ,objectFit:"Contain"}}
              />        
              </div>
          </div>
          <div className={styles.tickettingInboxData1}>
             <div className={styles.tickettingInboxDataDiv3}>
              <Image
                src={"https://d3op2l77j7wnti.cloudfront.net/Images/ticketingPhotos/Arrow2.png"}
                alt={"icon"}
                width={"0"}
                height={"0"}
                sizes={"100vw"}
                style={{ width: "100%", height: "100%" ,objectFit:"Contain"}}
              />        
              </div>
              <div className={styles.tickettingInboxDataDiv1}>
                 Canned responses
              </div>
              <div className={styles.tickettingInboxDataDiv2}>
                  Save replies to common tickets and reuse them.
              </div>
          </div>
          <div className={styles.tickettingInboxData}>
              <div className={styles.tickettingInboxDataDiv1}>
                 Smart notifications
              </div>
              <div className={styles.tickettingInboxDataDiv2}>
                  Get notified within the tool about ticket updates.
              </div>
              <div className={styles.tickettingInboxDataDivarrow}>
              <Image
                src={"https://d3op2l77j7wnti.cloudfront.net/Images/ticketingPhotos/Arrow1.png"}
                alt={"icon"}
                width={"0"}
                height={"0"}
                sizes={"100vw"}
                style={{ width: "100%", height: "100%" ,objectFit:"Contain"}}
              />        
              </div>
          </div>
          <div className={styles.tickettingInboxData1}>
             <div className={styles.tickettingInboxDataDiv3}>
              <Image
                src={"https://d3op2l77j7wnti.cloudfront.net/Images/ticketingPhotos/Arrow2.png"}
                alt={"icon"}
                width={"0"}
                height={"0"}
                sizes={"100vw"}
                style={{ width: "100%", height: "100%" ,objectFit:"Contain"}}
              />        
              </div>
              <div className={styles.tickettingInboxDataDiv1}>
                 Custom ticket views
              </div>
              <div className={styles.tickettingInboxDataDiv2}>
                 Choose whichh tickets you want to see first.
              </div>
          </div>
          <div className={styles.tickettingInboxData}>
              <div className={styles.tickettingInboxDataDiv1}>
                 Merging tickets
              </div>
              <div className={styles.tickettingInboxDataDiv2}>
                  Merge tickets about the same issues into one.
              </div>
              <div className={styles.tickettingInboxDataDivarrow}>
              <Image
                src={"https://d3op2l77j7wnti.cloudfront.net/Images/ticketingPhotos/Arrow1.png"}
                alt={"icon"}
                width={"0"}
                height={"0"}
                sizes={"100vw"}
                style={{ width: "100%", height: "100%" ,objectFit:"Contain"}}
              />        
              </div>
          </div>
          <div className={styles.tickettingInboxData1}>
             <div className={styles.tickettingInboxDataDiv3}>
              <Image
                src={"https://d3op2l77j7wnti.cloudfront.net/Images/ticketingPhotos/Arrow2.png"}
                alt={"icon"}
                width={"0"}
                height={"0"}
                sizes={"100vw"}
                style={{ width: "100%", height: "100%" ,objectFit:"Contain"}}
              />        
              </div>
              <div className={styles.tickettingInboxDataDiv1}>
                 Activity log
              </div>
              <div className={styles.tickettingInboxDataDiv2}>
                  View every agent and system activity on ticket.
              </div>
          </div>
      </div>
    </div>
  );
};
