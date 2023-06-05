import React from "react";
import styles from "./ActiveGoals.module.css";
import Image from "next/image";

export const ActiveGoals = () => {
  const data = [
    {
      img: "https://d3op2l77j7wnti.cloudfront.net/Images/customersuccesshomepagephotos/logo1.png",
      hd: "Increase up-sells and expansions",
      p: "Automatically alert your team to opportunities and convert more trials,upsells,and cross-sells.",
    },
    {
      img: "https://d3op2l77j7wnti.cloudfront.net/Images/customersuccesshomepagephotos/logo2.png",
      hd: "Increase up-sells and expansions",
      p: "Use data to intervene and engage with the right customers at the right time to achieve business outcomes for your customer and your team.",
    },
    {
      img: "https://d3op2l77j7wnti.cloudfront.net/Images/customersuccesshomepagephotos/logo3.png",
      hd: "Reduce churn and improve renewal rates",
      p: "Understand why customers churn with early warnings and manage renewals successfully all in real time.",
    },
  ];
  return (
    <div className={styles.ActiveGoalsmaindiv}>

        <div className={styles.ActiveGoalsmaindivcontain}>
          <h2>
            Take a data-driven approach to proactively help customers achieve
            their goals, faster.
          </h2>
          <p>
            You can't improve what you don't measure. Bottom Funnel Customer
            Success provides full visibility into customer health metrics with
            proactive workflow for onboardings,renewals, and beyonnd. Alert
            customer support teams before it's too late and protect your bittom
            line.
          </p>
        </div>
        <div className={styles.ActiveGoalsmaindivcards}>
          <div className={styles.ActiveGoalsmaindivcardsdiv}>
            {data.map((e) => {
              return (
                <div className={styles.ActiveGoalsmaindivcardsdivinner}>
                  <h5>{e.hd}</h5>
                  <div className={styles.ActiveGoalsmaindivcardsdivinnerImage}>
                    <Image
                      src={e.img}
                      alt={"image"}
                      width={"0"}
                      height={"0"}
                      sizes={"100vw"}
                      style={{ width: "100%", height: "100%" }}
                    />{" "}
                  </div>
                  <p>{e.p}</p>
                </div>
              );
            })}
          </div>
        </div>
     
    </div>
  );
};
