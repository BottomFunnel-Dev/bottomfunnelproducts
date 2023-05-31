import React from 'react';
import style from "./LogisticSalesBanner.module.css";
// import Image from 'next/image';



export const LogisticSalesBanner = () => {
  return (


    <div>
      <div className={style.LogisticSalesbannermainbox}>
        <div className={style.LogisticSalesbannermainboxinnertextdiv}>
          <h1>CRM for Logistics</h1>
          <p>Improve speed, time, and quality of customer service with a  frist-rate CRM for Logistics </p>
          <button className={style.LogisticSalesbannerbutton}>Start Your Free Trial</button>
        </div>

        <div className={style.LogisticSalesbannerannimation}>
          <lottie-player
            src={"https://d3op2l77j7wnti.cloudfront.net/Animation/salesindustriesanimation/Logistics.json"}
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
