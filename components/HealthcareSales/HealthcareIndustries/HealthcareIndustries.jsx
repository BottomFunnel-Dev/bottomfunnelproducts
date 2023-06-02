import React from 'react'
import styles from "./HealthcareIndustries.module.css";
import Image from 'next/image';

export const HealthcareIndustries = () => {
  const data = [
    {
    img:"https://d3op2l77j7wnti.cloudfront.net/Images/healthcaresales/collection1.webp",
    hd:"Providing a quick view of patient and doctor data the way you want in one place",
  
    },
    {
      img:"https://d3op2l77j7wnti.cloudfront.net/Images/healthcaresales/collection2.webp",
      hd:"Giving a 360° view of a patient’s basic information and their entire medical record",
    
      }, {
        img:"https://d3op2l77j7wnti.cloudfront.net/Images/healthcaresales/collection3.webp",
        hd:"Automating daily billing activities with ease, without having to switch apps or tabs",
      
        },
    
    ]
  return (
  
      
    <div>

<div className={styles.HealthcareIndustriesmaindiv}>
           <h2>Why Bottom Funnel Sales is ideal for the Healthcare Industry</h2>
           <div className={styles.HealthcareIndustriesmaindivinnerdiv}>
           {data.map((e) => {
return (
  <div className={styles.HealthcareIndustriesmaindivinnerdivcell}>
  <div className={styles.HealthcareIndustriesmaindivimage}>
  <Image
          src={e.img}
          alt={"img"}
          width={"0"}
          height={"0"}
          sizes={"100vw"}
          style={{ width: "100%", height: "100%" }}

      />
  </div>
  <h6>{e.hd}</h6>
</div>

)
})}

            
           </div>
    </div>
    </div>
  )
}
