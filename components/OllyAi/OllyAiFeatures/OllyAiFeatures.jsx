import React from "react";
import Image from "next/image";
import styles from "./OllyAiFeatures.module.css";

export default function OllyAiFeatures() {
  const features = [
    {
      image: "/Images/olly-ai/sc-1.png",
      hd: "Work smarter and faster",
      par: "Olly's Artificial Intelligence works to make you the real genius. From providing instant and accurate suggestions to your customers to freeing up your support agents' time for more strategic stuff, Olly AI empowers you to do your best work.",
    },
    {
      image: "/Images/olly-ai/sc-2.png",
      hd: "Predict issues and automate resolution",
      par: "Olly's machine learning-based predictions take the guesswork out of your work. Olly analyzes past interactions to either pick the best response for instant resolution or hand-off the conversation to a human agent.",
    },
    {
      image: "/Images/olly-ai/sc-3.png",
      hd: "Discover opportunities and make better decisions",
      par: "Olly is your personal sales assistant. It combines AI and analytics to provide real-time insights, analyses your CRM data to make accurate forecasts, and automates most of the mundane tasks so your sales team can 'always be closing'.",
    },
  ];

  return (
    <div className={styles.OllyAiFeaturesMainDiv}>
      {features.map((item) => {
        return (
          <div className={styles.OllyAiFeaturesInnerDiv}>
            <div className={styles.OllyAiFeaturesImageDiv}>
              <Image
                src={item.image}
                alt={"image"}
                width={"0"}
                height={"0"}
                sizes={"100vw"}
                style={{ width: "100%", height: "100%" }}
              />
            </div>

            <div className={styles.OllyAiFeaturesContentDiv}>
              <h2>{item.hd}</h2>
              <p>{item.par}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
