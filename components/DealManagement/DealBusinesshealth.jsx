import React from 'react'
import styles from "./Businessdealhealth.module.css"
import Image from 'next/image'

export const DealBusinesshealth = () => {
  //made different components into one and mapped them
  const data = [
    {hd:"Gain a bird's eye view of the deals in your pipeline",
  p:"Get a funnel view into your sales pipeline by quickly looking at the number of deals you need to focus on each day.Know how much business you are likely to close in coming months,spot deals you can close faster and work in them immediately.",
img:"https://d3op2l77j7wnti.cloudfront.net/Images/Deal management/Screens/ha/deals in pipeline.webp"},
{hd:"Handle deal management like a pro !",
p:"Create deals automatically while converting qualified leads.Add different products to deal and easily move deals into any stage.Enable better collaboration by allowing multiple salespersons to work on the same deal and do more.",
img:"https://d3op2l77j7wnti.cloudfront.net/Images/Deal management/Screens/ha/handle deal.webp"},
{hd:"Quantify team performance with sales Goals !",
p:"Stay on track with your business objectives by setting and tracking sales goals. Set goals based on revenue or the number of deals to win for teams or individuals.Define the time range for your goals, assign to teams/geographies/products, and track your progress.Identify your growth areas, Sucessful products, or territories to focus on, and do more.",
img:"https://d3op2l77j7wnti.cloudfront.net/Images/Deal management/Screens/ha/quantifyteam.webp",},
{hd:"Track deals on the go !",
p:"Access your important deals while on the go.Filter, sort and search for deals on the same screen. With the mobile app, quickly scan through each deal ir top on it for the details. Stay up-to-date on your deals before you step into the meeting.",
img:"https://d3op2l77j7wnti.cloudfront.net/Images/Deal management/Screens/ha/Track deals on the go.webp",}
  ]
  return (
    <div className={styles.dealbusinesshealthmainboxes}>
    <h1>Get a snapshot of your business health !</h1>
    <p>Visualize and track all your deals in 
    one place to gauge your business performance.
    Create new deals,Customize your pipelines,
     optimize your sales process, and win more deals.
    Let your CRM handle deal Management so your sales
     people can focus on selling.
    </p>
   <div>{
    data.map((e) => {
      return(
<div className={styles.dealbusinesshealthflexbox}>

<div className={styles.dealbusinesshealthleftboxes}>
<h2>{e.hd}</h2>
<p>{e.p}</p>

</div>

<div className={styles.dealbusinesshealthrighttboxes}>

<Image
          src={e.img}
          alt={"images"}
          width={"0"}
          height={"0"}
          sizes={"100vw"}
          style={{ width: "100%", height: "100%", objectFit:"contain" , padding:"20px"}}
        />



</div>


</div>
      );
    })}

</div> 


    </div>
  )
}
