import React from 'react'
import Image from 'next/image'
import styles from "./CpqScreens.module.css";

export const CpqScreens = () => {
  return (
    <div>
    <div className={styles.CpqScreensmaindiv}>
        <div className={styles.CpqScreensmaindivinner}>
            <div className={styles.CpqScreensmaindivinnercontent}>
                <h2>
                    Simplify inventory management within the CRM
                </h2>
                <ul>
                    <li><h4>Bring your products catalog into your CRM </h4></li>
                    <p>Intelligently rank your prospects based on their profile and engagement level using Contact Scoring</p>
                    <li> <h4>Make product recall easier with images </h4></li>
                    <p>
                        Add products image and description to help salespeople identify products easily and configure product vailidity to ensure the catalog is updated for use.
                    </p>
                    <li> <h4>Associate products with deals</h4></li>
                    <p>
                        Add products to deals to automatically update the deal value based on selected products
                    </p>
                </ul>
            </div>
            <div  className={styles.CpqScreensmaindivinnerimage}>
            <Image
          src={"https://d3op2l77j7wnti.cloudfront.net/Images/cpqimage/Associate products.webp"}
          alt={"image"}
          width={"0"}
          height={"0"}
          sizes={"100vw"}
          style={{ width: "100%", height: "100%" }}
        />
            </div>
        </div>



        <div className={styles.CpqScreensmaindivinnertwo}>
            <div className={styles.CpqScreensmaindivinnercontent}>
                <h2>
                    Automate pricing computation with CPQ
                </h2>
                <ul>
                    <li><h4>Eliminate pricing errors </h4></li>
                    <p>Configure pricing for your product catalog with one-time billing and subscription-based pricing models. Set up pricing values in multiple currencies including the unit price and the set up fee</p>
                    <li> <h4>Set up pricing with tax and discount values  </h4></li>
                    <p>
                         Apply a blanket sales tax percentage that will be automatically calculated for each product. Configure additional fields to capture other tax values based on your business type. set up discount rates to ensure the final quote matches the approved pricing values.
                    </p>
                   
                </ul>
            </div>
            <div  className={styles.CpqScreensmaindivinnerimage}>
            <Image
          src={"https://d3op2l77j7wnti.cloudfront.net/Images/cpqimage/Eliminate pricing.webp"}
          alt={"image"}
          width={"0"}
          height={"0"}
          sizes={"100vw"}
          style={{ width: "100%", height: "100%" }}
        />
            </div>
        </div>


        <div className={styles.CpqScreensmaindivinner}>
            <div className={styles.CpqScreensmaindivinnercontent}>
                <h2>
                    Generate accurate documents in minutes
                </h2>
                <ul>
                    <li><h4>Ensure brand consistency with document templates </h4></li>
                    <p>Intelligently rank your prospects based on their profile and engagement level using Contact Scoring</p>
                    <li> <h4>Share document in a single click </h4></li>
                    <p>
                        Add products image and description to help salespeople identify products easily and configure product vailidity to ensure the catalog is updated for use.
                    </p>
                    <li> <h4>Sync documents with deals</h4></li>
                    <p>
                        Add products to deals to automatically update the deal value based on selected products
                    </p>
                </ul>
            </div>
            <div  className={styles.CpqScreensmaindivinnerimage}>
            <Image
          src={"https://d3op2l77j7wnti.cloudfront.net/Images/cpqimage/sync document.webp"}
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
  )
}
