import React from 'react'
import styles from "./Advantages.module.css"
import Image from 'next/image'

export const Advantages = () => {
  return (
    <div>
      <div className= {styles.Advantagesmaindiv}>
      <h2>The Serverless and Eventbridge Advantage</h2>
      <div className={styles.Advantagesboxdiv}>
        <div  className={styles.Advantagesinnerbox}>
          <div className={styles.Advantagesinnerboximage} >
        <Image
          src={"https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/Analyticsoffeatureimage/logo1.webp"}
          alt={"image"}
          width={"0"}
          height={"0"}
          sizes={"100vw"}
          style={{ width: "100%", height: "100%" }}
        /> 
        </div>
        <h4 className={styles.Advantagesinnerboxcontent}>Analytics for anyone </h4>
        <p>With our no-code platform, any team member can build reports $ dashboards. No queries, SQL, or training required.</p>
        </div>
        <div  className={styles.Advantagesinnerbox}>
          <div className={styles.Advantagesinnerboximage} >
        <Image
          src={"https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/Analyticsoffeatureimage/logo2.webp"}
          alt={"image"}
          width={"0"}
          height={"0"}
          sizes={"100vw"}
          style={{ width: "100%", height: "100%" }}
        /> 
        </div>
        <h4 className={styles.Advantagesinnerboxcontent}>Analytics for anyone </h4>
        <p>With our no-code platform, any team member can build reports $ dashboards. No queries, SQL, or training required.</p>
        </div>
        <div  className={styles.Advantagesinnerbox}>
          <div className={styles.Advantagesinnerboximage} >
        <Image
          src={"https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/Analyticsoffeatureimage/logo3.webp"}
          alt={"image"}
          width={"0"}
          height={"0"}
          sizes={"100vw"}
          style={{ width: "100%", height: "100%" }}
        /> 
        </div>
        <h4 className={styles.Advantagesinnerboxcontent}>Analytics for anyone </h4>
        <p>With our no-code platform, any team member can build reports $ dashboards. No queries, SQL, or training required.</p>
        </div>



      </div>
      </div>
    </div>
  )
}
