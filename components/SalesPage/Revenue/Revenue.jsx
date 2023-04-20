import React from 'react'
import style from "./Revenue.module.css";
import Image from 'next/image';


export const Revenue = () => {
  return (
    <div className={ style.Revenuemaindiv}>
    <div className={style.Revenuemaindivheading}>
        <h1>How can Bottom Funnel Sales helps you accelerate revenue?</h1>
    </div>
    <div className={style.Revenuediv}>
        <div className={style.Revenueinnerdiv}>
          <h5>Close deals faster with a 360° view 
              of your customers</h5>
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
            <p>Get a complete view of your customer’s interactions to deliver personalized experiences. Leverage data to drive revenue.</p>
        </div>
       

        <div className={style.Revenueinnerdiv}>
          <h5> Improve seller effectiveness by 
streamlining  your sales process</h5>
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
            <p>Have conversations with context, automate time-consuming tasks, and spend valuable time selling and not on mundane legwork.</p>
        </div>

        <div className={style.Revenueinnerdiv}>
          <h5>Reduce IT complexity & cost with 
a comprehensive solution</h5>
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
            <p>Keep teams happy with a solution that is easy to implement, and easier to use. Increase adoption, reduce costs, and boost morale.</p>
        </div>
      
       
    </div>

    </div>
  )
}
