import React from 'react'
import styles from "./ServiceTools.module.css"
import Image from 'next/image'

export const ServiceTools = () => {
  const data = [
    {
    img:"https://d3op2l77j7wnti.cloudfront.net/Images/bottomfunnelservicephotos/screen1.webp",
    hd:"Deepen Customer Relationships",

    p:"Identify opportunities to deliver service with authenticity.",
    },
    {
    img:"https://d3op2l77j7wnti.cloudfront.net/Images/bottomfunnelservicephotos/screens2.webp",
    hd:"Deepen Customer Relationships",

    p:"Identify opportunities to deliver service with authenticity.",
    },
    {
    img:"https://d3op2l77j7wnti.cloudfront.net/Images/bottomfunnelservicephotos/screens3.webp",
    hd:"Deepen Customer Relationships",

    p:"Identify opportunities to deliver service with authenticity.",
    },
    
    ]
  return (
    <div className={styles.ServiceToolsmaindiv}>
        <h2>The Service Tools You Need to Put Customers First</h2>
      <div className={styles.ServiceToolsmaindivinner}>
      {data.map((e) => {
return (
  <div className={styles.ServiceToolsbox}>
        <div className={styles.ServiceToolsimagebox}>
           
            <Image
          src={e.img}
          alt={"image"}
          width={"0"}
          height={"0"}
          sizes={"100vw"}
          style={{ width: "100%", height: "100%" }}
        />
           
        </div>
        <div className={styles.ServiceToolsboxcontent}>
            <div className={styles.ServiceToolsboxcontentinnerdiv}>
                <h3>{e.hd}</h3>
                <p>{e.p}</p>
            </div>
        </div>


       </div>
)
})}

       




    </div>
    </div>
  )
}
