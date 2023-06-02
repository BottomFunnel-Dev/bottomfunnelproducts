import React from 'react'
import styles from "./DoallThis.module.css";
import Image from "next/image"

export const DoallThis = () => {
   const data = [
      {
      img:"https://d3op2l77j7wnti.cloudfront.net/Images/Travelagencysales/logo1.webp",
     
      p:"Auto-assign every potential customer to the expert agents of the destination using territories"
      },
      {
      img:"https://d3op2l77j7wnti.cloudfront.net/Images/Travelagencysales/logo2.webp",
   
      p:"Identify and talk to the most interested travelers with lead scoring"
      },
      {
      img:"https://d3op2l77j7wnti.cloudfront.net/Images/Travelagencysales/logo3.webp",
    
      p:"Filter and sort travel package deals based on pricing, probability of closing, last activity date, and more."
      },
      
      ]
  return (
    
        <div className={styles.DoallThismaindiv}>
           <h2>Do all this and more</h2>
           <div className={styles.DoallThismaindivinnerdiv}>
           {data.map((e) => {
return (
   
   <div className={styles.DoallThismaindivinnerdivcell}>
   <div className={styles.DoallThismaindivimage}>
   <Image
           src={e.img}
           alt={"img"}
           width={"0"}
           height={"0"}
           sizes={"100vw"}
           style={{ width: "100%", height: "100%" }}

       />
   </div>
   <h6>{e.p}</h6>
</div>

)
})}


           </div>
    </div>
  )
}
