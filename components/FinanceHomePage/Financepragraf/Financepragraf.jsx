import React from 'react'
import Image from 'next/image'
import style from "./Financepragraf.module.css";

export const Financepragraf = () => {
  return (
    <div className={style.Financepragrafmaindiv} >
      <div className={style.Financepragrafinnerdiv}>
        <p>
        Customers today are comparing the quality of support they receive from other businesses with the quality of support they receive from banks. As a result, customer experience has become imminent for financial institutions across the world.

Here are some statistics—from the Forrester Banking Experience Report—that bring out the impact of positive customer experience on banking customers. Around 77% of the 110,000 customers surveyed indicated that they will stay with the financial institution if they feel valued. Furthermore, 89% of the customers indicated that they will be willing to advocate the institution if they feel respected.
        </p>
        <p>Great customer experience in financial institutions is now about how much they know their customers, and how well they are able to customize their offerings, as opposed to how much they are able to sell what they have. For example, a digital-only bank in New Zealand, instead of offering a free checking account or savings account to woo a customer, allows its customers to create buckets - like travel, rent, and so on - into which they can slot their money. That way, when they have a wishlist or a financial goal, they know how far they are from it. What the bank did here was to help their customers improve their financial situation, rather than merely selling a product to them.</p>
        </div>
    <div className={style.Financepragrafinnerdivsecond}>
      <div  className={style.Financepragrafinnerdivsecondinner}>
        <div className={style.Financepragrafinnerdivsecondimage}>
        <Image
            src={"https://d3op2l77j7wnti.cloudfront.net/Images/financesalesimage/banner (13).webp"}
            alt={"image"}
            width={"0"}
            height={"0"}
            sizes={"100vw"}
            style={{ width: "100%", height: "100%" }}

            />
        </div>
        <div><h2>Why do you need a specialized CRM for Finance?</h2>
        </div>
      </div>
      <div className={style.Financepragrafinnerdivsecondcontent}>
        <p>Well, the reasons are many. Whether you run a wealth management firm, commercial bank, corporate bank, or investment bank, a modern CRM for Finance ensures that your employees across sales, marketing, and support teams can access customer data and customer activity history seamlessly across departments. This is the first step to enhancing customer experience. Of course, a CRM software for Finance also ensures that you don’t have to juggle between multiple tools to manage the customer journey and customer data. The CRM offers everything finance teams need on one single platform.</p>
      </div>
    </div>
    
    </div>
  )
}
