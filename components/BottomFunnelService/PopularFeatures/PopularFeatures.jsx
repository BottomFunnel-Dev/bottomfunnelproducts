import React from 'react'
import Image from 'next/image'
import styles from "./PopularFeatures.module.css"


export const PopularFeatures = () => {
  const data = [
    {
    img:"https://d3op2l77j7wnti.cloudfront.net/Images/bottomfunnelservicephotos/customer-service (1).webp",
    hd:"Help Desk & Ticketing",
    p:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum dolor sapiente rerum debitis cupiditate modi natus iste delectus ex eius vitae suscipit vel, impedit a, fugiat voluptatem, quis voluptates repellendus.",
    },
    {
    img:"https://d3op2l77j7wnti.cloudfront.net/Images/bottomfunnelservicephotos/customer-service (2).webp",
    hd:"Help Desk & Ticketing",
    p:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum dolor sapiente rerum debitis cupiditate modi natus iste delectus ex eius vitae suscipit vel, impedit a, fugiat voluptatem, quis voluptates repellendus.",
   },
    {
    img:"https://d3op2l77j7wnti.cloudfront.net/Images/bottomfunnelservicephotos/project-management.webp",
    hd:"Help Desk & Ticketing",
    p:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum dolor sapiente rerum debitis cupiditate modi natus iste delectus ex eius vitae suscipit vel, impedit a, fugiat voluptatem, quis voluptates repellendus.",
    },
    
    ]
  return (
    <div>
      <div className= {styles.PopularFeaturesmaindiv}>
      <h2> POPULAR FEATURES:</h2> 
      <div className= {styles.PopularFeatureinnerdiv}>
      {data.map((e) => {
return (
  <div className= {styles.PopularFeatureinnerbox}>
      <div className= {styles.PopularFeatureimagebox}>
      <Image
src={e.img}
alt={"image"}
width={"0"}
height={"0"}
sizes={"100vw"}
style={{ width: "100%", height: "100%" }}
/>
      </div>
      <div>
      <h3>{e.hd}</h3>
      <p>{e.p}</p>
      </div>
  </div>

 
)
})}
</div>
       
      </div>
    </div>
  )
}
