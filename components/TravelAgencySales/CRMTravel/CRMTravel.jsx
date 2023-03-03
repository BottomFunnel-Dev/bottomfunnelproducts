import React from 'react'
import styles from "./CRMTravel.module.css";
import Image from "next/image"

export const CRMTravel = () => {
  return (
    <div>
<div   className={styles.CRMTravelmaindiv}>
       <div className={styles.CRMTravelmaindivimage}>
       <Image
                        src={"/Images/Travelagencysales/crmt.webp"}
                        alt={"img"}
                        width={"0"}
                        height={"0"}
                        sizes={"100vw"}
                        style={{ width: "100%", height: "100%" }}

                    />
       </div>
       <div className={styles.CRMTravelmaindivcontent}>
        <h1>Why your travel agency needs a CRM?</h1>
        <p>As a travel agency, you want to provide more than just a happy holiday. You want to curate magical experiences at exotic locations for each of your travelers and ultimately keep them coming back for more. But this aspiration comes with challenges that must be tackled before you can fulfill it. </p>
        <p>While it’s a fast-growing industry, travel is very seasonal. So, capitalizing the trend and keeping travelers awed all year-round is vital to stay ahead of the cut-throat competition. And then there are multiple other challenges such as the rise of travel aggregators and the changing expectations of travelers—especially the well-informed millennials. In this backdrop, you must build a credible online presence to keep your business from dwindling.</p>
        <p>To fly above this dark cloud of challenges, you need to stay on top of your customers’ minds by</p>
        <ul>
            <li>Engaging with them in meaningful conversations</li>
            <li>Providing tailor-made travel packages </li>
            <li>Offering jaw-dropping discounts</li>
            <li>Introducing loyalty programs.  </li>
        </ul>
        <p>In order to achieve the above, you need to know your customers—and know them better than your competition. Adopting the right tools and technology, such as a good travel agency CRM, can help you attract leads into your system, and gain intricate details about them. An ideal CRM for travel agents would not just help you make a sale, but also build good relationships that would bring travelers back to you.</p>

       </div>
        
    </div>
    </div>
  )
}
