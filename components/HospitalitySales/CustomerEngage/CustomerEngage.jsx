import React from 'react'
import styles from "./CustomerEngage.module.css";
import Image from 'next/image';

export const CustomerEngage = () => {
  return (
    <div>
        <div className={styles.CustomerEngagemainpageinner}>
        <h2>Customer engagement as the engine for growth</h2>
        <p>The hotel industry is a fast-growing sector thanks to increasing global disposable incomes. In fact, direct spending on leisure travel by domestic and international travelers totaled $792.4 billion in 2019. However, the industry is not without its challenges. Covid-19 spelled a setback for many hotels and the constant rise of hotel aggregators threatens to take away customers. Other areas of concern for hotels include changing guest expectations owing to the rising millennial population, and irregular cash flows because of unsold inventory during off-season.</p>
        <p>To rise above these challenges, you have to stay on top of mind of customers at all times. For this, hotel owners should continuously engage with their customers - providing them with tailor-made discounts and offers, besides information on new launches and expansion in new locations. These elements are absolutely key to building your loyalty program.</p>
        <p>In order to initiate a personalized engagement with your customers, you must understand your customers better than your competition. A powerful and easy-to-use hotel CRM can get prospects to think about you and deepens your relationship with them, compelling them to come back to you again and again.</p>
        </div>
        <div className={styles.CustomerEngageindustriesmain}>
       <div className={styles.CustomerEngageindustries}>
        <div className={styles.CustomerEngageindustriesinner}>
        <h2>Key challenges faced by the hotel industry </h2>
        <div className={styles.CustomerEngagelogodivmaindiv}>
        <div className={styles.CustomerEngagelogodiv}>
          <div className={styles.CustomerEngagelogodivimage}>
          <Image
                        src={"https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/hospitalitysalesphotos/customer.webp"}
                        alt={"img"}
                        width={"0"}
                        height={"0"}
                        sizes={"100vw"}
                        style={{ width: "100%", height: "100%" }}

                    />
          </div>
          <h6>Attracting prospects</h6>
        </div>
        <div className={styles.CustomerEngagelogodiv}>
          <div className={styles.CustomerEngagelogodivimage}>
          <Image
                        src={"https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/hospitalitysalesphotos/delivered.webp"}
                        alt={"img"}
                        width={"0"}
                        height={"0"}
                        sizes={"100vw"}
                        style={{ width: "100%", height: "100%" }}

                    />
          </div>
          <h6>Delivering great customer service</h6>
        </div>

        <div className={styles.CustomerEngagelogodiv}>
          <div className={styles.CustomerEngagelogodivimage}>
          <Image
                        src={"https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/hospitalitysalesphotos/Frame.webp"}
                        alt={"img"}
                        width={"0"}
                        height={"0"}
                        sizes={"100vw"}
                        style={{ width: "100%", height: "100%" }}

                    />
          </div>
          <h6>Retaining customer </h6>
        </div>

        <div className={styles.CustomerEngagelogodiv}>
          <div className={styles.CustomerEngagelogodivimage}>
          <Image
                        src={"https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/hospitalitysalesphotos/user-engagement.webp"}
                        alt={"img"}
                        width={"0"}
                        height={"0"}
                        sizes={"100vw"}
                        style={{ width: "100%", height: "100%" }}

                    />
          </div>
          <h6>Engaging prospects</h6>
        </div>
        </div>
        </div>
       </div>
       </div>
    
    </div>
  )
}
