import React from 'react'
import styles from "./ManufacturingCrm.module.css";
import Image from 'next/image';

export const ManufacturingCrm = () => {
 const features=[
  {
    img:"https://d3op2l77j7wnti.cloudfront.net/Images/Manufacturing/tap 1.png",
    hd:"Easy to Use",
    par:"Boosts productivity by giving sales teams a head start with ready-to-use templates and powerful automation to streamline processes, save time, and eliminate manual effort.",
  },
  {
    img:"https://d3op2l77j7wnti.cloudfront.net/Images/Manufacturing/ai 1.png",
    hd:"Powered by AI",
    par:"Multi-purpose AI-powered assistant Freddy offers actionable insights on promising deals and recommends the next best actions that enable smart decision-making. This helps sell faster and better. ",
  },
  {
    img:"https://d3op2l77j7wnti.cloudfront.net/Images/Manufacturing/growth 1.png",
    hd:"Scalable",
    par:"With the pay as you grow plan, you only pay for features that you would use. This makes it perfect for small businesses, as well as mid-market or enterprise organizations."
  }
 ];
 return(
  <div>
  <div className={styles.ManufacturingCrmmaindiv}>
    <h2>CRM FOR MANUFACTURING</h2>
    <p>Any product you see has been manufactured somewhere in the world. There is a complex yet magical process involved in transforming mere raw material into unique products. But post that, we know getting the manufactured product into the consumer’s hands is a tedious process.
 Between a long chain of distributors/retailers and complex sales cycles, you and your sales and marketing teams must understand the distributors’ and consumer requirements, forecast demand accurately, and manufacture products accordingly. </p>
        <p>With the extensive tools and consumer data available today, this is very much possible. But the problem arises when this data is fragmented across different systems, even when using ERP systems. This is usually because different teams use various tools, causing internal data silos, low adoption rates, unorganized data, etc. </p>
        <p>Ultimately, it doesn’t give you the clarity needed for smart decision-making and results in a disconnected customer experience. In such a scenario, what is the best way for manufacturers to include customer-centricity in every aspect of their business process?
 One way is to adopt modern CRM software for the manufacturing industry.</p>
  </div>

<div className={styles.ManufacturingCrmmaindivinner}>
<h2>Why Bottom funnel is Well-Suited for Manufacturers</h2>
<div className={styles.ManufacturingCrmmaindivrowbox}>
{features.map((item) => {
        return (   
          <div className={styles.ManufacturingCrmmaindivrowboxdiv}>
          <div className={styles.ManufacturingCrmmaindivrowboxdivimage}>
            <Image
              src={item.img}
              alt={"img"}
              width={"0"}
              height={"0"}
              sizes={"100vw"}
              style={{ width: "100%", height: "100%" }}

            />
          </div>
          <h5>{item.hd}</h5>
          <p>{item.par}</p>
        </div>
        )})}
        </div>
</div>
</div>
 )

}
