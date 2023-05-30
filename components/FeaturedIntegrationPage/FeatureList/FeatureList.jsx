import React from 'react'
import style from "./FeatureList.module.css"
export const FeatureList = () => {
  return (
    <div className={style.FeatureListMain}>
        <div className={style.FeatureListimg}>
            <img src="https://d3op2l77j7wnti.cloudfront.net/Images/featuredintegration/integrationfooterimage/Group 1000006015.png" alt=''/>
        </div>
        <div className={style.FeatureListcontain}>
            <h2>Get the complete Supportdesk feature list</h2>
            <p>The complete feature list includes all features available in supportdesk, a brief description of each feature and its plan information</p>
            <button>Get It Now</button>
        </div>

    </div>
  )
}
