import React from 'react'
import styles from "./AIScreens.module.css"
import Image from 'next/image'

export const AIScreens = () => {
  return (
    <div>
      <div className={styles.AIScreensmaindiv}>
        <div className={styles.AIScreensmaindivcontent}>
          <h3>Delight your employees</h3>

          <p>
            With Freshservice’s AI-powered virtual agent pre-trained on the most common ITSM and ESM use cases, your employees
            can get instant response and resolution to their IT issues, thus freeing up your agents to solve more complex and
            high-value issues.
          </p>


          <p>Configure your virtual agent on Slack or Microsoft Teams to get started.</p>
        </div>

        <div className={styles.AIScreensmaindivimage}>
          <Image
            src={"/Images/AIservicemanagement/screens1.webp"}
            alt={"Image"}
            width={"0"}
            height={"0"}
            sizes={"100vw"}
            style={{ width: "100%", height: "100%" }}
          />
        </div>
      </div>

      <div className={styles.AIScreensmaindivone}>
        <div className={styles.AIScreensmaindivcontent}>
          <h3>Triage tickets faster</h3>

          <p>
            Triage tickets and ensure they are categorized and assigned to the right group faster than ever. With AI powered
            ticket field suggestions, you can speed up your first response times significantly while also improving accuracy of
            your data for better routing and reporting.
          </p>
        </div>

        <div className={styles.AIScreensmaindivimage}>
          <Image
            src={"/Images/AIservicemanagement/screens2.webp"}
            alt={"Image"}
            width={"0"}
            height={"0"}
            sizes={"100vw"}
            style={{ width: "100%", height: "100%" }}
          />
        </div>
      </div>

      <div className={styles.AIScreensmaindiv}>
        <div className={styles.AIScreensmaindivcontent}>
          <h3>Maximize agent productivity</h3>

          <p>
            Increase your agent productivity with our machine learning based recommendations. Our response suggestions feature
            can help your agents deliver quicker and accurate answers to employees, leading to a significant drop in resolution time.
          </p>
        </div>

        <div className={styles.AIScreensmaindivimage}>
          <Image
            src={"/Images/AIservicemanagement/screens3.webp"}
            alt={"Image"}
            width={"0"}
            height={"0"}
            sizes={"100vw"}
            style={{ width: "100%", height: "100%" }}
          />
        </div>
      </div>

      <div className={styles.AIScreensmaindivone}>
        <div className={styles.AIScreensmaindivcontent}>
          <h3>Stay on top of your numbers </h3>

          <p>
            Quickly see the metrics that matter to you by asking questions in simple language. No more drilling down charts;
            simply type in the data you need and let Freddy AI take care of the rest.
          </p>
        </div>
        
        <div className={styles.AIScreensmaindivimage}>
          <Image
            src={"/Images/AIservicemanagement/screens4.webp"}
            alt={"Image"}
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
