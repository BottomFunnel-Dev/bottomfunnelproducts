import React from 'react'
// import './InsuranceSalesBanner.css'
import style from "./InsuranceSalesBanner.module.css";

export const InsuranceSalesBanner = () => {
  return (
    <div>
          <div className={style.InsuranceSalesbannermainbox}>
    <div className={style.InsuranceSalesbannermainboxinnertextdiv}>
    <h1>CRM for Insurance</h1>
    <p>Save time, build loyal customers, and stand out in your business with an insurance CRM software. </p>
    <button className={style.InsuranceSalesbannerbutton}>Start Your Free Trial</button>
    </div>
    <div className={style.InsuranceSalesbannerannimation}>
     <lottie-player
                  src={"/Animation/salesindustriesanimation/Insurance.json"}
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
