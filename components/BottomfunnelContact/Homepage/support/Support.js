import React from "react";
import styles from "./support.module.css";
export default function Support() {
  const data = [
    {
      title: "Intutive and scalable",
      desc: "From setup to daily operations and scalling up achieve everything in a few intutive clicks",
    },
    {
      title: "Conversation made easy",
      desc: "Delight your customers with fast answer by using advanced voice AI capabilities",
    },
    {
      title: "Effortless Performance ",
      desc: "Get a complete view of your contact center performance and optimize operations easily",
    },
  ];

  return (
    <div className={styles.support}>
      <h1>No missed calls, lower wait times, and always available support</h1>
      <p>
        Bottomfunnnel Contact Center is a minimum-fuss, maximum-delight voice
        platform that's right-sized for your business
      </p>

      <div className={styles.supportbox}>
        {data.map((item, index) => (
          <div key={index}>
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
