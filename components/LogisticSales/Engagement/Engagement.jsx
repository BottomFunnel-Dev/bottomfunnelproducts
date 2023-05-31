import React from 'react'
import style from "./Engagement.module.css";
import Image from 'next/image';


export const Engagement = () => {
  return (
    <div>
      <div className={style.Engagementmaindiv}>
        <div className={style.Engagementmaindivimage}>
          <Image
            src={"/Images/Logisticsalesphotos/engage.png"}
            alt={"img"}
            width={"0"}
            height={"0"}
            sizes={"100vw"}
            style={{ width: "100%", height: "100%" }}

          />

        </div>
        <div className={style.Engagementmaindivcontent}>
          <h3>Improve customer engagement. Enhance the quality of customer interactions. Close more deals. Choose Bottom funnel sales. </h3>
        </div>
      </div>
    </div>
  )
}
