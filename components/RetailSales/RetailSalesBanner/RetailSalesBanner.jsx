import React from 'react'
import style from "./RetailSalesBanner.module.css";

export const RetailSalesBanner = () => {
  return (
    <div>
      <div className={style.RetailSalesBannermainbox}>
        <div className={style.RetailSalesBannermainboxinnertextdiv}>
          <h1>CRM for Retail</h1>
          <p> Provide a premium in-store experience with our modern CRM for retailers </p>
          <button className={style.RetailSalesBannerbutton}>Start Your Free Trial</button>
        </div>

        <div className={style.RetailSalesBannerannimation}>
          <lottie-player
            src={"https://d3op2l77j7wnti.cloudfront.net/Animation/salesindustriesanimation/Retail.json"}
            background="transparent"
            speed="1"
            loop
            autoplay
          >
          </lottie-player>
        </div>
      </div>
    </div>
  );
};
