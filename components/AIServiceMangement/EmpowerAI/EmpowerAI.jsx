import React from 'react'
import styles from "./EmpowerAI.module.css"
import Image from 'next/image'

export const EmpowerAI = () => {
  return (
    <div>
      <div className={styles.EmpowerAImaindivheading}>
        <h2>Empower your support teams with Freddy AI</h2>
      </div>

      <div className={styles.EmpowerAImaindiv}>
        <div className={styles.EmpowerAImaindivinner}>
          <div className={styles.EmpowerAImaindivimage}>
            <Image
              src={"/Images/AIservicemanagement/image 9.webp"}
              alt={"Image"}
              width={"0"}
              height={"0"}
              sizes={"100vw"}
              style={{ width: "100%", height: "100%" }}
            />
          </div>

          <h5>Increase IT NPS</h5>

          <p>
            Enable self-service on any channel. Quickly get answers and insights to measure and improve customer satisfaction
          </p>
        </div>

        <div className={styles.EmpowerAImaindivinner}>
          <div className={styles.EmpowerAImaindivimage}>
            <Image
              src={"/Images/AIservicemanagement/image 10.webp"}
              alt={"Image"}
              width={"0"}
              height={"0"}
              sizes={"100vw"}
              style={{ width: "100%", height: "100%" }}
            />
          </div>

          <h5>
            Increase agent productivity
          </h5>

          <p>
            Ease your agent’s workload and improve their productivity by solving issues quickly at scale with machine learning based
            intelligent and relevant recommendations
          </p>
        </div>

        <div className={styles.EmpowerAImaindivinner}>
          <div className={styles.EmpowerAImaindivimage}>
            <Image
              src={"/Images/AIservicemanagement/image 11.webp"}
              alt={"Image"}
              width={"0"}
              height={"0"}
              sizes={"100vw"}
              style={{ width: "100%", height: "100%" }}
            />
          </div>

          <h5>Decrease ticket handling time</h5>

          <p>
            Reduce handling time significantly by automatically categorizing, prioritizing and routing tickets
          </p>
        </div>
      </div>
    </div>
  );
};
