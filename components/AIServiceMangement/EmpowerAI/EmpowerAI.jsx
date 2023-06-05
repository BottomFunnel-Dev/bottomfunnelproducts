import React from 'react'
import styles from "./EmpowerAI.module.css"
import Image from 'next/image'

export const EmpowerAI = () => {
  const data = [
    {
    img:"/Images/AIservicemanagement/image 9.webp",
    hd:"Increase IT NPS",
    p:"Enable self-service on any channel. Quickly get answers and insights to measure and improve customer satisfaction",
    },
    {
      img:"/Images/AIservicemanagement/image 10.webp",
      hd:"Increase agent productivity",
      p:"Ease your agent’s workload and improve their productivity by solving issues quickly at scale with machine learning based intelligent and relevant recommendations",
      },
      {
        img:"/Images/AIservicemanagement/image 11.webp",
        hd:"Decrease ticket handling time",
        p:"Reduce handling time significantly by automatically categorizing, prioritizing and routing tickets",
        },
  ]
  return (
    <div>
      <div className={styles.EmpowerAImaindivheading}>
        <h2>Empower your support teams with Freddy AI</h2>
      </div>
      <div className={styles.EmpowerAImaindiv}>
      {data.map((e) => {
return (
  <div className={styles.EmpowerAImaindivinner}>
    <div className={styles.EmpowerAImaindivimage}>
      <Image
        src={e.img}
        alt={"Image"}
        width={"0"}
        height={"0"}
        sizes={"100vw"}
        style={{ width: "100%", height: "100%" }}
      />
    </div>

    <h5>{e.hd}</h5>

    <p>
    {e.p}    </p>
  </div>

)
})}
</div>

     
    </div>
  );
};
