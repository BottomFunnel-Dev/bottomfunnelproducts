import React from 'react'
import style from "./Revenue.module.css";
import Image from 'next/image';


export const Revenue = () => {
  return (
    <div className={ style.Revenuemaindiv}>
    <div className={style.Revenuemaindivheading}>
        <h1>To accelerate growth and increase conversions, utilize Bottom Funnel sales to personalize engagement and shorten your sales cycle.</h1>
    </div>
    <div className={style.Revenuediv}>
        <div className={style.Revenueinnerdiv}>
          <h5>Improve your ability to reach deals faster with a 360° view of your customers.</h5>
            <div className={style.Revenueinnerdivimage}>
            <Image
          src={"/Images/SalesPagePhotos/Rectangle 4.png"}
          alt={"/Images/SalesPagePhotos/Rectangle 4.png"}
          width={"0"}
          height={"0"}
          sizes={"100vw"}
          style={{ width: "100%", height: "100%" }}
        />
            </div>
            <p>Analyze all interactions between your customers and their customized experiences to deliver personalized services.</p>
        </div>
       

        <div className={style.Revenueinnerdiv}>
          <h5> Maximize seller output by streamlining your sales process.</h5>
            <div className={style.Revenueinnerdivimage}>
            <Image
          src={"/Images/SalesPagePhotos/Rectangle 4-1.png"}
          alt={"/Images/SalesPagePhotos/Rectangle 4-1.png"}
          width={"0"}
          height={"0"}
          sizes={"100vw"}
          style={{ width: "100%", height: "100%" }}
        />
            </div>
            <p>Communicate in a relevant manner, perform tedious tasks automatically, and devote valuable resources to selling, not on routine work.</p>
        </div>

        <div className={style.Revenueinnerdiv}>
          <h5>By utilizing a comprehensive solution, IT complexity and cost can be reduced.</h5>
            <div className={style.Revenueinnerdivimage}>
            <Image
          src={"/Images/SalesPagePhotos/Rectangle 4-2.png"}
          alt={"/Images/SalesPagePhotos/Rectangle 4-2.png"}
          width={"0"}
          height={"0"}
          sizes={"100vw"}
          style={{ width: "100%", height: "100%" }}
        />
            </div>
            <p>Ensure teams are pleased with a solution that is easy to implement and use. Enable adoption, reduce costs, and boost morale.</p>
        </div>
      
       
    </div>

    </div>
  )
}
