import React from "react";
import style from "./featuredintegration.module.css";
import { integrationsList } from "../../Data/FeaturedIntegration";

export const FeaturedIntegration = () => {
  return (
    <div className={style.FeaturedIntegrationMain}>
      <div className={style.FeaturedIntegrationLine}>
        <h2>Featured Integrations</h2>
      </div>
      <div className={style.integrationsDiv}>
        <p>Top integrations built by Bottom Funnel and loved by our customers</p>
        {integrationsList.map(({ img, title, para, point, btn, index }) => {
          return (
            <div key={index} className={style.FeaturedIntegrationsingle}>
              <div className={style.FeaturedIntegrationimg}>
                <img src={img.src} alt={img.alt}></img>
              </div>
              <div className={style.FeaturedIntegrationcontain}>
                <h4>{title}</h4>
                <p>{para}</p>
                <p className={style.FeaturedIntegrationcontainpar}>
                  {point.one}
                </p>
                <p className={style.FeaturedIntegrationcontainpar}>
                  {point.two}
                </p>
                <p className={style.FeaturedIntegrationcontainpar}>
                  {point.three}
                </p>
                <button>{btn}</button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
