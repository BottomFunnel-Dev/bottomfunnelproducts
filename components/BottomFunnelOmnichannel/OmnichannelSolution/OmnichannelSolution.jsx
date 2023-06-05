import React from 'react'
import styles from "./OmnichannelSolution.module.css"
import Image from 'next/image'

export const OmnichannelSolution = () => {
  const data = [
    {
    img:"https://d3op2l77j7wnti.cloudfront.net/Images/Bottomfunnelomnichannelphotos/logo1.webp",
    hd:"Delight customers effortlessly",
    p:"Simplify every experience and put customers back in control by offering the support they expect, in their channel of choice.",
    },
    {
    img:"https://d3op2l77j7wnti.cloudfront.net/Images/Bottomfunnelomnichannelphotos/logo2.webp",
    hd:"Make every agent a customer champion",
    p:"Give agents more context and automation to proactively understand customer needs and offer the next-best-action."
    },
    {
    img:"https://d3op2l77j7wnti.cloudfront.net/Images/Bottomfunnelomnichannelphotos/logo3.webp",
    hd:"Skyrocket the speed of service",
    p:"Achieve speed in delivering remarkable customer service. Our customers realize service productivity gains in under 3 months, and innovate faster with the NEO platform."
    },
    
    ]
  return (
    <div className={styles.OmnichannelSolutionmaindiv}>
        <div  className={styles.OmnichannelSolutionheading} >
            <h2>
            Explore why Bottom Funnel Omnichannel Suite is the Most Complete Support Solution with the Fastest Time-to-Value.
            </h2>
            <h5>Reimagine more meaningful conversations and turn service agents into customer champions. Launch customer and employee delight in under 3 months!</h5>
        </div>
        <div className={styles.OmnichannelSolutioncardsmaindiv}>
        {data.map((e) => {
return (
  <div className={styles.OmnichannelSolutioncards}>
                <h5>{e.hd}</h5>
                <div className={styles.OmnichannelSolutionimage}>
                <Image
                  src={e.img}
                  alt={"Image"}
                  width={"0"}
                  height={"0"}
                  sizes={"100vw"}
                  style={{ width: "100%", height: "100%" }}
                />
                </div>
     <p>{e.p}</p>      
      </div>

)
})}
            
          
        </div>
    </div>
  )
}
