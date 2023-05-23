import React from 'react'
import style from "./Discover.module.css";
import Image from 'next/image';

export const Discover = () => {
  return (
    <div className={style.Discovermaindiv}>
    <div className={style.Discovercontain}>
     <h2>Discover and evaluate your prospects</h2>
     <p>While a winning pitch could make or break a deal with your prospect, what’s also important is to understand their business, and gain insights into what exactly they are looking for from your agency. But, how do you gauge that? And, how do you determine whether the prospect came through a social media campaign you were running, through a referral or through your website?</p>
    <p>An advertising and media agency CRM software can enable you to gather relevant insights about your prospects through multiple means. For one, if you’ve been running campaigns on social platforms, you can use relevant integrations in your CRM to track where the lead is coming from.Secondly, if a customer has visited your website or app, you can understand their behavior and interests using event tracking, which tracks the pages your prospects visited and how they engaged with your site. Thirdly, you can also use web forms on your website to collect relevant data about your prospects or engage in live chat with them to understand their requirements better.</p>
    <p>Learn-More</p>
    
    </div>
    <div className={style.Discoverimage}>
    <Image
  src={"https://d3op2l77j7wnti.cloudfront.net/Images/Agencyhomepagephotos/Activities 01.webp"}
  alt={"image"}
  width={"0"}
  height={"0"}
  sizes={"100vw"}
  style={{ width: "100%", height: "100%" }}

  />
        {/* <img src="https://d3op2l77j7wnti.cloudfront.net/Images/Agencyhomepagephotos/Activities 01.webp" alt="image" /> */}
    </div>
    </div>
  )
}
