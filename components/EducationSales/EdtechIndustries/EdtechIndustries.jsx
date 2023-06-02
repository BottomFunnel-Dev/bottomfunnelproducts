import React from 'react'
import styles from "./EdtechIndustries.module.css";
import Image from "next/image"

export const EdtechIndustries = () => {
  const data = [
    {
    img:"https://d3op2l77j7wnti.cloudfront.net/Images/Educationsales/banner (8).webp",
    hd:"Ramp up student engagement",
   
    },
    {
    img:"https://d3op2l77j7wnti.cloudfront.net/Images/Educationsales/banner (12).webp",
    hd:"Collaborate across deffrent teams with ease",
  
    },
    {
      img:"https://d3op2l77j7wnti.cloudfront.net/Images/Educationsales/banner (9).webp",
      hd:"Track deal progress synamically",
     
      },
      {
      img:"https://d3op2l77j7wnti.cloudfront.net/Images/Educationsales/banner (13).webp",
      hd:"Boost enrolment rate",
    
      },
   
    
    ]
  return (
    <div>
        <div className={styles.EdtechIndustriesmaindiv}>
           <h2>Why Bottom Funnel Sales is ideal for the Edtech industry</h2>
           <div className={styles.EdtechIndustriesmaindivinnerdiv}>
           {data.map((e) => {
return (
             <div className={styles.EdtechIndustriesmaindivinnerdivcell}>
                <div className={styles.EdtechIndustriesmaindivimage}>
                <Image
                        src={e.img}
                        alt={"img"}
                        width={"0"}
                        height={"0"}
                        sizes={"100vw"}
                        style={{ width: "100%", height: "100%" }}

                    />
                </div>
                <h4>{e.hd}</h4>
             </div>
          

          )
        })}
        </div> 

           
        </div>
    </div>
  )
}
