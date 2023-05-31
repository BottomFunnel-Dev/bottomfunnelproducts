import React from 'react'
import style from "./SaaSHomePageBanner.module.css";

export const SaaSHomePageBanner = () => {
  return (
    <div>
      <div className={style.SaaSHomePagebannermainbox}>
        <div className={style.SaaSHomePagebannermainboxinnertextdiv}>
          <h1>Bottom Funnel for SaaS Business</h1>
          <p>No more juggling between multiple tools to view customer data. Sales & marketing automation, predictive contact scoring, behavioral analytics, telephony, email, and chat—all, in one solution. </p>
          <button className={style.SaaSHomePagebannerbutton}>Start Your Free Trial</button>
        </div>
        <div className={style.SaaSHomePagebannerannimation}>
          <lottie-player
            src={"https://d3op2l77j7wnti.cloudfront.net/Animation/salesindustriesanimation/SaaS.json"}
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
