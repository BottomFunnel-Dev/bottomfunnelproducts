import React from "react";
import style from "./SalesPageBanner.module.css";
import Image from "next/image";

export const SalesPageBanner = () => {
  return (
    <div>
      <div className={style.SalesPageBannermainbox}>
        <div className={style.SalesPageBannermainboximage}>
          <lottie-player
            src={
              "https://d3op2l77j7wnti.cloudfront.net/Animation/saleshomepage/Sales.json"
            }
            background="transparent"
            speed="1"
            loop
            autoplay
          ></lottie-player>
        </div>
        <div className={style.SalesPageBannermainboxinnertextdiv}>
          <h1>Generate additional revenue through sales that are based on context.</h1>
          <p>
          To accelerate growth and increase conversions, utilize Bottom Funnel sales to personalize engagement and shorten your sales cycle.
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
