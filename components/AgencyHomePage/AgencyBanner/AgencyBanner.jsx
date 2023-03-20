import React from 'react'
import style from "./AgencyBanner.module.css";

export const AgencyBanner = () => {
  return (
    <div>
               <div className={style.AgencySalesbannermainbox}>
    <div className={style.AgencySalesbannermainboxinnertextdiv}>
    <h1>CRM for Agency</h1>
    <p>Improve speed, time, and quality of customer service with a  frist-rate CRM for Agencys </p>
    <button className={style.AgencySalesbannerbutton}>Start Your Free Trial</button>
  
    </div>
    <div className={style.AgencySalesbannerannimation}>
    <lottie-player
                  src={"https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Animation/salesindustriesanimation/Agency.json"}
                  background="transparent"
                  speed="1"
                  loop
                  autoplay
                  >
            </lottie-player>
    </div>
  </div>
    </div>
  )
}
