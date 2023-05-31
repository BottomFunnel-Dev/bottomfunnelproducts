import React from 'react'
import styles from "./HealthcareCrm.module.css";
import Image from 'next/image';

export const HealthcareCrm = () => {
  return (
    <div className={styles.HealthcareCrmmaindiv}>
       <div className={styles.HealthcareCrmdiv}>
        <div className={styles.HealthcareCrmdivimage}>
        <Image
      src={"https://d3op2l77j7wnti.cloudfront.net/Images/healthcaresales/question.webp"}
      alt={"img"}
      width={"0"}
      height={"0"}
      sizes={"100vw"}
      style={{ width: "100%", height: "100%" }}

        />
        </div>
        <h2>Why medical institutions need a healthcare CRM</h2>
       </div>
       <p>When you say ‘healthcare’, you hear ‘trust’.

But a typical day in healthcare institutions is unpredictable. Doctors and nurses get pulled into emergency operations, patients do not show up for appointments, and some show up without one. While new patients walk in every day, some come in years later.</p>
<p>This means your staff has to keep track of changes in schedules, capture new information, and dig through old records to obtain medical histories. Being able to obtain all the right information at the right time without overwhelming your patients becomes a struggle, especially when the information is scattered across different software.</p>
<p>Amid this unpredictability, patience and patients are lost. Trust and loyalty, which is integral to your business, falls through the cracks.

To pull off an effective day of managing schedules and retaining restless patients, you need to adopt the right tools and technology, such as a healthcare CRM.</p>

    </div>
  )
}
