import React from 'react'
import styles from "./PipelineManagement.module.css"
import Image from 'next/image'

export const PipelineManagement = () => {
  return (
    <div className={styles.pipelinemanagementmainboxes}>
    <h1>What is<span> Pipeline Management 2.0</span></h1>
    <p>An ordinary sales pipeline offers basic functionalities like tracking and managing your deals but with Pipeline Management 2.0 in Freshsales,
    Visualize your entire sales process and break it down into actionable tasks.Backend by an AI-powered assistant, easily predict deal's performance, engage with your prospects,forecast revenue, and make smarter decisions to move your deals up the sales ladder.
    Get Context at a glance with the summary and overview cards on the deal landing page.
    </p>
   <div className={styles.pipelinemanagementflexbox}>
   <div className={styles.pipelinesmanagementleftbox}>
   
   <Image
          src={"/Images/Deal management/banners & background/ha/Group 1000003851.webp"}
          alt={"images"}
          width={"0"}
          height={"0"}
          sizes={"100vw"}
          style={{ width: "100%", height: "100%",objectFit:"contain" }}
        />

   <div><p>Auto-enrich your prospect's information</p>
   <p>set probability against deal stages(weighted pipeline)</p>
   <p>understand deal performance</p>
   <p>Predict deal outcomes with AI</p>
   <p>Forecast revenue from deals</p>
   </div>
   
   </div>

   <div className={styles.pipelinesmanagementrightbox}>
   <Image
   src={"/Images/Deal management/Screens/ha/handle deal.webp"}
   alt={"images"}
   width={"0"}
   height={"0"}
   sizes={"100vw"}
   style={{ width: "100%", height: "100%" }}
        />
   
   
   </div>
   
   
   </div>



    
    </div>
  )
}
