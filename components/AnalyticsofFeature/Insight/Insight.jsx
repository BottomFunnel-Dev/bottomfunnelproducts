import React from 'react'
import styles from "./Insight.module.css"
import Image from 'next/image'

export const Insight = () => {
  const insight = [
    {
      img:"https://d3op2l77j7wnti.cloudfront.net/Images/Analyticsoffeatureimage/screen1.webp",
      hd:"Data visualization",
      par:"Gain valuable insights and make informed decisions by presenting complex data sets in an easy-to-understand visual format such as charts or graphs. It becomes easier to identify patterns and trends that may not be immediately apparent in the raw data. Additionally, data visualization will also help you to communicate findings effectively to stakeholders and team members who may not have the same level of technical expertise."
    },
    {
      img:"https://d3op2l77j7wnti.cloudfront.net/Images/Analyticsoffeatureimage/screen2.webp",
      hd:"Data Exploration ",
      par:" Examine the large datasets and identify patterns, trends, and anomalies. Analysts can gain a deeper understanding of their data and make informed decisions based on their findings. Through data exploration, analysts can also identify areas for further investigation, which can help drive innovation and improve business outcomes. Additionally, data exploration can be used to identify potential areas of risk or concern, allowing companies to take proactive measures to mitigate these risks."
    },
    {
      img:"https://d3op2l77j7wnti.cloudfront.net/Images/Analyticsoffeatureimage/screen3.webp",
      hd:"Statistical Analysis",
      par:"Use statistical techniques to identify patterns and trends in large sets of data, which can provide valuable insights for businesses and organizations. With statistical analysis, analysts can determine the probability of certain outcomes and make informed decisions based on the data. This can be particularly useful in industries such as finance, where accurate predictions are crucial for success. Additionally, statistical analysis allows businesses to track their performance over time and make adjustments as needed to improve their operations."
    },
    {
      img:"https://d3op2l77j7wnti.cloudfront.net/Images/Analyticsoffeatureimage/screen4.webp",
      hd:"Machine learning",
      par:"Machine learning is one of the most important features of data analytics. With the ability to learn from data and make predictions based on that learning, machine learning algorithms can help businesses uncover valuable insights that would be difficult or impossible to find using traditional data analysis methods. By leveraging machine learning, businesses can automate complex processes, improve decision-making capabilities, and gain a competitive advantage in their industry."
    },
  ];
  return (
    <div>
      {insight.map((items) =>{
        return(
        <div className={styles.Insightmaindiv}>
            <h2>Rich functionality designed to assist in business research.</h2>

            <div className={styles.Insightinnerdiv}>
                <div className={styles.Insightinnerdivbox}>
                  <div className={styles.Insightinnerdivboxcontent}>
                    <h4>{items.hd}</h4>
                    <p>{items.par}</p>
                  </div>
                  <div className={styles.Insightinnerdivimagebox}>
                    <div className={styles.Insightinnerdivimage}>
                  <Image
          src={items.img}
          alt={"image"}
          width={"0"}
          height={"0"}
          sizes={"100vw"}
          style={{ width: "100%", height: "100%" }}
        />
        </div>
                  </div>
                </div>
            </div>
        </div>
        );
         })}
    </div>
  )
}
