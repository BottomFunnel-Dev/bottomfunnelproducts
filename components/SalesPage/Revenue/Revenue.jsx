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
            <div className={style.Revenueinnerdivimage}>
            <Image
          src={"/Images/SalesPagePhotos/view1.webp"}
          alt={"/Images/SalesPagePhotos/view1.webp"}
          width={"0"}
          height={"0"}
          sizes={"100vw"}
          style={{ width: "100%", height: "100%" }}
        />
                {/* <img src="/Images/SalesPagePhotos/view1.png" alt="logo" /> */}
            </div>
            <h5>Improve seller effectiveness by streamlining your sales process</h5>
        </div>

        {/* <div className=Revenue-innerdiv>
            <div>
                <img src="/Images/SalesPagePhotos/360view.png" alt="logo" />
            </div>
            <p>Close deals faster with a  360° view of customers </p>
        </div> */}
        <div className={style.Revenueinnerdiv}>
            <div className={style.Revenueinnerdivimage}>
            <Image
          src={"/Images/SalesPagePhotos/360view.webp"}
          alt={"/Images/SalesPagePhotos/360view.webp"}
          width={"0"}
          height={"0"}
          sizes={"100vw"}
          style={{ width: "100%", height: "100%" }}
        />
                {/* <img src="/Images/SalesPagePhotos/360view.png" alt="logo" /> */}
            </div>
            <h5> Close deals faster with a  360° view of customers </h5>
        </div>

        <div className={style.Revenueinnerdiv}>
            <div className={style.Revenueinnerdivimage}>
            <Image
          src={"/Images/SalesPagePhotos/view.webp"}
          alt={"/Images/SalesPagePhotos/view.webp"}
          width={"0"}
          height={"0"}
          sizes={"100vw"}
          style={{ width: "100%", height: "100%" }}
        />
                {/* <img src="/Images/SalesPagePhotos/view.png" alt="logo" /> */}
            </div>
            <h5>Reduce IT Complexity & cost with a comprehensive solution</h5>
        </div>
    </div>

    </div>
  )
}
