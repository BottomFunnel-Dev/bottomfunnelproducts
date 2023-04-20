import React from "react";
import Image from "next/image";
import styles from "./CommunityConnections.module.css";

export const CommunityConnections = () => {
  const data = [
    { count1: 8888, text1: "Topics" },
    { count1: 23507, text1: "Replies" },
    { count1: 22472, text1: "Members" },
  ];
  const p1 = [
    { p: "Build Meaningful Connections" },
    { p: "Learn Something new today" },
    { p: "Get recognized for your contributions" },
  ];
  return (
    <div className="container">
      <div className={styles.CommunityConnectionsMainDiv}>
        <div className={styles.CommunityConnectionsContent}>
          <div className={styles.CommunityConnectionsSpanContent}>
            {data.map((item) => {
              return (
                <p>
                  <strong>{item.count1}</strong>&nbsp;&nbsp;
                  {item.text1}
                </p>
              );
            })}
          </div>
          <div className={styles.CommunityConnectionsListContent}>
            {p1.map((item) => {
              return (
                <p>
                  <Image
                    src="/Images/community/tick 1.png"
                    alt={"image"}
                    width={"0"}
                    height={"0"}
                    sizes={"100vw"}
                    style={{ width: "5%", height: "25%" }}
                  />
                  &nbsp;&nbsp;&nbsp;
                  {item.p}
                </p>
              );
            })}
          </div>
          <div>
            <button className={styles.CommunityUserNetworkButton2}>
              Start A Discussion
            </button>
          </div>
        </div>
        <div className={styles.CommunityConnectionsImage}>
          <Image
            src="/Images/community/Group3.png"
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
