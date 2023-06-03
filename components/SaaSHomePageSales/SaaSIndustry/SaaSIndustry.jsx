import React from 'react'
import style from "./SaaSIndustry.module.css";


export const SaaSIndustry = () => {
  const features =[
  {
    img:"Images/SaaShomepagephotos/Generating.png",
    hd:"Improve customer acquisition",
    par:"Capture website visitor information and understand their requirements based on what they browse and present your solution to match them.",
  },
  {
    img:"Images/SaaShomepagephotos/Partnership-pana.png",
    hd:"Close more deals",
    par:" Visually track your sales pipeline, and leverage built-in AI capabilities to identify the best opportunities and forecast sales accurately. ",
  },
  {
    img:"Images/SaaShomepagephotos/CustomerSurvey-pana.png",
    hd:"Increase customer retention",
    par:" Get high visibility into your customer’s journey, provide a seamless customer experience and nurture them to improve conversion rates.",
  },
  ];
  return(
    <div>
      <div className={style.SaaSIndustrymaindiv}>
        <h1>Why Bottom Funnel Sales ideal for the  SaaS industry?</h1>
        </div>
        <div className={style.SaaSIndustryinnermaindiv}>
        {features.map((item) => {
        return (
          
          <div className={style.SaaSIndustrybox}>
            <h3>{item.hd}</h3>
            <div className={style.SaaSIndustryboximage}>
              <img src={item.img}
              />
            </div>
            <p>{item.par}</p>

          </div>
          
        )})}
        </div>
    </div>
  )
}
