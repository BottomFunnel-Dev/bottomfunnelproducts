import React from 'react'
import styles from "./SuiteBusiness.module.css"
import Image from 'next/image'

export default function SuiteBusiness () {
    const businessdata = [
        {
          title:"Nurture relationship and grow revenue with a single customer view",
          image:"https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/SuitePage/icons/human-resources 1.webp"
        },   
        {
          title:"Close deals faster by sending the right message at the right time",
          image:"https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/SuitePage/icons/handshake 1.webp"
        }, 
        {
          title:"Reduce IT complexity & cost with a comprehenshive Solution",
          image:"https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/SuitePage/icons/minimize 1.webp"
        }, 
      
        
    ]
  return (
    <div className={styles.SuiteBusinessMain}>
        <h1>How Can Bottom Funnel Sales Suite help you Grow your Business ?</h1>
        <div className={styles.SuiteBusinessdiv}>
          {businessdata.map((el,idx) => {
            return(
              <div className={styles.SuiteBusinesscard}
              key={idx}>
                  <div className={styles.SuiteBusinesscardimg}>
                    <Image
                    src={el.image}
                    alt={"https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/SuitePage/icons/"}
                    width={"0"}
                    height={"0"}
                    sizes={"100vw"}
                    style={{ width: "100%", height: "100%" }}
                    />
                    </div>
                  <h5>{el.title}</h5>
              </div>
            )
          })}
            
        </div>
    </div>
  )
}
