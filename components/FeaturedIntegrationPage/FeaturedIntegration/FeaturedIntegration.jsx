import React from 'react'
import style from "./featuredintegration.module.css"


export const FeaturedIntegration = () => {
  return (
    <div className={style.FeaturedIntegrationMain}>
        <div className={style.FeaturedIntegrationLine}>
            <p>Featured Integrations</p>
        </div>
        <div className={style.integrationsDiv}>
        {integrationsList.map(({img,title,para,btn}) =>{
            return(
                <div>
                <img src={img.src} alt={img.alt}></img>
                <h2>{title}</h2>
                <p>{para}</p>
                <button>{btn}</button>
                </div>
            );
        })}
           
        </div>
    </div>
  )
}
