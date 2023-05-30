import React from 'react'
import style from "./IntegrationBanner.module.css";

export const IntegrationBanner = () => {
  return (
    <div className={style.IntegrationBannermain}>
        <div className={style.IntegrationBannerAnimation}>
          <lottie-player
                  src={"https://d3op2l77j7wnti.cloudfront.net/Animation/Integration/one.json"}
                  background="transparent"
                  speed="1"
                  loop
                  autoplay
                  >
          </lottie-player>
        </div>
        <div className={style.IntegrationBannercontain}>
            <h1>Bottom funnel Support Desk integrations</h1>
            <hr></hr>
            <p>Connect tools that you already use with your Bottom funnel desk account </p>
            <button className={style.IntegrationbannerButton}>Get Started</button>
        </div>
    </div>
  )
}
