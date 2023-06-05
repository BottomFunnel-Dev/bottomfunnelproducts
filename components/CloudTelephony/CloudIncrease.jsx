import React from "react";
import styles from "./CloudIncrease.module.css";
import Image from "next/image";

export const CloudIncrease = () => {
  const data = [
    {
      img: "/Images/cloudtelephony/contextual conversations.png",
      hd: "Win deals faster with contextual conversations",
      p: "Gain full context about your prospects with the Recent Activities widget in Bottom Funnel sales. Access call logs call notes and recordings to relevantly communicate with prospects, follow up on previous conversations, etc, and improve customer experiences.You can also seamkessly transfer calls to colleagues with full context.",
    },
    {
      img: "/Images/cloudtelephony/analyze.png",
      hd: "Analyze and improve your sales calls",
      p: "Phone calls are one of the key performance drivers in your sales process. Easily track and analyze all the metrics that reflect the efficiency of your sales calls.Assess your salespeople's performance based on the calls they make, your business processes and customer interactions at every stage of the call and optimize them.",
    },
    {
      img: "/Images/cloudtelephony/contextual conversations.png",
      hd: "Eliminate manual data entry and focus on selling",
      p: "Eliminate manually entering data into your CRM and save time.With your Bottom Funnel sales account,you can automatically log sales calls and add call logs in your CRM.You can also map calls that you receive on your phone number to existing or new contacts add notes about the call and do more.",
    },
  ];
  return (
    <div className={styles.cloudincreasesalesmainboxes}>
      <div className={styles.cloudincreasesalestextboxupper}>
        <h1>
          Increase sales efficiency with built-in{" "}
          <span className={styles.specialcolor}>cloud telephony</span>
        </h1>
        <p>
          With the built-in cloud telephony capability in Bottom Funnel sales
          ,you can efficiently handle calls, voicemails and messages for your
          business. Easily purchase virtual phone number in 90+ countries for
          your salespeople across offices and teams.With Bottom Funnel sales
          your salespeople can now directly make calls from their laptops or
          smart devices. Monitor usage and understand your teams performance on
          calls with extensive analytics.
        </p>
      </div>
      <div className={styles.cloudincreasesalesscreens}>
        {data.map((e) => {
          return (
            <div className={styles.cloudincreasesalesboxflexingdiv}>
              <div className={styles.cloudincreasesalesboxflexingdivleft}>
                <h2>{e.hd}</h2>
                <p>{e.p}</p>
              </div>

              <div className={styles.cloudincreasesalesboxflexingdivright}>
                <Image
                  src={e.img}
                  alt={"image"}
                  width={"0"}
                  height={"0"}
                  sizes={"100vw"}
                  style={{ width: "100%", height: "100%" }}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
