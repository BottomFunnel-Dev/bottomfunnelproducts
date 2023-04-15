import React from 'react';
import styles from "./ResourcescasestudiesStories.module.css";
import Image from "next/image";

export const ResourcescasestudiesStories=()=>{
    const data=[
        {
            img:"/Images/ResourcesCasestudies/travelflap.png",
            pr:"Travel Flap is a New York -based privately owned leading tourism brand with over 15 years of experience in the travel and hospitality domain. The company is driven by the vision to be the world's most recognized and trusted e-com tourism companies..",   
        },
        {
          img:"/Images/ResourcesCasestudies/bflogo.webp",
          pr:"Bottom Funnel has allowed us to improve our service management across the organisation. We are now proactively able to solve issues and improve process efficiency. I am delighted with the solution and am confident in our future with it.",   
      },
      {
        img:"/Images/ResourcesCasestudies/spj.png",
        pr:"SPJ Electronic is a global market leader in the electrical industry. SPJ Electronics offers diverse selection of consumer electrical solutions including Fans, Home appliances, Lighting and Switchgear. They are the distributor of modern appliances that are available in the market.",   
    },
    {
      img:"/Images/ResourcesCasestudies/nextHolidays.png",
      pr:"Based in the ancient land of India with its diverse cultures, the company has 14 years of experience of travel and tourism. Their ambition is to contribute towards the growth of the Indian and world travel community. Life is short and the world is wide, better get started.",   
  }
 ]

    return(
       <div className={styles.resourcescasestudiesStoriesHeader}>
        <h2>Explore handpicked customer stories</h2>
        <div className={styles.resourcescasestudiesStoriesMain}>
        {data.map((item) => {
        return(
          <div className={styles.ResourcescasestudiesStoriesFlipcard}>
        <div className={styles.ResourcescasestudiesStoriesFlipcardinner}>
          <div className={styles.ResourcescasestudiesStoriesFlipcardfront}>
                           <Image
                    src={item.img}
                    alt={"image"}
                    width={"0"}
                    height={"0"}
                    sizes={"100vw"}
                    style={{ width: "100%", height: "100%" }}
                  />
                  </div>
          <div className={styles.ResourcescasestudiesStoriesFlipcardback}>
          <p>{item.pr}</p>
            </div>        
        </div>
       </div>
       )})}
      </div>
       </div>      
    );
};