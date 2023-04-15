import React from "react";
import Image from "next/image";
import styles from "./OllyAiAdvantage.module.css";

export default function OllyAiAdvantage() {
  const advantage = [
    {
      image: "/Images/olly-ai/icon1.png",
      t1: "Highly Personalizable and adaptable",
      t2: "Olly AI Skills are built to constantly learn and adapt to your business needs, offering enterprise-grade personalization minus the complexity or pricing.",
    },
    {
      image: "/Images/olly-ai/icon2.png",
      t1: "Out of the box, into your business",
      t2: "Olly AI Skills are quick to deploy, easy to use, and highly customizable, and help you deliver proactive and intent-driven customer engagement right from the get-go.",
    },
    {
      image: "/Images/olly-ai/icon3.png",
      t1: "Powered by scale and precision",
      t2: "Olly AI's 30,000+ ML models are trained on diverse big-data, and together with advanced NLP models, deliver skills that are laser-focused on sales, support, and marketing use-cases.",
    },
  ];

  return (
    <div className={styles.OllyAiAdvantageMainDiv}>
      <h2>The Bottom Funnel Neo Advantage</h2>

      <div className={styles.OllyAiAdvantageInnerDiv}>
        {advantage.map((item) => {
          return (
            <div  className={styles.OllyAiAdvantageInnerBoxDiv}>
              <div className={styles.OllyAiAdvantageInnerImageDiv}>
                <Image
                  src={item.image}
                  alt={"image"}
                  width={"0"}
                  height={"0"}
                  sizes={"100vw"}
                  style={{ width: "100%", height: "100%" }}
                />
              </div>
              <h4>{item.t1}</h4>
              <p>{item.t2}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
