import React from 'react'
import style from "./FinanceHomePageBanner.module.css";

export const FinanceHomePageBanner = () => {
  return (
    <div>
                  <div className={style.FinanceHomebannermainbox}>
    <div className={style.FinanceHomebannermainboxinnertextdiv}>
    <h1>CRM for Finance</h1>
    <p>Improve speed, time, and quality of customer service with a  frist-rate CRM for Finances </p>
    <button className={style.FinanceHomebannerbutton}>Start Your Free Trial</button>
    </div>
    <div className={style.FinanceHomebannerannimation}>
     <lottie-player
                  src={"https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Animation/salesindustriesanimation/Finance.json"}
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
