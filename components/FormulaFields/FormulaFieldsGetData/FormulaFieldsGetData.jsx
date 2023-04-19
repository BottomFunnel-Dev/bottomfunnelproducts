import React from "react";
import Image from "next/image";
import styles from "./FormulaFieldsGetData.module.css";
export default function FormulaFieldsGetData() {
  const cards = [
    {
      img: "/Images/FormulaFields/icon-1.png",
      hd: "Determine deal sizes",
      par: "Compute and categorize deal sizes based on their values with extensive operators and functions.",
    },
    {
      img: "/Images/FormulaFields/icon-2.png",
      hd: "Calculate commissions",
      par: "Figure out commissions based on your sales reps’ deal sizes and gain better insights on their performance.",
    },
    {
      img: "/Images/FormulaFields/icon-3.png",
      hd: "Track expenses",
      par: "Track mileage or any other expenses that you incur while traveling offsite to customer locations.",
    },
    {
      img: "/Images/FormulaFields/icon-4.png",
      hd: "Identify payment due dates",
      par: "Identify when payments are due and automate your sales process to send reminders.",
    },
    {
      img: "/Images/FormulaFields/icon-5.png",
      hd: "Generate discounts",
      par: "Calculate discounts on deals as promised to your customers with formula fields and add them to invoices.",
    },
    {
      img: "/Images/FormulaFields/icon-6.png",
      hd: "Compute taxes",
      par: "Determine taxes to be added to the deals based on different geographies to reflect accurate deal value in reports.",
    },
  ];
  return (
    <div className={styles.FormulaFieldsGetDataMain}>
      <div className={styles.FormulaFieldsGetDataHeader}>
        <h2>
         
          Get all the data that you need within your CRM
        </h2>
        <p>
          Formula Fields help solve complicated calculations with code-free
          automation. You can compute data faster without having to frequently
          reach out for a calculator or perform complex mental calculations and
          risk erroneous results while saving time to do other important tasks.
        </p>
      </div>

      <div className={styles.FormulaFieldsGetDataDivtwo}>
      {cards.map((item) => {
        return (
          <div className={styles.FormulaFieldsGetDataInnerBox}>
             <div className={styles.FormulaFieldsimages}>
                <Image
                  src={item.img}
                  alt={"image"}
                  width={"0"}
                  height={"0"}
                  sizes={"100vw"}
                  style={{ width: "100%", height: "100%" }}
                />
              </div>
            <div className={styles.FormulaFieldsInnerdiv}>
             
              <div className={styles.FormulaFieldsContent}>
                <h3>{item.hd}</h3>
                <p>{item.par}</p>
              </div>
              <div />
            </div>
          </div>
        );
      })}
      </div>
    </div>
  );
}
