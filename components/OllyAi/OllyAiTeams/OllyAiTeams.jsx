import React from "react";
import Image from "next/image";
import styles from "./OllyAiTeams.module.css";

export default function OllyAiTeams() {
  const UXdata = [
    {
      image: "/Images/olly-ai/image1.png",
      t1: "Olly AI for CX",
      t2: "Automate resolutions with intelligent chatbots powered by Olly AI and save time for your customers and agents.",
    },
    {
      image: "/Images/olly-ai/image2.png",
      t1: "Olly AI for CRM",
      t2: "Enable your sales reps to deliver highly personalized customer engagement with AI-powered actionable insights.",
    },
    {
      image: "/Images/olly-ai/image3.png",
      t1: "Olly AI for IT",
      t2: "Empower your ITOps and service desk agents with smart AI recommendations, helping them improve their productivity.",
    },
  ];
  return (
    <div className={styles.OllyAiTeamsMainDiv}>
      <h2>Olly AI boosts performance across teams</h2>

      <div className="container my-4">
        <div className="row d-flex justify-content-center">
          {UXdata.map((item) => {
            return (
              <div className="col-md-3 mx-4 ">
                <div className={styles.OllyAiTeamsContent}>
                  <div className={styles.Image}>
                    <Image
                      src={item.image}
                      alt={"image"}
                      width={"0"}
                      height={"0"}
                      sizes={"100vw"}
                      style={{ width: "100%", height: "100%" }}
                    />
                  </div>
                  <h5>{item.t1}</h5>
                  <p>{item.t2}</p>

                  <div>
                    <button className={styles.OllyAiTeamsButton}>
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
