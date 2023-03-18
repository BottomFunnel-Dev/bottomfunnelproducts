import React from 'react'
import styles from "./Businessdealhealth.module.css"
import Image from 'next/image'

export const DealBusinesshealth = () => {
  return (
    <div className={styles.dealbusinesshealthmainboxes}>
    <h1>Get a snapshot of your business health !</h1>
    <p>Visualize and track all your deals in 
    one place to gauge your business performance.
    Create new deals,Customize your pipelines,
     optimize your sales process, and win more deals.
    Let your CRM handle deal Management so your sales
     people can focus on selling.
    </p>
    
<div className={styles.dealbusinesshealthflexbox}>

<div className={styles.dealbusinesshealthleftboxes}>
<h2>Gain a bird's eye view of the deals in your pipeline</h2>
<p>Get a funnel view into your sales pipeline by quickly looking at the number of deals
you need to focus on each day.Know how much business you are likely to close in coming months,spot deals you can close faster and work in them immediately.
</p>

</div>

<div className={styles.dealbusinesshealthrighttboxes}>

<Image
          src={"https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/Deal management/Screens/ha/deals in pipeline.webp"}
          alt={"images"}
          width={"0"}
          height={"0"}
          sizes={"100vw"}
          style={{ width: "100%", height: "100%", objectFit:"contain" , padding:"20px"}}
        />



</div>


</div>


    </div>
  )
}
