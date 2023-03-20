import React from "react";
import style from "./SalesPageBanner.module.css";
import Image from "next/image";

export const SalesPageBanner = () => {
  return (
    <div>
      <div className={style.SalesPageBannermainbox}>
        <div className={style.SalesPageBannermainboximage}>
       
             <lottie-player
                  src={"https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Animation/saleshomepage/sales.json"}
                  background="transparent"
                  speed="1"
                  loop
                  autoplay
                  >
            </lottie-player>
        </div>
        <div className={style.SalesPageBannermainboxinnertextdiv}>
          <h1>Accelerate your revenue with context-driven sales </h1>
          <p>
            Personalize engagement, shorten your sales cycle, and grow your
            business with Bottom Funnel sales.
          </p>
          <div className={style.SalesPageBannerbuttonbox}>
            <button className={style.SalesPageBannerbutton}>SIGN UP </button>
            <button className={style.SalesPageBannerbutton1}>
              VIEW PRICING
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
