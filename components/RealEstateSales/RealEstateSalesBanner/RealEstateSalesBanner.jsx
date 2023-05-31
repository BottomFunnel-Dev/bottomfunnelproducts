import React from 'react'
import style from "./RealEstateSalesBanner.module.css";

export const RealEstateSalesBanner = () => {
  return (
    <div>
      <div className={style.RealEstateSalesbannermainbox}>
        <div className={style.RealEstateSalesbannermainboxinnertextdiv}>
          <h1>Real Estate CRM</h1>

          <p>
            Understand your clients end-to-end, and deliver a smooth customer experience with Bottom Funnel Sales, a real estate
            CRM that actually works.
          </p>
          
          <button className={style.RealEstateSalesbannerbutton}>Start Your Free Trial</button>
        </div>

        <div className={style.RealEstateSalesbannermainboxannimation}>
          <lottie-player
            src={"https://d3op2l77j7wnti.cloudfront.net/Animation/salesindustriesanimation/Agency.json"}
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
