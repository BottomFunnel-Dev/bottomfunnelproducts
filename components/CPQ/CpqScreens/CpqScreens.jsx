import React from 'react'
import Image from 'next/image'
import styles from "./CpqScreens.module.css";

export const CpqScreens = () => {
    const data = [
        {
        img:"https://d3op2l77j7wnti.cloudfront.net/Images/cpqimage/Associate products.webp",
        hd:"Simplify inventory management within the CRM",
        hd1:"Bring your products catalog into your CRM",
        hd2:"Make product recall easier with images",
        hd3:"Associate products with deals",
        p1:"Intelligently rank your prospects based on their profile and engagement level using Contact Scoring",
        p2:"Add products image and description to help salespeople identify products easily and configure product vailidity to ensure the catalog is updated for use.",
        p3:"Add products to deals to automatically update the deal value based on selected products",
        },
        {
            img:"https://d3op2l77j7wnti.cloudfront.net/Images/cpqimage/Eliminate pricing.webp",
            hd:"Automate pricing computation with CPQ ",
            hd1:"Eliminate pricing errors",
            hd2:"Set up pricing with tax and discount values",
           hd3:"",
            p1:"Configure pricing for your product catalog with one-time billing and subscription-based pricing models. Set up pricing values in multiple currencies including the unit price and the set up fee",
            p2:"Apply a blanket sales tax percentage that will be automatically calculated for each product. Configure additional fields to capture other tax values based on your business type. set up discount rates to ensure the final quote matches the approved pricing values.",
            p3:"",
            },
            {
                img:"https://d3op2l77j7wnti.cloudfront.net/Images/cpqimage/sync document.webp",
                hd:"Generate accurate documents in minutes",
                hd1:"Ensure brand consistency with document templates ",
                hd2:"Share document in a single click",
                hd3:"Sync documents with deals",
                p1:"Intelligently rank your prospects based on their profile and engagement level using Contact Scoring",
                p2:"Add products image and description to help salespeople identify products easily and configure product vailidity to ensure the catalog is updated for use.",
                p3:"Add products to deals to automatically update the deal value based on selected products",
                },
    ]
  return (
    <div>
    <div className={styles.CpqScreensmaindiv}>
    {data.map((e) => {
return (
    <div className={styles.CpqScreensmaindivinner}>
            <div className={styles.CpqScreensmaindivinnercontent}>
                <h2>
                    {e.hd}
                </h2>
                <ul>
                    <li><h4>{e.hd1}</h4></li>
                   <p>{e.p1}</p>
                    <li> <h4>{e.hd2}</h4></li>
                    <p>{e.p2}</p>
                    <li> <h4>{e.hd3}</h4></li>
                    <p>{e.p3}</p>
                </ul>
            </div>
            <div  className={styles.CpqScreensmaindivinnerimage}>
            <Image
          src={e.img}
          alt={"image"}
          width={"0"}
          height={"0"}
          sizes={"100vw"}
          style={{ width: "100%", height: "100%" }}
        />
            </div>
        </div>
)
})}

        


    </div>
    </div>
  )
}
