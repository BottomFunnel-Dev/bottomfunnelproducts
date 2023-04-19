import React from "react";
import Image from "next/image";
import styles from "./FormulaFieldsCTA.module.css";

export default function FormulaFieldsCTA() {
  return (
   
        <div className={styles.FormulaFieldsCTAtwodiv}>
         
          <div className={styles.FormulaFieldsCTAtwoMain}>
             <div className={styles.FormulaFieldsCTALogo}>
          <div className={styles.FormulaFieldsCTALogoImage}>
          <Image
              src={"/Images/FormulaFields/bottomfunnels suite.png"}
              alt={"image"}
              width={"0"}
              height={"0"}
              sizes={"100vw"}
              style={{ width: "100%", height: "100%" }}
            /></div>
            <p style={{fontSize:"20px"}}>Bottom Funnel Suite</p>
          </div>
            <Image
              src={"/Images/SalesfooterMobileApp/cte2.png"}
              alt={"image"}
              width={"0"}
              height={"0"}
              sizes={"100vw"}
              style={{ width: "100%", height: "100%" }}
            />
          </div>
          <div className={styles.FormulaFieldsCTAtwoheading}>
            <h2>
              Grow your business with a 360° CRM
            </h2>
            <button className={styles.FormulaFieldsCTAtwodemo}>
              Explore Bottom Funnel suite
            </button>
          </div>
        </div>
    
   
  );
}
