import React from "react";
import Image from "next/image";
import styles from "./OllyAiBanner.module.css"

export default function OllyAiBanner() {
  return (
    <div className={styles.OllyAiBanner}>
      
      {/* <Image
        src={"/Images/olly-ai/Frame 40312.png"}
        alt={"image"}
        width={"0"}
        height={"0"}
        sizes={"100vw"}
        style={{ width: "100%", height: "100%" }}
      /> */}

      <div className={styles.OllyAiHeading}>
      <div className={styles.OllyAiNeoIcon}>
      <Image
        src={"/Images/olly-ai/Neo.png"}
        alt={"image"}
        width={"0"}
        height={"0"}
        sizes={"100vw"}
        style={{ width: "100%", height: "100%" }}
      />
      <h4>Bottom Funnel Neo</h4></div>
         
        <h1>Say hi to Olly-AI !</h1>
       <p>Elevate your customer support experience, increase employee productivity, and maximize operational uptime with Olly AI, the enterprise-grade AI engine powered by Bottom Funnel Neo.</p>
      </div>
    </div>
  );
}
