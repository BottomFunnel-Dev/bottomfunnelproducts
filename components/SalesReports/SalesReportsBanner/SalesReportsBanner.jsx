import React from 'react'
import Image from 'next/image'
import style from "./SalesReportsBanner.module.css";

export const SalesReportsBanner = () => {
  return (
    <div>
        <div className={style.SalesReportsBannermaindiv}>
            <div className={style.SalesReportsBannermaindivcontent}>
                <h1>
                    Gain action-oriented insights on sales performance with in-depth analytics
                </h1>
                <p>Analyze and forecast team performance with sales analytics and make profitable decisions</p>
                <button className={style.SalesReportsBannermaindivbutton}>Start Free Trial</button>
            </div >
            <div className={style.SalesReportsBannermaindivimage}>
                <Image
          src={"/Images/salesreportimage/banner.webp"}
          alt={"image"}
          width={"0"}
          height={"0"}
          sizes={"100vw"}
          style={{ width: "100%", height: "100%" }}
        />
        </div>
        </div>
    </div>
  )
}
