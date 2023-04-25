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
        <h4 className={styles.Advantagesinnerboxcontent}>Analytics for efficiency:</h4>
        <p>Our no-code analytics platform is designed to help businesses simplify their data analysis processes without the need for extensive technical knowledge or coding expertise. </p>
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
        <h4 className={styles.Advantagesinnerboxcontent}>Analytics for decision-making:</h4>
        <p>Our no-code analytics platform can be a game changer for businesses looking to make data-driven decisions.</p>
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
        <h4 className={styles.Advantagesinnerboxcontent}>Analytics for User Experience:</h4>
        <p>With our platform, you can easily track user behavior, such as clicks and pageviews, and gain insights into how users interact with your site.</p>
        </div>



      </div>
      </div>
    </div>
  )
}
